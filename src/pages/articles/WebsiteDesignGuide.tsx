import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedArticles from "@/components/RelatedArticles";

const WebsiteDesignGuide = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Website Design in Sri Lanka: Complete Guide for Businesses (2026)",
      description:
        "Everything Sri Lankan businesses need to know about website design in 2026: what's included, what makes a great site, costs, and ROI.",
      author: { "@type": "Organization", name: "Buzz Connect" },
      publisher: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" },
      datePublished: "2026-04-23",
      dateModified: "2026-04-23",
      mainEntityOfPage: "https://buzzspark-connect.lovable.app/website-design-guide-sri-lanka",
    },
  ];

  return (
    <>
      <SEOHead
        title="Website Design in Sri Lanka: Complete Guide (2026) | Buzz Connect"
        description="Everything Sri Lankan businesses need to know about professional website design in 2026 — features, costs, mobile-first design & marketing integration."
        keywords="website design sri lanka, web design colombo, website cost sri lanka, professional website sri lanka"
        canonical="/website-design-guide-sri-lanka"
        jsonLd={jsonLd}
      />

      <div className="min-h-screen bg-background pt-14 sm:pt-16">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumbs />

          <article className="prose prose-lg max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Website Design in Sri Lanka: Complete Guide for Businesses (2026)
            </h1>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Your website is your most important digital asset. For businesses in Sri Lanka, a professional{" "}
                <Link to="/website-design-sri-lanka" className="text-accent hover:underline font-semibold">website design</Link>{" "}
                is no longer optional — it is the foundation of every marketing campaign you will ever run and the first impression you make on every potential customer.
              </p>
              <p className="text-muted-foreground">
                Whether customers find you through Google, a direct marketing email, an SMS link, a social media post, or a Google Ad — they all end up on your website. If that site is slow, outdated, or confusing to navigate, you are losing customers every single day.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Why Your Business Needs a Professional Website Right Now</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Sri Lanka has 8+ million internet users — most research businesses online before contact</li>
                <li>A professional website builds credibility and trust within the first 5 seconds</li>
                <li>Your website works 24/7 — generating enquiries even while your office is closed</li>
                <li>Every marketing channel drives traffic to your website; a weak site wastes your entire marketing budget</li>
                <li>Competitors with better websites are winning customers from you right now</li>
              </ul>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mt-6">
                <h3 className="text-lg font-bold text-foreground mb-2">📊 Key Insight</h3>
                <p className="text-muted-foreground">
                  Businesses with professional, mobile-optimised websites generate 3 times more leads from digital marketing campaigns compared to businesses with outdated or poorly designed sites.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">What Does a Professional Website Include?</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-card rounded-xl border border-border text-sm">
                  <thead>
                    <tr className="bg-primary/10 text-foreground">
                      <th className="text-left p-3 font-heading">Component</th>
                      <th className="text-left p-3 font-heading">What It Means for Your Business</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border"><td className="p-3 text-foreground">Custom Design</td><td className="p-3 text-muted-foreground">Unique visual identity built around your brand</td></tr>
                    <tr className="border-t border-border bg-muted/20"><td className="p-3 text-foreground">Mobile Optimisation</td><td className="p-3 text-muted-foreground">Perfect on phones, tablets and desktops — 80%+ of Sri Lankan traffic is mobile</td></tr>
                    <tr className="border-t border-border"><td className="p-3 text-foreground">Fast Loading Speed</td><td className="p-3 text-muted-foreground">Pages load in under 3 seconds — every extra second loses 20% of visitors</td></tr>
                    <tr className="border-t border-border bg-muted/20"><td className="p-3 text-foreground">SEO-Ready Structure</td><td className="p-3 text-muted-foreground">Built with correct headings, clean URLs, meta tags, and schema markup</td></tr>
                    <tr className="border-t border-border"><td className="p-3 text-foreground">Contact Forms and CTAs</td><td className="p-3 text-muted-foreground">Clear calls-to-action converting visitors into leads</td></tr>
                    <tr className="border-t border-border bg-muted/20"><td className="p-3 text-foreground">CMS</td><td className="p-3 text-muted-foreground">Easy for you to update content without a developer</td></tr>
                    <tr className="border-t border-border"><td className="p-3 text-foreground">SSL Certificate</td><td className="p-3 text-muted-foreground">Required for Google ranking and customer trust</td></tr>
                    <tr className="border-t border-border bg-muted/20"><td className="p-3 text-foreground">Google Analytics</td><td className="p-3 text-muted-foreground">Track visitors and conversions from day one</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Types of Websites for Sri Lankan Businesses</h2>
              <h3 className="text-xl font-semibold text-foreground mb-2">Business and Corporate Websites</h3>
              <p className="text-muted-foreground mb-4">5 to 10 pages covering services, about us, team profiles, and contact for professional firms.</p>
              <h3 className="text-xl font-semibold text-foreground mb-2">E-commerce Websites</h3>
              <p className="text-muted-foreground mb-4">Online stores with product catalogues, shopping cart, and local payment gateway integration (PayHere, Genie, iPay).</p>
              <h3 className="text-xl font-semibold text-foreground mb-2">Hotel, Education, Real Estate & Restaurant Sites</h3>
              <p className="text-muted-foreground mb-4">Conversion-focused websites with booking integration, course catalogues, property listings, or menus.</p>
              <h3 className="text-xl font-semibold text-foreground mb-2">Campaign Landing Pages</h3>
              <p className="text-muted-foreground">Single-page sites built specifically to convert traffic from email, SMS, or Google Ads into enquiries.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Website Design and SEO — Why They Must Work Together</h2>
              <p className="text-muted-foreground mb-3">
                A beautifully designed website that Google cannot find is useless. Every website Buzz Connect builds has{" "}
                <Link to="/seo-sri-lanka" className="text-accent hover:underline font-semibold">SEO</Link>{" "}
                fundamentals built in from day one:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Correct heading hierarchy: H1 on every page, H2 and H3 for sections</li>
                <li>Fast page load speed — optimised images, clean code, reliable hosting</li>
                <li>Mobile-first design — Google ranks the mobile version of your site</li>
                <li>Clean URL structure with descriptive page slugs</li>
                <li>Schema markup, meta titles & descriptions on every page</li>
                <li>XML sitemap and Google Search Console setup</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Website Design and Direct Marketing — The Critical Connection</h2>
              <p className="text-muted-foreground mb-4">
                Your website is the destination for every campaign you run. When Buzz Connect sends an{" "}
                <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing</Link>{" "}
                campaign, an SMS promotion, or a WhatsApp message on your behalf, every link leads your audience to a specific page on your website.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>A fast, professional website converts campaign traffic into real leads and sales</li>
                <li>A slow or confusing website wastes the entire campaign budget</li>
                <li>Dedicated landing pages can double or triple conversion rates</li>
                <li>A professional site reinforces the credibility of your campaign message</li>
              </ul>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mt-6">
                <h3 className="text-lg font-bold text-foreground mb-2">💡 The Landing Page Advantage</h3>
                <p className="text-muted-foreground">
                  A generic homepage converts 1 to 3 percent of visitors. A dedicated landing page built specifically for a single campaign offer converts 8 to 15 percent.
                </p>
              </div>

              <p className="text-muted-foreground mt-6">
                The same approach applies to{" "}
                <Link to="/google-ads-sri-lanka" className="text-accent hover:underline font-semibold">Google Ads</Link>{" "}
                — paid traffic must land on conversion-optimised pages, not your generic homepage. And every page is part of a complete{" "}
                <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">lead generation</Link>{" "}
                strategy that turns visitors into customers.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">What Makes a Great Website for Sri Lankan Businesses?</h2>
              <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                <li>Mobile-first design — 80%+ of Sri Lankan web traffic is on smartphones</li>
                <li>Sinhala or Tamil language option where relevant</li>
                <li>Local payment gateway integration — PayHere, Genie, iPay</li>
                <li>Google Maps integration for location-based businesses</li>
                <li>Fast hosting on servers close to Sri Lanka</li>
                <li>Prominent phone number and WhatsApp contact button on every page</li>
                <li>Strong, clear calls-to-action on every key page</li>
                <li>Professional photography — generic stock images damage credibility</li>
                <li>Regular content updates</li>
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>

              <h3 className="text-xl font-semibold text-foreground mb-2">How long does it take to build a professional website?</h3>
              <p className="text-muted-foreground mb-4">
                A standard business website with 5 to 10 pages typically takes 3 to 6 weeks. Landing pages can be built in 3 to 5 days.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">Can I update my website myself after it is built?</h3>
              <p className="text-muted-foreground mb-4">
                Yes. Buzz Connect builds websites on user-friendly content management systems with full training included.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2">Does my website need to be in Sinhala?</h3>
              <p className="text-muted-foreground">
                It depends on your target audience. If your audience includes a broad local consumer base, adding Sinhala significantly increases engagement and trust.
              </p>
            </section>

            <RelatedArticles currentPath="/website-design-guide-sri-lanka" />
          </article>
        </div>
      </div>
    </>
  );
};

export default WebsiteDesignGuide;
