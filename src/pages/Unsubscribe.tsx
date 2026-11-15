import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Smartphone, MessageCircle, Paperclip, X, Check } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

const CHANNELS = [
  { value: "email", label: "Email" },
  { value: "sms", label: "SMS" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "all", label: "All messages from Buzz Connect" },
] as const;

const COUNTRY_CODES = [
  { code: "+94", label: "+94 LK" },
  { code: "+91", label: "+91 IN" },
  { code: "+44", label: "+44 UK" },
  { code: "+61", label: "+61 AU" },
];

const RATE_KEY = "bc_optout_submissions";
const MAX_PER_HOUR = 5;
const MAX_FILES = 3;
const MAX_FILE_SIZE = 5 * 1024 * 1024;

const makeReference = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let ref = "BC-";
  for (let i = 0; i < 6; i++) ref += chars[Math.floor(Math.random() * chars.length)];
  return ref;
};

const normalizePhone = (raw: string, code: string): string | null => {
  const digits = raw.replace(/[\s-]/g, "");
  if (!digits) return null;
  if (code === "+94") {
    const m = digits.match(/^(\+94|0)?(7\d{8})$/);
    return m ? `+94${m[2]}` : null;
  }
  const m = digits.match(/^\+?(\d{6,15})$/);
  return m ? `${code}${m[1].replace(/^0+/, "")}` : null;
};

const tooManySubmissions = (): boolean => {
  try {
    const raw = localStorage.getItem(RATE_KEY);
    const stamps: number[] = raw ? JSON.parse(raw) : [];
    const recent = stamps.filter((t) => Date.now() - t < 60 * 60 * 1000);
    localStorage.setItem(RATE_KEY, JSON.stringify(recent));
    return recent.length >= MAX_PER_HOUR;
  } catch {
    return false;
  }
};

const recordSubmission = () => {
  try {
    const raw = localStorage.getItem(RATE_KEY);
    const stamps: number[] = raw ? JSON.parse(raw) : [];
    stamps.push(Date.now());
    localStorage.setItem(RATE_KEY, JSON.stringify(stamps));
  } catch {
    /* storage unavailable — submission still allowed */
  }
};

type Errors = {
  contact?: string;
  email?: string;
  phone?: string;
  channels?: string;
  consent?: string;
  files?: string;
  rate?: string;
};

