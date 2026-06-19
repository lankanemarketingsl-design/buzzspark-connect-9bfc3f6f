// Centralized WhatsApp link enrichment + analytics so every wa.me / WhatsApp
// CTA across the site (floating button, hero CTAs, contact forms, articles)
// gets the same UTM hygiene, service tagging, and gtag/dataLayer event.

const INDUSTRY_ROUTES = [
  "/hotel-marketing-sri-lanka",
  "/education-marketing-sri-lanka",
  "/restaurant-marketing-sri-lanka",
  "/fashion-marketing-sri-lanka",
];

const SERVICE_MAP: Record<string, string> = {
  "/": "your services",
  "/email-marketing": "Email Marketing",
  "/sms-marketing": "SMS Marketing",
  "/whatsapp-marketing": "WhatsApp Marketing",
  "/multi-channel-marketing-sri-lanka": "Multi-Channel Marketing Packages",
  "/brand-blast-360": "Brand Blast 360",
  "/online-advertising-sri-lanka": "Online Advertising",
  "/graphic-designing-in-sri-lanka": "Graphic Design",
  "/seo-sri-lanka": "SEO Services",
  "/website-design-sri-lanka": "Website Design",
  "/lead-generation-sri-lanka": "Lead Generation",
  "/social-media-marketing-sri-lanka": "Social Media Marketing",
  "/web-banner-advertising-sri-lanka": "Web Banner Advertising",
  "/hotel-marketing-sri-lanka": "Hotel Marketing",
  "/education-marketing-sri-lanka": "Education Marketing",
  "/finance-marketing-sri-lanka": "Finance Marketing",
  "/restaurant-marketing-sri-lanka": "Restaurant Marketing",
  "/real-estate-marketing-sri-lanka": "Real Estate Marketing",
  "/fashion-marketing-sri-lanka": "Fashion Marketing",
  "/advertising-sri-lanka": "Advertising in Sri Lanka",
  "/digital-marketing-company-in-sri-lanka": "Digital Marketing",
  "/digital-marketing-companies-sri-lanka": "Digital Marketing",
  "/marketing-agencies-sri-lanka": "Digital Marketing",
  "/advertising-agencies-sri-lanka": "Online Advertising",
  "/how-to-choose-digital-marketing-agency-sri-lanka": "Digital Marketing",
  "/email-vs-sms-vs-whatsapp-marketing-sri-lanka": "Digital Marketing",
  "/digital-marketing-cost-sri-lanka": "Digital Marketing",
  "/digital-marketing-trends-sri-lanka": "Digital Marketing",
  "/event-marketing-sri-lanka": "Event Marketing",
  "/staff-recruitment-campaigns-sri-lanka": "Staff Recruitment Campaigns",
  "/google-ads-sri-lanka": "Google Ads",
  "/about-us": "Buzz Connect",
  "/why-choose-us": "your services",
  "/contact-us": "your services",
  "/careers": "career opportunities",
  "/resources": "your services",
};

