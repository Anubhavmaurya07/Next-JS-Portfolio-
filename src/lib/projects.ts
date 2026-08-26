export type Project = {
  slug: string;
  num: string;
  category: string;
  year: string;
  title: string;
  description: string;
  highlights: string[];
  stack: { name: string }[];
  live: string;
  github: string;
};

// Ordered by weight, not by date — a visitor who reads only the first entry
// should still see the strongest work.
export const projects: Project[] = [
  {
    slug: "kbiz-360-erp",
    num: "01",
    category: "ERP / Fintech",
    year: "2026",
    title: "KBiz-360 ERP",
    description:
      "A multi-branch, multi-currency double-entry accounting and operations platform for a travel business — the system of record for every ledger, voucher and statutory filing across five branches in three countries.",
    highlights: [
      "Tally-compatible posting engine over a 28-group chart of accounts, with per-branch ledger codes and branch-local currencies",
      "Seven voucher types with bill-wise settlement and a three-level check → verify → approve authorisation chain",
      "Inter-branch transactions reconciled automatically through stateless mirror matching across paired branch ledgers",
      "Statutory handling for GST, TDS and TCS with automatic tax posting and jurisdiction-aware rate selection",
      "Full reporting suite — Day Book, Trial Balance, P&L, Balance Sheet, notes to financial statements and AR/AP ageing",
      "Bank reconciliation supporting many-to-many statement-to-ledger matching, behind a verify → freeze → certify → lock ladder",
      "IATA BSP statement import via PDF parsing, plus a fifteen-day bill-level cash-flow plan built on the settlement calendar",
    ],
    stack: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "React" },
      { name: "Vite" },
    ],
    live: "",
    github: "",
  },
  {
    slug: "sales-crm",
    num: "02",
    category: "CRM / Workflow",
    year: "2026",
    title: "Sales CRM",
    description:
      "The commercial front half of the same platform: an enquiry-to-booking pipeline where every proposal, approval and payment eventually lands in the ERP as a posted accounting voucher.",
    highlights: [
      "43-entity Express and Mongoose backend with role-based access control and per-user permission grants",
      "Query → proposal → confirmation → booking workflow, including multi-option live fare proposals the client picks from at confirmation",
      "Branded PDF proposals and invoices with template versioning and cache invalidation on edit",
      "Per-user Outlook mailboxes through the Microsoft Graph API, plus a WhatsApp Business webhook for client messaging",
      "Bridge into the ERP that pushes bookings and payments across as vouchers, with a totals parity gate to catch drift",
    ],
    stack: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "React" },
      { name: "BullMQ" },
      { name: "MS Graph" },
    ],
    live: "",
    github: "",
  },
  {
    slug: "smart-connect",
    num: "03",
    category: "Mobile / Real-time",
    year: "2026",
    title: "Smart Connect",
    description:
      "An internal communications and workforce app for iOS, Android and the browser — chat, directory, email and attendance for staff spread across branches in different time zones.",
    highlights: [
      "Chat suite at parity with mainstream messengers: direct messages, groups, departments, mentions, forwarding, attachments and deep search",
      "Local-first message storage so history is instantly available offline and reconciles on reconnect",
      "Geofenced attendance with radius and Wi-Fi verification, and automatic branch-local end-of-day checkout",
      "iOS home-screen widget built with WidgetKit, and server-driven push notification badge counts",
      "Shipped to the Play Store and paired with a browser-based web client",
    ],
    stack: [
      { name: "React Native" },
      { name: "Expo" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
      { name: "Prisma" },
      { name: "WidgetKit" },
    ],
    live: "",
    github: "",
  },
  {
    slug: "travkings-booking-engine",
    num: "04",
    category: "Travel / Integrations",
    year: "2026",
    title: "Travkings Booking Engine",
    description:
      "The public-facing website and B2C flight booking platform — search through to ticket issuance against a live GDS supplier, with no human in the loop.",
    highlights: [
      "End-to-end GDS supplier integration: availability search, fare rules, booking, PNR polling and ticket issuance",
      "Payload mapper translating the internal booking model into the provider's contract, isolating the rest of the system from supplier quirks",
      "Deployed on a dedicated EC2 instance behind nginx with pm2 process management and CI-driven releases",
    ],
    stack: [
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "React" },
      { name: "AWS EC2" },
      { name: "nginx" },
    ],
    live: "",
    github: "https://github.com/Anubhavmaurya07/Booking-Engine",
  },
  {
    slug: "pixora",
    num: "05",
    category: "Backend / API",
    year: "2026",
    title: "Pixora",
    description:
      "A social platform backend built to stay fast under load. Heavy write paths — likes, follows, notification fan-out — are pushed onto a Redis-backed queue so API responses never wait on work the caller doesn't need.",
    highlights: [
      "Async notification system on BullMQ and Redis, moving fan-out off the request path onto background workers",
      "Cursor-based feed pagination, keeping response times flat as the dataset grows",
      "Redis caching layer for feed reads, with atomic operations guaranteeing consistency on likes and interactions",
      "Media uploads handled through Cloudinary with multer storage",
      "Socket.io wired in for real-time delivery, behind JWT auth and helmet-hardened headers",
      "Postgres schema and migrations managed with Prisma; structured logging via pino",
    ],
    stack: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "Prisma" },
      { name: "Redis" },
      { name: "BullMQ" },
      { name: "Socket.io" },
    ],
    live: "",
    github: "https://github.com/Anubhavmaurya07/Pixora",
  },
];
