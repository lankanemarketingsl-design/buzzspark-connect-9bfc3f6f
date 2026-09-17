import { Link, Navigate, useParams } from "react-router-dom";
import { useMemo } from "react";
import { motion } from "framer-motion";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";
import { Mail, MessageSquare, Phone, Target, CheckCircle, HelpCircle, Zap } from "lucide-react";
import { bb360ServiceLinks, getBB360ServicePage } from "@/data/bb360ServicePages";

const WA = "94771976351";
const ICONS = [Mail, Phone, MessageSquare, Target];

const BB360ServicePage = () => {
  const { industry: slug } = useParams();
  const page = getBB360ServicePage(slug);

  const faqs = useMemo(() => {
    if (!page) return [];
    return [
      {
        q: `How much does ${page.industry.toLowerCase()} marketing cost in Sri Lanka?`,
        a: `Campaigns start from ${page.priceFrom} — roughly LKR 0.015 per person reached. That covers the designed creative, the send across all channels and the performance report afterwards.`,
      },
      {
        q: `How many ${page.audience} can I reach?`,
        a: `${page.reach} people in one campaign across email, SMS, WhatsApp, Facebook remarketing, Findit.lk and LinkedIn — with 750,000 verified local email contacts at the core.`,
      },
      {
        q: "How fast can it go live?",
        a: "Within 24 hours. Once your offer and artwork details are confirmed, our team designs, approves and sends the campaign the same day or the next.",
      },
    ];
  }, [page]);

  const jsonLd = useMemo(() => {
    if (!page) return [];
    return [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: page.h1,
        serviceType: `Email, SMS and WhatsApp Marketing for ${page.industry}`,
        provider: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" },
        areaServed: { "@type": "Country", name: "Sri Lanka" },
        description: page.metaDescription,
        offers: {
          "@type": "Offer",
          price: "15000",
          priceCurrency: "LKR",
          description: `Brand Blast 360 multi-channel campaign for ${page.industry} — ${page.reach} reach across 5 channels, live in 24 hours.`,
        },
      },
    ];
  }, [page, faqs]);

  if (!page) return <Navigate to="/brand-blast-360" replace />;

  const wa = (text: string) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

  return (
    <ServicePageLayout
      badge={`Brand Blast 360 · ${page.industry}`}
      title={page.h1}
      subtitle={page.metaDescription}
    >
      <SEOHead
        title={page.metaTitle}
        description={page.metaDescription}
        canonical={`/brand-blast-360/${page.slug}`}
        keywords={`email marketing for ${page.industry.toLowerCase()} sri lanka, sms marketing for ${page.industry.toLowerCase()}, whatsapp marketing for ${page.industry.toLowerCase()}, lead generation for ${page.industry.toLowerCase()} sri lanka`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Brand Blast 360", url: "/brand-blast-360" },
          { name: page.industry, url: `/brand-blast-360/${page.slug}` },
        ]}
        jsonLd={jsonLd}
      />

      <div className="max-w-4xl space-y-12">
        {/* Definition intro */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-lg text-foreground leading-relaxed mb-4">
            Email, SMS and WhatsApp marketing for {page.industry.toLowerCase()} in Sri Lanka lets you reach {page.reach} {page.audience} in
            one campaign — from {page.priceFrom}, live in 24 hours.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Buzz Connect runs it as a single Brand Blast 360 campaign: one designed creative, sent across email, SMS,
            WhatsApp, Facebook remarketing, Findit.lk and LinkedIn at the same time. You get the artwork, the send and a
            performance report — and every reply comes straight to your WhatsApp.
          </p>
        </motion.div>

        {/* Four channel H2 sections */}
        <div className="space-y-6">
          {page.sections.map((section, i) => {
            const Icon = ICONS[i] ?? Mail;
            return (
              <motion.div
                key={section.h2}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">{section.h2}</h2>
                    <p className="text-muted-foreground leading-relaxed">{section.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Brand Blast 360 offer block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl gradient-hero text-primary-foreground"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/20 text-accent border border-accent/30 mb-4">
            <Zap className="w-3.5 h-3.5" /> All channels, one campaign
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
            Run all channels at once with Brand Blast 360
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed mb-6">
            {page.reach} reach across 5 channels from {page.priceFrom}, live in 24 hours — designed creative, full send
            and performance report included.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              data-selected-service="Brand Blast 360"
              href={wa(`Hi Buzz Connect, I want to run a Brand Blast 360 campaign for ${page.industry} in Sri Lanka.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity"
            >
              Chat on WhatsApp
            </a>
            <Link
              to="/brand-blast-360"
              className="inline-block px-8 py-3 rounded-full border border-primary-foreground/30 font-bold hover:bg-primary-foreground/10 transition-colors"
            >
              See Brand Blast 360
            </Link>
          </div>
        </motion.div>

        {/* Internal links */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Explore the individual services</h2>
          <ul className="space-y-3">
            {Object.entries(bb360ServiceLinks).map(([name, url]) => (
              <li key={name} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <Link to={url} className="text-foreground font-medium underline-offset-4 hover:underline">
                  {name}
                </Link>
              </li>
            ))}
            {page.industryPage && (
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <Link to={page.industryPage} className="text-foreground font-medium underline-offset-4 hover:underline">
                  {page.industryAnchor ?? `${page.industry} marketing services`}
                </Link>
              </li>
            )}
          </ul>
        </motion.div>

        {/* FAQ */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-7 h-7 text-primary" />
            <h2 className="font-heading text-2xl font-bold text-foreground">
              {page.industry} Marketing FAQs
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group p-5 rounded-xl bg-card shadow-card border border-border">
                <summary className="font-heading font-semibold text-foreground cursor-pointer list-none flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </motion.div>
      </div>
    </ServicePageLayout>
  );
};

export default BB360ServicePage;
