import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { useMemo } from "react";
import SEOHead from "@/components/SEOHead";
import { HelpCircle, CheckCircle, Zap, Award } from "lucide-react";
import { graphicDesignServices } from "@/data/graphicDesignServices";
import { Link } from "react-router-dom";
import DigitalMarketingCTA from "@/components/DigitalMarketingCTA";

const moreCategories = [
  {
    title: "Logo & Identity",
    items: ["Logo design", "Logo & brand identity pack", "Logo & social media pack", "Logo & hosted website", "Logo & business card", "Business card", "Envelop", "Brand guide"],
  },
  {
    title: "Business & Advertising",
    items: ["Brochure", "Flyer 2 pages", "Postcard", "Leaflet", "Direct Mail", "Poster", "Infographic", "Booklet", "Car, truck or van wrap", "Signage", "Billboard", "Trade Show Banner", "Banner", "Email", "Email Newsletter", "PowerPoint template", "Menu A4 1 page", "Website Header", "Resume", "Word Template"],
  },
  {
    title: "Web & App Design",
    items: ["Website Design", "Website Redesign", "Website Hosting", "Blog", "WordPress theme design", "Landing page design", "Icon or button", "App Icon", "Website Icon", "App design", "iOS App", "Android App", "Facebook cover", "Social media page", "Twitter", "YouTube", "Banner ad", "Flash banner"],
  },
  {
    title: "Book & Magazine",
    items: ["Book cover", "Interior book design", "E book cover", "Magazine cover", "Other book or magazine", "Book Layout"],
  },
  {
    title: "Art & Illustration",
    items: ["Illustration or graphics", "Business Illustration", "Website Illustration", "Book Illustration", "Album Cover", "Pattern", "Card or invitation", "Invitation", "Greeting Card", "Wedding Invitation", "Character or mascot", "3D", "Other art or illustration"],
  },
  {
    title: "Packaging & Label",
    items: ["Product packaging", "Food Packaging", "Retail Packaging", "Cosmetics Packaging", "Product label", "Food Label", "Beverage Label", "Other packaging or label"],
  },
  {
    title: "Digital",
    items: ["Corporate profile", "Animation"],
  },
  {
    title: "Clothing & Merchandise",
    items: ["T-shirt", "Clothing or apparel", "Jersey", "Sweatshirt & Hoodie", "Merchandise", "Bag & Tote", "Hat & Cap", "Cup or mug", "Sticker", "Other clothing or merchandise"],
  },
  {
    title: "Outdoor Advertising",
    items: ["Vehicle Branding", "OutLet", "Rack", "DealerBoard", "Hoarding LED", "Screen", "Stall", "Event", "Lazer", "Point of Sale Displays", "Retail Advertising", "Guerilla Advertising", "Billboard Advertising"],
  },
];

const faqs = [
  { q: "What graphic design services does Buzz Connect offer in Sri Lanka?", a: "Buzz Connect offers logo design, e-flyer design, business cards, brochures, animated videos, social media posts, company profiles, menu cards, signage, and more." },
  { q: "How much does graphic design cost in Sri Lanka?", a: "E-flyer designing starts from LKR 2,500. Contact us for custom pricing based on your specific design needs." },
  { q: "Can you create animated videos for my business?", a: "Yes, we create short animated explainer videos to help tell your business story and explain products or services." },
  { q: "Do you design logos for startups in Sri Lanka?", a: "Yes, we create eye-catching, minimalist logo designs for startups and established businesses at competitive rates." },
];

