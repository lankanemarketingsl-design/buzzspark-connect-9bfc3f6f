import SEOHead from "@/components/SEOHead";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { ArrowRight, CheckCircle2, Users, Zap, Globe, Target, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleImg from "@/assets/blog/article-7.webp";
import RelatedArticles from "@/components/RelatedArticles";
import IndustryMarketingSection from "@/components/IndustryMarketingSection";

const faqs = [
  { q: "What is multi-channel marketing?", a: "Multi-channel marketing is a strategy that reaches customers through multiple platforms like email, SMS, WhatsApp, Google Ads, social media ads, and web advertising simultaneously for maximum engagement and conversions." },
  { q: "Why is multi-channel marketing important in Sri Lanka?", a: "Sri Lankan consumers use multiple digital platforms daily. A multi-channel approach ensures your brand stays visible across every touchpoint — from awareness to consideration to conversion — improving recall and conversion rates." },
  { q: "How does Findit.lk integration help my business?", a: "Findit.lk is one of Sri Lanka's leading online promotion platforms. Integration with Buzz Connect's direct marketing channels amplifies your reach to users actively searching for products and services." },
  { q: "What industries benefit from multi-channel marketing?", a: "Hotels, education institutes, real estate, e-commerce, restaurants, recruitment agencies, healthcare, automotive, finance, fashion, events, and corporate/B2B organizations all benefit from multi-channel marketing strategies in Sri Lanka." },
  { q: "How much does multi-channel marketing cost in Sri Lanka?", a: "Costs vary based on the number of channels, audience size, and campaign duration. Buzz Connect offers customized packages starting from affordable rates. Contact us for a free consultation and campaign plan." },
  { q: "What results can I expect from multi-channel marketing?", a: "Businesses typically see higher conversion rates, stronger brand recall, increased leads, and better ROI compared to single-channel campaigns. Each channel supports the next — ads build awareness, email and WhatsApp drive engagement, and SMS creates urgency." },
];

const industries = [
  {
    emoji: "🏨",
    title: "Hotel Multi-Channel Marketing Sri Lanka – Drive Direct Bookings",
    campaigns: [
      "Banner Ads (Findit.lk) → Build awareness among travelers",
      "Email Campaign → Promote packages with full details",
      "WhatsApp Bulk Messaging → Highlight limited-time offers",
      "SMS → Last-minute booking reminders",
    ],
    results: [
      "Increased direct bookings",
      "Higher occupancy rates",
      "Reduced reliance on third-party platforms",
    ],
    link: "/hotel-marketing-sri-lanka",
    linkText: "hotel marketing",
  },
  {
    emoji: "🎓",
    title: "Education Multi-Channel Marketing Sri Lanka – Generate & Convert Student Leads",
    campaigns: [
      "Facebook / Google Ads → Capture student inquiries",
      "Email Campaign → Share course details & benefits",
      "WhatsApp Bulk Messaging → Promote deadlines",
      "SMS → Final enrollment reminders",
    ],
    results: [
      "More qualified student leads",
      "Faster enrollment cycles",
      "Lower cost per acquisition",
    ],
    link: "/education-marketing-sri-lanka",
    linkText: "education marketing",
  },
  {
    emoji: "🏠",
    title: "Real Estate Multi-Channel Marketing Sri Lanka – Convert High-Value Buyers Faster",
    campaigns: [
      "Google Ads → Target active property searches",
      "Banner Ads (Findit.lk) → Continuous brand visibility",
      "Email Campaign → Property details & investment value",
      "WhatsApp Bulk Messaging → Launch announcements",
      "SMS → Site visit reminders",
    ],
    results: [
      "Higher-quality buyer inquiries",
      "Shorter sales cycles",
      "Increased project conversions",
    ],
    link: "/real-estate-marketing-sri-lanka",
    linkText: "real estate marketing",
  },
  {
    emoji: "🛍️",
    title: "E-commerce & Retail Multi-Channel Marketing Sri Lanka – Turn Traffic into Sales",
    campaigns: [
      "Social Media Ads → Drive traffic",
      "Banner Ads → Reinforce brand visibility",
      "Email Campaign → Promote offers & products",
      "WhatsApp Bulk Messaging → Flash sale announcements",
      "SMS → Urgency-driven reminders",
    ],
    results: [
      "Higher conversion rates",
      "Increased sales volume",
      "Stronger repeat purchase behavior",
    ],
    link: "/restaurant-marketing-sri-lanka",
    linkText: "retail marketing",
  },
  {
    emoji: "🍽️",
    title: "Restaurant Multi-Channel Marketing Sri Lanka – Increase Daily Customer Flow",
    campaigns: [
      "Banner Ads → Continuous brand presence",
      "Social Media Ads → Engagement & discovery",
      "WhatsApp Bulk Messaging → Daily promotions",
      "SMS → Time-sensitive offers",
    ],
    results: [
      "Increased foot traffic",
      "More repeat customers",
      "Higher daily revenue",
    ],
    link: "/restaurant-marketing-sri-lanka",
    linkText: "restaurant marketing",
  },
  {
    emoji: "💼",
    title: "Recruitment Multi-Channel Marketing Sri Lanka – Reach More Candidates, Hire Faster",
    campaigns: [
      "Job Ads → Generate applications",
      "Email Campaign → Detailed job communication",
      "WhatsApp Bulk Messaging → Vacancy alerts",
      "SMS → Interview reminders",
      "Banner Ads → Employer branding",
    ],
    results: [
      "Faster hiring cycles",
      "Better candidate quality",
      "Reduced recruitment costs",
    ],
    link: "/staff-recruitment-sri-lanka",
    linkText: "staff recruitment",
  },
  {
    emoji: "🏥",
    title: "Healthcare Multi-Channel Marketing Sri Lanka – Improve Engagement & Increase Bookings",
    campaigns: [
      "Google Ads → Capture high-intent searches",
      "Email Campaign → Awareness & service education",
      "WhatsApp Bulk Messaging → Promotions",
      "SMS → Appointment reminders",
      "Banner Ads → Build trust & visibility",
    ],
    results: [
      "Increased patient bookings",
      "Reduced no-show rates",
      "Stronger patient engagement",
    ],
    link: null,
    linkText: "",
  },
  {
    emoji: "🚗",
    title: "Automotive Multi-Channel Marketing Sri Lanka – Boost Inquiries & Showroom Visits",
    campaigns: [
      "Paid Ads → Vehicle promotions",
      "Banner Ads → Brand reinforcement",
      "Email Campaign → Offers & specifications",
      "WhatsApp Bulk Messaging → Launch alerts",
      "SMS → Test drive reminders",
    ],
    results: [
      "Increased inquiries",
      "More showroom visits",
      "Higher conversion rates",
    ],
    link: null,
    linkText: "",
  },
  {
    emoji: "🏦",
    title: "Finance & Insurance Multi-Channel Marketing Sri Lanka – Generate High-Value Leads",
    campaigns: [
      "Targeted Ads → Lead generation",
      "Email Campaign → Detailed financial offers",
      "WhatsApp Bulk Messaging → Awareness campaigns",
      "SMS → Urgency messaging",
      "Banner Ads → Trust-building visibility",
    ],
    results: [
      "Higher-quality leads",
      "Increased approval rates",
      "Strong ROI",
    ],
    link: "/finance-marketing-sri-lanka",
    linkText: "finance marketing",
  },
  {
    emoji: "👗",
    title: "Fashion & Clothing Multi-Channel Marketing Sri Lanka – Build Brand & Drive Sales",
    campaigns: [
      "Social Media Ads → Brand awareness",
      "Banner Ads → Continuous exposure",
      "Email Campaign → Promotions & collections",
      "WhatsApp Bulk Messaging → New arrivals",
      "SMS → Flash sale alerts",
    ],
    results: [
      "Increased brand recognition",
      "Higher sales volume",
      "Stronger customer loyalty",
    ],
    link: "/fashion-marketing-sri-lanka",
    linkText: "fashion marketing",
  },
  {
    emoji: "🎉",
    title: "Event Multi-Channel Marketing Sri Lanka – Maximize Reach & Attendance",
    campaigns: [
      "Social Ads → Awareness",
      "Email Invitations → Event details",
      "WhatsApp Bulk Messaging → Promotion blasts",
      "SMS → Reminder notifications",
      "Banner Ads → Continuous visibility",
    ],
    results: [
      "Higher registrations",
      "Faster ticket sales",
      "Improved event turnout",
    ],
    link: "/event-marketing-sri-lanka",
    linkText: "event marketing",
  },
  {
    emoji: "🏢",
    title: "Corporate / B2B Multi-Channel Marketing Sri Lanka – Reach Decision Makers Effectively",
    campaigns: [
      "Email Campaign → Direct corporate outreach",
      "LinkedIn / Ads → Lead generation",
      "WhatsApp Bulk Messaging → Awareness",
      "SMS → Follow-ups",
      "Banner Ads → Brand authority",
    ],
    results: [
      "More qualified business leads",
      "Faster deal closures",
      "Improved conversion rates",
    ],
    link: null,
    linkText: "",
  },
];

const MultiChannelMarketingSriLanka = () => {
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }), []);

  const articleJsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Multi Channel Marketing Services for Every Industry in Sri Lanka",
    author: { "@type": "Organization", name: "Buzz Connect" },
    publisher: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" },
    datePublished: "2025-03-20",
    dateModified: "2025-06-15",
    description: "Discover how Buzz Connect's multi-channel marketing strategy combining Email, SMS, WhatsApp, Google Ads, Social Media Ads, and Findit.lk delivers maximum reach and results for Sri Lankan businesses.",
  }), []);

  return (
    <ServicePageLayout
      badge="Multi-Channel Marketing"
      title="Multi Channel Marketing Services for Every Industry in Sri Lanka"
      subtitle="At Buzz Connect, we design integrated campaigns using Email, SMS, WhatsApp, Social Media Ads, Google Ads, and Banner Advertising (Findit.lk) — ensuring your brand reaches customers at every stage of their decision journey."
    >
      <SEOHead
        title="Multi Channel Marketing Sri Lanka | Integrated Campaigns | Buzz Connect"
        description="Multi-channel marketing Sri Lanka — integrated Email, SMS, WhatsApp, Google Ads & Findit.lk campaigns for every industry. Drive awareness, engagement & conversions with Buzz Connect."
        canonical="/multi-channel-marketing-in-sri-lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Multi-Channel Marketing Sri Lanka", url: "/multi-channel-marketing-in-sri-lanka" },
        ]}
        jsonLd={[jsonLd, articleJsonLd]}
      />

      <article className="max-w-5xl mx-auto space-y-12">
        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden shadow-card">
          <img src={articleImg} alt="Multi-channel marketing in Sri Lanka - Email, SMS, WhatsApp, Google Ads and Findit.lk" className="w-full h-auto" loading="lazy" width={800} height={500} />
        </div>

        {/* Introduction */}
        <section className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Looking for <strong>multi channel marketing in Sri Lanka</strong> that actually delivers results? At Buzz Connect, we design integrated campaigns using <Link to="/email-marketing" className="text-accent hover:underline font-semibold">Email</Link>, <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS</Link>, <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp bulk messaging</Link>, Social Media Ads, <Link to="/google-ads-sri-lanka" className="text-accent hover:underline font-semibold">Google Ads</Link>, and Banner Advertising (Findit.lk) — ensuring your brand reaches customers at every stage of their decision journey.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed font-semibold">
            👉 From awareness → consideration → conversion — we cover it all.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With open rates as high as 98% on SMS, real-time WhatsApp conversations, targeted Google Ads, and continuous Findit.lk visibility — <strong>multi-channel marketing in Sri Lanka</strong> is the most powerful way to grow your business.
          </p>
        </section>

        {/* Industry Sections */}
        <IndustryMarketingSection
          sectionEmoji="📱"
          sectionTitle="Multi Channel Marketing Sri Lanka – Real Campaign Examples by Industry"
          intro="See how multi-channel marketing campaigns work for different industries in Sri Lanka. Each campaign flow combines multiple channels for maximum impact."
          subtitle="👇 Click on any industry to see the full campaign strategy"
          industries={industries}
          whyTitle="🔥 Why Multi Channel Campaigns Deliver Better Results"
          whyPoints={[
            "Customers interact with your brand across multiple platforms",
            "Each channel supports the next (awareness → trust → action)",
            "Reach → Ads + Banner Advertising",
            "Engagement → Email + WhatsApp",
            "Urgency → SMS reminders",
            "Higher conversions, stronger brand recall, and better ROI",
          ]}
          whyFooter="👉 Result: Higher conversions, stronger brand recall, and better ROI with multi-channel marketing in Sri Lanka."
          crossLinks={[
            { to: "/email-marketing", label: "Email Marketing" },
            { to: "/sms-marketing", label: "SMS Marketing" },
            { to: "/whatsapp-marketing", label: "WhatsApp Marketing" },
            { to: "/lead-generation-sri-lanka", label: "Lead Generation" },
            { to: "/google-ads-sri-lanka", label: "Google Ads" },
          ]}
          ctaTitle="🚀 Start Your Multi Channel Marketing Campaign in Sri Lanka Today"
          ctaSubtitle="Ready to scale your business with a powerful multi-channel strategy? Get a free campaign plan and consultation."
          ctaWhatsAppMessage="Hi Buzz Connect, I'm interested in multi-channel marketing campaigns for my business in Sri Lanka. Can I get a free campaign plan?"
          ctaButtonText="Get Free Campaign Plan"
        />

        {/* What Makes Buzz Connect Different */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">What Makes Buzz Connect Different for Multi-Channel Marketing in Sri Lanka?</h2>
          <p className="text-muted-foreground mb-6">
            Unlike traditional marketing providers, Buzz Connect offers an <strong>integrated multi-channel marketing solution</strong> that combines:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Email Marketing", link: "/email-marketing" },
              { label: "SMS Marketing", link: "/sms-marketing" },
              { label: "WhatsApp Marketing", link: "/whatsapp-marketing" },
              { label: "Google Ads", link: "/google-ads-sri-lanka" },
              { label: "Online Advertising & Banners", link: "/online-advertising-sri-lanka" },
              { label: "Findit.lk Promotional Exposure", link: null },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                {item.link ? (
                  <Link to={item.link} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-4">
            This combination allows businesses to reach both targeted audiences and mass markets simultaneously, ensuring higher engagement and faster results with <strong>multi-channel marketing in Sri Lanka</strong>.
          </p>
        </section>

        {/* Findit.lk Section */}
        <section className="bg-muted/30 rounded-2xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-7 h-7 text-accent" />
            <h2 className="font-heading text-2xl font-bold text-foreground">Amplified Reach with Findit.lk</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            One of the biggest advantages of Buzz Connect's <strong>multi-channel marketing in Sri Lanka</strong> is its integration with <strong>Findit.lk</strong> — one of Sri Lanka's leading online promotion platforms.
          </p>
          <p className="text-muted-foreground mb-4">Findit.lk allows businesses to:</p>
          <ul className="space-y-2 mb-6">
            {[
              "Promote offers to a large active audience",
              "Gain visibility across multiple categories",
              "Reach users actively searching for products and services",
              "Increase brand awareness with banner advertising",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                {item}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Target, label: "Maximum Reach" },
              { icon: Zap, label: "Higher Engagement" },
              { icon: BarChart3, label: "Better Conversions" },
              { icon: Users, label: "Cost-Effective" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="text-center p-4 rounded-xl bg-background border border-border">
                <Icon className="w-6 h-6 text-accent mx-auto mb-2" />
                <span className="text-sm font-semibold text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Direct Marketing + Mass Exposure */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Direct Marketing + Mass Exposure = Faster Results</h2>
          <p className="text-muted-foreground mb-4">
            Traditional marketing methods often take time to deliver results. Buzz Connect's <strong>multi-channel marketing in Sri Lanka</strong> solves this by combining:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">Direct Marketing Tools</h3>
              <p className="text-sm text-muted-foreground">Email, SMS, WhatsApp → Instant reach to thousands within minutes</p>
            </div>
            <div className="p-5 rounded-xl bg-accent/5 border border-accent/20">
              <h3 className="font-semibold text-foreground mb-2">Advertising & Visibility</h3>
              <p className="text-sm text-muted-foreground">Google Ads, Social Media Ads, Findit.lk → Continuous visibility & lead generation</p>
            </div>
          </div>
          <p className="text-muted-foreground">
            This hybrid strategy ensures your campaign reaches thousands within minutes, stays visible for a longer duration, and engages both cold and warm audiences.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Frequently Asked Questions – Multi-Channel Marketing Sri Lanka</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-5 rounded-xl bg-muted/30 border border-border">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-10">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-3">
            Ready to Launch Your Multi-Channel Campaign in Sri Lanka?
          </h2>
          <p className="text-primary-foreground/80 mb-4 max-w-lg mx-auto">
            Explore our <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-bold">multi-channel marketing packages</Link> or chat with us on WhatsApp for a free consultation and campaign plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/multi-channel-marketing-sri-lanka">
              <Button variant="hero-outline" size="lg" className="text-base">
                View Packages <ArrowRight className="ml-1" />
              </Button>
            </Link>
            <a data-selected-service="Multi-Channel Marketing Packages"
              href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20your%20multi-channel%20marketing%20services%20in%20Sri%20Lanka."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="text-base">
                Chat on WhatsApp <ArrowRight className="ml-1" />
              </Button>
            </a>
          </div>
        </section>
      </article>
      <div className="container mx-auto px-4">
        <div className="my-8 p-5 rounded-xl border border-accent/30 bg-accent/5">
          <p className="text-sm sm:text-base text-foreground">
            Comparing your options? See our full breakdown of the top{' '}
            <Link to="/digital-marketing-companies-sri-lanka" className="font-semibold text-accent underline underline-offset-2 hover:no-underline">
              digital marketing companies in Sri Lanka
            </Link>{' '}
            and how to pick the right partner for your business.
          </p>
        </div>
        <RelatedArticles currentPath="/multi-channel-marketing-in-sri-lanka" />
      </div>
    </ServicePageLayout>
  );
};

export default MultiChannelMarketingSriLanka;
