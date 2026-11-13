import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageCircle } from "lucide-react";
import {
  socialCampaignPackages,
  socialManagementPlans,
  socialWa,
  EXTRA_WEEK_PRICE,
  EXTRA_WEEK_WA_TEXT,
} from "@/data/socialPackages";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs font-semibold tracking-wider uppercase text-accent">{children}</span>
);

interface Props {
  /** Anchor id for the campaign packages grid (default "packages"). */
  packagesId?: string;
  /** Anchor id for the monthly management grid (default "management"). */
  managementId?: string;
}

/**
 * Shared duration-based campaign packages + monthly management plans.
 * Used by the social media packages page and the campaigns cluster page so
 * prices, inclusions and WhatsApp messages stay identical everywhere.
 */
const SocialPackagesSection = ({ packagesId = "packages", managementId = "management" }: Props) => (
  <>
    {/* Duration-based campaign packages */}
    <section id={packagesId} className="scroll-mt-24">
      <SectionLabel>Pricing</SectionLabel>
      <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4">Our social media marketing packages &amp; pricing</h2>
      <p className="text-muted-foreground max-w-4xl mb-8">
        Pick a duration — 1, 2, 3 or 4 weeks. Every package runs on Facebook &amp; Instagram (longer packages add TikTok and YouTube) and is amplified through <strong className="text-foreground">Findit.lk</strong> to build awareness beyond the social feeds.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {socialCampaignPackages.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col p-6 sm:p-7 rounded-2xl border ${p.popular ? "border-accent bg-accent/5 shadow-lg" : "border-border bg-card"}`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold bg-accent text-accent-foreground">Most popular</span>
            )}
            <h3 className="font-heading font-semibold text-lg mb-1">{p.name}</h3>
            {p.badge && (
              <span className="inline-block w-fit px-2.5 py-1 rounded-full text-[11px] font-semibold bg-accent/10 text-accent border border-accent/30 mb-2">{p.badge}</span>
            )}
            <div className="font-heading text-2xl font-bold text-accent mb-2">{p.price}</div>
            <p className="text-sm text-muted-foreground mb-5">{p.best}</p>
            <ul className="space-y-2.5 mb-6 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <a href={socialWa(p.waText)} target="_blank" rel="noopener noreferrer" data-selected-service="Social Media Packages">
              <Button variant={p.popular ? "default" : "outline"} className="w-full">
                <MessageCircle className="mr-2 w-4 h-4" /> {p.cta}
              </Button>
            </a>
          </div>
        ))}
      </div>
      <div className="mt-6 p-5 rounded-2xl bg-accent/10 border border-accent/30 max-w-4xl">
        <p className="text-sm">
          <strong className="text-foreground">Need longer?</strong> Add an extra week to any package for <strong className="text-foreground">{EXTRA_WEEK_PRICE}</strong> — includes the continued boost plus a Findit.lk ad.{" "}
          <a href={socialWa(EXTRA_WEEK_WA_TEXT)} target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">Ask about an extra week</a>.
        </p>
      </div>
      <p className="text-sm text-muted-foreground mt-4 max-w-4xl">
        Need something bigger or multi-location? We build <strong className="text-foreground">custom enterprise packages</strong> too — {" "}
        <a href={socialWa("Hi Buzz Connect, I'd like a custom social media package quote.")} target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">ask for a tailored quote</a>.
      </p>
    </section>

    {/* Monthly management plans */}
    <section id={managementId} className="scroll-mt-24">
      <SectionLabel>Monthly management</SectionLabel>
      <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4">Social media management packages — from LKR 50,000/month</h2>
      <p className="text-muted-foreground max-w-4xl mb-8">
        Prefer an always-on presence instead of a one-off campaign? Our <strong className="text-foreground">monthly social media management packages</strong> keep your pages active, your ads running and your leads flowing — content, community management, paid campaigns and reporting handled for you every month.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {socialManagementPlans.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col p-6 sm:p-7 rounded-2xl border ${p.popular ? "border-accent bg-accent/5 shadow-lg" : "border-border bg-card"}`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold bg-accent text-accent-foreground">Most popular</span>
            )}
            <h3 className="font-heading font-semibold text-lg mb-1">{p.name}</h3>
            <div className="font-heading text-2xl font-bold text-accent mb-2">
              {p.price} <span className="text-sm font-normal text-muted-foreground">{p.period}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-5">{p.best}</p>
            <ul className="space-y-2.5 mb-6 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <a href={socialWa(p.waText)} target="_blank" rel="noopener noreferrer" data-selected-service="Social Media Management">
              <Button variant={p.popular ? "default" : "outline"} className="w-full">
                <MessageCircle className="mr-2 w-4 h-4" /> {p.cta}
              </Button>
            </a>
          </div>
        ))}
      </div>
      <p className="text-sm text-muted-foreground mt-4 max-w-4xl">
        Ad spend is billed separately at actuals — you always see exactly where your budget goes. No long lock-in contracts; scale up, down or pause with 30 days' notice.
      </p>
    </section>
  </>
);

export default SocialPackagesSection;
