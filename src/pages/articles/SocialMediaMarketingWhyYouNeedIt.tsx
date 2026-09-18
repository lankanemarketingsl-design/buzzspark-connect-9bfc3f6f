import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import SocialClusterLinks from "@/components/SocialClusterLinks";

const SocialMediaMarketingWhyYouNeedIt = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="Social Media Marketing in Sri Lanka: Why Your Business Needs It"
      subtitle=""
    >
      <SEOHead
        title="Social Media Marketing Sri Lanka: Why Your Business Needs It | Buzz Connect"
        description="Social media marketing is essential for Sri Lankan businesses. Learn how Facebook, Instagram, and TikTok help you engage customers, build brand awareness, and grow."
        canonical="/social-media-marketing-why-your-business-needs-it-sri-lanka"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Social Media Marketing Why Your Business Needs It", url: "/social-media-marketing-why-your-business-needs-it-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Social Media Marketing in Sri Lanka: Why Your Business Needs It",
          datePublished: "2025-03-24",
          author: { "@type": "Organization", name: "Buzz Connect" },
          publisher: { "@type": "Organization", name: "Buzz Connect", logo: { "@type": "ImageObject", url: "https://buzzconnect.lk/og-image.png" } },
        }]}
      />
      <div className="max-w-3xl mx-auto">
        <Link to="/resources" className="inline-flex items-center gap-2 text-sm text-accent hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Resources
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <p className="text-muted-foreground leading-relaxed">
              Social media marketing has become one of the most powerful tools for businesses in Sri Lanka. Platforms like Facebook, Instagram, and TikTok allow brands to connect directly with their audience, build trust, and drive sales.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Why Social Media Marketing Matters</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Millions of active users in Sri Lanka</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Direct engagement with customers</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Cost-effective advertising compared to traditional media</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✓</span> Builds brand awareness and loyalty</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Businesses that use social media effectively can grow faster and reach a wider audience than those relying solely on traditional marketing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">How Social Media Helps Your Business</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Social media allows you to promote products, run campaigns, and communicate with customers instantly. It also helps build trust and long-term relationships that translate into repeat business.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Learn more about professional solutions with our{" "}
              <Link to="/social-media-marketing-sri-lanka" className="text-accent hover:underline font-semibold">
                Social Media Marketing Services in Sri Lanka
              </Link>. A strong social media presence is essential for modern businesses.
            </p>
          </div>

          <div className="p-6 rounded-2xl gradient-hero text-center">
            <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">Grow Your Brand on Social Media</h3>
            <p className="text-primary-foreground/80 mb-4">Engage millions of Sri Lankan customers on Facebook, Instagram, and more.</p>
            <Link to="/social-media-marketing-sri-lanka" className="inline-block px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
              View Social Media Marketing Packages
            </Link>
          </div>
        </motion.article>
        <div className="my-8 p-5 rounded-xl border border-accent/30 bg-accent/5">
          <p className="text-sm sm:text-base text-foreground">
            Comparing your options? See our full breakdown of the top{" "}
            <Link to="/digital-marketing-companies-sri-lanka" className="font-semibold text-accent underline underline-offset-2 hover:no-underline">
              digital marketing companies in Sri Lanka
            </Link>{" "}
            and how to pick the right partner for your business.
          </p>
        </div>
        <SocialClusterLinks
          title="Where to go next"
          intro="Once you have decided social media is worth it, these pages explain how each part works."
          links={[
            { label: "social media marketing services in Sri Lanka", to: "/social-media-marketing-sri-lanka" },
            { label: "Facebook marketing services", to: "/facebook-marketing-sri-lanka" },
            { label: "Instagram marketing services", to: "/instagram-marketing-sri-lanka" },
            { label: "social media management services", to: "/social-media-management-sri-lanka" },
            { label: "paid social media campaigns", to: "/social-media-advertising-sri-lanka" },
          ]}
        />
        <RelatedArticles currentPath="/social-media-marketing-why-your-business-needs-it-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default SocialMediaMarketingWhyYouNeedIt;
