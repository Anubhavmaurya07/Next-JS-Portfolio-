import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import NewFormSubmissionEmail from '@/email/NewFormSubmissionEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, service, message } = await request.json();

    const plainTextEmail = `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone: ${phone}
      Service: ${service}
      Message: ${message}
    `;

    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['anubhavmaurya8521@gmail.com'],
      subject: 'Portfolio Contact Form',
      text: plainTextEmail,
      react: NewFormSubmissionEmail({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        service: service,
        message: message
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Error sending email' }, { status: 500 });
  }
}
