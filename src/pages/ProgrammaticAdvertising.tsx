import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, ArrowRight, Zap, ShieldCheck, Target,
  BarChart3, Clock, Layers, Rocket, Crown, TrendingUp, Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import IndustryStatsBanner from "@/components/IndustryStatsBanner";

const WA = "94771437707";
const buildWa = (msg: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const publishers = [
  {
    name: "FindIt.lk",
    tag: "Local Business & Offer Finder",
    link: "https://www.findit.lk/",
    desc: "Where Sri Lankans go to save money and save time. Visitors browse daily promotions and discounts across hotels, supermarkets, restaurants, banks, credit cards, real estate, and education — plus jobs, classifieds, and a business directory. Ideal for time-sensitive offers and deals reaching an audience already in decision mode.",
    chips: ["Offers", "Deals", "Directory", "Classifieds"],
  },
  {
    name: "Studyway.lk",
    tag: "Education Information Hub",
    link: "https://www.studyway.lk/",
    desc: "Students, parents and professionals search courses, degrees, diplomas, HNDs, and study-abroad programs. Ideal for education brands, professional training, financial products, and any advertiser targeting a research-driven, aspirational audience.",
    chips: ["Courses", "Degrees", "Study Abroad", "Diplomas"],
  },
  {
    name: "YouJobs.lk",
    tag: "Modern Recruiting Platform",
    link: "https://youjobs.lk/",
    desc: "Job seekers browse verified vacancies across every district and industry in Sri Lanka. Ideal for employer branding, HR tech, B2B services, financial products, and brands targeting career-driven professionals.",
    chips: ["Jobs", "B2B", "Professionals", "Employer Branding"],
  },
];

const whyPoints = [
  { icon: Target, title: "Guaranteed impression delivery", desc: "You know exactly how much reach you're paying for." },
  { icon: ShieldCheck, title: "Zero ad fraud", desc: "100% verified, brand-safe traffic across the entire network." },
  { icon: Layers, title: "Delivery across our full network", desc: "Three distinct audiences, one campaign." },
  { icon: BarChart3, title: "Real-time performance reporting", desc: "Track every impression as it happens." },
  { icon: Sparkles, title: "No exchange fees", desc: "Direct, local platform relationships — every rupee reaches media." },
];

const packages = [
  {
    name: "Boost", price: "Rs. 25,000", vol: "5,000 impressions", cpm: "Effective CPM Rs. 5,000",
    featured: false, icon: Rocket,
  },
  {
    name: "Starter", price: "Rs. 48,000", vol: "10,000 impressions", cpm: "Effective CPM Rs. 4,800",
    featured: false, icon: Zap,
  },
  {
    name: "Growth", price: "Rs. 225,000", vol: "50,000 impressions", cpm: "Effective CPM Rs. 4,500",
    featured: true, icon: Crown,
  },
  {
    name: "Pro", price: "Rs. 400,000", vol: "100,000 impressions", cpm: "Effective CPM Rs. 4,000",
    featured: false, icon: TrendingUp,
  },
];

const packageFeatures = [
  "Guaranteed impression delivery",
  "Single banner slot placement",
  "Delivery across the full network",
  "Real-time performance reporting",
  "Zero ad fraud — verified traffic",
];

const faqs = [
  { q: "How does programmatic advertising work with Buzz Connect?", a: "Your banner ad is placed on a guaranteed slot across our verified network — FindIt.lk, Studyway.lk and YouJobs.lk. You choose a package based on how many impressions you want, and we deliver that volume with real-time reporting." },
  { q: "What's the smallest package available?", a: "The Boost package starts at Rs. 25,000 for 5,000 guaranteed impressions — a low-cost way to test programmatic advertising." },
  { q: "Can I combine programmatic advertising with SEO?", a: "Yes — many clients pair programmatic advertising with our SEO Services to build both immediate visibility and long-term Google rankings." },
  { q: "Is my ad guaranteed to reach real people?", a: "Yes. All traffic across our network is verified and brand-safe — zero bots, zero fraud." },
  { q: "How do I get started?", a: "Chat with us on WhatsApp and we'll recommend the right package for your goals and budget." },
];

const ProgrammaticAdvertising = () => {
  const jsonLd = useMemo(() => [
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@context": "https://schema.org", "@type": "Service", name: "Programmatic Advertising Sri Lanka", provider: { "@type": "Organization", name: "Buzz Connect" }, areaServed: { "@type": "Country", name: "Sri Lanka" }, description: "Guaranteed, brand-safe programmatic advertising across FindIt.lk, Studyway.lk and YouJobs.lk. Verified impressions, zero ad fraud, real-time reporting." },
  ], []);

  return (
    <ServicePageLayout
      badge="Programmatic Advertising Sri Lanka"
      title="Programmatic Advertising Sri Lanka | Buzz Connect"
      subtitle="Buzz Connect delivers guaranteed, brand-safe programmatic advertising across Sri Lanka's most trusted local platforms — verified impressions, zero ad fraud, real-time reporting."
    >
      <SEOHead
        title="Programmatic Advertising Sri Lanka | Buzz Connect"
        description="Guaranteed, brand-safe programmatic advertising across FindIt.lk, Studyway.lk & YouJobs.lk. Verified impressions, zero ad fraud, real-time reporting. From Rs. 25,000."
        canonical="/programmatic-advertising-sri-lanka"
        keywords="programmatic advertising sri lanka, display advertising sri lanka, findit.lk, studyway.lk, youjobs.lk, banner advertising sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Programmatic Advertising Sri Lanka", url: "/programmatic-advertising-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      {/* Hero CTAs */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-4 mb-10 -mt-4">
        <a data-selected-service="Programmatic Advertising" href={buildWa("Hi Buzz Connect, I'm interested in Programmatic Advertising.")} target="_blank" rel="noopener noreferrer">
          <Button className="bg-accent hover:bg-accent/90 text-primary px-8 py-3 text-base font-bold rounded-full"><Zap className="w-5 h-5 mr-2" />Start Your Campaign</Button>
        </a>
        <Link to="/contact-us">
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary px-8 py-3 text-base font-bold rounded-full">Free Consultation</Button>
        </Link>
      </motion.div>

      <IndustryStatsBanner
        icon={Target}
        gradient="gradient-hero"
        tagline="Verified. Brand-safe. Guaranteed delivery."
        stats={[
          { value: "3", label: "Trusted Platforms" },
          { value: "0%", label: "Ad Fraud" },
          { value: "100%", label: "Verified Traffic" },
          { value: "Real-time", label: "Reporting" },
        ]}
      />

      {/* Publishers */}
      <div className="mb-16 mt-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3 text-center">Your Ad, Across Sri Lanka's Most Trusted Platforms</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">Your programmatic campaign runs across our verified network of local platforms — each reaching a different, highly engaged audience.</p>
        <div className="grid lg:grid-cols-3 gap-6">
          {publishers.map(p => (
            <div key={p.name} className="p-6 rounded-2xl border border-border bg-card hover:border-accent/60 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold">{p.name}</span>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-xs text-accent inline-flex items-center gap-1 hover:underline">Visit <ArrowRight className="w-3 h-3" /></a>
              </div>
              <p className="text-xs text-muted-foreground italic mb-3">{p.tag}</p>
              <p className="text-sm text-foreground leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.chips.map(c => <span key={c} className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground">{c}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why */}
      <div className="mb-16">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">Why Programmatic Advertising?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {whyPoints.map(r => (
            <div key={r.title} className="p-5 rounded-xl border border-border bg-card hover:border-accent/40 hover:shadow-lg transition-all">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center mb-3"><r.icon className="w-5 h-5 text-primary" /></div>
              <h3 className="font-heading font-bold text-sm mb-1.5">{r.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Packages */}
      <div id="packages" className="mb-16 scroll-mt-24">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3 text-center">Choose Your Package</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10">Every package guarantees delivery on a single banner slot, with verified impressions and transparent reporting — pick the volume that matches your budget and goals.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages.map(pkg => (
            <div key={pkg.name} className={`p-6 rounded-2xl border-2 transition-all hover:-translate-y-1 ${pkg.featured ? "border-accent bg-gradient-to-br from-accent/10 to-transparent shadow-xl" : "border-border bg-card hover:border-accent/40"}`}>
              {pkg.featured && <div className="inline-block px-3 py-1 rounded-full bg-accent text-primary text-[10px] font-bold uppercase mb-2">Most Popular</div>}
              <pkg.icon className="w-8 h-8 text-accent mb-3" />
              <h4 className="font-heading font-bold text-xl">{pkg.name}</h4>
              <div className="font-heading font-bold text-2xl text-foreground mt-2">{pkg.price}</div>
              <div className="text-sm text-accent font-semibold mb-1">{pkg.vol}</div>
              <div className="text-xs text-muted-foreground mb-4">{pkg.cpm}</div>
              <ul className="space-y-1.5 mb-5">
                {packageFeatures.map(f => <li key={f} className="text-xs text-muted-foreground flex gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />{f}</li>)}
              </ul>
              <a href={buildWa(`Hi Buzz Connect, I want the ${pkg.name} Programmatic Advertising package`)} target="_blank" rel="noopener noreferrer" className="block">
                <Button className={`w-full ${pkg.featured ? "bg-accent hover:bg-accent/90 text-primary" : ""}`} variant={pkg.featured ? "default" : "outline"}>Start This Package</Button>
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground italic mt-6">
          Need higher volume or a custom placement?{" "}
          <a href={buildWa("Hi Buzz Connect, I need a custom Programmatic Advertising quote.")} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Chat with us on WhatsApp</a> for a tailored quote.
        </p>
      </div>

      {/* Programmatic + SEO */}
      <div className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl border border-border bg-card text-center">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">Programmatic + SEO: Be Seen Everywhere</h2>
        <p className="text-muted-foreground mb-6">A programmatic campaign gets your brand in front of people today. SEO gets you found on Google for months and years to come. Combine both to cover every stage of the customer journey — from discovery to search.</p>
        <Link to="/seo-sri-lanka">
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary rounded-full">Explore Our SEO Services <ArrowRight className="w-4 h-4 ml-2" /></Button>
        </Link>
      </div>

      {/* FAQs */}
      <div className="mb-16 max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
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
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Get Started</h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">Ready to reach Sri Lankan audiences across FindIt.lk, Studyway.lk and YouJobs.lk?</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a data-selected-service="Programmatic Advertising" href={buildWa("Hi Buzz Connect, I'm interested in Programmatic Advertising.")} target="_blank" rel="noopener noreferrer">
            <Button className="bg-accent hover:bg-accent/90 text-primary px-8 py-3 text-base font-bold rounded-full"><Clock className="w-5 h-5 mr-2" />Chat with us on WhatsApp: 077 143 7707</Button>
          </a>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default ProgrammaticAdvertising;
