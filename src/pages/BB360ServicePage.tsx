import { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, BadgeCheck, BarChart3, Building2, CalendarDays, Check, ChevronRight,
  CircleDollarSign, Facebook, FileText, Linkedin, Mail, MessageCircle, PackageCheck,
  Rocket, Search, Send, Smartphone, Sparkles, Target, TimerReset, Users,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import LogoCarousel from "@/components/home/LogoCarousel";
import ContactSection from "@/components/home/ContactSection";
import { Button } from "@/components/ui/button";
import { bb360Channels, bb360Packages, bb360ServiceLinks, getBB360ServicePage } from "@/data/bb360ServicePages";

const WA = "94771976351";
const promotionIcons = [Building2, CalendarDays, PackageCheck, Users, Sparkles, Target, FileText, BadgeCheck, BarChart3, CircleDollarSign];
const ideaIcons = [Rocket, Sparkles, CalendarDays, Target, Send, Users, PackageCheck, TimerReset];
const sectionIcons = [Mail, Smartphone, MessageCircle, Target];
const channelIcons = [Mail, Target, Search, Facebook, Linkedin];

const wa = (message: string) => `https://wa.me/${WA}?text=${encodeURIComponent(message)}`;
const placementSlug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");

const BB360ServicePage = () => {
  const { industry: slug } = useParams();
  const page = getBB360ServicePage(slug);

  const jsonLd = useMemo(() => {
    if (!page) return [];
    return [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `Brand Blast 360 for ${page.industry}`,
        serviceType: `${page.singular} promotion campaign`,
        provider: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" },
        areaServed: { "@type": "Country", name: "Sri Lanka" },
        url: `https://buzzconnect.lk/brand-blast-360/${page.slug}`,
        description: page.metaDescription,
        offers: bb360Packages.map((item) => ({
          "@type": "Offer",
          name: item.name,
          price: item.price.replace(/[^\d]/g, ""),
          priceCurrency: "LKR",
          description: `${item.campaigns}, ${item.perCampaign}`,
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ];
  }, [page]);

  if (!page) return <Navigate to="/brand-blast-360" replace />;

  const launchMessage = `Hi Buzz Connect, I want to launch a Brand Blast 360 ${page.singular.toLowerCase()} promotion campaign. Please help me choose the right package.`;

  return (
    <div className="pt-14 sm:pt-16 overflow-x-hidden pb-20 lg:pb-0">
      <SEOHead
        title={page.metaTitle}
        description={page.metaDescription}
        canonical={`/brand-blast-360/${page.slug}`}
        keywords={`${page.singular.toLowerCase()} promotion campaign sri lanka, ${page.singular.toLowerCase()} advertising campaign, ${page.singular.toLowerCase()} offer promotion, ${page.singular.toLowerCase()} email sms whatsapp campaign`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Brand Blast 360", url: "/brand-blast-360" },
          { name: page.industry, url: `/brand-blast-360/${page.slug}` },
        ]}
        jsonLd={jsonLd}
      />

      <section className="relative gradient-hero text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 py-12 sm:py-20">
          <Breadcrumbs />
          <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,.85fr)] gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/15 px-3 py-1.5 text-xs font-bold text-accent mb-5">
                <Rocket className="h-4 w-4" /> Brand Blast 360 · {page.industry}
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-5">{page.h1}</h1>
              <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-primary-foreground/80 mb-7">{page.hero}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="hero" size="lg" asChild>
                  <a href={wa(launchMessage)} target="_blank" rel="noopener noreferrer" data-wa-placement={`bb360_${page.slug}_hero`} data-selected-service={`Brand Blast 360 — ${page.industry}`} data-service="Brand Blast 360">
                    <MessageCircle /> {page.cta}
                  </a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/brand-blast-360" data-wa-placement={`bb360_${page.slug}_hero_packages`}>
                    View Brand Blast 360 Packages <ArrowRight />
                  </Link>
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-primary-foreground/70">
                <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-accent" /> From LKR 15,000</span>
                <span className="inline-flex items-center gap-1.5"><TimerReset className="h-4 w-4 text-accent" /> Launch within 24 hours</span>
                <span className="inline-flex items-center gap-1.5"><BarChart3 className="h-4 w-4 text-accent" /> Performance report included</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="border border-primary-foreground/15 bg-primary-foreground/5 p-6 sm:p-8 backdrop-blur-sm">
              <div className="text-xs font-bold uppercase text-accent mb-2">One promotion. Multiple channels.</div>
              <div className="font-heading text-5xl sm:text-6xl font-black text-accent">988K+</div>
              <p className="text-sm text-primary-foreground/65 mt-2 mb-6">combined campaign reach across five coordinated channels</p>
              <div className="space-y-2.5">
                {bb360Channels.map((channel, index) => {
                  const Icon = channelIcons[index] ?? Mail;
                  return <div key={channel} className="flex items-center gap-3 border-b border-primary-foreground/10 pb-2.5 last:border-0"><Icon className="h-4 w-4 text-accent" /><span className="text-sm font-semibold">{channel}</span>{index < bb360Channels.length - 1 && <ChevronRight className="ml-auto h-4 w-4 text-primary-foreground/35" />}</div>;
                })}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 bg-primary-foreground/5">
          <div className="container mx-auto px-4 py-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-primary-foreground/75">
            <span>Email</span><span>SMS</span><span>WhatsApp</span><span>Facebook Remarketing</span><span>Findit.lk</span><span>LinkedIn</span>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10"><div className="text-xs font-bold uppercase text-primary mb-3">Built around your offer</div><h2 className="font-heading text-3xl sm:text-4xl font-black mb-4">What Are You Promoting?</h2><p className="text-muted-foreground">Choose the promotion already on your calendar. Brand Blast 360 turns it into one coordinated campaign across multiple customer touchpoints.</p></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {page.promotions.map((item, index) => { const Icon = promotionIcons[index % promotionIcons.length]; return <article key={item.title} className="border border-border bg-card p-5 shadow-card"><div className="w-10 h-10 bg-accent/15 text-accent flex items-center justify-center mb-4"><Icon className="h-5 w-5" /></div><h3 className="font-heading font-bold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p></article>; })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div><div className="text-xs font-bold uppercase text-primary mb-3">The Brand Blast 360 product</div><h2 className="font-heading text-3xl sm:text-4xl font-black mb-4">One {page.singular} Promotion. Multiple Channels.</h2><p className="text-muted-foreground leading-relaxed mb-6">Create your promotion once and distribute it through email, Facebook remarketing, Findit.lk, Facebook exposure and LinkedIn. SMS and WhatsApp support direct, timely customer responses where configured for your campaign.</p><div className="grid grid-cols-2 gap-3 max-w-md mb-7"><div className="border border-border bg-card p-4"><div className="font-heading text-2xl font-black text-primary">LKR 15,000</div><div className="text-xs text-muted-foreground">starting campaign price</div></div><div className="border border-border bg-card p-4"><div className="font-heading text-2xl font-black text-primary">24 hours</div><div className="text-xs text-muted-foreground">standard launch window</div></div></div><Button asChild><Link to="/brand-blast-360" data-wa-placement={`bb360_${page.slug}_product_packages`}>View Brand Blast 360 Packages <ArrowRight /></Link></Button></div>
          <div className="relative border border-border bg-card p-6 sm:p-8 shadow-card">
            <div className="absolute left-[2.1rem] top-12 bottom-12 w-px bg-border" aria-hidden="true" />
            {bb360Channels.map((channel, index) => { const Icon = channelIcons[index] ?? Mail; return <div key={channel} className="relative flex items-center gap-4 py-3"><div className="z-10 w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center"><Icon className="h-5 w-5" /></div><div><div className="font-heading font-bold">{channel}</div><div className="text-xs text-muted-foreground">Touchpoint {index + 1} in the same promotion campaign</div></div></div>; })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4"><div className="max-w-3xl mb-10"><div className="text-xs font-bold uppercase text-accent mb-3">Industry campaign playbook</div><h2 className="font-heading text-3xl sm:text-4xl font-black mb-4">{page.singular} Promotion Campaign Ideas</h2><p className="text-primary-foreground/65">Each campaign starts with one clear promotion and one response action.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{page.campaignIdeas.map((item,index)=>{const Icon=ideaIcons[index%ideaIcons.length];return <article key={item.title} className="border border-primary-foreground/15 bg-primary-foreground/5 p-5"><Icon className="h-6 w-6 text-accent mb-4"/><h3 className="font-heading font-bold mb-2">{item.title}</h3><p className="text-sm text-primary-foreground/65 leading-relaxed">{item.description}</p></article>;})}</div></div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4"><div className="text-center max-w-3xl mx-auto mb-10"><div className="text-xs font-bold uppercase text-primary mb-3">Campaign channels</div><h2 className="font-heading text-3xl sm:text-4xl font-black mb-4">Use Each Channel for a Clear Campaign Job</h2><p className="text-muted-foreground">These are campaign-specific applications—not replacements for a complete ongoing marketing strategy.</p></div><div className="grid lg:grid-cols-2 gap-5">{page.sections.map((section,index)=>{const Icon=sectionIcons[index]??Mail; const link=Object.values(bb360ServiceLinks)[index]; const labels=["Explore Email Marketing","Explore SMS Marketing","Explore WhatsApp Marketing",page.cta]; const isLead=index===3;return <article key={section.h2} className="border border-border bg-card p-6 sm:p-7 shadow-card"><div className="flex items-start gap-4"><div className="w-11 h-11 bg-primary/10 text-primary flex items-center justify-center shrink-0"><Icon className="h-5 w-5"/></div><div><h2 className="font-heading text-xl sm:text-2xl font-bold mb-2">{section.h2}</h2><p className="text-muted-foreground leading-relaxed mb-4">{section.body}</p>{isLead?<a href={wa(launchMessage)} target="_blank" rel="noopener noreferrer" data-wa-placement={`bb360_${page.slug}_lead_generation`} data-selected-service={`Brand Blast 360 — ${page.industry}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">{labels[index]} <ArrowRight className="h-4 w-4"/></a>:<Link to={link} data-wa-placement={`bb360_${page.slug}_${placementSlug(labels[index])}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">{labels[index]} <ArrowRight className="h-4 w-4"/></Link>}</div></div></article>;})}</div></div>
      </section>

      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 grid lg:grid-cols-[.8fr_1.2fr] gap-10 items-center"><div><div className="text-xs font-bold uppercase text-primary mb-3">Direct response journey</div><h2 className="font-heading text-3xl sm:text-4xl font-black mb-4">Turn {page.singular} Promotions Into Direct Enquiries</h2><p className="text-muted-foreground leading-relaxed">Brand Blast 360 distributes one defined promotion and gives interested customers a clear next step to your website, phone or WhatsApp.</p></div><div className="flex flex-col sm:flex-row items-stretch gap-2">{["Promotion","Customer sees offer","Click or response","Website or WhatsApp","Enquiry"].map((step,index)=><div key={step} className="flex-1 flex sm:flex-col items-center justify-center text-center gap-2 border border-border bg-card p-4"><span className="w-7 h-7 bg-accent text-accent-foreground text-xs font-black flex items-center justify-center">{index+1}</span><span className="text-xs font-bold">{step}</span>{index<4&&<ArrowRight className="h-4 w-4 text-muted-foreground sm:rotate-0 rotate-90"/>}</div>)}</div></div>
        <div className="container mx-auto px-4 mt-8"><div className="border-l-4 border-accent bg-card p-5"><div className="font-heading font-bold mb-2">Campaign outcomes can include</div><div className="flex flex-wrap gap-2">{page.leadOutcomes.map(item=><span key={item} className="border border-border bg-muted/40 px-3 py-1.5 text-xs font-semibold">{item}</span>)}</div></div></div>
      </section>

      <section className="py-16 sm:py-20 bg-background" id="packages">
        <div className="container mx-auto px-4"><div className="text-center max-w-3xl mx-auto mb-10"><div className="text-xs font-bold uppercase text-primary mb-3">Select your campaign</div><h2 className="font-heading text-3xl sm:text-4xl font-black mb-4">Choose Your Brand Blast 360 Campaign</h2><p className="text-muted-foreground">Every option uses the existing Brand Blast 360 package and channel setup. Choose one campaign or plan several promotions ahead.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{bb360Packages.map((pkg,index)=><article key={pkg.name} className={`border bg-card p-6 flex flex-col ${index===2?"border-primary shadow-card":"border-border"}`}><div className="text-xs font-bold uppercase text-primary mb-2">{pkg.campaigns}</div><h3 className="font-heading text-xl font-black">{pkg.name}</h3><div className="font-heading text-2xl font-black text-primary mt-4">{pkg.price}</div><div className="text-xs text-muted-foreground mt-1">{pkg.perCampaign}</div><div className="text-xs font-semibold text-accent mt-2 min-h-8">{pkg.highlight}</div><ul className="my-5 space-y-2 text-sm flex-1"><li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5"/>All 5 Brand Blast channels</li><li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5"/>988,000+ reach per campaign</li><li className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5"/>{pkg.validity}</li></ul><Button variant={index===2?"default":"secondary"} asChild><a href={wa(`Hi Buzz Connect, I want the ${pkg.name} package for my ${page.singular.toLowerCase()} promotion (${pkg.campaigns}, ${pkg.price}). Please share next steps.`)} target="_blank" rel="noopener noreferrer" data-wa-placement={`bb360_${page.slug}_package_${placementSlug(pkg.name)}`} data-selected-service={`Brand Blast 360 — ${page.industry} — ${pkg.name}`} data-pricing-tier={pkg.name} data-pricing-price={pkg.price}><MessageCircle/> Choose This Package</a></Button></article>)}</div><div className="text-center mt-8"><Link to="/brand-blast-360" data-wa-placement={`bb360_${page.slug}_full_package_details`} className="inline-flex items-center gap-2 font-bold text-primary">See Full Package Details <ArrowRight className="h-4 w-4"/></Link></div></div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground"><div className="container mx-auto px-4"><div className="text-center max-w-3xl mx-auto mb-10"><div className="text-xs font-bold uppercase text-accent mb-3">Simple launch process</div><h2 className="font-heading text-3xl sm:text-4xl font-black">How Brand Blast 360 Works</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">{[('Choose Your Promotion','Tell us what you want to promote.'),('Choose Your Campaign','Select the Brand Blast 360 package.'),('We Prepare Your Campaign','We prepare the required creative, content and setup.'),('Launch Across Channels','Your campaign is distributed through the selected channels.'),('Generate Enquiries','Customers respond through your configured campaign CTA.')].map(([title,description],index)=><article key={title} className="border border-primary-foreground/15 bg-primary-foreground/5 p-5"><div className="w-9 h-9 bg-accent text-accent-foreground font-black flex items-center justify-center mb-4">{index+1}</div><h3 className="font-heading font-bold mb-2">{title}</h3><p className="text-sm text-primary-foreground/65">{description}</p></article>)}</div></div></section>

      {page.industryPage && page.industryAnchor && <section className="py-10 bg-muted/30 border-b border-border"><div className="container mx-auto px-4"><div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-border bg-card p-6"><div><div className="font-heading font-bold">Need more than a single promotion campaign?</div><p className="text-sm text-muted-foreground mt-1">Looking for a complete ongoing strategy? Explore our {page.industryAnchor}.</p></div><Button variant="outline" asChild><Link to={page.industryPage}>Explore the complete service <ArrowRight/></Link></Button></div></div></section>}

      <section className="py-16 sm:py-20 bg-background"><div className="container mx-auto px-4 max-w-4xl"><div className="text-center mb-10"><div className="text-xs font-bold uppercase text-primary mb-3">Questions before launch</div><h2 className="font-heading text-3xl sm:text-4xl font-black">{page.singular} Promotion Campaign FAQs</h2></div><div className="space-y-3">{page.faqs.map((faq)=><details key={faq.q} className="group border border-border bg-card p-5"><summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-heading font-bold">{faq.q}<span className="text-primary group-open:rotate-90 transition-transform"><ChevronRight className="h-5 w-5"/></span></summary><p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.a}</p></details>)}</div></div></section>

      <section className="gradient-hero text-primary-foreground py-16 sm:py-20 text-center"><div className="container mx-auto px-4 max-w-3xl"><div className="text-xs font-bold uppercase text-accent mb-3">Ready to launch?</div><h2 className="font-heading text-3xl sm:text-5xl font-black mb-4">Have a {page.singular} Promotion Ready?</h2><p className="text-primary-foreground/75 mb-7">Tell us what you want to promote and we’ll help you choose the right Brand Blast 360 campaign.</p><div className="flex flex-col sm:flex-row justify-center gap-3"><Button variant="hero" size="lg" asChild><a href={wa(launchMessage)} target="_blank" rel="noopener noreferrer" data-wa-placement={`bb360_${page.slug}_final_whatsapp`} data-selected-service={`Brand Blast 360 — ${page.industry}`}><MessageCircle/>{page.cta}</a></Button><Button variant="hero-outline" size="lg" asChild><Link to="/brand-blast-360" data-wa-placement={`bb360_${page.slug}_final_packages`}>View Brand Blast 360 Packages <ArrowRight/></Link></Button></div></div></section>

      <RelatedServices currentPath={`/brand-blast-360/${page.slug}`} />
      <LogoCarousel />
      <ContactSection />

      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur p-3"><Button className="w-full" asChild><a href={wa(launchMessage)} target="_blank" rel="noopener noreferrer" data-wa-placement={`bb360_${page.slug}_sticky_mobile`} data-selected-service={`Brand Blast 360 — ${page.industry}`}><MessageCircle/>{page.cta}</a></Button></div>
    </div>
  );
};

export default BB360ServicePage;
