import { useState, FormEvent, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Phone, Mail } from "lucide-react";
import {
  buildWhatsAppContext,
  getServiceName,
  trackWhatsAppClick,
} from "@/lib/whatsappTracking";
import { logInquiry } from "@/lib/logInquiry";

const WHATSAPP_NUMBER = "94771437707";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[0-9+\s()-]+$/, "Phone number contains invalid characters"),
  email: z.string().trim().email("Invalid email address").max(255).optional().or(z.literal("")),
  business: z.string().trim().max(100).optional().or(z.literal("")),
  service: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

type FormErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const StrategyCallForm = () => {
  const { toast } = useToast();
  const { pathname } = useLocation();
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLDivElement | null>(null);
  const loggedOpenRef = useRef(false);

  useEffect(() => {
    if (!formRef.current) return;
    const key = `bc_quote_open_${pathname}`;
    if (sessionStorage.getItem(key)) {
      loggedOpenRef.current = true;
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !loggedOpenRef.current) {
            loggedOpenRef.current = true;
            sessionStorage.setItem(key, "1");
            logInquiry({
              inquiry_type: "quote_open",
              service: getServiceName(pathname),
              source_page: pathname,
              source_url: typeof window !== "undefined" ? window.location.href : "",
              placement: "strategy_form",
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(formRef.current);
    return () => obs.disconnect();
  }, [pathname]);


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const raw = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      business: String(formData.get("business") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
    };

    const result = schema.safeParse(raw);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormErrors;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      toast({
        title: "Please check the form",
        description: "Some fields need your attention.",
        variant: "destructive",
      });
      return;
    }

    setErrors({});
    setSubmitting(true);

    const data = result.data;
    const lines = [
      "Hi Buzz Connect, I'd like to request a *Free Strategy Call*.",
      "",
      `*Name:* ${data.name}`,
      `*Phone:* ${data.phone}`,
      data.email ? `*Email:* ${data.email}` : "",
      data.business ? `*Business:* ${data.business}` : "",
      data.service ? `*Interested in:* ${data.service}` : "",
      data.message ? `*Message:* ${data.message}` : "",
      "",
      "Source: Best Digital Marketing Agency page",
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    const selectedService = data.service?.trim() || getServiceName(pathname);
    const ctx = buildWhatsAppContext(
      pathname,
      typeof window !== "undefined" ? window.location.search : "",
      "whatsapp_form",
      "strategy_call_form",
    );
    trackWhatsAppClick(
      ctx,
      WHATSAPP_NUMBER,
      typeof window !== "undefined" ? window.location.href : "",
      {
        placement: "strategy_call_form",
        selected_service: selectedService,
        form_submitted: true,
      },
    );

    logInquiry({
      inquiry_type: "form_submission",
      name: data.name,
      phone: data.phone,
      email: data.email || undefined,
      business: data.business || undefined,
      service: selectedService,
      message: data.message || undefined,
      source_page: pathname,
      source_url: typeof window !== "undefined" ? window.location.href : "",
      placement: "strategy_call_form",
      whatsapp_number: WHATSAPP_NUMBER,
      utm_source: ctx.utm_source,
      utm_medium: ctx.utm_medium,
      utm_campaign: ctx.utm_campaign,
      utm_content: ctx.utm_content,
      utm_term: ctx.utm_term,
    });

    toast({
      title: "Opening WhatsApp…",
      description: "We'll respond within 1 business hour.",
    });

    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitting(false);
  };

  return (
    <div className="bg-gradient-to-br from-primary/15 via-background to-accent/10 border border-primary/30 rounded-2xl p-6 md:p-10 shadow-lg">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left: pitch */}
        <div>
          <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">
            FREE — NO OBLIGATION
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Request a Free Strategy Call
          </h2>
          <p className="text-muted-foreground mb-6">
            Get a custom multi-channel growth plan tailored to your business. Our team will analyse your goals and recommend the fastest path to more leads and sales — at zero cost.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground mb-6">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> 30-minute strategy session with a senior consultant</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> Custom recommendations for your industry</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> Transparent pricing with no hidden fees</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> Response within 1 business hour</li>
          </ul>
          <div className="space-y-2 text-sm">
            <a href="tel:+94771437707" className="flex items-center gap-2 text-foreground hover:text-primary transition">
              <Phone className="w-4 h-4" /> +94 77 143 7707
            </a>
            <a href="mailto:infobuzzconnect@gmail.com" className="flex items-center gap-2 text-foreground hover:text-primary transition">
              <Mail className="w-4 h-4" /> infobuzzconnect@gmail.com
            </a>
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="bg-background/80 backdrop-blur rounded-xl p-5 md:p-6 border border-border space-y-4" noValidate>
          <div>
            <Label htmlFor="sc-name">Full Name *</Label>
            <Input id="sc-name" name="name" placeholder="John Perera" maxLength={100} required aria-invalid={!!errors.name} />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="sc-phone">Phone *</Label>
              <Input id="sc-phone" name="phone" type="tel" placeholder="+94 77 123 4567" maxLength={20} required aria-invalid={!!errors.phone} />
              {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
            </div>
            <div>
              <Label htmlFor="sc-email">Email</Label>
              <Input id="sc-email" name="email" type="email" placeholder="you@company.lk" maxLength={255} aria-invalid={!!errors.email} />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="sc-business">Business / Company</Label>
            <Input id="sc-business" name="business" placeholder="Your business name" maxLength={100} />
          </div>

          <div>
            <Label htmlFor="sc-service">Interested In</Label>
            <select
              id="sc-service"
              name="service"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              defaultValue=""
            >
              <option value="">Select a service</option>
              <option>Multi-Channel Strategy</option>
              <option>Email Marketing</option>
              <option>SMS Marketing</option>
              <option>WhatsApp Marketing</option>
              <option>SEO Services</option>
              <option>Google Ads</option>
              <option>Social Media Marketing</option>
              <option>Website Design</option>
              <option>Lead Generation</option>
            </select>
          </div>

          <div>
            <Label htmlFor="sc-message">Tell us about your goals</Label>
            <Textarea id="sc-message" name="message" rows={3} placeholder="e.g. I want to generate 50 qualified leads per month for my hotel." maxLength={1000} />
          </div>

          <Button type="submit" size="lg" className="w-full font-semibold" disabled={submitting}>
            <MessageCircle className="w-4 h-4 mr-2" />
            {submitting ? "Sending…" : "Send via WhatsApp"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            By submitting, you'll be redirected to WhatsApp to confirm your request.
          </p>
        </form>
      </div>
    </div>
  );
};

export default StrategyCallForm;
