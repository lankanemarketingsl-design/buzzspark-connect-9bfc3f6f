import {
  AirVent,
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  CircleDollarSign,
  Clock3,
  Drill,
  ExternalLink,
  Hammer,
  House,
  Mail,
  MapPin,
  MessageCircle,
  Paintbrush,
  Phone,
  PlugZap,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";

const PAGE_PATH = "/home-services-construction-marketing-sri-lanka";
const WHATSAPP_NUMBER = "94771437707";
const SERVICE_NAME = "Home Services & Construction Marketing";

const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const benefits = [
  "Generate direct calls and WhatsApp inquiries",
  "Get found by customers searching in your town",
  "Fill your job calendar faster",
  "Reduce dependence on word-of-mouth referrals",
  "Build trust with a verified, NIC-checked listing",
];

const trades = [
  { name: "Plumbers", icon: Wrench },
  { name: "Electricians", icon: PlugZap },
  { name: "AC Technicians", icon: AirVent },
  { name: "Carpenters", icon: Hammer },
  { name: "Painters", icon: Paintbrush },
  { name: "Masons", icon: Building2 },
  { name: "General Contractors", icon: Drill },
  { name: "Renovation Firms", icon: House },
  { name: "CCTV Installers", icon: ShieldCheck },
  { name: "Pest Control", icon: Target },
  { name: "Cleaning Services", icon: Sparkles },
  { name: "Movers", icon: Building2 },
];

const packages = [
  {
    name: "Starter Boost",
    price: "LKR 14,900",
    featured: false,
    items: [
      "1 targeted Email or SMS campaign",
      "Verified Findit Pros directory listing",
      "7-day visibility boost",
      "Basic creative: image and copy",
    ],
  },
  {
    name: "Growth Leads",
    price: "LKR 39,900",
    featured: true,
    items: [
      "2–3 targeted Email, SMS or WhatsApp campaigns",
      "Premium placement in your Findit Pros trade category",
      "Seasonal promotion push",
      "Performance report: opens, clicks and inquiries",
    ],
  },
  {
    name: "Dominate",
    price: "LKR 89,900",
    featured: false,
    items: [
      "4–6 multi-channel campaigns",
      "Top ranking in your Findit Pros category",
      "TikTok or Reel promotional video",
      "Custom offer or landing page",
      "Priority placement",
    ],
  },
];

const finditLinks = [
  ["Plumbers in Sri Lanka", "https://hub.findit.lk/pros/plumbers"],
  ["Electricians in Sri Lanka", "https://hub.findit.lk/pros/electricians"],
  ["AC repair & servicing in Sri Lanka", "https://hub.findit.lk/pros/ac-repair"],
  ["Carpenters in Sri Lanka", "https://hub.findit.lk/pros/carpenters"],
  ["House painters in Sri Lanka", "https://hub.findit.lk/pros/painters"],
  ["Masonry & construction workers", "https://hub.findit.lk/pros/masonry"],
  ["CCTV & security installers", "https://hub.findit.lk/pros/cctv"],
  ["Appliance repair services", "https://hub.findit.lk/pros/appliance-repair"],
  ["Pest control services in Sri Lanka", "https://hub.findit.lk/pros/pest-control"],
  ["House cleaning services", "https://hub.findit.lk/pros/house-cleaning"],
  ["Movers & lorry hire in Sri Lanka", "https://hub.findit.lk/pros/movers"],
] as const;

const steps = [
  ["Target the Right Customers", "We reach people actively looking for your service in your area.", Search],
  ["Create High-Converting Offers", "Clear service messaging and promotions that drive inquiries.", Sparkles],
  ["Multi-Channel Promotion", "Email, SMS and WhatsApp campaigns plus your Findit Pros listing.", Target],
  ["Get Job Inquiries", "Receive direct calls, messages and booking requests.", MessageCircle],
] as const;

const reasons = [
  "Access to a large Sri Lankan customer database",
  "Multi-channel campaigns across Email, SMS and WhatsApp",
  "Verified directory visibility that keeps working daily",
  "Cost-effective compared with running ads alone",
  "Fast campaign launch and quick results",
];

const faqs = [
  {
    q: "What is home services and construction marketing in Sri Lanka?",
    a: "It promotes trades and construction services to customers through targeted email, SMS and WhatsApp campaigns and verified directory listings.",
  },
  {
    q: "How does Buzz Connect get me more job inquiries?",
    a: "A multi-channel approach combined with Findit Pros category visibility puts you in front of customers searching for your exact service in their area.",
  },
  {
    q: "Which trades do you work with?",
    a: "We work with plumbers, electricians, AC technicians, carpenters, painters, masons, contractors, renovation firms, CCTV installers, pest control, cleaning services and movers.",
  },
  {
    q: "How much does it cost?",
    a: "Packages start from LKR 14,900. Contact us for a custom quote based on your business and target area.",
  },
  {
    q: "How fast can my campaign launch?",
    a: "Most campaigns go live within 24–48 hours.",
  },
  {
    q: "Do you cover areas outside Colombo?",
    a: "Yes. Findit Pros covers all 25 districts, matched down to town level.",
  },
];

const SectionHeading = ({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) => (
  <div className="mb-9 max-w-3xl">
    <p className="text-xs font-bold uppercase text-accent">{eyebrow}</p>
    <h2 className="mt-2 font-heading text-3xl font-black text-foreground sm:text-4xl">{title}</h2>
    {body && <p className="mt-3 leading-relaxed text-muted-foreground">{body}</p>}
  </div>
);

export default function HomeServicesConstruction() {
  const quoteMessage = "Hi Buzz Connect, I'm interested in Home Services & Construction Marketing. Please share details.";
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Home Services & Construction Marketing Sri Lanka",
      serviceType: "Home services and construction marketing",
      provider: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      url: `https://buzzconnect.lk${PAGE_PATH}`,
      description: "Get more leads for your home services or construction business in Sri Lanka through targeted Email, SMS and WhatsApp campaigns plus Findit Pros directory visibility.",
      offers: packages.map((item) => ({
        "@type": "Offer",
        name: item.name,
        price: item.price.replace(/[^\d]/g, ""),
        priceCurrency: "LKR",
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background pt-14 sm:pt-16">
      <SEOHead
        title="Home Services & Construction Marketing Sri Lanka | Buzz Connect"
        description="Get more leads for your home services or construction business in Sri Lanka. Targeted Email, SMS and WhatsApp campaigns plus verified Findit Pros directory visibility."
        canonical={PAGE_PATH}
        keywords="home services marketing sri lanka, construction marketing sri lanka, contractor marketing, plumber marketing, electrician marketing, lead generation sri lanka, findit pros"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Home Services & Construction Marketing", url: PAGE_PATH },
        ]}
        jsonLd={jsonLd}
      />

      <section className="gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 pb-16 pt-5 sm:pb-20">
          <Breadcrumbs />
          <div className="grid items-center gap-10 py-8 lg:grid-cols-[1.08fr_.92fr] lg:py-14">
            <div>
              <p className="text-xs font-bold uppercase text-accent">Home Services & Construction Marketing</p>
              <h1 className="mt-3 max-w-3xl font-heading text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Get More Leads for Your Home Services &amp; Construction Business in Sri Lanka
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
                Get found by customers ready to hire, generate direct calls and WhatsApp inquiries, and build trust with a verified directory listing—powered by targeted Email, SMS and WhatsApp campaigns and Findit Pros visibility.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button size="lg" variant="hero" asChild>
                  <a href={whatsappUrl(quoteMessage)} target="_blank" rel="noopener noreferrer" data-wa-placement="home_services_hero_quote" data-selected-service={SERVICE_NAME}>
                    Get a Free Quote <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="hero-outline" asChild>
                  <a href={whatsappUrl(quoteMessage)} target="_blank" rel="noopener noreferrer" data-wa-placement="home_services_hero_whatsapp" data-selected-service={SERVICE_NAME}>
                    <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="hero-outline" asChild>
                  <a href="tel:+94771437707" data-selected-service={SERVICE_NAME}><Phone className="h-4 w-4" /> Call 077 143 7707</a>
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border border-primary-foreground/15 bg-primary-foreground/[0.05] p-6 shadow-2xl backdrop-blur-sm sm:p-8">
              <div className="flex items-center justify-between border-b border-primary-foreground/10 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase text-accent">Local lead engine</p>
                  <p className="mt-1 font-heading text-2xl font-black">Search → Trust → Inquiry</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 text-accent"><House /></div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["20+", "Service categories", Wrench],
                  ["25", "Districts covered", MapPin],
                  ["350K+", "Email database", Mail],
                  ["24hrs", "Campaign launch", Clock3],
                ].map(([value, label, Icon]) => {
                  const StatIcon = Icon as typeof Wrench;
                  return <div key={label as string} className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] p-4"><StatIcon className="mb-3 h-5 w-5 text-accent"/><strong className="block font-heading text-2xl text-primary-foreground">{value as string}</strong><span className="text-xs text-primary-foreground/55">{label as string}</span></div>;
                })}
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-lg border border-accent/25 bg-accent/10 p-4">
                <BadgeCheck className="h-6 w-6 shrink-0 text-accent" />
                <p className="text-sm text-primary-foreground/75">Verified Findit Pros visibility helps customers choose with confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-14 sm:py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <p className="text-lg leading-relaxed text-foreground">
            Buzz Connect helps plumbers, electricians, contractors, renovation firms, and home-service businesses across Sri Lanka generate a steady flow of job inquiries through a proven multi-channel approach—combining email, SMS and WhatsApp campaigns with continuous visibility on Sri Lanka&apos;s leading home-services directory, <a href="https://hub.findit.lk/pros" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">Findit Pros</a>. Instead of waiting on word-of-mouth, your business gets in front of customers at the exact moment they&apos;re searching for your service in their town.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="What you can achieve" title="Turn Searches Into Job Inquiries" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map((item) => <div key={item} className="rounded-lg border border-border bg-card p-5"><Check className="mb-4 h-6 w-6 text-accent"/><p className="font-semibold text-card-foreground">{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/25 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Who this is for" title="Built for Every Trade & Construction Business" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {trades.map(({ name, icon: Icon }) => <div key={name} className="flex min-h-24 items-center gap-3 rounded-lg border border-border bg-card p-4"><Icon className="h-6 w-6 shrink-0 text-primary"/><h3 className="font-heading font-bold text-card-foreground">{name}</h3></div>)}
          </div>
        </div>
      </section>

      <section id="packages" className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Pricing packages" title="Home Services & Construction Marketing Packages" body="Every package includes a verified Findit Pros directory listing—so your business keeps getting found every day, not just while ads run." />
          <div className="grid gap-5 lg:grid-cols-3">
            {packages.map((item) => (
              <article key={item.name} className={`relative flex flex-col rounded-lg border bg-card p-6 ${item.featured ? "border-accent shadow-glow" : "border-border"}`}>
                {item.featured && <span className="absolute -top-3 left-5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-accent-foreground">Most popular</span>}
                <h3 className="font-heading text-2xl font-black text-card-foreground">{item.name}</h3>
                <p className="mt-3 font-heading text-3xl font-black text-primary">{item.price}</p>
                <ul className="my-6 flex-1 space-y-3 text-sm text-muted-foreground">
                  {item.items.map((feature) => <li key={feature} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent"/><span>{feature}</span></li>)}
                </ul>
                <Button asChild variant={item.featured ? "default" : "outline"}>
                  <a href={whatsappUrl(`Hi Buzz Connect, I'm interested in the ${item.name} package (${item.price}) for my home services business.`)} target="_blank" rel="noopener noreferrer" data-wa-placement={`home_services_package_${item.name.toLowerCase().replace(/\s+/g, "_")}`} data-selected-service={`${SERVICE_NAME} — ${item.name}`} data-pricing-tier={item.name} data-pricing-price={item.price}>
                    <MessageCircle className="h-4 w-4" /> Inquire on WhatsApp
                  </a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-hero py-16 text-primary-foreground [&_h2]:text-primary-foreground [&_p]:text-primary-foreground/65 sm:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Findit Pros · Powered visibility" title="Get Listed on Sri Lanka’s Verified Home-Services Directory" body="We list and promote your business on the exact trade category page where high-intent customers are already searching. These pages are organised down to the town level, matching customers in Colombo, Kandy, Negombo and across Sri Lanka directly with relevant service providers—without a per-click cost." />
          <div className="grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
            {finditLinks.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-primary-foreground/10 py-3 text-sm font-medium text-primary-foreground/75 transition-colors hover:text-accent"><span>{label}</span><ExternalLink className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></a>)}
          </div>
          <p className="mt-7 text-sm text-primary-foreground/60">Serve a trade that isn&apos;t listed? Explore <a href="https://hub.findit.lk/pros/services" target="_blank" rel="noopener noreferrer" className="font-bold text-accent hover:underline">every home-service category on Findit Pros</a> or visit the <a href="https://hub.findit.lk/pros" target="_blank" rel="noopener noreferrer" className="font-bold text-accent hover:underline">Findit Pros directory</a>.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Our process" title="How It Works" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, body, Icon], index) => <article key={title} className="rounded-lg border border-border bg-card p-5"><div className="flex items-center justify-between"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-heading font-black text-primary-foreground">{index + 1}</span><Icon className="h-6 w-6 text-accent"/></div><h3 className="mt-5 font-heading text-lg font-bold text-card-foreground">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/25 py-16 sm:py-20">
        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2">
          <div><SectionHeading eyebrow="Why choose us" title="Why Home Services Businesses Choose Buzz Connect" /><ul className="space-y-4">{reasons.map((item) => <li key={item} className="flex items-center gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15"><Check className="h-4 w-4 text-accent"/></span><span className="font-medium text-foreground">{item}</span></li>)}</ul></div>
          <div className="grid grid-cols-2 gap-3">
            {[[Users,"Reach"],[MapPin,"Local targeting"],[ShieldCheck,"Verified trust"],[CircleDollarSign,"Cost-effective"]].map(([Icon,label])=>{const FeatureIcon=Icon as typeof Users;return <div key={label as string} className="flex min-h-32 flex-col justify-between rounded-lg border border-border bg-card p-5"><FeatureIcon className="h-7 w-7 text-primary"/><p className="font-heading text-lg font-bold text-card-foreground">{label as string}</p></div>})}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="space-y-3">{faqs.map((item) => <details key={item.q} className="rounded-lg border border-border bg-card p-5"><summary className="cursor-pointer font-heading font-bold text-card-foreground">{item.q}</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p></details>)}</div>
        </div>
      </section>

      <section className="gradient-hero py-16 text-center text-primary-foreground sm:py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="text-xs font-bold uppercase text-accent">Ready to grow?</p>
          <h2 className="mt-3 font-heading text-3xl font-black sm:text-5xl">Start Getting More Job Inquiries This Month</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/65">Reach customers ready to hire across Sri Lanka. Contact Buzz Connect today and launch your campaign fast.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" variant="hero" asChild><a href={whatsappUrl("Hi Buzz Connect, I want to talk to an expert about home services & construction marketing.")} target="_blank" rel="noopener noreferrer" data-wa-placement="home_services_final_expert" data-selected-service={SERVICE_NAME}><MessageCircle className="h-4 w-4"/>Talk to an Expert</a></Button>
            <Button size="lg" variant="hero-outline" asChild><a href={whatsappUrl("Hi Buzz Connect, please prepare a proposal for my home services or construction business.")} target="_blank" rel="noopener noreferrer" data-wa-placement="home_services_final_proposal" data-selected-service={SERVICE_NAME}>Get Proposal <ArrowRight className="h-4 w-4"/></a></Button>
            <Button size="lg" variant="hero-outline" asChild><a href="tel:+94771437707" data-selected-service={SERVICE_NAME}><Phone className="h-4 w-4"/>Call 077 143 7707</a></Button>
          </div>
        </div>
      </section>
    </div>
  );
}