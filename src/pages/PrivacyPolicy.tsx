import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { readChoice, saveChoices } from "@/lib/consent";

export default function PrivacyPolicy() {
  const [denied, setDenied] = useState(readChoice("advertising") === "denied");
  const optOut = () => {
    saveChoices({ advertising: "denied" });
    try {
      localStorage.setItem("buzz_privacy_notice_record", JSON.stringify({
        purpose: "advertising", choice: "denied", at: Date.now(), notice: "meta-pageview-v1",
        recipient: "Meta", purposes: ["measurement", "remarketing", "advertising optimization"],
      }));
    } catch { /* The shared gate retains a refusal even if storage is unavailable. */ }
    setDenied(true);
  };
  return <div className="container mx-auto px-4 pt-24 pb-16 max-w-3xl">
    <SEOHead title="Privacy & Facebook Tracking | Buzz Connect" description="Facebook website measurement, regional privacy limits and advertising opt-outs at Buzz Connect." canonical="/privacy-policy" />
    <h1 className="font-heading text-3xl font-bold mb-8">Privacy & advertising choices</h1>
    <div className="space-y-8 text-muted-foreground leading-relaxed">
      <section><h2 className="text-xl font-semibold text-foreground mb-3">Website and enquiry information</h2><p>Our site uses Google Analytics and Google Ads tags. Enquiry buttons and forms may record the page, selected service, destination number, message and any contact details you provide so we can handle enquiries and review website activity. Opening WhatsApp does not confirm that a message was delivered.</p></section>
      <section><h2 className="text-xl font-semibold text-foreground mb-3">Facebook website measurement</h2><p>Where permitted, the Meta Pixel shares page visits, browser and device information, IP address and advertising cookie identifiers with Meta for advertising measurement, remarketing and optimization. We do not enable automatic form collection, customer matching or server-side Meta event uploads. Enquiry names, phone numbers and WhatsApp messages are not sent as Meta event fields.</p></section>
      <section><h2 className="text-xl font-semibold text-foreground mb-3">Regional limits</h2><p>We do not show a consent banner. Facebook tracking stays off for unanswered visits from the EU/EEA, UK, Switzerland and Canada, and whenever the location cannot be verified. Elsewhere it may run unless you opt out or your browser sends Global Privacy Control. Private, career, finance and healthcare pages, and visits with query strings or fragments, are excluded from Facebook tracking.</p></section>
      <section id="advertising-choices"><h2 className="text-xl font-semibold text-foreground mb-3">Advertising choices</h2><p className="mb-4">You can stop Facebook tracking for this browser below. Your refusal takes effect immediately, is saved with the time and notice version, and applies to other open tabs. It does not erase information already received by Meta. This choice does not change existing Google tracking or our enquiry records. Contact us for questions about enquiry information or prior sharing.</p><Button variant="outline" onClick={optOut} disabled={denied}>{denied ? "Facebook tracking is off" : "Turn off Facebook tracking"}</Button><p className="mt-4 text-sm">Clearing browser storage removes this saved choice. A browser privacy signal continues to block Facebook tracking.</p></section>
      <section><h2 className="text-xl font-semibold text-foreground mb-3">Contact and further information</h2><p>Contact Buzz Connect at <a className="text-accent hover:underline" href="mailto:infobuzzconnect@gmail.com">infobuzzconnect@gmail.com</a>. See <a className="text-accent hover:underline" href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">Meta’s Privacy Policy</a> for how Meta uses information it receives.</p></section>
    </div>
  </div>;
}