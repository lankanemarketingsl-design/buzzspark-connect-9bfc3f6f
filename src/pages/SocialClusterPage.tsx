import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles, XCircle, Phone } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import NotFound from "@/pages/NotFound";
import {
  socialClusterBySlug,
  SOCIAL_HUB,
  socialHubLinks,
  type SocialClusterPage as ClusterPageData,
} from "@/data/socialClusterPages";

const WA = "94771437707";
const wa = (text: string) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
const SITE = "https://buzzconnect.lk";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs font-semibold tracking-wider uppercase text-accent">{children}</span>
);

const ClusterBody = ({ page }: { page: ClusterPageData }) => {
  const canonical = `${SITE}/${page.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={page.metaTitle}
        description={page.metaDescription}
        canonical={canonical}
        keywords={page.keywords}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Social Media Marketing", url: SOCIAL_HUB.to },
          { name: page.navLabel, url: `/${page.slug}` },
        ]}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: page.serviceType,
            serviceType: page.serviceType,
            description: page.answer,
            url: canonical,
            areaServed: { "@type": "Country", name: "Sri Lanka" },
            provider: {
              "@type": "Organization",
              name: "Buzz Connect",
              url: SITE,
              telephone: "+94771437707",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "LKR",
              price: "50000",
              description: "Social media package management fee, starting from LKR 50,000. Advertising media spend is separate.",
              url: `${SITE}/social-media-packages-sri-lanka`,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: page.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />

      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <nav className="py-3" aria-label="Breadcrumb">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-primary-foreground/60 hover:text-accent text-xs sm:text-sm">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/40" />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={SOCIAL_HUB.to} className="text-primary-foreground/60 hover:text-accent text-xs sm:text-sm">Social Media Marketing</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/40" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-accent text-xs sm:text-sm font-medium">{page.navLabel}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/15 text-accent border border-accent/30 mb-4">
              {page.navLabel} · Sri Lanka
            </span>
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4">{page.h1}</h1>
            <p className="text-primary-foreground/80 text-sm sm:text-lg leading-relaxed mb-6">{page.answer}</p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href={wa(page.waText)} target="_blank" rel="noopener noreferrer" data-selected-service={page.serviceType}>
                <Button variant="hero" size="lg" className="text-base">
                  Get a Social Media Plan <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="tel:+94771437707">
                <Button variant="hero-outline" size="lg" className="text-base">
                  <Phone className="mr-2 w-4 h-4" /> 077 143 7707
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 sm:py-16 space-y-14 sm:space-y-20">
        {/* Intro */}
        <section>
          <SectionLabel>Overview</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4">
            {page.navLabel} for Sri Lankan businesses
          </h2>
          <div className="max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
            {page.intro.map((p) => <p key={p}>{p}</p>)}
            <p>
              This service is one part of our{" "}
              <Link to={SOCIAL_HUB.to} className="text-accent font-semibold hover:underline">social media marketing services in Sri Lanka</Link>. Pricing and tiers are set out on our{" "}
              <Link to="/social-media-packages-sri-lanka" className="text-accent font-semibold hover:underline">social media packages page</Link>, which starts from LKR 50,000 as a management fee.
            </p>
          </div>
        </section>

        {/* Services */}
        <section>
          <SectionLabel>What's included</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-6">{page.serviceHeading}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {page.services.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl bg-card border border-border hover:border-accent/40 transition-colors">
                <Sparkles className="w-5 h-5 text-accent mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who it's for */}
        {page.whoFor && page.whoFor.length > 0 && (
          <section className="grid lg:grid-cols-2 gap-6 items-start">
            <div>
              <SectionLabel>Good fit</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4">Who this is a good fit for</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This service works best in the situations below. If none of them describe you, tell us your situation on WhatsApp and we'll point you to the service that fits — even if it isn't this one.
              </p>
              <a href={wa(page.waText)} target="_blank" rel="noopener noreferrer" data-selected-service={page.serviceType}>
                <Button variant="default" size="lg">
                  <MessageCircle className="mr-2 w-4 h-4" /> Ask if this fits your business
                </Button>
              </a>
            </div>
            <ul className="space-y-3">
              {page.whoFor.map((w) => (
                <li key={w} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{w}</span>
                </li>
              ))}
            </ul>
          </section>
        )}


        {/* Inline CTA */}
        <section className="rounded-2xl border border-accent/30 bg-accent/5 p-6 sm:p-8 flex flex-col md:flex-row md:items-center gap-5 justify-between">
          <div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold mb-2">Not sure where to start?</h2>
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Send us your goal and rough budget on WhatsApp. We'll reply with a suggested plan, a recommended advertising budget and a clear fee — usually the same working day.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a href={wa(page.waText)} target="_blank" rel="noopener noreferrer" data-selected-service={page.serviceType}>
              <Button variant="default" size="lg">
                <MessageCircle className="mr-2 w-4 h-4" /> WhatsApp us
              </Button>
            </a>
            <a href="tel:+94771437707">
              <Button variant="outline" size="lg">
                <Phone className="mr-2 w-4 h-4" /> 077 143 7707
              </Button>
            </a>
          </div>
        </section>

        )}


        {/* Process */}
        <section>
          <SectionLabel>Process</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-6">{page.processHeading}</h2>
          <ol className="grid sm:grid-cols-2 gap-4 max-w-5xl">
            {page.process.map((p, i) => (
              <li key={p.step} className="flex gap-4 p-5 rounded-2xl bg-card border border-border">
                <span className="shrink-0 w-8 h-8 rounded-full bg-accent/15 text-accent font-heading font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading font-semibold mb-1">{p.step}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Deliverables + pricing */}
        <section className="grid lg:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border">
            <SectionLabel>Deliverables</SectionLabel>
            <h2 className="font-heading text-xl sm:text-2xl font-bold mt-2 mb-4">What you receive</h2>
            <ul className="space-y-2.5">
              {page.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 sm:p-8 rounded-2xl bg-accent/5 border border-accent/30">
            <SectionLabel>Pricing</SectionLabel>
            <h3 className="font-heading text-xl sm:text-2xl font-bold mt-2 mb-3">From LKR 50,000 as an agency fee</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Our social media packages start from LKR 50,000. That figure is the <strong className="text-foreground">agency fee</strong> for strategy, content, management and campaign work. Any <strong className="text-foreground">advertising media spend</strong> you put behind campaigns is paid to the platform and is quoted separately, so you always know which part of the budget buys reach.
            </p>
            {page.notIncluded && page.notIncluded.length > 0 && (
              <>
                <h4 className="font-heading font-semibold text-sm mb-2">Not included in the fee</h4>
                <ul className="space-y-2 mb-4">
                  {page.notIncluded.map((n) => (
                    <li key={n} className="flex items-start gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{n}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <Link to="/social-media-packages-sri-lanka">
              <Button variant="outline" className="w-full">See full package details</Button>
            </Link>
          </div>
        </section>

        {/* Comparison table */}
        {page.table && (
          <section>
            <SectionLabel>Comparison</SectionLabel>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-6">{page.tableHeading}</h2>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm min-w-[560px]">
                <thead className="bg-muted">
                  <tr>
                    {page.table.head.map((h) => (
                      <th key={h} className="text-left font-heading font-semibold p-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {page.table.rows.map((row) => (
                    <tr key={row[0]} className="border-t border-border">
                      {row.map((cell, i) => (
                        <td key={i} className={`p-4 align-top ${i === 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Industries */}
        <section>
          <SectionLabel>Industries</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4">Industries we run this for</h2>
          <p className="text-muted-foreground max-w-4xl mb-6">{page.industriesNote}</p>
          <div className="flex flex-wrap gap-3">
            {page.industries.map((ind) => (
              <Link
                key={ind.to}
                to={ind.to}
                className="px-4 py-2 rounded-full text-sm bg-card border border-border hover:border-accent hover:text-accent transition-colors"
              >
                {ind.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-6">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="max-w-4xl">
            {page.faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-heading">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Related pages */}
        <section>
          <SectionLabel>Related</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4">Related services</h2>
          <p className="text-muted-foreground max-w-4xl mb-6">
            Most clients combine this with one or two of the following. Start from the{" "}
            <Link to={SOCIAL_HUB.to} className="text-accent font-semibold hover:underline">main social media marketing page</Link> if you want the full picture.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.siblings.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="flex items-center justify-between gap-3 p-5 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors"
              >
                <span className="font-medium capitalize">{s.label}</span>
                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        {/* Cluster nav */}
        <section>
          <SectionLabel>Explore</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4">All social media services</h2>
          <div className="flex flex-wrap gap-2.5">
            {socialHubLinks
              .filter((l) => l.to !== `/${page.slug}`)
              .map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="px-4 py-2 rounded-full text-sm bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {l.label}
                </Link>
              ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="gradient-hero text-primary-foreground py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">Ready to plan your {page.navLabel.toLowerCase()}?</h2>
          <p className="text-primary-foreground/70 mb-6 text-sm sm:text-base">
            Tell us your goal and budget and we'll come back with a plan, a recommended ad budget and a clear fee — no obligation.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={wa(page.waText)} target="_blank" rel="noopener noreferrer" data-selected-service={page.serviceType}>
              <Button variant="hero" size="lg">
                <MessageCircle className="mr-2 w-4 h-4" /> Message us on WhatsApp
              </Button>
            </a>
            <Link to="/contact-us">
              <Button variant="hero-outline" size="lg">Contact Buzz Connect</Button>
            </Link>
          </div>
          <p className="text-xs text-primary-foreground/50 mt-6">
            Buzz Connect · Colombo, Sri Lanka · Social media packages from LKR 50,000, advertising budget quoted separately.
          </p>
        </div>
      </section>
    </div>
  );
};

const SocialClusterPage = () => {
  const { pathname } = useLocation();
  const page = socialClusterBySlug(pathname.replace(/^\//, ""));
  if (!page) return <NotFound />;
  return <ClusterBody page={page} />;
};

export default SocialClusterPage;
