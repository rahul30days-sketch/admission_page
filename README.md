# SITASRM — Admissions 2026 Landing Page

A premium, conversion-focused admissions landing page for **SITASRM Engineering & Research Institute (SERI)**, Greater Noida — MBA & B.Tech 2026.

Built with **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## What's inside

A focused, conversion-first page (`app/page.tsx`) of 8 lead-gen sections — every section ends in a CTA that opens the enquiry form:

1. **Hero** — cinematic dark hero, glass enquiry form (desktop), counters, trust badges, Apply / Brochure / Call CTAs
2. **Why SITASRM** — alternating storytelling features → Apply CTA
3. **Programs** — bento grid (MBA, CSE, AI/ML, CS-IT, ECE); each "Learn more" opens the form pre-set to that course
4. **Eligibility** — MBA vs B.Tech comparison → per-track Apply CTAs
5. **Admission Process** — animated vertical timeline → start CTA
6. **Student Testimonials** — journey + LinkedIn-style cards → Apply CTA
7. **FAQ** — searchable accordion (+ FAQ schema) → counsellor CTA
8. **Final CTA** — urgency + seats bar + **embedded enquiry form** + Call / WhatsApp
9. **Footer** — SEO links, contact, map, socials

Removed for conversion focus: campus tour, campus life (clubs/sports/hostel), faculty profiles, galleries, the recruiter/trust band, the placement-ecosystem section, and the scholarship calculator. Conversion chrome: sticky scroll-progress bar, glass navbar (transparent→solid), always-visible floating Apply + WhatsApp dock (desktop) / bottom Apply bar (mobile), bottom-sheet enquiry modal triggered by any "Apply", and a mock enquiry API at `app/api/enquiry/route.ts`.

### Architecture

```
app/            layout (fonts + metadata), page, globals.css, api, sitemap/robots/manifest, opengraph-image
components/ui/      primitives (Reveal, Counter, Magnetic, Button, Marquee, Aurora, Logo, SectionHeading, SocialIcons)
components/layout/  Navbar, Footer, ScrollProgress, StickyDock
components/forms/   EnquiryForm, EnquiryModal, Confetti
components/sections/ the 11 sections
components/seo/     JsonLd (Organization, Course, FAQ, Breadcrumb)
lib/            content.ts (single source of all copy/data), icons.ts, utils.ts, applyBus.ts
```

All copy and data live in **`lib/content.ts`** — edit there, not in components.

## ⚠️ Replace before launch — placeholder data

Authentic details (name, taglines, address, programs, eligibility, contacts, socials, approvals) come from seri.net.in. The following are **illustrative placeholders** marked `[VERIFY]` in `lib/content.ts` — swap in confirmed values:

- **Hero counters** (`heroStats`) — confirm the numbers shown above the fold
- **Testimonials** (`testimonials`) — replace with real, consented student profiles
- **Salary ranges** on programs — confirm with admissions office

Also wire the enquiry endpoint (`app/api/enquiry/route.ts`) to your CRM / email / WhatsApp, and drop real photography into the Hero frame if desired (currently a premium gradient placeholder).

## SEO & accessibility

One `<h1>`, semantic landmarks, JSON-LD (Organization/Course/FAQ/Breadcrumb), Open Graph + Twitter cards, dynamic OG image, sitemap, robots, manifest. WCAG-minded: focus states, ARIA labels, keyboard-operable, and full `prefers-reduced-motion` support.
