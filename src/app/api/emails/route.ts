import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import NewFormSubmissionEmail from '@/email/NewFormSubmissionEmail';
import { siteConfig } from '@/lib/site';

// Instantiated lazily: constructing Resend at module scope throws when the key
// is absent, which breaks `next build` page-data collection.
let resend: Resend | null = null;
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  if (!resend) resend = new Resend(apiKey);
  return resend;
};

const FROM_ADDRESS = process.env.CONTACT_FROM_EMAIL ?? 'Contact Form <onboarding@resend.dev>';
const TO_ADDRESS = process.env.CONTACT_TO_EMAIL ?? siteConfig.inbox;

// --- rate limiting -------------------------------------------------------
// In-memory and therefore per-instance: it will not stop a distributed flood,
// but it does stop the common case of one bot hammering a single endpoint.
// Swap for Upstash/Vercel KV if this ever needs to hold across instances.
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 3 submissions per 10 minutes
const hits = new Map<string, number[]>();

// Read-only check. Deliberately split from recordSend so a visitor who
// mistypes their email three times is not locked out for ten minutes —
// only real send attempts count against the budget.
const isRateLimited = (ip: string) => {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  hits.set(ip, recent);
  return recent.length >= RATE_LIMIT;
};

const recordSend = (ip: string) => {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // opportunistic cleanup so the map cannot grow without bound
  if (hits.size > 500) {
    hits.forEach((times, key) => {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(key);
    });
  }
};

// --- validation ----------------------------------------------------------
const MAX = { name: 80, email: 254, phone: 30, service: 60, message: 4000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Payload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');

const validate = (body: Record<string, unknown>): { data?: Payload; error?: string } => {
  const data: Payload = {
    firstName: str(body.firstName),
    lastName: str(body.lastName),
    email: str(body.email),
    phone: str(body.phone),
    service: str(body.service),
    message: str(body.message),
  };

  if (!data.firstName) return { error: 'First name is required' };
  if (!data.lastName) return { error: 'Last name is required' };
  if (!data.email) return { error: 'Email is required' };
  if (!EMAIL_RE.test(data.email)) return { error: 'Please enter a valid email address' };
  if (!data.phone) return { error: 'Phone is required' };
  if (!data.service) return { error: 'Please select a service' };
  if (!data.message) return { error: 'Message is required' };

  if (data.firstName.length > MAX.name || data.lastName.length > MAX.name)
    return { error: 'Name is too long' };
  if (data.email.length > MAX.email) return { error: 'Email is too long' };
  if (data.phone.length > MAX.phone) return { error: 'Phone number is too long' };
  if (data.service.length > MAX.service) return { error: 'Invalid service' };
  if (data.message.length > MAX.message) return { error: 'Message is too long (max 4000 characters)' };

  // Header-injection guard: newlines in a field that ends up in the subject
  // or reply-to must never reach the mail transport.
  if (/[\r\n]/.test(data.email) || /[\r\n]/.test(data.firstName) || /[\r\n]/.test(data.lastName))
    return { error: 'Invalid characters in submission' };

  return { data };
};

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
      request.headers.get('x-real-ip') ??
      'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot: a hidden field no human fills in. Answer 200 so bots believe
    // they succeeded and do not retry with a different shape.
    if (str(body?.website)) {
      return NextResponse.json({ success: true });
    }

    const { data, error } = validate(body ?? {});
    if (!data) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    const client = getResend();
    if (!client) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { success: false, error: 'Email service is not configured' },
        { status: 503 }
      );
    }

    const plainTextEmail = [
      `First Name: ${data.firstName}`,
      `Last Name: ${data.lastName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Service: ${data.service}`,
      '',
      'Message:',
      data.message,
    ].join('\n');

    recordSend(ip);

    const { error: sendError } = await client.emails.send({
      from: FROM_ADDRESS,
      to: [TO_ADDRESS],
      reply_to: data.email,
      subject: `Portfolio enquiry — ${data.service} — ${data.firstName} ${data.lastName}`,
      text: plainTextEmail,
      react: NewFormSubmissionEmail(data),
    });

    if (sendError) {
      console.error('Resend rejected the message:', sendError);
      return NextResponse.json({ success: false, error: 'Error sending email' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Error sending email' }, { status: 500 });
  }
}
