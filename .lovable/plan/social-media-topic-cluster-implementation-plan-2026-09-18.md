# Social Media Topic Cluster — Implementation Plan

Goal: turn the existing social media content into one connected cluster with a clear hub, nine new service pages, supporting articles, and correct internal links — without duplicating any page that already exists.

## What already exists (kept, not duplicated)

Main service page, 2026 complete guide, cost page, "best company" page, packages page (from LKR 50,000), TikTok, LinkedIn, post design, lead generation, multi-channel, Google Ads, email/SMS/WhatsApp. These get improved and linked, never replaced.

## Phase 1 — Strengthen the hub and existing pages

- Social Media Marketing Sri Lanka becomes the hub: add a prominent "Explore our social media services" block linking to all specialist pages below.
- Packages page: make agency fee vs advertising spend explicit, what's included / not included, who each package suits, plus links to management, advertising, Facebook, campaigns.
- Cost page: separate "general Sri Lankan market range" from "BuzzConnect package pricing", link to the packages page.
- 2026 guide: add a short "Sources and methodology" note wherever external market figures appear, and link out to every service page.
- "Best company" page: link to the new agency page and siblings.
- Fix figure inconsistencies already flagged on the site (350K+ vs 750,000 reach, 1,000,000+ vs 1,250,000+).

## Phase 2 — Four core service pages

1. `/facebook-marketing-sri-lanka`
2. `/social-media-advertising-sri-lanka`
3. `/social-media-management-sri-lanka`
4. `/social-media-agency-sri-lanka`

## Phase 3 — Five more service pages

5. `/social-media-campaigns-sri-lanka`
6. `/instagram-marketing-sri-lanka`
7. `/meta-ads-agency-sri-lanka`
8. `/social-media-lead-generation-sri-lanka`
9. `/social-media-content-creation-sri-lanka`

Each service page: one H1, answer-first intro, services, process, deliverables, pricing pointer to the packages page, industries, FAQ, enquiry form, WhatsApp CTA, visible breadcrumbs, links back to the hub plus 2-4 siblings.

## Phase 4 — Supporting articles

Facebook cluster (8), Instagram cluster (7), advertising cluster (8), management cluster (4), comparisons (6). Each links to its parent service page and one sibling. Written for distinct questions, no re-skinned copy.

## Phase 5 — Industry social pages

Only six, where genuinely distinct content exists: hotels, restaurants, real estate, education, fashion, finance. Each cross-links to the existing industry marketing page, Facebook, Instagram, advertising.

## Phase 6 — Off-site authority

Out of scope for the build; noted in `roadmap.md` as ongoing work for the user.

## Technical details

- New routes in `src/App.tsx`, each with prerendered static HTML through the existing `collectRouteSeo` step in `vite.config.ts`, so crawlers get real markup.
- Metadata via `SEOHead`: unique title, unique description, self-canonical on `https://buzzconnect.lk`.
- Schema: `Service` + `BreadcrumbList` on service pages, `Article` on articles, `FAQPage` only where FAQs are visible on the page.
- Visible breadcrumbs using the existing `Breadcrumbs` component.
- Sitemap and `llms.txt` entries for every new URL; no orphans — each new page gets at least one inbound link from an existing page.
- Shared page data lives in `src/data/` so titles, descriptions, and link graphs stay consistent; no hidden text, no fabricated stats, testimonials, or case studies.
- Pricing stated once (from LKR 50,000) and referenced elsewhere by link.
- Verified per phase with a TypeScript check and Playwright passes at 1280 and 390 px.

## Rollout

I'll ship phase by phase so you can review each batch. Phases 1-3 first (hub + nine service pages), then articles, then industry pages. Changes reach buzzconnect.lk only when you publish.
