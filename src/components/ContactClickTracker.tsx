import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { logInquiry } from "@/lib/logInquiry";

/**
 * Tracks tel: and mailto: link clicks site-wide as inquiries
 * (inquiry_type = "call_click" or "email_click").
 */
const ContactClickTracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handler = (ev: MouseEvent) => {
      const target = ev.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";

      let type: "call_click" | "email_click" | null = null;
      let contact = "";
      if (href.startsWith("tel:")) {
        type = "call_click";
        contact = href.replace(/^tel:/, "");
      } else if (href.startsWith("mailto:")) {
        type = "email_click";
        contact = href.replace(/^mailto:/, "").split("?")[0];
      }
      if (!type) return;

      const placement =
        anchor.dataset.placement ||
        (anchor.closest("header,nav") ? "nav" : null) ||
        (anchor.closest("footer") ? "footer" : null) ||
        "inline";

      logInquiry({
        inquiry_type: type,
        phone: type === "call_click" ? contact : undefined,
        email: type === "email_click" ? contact : undefined,
        source_page: pathname,
        source_url: typeof window !== "undefined" ? window.location.href : "",
        placement,
      });
    };

    document.addEventListener("click", handler, true);
    document.addEventListener("auxclick", handler, true);
    return () => {
      document.removeEventListener("click", handler, true);
      document.removeEventListener("auxclick", handler, true);
    };
  }, [pathname]);

  return null;
};

export default ContactClickTracker;