const titleCaseFromPath = (pathname: string): string => {
  const slug = pathname.replace(/^\/+/, "").split("/")[0] || "";
  if (!slug) return "your services";
  return (
    slug
      .replace(/-sri-lanka$/i, "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
      .trim() || "your services"
  );
};

export const getServiceName = (pathname: string): string =>
  SERVICE_MAP[pathname] || titleCaseFromPath(pathname);

export const getWhatsAppNumber = (pathname: string): string =>
  INDUSTRY_ROUTES.includes(pathname) ? "94771976351" : "94771437707";

// ---------- UTM hygiene ----------
const UTM_LIMITS: Record<string, number> = {
  utm_source: 50,
  utm_medium: 50,
  utm_campaign: 80,
  utm_content: 50,
  utm_term: 50,
};

export const slugify = (s: string): string =>
  (s || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");

export const normalizeUtm = (
  raw: string | null | undefined,
  fallback: string,
  key: string,
): string => {
  const slug = slugify(raw || fallback) || slugify(fallback) || "na";
  const limit = UTM_LIMITS[key] ?? 80;
  if (slug.length <= limit) return slug;
  const cut = slug.slice(0, limit);
  const boundary = cut.lastIndexOf("_");
  return (boundary > limit * 0.6 ? cut.slice(0, boundary) : cut).replace(/_+$/g, "");
};

export interface WhatsAppContext {
  pathname: string;
  service: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
}

export const buildWhatsAppContext = (
  pathname: string,
  search: string,
  mediumOverride?: string,
  contentOverride?: string,
): WhatsAppContext => {
  const params = new URLSearchParams(search || "");
  const service = getServiceName(pathname);
  const pageSlug = pathname.replace(/^\/+|\/+$/g, "") || "home";
  return {
    pathname,
    service,
    utm_source: normalizeUtm(params.get("utm_source"), "website", "utm_source"),
    utm_medium: normalizeUtm(
      params.get("utm_medium"),
      mediumOverride || "whatsapp_cta",
      "utm_medium",
    ),
    utm_campaign: normalizeUtm(
      params.get("utm_campaign"),
      `${service}_${pageSlug}`,
      "utm_campaign",
    ),
    utm_content: normalizeUtm(
      params.get("utm_content"),
      contentOverride || "inline_cta",
      "utm_content",
    ),
    utm_term: normalizeUtm(params.get("utm_term"), service, "utm_term"),
  };
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Google Ads conversion. Once you create the conversion action in Google Ads
// (Tools → Conversions → + New → Website → "WhatsApp Click"), paste the label
// portion of the snippet (the part after the slash) below.
const GOOGLE_ADS_CONVERSION_ID = "AW-16673831888";
const GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL = ""; // e.g. "AbCdEfGhIjKlMnOp"

export interface WhatsAppClickExtras {
  selected_service?: string;
  placement?: string;
  form_submitted?: boolean;
}

export const trackWhatsAppClick = (
  ctx: WhatsAppContext,
  number: string,
  pageUrl: string,
  extras: WhatsAppClickExtras = {},
) => {
  try {
    const selectedService = extras.selected_service || ctx.service;
    const payload = {
      event_category: "engagement",
      event_label: selectedService,
      service: ctx.service,
      selected_service: selectedService,
      placement: extras.placement,
      form_submitted: extras.form_submitted ?? false,
      page_path: ctx.pathname,
      page_location: pageUrl,
      whatsapp_number: number,
      utm_source: ctx.utm_source,
      utm_medium: ctx.utm_medium,
      utm_campaign: ctx.utm_campaign,
      utm_content: ctx.utm_content,
      utm_term: ctx.utm_term,
      transport_type: "beacon",
    };
    // GA4 + dataLayer event — segment by `selected_service` / `page_path` in GA4
    window.gtag?.("event", "whatsapp_cta_click", payload);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "whatsapp_cta_click", ...payload });

    // Google Ads conversion fire — include selected_service so it's reportable
    if (GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL) {
      window.gtag?.("event", "conversion", {
        send_to: `${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL}`,
        selected_service: selectedService,
        service: ctx.service,
        page_path: ctx.pathname,
      });
    } else {
      // Fallback so the event still appears under the AW property.
      window.gtag?.("event", "whatsapp_cta_click", {
        send_to: GOOGLE_ADS_CONVERSION_ID,
        selected_service: selectedService,
        service: ctx.service,
      });
    }
  } catch {
    /* analytics must never break the click */
  }
};

// Detect any WhatsApp deep-link variant.
export const isWhatsAppHref = (href: string | null | undefined): boolean => {
  if (!href) return false;
  return /(?:^|\/\/)(?:wa\.me|api\.whatsapp\.com|chat\.whatsapp\.com|web\.whatsapp\.com)\b/i.test(
    href,
  );
};

// Append/normalize UTMs on an existing href without clobbering an explicit one.
export const enrichWhatsAppHref = (href: string, ctx: WhatsAppContext): string => {
  try {
    const url = new URL(href, window.location.origin);
    const setIfMissing = (k: string, v: string) => {
      if (!url.searchParams.get(k)) url.searchParams.set(k, v);
      else url.searchParams.set(k, normalizeUtm(url.searchParams.get(k), v, k));
    };
    setIfMissing("utm_source", ctx.utm_source);
    setIfMissing("utm_medium", ctx.utm_medium);
    setIfMissing("utm_campaign", ctx.utm_campaign);
    setIfMissing("utm_content", ctx.utm_content);
    setIfMissing("utm_term", ctx.utm_term);
    return url.toString();
  } catch {
    return href;
  }
};
