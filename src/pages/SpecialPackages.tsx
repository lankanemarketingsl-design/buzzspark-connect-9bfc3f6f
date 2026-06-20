import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import {
  CheckCircle, Mail, MessageSquare, Smartphone, Globe, Target, Zap,
  BarChart3, GraduationCap, Building2, ShoppingCart, Home, Calendar,
  Rocket, HelpCircle, Check, X, ArrowRight, Clock, TrendingUp, Shield,
  Users, AlertTriangle, Shirt, Store, Star, Phone, Landmark,
  PartyPopper, RefreshCw, Award
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import IndustryMarketingSection from "@/components/IndustryMarketingSection";

const multiChannelIndustries = [
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
    title: "Real Estate Multi-Channel Marketing Sri Lanka – Convert High-Value Buyers",
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
    title: "Recruitment Multi-Channel Marketing Sri Lanka – Hire Faster",
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
    link: "/staff-recruitment-campaigns-sri-lanka",
    linkText: "staff recruitment",
  },
  {
    emoji: "🏥",
    title: "Healthcare Multi-Channel Marketing Sri Lanka – Increase Bookings",
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
    title: "Automotive Multi-Channel Marketing Sri Lanka – Boost Showroom Visits",
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
    title: "Event Multi-Channel Marketing Sri Lanka – Maximize Attendance",
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
    title: "Corporate / B2B Multi-Channel Marketing Sri Lanka – Reach Decision Makers",
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

/* ── Testimonials ── */
const testimonials = [
  "We contacted them last minute for our outlet opening. Campaign started within a few hours. With SMS, WhatsApp and Findit.lk.lk, we had a good crowd on the first day itself.",
  "We used SMS and email together for a promotion. Reach was very good and inquiries started from day one. Also got extra visibility through Findit.lk.lk.",
  "They handled SMS, email and WhatsApp campaigns for us. Multi-channel really works for quick awareness.",
  "We tried this for our course promotion. Within a few days we got a good number of student inquiries.",
  "People saw our brand in multiple places — SMS, WhatsApp and Findit.lk.lk. It created strong recall and better response.",
  "With SMS, email, WhatsApp and Findit.lk.lk combined, we got visibility and inquiries in a short time.",
];

/* ── Package Data ── */
type FeatureRow = {
  label: string;
  starter: string | boolean;
  silver: string | boolean;
  gold: string | boolean;
  platinum: string | boolean;
};

const smsFeatures: FeatureRow[] = [
  { label: "Total Reach", starter: "450,000+ impressions", silver: "550,000+ impressions", gold: "950,000+ impressions", platinum: "1.2 Million+ impressions" },
  { label: "SMS Campaign", starter: "20,000", silver: "50,000", gold: "150,000", platinum: "400,000" },
  { label: "Email Campaign", starter: "350,000", silver: "350,000", gold: "2 Campaigns", platinum: "2 Campaigns" },
  { label: "Findit.lk.lk Featured Ad", starter: true, silver: true, gold: true, platinum: true },
  { label: "Findit.lk.lk Pop-Up Banner", starter: "1 Day", silver: "1 Day", gold: "2 Days", platinum: "4 Days" },
  { label: "Landing Page", starter: true, silver: true, gold: true, platinum: true },
  { label: "Findit.lk.lk Main Banner", starter: false, silver: false, gold: "2 Weeks", platinum: "1 Month" },
  { label: "Findit.lk.lk Side Banner", starter: false, silver: false, gold: "1 Week", platinum: "2 Weeks" },
  { label: "Facebook Boosting", starter: true, silver: true, gold: true, platinum: true },
];

const waFeatures: FeatureRow[] = [
  { label: "Total Reach", starter: "450,000+ impressions", silver: "550,000+ impressions", gold: "575,000+ impressions", platinum: "625,000+ impressions" },
  { label: "WhatsApp Campaign", starter: "30,000", silver: "60,000", gold: "110,000", platinum: "175,000" },
  { label: "Email Campaign", starter: "350,000", silver: "350,000", gold: "2 Campaigns", platinum: "2 Campaigns" },
  { label: "Findit.lk.lk Featured Ad", starter: true, silver: true, gold: true, platinum: true },
  { label: "Findit.lk.lk Lifetime Profile", starter: false, silver: false, gold: true, platinum: true },
  { label: "Findit.lk.lk Main Banner", starter: false, silver: "2 Weeks", gold: "3 Weeks + 2 Weeks", platinum: "1 Month" },
  { label: "Findit.lk.lk Side Banner", starter: false, silver: false, gold: "1 Week", platinum: "2 Weeks" },
  { label: "Findit.lk.lk Pop-Up Banner", starter: false, silver: false, gold: false, platinum: "4 Days" },
  { label: "Facebook Boosting", starter: true, silver: true, gold: true, platinum: true },
];

const tierLabels = ["Starter", "Silver", "Gold", "Platinum"];
const tierKeys = ["starter", "silver", "gold", "platinum"] as const;

const faqs = [
  { q: "What is multi channel marketing?", a: "It is a strategy that uses multiple platforms like email, SMS, WhatsApp, and web ads to reach customers simultaneously for maximum engagement." },
  { q: "Why is multi channel marketing effective in Sri Lanka?", a: "Because customers use multiple platforms daily, combining channels increases reach, brand recall, and conversion rates significantly." },
  { q: "What makes Buzz Connect different?", a: "Buzz Connect combines targeted direct marketing with mass exposure using Findit.lk.lk, offering maximum reach at lower cost — something no other provider in Sri Lanka offers." },
  { q: "How fast can I launch a campaign?", a: "Most campaigns are launched within 48–72 hours of confirmation, ensuring you never miss time-sensitive opportunities." },
  { q: "Which channels are included?", a: "Email marketing, SMS marketing, WhatsApp marketing, Findit.lk.lk platform exposure, and Facebook boosting." },
];

/* ── Cell Value ── */
const CellValue = ({ value }: { value: string | boolean }) => {
  if (value === true) return <Check className="w-4 h-4 text-accent mx-auto" />;
  if (value === false) return <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />;
  return <span className="text-xs sm:text-sm font-medium text-foreground">{value}</span>;
};

/* ── Comparison Table ── */
const ComparisonTable = ({ title, subtitle, features, emoji }: { title: string; subtitle: string; features: FeatureRow[]; emoji: string }) => {
  const [activeTier, setActiveTier] = useState(3);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
      <div className="mb-6">
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
          <span className="text-2xl">{emoji}</span> {title}
        </h3>
        <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
      </div>

      {/* Mobile: Tier selector */}
      <div className="block sm:hidden">
        <div className="flex rounded-xl overflow-hidden border border-border mb-4">
          {tierLabels.map((tier, i) => (
            <button
              key={tier}
              onClick={() => setActiveTier(i)}
              className={`flex-1 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-all ${
                i === activeTier
                  ? i === 3 ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
                  : "bg-muted/60 text-muted-foreground"
              }`}
            >
              {tier}
              {i === 3 && <span className="block text-[8px] font-medium opacity-80">Popular</span>}
            </button>
          ))}
        </div>
        <div className="rounded-2xl overflow-hidden border border-border shadow-card">
          {features.map((row, i) => {
            const isReach = row.label === "Total Reach";
            const value = row[tierKeys[activeTier]];
            return (
              <div key={row.label} className={`flex items-center justify-between p-3.5 border-t first:border-t-0 border-border/60 ${isReach ? "bg-accent/5 border-t-2 border-b-2 border-accent/25" : i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                <span className={`text-xs flex items-center gap-1.5 ${isReach ? "font-bold text-accent" : "font-medium text-foreground"}`}>
                  {isReach && <span className="text-sm">📡</span>}
                  {row.label}
                </span>
                <span className={`text-right ${isReach ? "font-extrabold text-accent text-sm" : ""}`}>
                  <CellValue value={value} />
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop: Full table */}
      <div className="hidden sm:block rounded-2xl overflow-hidden border border-border shadow-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-secondary">
              <th className="text-left p-4 font-heading font-bold text-foreground">Features</th>
              {tierLabels.map((tier, i) => (
                <th key={tier} className={`text-center p-4 font-heading font-bold ${i === 3 ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}>
                  {tier}
                  {i === 3 && <span className="block text-[9px] font-medium mt-0.5 opacity-80">Most Popular</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((row, i) => {
              const isReach = row.label === "Total Reach";
              return (
                <tr key={row.label} className={isReach ? "bg-accent/5" : i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                  <td className={`p-4 flex items-center gap-2 ${isReach ? "font-bold text-accent" : "font-medium text-foreground"}`}>
                    {isReach && <span>📡</span>}
                    {row.label}
                  </td>
                  {tierKeys.map((key, ti) => (
                    <td key={key} className={`p-4 text-center ${isReach ? "font-extrabold text-accent" : ""} ${ti === 3 ? "bg-accent/[0.04]" : ""}`}>
                      <CellValue value={row[key]} />
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-center">
        <a data-selected-service="Multi-Channel Marketing Packages"
          href={`https://wa.me/94771437707?text=${encodeURIComponent(`Hi Buzz Connect, I'm interested in your ${title}.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity"
        >
          Get Started on WhatsApp <ArrowRight className="w-4 h-4" />
        </a>
        <p className="text-muted-foreground text-xs mt-2">Fast response · Campaign launch in 48–72 hrs</p>
      </div>
    </motion.div>
  );
};

/* ── Page ── */
const SpecialPackages = () => {
  const jsonLd = useMemo(() => [{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }], []);

  return (
    <ServicePageLayout
      badge="Multi Channel Marketing Sri Lanka"
      title="Reach 1 Million+ Customers in Days with Multi-Channel Campaigns"
      subtitle="The fastest way to achieve massive reach in Sri Lanka. Combine Email, SMS, WhatsApp (Bulk Messaging) & Findit.lk.lk banner advertising into one powerful, results-driven campaign system."
    >
      <SEOHead
        title="Multi-Channel Marketing Sri Lanka | Reach 1.2 Million+ in 72 Hours"
        description="No.1 multi-channel marketing in Sri Lanka. Combined email, SMS, WhatsApp & Findit.lk.lk advertising packages. Reach 1.2 million+ customers. Launch in 48-72 hours."
        canonical="/multi-channel-marketing-sri-lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Multi Channel Marketing", url: "/multi-channel-marketing-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      {/* Trust Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 max-w-4xl mx-auto"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-accent font-bold text-sm">Custom price for your requirements</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <Rocket className="w-4 h-4 text-secondary-foreground" />
            <span className="text-secondary-foreground font-bold text-sm">Launch in 48–72 Hours</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <Globe className="w-4 h-4 text-secondary-foreground" />
            <span className="text-secondary-foreground font-bold text-sm">Findit.lk.lk Integration</span>
          </div>
        </div>

        {/* Stats — Proven Performance */}
        <div className="text-center mb-3">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">📊 Proven Performance</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { value: "500+", label: "Campaigns Executed" },
            { value: "100+", label: "Businesses Served" },
            { value: "50M+", label: "Impressions Delivered" },
            { value: "10+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border">
              <p className="text-2xl font-bold text-accent">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm">👉 Trusted by businesses that want real results, not just impressions</p>
      </motion.div>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto text-center"
      >
        <p className="text-lg sm:text-xl font-bold text-accent mb-3">
          👉 Launch fast. Scale instantly. Get results within days — not months.
        </p>
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-4">
          Stop wasting budget on single-channel campaigns that limit your reach. Our <strong className="text-foreground">multi-channel marketing system</strong> puts your brand in front of your audience <strong className="text-foreground">everywhere</strong>.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Powered by <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email</Link>, <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS</Link>, <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp</Link> & <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">lead generation</Link> expertise.
        </p>
        <a data-selected-service="Multi-Channel Marketing Packages"
          href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20a%20free%20multi-channel%20campaign%20plan."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity"
        >
          Get Your Free Campaign Plan <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>

      {/* Channels Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">⚡ Why This Works</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Multiple Touchpoints = Higher Trust, Faster Conversions</h2>
          <p className="text-muted-foreground mt-2">One campaign across 4 powerful channels — maximum visibility, better ROI</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {[
            { icon: Mail, label: "Email Marketing", reach: "Detailed Engagement" },
            { icon: Smartphone, label: "SMS Marketing", reach: "Instant Attention" },
            { icon: MessageSquare, label: "WhatsApp Bulk Messaging", reach: "Mass Awareness" },
            { icon: Globe, label: "Findit.lk.lk Exposure", reach: "Continuous Visibility" },
          ].map(({ icon: Icon, label, reach }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card shadow-card border border-border text-center hover:border-accent/40 transition-all"
            >
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2 text-sm">{label}</h3>
              <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">{reach}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Packages — PRIMARY CONVERSION SECTION */}
      <div className="mb-16" id="packages">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">✨ Choose Your Package</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
            Our Multi-Channel Advertising Packages
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Fully managed campaigns across SMS, Email, WhatsApp & Findit.lk.lk — choose the reach that fits your goals.
          </p>
        </motion.div>
        <ComparisonTable title="WhatsApp Multi-Channel Packages" subtitle="High open rates, direct engagement, personal touch" features={waFeatures} emoji="💬" />
        <ComparisonTable title="SMS Multi-Channel Packages" subtitle="Cost-effective way to reach large audiences instantly" features={smsFeatures} emoji="📱" />

        {/* Mid-page CTA */}
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 p-6 rounded-2xl bg-accent/5 border border-accent/20 text-center">
          <p className="text-foreground font-bold mb-1">Not sure which package fits?</p>
          <p className="text-muted-foreground text-sm mb-4">Tell us your goal — we'll recommend the best option & customize pricing.</p>
          <a data-selected-service="Multi-Channel Marketing Packages"
            href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20need%20help%20choosing%20the%20right%20multi-channel%20package."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity"
          >
            Get Expert Advice on WhatsApp <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* How It Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-2">How Our Special Packages Work</h2>
        <p className="text-center text-muted-foreground mb-8">Simple. Fast. Effective.</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: Target, title: "Choose Audience", desc: "Select your industry & target", step: 1 },
            { icon: Rocket, title: "Launch Campaign", desc: "We execute in 48–72 hours", step: 2 },
            { icon: Mail, title: "Reach Customers", desc: "Multi-channel delivery", step: 3 },
            { icon: BarChart3, title: "Track Results", desc: "Monitor engagement & ROI", step: 4 },
          ].map(({ icon: Icon, title, desc, step }, i) => (
            <div key={title} className="flex flex-col items-center text-center p-5 rounded-xl bg-card shadow-card border border-border relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full gradient-accent flex items-center justify-center text-xs font-bold text-primary">
                {step}
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mt-3 mb-3">
                <Icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{title}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Speed + Scale */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">🔥 Built for Speed, Scale & Immediate Impact</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          While others build reach slowly, <strong className="text-foreground">you dominate instantly</strong>. Your campaign appears across 4 powerful channels simultaneously.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Rocket, text: "Launch within 48–72 hours", sub: "Fast execution" },
            { icon: Target, text: "1M+ targeted users", sub: "Across Sri Lanka" },
            { icon: Zap, text: "Immediate exposure", sub: "Multiple platforms" },
            { icon: RefreshCw, text: "Consistent visibility", sub: "Until conversion" },
          ].map(({ icon: Icon, text, sub }) => (
            <div key={text} className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 border border-border">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-sm font-bold text-foreground block">{text}</span>
                <span className="text-xs text-muted-foreground">{sub}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Traditional vs Buzz Connect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why We're Different</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Traditional Marketing vs Buzz Connect</h2>
        </div>
        <div className="rounded-2xl overflow-hidden border border-border shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left p-4 font-heading font-bold text-muted-foreground">Traditional</th>
                  <th className="text-left p-4 font-heading font-bold text-accent">Buzz Connect</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { trad: "Takes months to show results", buzz: "Launch campaigns in 48–72 hours" },
                  { trad: "Limited to one channel", buzz: "Multi-channel exposure (Email + SMS + WhatsApp + Web)" },
                  { trad: "No audience targeting", buzz: "Category-based & industry-specific targeting" },
                  { trad: "Hard to measure results", buzz: "Detailed performance tracking & reports" },
                  { trad: "Expensive for SMEs", buzz: "Affordable packages for every budget" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="p-4 text-muted-foreground">{row.trad}</td>
                    <td className="p-4 text-foreground font-semibold">{row.buzz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* Findit.lk.lk Advantage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-8 h-8 text-accent" />
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">💥 One Campaign. Multiple Channels. Maximum Results.</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Instead of relying on one platform, we create <strong className="text-foreground">integrated campaigns</strong> that reach customers faster, reinforce your message across channels, and increase conversion rates significantly. This is how modern marketing wins in Sri Lanka.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            "Reach customers faster across multiple platforms",
            "Reinforce your message with consistent multi-channel presence",
            "Increase conversion rates significantly",
            "Findit.lk.lk integration for continuous visibility & demand capture",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-sm text-foreground font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-sm italic">
          💡 No other provider in Sri Lanka offers Findit.lk.lk integration — you don't just reach people, you <strong className="text-accent">capture demand</strong>.
        </p>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-2">What Our Clients Say</h2>
        <p className="text-center text-muted-foreground text-sm mb-8">👉 Trusted by businesses that want real results</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {testimonials.map((quote, i) => (
            <div key={i} className="p-6 rounded-xl bg-card shadow-card border border-border">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-accent text-accent" />)}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">"{quote}"</p>
              <p className="text-xs font-semibold text-foreground mt-3">— Valued Client</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Social Proof CTA */}
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
        <a data-selected-service="Multi-Channel Marketing Packages"
          href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20discuss%20a%20multi-channel%20campaign%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity"
        >
          Join 100+ Businesses — Start Your Campaign <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
      {/* Who Should Use */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">Who Should Use Multi-Channel Campaigns?</h2>
        <p className="text-muted-foreground text-sm mb-8">If you need <strong className="text-foreground">quick results</strong>, this is the best solution.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: GraduationCap, label: "Education Institutes", result: "→ Student inquiries", link: "/education-marketing-sri-lanka" },
            { icon: Home, label: "Real Estate Companies", result: "→ Property leads", link: "/real-estate-marketing-sri-lanka" },
            { icon: Calendar, label: "Event Organizers", result: "→ Ticket sales", link: "/event-marketing-sri-lanka" },
            { icon: ShoppingCart, label: "Restaurants & Food", result: "→ Customer traffic", link: "/restaurant-marketing-sri-lanka" },
            { icon: Building2, label: "Hotels & Travel", result: "→ Bookings", link: "/hotel-marketing-sri-lanka" },
            { icon: Shirt, label: "Fashion & Clothing", result: "→ Brand growth", link: "/fashion-marketing-sri-lanka" },
            { icon: Store, label: "Staff Recruitment", result: "→ Quality applicants", link: "/staff-recruitment-campaigns-sri-lanka" },
            { icon: Rocket, label: "Finance & Insurance", result: "→ Lead generation", link: "/finance-marketing-sri-lanka" },
          ].map(({ icon: Icon, label, result, link }) => (
            <Link key={label} to={link} className="flex items-center gap-4 p-5 rounded-xl bg-card shadow-card border border-border hover:border-accent/40 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-sm font-bold text-foreground">{label}</span>
                <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">{result}</span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Industry Campaign Examples */}
      <IndustryMarketingSection
        sectionEmoji="📱"
        sectionTitle="Multi Channel Marketing Sri Lanka – Real Campaign Examples by Industry"
        intro="See how multi-channel marketing campaigns work for different industries in Sri Lanka. Each campaign flow combines multiple channels for maximum impact."
        subtitle="👇 Explore campaign flows for your industry"
        industries={multiChannelIndustries}
        whyTitle="🔥 Why Multi Channel Campaigns Deliver Better Results"
        whyPoints={[
          "Customers interact with your brand across multiple platforms",
          "Each channel supports the next (awareness → trust → action)",
          "Reach → Ads + Banner Advertising (Findit.lk)",
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
        ctaTitle="🚀 Start Your Multi Channel Campaign Today"
        ctaSubtitle="Ready to scale your business with a powerful multi-channel strategy? Get a free campaign plan and consultation."
        ctaWhatsAppMessage="Hi Buzz Connect, I'm interested in multi-channel marketing campaigns for my business in Sri Lanka. Can I get a free campaign plan?"
        ctaButtonText="Get Free Campaign Plan"
      />


      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border"
      >
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">Why 100+ Sri Lankan Businesses Trust Buzz Connect</h2>
        <p className="text-muted-foreground text-sm mb-6">The only multi-channel marketing provider with Findit.lk.lk integration</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Proven multi-channel marketing strategy",
            "350,000+ segmented audience database",
            "Campaign launch within 48–72 hours",
            "Exclusive Findit.lk.lk platform integration",
            "End-to-end campaign management",
            "Affordable packages for every business size",
            "Industry-specific audience targeting",
            "Detailed performance tracking & reports",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-sm text-foreground font-medium">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Urgency */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-3xl mx-auto p-8 rounded-2xl bg-destructive/5 border-2 border-destructive/15 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-destructive" />
          <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">Limited Weekly Campaign Slots</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
          We only run a limited number of campaigns each week to ensure quality. <strong className="text-foreground">Book early to secure your slot.</strong>
        </p>
        <a data-selected-service="Multi-Channel Marketing Packages"
          href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20secure%20a%20campaign%20slot."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-destructive text-destructive-foreground font-bold hover:opacity-90 transition-opacity"
        >
          Secure Your Slot Now <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-3xl mx-auto"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
          Frequently Asked Questions
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

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center p-10 rounded-2xl gradient-hero text-primary-foreground"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">🚀 Start Your Campaign Today</h2>
        <p className="text-primary-foreground/80 mb-2 max-w-xl mx-auto">
          Ready to reach thousands (or millions) of customers fast? Get a custom plan based on your goals.
        </p>
        <p className="text-primary-foreground/60 text-sm font-medium mb-6">
          👉 "From zero to massive reach in just days — powered by multi-channel marketing."
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a data-selected-service="Multi-Channel Marketing Packages"
            href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20launch%20a%20multi-channel%20campaign."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base">
              Chat on WhatsApp Now <ArrowRight className="inline w-4 h-4 ml-1" />
            </button>
          </a>
          <Link to="/contact-us">
            <button className="px-8 py-3 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent/10 transition-colors text-base">
              Contact Us
            </button>
          </Link>
        </div>
      </motion.div>
    </ServicePageLayout>
  );
};

export default SpecialPackages;
