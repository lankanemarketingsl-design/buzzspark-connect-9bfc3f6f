import { useState } from "react";
import { Link } from "react-router-dom";
import { Copy, Mail, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { readChoice, saveChoices } from "@/lib/consent";
import { privacyPolicyContent, unsubscribeMailto, unsubscribeEmailText } from "@/data/privacyPolicy";

export default function PrivacyPolicy() {
  const [denied, setDenied] = useState(readChoice("advertising") === "denied");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(unsubscribeEmailText);
      setCopied(true); setCopyError(false);
      window.setTimeout(() => setCopied(false), 2000);
    } catch { setCopyError(true); }
  };
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
  return <main className="container mx-auto px-4 pt-24 pb-16 max-w-4xl overflow-x-hidden">
    <SEOHead title="Privacy Policy | Buzz Connect" description="How Buzz Connect uses your information, our promise about client data, and two easy ways to stop our email, SMS or WhatsApp messages." canonical="/privacy-policy" />
    <h1 className="font-heading text-3xl font-bold mb-2">Privacy Policy</h1>
    <p className="text-sm text-muted-foreground mb-8">Last updated: 15 November 2026</p>
    <div className="space-y-4 text-muted-foreground leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: privacyPolicyContent.intro }} />
    <aside className="border-l-4 border-accent bg-accent/10 p-5 mb-10">
      <h2 className="font-heading text-xl font-semibold mb-3">In short</h2>
      <div className="space-y-3 text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: privacyPolicyContent.summary }} />
    </aside>
    <div className="space-y-10 text-muted-foreground leading-relaxed break-words">
      {privacyPolicyContent.sections.map((section) => <section key={section.id} id={section.id} className="scroll-mt-24">
        <h2 className="font-heading text-xl font-semibold text-foreground mb-4">{section.heading}</h2>
        {section.id === "our-website" ? <div className="space-y-8">
          <section><h2 className="text-xl font-semibold text-foreground mb-3">Website and enquiry information</h2><p>Our site uses Google Analytics and Google Ads tags. Enquiry buttons and forms may record the page, selected service, destination number, message and any contact details you provide so we can handle enquiries and review website activity. Opening WhatsApp does not confirm that a message was delivered.</p></section>
          <section><h2 className="text-xl font-semibold text-foreground mb-3">Facebook website measurement</h2><p>Where permitted, the Meta Pixel shares page visits, browser and device information, IP address and advertising cookie identifiers with Meta for advertising measurement, remarketing and optimization. We do not enable automatic form collection, customer matching or server-side Meta event uploads. Enquiry names, phone numbers and WhatsApp messages are not sent as Meta event fields.</p></section>
          <section><h2 className="text-xl font-semibold text-foreground mb-3">Regional limits</h2><p>We do not show a consent banner. Facebook tracking stays off for unanswered visits from the EU/EEA, UK, Switzerland and Canada, and whenever the location cannot be verified. Elsewhere it may run unless you opt out or your browser sends Global Privacy Control. Private, career, finance and healthcare pages, and visits with query strings or fragments, are excluded from Facebook tracking.</p></section>
          <section id="advertising-choices"><h2 className="text-xl font-semibold text-foreground mb-3">Advertising choices</h2><p className="mb-4">You can stop Facebook tracking for this browser below. Your refusal takes effect immediately, is saved with the time and notice version, and applies to other open tabs. It does not erase information already received by Meta. This choice does not change existing Google tracking or our enquiry records. Contact us for questions about enquiry information or prior sharing.</p><Button variant="outline" onClick={optOut} disabled={denied}>{denied ? "Facebook tracking is off" : "Turn off Facebook tracking"}</Button><p className="mt-4 text-sm">Clearing browser storage removes this saved choice. A browser privacy signal continues to block Facebook tracking.</p></section>
          <section><h3 className="text-xl font-semibold text-foreground mb-3">Lovable visitor analytics</h3><p>Lovable's analytics uses no cookies, stores nothing on your device, does not keep IP addresses and does not identify visitors. Lovable collects this data for us. <a className="text-accent hover:underline" href="https://lovable.dev/privacy" target="_blank" rel="noopener noreferrer">Lovable's privacy policy</a> explains how it handles it.</p><p className="mt-3">It records pages visited, where visitors came from, country, browser, operating system and device type, time on the site, page loading speed, errors, and clicks on buttons and links. Detailed data is kept for 90 days and daily summaries for a year.</p><p className="mt-3">Clicks are held back until analytics is accepted for visitors in the EU/EEA, UK, Switzerland and Canada, and when location is unknown. Elsewhere they are recorded unless analytics is rejected. Clicks are never recorded when your browser sends Global Privacy Control, even if you accept. Any saved choice is kept in your browser for up to 12 months. Page visits, time on page, page speed and errors are recorded for every visitor, without cookies and without identifying anyone.</p></section>
          <section><h3 className="text-xl font-semibold text-foreground mb-3">Website tools and stored choices</h3><p>Google Analytics receives website usage and event information, and Google Ads receives advertising measurement information. Where browser consent permits, their tags can store analytics or advertising cookies and send browser, device, IP address and cookie information to Google. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google's privacy policy</a>.</p><p className="mt-3">Our hosting and data services receive enquiry and unsubscribe information, including screenshots you choose to attach. Administrative sign-in stores a session in the browser. The website may remember contact details you provide to enquiry forms, privacy choices and recent unsubscribe submission times in browser storage. Following a WhatsApp link opens WhatsApp, which handles your conversation under its own privacy policy. See <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Meta's privacy policy</a> for information Meta receives.</p></section>
        </div> : section.id === "unsubscribe" ? <>
          <p className="mb-5">We'd love to keep sharing good offers with you, but if you'd rather not hear from us, that's completely okay. No hard feelings.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <article className="rounded-lg border border-border bg-card p-5 min-w-0">
              <h3 className="font-heading font-semibold text-foreground mb-3">Option 1: send us an email (the easiest)</h3>
              <p className="mb-4">Email <a href={unsubscribeMailto} className="text-accent hover:underline">buzzunsubscribe@gmail.com</a> with the email address and/or mobile number you'd like removed. If it's about an SMS or WhatsApp message, a screenshot helps us find it quickly.</p>
              <Button asChild className="w-full h-auto py-3 whitespace-normal"><a href={unsubscribeMailto}><Mail className="w-4 h-4 shrink-0 mr-2" />Email buzzunsubscribe@gmail.com</a></Button>
              <div className="bg-muted p-4 mt-4 rounded-md"><p className="text-sm whitespace-pre-wrap">{unsubscribeEmailText}</p><Button variant="outline" size="sm" className="mt-3" onClick={copyText}><Copy className="w-4 h-4 mr-2" />{copied ? "Copied!" : "Copy text"}</Button>{copyError && <p role="status" className="text-sm mt-2">Please select and copy the sample email above.</p>}</div>
            </article>
            <article className="rounded-lg border border-border bg-card p-5 min-w-0">
              <h3 className="font-heading font-semibold text-foreground mb-3">Option 2: use our unsubscribe page</h3>
              <p className="mb-4">Visit <Link to="/unsubscribe" className="text-accent hover:underline">buzzconnect.lk/unsubscribe</Link>, enter your email or number, and choose which messages to stop.</p>
              <Button asChild variant="outline" className="w-full h-auto py-3 whitespace-normal"><Link to="/unsubscribe">Go to the unsubscribe page<ArrowRight className="w-4 h-4 shrink-0 ml-2" /></Link></Button>
            </article>
          </div>
          <p className="mb-3">Every Buzz Connect email has our footer with an "Unsubscribe" link to request removal. You can also block a WhatsApp number at any time.</p>
          <p className="mb-3"><strong className="text-foreground">We'll remove your contact details from our lists within 7 days.</strong> A message that was already scheduled may still arrive during that time.</p>
          <p>Sometimes other companies use sender names that look like ours. Our messages always carry the Buzz Connect footer and branding. If a message doesn't, or you're not sure it came from us, send a screenshot to <a href={unsubscribeMailto} className="text-accent hover:underline">buzzunsubscribe@gmail.com</a> and we'll check for you.</p>
        </> : <div className="space-y-4" dangerouslySetInnerHTML={{ __html: section.html }} />}
      </section>)}
    </div>
  </main>;
}
