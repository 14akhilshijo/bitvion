# Bitvion Technologies — SEO / Entity Upgrade Report

**Date:** 14 August 2026  
**Scope:** Technical SEO, semantic HTML, structured data, founder entity, organization entity, YatrikERP entity  
**Note:** This work improves crawlability and entity clarity. It does **not** guarantee Google rankings.

---

## 1. Files modified

| Area | Files |
|------|--------|
| Entity source of truth | `src/data/entity.js` |
| Structured data | `src/components/seo/StructuredData.jsx` |
| Page meta / OG / Twitter / canonical | `src/components/seo/PageMeta.jsx` |
| FAQ UI | `src/components/seo/FaqSection.jsx` |
| Founder UI + long-form | `src/components/FounderProfile.jsx` |
| About / Founder pages | `src/pages/company/CompanyPages.jsx` |
| YatrikERP / Products | `src/pages/products/ProductPages.jsx` |
| Homepage | `src/pages/Home.jsx`, `src/components/Hero.jsx`, `src/components/ProductPreview.jsx` |
| Footer identity | `src/components/Footer.jsx` |
| Solutions / Contact titles | `src/pages/solutions/SolutionsOverview.jsx`, `src/data/solutions.jsx`, `src/pages/ContactPages.jsx` |
| Global wording | `src/data/globalPages.jsx` |
| Static HTML + bootstrap schema | `index.html` |
| Sitemap | `public/sitemap.xml` (via `scripts/generate-sitemap.js`) |
| Robots | `public/robots.txt` (already production-ready) |

---

## 2. SEO metadata implemented

Unique titles + descriptions + self-canonicals for key pages, including:

- `/` — `Bitvion Technologies | AI, Software & Digital Transformation`
- `/company/about` — `About Bitvion Technologies | Founded by Akhil Shijo`
- `/company/founder` — `Akhil Shijo | Founder & Proprietor of Bitvion Technologies`
- `/solutions` — `Technology Solutions | AI, Software & Automation | Bitvion Technologies`
- `/products/yatrikerp` — `YatrikERP | AI-Powered Business Operations Platform | Bitvion Technologies`
- `/contact` — `Contact Bitvion Technologies | Technology & Software Solutions`

Production robots default: `index, follow` (404 uses `noindex`).

---

## 3. Structured data implemented

- **Organization** (`Bitvion Technologies`) — founder link, foundingDate `2026-01-24`, owns YatrikERP, Kerala + Bangalore addresses, contact emails
- **Person** (`Akhil Shijo`) — jobTitle Founder & Proprietor, worksFor Organization
- **WebSite** — publisher Organization
- **WebPage / AboutPage / ProfilePage** helpers
- **BreadcrumbList**
- **FAQPage** (where visible FAQs exist: About, Founder, YatrikERP)
- **SoftwareApplication** (YatrikERP)

No fake ratings, reviews, LocalBusiness, or invented `sameAs` URLs.

---

## 4. Founder entity implementation

- Homepage leadership section upgraded to premium executive profile (dark glass, portrait focal point, CTAs)
- `/company/founder` long-form sections: About, Founder of Bitvion, Philosophy, Expertise, Building Bitvion, Product Vision, YatrikERP, Technology Focus, Leadership, Bitvion Technologies, Connect
- Visible FAQs + FAQ schema
- OG type `profile` + founder image
- Role used consistently: **Founder & Proprietor** (not CEO / MD / Co-Founder)

---

## 5. Organization entity implementation

- Proprietary technology enterprise wording (not Pvt Ltd / Limited)
- Verified fields: Udyam `UDYAM-KL-03-0036543`, Micro, Services, commencement 24 Jan 2026
- Founded and owned by Akhil Shijo — consistent across About, Footer, Hero, schema, index.html

---

## 6. YatrikERP entity implementation

- H1: `YatrikERP`
- Clear “developed by Bitvion Technologies” relationship
- Content covers transportation / hospital / school operations, modules, workflows, AI-assisted ops, integrations/roadmap (non-guaranteed)
- SoftwareApplication JSON-LD + FAQ schema
- Internal links to About, Founder, Contact

---

## 7. Sitemap location

`https://bitvion.in/sitemap.xml` → generated into `public/sitemap.xml`

---

## 8. Robots.txt location

`https://bitvion.in/robots.txt` → `public/robots.txt`  
Allows public crawl; disallows `/api/`, `/admin`, `/private`, `/dashboard`, `/login`  
Includes `Sitemap: https://bitvion.in/sitemap.xml`

---

## 9. Canonical strategy

Every indexable page sets a self-referencing canonical via `PageMeta` using `https://bitvion.in` (never localhost). Homepage also has static canonical in `index.html`.

---

## 10. Open Graph / Twitter

Per-page `og:title`, `og:description`, `og:url`, `og:type`, `og:image`, `og:site_name`  
Twitter: `summary_large_image` + title/description/image  
Founder page: `og:type=profile` + founder portrait

---

## 11. Image optimization notes

- Founder ALT / title set per spec
- Prefer converting founder + logo assets to WebP/AVIF in a follow-up pass if not already served as such by the CDN
- Lazy-load for below-fold founder preview; eager/high priority on founder page hero portrait

---

## 12. Performance improvements (non-destructive)

- Existing animations preserved
- Lazy route loading already in `App.jsx`
- Prefer-reduced-motion already used in heroes
- No removal of premium motion systems

---

## 13. Accessibility improvements

- Semantic landmarks (`main`, `footer`, section headings)
- Meaningful founder ALT
- FAQ `<details>`/`<summary>`
- Focusable CTAs and descriptive internal links
- Breadcrumbs where appropriate

---

## 14. Remaining manual configuration

1. **Google Search Console** — verify domain; insert real token:
   - HTML comment placeholder in `index.html`, **or**
   - set `VITE_GOOGLE_SITE_VERIFICATION` in Netlify env (wired in `PageMeta`)
2. Submit `https://bitvion.in/sitemap.xml` in GSC after DNS/SSL is stable
3. Add verified `sameAs` profile URLs (LinkedIn/GitHub/etc.) into `entity.person.sameAs` **only when confirmed**
4. Optionally convert logo/founder images to WebP/AVIF with descriptive filenames for further image SEO

---

## 15. Claims / content requiring verification

Do **not** publish without independent verification:

- Social / `sameAs` URLs (currently empty by design)
- Phone numbers, street addresses, employee counts, revenue
- Awards, clients, partnerships, media coverage
- Guaranteed product outcomes or fixed public roadmaps
- Physical “offices” in Netherlands / UK / Scotland / Europe (pages are informational market pages only)

Verified and used: proprietary structure, Akhil Shijo as Founder & Proprietor, Udyam number, dates, Kerala + Bangalore locations, emails `info@` / `business@`, YatrikERP as Bitvion product.
