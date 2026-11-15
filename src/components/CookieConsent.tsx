import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { needsAnswer, onConsentChange, readChoice, saveChoices } from "@/lib/consent";

export function openCookieSettings() {
  window.dispatchEvent(new Event("open-cookie-settings"));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const manuallyOpened = useRef(false);
  const privacySignal = (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
  useEffect(() => {
    let active = true;
    const refresh = () => {
      void needsAnswer(["analytics", "advertising"]).then(answer => { if (active && !manuallyOpened.current) setVisible(answer); });
    };
    const open = () => {
      manuallyOpened.current = true;
      setAnalytics(readChoice("analytics") === "granted");
      setAdvertising(readChoice("advertising") === "granted");
      setSettings(true);
      setVisible(true);
    };
    refresh();
    const unsubscribe = onConsentChange(refresh);
    window.addEventListener("open-cookie-settings", open);
    return () => { active = false; unsubscribe(); window.removeEventListener("open-cookie-settings", open); };
  }, []);
  useEffect(() => { if (visible) panel.current?.focus({ preventScroll: true }); }, [visible]);
  const save = (analyticsEnabled: boolean, advertisingEnabled: boolean) => {
    manuallyOpened.current = false;
    saveChoices({ analytics: analyticsEnabled ? "granted" : "denied", advertising: advertisingEnabled ? "granted" : "denied" });
    setVisible(false);
    setSettings(false);
  };
  if (!visible) return null;
  return <div ref={panel} role="dialog" aria-modal="false" aria-labelledby="cookie-title" tabIndex={-1} className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-xl max-h-[85dvh] overflow-y-auto rounded-lg border border-border bg-background p-5 shadow-xl text-foreground focus:outline-none">
    <h2 id="cookie-title" className="font-heading text-xl font-semibold">{settings ? "Cookie settings" : "Your privacy choices"}</h2>
    <p className="mt-2 text-sm text-muted-foreground">We count visits without cookies. If you accept analytics, we also measure clicks. Advertising cookies help measure campaigns and show relevant ads.</p>
    <Link to="/privacy-policy" className="mt-2 inline-block text-sm underline">Privacy policy</Link>
    {settings ? <>
      <div className="mt-4 divide-y divide-border">
        <div className="flex justify-between gap-4 py-3 text-sm"><span>Necessary</span><span className="text-muted-foreground">Always on</span></div>
        <label className="flex items-center justify-between gap-4 py-3 text-sm"><span>Analytics, provided by Lovable and Google</span><Switch aria-label="Analytics permission" checked={analytics && !privacySignal} disabled={privacySignal} onCheckedChange={setAnalytics} /></label>
        <label className="flex items-center justify-between gap-4 py-3 text-sm"><span>Advertising, provided by Meta and Google</span><Switch aria-label="Advertising permission" checked={advertising && !privacySignal} disabled={privacySignal} onCheckedChange={setAdvertising} /></label>
      </div>
      {privacySignal && <p className="text-sm text-muted-foreground">Your browser's privacy signal applies. Optional tracking is off.</p>}
      <Button className="mt-4 w-full" variant="outline" onClick={() => save(analytics, advertising)}>Save choices</Button>
    </> : <>
      <div className="mt-4 grid grid-cols-2 gap-3"><Button variant="outline" onClick={() => save(true, true)}>Accept all</Button><Button variant="outline" onClick={() => save(false, false)}>Reject all</Button></div>
      <Button variant="ghost" className="mt-2 w-full" onClick={() => { setAnalytics(readChoice("analytics") === "granted"); setAdvertising(readChoice("advertising") === "granted"); setSettings(true); }}>Cookie settings</Button>
    </>}
  </div>;
}