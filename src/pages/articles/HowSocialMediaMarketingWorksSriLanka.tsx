import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Target, BarChart3, ArrowRight, Globe, TrendingUp, Zap, Mail, MessageSquare } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import SocialClusterLinks from "@/components/SocialClusterLinks";
import DigitalMarketingCTA from "@/components/DigitalMarketingCTA";

const HowSocialMediaMarketingWorksSriLanka = () => {
  return (
    <ServicePageLayout badge="Resources" title="How Social Media Marketing Works in Sri Lanka (Complete Guide)" subtitle="">
      <SEOHead
        title="How Social Media Marketing Works in Sri Lanka (Complete Guide) | Buzz Connect"
        description="Learn how social media marketing works in Sri Lanka — audience targeting, content creation, paid advertising, and optimization for Facebook, Instagram & TikTok."
        canonical="/how-social-media-marketing-works-sri-lanka"
        ogType="article"
        keywords="how social media marketing works sri lanka, social media strategy sri lanka, facebook marketing guide sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "How Social Media Marketing Works", url: "/how-social-media-marketing-works-sri-lanka" },
        ]}
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How Social Media Marketing Works in Sri Lanka (Complete Guide)",
          datePublished: "2026-04-12",
          author: { "@type": "Organization", name: "Buzz Connect" },
          publisher: { "@type": "Organization", name: "Buzz Connect" },
        }]}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">What is Social Media Marketing?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Social media marketing is the process of promoting your business using platforms like Facebook, Instagram, YouTube, and TikTok. It's one of the most effective ways to reach customers in Sri Lanka.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Why Social Media is Growing in Sri Lanka</h2>
            <ul className="space-y-3">
              {[
                "Over 8 million users actively using social platforms",
                "Increasing smartphone usage across the country",
                "Strong engagement rates across all platforms",
                "Facebook alone dominates with over 70% market share in Sri Lanka",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">How Social Media Marketing Works – Step by Step</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Target, title: "1. Audience Targeting", desc: "Reach specific users based on interests, demographics, and behavior" },
                { icon: Zap, title: "2. Content Creation", desc: "Create engaging posts, stories, reels, and ads for your brand" },
                { icon: TrendingUp, title: "3. Paid Advertising", desc: "Boost reach through targeted ads on Facebook, Instagram & TikTok" },
                { icon: BarChart3, title: "4. Optimization", desc: "Improve performance based on analytics and real-time results" },
              ].map((step, i) => (
                <div key={i} className="p-5 rounded-xl bg-card border border-border">
                  <step.icon className="w-6 h-6 text-accent mb-2" />
                  <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Popular Social Media Platforms in Sri Lanka</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: "Facebook", desc: "Largest audience" },
                { name: "Instagram", desc: "Growing fast" },
                { name: "TikTok", desc: "High engagement" },
                { name: "YouTube", desc: "Video content" },
              ].map((platform, i) => (
                <div key={i} className="p-4 rounded-xl bg-card border border-border text-center">
                  <p className="font-semibold text-foreground">{platform.name}</p>
                  <p className="text-xs text-muted-foreground">{platform.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Multi-Channel Strategy for Better Results</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Social media works best when combined with other channels:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: Mail, title: "Email Marketing", path: "/email-marketing" },
                { icon: MessageSquare, title: "SMS Marketing", path: "/sms-marketing" },
                { icon: Globe, title: "Google Ads", path: "/google-ads-sri-lanka" },
              ].map((channel, i) => (
                <Link key={i} to={channel.path} className="p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors text-center group">
                  <channel.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="font-semibold text-foreground group-hover:text-accent transition-colors">{channel.title}</p>
                </Link>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              👉 <Link to="/multi-channel-marketing-in-sri-lanka" className="text-accent hover:underline">Learn about multi-channel marketing in Sri Lanka</Link>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Grow Faster with Social Media Experts</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Working with <strong>Buzz Connect</strong> helps you build a strong brand, reach targeted audiences, and generate leads consistently through <Link to="/social-media-marketing-sri-lanka" className="text-accent font-semibold hover:underline">professional social media marketing services</Link>.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-2xl bg-accent/10 border border-accent/20">
            <p className="font-medium text-foreground mb-3">📈 Ready to leverage social media for your business?</p>
            <Link to="/social-media-marketing-sri-lanka" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
              Explore our social media marketing services <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Start Your Social Media Journey</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Contact us now to grow your business with expert social media marketing in Sri Lanka.
            </p>
            <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Start Today <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
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
          title="See how each part works in practice"
          intro="The process on this page becomes concrete on our service pages."
          links={[
            { label: "social media marketing in Sri Lanka", to: "/social-media-marketing-sri-lanka" },
            { label: "social media campaign management", to: "/social-media-campaigns-sri-lanka" },
            { label: "social media management services", to: "/social-media-management-sri-lanka" },
            { label: "paid social media advertising", to: "/social-media-advertising-sri-lanka" },
          ]}
        />
        <RelatedArticles />
          <DigitalMarketingCTA />
        </motion.div>
      </article>
    </ServicePageLayout>
  );
};

export default HowSocialMediaMarketingWorksSriLanka;
