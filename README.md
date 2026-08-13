# Bitvion Technologies

Official website for [Bitvion Technologies](https://bitvion.in).

## Tech Stack

- React 18 + Vite 4
- Tailwind CSS 3
- Framer Motion
- React Router 7
- Express API (forms)
- Zod validation

## Development

```bash
npm install
npm run dev          # Frontend only (port 5173)
npm run dev:full     # Frontend + API server
```

## Production Build

```bash
npm run build        # Generates sitemap + builds frontend
npm run start        # Serves dist/ + API (set NODE_ENV=production)
```

## Environment

Copy `.env.example` to `.env.local` and configure SMTP for live email delivery. Without SMTP, form submissions are logged server-side.

## Deployment (bitvion.in)

- Canonical domain: `https://bitvion.in`
- Configure www → root redirect at DNS/hosting level
- Run `npm run build` then `npm run start` on Node.js host, or deploy `dist/` to static CDN with API on separate Node service
- Do not modify email DNS (SPF/DKIM/DMARC) when updating website DNS

## Routes

40 pages including solutions, products, industries, global markets, company, insights, forms, and legal pages.

## Business Platform

Public website (`bitvion.in`) is separate from future internal platform (`app.bitvion.in`).
