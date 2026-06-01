import { useEffect, useState, FormEvent } from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { logInquiry } from "@/lib/logInquiry";
import type { WhatsAppContext } from "@/lib/whatsappTracking";

export interface ContactCaptureDetail {
  href: string;
  ctx: WhatsAppContext;
  number: string;
  placement: string;
  service: string;
}

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[0-9+\s()-]+$/, "Invalid phone number"),
  email: z.string().trim().email().max(255).optional().or(z.literal("")),
});

const STORAGE_KEY = "bc_contact_capture_v1";

const loadCached = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { name: "", phone: "", email: "" };
    return JSON.parse(raw) as { name: string; phone: string; email: string };
  } catch {
    return { name: "", phone: "", email: "" };
  }
};

const ContactCaptureDialog = () => {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState<ContactCaptureDetail | null>(null);
  const [cached, setCached] = useState(loadCached);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handler = (ev: Event) => {
      const e = ev as CustomEvent<ContactCaptureDetail>;
      setDetail(e.detail);
      setErrors({});
      setCached(loadCached());
      setOpen(true);
    };
    window.addEventListener("wa-capture", handler as EventListener);
    return () => window.removeEventListener("wa-capture", handler as EventListener);
  }, []);

  const openWhatsApp = (name?: string, phone?: string, email?: string) => {
    if (!detail) return;
    let href = detail.href;
    if (name || phone || email) {
      const prefix =
        `*Name:* ${name || "-"}%0A` +
        `*Phone:* ${phone || "-"}%0A` +
        (email ? `*Email:* ${email}%0A` : "") +
        `%0A`;
      // Insert prefix right after `text=` so the WhatsApp draft starts with contact info
      href = href.replace(/([?&]text=)/, `$1${prefix}`);
      if (!/[?&]text=/.test(href)) {
        href += (href.includes("?") ? "&" : "?") + `text=${prefix}`;
      }
    }
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!detail) return;
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
    };
    const result = schema.safeParse(raw);
    if (!result.success) {
      const fe: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        const k = i.path[0] as string;
        if (k && !fe[k]) fe[k] = i.message;
      });
      setErrors(fe);
      return;
    }
    setSubmitting(true);
    const data = result.data;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      /* ignore */
    }
    await logInquiry({
      inquiry_type: "whatsapp_click",
      name: data.name,
      phone: data.phone,
      email: data.email || undefined,
      service: detail.service,
      source_page: detail.ctx.pathname,
      source_url: typeof window !== "undefined" ? window.location.href : "",
      placement: detail.placement,
      whatsapp_number: detail.number,
      utm_source: detail.ctx.utm_source,
      utm_medium: detail.ctx.utm_medium,
      utm_campaign: detail.ctx.utm_campaign,
      utm_content: detail.ctx.utm_content,
      utm_term: detail.ctx.utm_term,
    });
    openWhatsApp(data.name, data.phone, data.email);
    setSubmitting(false);
    setOpen(false);
  };

  const handleSkip = () => {
    openWhatsApp();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Before we connect on WhatsApp</DialogTitle>
          <DialogDescription>
            Share your contact so our team can follow up if WhatsApp gets disconnected.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3" noValidate>
          <div>
            <Label htmlFor="cc-name">Full Name *</Label>
            <Input
              id="cc-name"
              name="name"
              defaultValue={cached.name}
              placeholder="John Perera"
              maxLength={100}
              required
              aria-invalid={!!errors.name}
            />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
          </div>
          <div>
            <Label htmlFor="cc-phone">Phone *</Label>
            <Input
              id="cc-phone"
              name="phone"
              type="tel"
              defaultValue={cached.phone}
              placeholder="+94 77 123 4567"
              maxLength={20}
              required
              aria-invalid={!!errors.phone}
            />
            {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
          </div>
          <div>
            <Label htmlFor="cc-email">Email (optional)</Label>
            <Input
              id="cc-email"
              name="email"
              type="email"
              defaultValue={cached.email}
              placeholder="you@company.lk"
              maxLength={255}
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
          </div>
          <Button type="submit" className="w-full" disabled={submitting}>
            <MessageCircle className="w-4 h-4 mr-2" />
            {submitting ? "Opening…" : "Continue to WhatsApp"}
          </Button>
          <button
            type="button"
            onClick={handleSkip}
            className="block w-full text-xs text-muted-foreground hover:text-foreground transition"
          >
            Skip and open WhatsApp
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactCaptureDialog;
