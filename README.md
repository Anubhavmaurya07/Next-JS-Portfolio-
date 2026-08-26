# Anubhav Maurya — Portfolio

Personal portfolio site built with the Next.js App Router.

**Stack:** Next.js 14 · TypeScript · Tailwind CSS · shadcn/ui (Radix) · Framer Motion · React Query · Resend

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in your keys
npm run dev
```

Open <http://localhost:3000>.

> The app builds without `RESEND_API_KEY` — the contact endpoint simply returns
> `503` until one is set.

## Environment

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | for the contact form | Resend API key |
| `CONTACT_FROM_EMAIL` | recommended | Verified sender. Defaults to Resend's sandbox address, which only delivers to your own verified inbox |
| `CONTACT_TO_EMAIL` | optional | Where enquiries land. Defaults to the address in `src/lib/site.ts` |
| `NEXT_PUBLIC_SITE_URL` | in production | Origin used for canonical URLs, OG tags and `sitemap.xml` |

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

## Structure

```
src/
  app/                 routes (home, services, resume, contact) + api/emails
    opengraph-image.tsx  generated social preview card
    sitemap.ts / robots.ts
  components/          Header, Nav, Photo, Social, Stats, transitions
    ui/                shadcn primitives
  email/               React Email template for form submissions
  lib/site.ts          name, role, description, URL — single source of truth
```

Site identity lives in [`src/lib/site.ts`](src/lib/site.ts); metadata, the OG
card and the sitemap all read from it.

## Deployment

Deployed on Vercel. Set the environment variables above in the project settings.
