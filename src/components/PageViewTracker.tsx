import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { logInquiry } from "@/lib/logInquiry";

/**
 * Logs a page_view inquiry once per session per pathname so the admin
 * dashboard can compute Conversion Rate (CTA clicks ÷ Page Views).
 * Skips /admin routes.
 */
const SESSION_KEY = "bc_pv_seen_v1";

const PageViewTracker = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;
    try {
      const raw = sessionStorage.getItem(SESSION_KEY);
      const seen: Record<string, number> = raw ? JSON.parse(raw) : {};
      const now = Date.now();
      // expire entries older than 30 min so reloads after a long pause re-log
      Object.keys(seen).forEach((k) => {
        if (now - seen[k] > 30 * 60 * 1000) delete seen[k];
      });
      if (seen[pathname]) return;
      seen[pathname] = now;
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(seen));

      const params = new URLSearchParams(search || "");
      logInquiry({
        inquiry_type: "page_view",
        source_page: pathname,
        source_url: typeof window !== "undefined" ? window.location.href : "",
        utm_source: params.get("utm_source") || undefined,
        utm_medium: params.get("utm_medium") || undefined,
        utm_campaign: params.get("utm_campaign") || undefined,
        utm_content: params.get("utm_content") || undefined,
        utm_term: params.get("utm_term") || undefined,
      });
    } catch {
      /* never break UX */
    }
  }, [pathname, search]);

  return null;
};

export default PageViewTracker;
