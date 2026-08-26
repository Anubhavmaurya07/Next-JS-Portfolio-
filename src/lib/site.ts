// Single source of truth for site-wide identity. Set NEXT_PUBLIC_SITE_URL in
// production so canonical URLs, OG tags and the sitemap point at the real host.
export const siteConfig = {
  name: "Anubhav Maurya",
  role: "Full Stack Developer",
  description:
    "Full Stack MERN Developer building scalable REST APIs and high-performance React applications with Node.js, MongoDB and Next.js.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // Shown on the site.
  email: "amanubhav8521@gmail.com",
  // Where contact-form submissions are delivered. Kept separate from the
  // public address because Resend's sandbox sender (onboarding@resend.dev)
  // will ONLY deliver to the address the Resend account is registered under —
  // anything else comes back 403. Once a domain is verified at
  // resend.com/domains, set CONTACT_FROM_EMAIL and point this at `email`.
  inbox: "anubhavmaurya8521@gmail.com",
  phone: "(+91) 7068220038",
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

// Counts that are not derivable from an API — kept here so they are easy to
// keep honest, and used as the fallback when GitHub cannot be reached.
export const shippedSystems = 5; // 4 Travkings platforms + Pixora
export const technologyCount = 12; // matches the skills grid on /resume

// Start of professional experience. Predates the roles listed on the CV,
// which only goes back to the first full-time-adjacent position.
// Adjust the month if the roll-over to the next year should land elsewhere.
export const CAREER_START = new Date(2023, 0, 1);

export const yearsOfExperience = (from: Date = CAREER_START) => {
  const now = new Date();
  let years = now.getFullYear() - from.getFullYear();
  const monthDelta = now.getMonth() - from.getMonth();
  if (monthDelta < 0 || (monthDelta === 0 && now.getDate() < from.getDate())) years -= 1;
  return Math.max(years, 0);
};
