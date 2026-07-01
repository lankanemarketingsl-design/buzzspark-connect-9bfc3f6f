// Canonical service-name + traffic-source resolution for analytics.
// Keeps long tracking URLs out of admin tables.

export const SERVICE_PATHS: Record<string, string> = {
  "/seo-sri-lanka": "SEO Services",
  "/google-ads-sri-lanka": "Google Ads",
  "/social-media-marketing-sri-lanka": "Social Media Marketing",
  "/linkedin-marketing-sri-lanka": "LinkedIn Marketing",
  "/tiktok-marketing-sri-lanka": "TikTok Marketing",
  "/website-design-sri-lanka": "Website Design",
  "/email-marketing": "Email Marketing",
  "/sms-marketing": "SMS Marketing",
  "/whatsapp-marketing": "WhatsApp Marketing",
  "/lead-generation-sri-lanka": "Lead Generation",
  "/graphic-designing-in-sri-lanka": "Graphic Design",
  "/online-advertising-sri-lanka": "Online Advertising",
  "/web-banner-advertising-sri-lanka": "Web Banner Advertising",
  "/programmatic-advertising-sri-lanka": "Programmatic Advertising",
  "/brand-blast-360": "Brand Blast 360",
  "/multi-channel-marketing-sri-lanka": "Multi-Channel Marketing",
  "/hotel-marketing-sri-lanka": "Hotel Marketing",
  "/restaurant-marketing-sri-lanka": "Restaurant Marketing",
  "/real-estate-marketing-sri-lanka": "Real Estate Marketing",
  "/fashion-marketing-sri-lanka": "Fashion Marketing",
  "/finance-marketing-sri-lanka": "Finance Marketing",
  "/education-marketing-sri-lanka": "Education Marketing",
  "/event-marketing-sri-lanka": "Event Marketing",
  "/staff-recruitment-campaigns-sri-lanka": "Staff Recruitment",
};

const NON_SERVICE = new Set([
  "/",
  "/about-us",
  "/why-choose-us",
  "/contact-us",
  "/careers",
  "/resources",
  "/admin",
  "/admin/login",
]);

const stripPath = (path: string | null | undefined): string => {
  if (!path) return "/";
  // drop query, hash, trailing slash
  return ("/" + path.split("?")[0].split("#")[0].replace(/^\/+|\/+$/g, "")) || "/";
};

export const resolveServiceName = (path: string | null | undefined): string | null => {
  const p = stripPath(path);
  if (NON_SERVICE.has(p)) return null;
  if (SERVICE_PATHS[p]) return SERVICE_PATHS[p];
  // articles & misc → not a service page
  if (p.includes("-sri-lanka") || p.includes("marketing") || p.includes("design")) {
    const slug = p.replace(/^\/+/, "").split("/")[0];
    return slug
      .replace(/-sri-lanka$/i, "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }
  return null;
};

export const prettyPath = (path: string | null | undefined): string => {
  const p = stripPath(path);
  if (p === "/") return "Home";
  const svc = SERVICE_PATHS[p];
  if (svc) return svc;
  return p
    .replace(/^\/+/, "")
    .split("/")[0]
    .replace(/-sri-lanka$/i, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

// Reverse lookup: service display name → canonical path (for "view page" links)
const SERVICE_NAME_TO_PATH: Record<string, string> = Object.entries(SERVICE_PATHS).reduce(
  (acc, [path, name]) => {
    acc[name] = path;
    return acc;
  },
  {} as Record<string, string>,
);

export const pathForService = (serviceName: string | null | undefined): string | null => {
  if (!serviceName) return null;
  return SERVICE_NAME_TO_PATH[serviceName] || null;
};

export const cleanPath = (path: string | null | undefined): string | null => {
  if (!path) return null;
  const p = stripPath(path);
  if (p === "/") return "/";
  return p;
};


export type TrafficSource =
  | "Google Organic"
  | "Google Ads"
  | "Facebook"
  | "LinkedIn"
  | "Email Campaign"
  | "Referral"
  | "Direct";

export const resolveTrafficSource = (
  utm_source: string | null | undefined,
  utm_medium: string | null | undefined,
): TrafficSource => {
  const s = (utm_source || "").toLowerCase();
  const m = (utm_medium || "").toLowerCase();
  if (!s && !m) return "Direct";
  if (s.includes("google") && (m === "cpc" || m === "ppc" || m.includes("paid"))) return "Google Ads";
  if (s.includes("google")) return "Google Organic";
  if (s.includes("facebook") || s.includes("fb") || s.includes("meta")) return "Facebook";
  if (s.includes("linkedin")) return "LinkedIn";
  if (m === "email" || s.includes("mailchimp") || s.includes("newsletter")) return "Email Campaign";
  if (m === "organic") return "Google Organic";
  return "Referral";
};

// Used by the trend chart — six headline services
export const TREND_SERVICES: { label: string; paths: string[] }[] = [
  { label: "SEO", paths: ["/seo-sri-lanka"] },
  { label: "Google Ads", paths: ["/google-ads-sri-lanka"] },
  { label: "Social Media", paths: ["/social-media-marketing-sri-lanka", "/linkedin-marketing-sri-lanka", "/tiktok-marketing-sri-lanka"] },
  { label: "AI Visibility", paths: ["/ai-visibility-sri-lanka"] },
  { label: "Web Design", paths: ["/website-design-sri-lanka"] },
  { label: "Video Production", paths: ["/video-editing-sri-lanka", "/animated-video-creation-sri-lanka"] },
];
