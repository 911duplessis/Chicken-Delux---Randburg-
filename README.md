# Chicken Delux — Randburg

Marketing/menu site for Chicken Delux, a premium flame-grilled BBQ chicken
business in Randburg. Five engineered SKUs, no filler menu, ordering via
WhatsApp click-to-chat.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Configuration

Orders route to WhatsApp using the number in `NEXT_PUBLIC_WHATSAPP_NUMBER`
(international format, digits only). Copy `.env.example` to `.env.local` to
override the default:

```bash
cp .env.example .env.local
```

## Content

- `data/menu.ts` — the 5 menu SKUs (prices, descriptions, tags). Edit here to
  change menu content without touching layout/components.
- `lib/whatsapp.ts` — builds the `wa.me` click-to-chat links used across the
  site.
- `public/logo.png` — brand logo mark.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4. No backend, database, or
cart — this is a static marketing/menu page; ordering happens entirely
through WhatsApp.
