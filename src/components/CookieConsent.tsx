import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { readChoice, saveChoices } from "@/lib/consent";

export function openCookieSettings() {
  window.dispatchEvent(new Event("open-cookie-settings"));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const privacySignal = (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
  useEffect(() => {
    const open = () => {
      setAnalytics(readChoice("analytics") === "granted");
      setAdvertising(readChoice("advertising") === "granted");
      setVisible(true);
    };
    window.addEventListener("open-cookie-settings", open);
    return () => { window.removeEventListener("open-cookie-settings", open); };
  }, []);
  useEffect(() => { if (visible) panel.current?.focus({ preventScroll: true }); }, [visible]);
  const save = (analyticsEnabled: boolean, advertisingEnabled: boolean) => {
    saveChoices({ analytics: analyticsEnabled ? "granted" : "denied", advertising: advertisingEnabled ? "granted" : "denied" });
    setVisible(false);
  };
  if (!visible) return null;
  return <div ref={panel} role="dialog" aria-modal="false" aria-labelledby="cookie-title" tabIndex={-1} className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-xl max-h-[85dvh] overflow-y-auto rounded-lg border border-border bg-background p-5 shadow-xl text-foreground focus:outline-none">
    <h2 id="cookie-title" className="font-heading text-xl font-semibold">Cookie settings</h2>
    <p className="mt-2 text-sm text-muted-foreground">We count visits without cookies. If you accept analytics, we also measure clicks. Advertising cookies help measure campaigns and show relevant ads.</p>
    <Link to="/privacy-policy" className="mt-2 inline-block text-sm underline">Privacy policy</Link>
      <div className="mt-4 divide-y divide-border">
        <div className="flex justify-between gap-4 py-3 text-sm"><span>Necessary</span><span className="text-muted-foreground">Always on</span></div>
        <label className="flex items-center justify-between gap-4 py-3 text-sm"><span>Analytics, provided by Lovable and Google</span><Switch aria-label="Analytics permission" checked={analytics && !privacySignal} disabled={privacySignal} onCheckedChange={setAnalytics} /></label>
        <label className="flex items-center justify-between gap-4 py-3 text-sm"><span>Advertising, provided by Meta and Google</span><Switch aria-label="Advertising permission" checked={advertising && !privacySignal} disabled={privacySignal} onCheckedChange={setAdvertising} /></label>
      </div>
      {privacySignal && <p className="text-sm text-muted-foreground">Your browser's privacy signal applies. Optional tracking is off.</p>}
      <Button className="mt-4 w-full" variant="outline" onClick={() => save(analytics, advertising)}>Save choices</Button>
  </div>;
}