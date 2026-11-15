import { z } from "zod";

export const OPT_IN_CONSENT = "I am 18 or older, these contact details are mine, and I agree to receive Buzz Connect offers, promotions, events and learning opportunities through the channels I selected. I can opt out at any time.";
export const OPT_IN_NOTICE_VERSION = "campaign-opt-in-v1";
export const optInSchema = z.object({
  full_name: z.string().trim().min(1, "Enter your name.").max(100),
  email: z.string().trim().toLowerCase().max(254).refine(v => !v || z.string().email().safeParse(v).success, "Enter a valid email address."),
  phone: z.string().trim().transform(v => {
    const digits = v.replace(/[\s()-]/g, "");
    return /^07\d{8}$/.test(digits) ? `+94${digits.slice(1)}` : digits;
  }).refine(v => !v || /^\+[1-9]\d{7,14}$/.test(v), "Enter a Sri Lankan mobile number or an international number starting with +."),
  channels: z.array(z.enum(["email", "sms", "whatsapp"])).min(1, "Choose at least one channel.").max(3),
  consent_confirmed: z.boolean().refine(v => v, "Please confirm your consent."),
}).superRefine((data, ctx) => {
  if (data.channels.includes("email") && !data.email) ctx.addIssue({ code: "custom", path: ["email"], message: "Email is required for email updates." });
  if (data.channels.some(c => c === "sms" || c === "whatsapp") && !data.phone) ctx.addIssue({ code: "custom", path: ["phone"], message: "A mobile number is required for SMS or WhatsApp." });
});

export const canReviewOptIn = (status: string) => status === "new";