# Brand Blast 360 Industry Landing Page Redesign

## Goal
Turn the 11 isolated Brand Blast 360 industry routes into premium, promotion-focused sales pages that attract campaign-intent searches and move visitors toward a package and WhatsApp enquiry—without changing or competing with existing broad industry-marketing pages.

## Build approach

### 1. Create a richer reusable industry-page model
- Expand the existing Brand Blast 360 industry data with unique promotion types, campaign ideas, audience needs, channel copy, lead outcomes, FAQs, CTA wording, and metadata for every industry.
- Keep the current 11 URLs under `/brand-blast-360/:industry`; create no duplicate routes.
- Preserve the current Brand Blast 360 prices, campaign counts, channels, reach figures, 24-hour launch claim, and WhatsApp number.

### 2. Redesign the shared industry landing-page experience
- Replace the current generic service-page presentation with a dedicated Brand Blast 360 product layout while retaining the existing header, footer, typography, colors, and mobile behavior.
- Build a large industry-specific hero with a WhatsApp launch CTA, packages link, and channel trust strip.
- Add “What Are You Promoting?”, a visual multi-channel product explanation, unique campaign ideas, four campaign-focused service sections, direct-enquiry journey, simplified package cards, five-step process, related broad-industry link, FAQ, and final conversion CTA.
- Use existing buttons, semantic theme tokens, icons, whitespace, and responsive grids; avoid generic article styling and nested decorative cards.

### 3. Protect keyword ownership
- Make `/brand-blast-360/hotels` target hotel promotion and advertising campaign intent, not broad hotel-marketing intent.
- Link once and naturally to `/hotel-marketing-sri-lanka` for complete hotel marketing services.
- Apply the same separation to the other 10 industries: broad industry pages remain untouched; Brand Blast pages focus on a specific promotion, offer, event, launch, vacancy, product, or campaign.
- Use the requested Hotels title, description, H1, campaign examples, and CTA language exactly where specified.

### 4. Keep packages and enquiries consistent
- Show simplified versions of Starter Blast, Growth Blast, Power Blast, and Market Dominator using the existing prices, campaign counts, channel details, validity, and discounts.
- Route every launch/package CTA through the current Brand Blast WhatsApp flow with the industry and chosen package included in the message.
- Add distinct existing tracking attributes for hero, package, service, main-product, and final CTA placements so the current analytics/admin reporting can separate clicks.
- Omit the OTA calculator CTA because no standalone calculator route currently exists; do not invent one.

### 5. Strengthen search and AI discovery
- Give every industry a unique title, description, H1, definition-style introduction, natural-language answers, and valid Service, BreadcrumbList, and FAQPage data.
- Identify Brand Blast 360—not generic industry marketing—as the offered service in structured data.
- Remove unsupported rating/review schema from these pages and keep all statements tied to existing Brand Blast 360 facts.
- Update static route generation so crawlers receive the expanded promotion-focused title, content, canonical, and structured data before JavaScript runs.
- Keep all 11 sitemap entries and update their AI-discovery labels/descriptions to match the new search intent.

## Hotels content direction
- H1: “Hotel Promotion Campaigns in Sri Lanka”.
- Promote rooms, weekend offers, resort/staycation/day-outing packages, dining, weddings, corporate packages, events, seasonal campaigns, and last-minute availability.
- Explain Email, SMS, WhatsApp, Facebook remarketing, Findit.lk, and LinkedIn as coordinated Brand Blast 360 distribution touchpoints.
- Focus enquiries on rooms, packages, weddings, events, dining, day outings, and corporate bookings.
- Keep broader SEO, PPC, OTA, and full hotel-marketing strategy on `/hotel-marketing-sri-lanka`.

## Verification
- Confirm all 11 routes render one unique H1, self-referencing canonical, unique metadata, valid structured data, working internal links, and correct WhatsApp messages.
- Verify Hotels first, then representative pages from consumer, B2B, recruitment, and healthcare categories.
- Check desktop and mobile layouts, CTA tracking attributes, static generated HTML, sitemap coverage, and absence of browser errors.
- Confirm no existing industry-marketing page was modified.
