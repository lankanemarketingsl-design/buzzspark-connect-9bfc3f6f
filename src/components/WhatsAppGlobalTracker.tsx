import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  buildWhatsAppContext,
  enrichWhatsAppHref,
  getWhatsAppNumber,
  isWhatsAppHref,
  trackWhatsAppClick,
} from "@/lib/whatsappTracking";

/**
 * Site-wide delegated handler for every WhatsApp CTA on the page.
 * Intercepts the click, opens the ContactCaptureDialog to collect
 * name + phone, then redirects to WhatsApp with the inquiry logged.
 */
const WhatsAppGlobalTracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handler = (ev: MouseEvent) => {
      const target = ev.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!isWhatsAppHref(href)) return;

      const placement =
        anchor.dataset.waPlacement ||
        (anchor.closest("header,nav") ? "nav" : null) ||
        (anchor.closest("footer") ? "footer" : null) ||
        (anchor.classList.contains("fixed") ? "floating_button" : "inline_cta");

      const ctx = buildWhatsAppContext(
        pathname,
        window.location.search,
        undefined,
        placement,
      );
      const enriched = enrichWhatsAppHref(href as string, ctx);
      if (enriched !== href) anchor.setAttribute("href", enriched);

      const selectedService =
        anchor.dataset.selectedService ||
        anchor.dataset.service ||
        ctx.service;

      const waNumber = getWhatsAppNumber(pathname);
      trackWhatsAppClick(ctx, waNumber, window.location.href, {
        placement,
        selected_service: selectedService,
      });

      // Intercept: open contact capture dialog first, then open WhatsApp
      ev.preventDefault();
      ev.stopPropagation();
      window.dispatchEvent(
        new CustomEvent("wa-capture", {
          detail: {
            href: enriched,
            ctx,
            number: waNumber,
            placement,
            service: selectedService,
          },
        }),
      );
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

export default WhatsAppGlobalTracker;
