import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, Target, Zap, BarChart3, Globe,
  HelpCircle, GraduationCap, ShoppingCart, Building2, Home, Calendar, Rocket,
  TrendingUp, ArrowRight, Users, Eye, PenTool, Megaphone,
  Layers, Send, Heart, Star, Award, Smartphone,
  TrendingUpIcon, MessageCircle, Share2, PlayCircle, Globe2
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import DigitalMarketingCTA from "@/components/DigitalMarketingCTA";

const smmServices = [
  { icon: Target, title: "Social Media Strategy Development", desc: "Custom strategies aligned with your business goals and target audience in Sri Lanka." },
  { icon: PenTool, title: "Content Creation & Post Design", desc: "Eye-catching social media posts, banners, and promotional creatives." },
  { icon: Megaphone, title: "Facebook & Instagram Advertising", desc: "High-performing paid campaigns to reach targeted audiences and generate leads." },
  { icon: Users, title: "Audience Targeting & Segmentation", desc: "Precision targeting to connect with the right customers at the right time." },
  { icon: Smartphone, title: "WhatsApp Marketing Integration", desc: "Direct messaging campaigns that convert followers into customers." },
  { icon: BarChart3, title: "Performance Tracking & Reporting", desc: "Detailed analytics and reporting to measure campaign success." },
];

const adPlatforms = [
  { name: "Facebook Ads", desc: "Reach Sri Lanka's largest social audience with targeted campaigns", color: "bg-accent/10 text-accent" },
  { name: "Instagram Ads", desc: "Visual storytelling that converts for lifestyle brands", color: "bg-accent/10 text-accent" },
  { name: "TikTok Ads", desc: "Engage younger demographics with viral content", color: "bg-secondary text-secondary-foreground" },
  { name: "LinkedIn Ads", desc: "Target B2B decision-makers and professionals", color: "bg-accent/10 text-accent" },
];

const comparisonData = [
  { feature: "Campaign Strategy", standard: "Generic Approach", bc: "✅ Custom Multi-Platform Strategy" },
  { feature: "Content Creation", standard: "Basic Posts", bc: "✅ Professional Creatives & Videos" },
  { feature: "Platform Coverage", standard: "Single Platform", bc: "✅ Facebook, Instagram, TikTok & More" },
  { feature: "Multi-Channel Support", standard: "Not Included", bc: "✅ Email, SMS & Findit.lk Integration" },
  { feature: "Audience Targeting", standard: "⚠️ Basic", bc: "✅ Advanced Segmentation" },
  { feature: "Campaign Visibility", standard: "One-Time Reach", bc: "✅ Extended Multi-Platform Visibility" },
  { feature: "Performance Tracking", standard: "Limited Reports", bc: "✅ Detailed Analytics & Optimization" },
];

const keyBenefits = [
  { icon: Users, title: "High Audience Reach", desc: "Millions of active users in Sri Lanka — connect directly with your target market" },
  { icon: Zap, title: "Cost-Effective Marketing", desc: "More affordable than traditional advertising while delivering stronger results" },
  { icon: Target, title: "Targeted Advertising", desc: "Target by location, interests, age, and behavior — reach the right audience" },
  { icon: MessageCircle, title: "Real-Time Engagement", desc: "Interact instantly through comments, messages, and reactions" },
  { icon: BarChart3, title: "Measurable Results", desc: "Track every campaign with clicks, conversions, and engagement rates" },
];

const industriesServed = [
  { icon: Home, label: "Hotels & Tourism", desc: "Increase bookings, promote offers, reach global travelers" },
  { icon: Building2, label: "Real Estate", desc: "Generate property leads, showcase listings, target investors" },
  { icon: GraduationCap, label: "Education", desc: "Promote courses, generate student inquiries, build enrollment" },
  { icon: ShoppingCart, label: "Retail & E-commerce", desc: "Drive online sales, promote products, retarget customers" },
  { icon: Calendar, label: "Events", desc: "Promote events, sell tickets, maximize attendance" },
  { icon: Rocket, label: "SMEs & Startups", desc: "Build brand awareness, increase foot traffic, generate leads" },
];

