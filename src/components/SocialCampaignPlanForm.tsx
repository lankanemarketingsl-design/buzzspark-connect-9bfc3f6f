import { FormEvent, useState } from "react";
import { useLocation } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { logInquiry } from "@/lib/logInquiry";
import { ArrowRight, MessageCircle } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().min(2, "Please enter your company name").max(120),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20).regex(/^[0-9+\s()-]+$/, "Please enter a valid phone number"),
  industry: z.string().trim().max(100).optional().or(z.literal("")),
  website: z.string().trim().max(200).optional().or(z.literal("")),
  goal: z.string().trim().min(5, "Tell us what you want to achieve").max(500),
  budget: z.string().trim().max(100).optional().or(z.literal("")),
  platform: z.string().trim().max(100).optional().or(z.literal("")),
});

type FormErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;
const WHATSAPP_NUMBER = "94771437707";

const SocialCampaignPlanForm = () => {
  const { pathname } = useLocation();
  const { toast } = useToast();
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const raw = {
      name: String(form.get("name") || ""),
      company: String(form.get("company") || ""),
      phone: String(form.get("phone") || ""),
      industry: String(form.get("industry") || ""),
      website: String(form.get("website") || ""),
      goal: String(form.get("goal") || ""),
      budget: String(form.get("budget") || ""),
      platform: String(form.get("platform") || ""),
    };
    const result = schema.safeParse(raw);
    if (!result.success) {
      const next: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormErrors;
        if (key && !next[key]) next[key] = issue.message;
      });
      setErrors(next);
      return;
    }

    setErrors({});
    setSubmitting(true);
    const data = result.data;
    const message = [
      "Hi Buzz Connect, I'd like a free social media campaign plan.",
      "",
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      `Phone/WhatsApp: ${data.phone}`,
      data.industry ? `Industry: ${data.industry}` : "",
      data.website ? `Website: ${data.website}` : "",
      `Goal: ${data.goal}`,
      data.budget ? `Estimated monthly marketing budget: ${data.budget}` : "",
      data.platform ? `Preferred platform: ${data.platform}` : "",
    ].filter(Boolean).join("\n");

    await logInquiry({
      inquiry_type: "form_submission",
      name: data.name,
      phone: data.phone,
      business: data.company,
      service: "Social Media Marketing",
      message: [data.goal, data.industry, data.website, data.budget, data.platform].filter(Boolean).join(" | "),
      source_page: pathname,
      source_url: window.location.href,
      placement: "social_campaign_plan_form",
      whatsapp_number: WHATSAPP_NUMBER,
    });

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    toast({ title: "Opening WhatsApp", description: "Your campaign details are ready to send." });
    setSubmitting(false);
  };

  return (
    <form onSubmit={submit} className="grid gap-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div><Label htmlFor="plan-name">Name *</Label><Input id="plan-name" name="name" placeholder="Your name" aria-invalid={!!errors.name} />{errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}</div>
        <div><Label htmlFor="plan-company">Company *</Label><Input id="plan-company" name="company" placeholder="Business name" aria-invalid={!!errors.company} />{errors.company && <p className="text-xs text-destructive mt-1">{errors.company}</p>}</div>
        <div><Label htmlFor="plan-phone">Phone / WhatsApp *</Label><Input id="plan-phone" name="phone" type="tel" placeholder="+94 77 123 4567" aria-invalid={!!errors.phone} />{errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}</div>
        <div><Label htmlFor="plan-industry">Industry</Label><Input id="plan-industry" name="industry" placeholder="Hospitality, education, retail..." /></div>
        <div><Label htmlFor="plan-website">Website</Label><Input id="plan-website" name="website" type="url" placeholder="https://yourbusiness.lk" /></div>
        <div><Label htmlFor="plan-budget">Estimated monthly marketing budget</Label><Input id="plan-budget" name="budget" placeholder="e.g. LKR 100,000" /></div>
      </div>
      <div>
        <Label htmlFor="plan-platform">Preferred platform</Label>
        <select id="plan-platform" name="platform" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <option value="">Not sure yet</option><option>Facebook</option><option>Instagram</option><option>TikTok</option><option>LinkedIn</option><option>Multiple platforms</option>
        </select>
      </div>
      <div><Label htmlFor="plan-goal">What do you want to achieve? *</Label><Textarea id="plan-goal" name="goal" rows={4} placeholder="More enquiries, bookings, sales, registrations or brand awareness..." aria-invalid={!!errors.goal} />{errors.goal && <p className="text-xs text-destructive mt-1">{errors.goal}</p>}</div>
      <Button type="submit" size="lg" variant="hero" disabled={submitting} className="w-full sm:w-auto">
        <MessageCircle className="w-4 h-4" /> {submitting ? "Preparing your request…" : "Get My Free Campaign Plan"} <ArrowRight className="w-4 h-4" />
      </Button>
      <p className="text-xs text-muted-foreground">Your details are sent to BuzzConnect and opened in WhatsApp for your confirmation.</p>
    </form>
  );
};

export default SocialCampaignPlanForm;
