import { supabase } from "@/integrations/supabase/client";
import type { WhatsAppContext } from "@/lib/whatsappTracking";

export interface InquiryPayload {
  name?: string;
  phone?: string;
  email?: string;
  business?: string;
  service?: string;
  message?: string;
  source_page?: string;
  source_url?: string;
  placement?: string;
  whatsapp_number?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  inquiry_type?: "form_submission" | "whatsapp_click" | "call_click" | "email_click" | "quote_open";
}

const DEDUPE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const DEDUPE_KEY = "bc_inquiry_dedupe_v1";

const isDuplicate = (payload: InquiryPayload): boolean => {
  if (typeof window === "undefined") return false;
  try {
    const key = [
      payload.inquiry_type || "",
      payload.source_page || "",
      payload.placement || "",
      payload.phone || payload.email || payload.name || "",
    ].join("|");
    const raw = sessionStorage.getItem(DEDUPE_KEY);
    const map: Record<string, number> = raw ? JSON.parse(raw) : {};
    const now = Date.now();
    // prune
    Object.keys(map).forEach((k) => {
      if (now - map[k] > DEDUPE_WINDOW_MS) delete map[k];
    });
    if (map[key] && now - map[key] < DEDUPE_WINDOW_MS) return true;
    map[key] = now;
    sessionStorage.setItem(DEDUPE_KEY, JSON.stringify(map));
    return false;
  } catch {
    return false;
  }
};

export const logInquiry = async (payload: InquiryPayload) => {
  try {
    if (isDuplicate(payload)) return;
    await supabase.from("inquiries").insert({
      ...payload,
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
    });
  } catch {
    /* never break UX */
  }
};


export const logInquiryFromContext = (
  ctx: WhatsAppContext,
  number: string,
  extras: Partial<InquiryPayload> = {},
) =>
  logInquiry({
    inquiry_type: "whatsapp_click",
    service: extras.service ?? ctx.service,
    source_page: ctx.pathname,
    source_url: typeof window !== "undefined" ? window.location.href : "",
    whatsapp_number: number,
    utm_source: ctx.utm_source,
    utm_medium: ctx.utm_medium,
    utm_campaign: ctx.utm_campaign,
    utm_content: ctx.utm_content,
    utm_term: ctx.utm_term,
    ...extras,
  });
