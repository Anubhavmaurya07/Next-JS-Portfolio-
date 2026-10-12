// Everything a client can hire for, in one place. The services page, the
// packages and the contact form's "Select a service" list all read from here,
// so renaming a service only happens once.

export const SERVICE_OPTIONS = [
  "Business Website",
  "Personal / Portfolio Website",
  "Custom Software (CRM, booking, dashboard)",
  "Website Care & Updates",
  "Something else",
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];

export const contactHref = (service: ServiceOption) =>
  `/contact?service=${encodeURIComponent(service)}`;

export const services: {
  num: string;
  title: string;
  description: string;
  service: ServiceOption;
}[] = [
  {
    num: "01",
    title: "Business Websites",
    description:
      "A fast, mobile-friendly website that makes your business look trustworthy and turns visitors into calls and WhatsApp enquiries. Made for shops, clinics, salons, restaurants, gyms and coaching classes — with Google Maps, an enquiry form and a WhatsApp button built in.",
    service: "Business Website",
  },
  {
    num: "02",
    title: "Personal & Portfolio Websites",
    description:
      "One link that shows who you are and what you've done — for doctors, lawyers, coaches, creators and job seekers. Your work, reviews and contact details in a clean site you can share on WhatsApp, LinkedIn and Instagram. (You're looking at one.)",
    service: "Personal / Portfolio Website",
  },
  {
    num: "03",
    title: "Custom Business Software",
    description:
      "Booking systems, CRMs, billing and admin dashboards built around how your business actually works — so your team stops juggling Excel sheets and WhatsApp groups. I've built the accounting system, sales CRM and booking engine a travel company runs on every day.",
    service: "Custom Software (CRM, booking, dashboard)",
  },
  {
    num: "04",
    title: "Website Care & Updates",
    description:
      "Your website kept fast, secure and up to date without you thinking about it — content and price changes, new pages, backups, hosting and domain renewals, and quick fixes, on a simple monthly plan.",
    service: "Website Care & Updates",
  },
];

// Set `price` to a string like "₹9,999" (or "From ₹9,999") to show it on the
// card. Left as null, the card shows "Get a quote" instead.
export const packages: {
  name: string;
  forWho: string;
  price: string | null;
  features: string[];
  popular?: boolean;
  service: ServiceOption;
}[] = [
  {
    name: "Starter Website",
    forWho: "For a shop, clinic, salon or professional who needs to be found online.",
    price: null,
    features: [
      "One-page website that looks great on phones",
      "Call and WhatsApp buttons",
      "Google Maps location and enquiry form",
      "Basic Google search setup",
      "Connected to your own domain name",
    ],
    service: "Business Website",
  },
  {
    name: "Business Website",
    forWho: "For a business that wants to show its services, photos and reviews.",
    price: null,
    popular: true,
    features: [
      "Up to 5 pages — Home, About, Services, Gallery, Contact",
      "Everything in Starter",
      "Enquiry form that emails you instantly",
      "Photo gallery and customer reviews",
      "Speed and Google search optimisation",
    ],
    service: "Business Website",
  },
  {
    name: "Custom Software",
    forWho: "For a business that has outgrown Excel sheets and WhatsApp groups.",
    price: null,
    features: [
      "Booking system, CRM, billing or admin dashboard",
      "Built around how your team actually works",
      "Staff logins with the right access for each role",
      "Reports you can download any time",
      "A free call first to plan exactly what you need",
    ],
    service: "Custom Software (CRM, booking, dashboard)",
  },
];