const leadGenFunnel = [
  { step: "1", title: "Awareness", desc: "Ads & content reach new audiences", icon: Eye },
  { step: "2", title: "Interest", desc: "Engagement builds curiosity", icon: Heart },
  { step: "3", title: "Consideration", desc: "Retargeting keeps you top of mind", icon: Star },
  { step: "4", title: "Conversion", desc: "Lead forms & messages capture prospects", icon: CheckCircle },
];

const processSteps = [
  { icon: Target, title: "Understand Goals", desc: "Analyze your business goals and target audience" },
  { icon: Layers, title: "Create Strategy", desc: "Develop a tailored social media strategy" },
  { icon: PenTool, title: "Design Content", desc: "Create engaging content and creatives" },
  { icon: Send, title: "Launch Campaigns", desc: "Execute campaigns across chosen platforms" },
  { icon: BarChart3, title: "Monitor & Optimize", desc: "Track performance and optimize for results" },
];

const selectionCriteria = [
  { title: "Proven Experience", desc: "Look for case studies, results, and industry-specific experience that demonstrates real success" },
  { title: "Strategy Approach", desc: "Avoid agencies that only post content — choose one that focuses on leads and uses paid ads effectively" },
  { title: "Transparency", desc: "You should receive regular reports with clear metrics and honest performance insights" },
  { title: "Custom Solutions", desc: "Every business is different — your strategy should be tailored to your audience and goals" },
];

const commonMistakes = [
  "Posting without a clear strategy or goals",
  "Ignoring paid advertising and relying only on organic reach",
  "Targeting the wrong audience segments",
  "Inconsistent posting and engagement",
  "Not tracking results or measuring ROI",
];

const futureTrends = [
  { icon: PlayCircle, title: "Video Content Dominance", desc: "Short-form video continues to dominate engagement" },
  { icon: Zap, title: "AI-Driven Campaigns", desc: "Smart algorithms optimize targeting and creative" },
  { icon: Target, title: "Hyper-Personalization", desc: "Tailored content for individual user preferences" },
  { icon: Layers, title: "Marketing Automation", desc: "Streamlined workflows for consistent engagement" },
];

const faqs = [
  { q: "What is social media marketing?", a: "Social media marketing is the use of platforms like Facebook, Instagram, LinkedIn, and TikTok to promote your business, products, or services. It includes content creation, paid advertising, audience targeting, engagement management, and performance tracking. Unlike traditional advertising, social media allows precise audience targeting with measurable results." },
  { q: "Which platform is best for social media marketing in Sri Lanka?", a: "Facebook and Instagram are the most widely used platforms in Sri Lanka, offering the broadest reach. TikTok is growing rapidly and offers massive reach for younger audiences. LinkedIn is essential for B2B marketing and professional services. The best choice depends on your target audience and business goals." },
  { q: "How long does it take to see results from social media marketing?", a: "Paid advertising delivers immediate visibility and can generate leads within days. Organic growth and brand building typically take 3-6 months to show significant results. A combined approach of paid and organic strategies yields the best short-term and long-term outcomes." },
  { q: "Is social media marketing worth the investment?", a: "Yes, when done correctly, social media marketing delivers strong ROI and consistent growth. It allows you to reach a massive audience cost-effectively, build brand trust, generate leads, and track measurable results. The key is having a strategy that focuses on business outcomes, not just vanity metrics." },
  { q: "How much does social media marketing cost in Sri Lanka?", a: "Buzz Connect offers social media marketing campaigns starting from LKR 50,000. Pricing depends on scope of work, ad budget, and campaign complexity. Instead of focusing on cost alone, focus on return on investment — a well-executed campaign pays for itself through increased leads and sales." },
  { q: "Why choose Buzz Connect for social media marketing?", a: "Buzz Connect provides integrated, results-driven social media marketing solutions with multi-channel support including email, SMS, WhatsApp, and Findit.lk advertising. We combine social media with other channels to maximize visibility and conversions, delivering measurable business growth for Sri Lankan businesses." },
];

