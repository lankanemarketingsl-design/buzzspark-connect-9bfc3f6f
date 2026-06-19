import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Rocket,
  Mail,
  Facebook,
  Linkedin,
  Target,
  Search,
  Check,
  X,
  ArrowRight,
  Bolt,
  ShieldCheck,
  Star,
  Upload,
  Palette,
  Radio,
  TrendingUp,
  Clock,
  Users,
  FileBarChart,
  Headset,
  Store,
  Wrench,
  School,
  Heart,
  Package,
  Calendar,
  Briefcase,
  Home,
  Building2,
  Laptop,
  Crown,
  MessageCircle,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import RelatedServices from "@/components/RelatedServices";
import LogoCarousel from "@/components/home/LogoCarousel";
import ContactSection from "@/components/home/ContactSection";

const WA = "94771437707";
const wa = (msg: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(msg)}&utm_source=website&utm_medium=whatsapp_cta&utm_campaign=brand_blast_360&utm_content=brand_blast_360_page`;

const channels = [
  { icon: Mail, name: "Email Blast", num: "750,000", sub: "Verified opt-in subscribers", color: "text-indigo-500", bg: "bg-indigo-500/10" },
  { icon: Target, name: "Facebook Remarketing", num: "100,000", sub: "Warm leads retargeted", color: "text-pink-500", bg: "bg-pink-500/10" },
  { icon: Search, name: "Findit.lk Advertisement", num: "100,000", sub: "No.1 Offer Finder in Sri Lanka", color: "text-amber-500", bg: "bg-amber-500/10" },
  { icon: Facebook, name: "Facebook Exposure", num: "30,000+", sub: "Findit.lk audience network", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Linkedin, name: "LinkedIn", num: "8,000+", sub: "Business owners & managers", color: "text-sky-500", bg: "bg-sky-500/10" },
];

const fbBad = [
  { t: "Reaches only Facebook users", d: "People who aren't on Facebook that day — or who scroll past — never see your brand. You miss every inbox, LinkedIn professional and directory searcher." },
  { t: "Budget burns fast — unpredictable costs", d: "Facebook charges per click. A small budget runs out in days. You keep topping up or your campaign stops. Cost rises with competition." },
  { t: "Requires testing, expertise and time", d: "Ad accounts, creatives, targeting, A/B tests, daily management. Most businesses do this wrong and waste money." },
  { t: "One touchpoint — easy to ignore", d: "People see 100+ ads per day. A single channel gives only one chance. Research shows brands need 5–7 touchpoints before people act." },
  { t: "No professional audience reach", d: "Facebook is consumer-focused. Business owners and decision-makers spend their work time on LinkedIn." },
  { t: "No inbox presence", d: "Email has 20–40% open rates with undivided attention. Facebook ads cannot replicate this." },
  { t: "Stops the moment you stop paying", d: "Turn off your budget and visibility drops to zero. No listing, no directory, nothing residual." },
];

const fbGood = [
  { t: "Reaches 988,000+ across 5 channels", d: "Email inboxes, Facebook feeds, LinkedIn profiles, remarketing audiences and Findit.lk searches — all covered." },
  { t: "Fixed price — no surprises", d: "LKR 15,000 for 30 full days across all 5 channels. No bidding, no top-ups, no overspend." },
  { t: "We do everything — you send one brief", d: "Send your e-flyer. We handle creative, channel setup, targeting, launch and reporting. Live in 48 hours." },
  { t: "6–9 touchpoints per person — impossible to ignore", d: "The same person sees your brand in email, on Facebook, on LinkedIn, retargeted again, then on Findit.lk." },
  { t: "8,000+ business owners via LinkedIn", d: "Sri Lanka's managers, executives and owners — the B2B credibility Facebook can't deliver." },
  { t: "750,000 direct inbox hits on day one", d: "Email is the highest-converting digital channel. Undivided attention, no algorithm suppression." },
  { t: "Findit.lk keeps working after campaign ends", d: "Featured listing drives ongoing organic discovery long after the campaign month is over." },
];

const steps = [
  { icon: Upload, n: 1, t: "Submit Promotion", d: "Share your e-flyer, logo and brief. Takes minutes." },
  { icon: Palette, n: 2, t: "We Create Campaign", d: "We format your artwork for every channel — email design, Facebook post, LinkedIn content, Findit.lk listing." },
  { icon: Radio, n: 3, t: "Multi-Channel Distribution", d: "All 5 channels go live simultaneously within 48 hours." },
  { icon: TrendingUp, n: 4, t: "Brand Awareness Generated", d: "Customers see you everywhere. Trust builds. Enquiries and sales follow. Full report at end." },
];

const who = [
  { icon: Store, n: "Retail shops", d: "Drive foot traffic and orders" },
  { icon: Wrench, n: "Service businesses", d: "Get enquiries from active searchers" },
  { icon: School, n: "Institutes", d: "Fill enrollment every intake" },
  { icon: Heart, n: "Salons & wellness", d: "Announce promotions and deals" },
  { icon: Package, n: "Product launches", d: "Island-wide buzz from day one" },
  { icon: Calendar, n: "Events", d: "Fill seats with a multi-channel push" },
  { icon: Briefcase, n: "B2B & wholesale", d: "Decision-makers via LinkedIn" },
  { icon: Home, n: "Real estate", d: "Generate buyer & renter leads" },
  { icon: Building2, n: "Finance", d: "Reach professionals island-wide" },
  { icon: Laptop, n: "Online businesses", d: "Scale traffic without agency fees" },
];

const testimonials = [
  { quote: "We launched one campaign before opening weekend. By Saturday the place was full — we made back 10× the campaign cost. Customers saw us in email AND on Facebook the same week.", result: "10× ROI in first weekend", who: "Restaurant & Dining", loc: "Colombo" },
  { quote: "Our inquiry line didn't stop for two weeks. LinkedIn visibility brought in corporate clients we had never reached before — that alone justified the investment three times over.", result: "3× more enrolment enquiries", who: "Education & Training", loc: "Nugegoda" },
  { quote: "Within 10 days I had 37 wholesale enquiries from LinkedIn and email combined. The 360 approach is the difference — I upgraded to Power Blast the same week.", result: "37 wholesale leads in 10 days", who: "Import & Wholesale", loc: "Wattala" },
  { quote: "Three large bookings came in the first week that paid for the entire campaign. Guests mentioned they had seen us in email and social media.", result: "3 large bookings in week one", who: "Hotel & Hospitality", loc: "Colombo" },
  { quote: "We launched our new product line and sold out the first batch within 18 days. Customers found us on email, Facebook and Findit.lk.", result: "Sold out in 18 days", who: "Retail & Fashion", loc: "Colombo" },
  { quote: "We booked two weeks of appointments in the first few days. Patients mentioned seeing us on their phone and in their inbox.", result: "Two weeks fully booked", who: "Healthcare & Wellness", loc: "Nugegoda" },
];

const packages = [
  {
    emoji: "🔥", name: "Starter Blast", tagline: "Brand Blast 360 · Entry level",
    count: "1", label: "campaign", price: "LKR 15,000", was: "", save: "", per: "LKR 15,000 per campaign", valid: "No expiry on credits",
    features: ["All 5 channels activated", "988,000+ verified reach", "750,000 email subscribers", "48-hour campaign launch", "Western Province focus", "Full performance report"],
    cta: "Starter Blast", popular: false, accent: "from-sky-500/20 to-sky-500/5",
  },
  {
    emoji: "⚡", name: "Growth Blast", tagline: "Brand Blast 360 · Growth",
    count: "3", label: "campaigns", price: "LKR 40,500", was: "LKR 45,000", save: "Save LKR 4,500 — 10% off", per: "LKR 13,500 per campaign", valid: "Use within 6 months",
    features: ["All 5 channels per campaign", "988,000+ reach per campaign", "48-hour launch each time", "3 full performance reports", "Promote 3 different offers"],
    cta: "Growth Blast", popular: false, accent: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    emoji: "🚀", name: "Power Blast", tagline: "Brand Blast 360 · Accelerate",
    count: "6", label: "campaigns", price: "LKR 76,500", was: "LKR 90,000", save: "Save LKR 13,500 — 15% off", per: "LKR 12,750 per campaign", valid: "Use within 9 months",
    features: ["All 5 channels per campaign", "988,000+ reach per campaign", "Priority 24-hour launch", "6 full performance reports", "Dedicated account manager", "Campaign strategy support"],
    cta: "Power Blast", popular: true, badge: "Most popular", accent: "from-primary/30 to-primary/5",
  },
  {
    emoji: "👑", name: "Market Dominator", tagline: "Brand Blast 360 · Own the market",
    count: "10", label: "campaigns", price: "LKR 112,500", was: "LKR 150,000", save: "Save LKR 37,500 — 25% off", per: "LKR 11,250 per campaign", valid: "Use within 12 months",
    features: ["All 5 channels per campaign", "988,000+ reach per campaign", "VIP same-day launch", "10 full performance reports", "VIP account manager", "Free strategy consultation", "Custom audience targeting"],
    cta: "Market Dominator", popular: true, badge: "Best value", accent: "from-accent/30 to-accent/5",
  },
];

const faqs = [
  { q: "What exactly do I get for LKR 15,000 with Starter Blast?", a: "A complete multi-channel campaign across all 5 channels — 750,000 email subscribers, 30,000+ Facebook followers, 8,000+ LinkedIn professionals, 100,000 remarketing retargets and a featured Findit.lk listing. We handle everything from creative setup to launch. Full report at campaign end." },
  { q: "What does \"Brand Blast 360\" mean?", a: "The \"360\" stands for full-circle visibility. Email reaches their inbox. Facebook reaches their social feed. LinkedIn reaches them at work. Remarketing follows them after they click. Findit.lk captures them when they search. Together, your brand feels everywhere — which builds trust and drives action." },
  { q: "How quickly does my campaign go live?", a: "Within 48 hours of receiving your artwork and payment. Power Blast clients get priority 24-hour launch. Market Dominator clients get VIP same-day launch." },
  { q: "Who is in your 750,000 email database?", a: "Sri Lankan professionals, business owners, consumers and working adults who have voluntarily opted in. 100% permission-based. Segmented by profession, location and interest — strong Western Province coverage." },
  { q: "What is Facebook remarketing and why does it matter?", a: "Remarketing shows your ad on Facebook to people who already clicked your campaign — up to 100,000 warm leads. Studies show remarketing increases conversion rates by up to 70%. It turns 'almost bought' into 'bought'." },
  { q: "Can I promote different products with Growth, Power or Market Dominator?", a: "Yes. Campaign credits sit in your account and you activate each one whenever ready. Different product, offer, event or service each time — on your schedule within the validity window." },
  { q: "Is there a contract or ongoing commitment?", a: "No contract, no lock-in, no recurring fees. Starter Blast is a single one-time campaign. Bundle packs have a 6–12 month validity window. You pay once and activate on your schedule." },
  { q: "How do I get started right now?", a: "Click 'Launch Brand Blast 360' or message us on WhatsApp. Share your e-flyer, business details and offer. We confirm, process payment and launch across all 5 channels within 48 hours." },
];

const BrandBlast360 = () => {
  const [open, setOpen] = useState<number | null>(0);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Brand Blast 360 — Multi-Channel Brand Awareness Campaign",
      provider: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" },
      areaServed: "Sri Lanka",
      description: "5-channel brand awareness campaign reaching 988,000+ verified Sri Lankan contacts across email, Facebook, LinkedIn, remarketing and Findit.lk — fixed price from LKR 15,000.",
      offers: packages.map((p) => ({
        "@type": "Offer",
        name: p.name,
        price: p.price.replace(/[^\d]/g, ""),
        priceCurrency: "LKR",
        description: `${p.count} ${p.label} — ${p.per}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <SEOHead
        title="Brand Blast 360 — 988,000+ Verified Reach Across 5 Channels | Buzz Connect"
        description="Reach 988,000+ Sri Lankan contacts across email, Facebook, LinkedIn, remarketing & Findit.lk for a fixed LKR 15,000. Live in 48 hours. No contract."
        canonical="/brand-blast-360"
        keywords="brand blast 360, multi-channel campaign sri lanka, email marketing upsell, brand awareness sri lanka, 988000 reach"
        breadcrumbs={[
          { name: "Home", url: "https://buzzconnect.lk/" },
          { name: "Brand Blast 360", url: "https://buzzconnect.lk/brand-blast-360" },
        ]}
        jsonLd={jsonLd}
      />

      <div className="pt-14 sm:pt-16 overflow-x-hidden">
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-primary/95 via-primary to-primary/90 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--accent)/.4),transparent_50%),radial-gradient(circle_at_80%_60%,hsl(var(--primary-foreground)/.15),transparent_55%)]" />
          <div className="container mx-auto px-4 py-14 sm:py-20 relative grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-accent border border-accent/30 text-xs font-bold mb-5">
                <Rocket className="w-3.5 h-3.5" />
                Brand Blast 360 — Buzz Connect
              </div>
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-5">
                Get Seen by 988,000+
                <span className="block bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">Customers in 48 Hours.</span>
              </h1>
              <p className="text-base sm:text-lg text-primary-foreground/85 mb-6 max-w-xl">
                One fixed price. Five channels. Zero guesswork. <b className="text-white">LKR 15,000</b> reaches more buyers than any single Facebook campaign — and your phone starts ringing the same week.
              </p>

              <div className="bg-red-500/15 border border-red-300/30 rounded-xl p-4 mb-6 text-sm text-primary-foreground/90">
                Running email or Facebook alone? <b className="text-white">You're leaving 90% of buyers untouched.</b> Customers need to see your brand 5–7 times before they act. Brand Blast 360 does that in one campaign.
              </div>

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-4 mb-7">
                <div>
                  <div className="text-4xl font-heading font-black text-accent leading-none">988K+</div>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div className="text-sm">
                  <div className="font-bold text-white mb-0.5">Verified Reach · LKR 0.015 per person</div>
                  <div className="text-primary-foreground/70 text-xs">Email · Facebook · LinkedIn · Remarketing + Findit.lk featured</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={wa("Hi Buzz Connect, I want to launch Brand Blast 360 today. Please share next steps and pricing.")} target="_blank" rel="noopener" data-wa-placement="brandblast360_hero_whatsapp" data-selected-service="Brand Blast 360" data-service="Brand Blast 360" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 py-3.5 rounded-xl text-sm transition-all hover:scale-105 shadow-lg shadow-accent/30">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us — Launch in 48h
                </a>
                <a href="#packages" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl text-sm">
                  <Rocket className="w-4 h-4" /> See Pricing
                </a>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6 text-xs text-primary-foreground/70">
                <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-accent" /> Fixed price · no contract</span>
                <span className="inline-flex items-center gap-1.5"><Bolt className="w-3.5 h-3.5 text-accent" /> Live in 48 hours</span>
                <span className="inline-flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-accent" /> 1,500+ businesses trust us</span>
              </div>
            </motion.div>

            {/* Live channel dashboard */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-5 sm:p-6 text-foreground">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-border">
                <div>
                  <div className="text-sm font-bold">Your Brand Blast 360 — live channels</div>
                  <div className="text-[11px] text-muted-foreground">Each channel works as its own touchpoint</div>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> All active
                </div>
              </div>
              <div className="space-y-3">
                {channels.map((c) => (
                  <div key={c.name} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className={`w-10 h-10 rounded-lg ${c.bg} flex items-center justify-center`}>
                      <c.icon className={`w-5 h-5 ${c.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold truncate">{c.name}</div>
                      <div className="text-[11px] text-muted-foreground truncate">{c.sub}</div>
                    </div>
                    <div className={`text-sm font-heading font-black ${c.color}`}>{c.num}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border flex items-end justify-between">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold">Total verified reach</div>
                <div className="text-3xl font-heading font-black text-primary">988,000+</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem strip */}
        <div className="bg-gradient-to-r from-red-50 via-orange-50 to-red-50 dark:from-red-950/30 dark:via-orange-950/30 dark:to-red-950/30 border-y border-red-200/50 dark:border-red-900/30 py-4 px-4 text-center text-sm">
          <span className="font-semibold text-foreground">Running Facebook ads only? You're missing 89% of your potential audience.</span>
          <ArrowRight className="inline mx-2 w-4 h-4 text-red-500" />
          <span className="font-bold text-primary">Brand Blast 360: LKR 15,000 · 5 channels · 988,000+ reach · same price as Facebook alone.</span>
        </div>

        {/* Stats */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { ic: Mail, n: "750,000+", l: "Email Reach", s: "Verified opt-in subscribers", c: "text-indigo-500", bg: "bg-indigo-500/10" },
              { ic: Target, n: "100,000", l: "Remarketing", s: "Warm leads retargeted", c: "text-pink-500", bg: "bg-pink-500/10" },
              { ic: Search, n: "100,000", l: "Findit.lk Advertisement", s: "No.1 Offer Finder in Sri Lanka", c: "text-amber-500", bg: "bg-amber-500/10" },
              { ic: Facebook, n: "30,000+", l: "Facebook Exposure", s: "Findit.lk audience network", c: "text-blue-500", bg: "bg-blue-500/10" },
              { ic: Linkedin, n: "8,000+", l: "LinkedIn Pros", s: "Owners, managers & decision-makers", c: "text-sky-500", bg: "bg-sky-500/10" },
              { ic: Radio, n: "988K+", l: "Total Reach", s: "Verified reach across all 5 channels", c: "text-primary", bg: "bg-primary/10" },
            ].map((s) => (
              <div key={s.l} className="bg-card border border-border rounded-2xl p-5 text-center">
                <div className={`w-12 h-12 rounded-xl ${s.bg} ${s.c} flex items-center justify-center mx-auto mb-3`}>
                  <s.ic className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-foreground">{s.n}</div>
                <div className="text-xs font-bold text-foreground mt-1">{s.l}</div>
                <div className="text-[11px] text-muted-foreground mt-1.5">{s.s}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Packages — moved up for conversion */}
        <section id="packages" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Brand Blast 360 — Product line</div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-4">Pick your package · Launch in 48 hours</h2>
              <p className="text-muted-foreground">Every package activates all 5 channels and 988,000+ verified reach. Bundle more, save more per blast.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {packages.map((p) => (
                <div key={p.name} className={`relative bg-card border-2 rounded-2xl overflow-hidden flex flex-col ${p.popular ? "border-primary shadow-xl shadow-primary/10" : "border-border"}`}>
                  {p.popular && p.badge && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-bl-xl">
                      {p.badge}
                    </div>
                  )}
                  <div className={`h-1.5 bg-gradient-to-r ${p.accent}`} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-3xl mb-2">{p.emoji}</div>
                    <div className="font-heading font-black text-xl">{p.name}</div>
                    <div className="text-xs text-muted-foreground mb-4">{p.tagline}</div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-heading font-black">{p.count}</span>
                      <span className="text-sm text-muted-foreground">{p.label}</span>
                    </div>
                    <div className="text-2xl font-heading font-black text-primary mt-3">{p.price}</div>
                    {p.was ? <div className="text-sm text-muted-foreground line-through">{p.was}</div> : null}
                    {p.save ? <div className="text-[11px] font-bold text-emerald-600 mt-0.5">{p.save}</div> : null}
                    <div className="text-xs text-muted-foreground mt-2">{p.per}</div>
                    <div className="text-[11px] text-muted-foreground">{p.valid}</div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="bg-indigo-500/8 border border-indigo-500/15 rounded-lg p-2 text-center">
                        <div className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider">Email</div>
                        <div className="text-sm font-heading font-black text-foreground">750K</div>
                      </div>
                      <div className="bg-blue-500/8 border border-blue-500/15 rounded-lg p-2 text-center">
                        <div className="text-[10px] font-bold text-blue-500 uppercase tracking-wider">Facebook</div>
                        <div className="text-sm font-heading font-black text-foreground">30K+</div>
                      </div>
                      <div className="bg-sky-500/8 border border-sky-500/15 rounded-lg p-2 text-center">
                        <div className="text-[10px] font-bold text-sky-500 uppercase tracking-wider">LinkedIn</div>
                        <div className="text-sm font-heading font-black text-foreground">8K+</div>
                      </div>
                      <div className="bg-amber-500/8 border border-amber-500/15 rounded-lg p-2 text-center">
                        <div className="text-[10px] font-bold text-amber-500 uppercase tracking-wider">Findit</div>
                        <div className="text-sm font-heading font-black text-foreground">100K</div>
                      </div>
                      <div className="col-span-2 bg-pink-500/8 border border-pink-500/15 rounded-lg p-2 text-center">
                        <div className="text-[10px] font-bold text-pink-500 uppercase tracking-wider">Remarketing</div>
                        <div className="text-sm font-heading font-black text-foreground">100K warm leads</div>
                      </div>
                    </div>
                    <hr className="my-4 border-border" />
                    <ul className="space-y-2 flex-1">
                      {p.features.map((f) => (
                        <li key={f} className="text-sm flex gap-2"><Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>{f}</span></li>
                      ))}
                    </ul>
                    <a
                      href={wa(`Hi Buzz Connect, I want the ${p.name} package (Brand Blast 360 — ${p.count} ${p.label}, ${p.price}). Please share next steps.`)}
                      target="_blank"
                      rel="noopener"
                      data-wa-placement={`brandblast360_pricing_${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`}
                      data-selected-service={`Brand Blast 360 — ${p.name}`}
                      data-service="Brand Blast 360"
                      data-pricing-tier={p.name}
                      data-pricing-price={p.price}
                      className={`mt-6 inline-flex items-center justify-center gap-2 font-bold px-4 py-3 rounded-xl text-sm transition-colors ${p.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-accent text-accent-foreground hover:bg-accent/90"}`}
                    >
                      {p.name === "Market Dominator" ? <Crown className="w-4 h-4" /> : <Rocket className="w-4 h-4" />}
                      {p.cta} →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                <span className="inline-flex items-center gap-2 font-semibold"><ShieldCheck className="w-4 h-4 text-emerald-600" /> Fixed price · no surprises</span>
                <span className="inline-flex items-center gap-2 font-semibold"><Bolt className="w-4 h-4 text-amber-500" /> 48-hour launch promise</span>
                <span className="inline-flex items-center gap-2 font-semibold"><FileBarChart className="w-4 h-4 text-primary" /> Full report included</span>
                <span className="inline-flex items-center gap-2 font-semibold"><Headset className="w-4 h-4 text-sky-500" /> Local WhatsApp support</span>
              </div>
              <a href={wa("Hi Buzz Connect, I'm ready to book a Brand Blast 360 package. Please help me choose the right one.")} target="_blank" rel="noopener" data-wa-placement="brandblast360_pricing_guarantee_cta" data-selected-service="Brand Blast 360" data-service="Brand Blast 360" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-5 py-3 rounded-xl text-sm whitespace-nowrap">
                <MessageCircle className="w-4 h-4" /> Talk to us on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ROI — moved up for conversion */}
        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 grid md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 text-center">
              <div>
                <div className="text-xs uppercase font-bold text-muted-foreground tracking-wider">Your investment</div>
                <div className="text-2xl font-heading font-black text-foreground mt-1">LKR 15,000</div>
                <div className="text-[11px] text-muted-foreground mt-1">All 5 channels · 30 days · report</div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground mx-auto hidden md:block" />
              <div>
                <div className="text-xs uppercase font-bold text-muted-foreground tracking-wider">Contacts reached</div>
                <div className="text-2xl font-heading font-black text-primary mt-1">988,000+</div>
                <div className="text-[11px] text-muted-foreground mt-1">Email, social, professional, directory</div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground mx-auto hidden md:block" />
              <div>
                <div className="text-xs uppercase font-bold text-muted-foreground tracking-wider">Cost per impression</div>
                <div className="text-2xl font-heading font-black text-accent mt-1">LKR 0.015</div>
                <div className="text-[11px] text-muted-foreground mt-1">Less than 2 cents per person reached</div>
              </div>
            </div>
          </div>
        </section>

        {/* Facebook vs Brand Blast 360 */}
        <section id="compare" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Brand Blast 360 vs Facebook Ads</div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-4">Why running Facebook alone is leaving money on the table</h2>
              <p className="text-muted-foreground">Most businesses run a Facebook ad and wonder why results are weak. Here's the honest truth — and why Brand Blast 360 delivers what Facebook alone never can.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-5">
              {/* Facebook Only */}
              <div className="bg-card border border-border rounded-2xl p-7">
                <div className="flex items-center gap-3 pb-5 mb-5 border-b border-border">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Facebook className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <div className="font-heading font-bold">Facebook Ads Only</div>
                    <div className="text-xs text-muted-foreground">What most businesses run</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {fbBad.map((p) => (
                    <div key={p.t} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-bold text-sm mb-1">{p.t}</div>
                        <div className="text-xs text-muted-foreground leading-relaxed">{p.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-center">
                  <div className="text-2xl font-heading font-black text-red-500">LKR 15,000+</div>
                  <div className="text-[11px] font-semibold text-red-500/70 mt-1">for Facebook alone — one audience, one channel, unpredictable</div>
                </div>
              </div>

              {/* Brand Blast 360 */}
              <div className="relative bg-primary text-primary-foreground rounded-2xl p-7 shadow-xl shadow-primary/20 ring-4 ring-accent/10">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[10px] font-black tracking-widest uppercase px-4 py-1 rounded-full">
                  Brand Blast 360
                </div>
                <div className="flex items-center gap-3 pb-5 mb-5 border-b border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-heading font-bold">Brand Blast 360</div>
                    <div className="text-xs text-primary-foreground/60">Multi-channel · full coverage</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {fbGood.map((p) => (
                    <div key={p.t} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-bold text-sm mb-1">{p.t}</div>
                        <div className="text-xs text-primary-foreground/65 leading-relaxed">{p.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent/25 text-center">
                  <div className="text-2xl font-heading font-black text-accent">LKR 15,000</div>
                  <div className="text-[11px] font-semibold text-accent/80 mt-1">all 5 channels · 988,000+ reach · 30 days · fixed price</div>
                </div>
              </div>
            </div>

            {/* ROI */}
            <div className="mt-10 bg-card border border-border rounded-2xl p-6 sm:p-8 grid md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 text-center">
              <div>
                <div className="text-xs uppercase font-bold text-muted-foreground tracking-wider">Your investment</div>
                <div className="text-2xl font-heading font-black text-foreground mt-1">LKR 15,000</div>
                <div className="text-[11px] text-muted-foreground mt-1">All 5 channels · 30 days · report</div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground mx-auto hidden md:block" />
              <div>
                <div className="text-xs uppercase font-bold text-muted-foreground tracking-wider">Contacts reached</div>
                <div className="text-2xl font-heading font-black text-primary mt-1">988,000+</div>
                <div className="text-[11px] text-muted-foreground mt-1">Email, social, professional, directory</div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground mx-auto hidden md:block" />
              <div>
                <div className="text-xs uppercase font-bold text-muted-foreground tracking-wider">Cost per impression</div>
                <div className="text-2xl font-heading font-black text-accent mt-1">LKR 0.015</div>
                <div className="text-[11px] text-muted-foreground mt-1">Less than 2 cents per person reached</div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-accent mb-3">How it works</div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-4">From brief to brand awareness in 4 steps</h2>
              <p className="text-primary-foreground/70">You send your promotion. We build and launch across all 5 channels simultaneously.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((s) => (
                <div key={s.n} className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-6 relative">
                  <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-accent text-accent-foreground font-black flex items-center justify-center text-sm">{s.n}</div>
                  <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-4">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <div className="font-heading font-bold mb-2">{s.t}</div>
                  <p className="text-sm text-primary-foreground/65">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <div className="bg-gradient-to-r from-accent via-amber-500 to-accent text-accent-foreground py-10 px-4 text-center">
          <h3 className="font-heading font-black text-2xl sm:text-3xl mb-2">Your next 100 customers are 48 hours away.</h3>
          <p className="text-sm sm:text-base opacity-90 mb-5">Send us your offer on WhatsApp — we'll have all 5 channels live within 2 working days. Fixed price. No contract.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={wa("Hi Buzz Connect, I want to launch Brand Blast 360 today. Please share next steps.")} target="_blank" rel="noopener" data-wa-placement="brandblast360_mid_cta" data-selected-service="Brand Blast 360" data-service="Brand Blast 360" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 py-3 rounded-xl text-sm shadow-lg">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us Now
            </a>
            <a href="#packages" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 border border-accent-foreground/20 text-accent-foreground font-semibold px-6 py-3 rounded-xl text-sm">
              See packages & pricing
            </a>
          </div>
        </div>

        {/* Channels detail */}
        <section id="channels" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Every channel. One campaign.</div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-4">Here's exactly where your 988,000+ reach comes from</h2>
              <p className="text-muted-foreground">All 5 channels activate on day one — not one after the other. That's what makes customers feel your brand is everywhere.</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 border border-indigo-500/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5 mb-5">
              <div className="w-14 h-14 rounded-xl bg-indigo-500/15 flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-indigo-500" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-500 mb-1">Channel 1 — The engine</div>
                <div className="font-heading font-black text-xl">Email Blast</div>
                <div className="text-4xl font-heading font-black text-indigo-500 my-2">750,000</div>
                <div className="text-sm text-muted-foreground mb-3">verified opt-in subscribers — Sri Lanka's largest email database</div>
                <div className="flex flex-wrap gap-2">
                  {["Largest opt-in list in SL", "Western Province focused", "Segmented by profession", "Designed e-flyer included"].map((t) => (
                    <span key={t} className="text-[11px] font-semibold bg-indigo-500/10 text-indigo-500 px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { ic: Facebook, ey: "Channel 2 — Social amplification", nm: "Facebook Exposure", big: "30,000+", lbl: "Findit.lk Facebook followers", pts: ["Pushed across Findit.lk pages", "Organic social amplification", "Brand visibility on feeds"], c: "blue-500" },
                { ic: Target, ey: "Channel 3 — Highest converter", nm: "Facebook Remarketing", big: "100,000", lbl: "warm leads retargeted on Facebook", pts: ["Re-engages people who clicked", "Lifts conversions up to 70%", "Keeps brand top of mind"], c: "pink-500" },
                { ic: Linkedin, ey: "Channel 4 — Professional network", nm: "LinkedIn", big: "8,000+", lbl: "business owners & decision-makers", pts: ["Managers, executives & owners", "Best for B2B & wholesale", "Builds professional credibility"], c: "sky-500" },
                { ic: Search, ey: "Channel 5 — Always-on organic", nm: "Findit.lk Advertisement", big: "100,000", lbl: "estimated monthly directory visitors", pts: ["Sri Lanka's #1 business directory", "Featured premium placement", "Ongoing organic discovery"], c: "amber-500" },
              ].map((c) => (
                <div key={c.nm} className="bg-card border border-border rounded-2xl p-6">
                  <div className={`w-12 h-12 rounded-xl bg-${c.c}/10 text-${c.c} flex items-center justify-center mb-3`}>
                    <c.ic className="w-6 h-6" />
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">{c.ey}</div>
                  <div className="font-heading font-black text-lg">{c.nm}</div>
                  <div className={`text-3xl font-heading font-black text-${c.c} mt-1`}>{c.big}</div>
                  <div className="text-xs text-muted-foreground mb-4">{c.lbl}</div>
                  <ul className="space-y-2">
                    {c.pts.map((p) => (
                      <li key={p} className="text-sm flex gap-2 items-start"><Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-primary text-primary-foreground rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-accent mb-2">Combined — all 5 channels — per campaign</div>
                <div className="font-heading font-bold text-lg leading-snug">Email 750,000 + Facebook 30,000+ + Remarketing 100,000 + LinkedIn 8,000+ + Findit.lk 100,000</div>
              </div>
              <div className="text-right">
                <div className="text-5xl font-heading font-black text-accent leading-none">988K+</div>
                <div className="text-xs text-primary-foreground/70 mt-1">verified contacts</div>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Who it's for</div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-4">Any business that needs more customers this month</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {who.map((w) => (
                <div key={w.n} className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mx-auto mb-2">
                    <w.icon className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-sm">{w.n}</div>
                  <div className="text-[11px] text-muted-foreground mt-1">{w.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-accent mb-3">What clients say</div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-4">Real results from real Sri Lankan businesses</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-6">
                  <div className="text-accent text-sm mb-2">★★★★★</div>
                  <p className="text-sm text-primary-foreground/85 mb-4 leading-relaxed">"{t.quote}"</p>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-3">
                    <TrendingUp className="w-3 h-3" /> {t.result}
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold">{t.who}</div>
                    <div className="text-primary-foreground/55">{t.loc}, Western Province</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-primary-foreground/70">
              <span className="inline-flex items-center gap-1.5"><Bolt className="w-3.5 h-3.5 text-accent" /> Live in 48 hours</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-accent" /> No hidden fees</span>
              <span className="inline-flex items-center gap-1.5"><FileBarChart className="w-3.5 h-3.5 text-accent" /> Full report included</span>
              <span className="inline-flex items-center gap-1.5"><Headset className="w-3.5 h-3.5 text-accent" /> Local support team</span>
            </div>
          </div>
        </section>


        {/* FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Frequently asked questions</div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl mb-3">Every question answered before you launch</h2>
              <p className="text-muted-foreground text-sm">Anything not covered here? Message us on WhatsApp — we reply within the hour.</p>
            </div>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div key={i} className="bg-card border border-border rounded-xl">
                  <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left px-5 py-4 flex items-center justify-between gap-4">
                    <span className="font-semibold text-sm sm:text-base">{f.q}</span>
                    {open === i ? <Minus className="w-4 h-4 text-primary flex-shrink-0" /> : <Plus className="w-4 h-4 text-primary flex-shrink-0" />}
                  </button>
                  {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-20 bg-gradient-to-br from-primary via-primary to-primary/95 text-primary-foreground text-center overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--accent)/.35),transparent_55%),radial-gradient(circle_at_70%_70%,hsl(var(--accent)/.2),transparent_55%)]" />
          <div className="container mx-auto px-4 relative max-w-3xl">
            <div className="inline-block bg-red-500/15 border border-red-300/30 px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
              Your competitors are already reaching your customers on multiple channels.
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-6xl leading-[1.05] mb-5">
              Your Brand.<br />
              <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">Everywhere.</span>
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">
              For LKR 15,000 — less than a newspaper ad — your brand reaches 988,000+ verified Sri Lankan contacts plus a Findit.lk featured listing in 30 days. You send the artwork. We handle everything else.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              <a href={wa("Hi Buzz Connect, I want to launch Brand Blast 360. Please share next steps.")} target="_blank" rel="noopener" data-wa-placement="brandblast360_final_cta_launch" data-selected-service="Brand Blast 360" data-service="Brand Blast 360" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-7 py-4 rounded-xl">
                <Rocket className="w-4 h-4" /> Launch Brand Blast 360
              </a>
              <a href={wa("Hi Buzz Connect, I have a question about Brand Blast 360.")} target="_blank" rel="noopener" data-wa-placement="brandblast360_final_cta_question" data-selected-service="Brand Blast 360 — Question" data-service="Brand Blast 360" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-7 py-4 rounded-xl">
                <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
              </a>
            </div>
            <div className="text-xs text-primary-foreground/65 inline-flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5" /> No contract · No hidden fees · Full report included
            </div>
          </div>
        </section>

        <RelatedServices currentPath="/brand-blast-360" />
        <LogoCarousel />
        <ContactSection />
      </div>
    </>
  );
};

export default BrandBlast360;
