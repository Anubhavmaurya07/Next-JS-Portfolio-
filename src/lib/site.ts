// The public address of the site, used for canonical URLs, OG tags (link
// previews on WhatsApp/LinkedIn) and the sitemap. Order of preference:
//   1. NEXT_PUBLIC_SITE_URL, if set in Vercel
//   2. Vercel's production domain (set automatically on every Vercel build,
//      and switches to a custom domain on its own once one is added)
//   3. the current live URL, so it can never fall back to localhost again
const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelProductionHost
    ? `https://${vercelProductionHost}`
    : "https://anubhav-portfolio-zeta.vercel.app");

// Single source of truth for site-wide identity.
export const siteConfig = {
  name: "Anubhav Maurya",
  role: "Full Stack Developer",
  description:
    "Full stack developer in Mumbai building fast business websites, portfolio sites and custom software — booking systems, CRMs and dashboards — with React, Next.js and Node.js.",
  url: siteUrl.replace(/\/$/, ""),
  // Shown on the site.
  email: "amanubhav8521@gmail.com",
  // Where contact-form submissions are delivered. Kept separate from the
  // public address because Resend's sandbox sender (onboarding@resend.dev)
  // will ONLY deliver to the address the Resend account is registered under —
  // anything else comes back 403. Once a domain is verified at
  // resend.com/domains, set CONTACT_FROM_EMAIL and point this at `email`.
  inbox: "anubhavmaurya8521@gmail.com",
  phone: "(+91) 7068220038",
  // Digits only, country code first — the format wa.me links need.
  whatsapp: "917068220038",
  location: "Mumbai, Maharashtra",
  github: "https://github.com/Anubhavmaurya07",
  linkedin: "https://www.linkedin.com/in/anubhav-maurya-663593248/",
  cv: "/Anubhav-Maurya-CV.pdf",
} as const;

// Every GitHub account whose public activity should count toward the homepage
// stats. Only `github` above is linked publicly; the rest contribute numbers
// only. Override without a redeploy via GITHUB_USERNAMES="a,b,c".
export const GITHUB_ACCOUNTS: readonly string[] = (
  process.env.GITHUB_USERNAMES?.split(",") ?? [
    "Anubhavmaurya07", // personal
    "admin-kingsgroup", // work
    "anubhavkings", // work (all repos private — contributes 0 to public counts)
  ]
)
  .map((name) => name.trim())
  .filter(Boolean);

// Opens WhatsApp with a ready-to-send first message, so a visitor only has to
// press send. Works on phones (app) and desktops (WhatsApp Web).
export const whatsappLink = (
  message = "Hi Anubhav, I saw your website and I'd like to talk about a project."
) => `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

// Homepage numbers. Written for business owners rather than developers, and
// kept here so they are easy to keep honest — every one is backed by the
// resume and projects pages.
export const shippedSystems = 5; // 4 Travkings platforms + Pixora
export const companiesWorkedWith = 4; // Travkings, Binny's, Xircls, Digilateral
export const countriesInUse = 3; // KBiz-360 runs five branches in three countries
export const technologyCount = 12; // matches the skills grid on /resume

// Start of professional experience — the first role on the CV (Digilateral
// internship, Jan 2024), so the "years of experience" figure matches the
// dates a client or recruiter can check. If there was paid work before this,
// add it to the resume and move this date back to match.
export const CAREER_START = new Date(2024, 0, 1);

export const yearsOfExperience = (from: Date = CAREER_START) => {
  const now = new Date();
  let years = now.getFullYear() - from.getFullYear();
  const monthDelta = now.getMonth() - from.getMonth();
  if (monthDelta < 0 || (monthDelta === 0 && now.getDate() < from.getDate())) years -= 1;
  return Math.max(years, 0);
};