const GraphicDesign = () => {
  const jsonLd = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Graphic Designing Services Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Professional graphic design services in Sri Lanka including logo design, e-flyers, brochures, animated videos, social media posts, and more.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Graphic Design Sri Lanka"
      title="Graphic Designing in Sri Lanka – Professional Design Services"
      subtitle="Professional graphic design services for businesses in Sri Lanka. From logos to animated videos, we create eye-catching designs that elevate your brand. Starting from LKR 2,500."
    >
      <SEOHead
        title="Graphic Design Sri Lanka | Logo & Flyer Design from LKR 2.5K"
        description="Professional graphic design services in Sri Lanka. Logo design, e-flyers, brochures, animated videos, social media posts & business cards. From LKR 2,500. Fast delivery."
        canonical="/graphic-designing-in-sri-lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Graphic Designing", url: "/graphic-designing-in-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      {/* Trust Strip */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
          <Zap className="w-4 h-4 text-accent" />
          <span className="text-accent font-bold text-sm"><span className="text-accent font-bold text-sm">Designs from LKR 2,500</span></span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
          <CheckCircle className="w-4 h-4 text-secondary-foreground" />
          <span className="text-secondary-foreground font-bold text-sm">Fast Delivery</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
          <Award className="w-4 h-4 text-secondary-foreground" />
          <span className="text-secondary-foreground font-bold text-sm">10+ Years Experience</span>
        </div>
      </div>

      {/* Intro */}
      <div className="mb-12 max-w-4xl">
        <p className="text-muted-foreground mb-4 leading-relaxed">
          We create any type of creative graphic design to keep you ahead of the competition. Our designers select designs that best speak for your brand and target audience. High-resolution colorful images, engaging videos and illustrative graphics can help potential buyers better understand your products and services and see the benefits they offer.
        </p>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Our graphic department can take you from concept to completion of
          customized designs just for you. We also stay close to how the wider
          market works in this field — you can browse the{" "}
          <a
            href="https://cypherdigital.lk/careers/graphic-designer-jobs-sri-lanka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground no-underline hover:no-underline"
          >
            graphic design page
          </a>{" "}
          to see the roles and skills employers are asking for right now, which
          keeps our briefs, portfolios and turnaround expectations in step with
          the industry.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-card shadow-card border border-border text-center">
            <h3 className="font-heading font-semibold text-foreground mb-2">Edits and revisions</h3>
            <p className="text-sm text-muted-foreground">We offer designs that are editable. You can request for changes for the designs for your satisfaction.</p>
          </div>
          <div className="p-6 rounded-xl bg-card shadow-card border border-border text-center">
            <h3 className="font-heading font-semibold text-foreground mb-2">Competitive prices</h3>
            <p className="text-sm text-muted-foreground">We help you to deliver graphic designs for a reasonable rate.</p>
          </div>
          <div className="p-6 rounded-xl bg-card shadow-card border border-border text-center">
            <h3 className="font-heading font-semibold text-foreground mb-2">Eye catching, attractive graphics for you</h3>
            <p className="text-sm text-muted-foreground">We make memorable, eye catching graphics to best suit your brand.</p>
          </div>
        </div>
      </div>

      {/* Main Services */}
      <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Our Graphic Designing Services in Sri Lanka</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {graphicDesignServices.map((s, i) => (
          <Link to={`/${s.slug}`} key={s.slug}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-card shadow-card border border-border hover:border-accent/30 transition-all h-full"
            >
              <div className="w-11 h-11 rounded-lg gradient-accent flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.cardTitle}</h3>
              <p className="text-sm text-muted-foreground">{s.cardDesc}</p>
              {s.price && (
                <div className="mt-3 inline-block px-3 py-1 rounded-lg bg-accent/10 text-accent font-semibold text-sm">{s.price}</div>
              )}
              <span className="inline-flex items-center mt-3 text-sm font-bold text-accent">Learn More →</span>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Design Packages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Graphic Design Packages Sri Lanka</h2>
        <p className="text-muted-foreground mb-8">Choose the right design package for your business needs</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Starter",
              price: "LKR 15,000",
              tag: "Best for Small Businesses",
              color: "from-blue-500/10 to-blue-600/5",
              border: "border-blue-500/20",
              items: [
                "1 Logo Design (3 concepts)",
                "Business Card Design (single side)",
                "1 Social Media Post Design",
                "1 E-Flyer Design",
                "2 Revisions per design",
                "High-resolution files (JPG, PNG)",
              ],
            },
            {
              name: "Professional",
              price: "LKR 35,000",
              tag: "Most Popular",
              popular: true,
              color: "from-accent/15 to-accent/5",
              border: "border-accent/30",
              items: [
                "1 Logo Design (5 concepts)",
                "Business Card Design (double side)",
                "Letterhead Design",
                "3 Social Media Post Designs",
                "2 E-Flyer Designs",
                "1 Brochure Design (bi-fold)",
                "Company Profile (up to 8 pages)",
                "3 Revisions per design",
                "Source files (AI, PSD, PDF)",
              ],
            },
            {
              name: "Enterprise",
              price: "LKR 75,000",
              tag: "Complete Brand Package",
              color: "from-purple-500/10 to-purple-600/5",
              border: "border-purple-500/20",
              items: [
                "Full Brand Identity Pack",
                "Logo + Brand Guidelines",
                "Business Card + Letterhead + Envelope",
                "5 Social Media Post Designs",
                "3 E-Flyer Designs",
                "Brochure Design (tri-fold)",
                "Company Profile (up to 16 pages)",
                "1 Short Animated Video (30s)",
                "Menu Card / Product Catalog",
                "3 Revisions per design",
                "All source files included",
              ],
            },
          ].map((pkg) => (
            <div
              key={pkg.name}
              className={`relative p-6 rounded-2xl bg-gradient-to-b ${pkg.color} border ${pkg.border} shadow-card flex flex-col`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">{pkg.name}</h3>
              <p className="text-xs text-muted-foreground mb-3">{pkg.tag}</p>
              <div className="text-3xl font-bold text-foreground mb-5">{pkg.price}</div>
              <ul className="space-y-2.5 mb-6 flex-1">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a data-selected-service="Graphic Design"
                href={`https://wa.me/94771437707?text=${encodeURIComponent(`Hi Buzz Connect, I'm interested in the ${pkg.name} Graphic Design Package (${pkg.price}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-xl font-bold text-sm transition-opacity hover:opacity-90 ${pkg.popular ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'}`}
              >
                Get Started via WhatsApp
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-6">
          💡 Need a custom package? <a data-selected-service="Graphic Design" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20need%20a%20custom%20graphic%20design%20package." target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">Contact us on WhatsApp</a> for a tailored quote.
        </p>
      </motion.div>


      {/* More Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">More Graphic Design Services We Offer</h2>
        <div className="space-y-6">
          {moreCategories.map((cat) => (
            <div key={cat.title} className="p-6 rounded-2xl bg-muted/50 border border-border">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="text-sm text-foreground bg-card px-3 py-1.5 rounded-lg shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="w-7 h-7 text-primary" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Frequently Asked Questions – Graphic Design Sri Lanka</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group p-5 rounded-xl bg-card shadow-card border border-border">
              <summary className="font-heading font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                {faq.q}
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center p-10 rounded-2xl gradient-hero"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">Get Professional Graphic Design Services Today</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
          Elevate your brand with eye-catching graphic designs. Contact Buzz Connect for affordable, professional design solutions in Sri Lanka.
        </p>
        <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
          Contact Buzz Connect
        </a>
      </motion.div>
      <DigitalMarketingCTA />
    </ServicePageLayout>
  );
};

export default GraphicDesign;
