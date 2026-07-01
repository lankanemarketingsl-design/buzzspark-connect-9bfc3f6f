import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, XCircle, ArrowRight, Zap, ShieldCheck, Target,
  BarChart3, Clock, Globe, Sparkles, Rocket, Crown, TrendingUp,
  Layers, Users, Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import IndustryStatsBanner from "@/components/IndustryStatsBanner";

const WA = "94771437707";
const buildWa = (msg: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const oexProblems = [
  "Ads appear on random, unverified Sri Lankan sites",
  "Bot traffic and click fraud inflate your numbers",
  "30–50% of budget lost to exchange technology fees",
  "No brand safety — your ad appears anywhere",
  "Opaque reporting you cannot independently verify",
  "Zero relationship with any Sri Lankan publisher",
  "Weeks of DSP setup before a single impression runs",
];

const pmpAdvantages = [
  "Guaranteed placements on Sri Lanka's top 3 platforms",
  "100% verified human traffic — zero bots, zero fraud",
  "100% of your budget goes directly to media",
  "Full brand safety — every platform owned and moderated by us",
  "Direct, verified reporting from our own platforms",
  "Dedicated account manager, direct publisher relationship",
  "Live across all 3 platforms within 24 hours",
];

const publishers = [
  {
    name: "FindIt.lk",
    tag: "PMP Inventory: Classifieds & Offers",
    link: "https://www.findit.lk/",
    desc: "Sri Lanka's No.1 platform where people come to save money, save time and find the best. Your programmatic ad lands inside an audience already in decision mode.",
    chips: ["Offer Finder", "Save Money & Time", "People-Voted", "Best Deals LK"],
    stats: [{ v: "#1", l: "Offer finder LK" }, { v: "Voted", l: "By the people" }, { v: "All LK", l: "Audience" }],
  },
  {
    name: "Studyway.lk",
    tag: "PMP Inventory: Education",
    link: "https://www.studyway.lk/",
    desc: "Sri Lanka's No.1 education information hub. Students, parents and professionals actively research courses — an unmatched programmatic context for education, finance and aspirational brands.",
    chips: ["Education", "Courses", "Students", "Upskilling"],
    stats: [{ v: "#1", l: "Edu hub LK" }, { v: "18–45", l: "Core age" }, { v: "ABC", l: "Demographics" }],
  },
  {
    name: "YouJobs.lk",
    tag: "PMP Inventory: Careers & Jobs",
    link: "https://youjobs.lk/",
    desc: "Sri Lanka's leading job website connecting employers and active job seekers daily. A prime programmatic channel for employer branding, HR tech, B2B and financial products.",
    chips: ["Jobs", "Employer Branding", "Professionals", "B2B"],
    stats: [{ v: "#1", l: "Growing fast" }, { v: "Active", l: "Job seekers" }, { v: "All LK", l: "Reach" }],
  },
];

const durationPackages = [
  {
    name: "Starter", days: "14 Days", price: "LKR 60,000", perDay: "LKR 4,286/day", featured: false, icon: Rocket,
    features: [
      "14-day programmatic display",
      "Standard banner formats (728×90, 300×250)",
      "Live within 24 hours of approval",
      "End-of-campaign performance report",
      "Zero ad fraud — verified PMP traffic",
    ],
  },
  {
    name: "Growth", days: "30 Days · Most Popular", price: "LKR 110,000", perDay: "LKR 3,667/day", featured: true, icon: Crown,
    features: [
      "30-day programmatic display",
      "Standard + premium PMP placements",
      "Live within 24 hours of approval",
      "Mid-campaign performance report",
      "Dedicated account manager",
      "Zero ad fraud — verified PMP traffic",
    ],
  },
  {
    name: "Brand", days: "45 Days", price: "LKR 160,000", perDay: "LKR 3,556/day", featured: false, icon: TrendingUp,
    features: [
      "45-day programmatic display",
      "Premium placements incl. homepage",
      "Priority activation within 24 hours",
      "Weekly performance reports",
      "Banner design support included",
      "Dedicated account manager",
    ],
  },
  {
    name: "Enterprise", days: "60 Days", price: "Custom", perDay: "Quote on request", featured: false, icon: Award,
    features: [
      "60-day programmatic display",
      "Top-of-page & homepage placements",
      "Full creative design included",
      "Bi-weekly analytics reports",
      "Social media cross-promotion bonus",
      "VIP account & strategy support",
    ],
  },
];

const volumePackages = [
  { name: "Starter", price: "Rs. 48,000", vol: "10,000 impressions", cpm: "Effective CPM Rs. 4,800", featured: false },
  { name: "Growth", price: "Rs. 225,000", vol: "50,000 impressions", cpm: "Effective CPM Rs. 4,500", featured: true },
  { name: "Pro", price: "Rs. 400,000", vol: "100,000 impressions", cpm: "Effective CPM Rs. 4,000", featured: false },
];

const reasons = [
  { icon: Target, title: "Contextual targeting that works", desc: "Each platform is a distinct intent signal — deal-seeking, learning, career. Your message lands in the right mindset." },
  { icon: ShieldCheck, title: "Guaranteed brand safety", desc: "All three publishers are owned and moderated by us. Your brand never appears next to harmful content." },
  { icon: BarChart3, title: "100% media budget efficiency", desc: "Open exchanges take 30–50% in fees. In a PMP that disappears — every rupee reaches a real Sri Lankan." },
  { icon: Sparkles, title: "Verified, transparent reporting", desc: "Impressions and clicks come directly from our owned platforms — not third-party attribution." },
  { icon: Users, title: "Publisher-direct relationship", desc: "Custom placements, flexible formats, editorial partnerships — impossible on any open exchange." },
  { icon: Clock, title: "Live in 24 hours", desc: "No DSP setup, no RTB configuration — the fastest programmatic go-live in Sri Lanka." },
  { icon: Globe, title: "100% Sri Lankan audience", desc: "Every user across all three PMP platforms is verified Sri Lankan. Zero wasted impressions." },
  { icon: Zap, title: "Mobile-first programmatic", desc: "Over 80% of our combined PMP traffic is mobile — banners optimised for real Sri Lankan devices." },
  { icon: Layers, title: "Cross-platform frequency", desc: "One buy, three editorial contexts — classifieds, education and careers. Wider contextual coverage." },
];

const compareRows = [
  ["Sri Lanka premium inventory", "Very limited", "Negotiated", "3 owned top platforms"],
  ["Ad fraud / bot traffic", "High risk", "Reduced", "Zero — verified humans"],
  ["Brand safety", "Not guaranteed", "Publisher-level", "100% guaranteed"],
  ["Budget to media ratio", "50–70%", "~75%", "100%"],
  ["Reporting transparency", "Opaque, 3rd-party", "Partial", "Direct, verified, real-time"],
  ["Audience certainty", "Approximate", "Publisher data", "100% verified LK users"],
  ["Contextual targeting", "Keyword / topic", "Site-level", "Deep editorial context"],
  ["Campaign go-live", "Days to weeks", "Days", "Within 24 hours"],
  ["Minimum spend", "High (DSP + setup)", "Medium", "From LKR 60,000"],
  ["Publisher relationship", "None", "One", "3 publishers, 1 contact"],
];

const steps = [
  { n: "01", title: "Share your objectives", desc: "Tell us your target audience, campaign goals and budget. We recommend the right PMP placements or volume package." },
  { n: "02", title: "Receive your PMP plan", desc: "A clear media plan showing exact placements, durations (or impression volume) and pricing across all 3 platforms." },
  { n: "03", title: "Submit your creative", desc: "Send banner artwork in standard IAB formats. We handle all technical placement. Design support available." },
  { n: "04", title: "Go live and track", desc: "Your programmatic campaign runs within 24 hours. Verified reports delivered directly from our platforms." },
];

const faqs = [
  { q: "What is programmatic advertising in Sri Lanka?", a: "Programmatic advertising in Sri Lanka is the automated, data-driven buying of digital ad placements. Buzz Connect operates a Premium Private Marketplace (PMP) across FindIt.lk, Studyway.lk and YouJobs.lk — the highest tier of programmatic — delivering guaranteed brand-safe placements with 100% verified Sri Lankan audiences and zero ad fraud." },
  { q: "What is a Private Marketplace (PMP)?", a: "A PMP is the premium tier of programmatic advertising — a curated, invitation-only network where publishers offer exclusive, guaranteed ad inventory. Unlike open exchanges where ads land on unknown sites, a PMP guarantees brand-safe placements on premium publishers with transparent reporting and zero bot traffic." },
  { q: "How much does programmatic advertising cost in Sri Lanka?", a: "Duration Packages start from LKR 60,000 for a 14-day campaign across all 3 platforms, up to LKR 160,000 for 45 days (custom for 60-day Enterprise). Volume Packages start from Rs. 48,000 for 10,000 guaranteed impressions." },
  { q: "How quickly can a campaign go live?", a: "Programmatic campaigns through our PMP go live across the network within 24 hours of creative approval. No DSP setup or auction configuration required." },
  { q: "What banner sizes are supported?", a: "All standard IAB formats: Leaderboard (728×90), Medium Rectangle (300×250), Large Rectangle (336×280), Half Page (300×600) and Mobile Banner (320×50). Creative design support included on 45-day+ packages." },
  { q: "Why is a PMP better than open exchanges in Sri Lanka?", a: "Open exchanges in Sri Lanka have very limited premium local inventory, high ad fraud and opaque reporting. Exchange tech fees consume 30–50% of your budget before a single Sri Lankan sees your ad. Our PMP eliminates all of this — guaranteed premium placements, zero fraud, 100% of budget to media." },
];

const ProgrammaticAdvertising = () => {
  const jsonLd = useMemo(() => [
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@context": "https://schema.org", "@type": "Service", name: "Programmatic Advertising Sri Lanka", provider: { "@type": "Organization", name: "Buzz Connect" }, areaServed: { "@type": "Country", name: "Sri Lanka" }, description: "Sri Lanka's Premium Private Marketplace (PMP) programmatic advertising across FindIt.lk, Studyway.lk and YouJobs.lk. Brand-safe, verified, zero ad fraud." },
  ], []);

  return (
    <ServicePageLayout
      badge="Programmatic Advertising · Private Marketplace"
      title="Programmatic Advertising Sri Lanka — Finally Done Right"
      subtitle="Buzz Connect operates Sri Lanka's Premium Private Marketplace (PMP) — the most advanced and brand-safe tier of programmatic advertising, built on the island's three most trusted digital platforms: FindIt.lk, Studyway.lk and YouJobs.lk."
    >
      <SEOHead
        title="Programmatic Advertising Sri Lanka | Private Marketplace PMP"
        description="Sri Lanka's Premium Private Marketplace programmatic advertising across FindIt.lk, Studyway.lk & YouJobs.lk. Zero ad fraud, 100% verified LK audience, live in 24 hours. From LKR 60,000."
        canonical="/programmatic-advertising-sri-lanka"
        keywords="programmatic advertising sri lanka, private marketplace sri lanka, pmp advertising, display advertising sri lanka, findit.lk, studyway.lk, youjobs.lk, programmatic display sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Programmatic Advertising Sri Lanka", url: "/programmatic-advertising-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      {/* Hero CTAs */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-4 mb-10 -mt-4">
        <a data-selected-service="Programmatic Advertising" href={buildWa("Hi, I need programmatic advertising PMP in Sri Lanka. Please share a free media plan.")} target="_blank" rel="noopener noreferrer">
          <Button className="bg-accent hover:bg-accent/90 text-primary px-8 py-3 text-base font-bold rounded-full"><Zap className="w-5 h-5 mr-2" />Free PMP Media Plan</Button>
        </a>
        <a href="#packages">
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary px-8 py-3 text-base font-bold rounded-full">View Packages & Pricing</Button>
        </a>
      </motion.div>

      <IndustryStatsBanner
        icon={Target}
        gradient="gradient-hero"
        tagline="Sri Lanka's Only Premium Private Marketplace"
        stats={[
          { value: "3", label: "Premium PMP Publishers" },
          { value: "100K+", label: "Monthly Verified Visitors" },
          { value: "0%", label: "Ad Fraud" },
          { value: "24h", label: "Campaign Go-Live" },
        ]}
      />

      {/* Three tiers explainer */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-5xl mx-auto mt-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">What is programmatic advertising — and how does it work in Sri Lanka?</h2>
        <p className="text-muted-foreground text-center mb-8">Programmatic advertising comes in three tiers. Most Sri Lankan advertisers only know the cheapest one.</p>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { n: "01", t: "Open Exchange (OEX)", d: "The cheapest form. Real-time bidding across thousands of low-quality sites through Google Display Network. Very limited premium local inventory — most 'programmatic' in Sri Lanka is this." },
            { n: "02", t: "Preferred Deals", d: "A negotiated fixed-price agreement with one publisher before inventory hits the exchange. Better control — but not widely available in Sri Lanka." },
            { n: "03", t: "Private Marketplace (PMP) ★", d: "The premium tier. Invitation-only, verified publishers. Guaranteed placements. Zero bot traffic. Full brand safety. This is what Buzz Connect offers.", highlight: true },
          ].map(x => (
            <div key={x.n} className={`p-6 rounded-2xl border ${x.highlight ? "border-accent bg-accent/5 shadow-lg" : "border-border bg-card"}`}>
              <div className={`text-sm font-bold mb-2 ${x.highlight ? "text-accent" : "text-muted-foreground"}`}>{x.n}</div>
              <h3 className="font-heading font-bold text-lg mb-2">{x.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* OEX vs PMP */}
      <div className="mb-16 max-w-6xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">Open Exchange vs. Private Marketplace in Sri Lanka</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border-2 border-destructive/30 bg-destructive/5">
            <div className="flex items-center gap-2 mb-4"><XCircle className="w-6 h-6 text-destructive" /><h3 className="font-heading font-bold text-lg">Open Exchange — what most advertisers get</h3></div>
            <ul className="space-y-2">{oexProblems.map(p => <li key={p} className="text-sm text-muted-foreground flex gap-2"><XCircle className="w-4 h-4 text-destructive/70 mt-0.5 flex-shrink-0" />{p}</li>)}</ul>
          </div>
          <div className="p-6 rounded-2xl border-2 border-accent/40 bg-accent/5 shadow-lg">
            <div className="flex items-center gap-2 mb-4"><ShieldCheck className="w-6 h-6 text-accent" /><h3 className="font-heading font-bold text-lg">Buzz Connect PMP — what you deserve</h3></div>
            <ul className="space-y-2">{pmpAdvantages.map(p => <li key={p} className="text-sm text-foreground flex gap-2"><CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />{p}</li>)}</ul>
          </div>
        </div>
      </div>

      {/* Publishers */}
      <div className="mb-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3 text-center">Three premium publishers. One programmatic buy.</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">Your programmatic campaign runs simultaneously across all three platforms — the only Private Marketplace in Sri Lanka with this combined contextual reach.</p>
        <div className="grid lg:grid-cols-3 gap-6">
          {publishers.map(p => (
            <div key={p.name} className="p-6 rounded-2xl border border-border bg-card hover:border-accent/60 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold">{p.name}</span>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-xs text-accent inline-flex items-center gap-1 hover:underline">Visit <ArrowRight className="w-3 h-3" /></a>
              </div>
              <p className="text-xs text-muted-foreground italic mb-3">{p.tag}</p>
              <p className="text-sm text-foreground leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.chips.map(c => <span key={c} className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground">{c}</span>)}
              </div>
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                {p.stats.map(s => (
                  <div key={s.l} className="text-center"><div className="font-heading font-bold text-accent">{s.v}</div><div className="text-[10px] text-muted-foreground leading-tight">{s.l}</div></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Packages */}
      <div id="packages" className="mb-16 scroll-mt-24">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3 text-center">Two Ways to Run Your Programmatic Campaign</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10">Choose the setup that matches your campaign goals — every option runs on the same brand-safe, verified Buzz Connect PMP.</p>

        <h3 className="font-heading text-xl font-bold text-foreground mb-2">Duration Packages <span className="text-sm font-normal text-muted-foreground">— Multi-Slot Network Campaign</span></h3>
        <p className="text-sm text-muted-foreground mb-6">Every package gives you simultaneous programmatic display across all three PMP publishers. Transparent pricing, no exchange fees.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {durationPackages.map(pkg => (
            <div key={pkg.name} className={`p-6 rounded-2xl border-2 transition-all hover:-translate-y-1 ${pkg.featured ? "border-accent bg-gradient-to-br from-accent/10 to-transparent shadow-xl" : "border-border bg-card hover:border-accent/40"}`}>
              {pkg.featured && <div className="inline-block px-3 py-1 rounded-full bg-accent text-primary text-[10px] font-bold uppercase mb-2">Most Popular</div>}
              <pkg.icon className="w-8 h-8 text-accent mb-3" />
              <h4 className="font-heading font-bold text-xl">{pkg.name}</h4>
              <p className="text-xs text-muted-foreground mb-3">{pkg.days}</p>
              <div className="font-heading font-bold text-2xl text-foreground">{pkg.price}</div>
              <div className="text-xs text-muted-foreground mb-4">{pkg.perDay}</div>
              <ul className="space-y-1.5 mb-5">
                {pkg.features.map(f => <li key={f} className="text-xs text-muted-foreground flex gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />{f}</li>)}
              </ul>
              <a href={buildWa(`Hi Buzz Connect, I want the ${pkg.name} programmatic PMP package (${pkg.price}).`)} target="_blank" rel="noopener noreferrer" className="block">
                <Button className={`w-full ${pkg.featured ? "bg-accent hover:bg-accent/90 text-primary" : ""}`} variant={pkg.featured ? "default" : "outline"}>Book This Package</Button>
              </a>
            </div>
          ))}
        </div>

        <h3 className="font-heading text-xl font-bold text-foreground mb-2">Volume Packages <span className="text-sm font-normal text-muted-foreground">— Single Banner Slot Campaign</span></h3>
        <p className="text-sm text-muted-foreground mb-6">Guaranteed impression delivery on a single banner slot. Priced by reach, not duration.</p>
        <div className="grid md:grid-cols-3 gap-5">
          {volumePackages.map(pkg => (
            <div key={pkg.name} className={`p-6 rounded-2xl border-2 transition-all ${pkg.featured ? "border-accent bg-accent/5 shadow-xl" : "border-border bg-card hover:border-accent/40"}`}>
              {pkg.featured && <div className="inline-block px-3 py-1 rounded-full bg-accent text-primary text-[10px] font-bold uppercase mb-2">Most Popular</div>}
              <h4 className="font-heading font-bold text-xl mb-1">{pkg.name}</h4>
              <div className="font-heading font-bold text-2xl text-foreground">{pkg.price}</div>
              <div className="text-sm text-accent font-semibold mb-1">{pkg.vol}</div>
              <div className="text-xs text-muted-foreground mb-4">{pkg.cpm}</div>
              <ul className="space-y-1.5 mb-5 text-xs text-muted-foreground">
                <li className="flex gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />Guaranteed impressions</li>
                <li className="flex gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />Delivery across the full network</li>
                <li className="flex gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />Real-time performance reporting</li>
              </ul>
              <a href={buildWa(`Hi Buzz Connect, I want the ${pkg.name} volume package (${pkg.vol}).`)} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full" variant={pkg.featured ? "default" : "outline"}>Start This Package</Button>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* 9 reasons */}
      <div className="mb-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3 text-center">Why the Buzz Connect PMP delivers better results</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">Context is the most powerful targeting signal in programmatic. Our PMP puts your brand in three contexts no open exchange can replicate.</p>
        <div className="grid md:grid-cols-3 gap-5">
          {reasons.map(r => (
            <div key={r.title} className="p-5 rounded-xl border border-border bg-card hover:border-accent/40 hover:shadow-lg transition-all">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center mb-3"><r.icon className="w-5 h-5 text-primary" /></div>
              <h3 className="font-heading font-bold text-base mb-1.5">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison table */}
      <div className="mb-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">Open Exchange vs. Preferred Deal vs. Buzz Connect PMP</h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="p-3 text-left font-heading font-bold">Programmatic factor</th>
                <th className="p-3 text-left font-heading font-bold">Open Exchange</th>
                <th className="p-3 text-left font-heading font-bold">Preferred Deal</th>
                <th className="p-3 text-left font-heading font-bold text-accent">Buzz Connect PMP ★</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map(row => (
                <tr key={row[0]} className="border-t border-border">
                  <td className="p-3 font-semibold">{row[0]}</td>
                  <td className="p-3 text-muted-foreground">{row[1]}</td>
                  <td className="p-3 text-muted-foreground">{row[2]}</td>
                  <td className="p-3 text-accent font-semibold">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Steps */}
      <div className="mb-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3 text-center">From brief to programmatic in 4 steps</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">No DSPs. No auction configuration. Just programmatic that actually works in Sri Lanka.</p>
        <div className="grid md:grid-cols-4 gap-5">
          {steps.map(s => (
            <div key={s.n} className="p-5 rounded-xl bg-card border border-border">
              <div className="text-3xl font-heading font-bold text-accent mb-2">{s.n}</div>
              <h3 className="font-heading font-bold text-base mb-1.5">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="mb-16 max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">Programmatic Advertising Sri Lanka — Answered</h2>
        <div className="space-y-3">
          {faqs.map(f => (
            <details key={f.q} className="group p-5 rounded-xl border border-border bg-card">
              <summary className="cursor-pointer font-heading font-semibold text-base flex items-start justify-between gap-3">
                <span>{f.q}</span>
                <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 group-open:rotate-90 transition-transform mt-1" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="rounded-3xl gradient-hero text-primary-foreground p-8 sm:p-12 text-center">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Start programmatic advertising in Sri Lanka — the right way</h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">Get a free PMP media plan. We'll show you exactly which placements, which platforms and what results to expect — before you spend a single rupee.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a data-selected-service="Programmatic Advertising" href={buildWa("Hi, I'd like a free consultation & quote for programmatic PMP advertising.")} target="_blank" rel="noopener noreferrer">
            <Button className="bg-accent hover:bg-accent/90 text-primary px-8 py-3 text-base font-bold rounded-full">Chat on WhatsApp</Button>
          </a>
          <Link to="/contact-us">
            <Button variant="hero-outline" className="px-8 py-3 text-base font-bold rounded-full">Get a Custom Quote</Button>
          </Link>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default ProgrammaticAdvertising;