const SocialMediaMarketing = () => {
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
      name: "Social Media Marketing Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Result-driven social media marketing services in Sri Lanka including Facebook, Instagram, TikTok, and LinkedIn advertising. Campaigns starting from LKR 50,000.",
      offers: {
        "@type": "Offer",
        priceCurrency: "LKR",
        price: "50000",
        priceValidUntil: "2026-12-31",
      },
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Social Media Marketing Sri Lanka"
      title="Social Media Marketing That Builds Brands — and Drives Results"
      subtitle="Targeted campaigns across Facebook, Instagram & TikTok — starting from LKR 50,000. Multi-platform reach with Findit.lk integration."
    >
      <SEOHead
        title="Social Media Marketing Sri Lanka | Top Agency for Leads & Growth"
        description="Best social media marketing sri lanka services from the best social media marketing agency in sri lanka. Drive traffic, engagement and conversions with proven strategies."
        canonical="/social-media-marketing-sri-lanka"
        keywords="social media marketing sri lanka, social media marketing services sri lanka, facebook advertising sri lanka, instagram marketing sri lanka, tiktok ads sri lanka, smm services colombo, social media agency sri lanka, facebook ads sri lanka, best social media agency sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Social Media Marketing", url: "/social-media-marketing-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      {/* Trust Badges - Top Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/15 border border-accent/40 shadow-sm">
            <Zap className="w-5 h-5 text-accent" />
            <span className="text-accent font-bold text-sm sm:text-base">Campaigns from LKR 50,000</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary border border-border shadow-sm">
            <Users className="w-5 h-5 text-secondary-foreground" />
            <span className="text-secondary-foreground font-bold text-sm sm:text-base">Multi-Platform Reach</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary border border-border shadow-sm">
            <Globe2 className="w-5 h-5 text-secondary-foreground" />
            <span className="text-secondary-foreground font-bold text-sm sm:text-base">Findit.lk Integration</span>
          </div>
        </div>
      </motion.div>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Social media has become one of the most powerful tools for business growth in Sri Lanka. From small local brands to large enterprises, companies are using platforms like <strong>Facebook, Instagram, TikTok, and LinkedIn</strong> to connect with their audience, generate leads, and increase sales.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If you are searching for <strong>social media marketing Sri Lanka</strong>, you are likely looking for a reliable way to increase brand awareness, generate quality leads, boost engagement, and drive real business results.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          This guide explains everything you need to know about <strong>social media marketing in Sri Lanka</strong>, including strategies, benefits, pricing, and how to choose the right approach for your business.
        </p>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {[
            { value: "4", suffix: "+", label: "Platforms Covered" },
            { value: "500", suffix: "+", label: "Campaigns Delivered" },
            { value: "10", suffix: "+", label: "Years Experience" },
            { value: "200K", suffix: "+", label: "Audience via Findit.lk" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border">
              <p className="text-2xl font-bold text-accent">{stat.value}<span className="text-accent">{stat.suffix}</span></p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* What is Social Media Marketing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">What is Social Media Marketing?</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          <strong>Social media marketing</strong> is the process of using platforms such as Facebook, Instagram, LinkedIn, and TikTok to promote your business, products, or services. It includes:
        </p>
        <ul className="space-y-2 mb-4">
          {["Content creation", "Paid advertising", "Audience targeting", "Engagement management", "Performance tracking"].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          Unlike traditional advertising, <strong>social media marketing</strong> allows businesses to reach specific audiences with precision and measurable results. At Buzz Connect, we go beyond basic campaigns by combining <strong>social media advertising</strong> with multi-channel promotion — ensuring your business gets maximum visibility and engagement.
        </p>
      </motion.div>

      {/* Why Social Media Marketing is Important */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">Why Social Media Marketing is Important in Sri Lanka</h2>
        <p className="text-muted-foreground leading-relaxed text-center mb-8 max-w-2xl mx-auto">
          Sri Lanka has a rapidly growing digital audience. <strong>Millions of users are active daily</strong> on social media platforms, creating a massive opportunity for businesses to reach potential customers instantly, build brand trust, and generate consistent leads.
        </p>

        <h3 className="font-heading text-xl font-semibold text-foreground mb-6 text-center">Key Benefits of Social Media Marketing</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {keyBenefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl bg-card shadow-card border border-border hover:border-accent/40 transition-all"
            >
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center mb-3">
                <benefit.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-1">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Platforms That Drive Results */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Platforms</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
            Platforms That Drive Results in Sri Lanka
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {adPlatforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card shadow-card border border-border text-center"
            >
              <div className={`w-14 h-14 rounded-full ${p.color} flex items-center justify-center mx-auto mb-4`}>
                <Megaphone className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-1">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="p-5 rounded-xl bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Share2 className="w-5 h-5 text-accent" />
              Facebook Marketing
            </h4>
            <p className="text-sm text-muted-foreground">Best for lead generation, brand awareness, and local business promotion. Facebook remains one of the most powerful platforms in Sri Lanka.</p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent" />
              Instagram Marketing
            </h4>
            <p className="text-sm text-muted-foreground">Ideal for lifestyle brands, hotels, fashion, beauty, and food businesses. Visual storytelling that converts.</p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-accent" />
              TikTok Marketing
            </h4>
            <p className="text-sm text-muted-foreground">Growing rapidly with massive reach. Best for viral content, younger audiences, and brand awareness.</p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-accent" />
              LinkedIn Marketing
            </h4>
            <p className="text-sm text-muted-foreground">Essential for B2B marketing. Best for corporate services, professional branding, and lead generation.</p>
          </div>
        </div>
      </motion.div>

      {/* Our Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Solutions</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
            Social Media Marketing Services in Sri Lanka
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">A complete strategy includes multiple services working together for maximum impact.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {smmServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-xl bg-card shadow-card border border-border hover:border-accent/40 transition-all"
            >
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* How Social Media Generates Leads */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-2xl bg-card shadow-card border border-border"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">How Social Media Marketing Generates Leads</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Social media is not just about likes — it's about results. A strong strategy follows this proven funnel:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {leadGenFunnel.map((stage, i) => (
            <div key={stage.title} className="flex flex-col items-center text-center p-5 rounded-xl bg-muted/30 border border-border relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full gradient-accent flex items-center justify-center text-xs font-bold text-primary">
                {stage.step}
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mt-3 mb-3">
                <stage.icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-1">{stage.title}</h4>
              <p className="text-xs text-muted-foreground">{stage.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-sm italic">
          👉 This structured approach ensures consistent lead generation and business growth.
        </p>
      </motion.div>

      {/* Industries We Serve */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-4">
          Industries That Benefit Most in Sri Lanka
        </h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Different industries require different social media strategies. Here's how we help key sectors succeed:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industriesServed.map((industry, i) => (
            <motion.div
              key={industry.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl bg-card shadow-card border border-border"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <industry.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{industry.label}</h3>
              </div>
              <p className="text-sm text-muted-foreground pl-15">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why We're Different</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
            Buzz Connect vs Standard Social Media Marketing
          </h2>
        </div>
        <div className="rounded-2xl overflow-hidden border border-border shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left p-4 font-heading font-bold text-foreground">Feature</th>
                  <th className="text-left p-4 font-heading font-bold text-muted-foreground">Standard Agencies</th>
                  <th className="text-left p-4 font-heading font-bold text-accent">Buzz Connect</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="p-4 font-medium text-foreground">{row.feature}</td>
                    <td className="p-4 text-muted-foreground">{row.standard}</td>
                    <td className="p-4 text-foreground font-semibold">{row.bc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-center text-muted-foreground text-sm mt-4">
          👉 Buzz Connect doesn't just manage social media — it multiplies your reach across platforms.
        </p>
      </motion.div>

      {/* How to Choose */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">How to Choose the Best Social Media Marketing Service in Sri Lanka</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Before selecting a provider, consider these critical factors:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {selectionCriteria.map((criterion, i) => (
            <div key={criterion.title} className="p-4 rounded-lg bg-muted/30 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <h4 className="font-semibold text-foreground">{criterion.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground pl-7">{criterion.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Common Mistakes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-destructive/5 border border-destructive/20"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Common Mistakes Businesses Make</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Avoid these mistakes that can derail your social media marketing efforts:
        </p>
        <ul className="space-y-3">
          {commonMistakes.map((mistake, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center text-sm font-bold shrink-0">✕</span>
              <span className="text-muted-foreground">{mistake}</span>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground text-sm mt-4">
          👉 Avoiding these mistakes can significantly improve your results and ROI.
        </p>
      </motion.div>

      {/* Future Trends */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
            Future of Social Media Marketing in Sri Lanka
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Digital marketing is rapidly evolving. Businesses that adapt early will have a competitive advantage.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {futureTrends.map((trend, i) => (
            <motion.div
              key={trend.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl bg-card shadow-card border border-border text-center"
            >
              <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mx-auto mb-3">
                <trend.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-1">{trend.title}</h4>
              <p className="text-sm text-muted-foreground">{trend.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Multi-Channel Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-2xl gradient-hero text-primary-foreground"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">Why Multi-Channel Marketing Works Better</h2>
        <p className="text-primary-foreground/80 mb-6">
          Social media alone is powerful, but combining it with other channels increases results dramatically.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Social Media → Awareness", path: "/social-media-marketing-sri-lanka" },
            { label: "Email Marketing → Follow-up", path: "/email-marketing" },
            { label: "SMS Marketing → Instant reach", path: "/sms-marketing" },
            { label: "WhatsApp → Conversion", path: "/whatsapp-marketing" },
          ].map((item) => (
            <Link key={item.path} to={item.path} className="flex items-center gap-3 group">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-primary-foreground/90 group-hover:text-accent transition-colors">{item.label}</span>
            </Link>
          ))}
        </div>
        <p className="text-primary-foreground/70 text-sm mt-4">
          👉 This creates a complete marketing system with multiple touchpoints and higher conversion rates.
        </p>
      </motion.div>

      {/* Findit.lk Power */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-8 h-8 text-accent" />
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">Social Media Marketing Powered by Findit.lk</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Buzz Connect campaigns are amplified through Findit.lk, giving your business access to a high-intent audience actively searching for services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Users, value: "200,000+", label: "Monthly Active Users" },
            { icon: Eye, value: "High-Intent", label: "Audience Searching Services" },
            { icon: TrendingUp, value: "Extended", label: "Visibility Beyond Social Media" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
              <item.icon className="w-8 h-8 text-accent shrink-0" />
              <div>
                <p className="font-bold text-foreground">{item.value}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-sm mt-4 italic">
          👉 This is your competitive advantage in Sri Lanka.
        </p>
      </motion.div>

      {/* Social media cluster hub links */}
      <SocialClusterNav
        heading="Our social media services in Sri Lanka"
        intro="Facebook, Instagram, TikTok and LinkedIn, plus advertising, management, campaigns, content and lead generation — each with its own page."
        exclude={["/social-media-marketing-sri-lanka"]}
      />

      {/* Pricing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-2xl mx-auto"
      >
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Pricing</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
            Social Media Marketing Pricing in Sri Lanka
          </h2>
          <p className="text-muted-foreground mt-2">
            Pricing depends on scope of work, ad budget, and campaign complexity.
          </p>
          <Link to="/social-media-packages-sri-lanka" className="inline-flex items-center gap-2 mt-3 text-accent font-semibold hover:underline">
            View our social media marketing packages <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="p-8 rounded-2xl bg-card shadow-card border-2 border-accent/30 text-center">
          <p className="text-muted-foreground mb-3">Social Media Marketing Campaigns</p>
          <p className="text-3xl font-bold text-foreground mb-1">
            Starting from <span className="text-accent">LKR 50,000</span>
          </p>
          <p className="text-sm text-muted-foreground mb-6">Multi-platform campaigns tailored to your business</p>
          <div className="text-left space-y-2 mb-6 max-w-sm mx-auto">
            {[
              "Multi-platform campaign setup",
              "Professional content creation",
              "Audience targeting & segmentation",
              "Paid ad management & optimization",
              "Findit.lk integration & visibility",
              "Performance tracking & reporting",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            👉 Instead of focusing on cost, focus on return on investment.
          </p>
          <a data-selected-service="Social Media Marketing"
            href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20your%20social%20media%20marketing%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity"
          >
            Get a Custom Quote <ArrowRight className="inline w-4 h-4 ml-1" />
          </a>
        </div>
      </motion.div>

      {/* How It Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
          How Our Social Media Marketing Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {processSteps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center text-center p-5 rounded-xl bg-card shadow-card border border-border relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full gradient-accent flex items-center justify-center text-xs font-bold text-primary">
                {i + 1}
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mt-3 mb-3">
                <step.icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-6">
          👉 Result: More visibility → More engagement → More business growth
        </p>
      </motion.div>

      {/* What You Can Expect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-3xl mx-auto"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
          What You Can Expect
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Increased followers and engagement",
            "Higher brand visibility across platforms",
            "More website traffic and inquiries",
            "Increased leads and sales",
            "Better return on investment",
            "Measurable campaign performance",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <TrendingUp className="w-5 h-5 text-accent shrink-0" />
              <span className="text-foreground font-medium">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-3xl mx-auto"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
          Frequently Asked Questions – Social Media Marketing Sri Lanka
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-5 rounded-xl bg-card shadow-card border border-border">
              <h3 className="flex items-start gap-2 font-heading font-semibold text-foreground mb-2">
                <HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                {faq.q}
              </h3>
              <p className="text-muted-foreground text-sm pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Final Thoughts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">Final Thoughts</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          <strong>Social media marketing in Sri Lanka</strong> is one of the most effective ways to grow your business in today's digital world.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          With the right strategy, tools, and execution, you can:
        </p>
        <ul className="space-y-2 mb-4">
          {["Reach the right audience", "Generate high-quality leads", "Increase sales and brand visibility"].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          Investing in professional social media marketing is not just an option — it is a <strong>necessity</strong> for businesses that want to stay competitive.
        </p>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center p-10 rounded-2xl gradient-hero text-primary-foreground"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Ready to Grow Your Brand on Social Media?</h2>
        <p className="text-primary-foreground/80 mb-2 max-w-xl mx-auto">
          Launch a campaign that goes beyond posts — and delivers real visibility, engagement, and results.
        </p>
        <p className="text-primary-foreground/70 text-sm mb-6">
          👉 Campaigns starting from LKR 50,000 | Multi-platform strategy included
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a data-selected-service="Social Media Marketing"
            href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20your%20social%20media%20marketing%20services."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base">
              Start Your Campaign Today <ArrowRight className="inline w-4 h-4 ml-1" />
            </button>
          </a>
          <Link to="/contact-us">
            <button className="px-8 py-3 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent/10 transition-colors text-base">
              Contact Us
            </button>
          </Link>
        </div>
      </motion.div>

      <RelatedArticles currentPath="/social-media-marketing-sri-lanka" />
      <DigitalMarketingCTA variant="alt" />
    </ServicePageLayout>
  );
};

export default SocialMediaMarketing;