import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Smartphone, MessageCircle, Check } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { optInSchema, OPT_IN_CONSENT, OPT_IN_NOTICE_VERSION } from "@/data/campaignOptIn";

export default function OptIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [channels, setChannels] = useState<Array<"email" | "sms" | "whatsapp">>([]);
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [reference, setReference] = useState("");
  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (sending) return;
    const parsed = optInSchema.safeParse({ full_name: name, email, phone, channels, consent_confirmed: consent });
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? "Please check your details."); return; }
    setSending(true); setError("");
    const ref = `BI-${crypto.randomUUID().replace(/-/g, "").slice(0, 8).toUpperCase()}`;
    try {
      const { error: saveError } = await supabase.from("opt_in_requests").insert({
        full_name: parsed.data.full_name ?? name.trim(),
        channels: parsed.data.channels ?? channels,
        consent_confirmed: parsed.data.consent_confirmed === true,
        email: parsed.data.email || null, phone: parsed.data.phone || null,
        reference: ref, consent_text: OPT_IN_CONSENT, notice_version: OPT_IN_NOTICE_VERSION,
      });
      if (saveError) throw saveError;
      setReference(ref);
    } catch { setError("Your request could not be saved. Please try again."); }
    finally { setSending(false); }
  };
  return <div className="pt-14 sm:pt-16">
    <SEOHead title="Subscribe to Campaign Updates | Buzz Connect" description="Request Buzz Connect offers, promotions, events and learning opportunities by email, SMS or WhatsApp. Choose your channels and unsubscribe anytime." canonical="/subscribe" robots="noindex, follow" />
    <div className="container mx-auto px-4 py-10 sm:py-16 max-w-3xl">
      <div className="flex gap-2 mb-7"><Button asChild variant="default"><Link to="/subscribe">Subscribe</Link></Button><Button asChild variant="outline"><Link to="/unsubscribe">Unsubscribe</Link></Button></div>
      <h1 className="font-heading text-3xl font-bold mb-4">Get updates from Buzz Connect</h1>
      <p className="text-muted-foreground mb-8">Choose the offers, promotions, events and learning opportunities you'd like to receive by email, SMS or WhatsApp. You can opt out at any time.</p>
      {reference ? <section aria-live="polite" className="border border-border rounded-lg p-6 space-y-4">
        <Check className="text-accent w-8 h-8" />
        <h2 className="font-heading text-xl font-semibold">Your opt-in request is saved</h2>
        <p className="font-mono">{reference}</p><p className="text-muted-foreground">Our team will review your request before adding you to the selected lists. This does not confirm that you've been subscribed or that your contact details have been verified.</p>
        <Button asChild variant="outline"><Link to="/unsubscribe">Change your mind? Opt out</Link></Button>
      </section> : <form onSubmit={submit} noValidate className="border border-border rounded-lg bg-card p-5 sm:p-8 space-y-6">
        <div><label htmlFor="join-name" className="block font-semibold mb-2">Name</label><Input id="join-name" autoComplete="name" maxLength={100} value={name} onChange={e => setName(e.target.value)} /></div>
        <div><label htmlFor="join-email" className="block font-semibold mb-2">Email address</label><Input id="join-email" type="email" autoComplete="email" maxLength={254} value={email} onChange={e => setEmail(e.target.value)} /></div>
        <div><label htmlFor="join-phone" className="block font-semibold mb-2">Mobile number</label><Input id="join-phone" type="tel" autoComplete="tel" placeholder="0771234567 or +94…" maxLength={30} value={phone} onChange={e => setPhone(e.target.value)} /></div>
        <fieldset><legend className="font-semibold mb-3">Which channels would you like?</legend><div className="flex flex-wrap gap-4">{([{ value: "email", label: "Email", Icon: Mail }, { value: "sms", label: "SMS", Icon: Smartphone }, { value: "whatsapp", label: "WhatsApp", Icon: MessageCircle }] as const).map(({ value, label, Icon }) => <label key={value} className="flex items-center gap-2"><input type="checkbox" checked={channels.includes(value)} onChange={() => setChannels(previous => previous.includes(value) ? previous.filter(c => c !== value) : [...previous, value])} /><Icon className="w-4 h-4 text-accent" />{label}</label>)}</div></fieldset>
        <label className="flex items-start gap-3 text-sm leading-relaxed"><input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-1 shrink-0" />{OPT_IN_CONSENT}</label>
        {error && <p role="alert" className="text-destructive text-sm">{error}</p>}
        <Button type="submit" disabled={sending} className="w-full">{sending ? "Saving…" : "Request to join"}</Button>
        <p className="text-sm text-muted-foreground">We never sell your data. Requests are reviewed before enrollment. Read our <Link to="/privacy-policy" className="text-accent hover:underline">privacy policy</Link>. This choice does not enable website advertising tracking.</p>
      </form>}
    </div>
  </div>;
}