const Unsubscribe = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+94");
  const [channels, setChannels] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<{ reference: string; email: string; phone: string } | null>(null);

  const toggleChannel = (value: string) => {
    if (value === "all") {
      setChannels((prev) => (prev.includes("all") ? [] : ["email", "sms", "whatsapp", "all"]));
      return;
    }
    if (channels.includes("all")) return; // locked while "all" is ticked
    setChannels((prev) => (prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]));
  };

  const addFiles = (list: FileList | null) => {
    if (!list) return;
    const next = [...files];
    let fileError = "";
    for (const f of Array.from(list)) {
      if (next.length >= MAX_FILES) {
        fileError = "You can attach up to 3 screenshots.";
        break;
      }
      if (!f.type.startsWith("image/")) {
        fileError = "Please choose image files only.";
        continue;
      }
      if (f.size > MAX_FILE_SIZE) {
        fileError = `${f.name} is larger than 5 MB.`;
        continue;
      }
      next.push(f);
    }
    setFiles(next);
    setErrors((e) => ({ ...e, files: fileError || undefined }));
  };

  const validate = (): boolean => {
    const next: Errors = {};
    const trimmedEmail = email.trim().toLowerCase();
    const normalizedPhone = normalizePhone(phone, countryCode);
    if (!trimmedEmail && !phone.trim()) {
      next.contact = "Please enter your email address or mobile number so we can remove you.";
    }
    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      next.email = "Please check your email address.";
    }
    if (phone.trim() && !normalizedPhone) {
      next.phone = "Please enter a valid mobile number, e.g. 0771234567.";
    }
    if (channels.length === 0) {
      next.channels = "Please choose which messages to stop.";
    }
    if (!consent) {
      next.consent = "Please confirm to continue.";
    }
    if (tooManySubmissions()) {
      next.rate = "You've sent several requests recently. Please try again in about an hour, or email infobuzzconnect@gmail.com.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    if (!validate()) return;

    const reference = makeReference();
    const trimmedEmail = email.trim().toLowerCase();
    const normalizedPhone = normalizePhone(phone, countryCode);

    // Honeypot filled → bot: pretend success without storing anything.
    if (honeypot) {
      setSuccess({ reference, email: trimmedEmail, phone: normalizedPhone || "" });
      return;
    }

    setSubmitting(true);
    try {
      const id = crypto.randomUUID();
      const paths: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const f = files[i];
        const safeName = f.name.replace(/[^a-zA-Z0-9._-]/g, "_");
        const path = `${id}/${i + 1}-${safeName}`;
        const { error: uploadError } = await supabase.storage.from("opt-out-screenshots").upload(path, f);
        if (!uploadError) paths.push(path);
      }
      const { error } = await supabase.from("opt_out_requests").insert({
        id,
        reference,
        email: trimmedEmail || null,
        phone: normalizedPhone,
        channels,
        screenshot_paths: paths,
        consent_confirmed: true,
      });
      if (error) throw error;
      recordSubmission();
      setSuccess({ reference, email: trimmedEmail, phone: normalizedPhone || "" });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setErrors({ rate: "Something went wrong while sending your request. Please try again, or email infobuzzconnect@gmail.com." });
    } finally {
      setSubmitting(false);
    }
  };

  const wantsSmsOrWhatsApp = channels.some((c) => c === "sms" || c === "whatsapp" || c === "all");

  return (
    <div className="pt-14 sm:pt-16 bg-background min-h-screen">
      <SEOHead
        title="Manage Your Messages or Unsubscribe | Buzz Connect"
        description="Choose which emails, SMS or WhatsApp messages you get from Buzz Connect, or unsubscribe in a minute. Simple, quick and free."
        canonical="/unsubscribe"
        robots="noindex, follow"
      />

      <main className="container mx-auto px-4 py-10 sm:py-16 max-w-3xl">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Manage your messages from Buzz Connect
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Thank you for being part of the Buzz Connect community. We share offers, events and updates from Sri
          Lankan brands, and we only want you to receive messages you find useful. If you'd like to hear from us
          less, or not at all, just let us know below. It only takes a minute.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="flex items-center gap-2 font-semibold text-foreground mb-2">
              <Mail className="w-4 h-4 text-accent" /> Email
            </div>
            <p className="text-sm text-muted-foreground">
              Every email from Buzz Connect includes our footer with an "Unsubscribe" link. One click and you're
              off that list. Don't see our footer? The email may not be from us. Share a screenshot below and
              we'll take a look.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="flex items-center gap-2 font-semibold text-foreground mb-2">
              <Smartphone className="w-4 h-4 text-accent" /> SMS
            </div>
            <p className="text-sm text-muted-foreground">
              Sender names on SMS can sometimes be used by other companies. Share a screenshot of the message
              below, and we'll check whether it came from us and stop it if it did.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="flex items-center gap-2 font-semibold text-foreground mb-2">
              <MessageCircle className="w-4 h-4 text-accent" /> WhatsApp
            </div>
            <p className="text-sm text-muted-foreground">
              You can block the number at any time. To be removed from our lists completely, use the form below
              and add a screenshot so we can find the right list.
            </p>
          </div>
        </div>

        {success ? (
          <section aria-live="polite" className="rounded-2xl border border-border bg-card p-8 shadow-sm text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4">
              <Check className="w-7 h-7" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-1">
              Thank you, we've got your request
            </h2>
            <p className="text-sm text-muted-foreground">Reference</p>
            <p className="inline-block font-mono font-bold text-xl bg-accent/10 text-accent rounded-lg px-4 py-2 my-3">
              {success.reference}
            </p>
            <p className="font-semibold text-foreground">
              We'll remove: {[success.email, success.phone].filter(Boolean).join(" · ")}
            </p>
            <p className="text-muted-foreground mt-3">
              We'll update your preferences within 3 working days. A message that was already scheduled may still
              arrive during this time.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              If the message you shared didn't come from Buzz Connect, we'll let you know.
            </p>
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 my-6 text-left">
              <p className="font-semibold text-foreground">You're always welcome back</p>
              <p className="text-sm text-muted-foreground mt-1">
                You can still explore the latest offers, events and education opportunities in Sri Lanka anytime,
                with no sign-up needed:{" "}
                <a href="https://www.findit.lk" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">
                  findit.lk
                </a>{" "}
                ·{" "}
                <a href="https://study.lk" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">
                  study.lk
                </a>
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/">Back to Buzz Connect</Link>
            </Button>
          </section>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-foreground mb-6">
              Enter the email or number you want removed
            </h2>

            {/* Honeypot — invisible to people, tempting to bots */}
            <div aria-hidden="true" className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden">
              <label>
                Company website
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </label>
            </div>

            <div className="mb-5">
              <label htmlFor="optout-email" className="block font-semibold text-foreground mb-2">
                Email address
              </label>
              <Input
                id="optout-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-lg py-6"
              />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
            </div>

            <div className="mb-2">
              <label htmlFor="optout-phone" className="block font-semibold text-foreground mb-2">
                Mobile number
              </label>
              <div className="flex gap-2">
                <select
                  aria-label="Country code"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-28 shrink-0 rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <Input
                  id="optout-phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="07X XXX XXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="text-lg py-6"
                />
              </div>
              {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
              <p className="text-sm font-bold text-foreground mt-2">
                Please enter at least one. This is how we find and remove you from our lists.
              </p>
              {errors.contact && <p className="text-sm text-destructive mt-1">{errors.contact}</p>}
            </div>

            <fieldset className="mt-6 mb-6">
              <legend className="font-semibold text-foreground mb-3">
                Which messages would you like to stop?
              </legend>
              <div className="flex flex-wrap gap-2">
                {CHANNELS.map((c) => {
                  const checked = channels.includes(c.value);
                  const locked = c.value !== "all" && channels.includes("all");
                  return (
                    <label
                      key={c.value}
                      className={`flex items-center gap-2 rounded-lg border px-3 py-2 cursor-pointer text-sm transition-colors ${
                        checked
                          ? "border-accent bg-accent/10 text-foreground"
                          : "border-border bg-background text-muted-foreground"
                      } ${locked ? "opacity-60" : ""}`}
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-[hsl(var(--accent))]"
                        checked={checked}
                        disabled={locked}
                        onChange={() => toggleChannel(c.value)}
                      />
                      {c.label}
                    </label>
                  );
                })}
              </div>
              {errors.channels && <p className="text-sm text-destructive mt-2">{errors.channels}</p>}
            </fieldset>

            <div className="mb-6">
              <span className="block font-semibold text-foreground mb-2">
                Share a screenshot of the message{" "}
                <span className="font-normal text-muted-foreground text-sm">
                  (optional, recommended for SMS and WhatsApp)
                </span>
              </span>
              <label
                htmlFor="optout-file"
                className="block border-2 border-dashed border-border rounded-xl p-5 text-center cursor-pointer text-muted-foreground hover:border-accent transition-colors"
              >
                <Paperclip className="w-5 h-5 mx-auto mb-1" />
                Tap to add screenshots
                <span className="block text-xs mt-1">JPG, PNG, WEBP or HEIC · max 5 MB each</span>
              </label>
              <input
                id="optout-file"
                type="file"
                accept="image/*"
                multiple
                hidden
                onChange={(e) => {
                  addFiles(e.target.files);
                  e.target.value = "";
                }}
              />
              {files.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-3">
                  {files.map((f, i) => (
                    <div key={`${f.name}-${i}`} className="relative w-20 h-20 rounded-lg overflow-hidden border border-border">
                      <img src={URL.createObjectURL(f)} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        aria-label={`Remove screenshot ${i + 1}`}
                        onClick={() => setFiles((prev) => prev.filter((_, idx) => idx !== i))}
                        className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/70 text-white flex items-center justify-center"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <p className="text-xs text-muted-foreground mt-2">This helps us confirm the message came from us.</p>
              {errors.files && <p className="text-sm text-destructive mt-1">{errors.files}</p>}
              {wantsSmsOrWhatsApp && files.length === 0 && (
                <p className="text-sm bg-accent/10 text-foreground rounded-lg px-3 py-2 mt-2">
                  Tip: adding a screenshot helps us find the sender. You can still continue without one.
                </p>
              )}
            </div>

            <div className="mb-6">
              <label className="flex items-start gap-3 bg-accent/5 border border-accent/20 rounded-lg p-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 mt-0.5 shrink-0 accent-[hsl(var(--accent))]"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <span className="text-sm text-foreground">
                  This email address and/or number is mine, and I'd like Buzz Connect to stop the messages I've
                  selected.
                </span>
              </label>
              {errors.consent && <p className="text-sm text-destructive mt-1">{errors.consent}</p>}
            </div>

            {errors.rate && <p className="text-sm text-destructive mb-4">{errors.rate}</p>}

            <Button type="submit" size="lg" className="w-full text-base font-bold" disabled={submitting}>
              {submitting ? "Sending…" : "Remove me"}
            </Button>

            <p className="text-xs text-muted-foreground mt-4">
              We use these details only to update your preferences and to remember your choice, so you aren't
              added again. Questions? Email{" "}
              <a href="mailto:infobuzzconnect@gmail.com" className="text-accent hover:underline">
                infobuzzconnect@gmail.com
              </a>{" "}
              or read our{" "}
              <Link to="/privacy-policy#manage-messages" className="text-accent hover:underline">
                privacy policy
              </Link>
              .
            </p>
          </form>
        )}
      </main>
    </div>
  );
};

export default Unsubscribe;
