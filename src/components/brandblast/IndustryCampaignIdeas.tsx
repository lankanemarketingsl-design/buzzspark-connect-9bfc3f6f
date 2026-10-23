import { MessageCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getIndustryCampaigns } from "@/data/bb360IndustryCampaigns";

export default function IndustryCampaignIdeas({ industryId, industryName }: { industryId: string; industryName: string }) {
  const campaigns = getIndustryCampaigns(industryId);
  if (!campaigns.length) return null;

  return (
    <section id="industry-campaign-ideas" className="border-y border-primary-foreground/10 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase text-secondary">Choose your promotion</p>
          <h2 className="mt-2 font-heading text-3xl font-black sm:text-4xl">Campaign ideas for {industryName.toLowerCase()} in Sri Lanka</h2>
          <p className="mt-3 text-primary-foreground/65">From introducing your business to promoting an offer or hiring your next team member — start with one clear message and a practical next step.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map(campaign => (
            <article key={campaign.badge} className="flex flex-col rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] p-5 sm:p-6">
              <p className="text-xs font-semibold text-secondary">{campaign.badge}</p>
              <h3 className="mt-2 font-heading text-lg font-bold">{campaign.title}</h3>
              <ul className="my-5 flex-1 space-y-3 text-sm leading-relaxed text-primary-foreground/65">
                {campaign.points.map(point => <li key={point} className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-secondary" /><span>{point}</span></li>)}
              </ul>
              <Button variant="hero-outline" asChild className="w-full">
                <a href={`https://wa.me/94771976351?text=${encodeURIComponent(`Hi Buzz Connect, I want to plan a Brand Blast 360 campaign for ${industryName}: ${campaign.title}. Please share the next steps.`)}`} target="_blank" rel="noopener noreferrer" data-wa-placement={`bb360_${industryId}_idea_${campaign.badge.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`} data-selected-service={`Brand Blast 360 — ${industryName} — ${campaign.badge}`}>
                  <MessageCircle className="h-4 w-4" />Plan this campaign
                </a>
              </Button>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-primary-foreground/50">Audience options are confirmed during planning. Remarketing depends on eligible audiences, consent, tracking and platform requirements; enquiries and sales are not guaranteed.</p>
      </div>
    </section>
  );
}