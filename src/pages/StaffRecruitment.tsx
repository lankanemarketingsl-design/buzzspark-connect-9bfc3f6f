import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, Target, MessageSquare, Globe,
  HelpCircle, Briefcase, Users, TrendingUp,
  ArrowRight, Rocket, Zap, DollarSign,
  Crown, Send, Building2, Factory, GraduationCap,
  ShoppingBag, Hotel, Mail,
} from "lucide-react";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import IndustryStatsBanner from "@/components/IndustryStatsBanner";

const WA_NUMBER = "94771976351";

const buildWa = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}%20Please%20share%20details.`;

const achievements = [
  { icon: Users, text: "Reach 350K+ active job seekers island-wide" },
  { icon: Zap, text: "Launch your hiring campaign within 24 hours" },
  { icon: Target, text: "Target by role, industry, and city" },
  { icon: TrendingUp, text: "Fill vacancies 3× faster than traditional portals" },
  { icon: DollarSign, text: "Multi-platform reach at a fraction of agency cost" },
];

const whoIsFor = [
  { icon: Factory, text: "Manufacturing & Logistics" },
  { icon: Building2, text: "Corporate & SMEs" },
  { icon: Hotel, text: "Hospitality & Hotels" },
  { icon: ShoppingBag, text: "Retail & FMCG" },
  { icon: GraduationCap, text: "Graduate & Bulk Hiring" },
];

const whyChooseUs = [
  { icon: Rocket, text: "Active push to candidates, not passive listings" },
  { icon: Globe, text: "3 platforms — YouJobs.lk, Findit.lk & Facebook in one campaign" },
  { icon: Target, text: "Targeted by role, experience and location" },
  { icon: Zap, text: "24-hour campaign launch — applications arrive fast" },
];


const platforms = [
  {
    badge: "YouJobs.lk",
    tag: "Job portal · Google indexed",
    headline: "Reach candidates actively searching",
    desc: "Sri Lanka's modern job portal — every listing is indexed on Google Jobs within hours. Candidates apply directly, for free, from any device.",
    features: [
      "Google Jobs indexed within hours",
      "Verified employer badge on listing",
      "Mobile-first apply — zero friction",
      "Free to apply for all candidates",
    ],
    stat: "100%",
    statLabel: "Google Jobs indexed",
    link: "https://youjobs.lk/",
  },
  {
    badge: "Findit.lk",
    tag: "Directory + jobs · 200K users",
    headline: "Dominate Sri Lanka's top directory",
    desc: "Sri Lanka's most trusted online directory. 200K+ monthly users browse jobs — your listing gets continuous visibility from Colombo to Jaffna.",
    features: [
      "200K+ monthly job seekers",
      "Featured placement in category",
      "Premium top-of-category visibility",
      "Island-wide coverage, all categories",
    ],
    stat: "200K+",
    statLabel: "Monthly users",
    link: "https://www.findit.lk/jobs",
  },
  {
    badge: "BuzzConnect",
    tag: "Facebook · Instagram · Lead forms",
    headline: "Push your vacancy directly to candidates",
    desc: "Unlike portals where candidates must find you, BuzzConnect actively promotes your vacancy via Facebook ads — driving direct responses immediately.",
    features: [
      "Facebook & Instagram targeted campaigns",
      "Lead form integration",
      "Campaign launched within 24 hours",
      "Multi-creative testing",
    ],
    stat: "24hrs",
    statLabel: "Go live",
    link: null,
  },
];

const howItWorks = [
  { step: 1, icon: Send, title: "Share Your Hiring Brief", desc: "Tell us the role, location, and requirements. We handle the rest." },
  { step: 2, icon: Target, title: "We Build the Campaign", desc: "Our team designs the job ad and sets up listings on YouJobs.lk, Findit.lk, and Facebook." },
  { step: 3, icon: Rocket, title: "Campaign Goes Live", desc: "Vacancy goes live across all platforms within 24 hours. Facebook ads start immediately." },
  { step: 4, icon: Users, title: "Applications Arrive", desc: "Candidates apply via WhatsApp, lead forms, or direct contact. Review and hire fast." },
];

const packages = [
  {
    name: "Starter Hiring",
    sub: "Quick, single-role hiring",
    price: "LKR 12,000",
    icon: Rocket,
    color: "green",
    featured: false,
    platforms: ["YouJobs.lk standard listing", "Findit.lk job listing"],
    promotions: ["Facebook basic targeting", "Ad creative included"],
    quote: "Fill a single role fast",
    cta: "Inquire via WhatsApp",
    message: "Hi Buzz Connect, I'm interested in the Starter Hiring Campaign (LKR 12,000).",
  },
  {
    name: "Growth Hiring",
    sub: "Consistent ongoing hiring",
    price: "LKR 25,000",
    icon: Crown,
    color: "accent",
    featured: true,
    platforms: ["YouJobs.lk featured listing", "Findit.lk featured placement"],
    promotions: ["Facebook + Story promotions", "Lead form integration", "Increased campaign reach"],
    quote: "Build a steady candidate pipeline",
    cta: "Inquire via WhatsApp",
    message: "Hi Buzz Connect, I'm interested in the Growth Hiring Campaign (LKR 25,000).",
  },
  {
    name: "Pro Hiring",
    sub: "High-demand & skilled roles",
    price: "LKR 45,000",
    icon: TrendingUp,
    color: "green",
    featured: false,
    platforms: ["YouJobs.lk premium + featured", "Findit.lk premium category top"],
    promotions: ["Advanced Facebook targeting", "Multi-placement strategy", "Optimised application flow"],
    quote: "Win specialist & senior talent",
    cta: "Inquire via WhatsApp",
    message: "Hi Buzz Connect, I'm interested in the Pro Hiring Campaign (LKR 45,000).",
  },
  {
    name: "Mass Hiring",
    sub: "Bulk recruitment drives",
    price: "Custom",
    icon: Briefcase,
    color: "green",
    featured: false,
    platforms: ["YouJobs.lk bulk ad slots", "Findit.lk multi-listing"],
    promotions: ["Full multi-platform blast", "Dedicated campaign manager", "Multiple creatives + TikTok video"],
    quote: "Recruit 10+ people at once",
    cta: "Get a Custom Quote",
    message: "Hi Buzz Connect, I want a custom Mass Hiring Campaign quote.",
  },
];

const industries = [
  "Banking & Finance", "Manufacturing & Logistics", "Retail & FMCG",
  "Hospitality & Hotels", "IT & Software", "Education & NGOs",
  "Healthcare", "Engineering", "Sales & Marketing",
  "Corporate & SMEs", "Graduate & Internship", "Walk-in Recruitment",
];

const testimonials = [
  {
    text: "We filled 12 factory positions in under a week. The combination of Facebook ads and YouJobs.lk listing brought in far more applicants than we expected.",
    author: "HR Manager",
    company: "Manufacturing company, Katunayake",
  },
  {
    text: "BuzzConnect's campaign reached candidates we couldn't find on traditional portals. The Findit.lk featured listing kept our role visible for weeks.",
    author: "General Manager",
    company: "Hospitality group, Colombo",
  },
  {
    text: "The campaign results were a game changer — candidates responded within hours. Best value for bulk recruitment drives in Sri Lanka.",
    author: "Admin Director",
    company: "Retail chain, Sri Lanka",
  },
];

const faqs = [
  { q: "What is staff recruitment marketing?", a: "Staff recruitment marketing promotes your job vacancies to targeted audiences through digital channels like email, Facebook, SMS, and directory platforms like Findit.lk and YouJobs.lk to attract qualified candidates fast." },
  { q: "How can Buzz Connect help fill vacancies faster?", a: "We use a multi-channel approach combining YouJobs.lk listings, Findit.lk featured placements, and Facebook promotions to reach thousands of active job seekers and drive applications within 24 hours." },
  { q: "What makes Buzz Connect different from job portals?", a: "Unlike traditional job portals where candidates browse passively, our campaigns actively push your vacancies to targeted audiences via social media and directory platforms — increasing application rates significantly." },
  { q: "How much does a recruitment campaign cost?", a: "Buzz Connect recruitment campaign packages start from LKR 12,000. Contact us for a customized quote based on your hiring needs." },
  { q: "Can you run mass hiring campaigns?", a: "Yes — our Mass Hiring Campaign is designed for bulk recruitment with multi-platform promotion, multiple ad creatives, and a dedicated campaign manager." },
  { q: "Why is Buzz Connect the best recruitment marketing agency in Sri Lanka?", a: "Buzz Connect combines YouJobs.lk, Findit.lk and Facebook in a single campaign — giving employers active push, Google Jobs indexing, and trusted directory reach at a fraction of agency cost." },
];

const StaffRecruitment = () => {
  const jsonLd = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Staff Recruitment Campaigns Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Multi-channel staff recruitment campaigns in Sri Lanka combining YouJobs.lk, Findit.lk and Facebook visibility to speed up hiring.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Staff Recruitment Campaigns"
      title="Fill Vacancies 3× Faster Across Sri Lanka"
      subtitle="One campaign. Three powerful platforms. We push your vacancies to YouJobs.lk, Findit.lk and Facebook — reaching active job seekers where they already are."
    >
      <SEOHead
        title="Staff Recruitment Campaigns Sri Lanka | Hire Faster"
        description="No.1 recruitment marketing in Sri Lanka. Fill vacancies faster with YouJobs.lk, Findit.lk & Facebook campaigns. Multi-channel hiring that delivers results."
        canonical="/staff-recruitment-campaigns-sri-lanka"
        keywords="staff recruitment sri lanka, recruitment campaigns sri lanka, hiring campaigns sri lanka, job vacancy promotion, recruitment marketing, staff hiring sri lanka, youjobs.lk, findit.lk jobs"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Staff Recruitment Campaigns", url: "/staff-recruitment-campaigns-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      {/* Hero CTA Buttons */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-4 mb-12 -mt-4">
        <a data-selected-service="Staff Recruitment Campaigns" href={buildWa("Hi Buzz Connect, I want to launch a recruitment campaign.")} target="_blank" rel="noopener noreferrer">
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-base font-bold rounded-full"><Briefcase className="w-5 h-5 mr-2" />Start Hiring Campaign</Button>
        </a>
        <Link to="/contact-us">
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 text-base font-bold rounded-full"><Rocket className="w-5 h-5 mr-2" />Get a Custom Quote</Button>
        </Link>
      </motion.div>

      <IndustryStatsBanner
        icon={Briefcase}
        gradient="gradient-recruitment"
        tagline="Multi-Platform Hiring Campaigns"
        stats={[
          { value: "350K+", label: "Candidate Reach" },
          { value: "3", label: "Platforms / Campaign" },
          { value: "24hrs", label: "Campaign Launch" },
          { value: "100%", label: "Google Jobs Indexed" },
        ]}
      />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Hiring in Sri Lanka is competitive — the right candidate is often already employed and not browsing portals. Our recruitment campaigns combine <a href="https://youjobs.lk/" target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-2 hover:underline">YouJobs.lk</a> Google-indexed listings with <a href="https://www.findit.lk/jobs" target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-2 hover:underline">Findit.lk Jobs</a> directory placement to capture active job seekers.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          We then layer on targeted <Link to="/social-media-marketing-sri-lanka" className="text-muted-foreground underline-offset-2 hover:underline">Facebook & Instagram ads</Link> to push your vacancy directly to passive candidates — pairing reach with intent in a single campaign.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Add <Link to="/whatsapp-marketing" className="text-muted-foreground underline-offset-2 hover:underline">WhatsApp application flows</Link> and <Link to="/sms-marketing" className="text-muted-foreground underline-offset-2 hover:underline">SMS shortlist alerts</Link> for a zero-friction hiring funnel that fills roles in days, not months.
        </p>
      </motion.div>

      {/* What You Can Achieve */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">What You Can Achieve</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Stop Waiting. Start Hiring.</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">With BuzzConnect, your vacancy reaches thousands of qualified candidates within 24 hours.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {achievements.map((item, i) => (
            <motion.div key={item.text} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-card hover:border-accent/40 transition-all">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-foreground font-medium text-sm">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Who This Is For */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Who This Is For</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Built for Every Industry in Sri Lanka</h2>
          <p className="text-muted-foreground mt-2">From factories in Katunayake to finance firms in Colombo 3</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {whoIsFor.map((item, i) => (
            <motion.div key={item.text} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 p-5 rounded-xl bg-card border border-border shadow-card text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <span className="text-foreground font-medium text-sm">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Platform Power — Highlighted */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 rounded-3xl overflow-hidden gradient-recruitment p-8 sm:p-12 relative"
        id="platforms"
      >
        {/* Subtle mesh glow */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-accent" /> Platform Power
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Three Platforms. <span className="text-gradient">One Campaign.</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Every BuzzConnect recruitment campaign activates all three platforms simultaneously — you're not posting a job, you're running a full hiring campaign.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-4 right-4 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent -translate-y-1/2" />

          {platforms.map((p, i) => (
            <motion.div
              key={p.badge}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group relative rounded-2xl bg-white/95 backdrop-blur-sm border border-white/20 p-6 shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent/10 text-accent border border-accent/20">{p.badge}</span>
                <span className="text-xs text-muted-foreground">{p.tag}</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{p.headline}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
              <ul className="space-y-2 mb-5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <strong className="font-heading text-xl font-bold text-accent block leading-tight">{p.stat}</strong>
                  <span className="text-xs text-muted-foreground">{p.statLabel}</span>
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors">
                    <Globe className="w-3 h-3" /> Visit <ArrowRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why Choose BuzzConnect</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">The Smarter Way to Hire in Sri Lanka</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {whyChooseUs.map((item, i) => (
            <motion.div key={item.text} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border shadow-card">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-foreground text-sm leading-relaxed">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* How It Works */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">How It Works</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">From Brief to Applications in 24 Hours</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {howItWorks.map((step, i) => (
            <motion.div key={step.step} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="relative p-6 rounded-2xl bg-card border border-border shadow-card text-center">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center">{step.step}</div>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3 mt-2">
                <step.icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-heading text-base font-bold text-foreground mb-1">{step.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Packages */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16" id="packages">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Campaign Packages</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Choose Your Hiring Power</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Every package includes YouJobs.lk + Findit.lk listings plus BuzzConnect multi-channel promotion.</p>
          <div className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/30">
            <span className="text-accent font-bold text-sm">🎉 Bundle 3 campaigns = 10% off</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            const isFeatured = pkg.featured;
            return (
              <div
                key={pkg.name}
                className={`relative p-6 rounded-2xl flex flex-col ${
                  isFeatured
                    ? "bg-card border-2 border-accent shadow-card ring-2 ring-accent/20"
                    : "bg-card border border-border shadow-card"
                } hover:-translate-y-1 hover:shadow-card-hover transition-all`}
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-white text-xs font-bold whitespace-nowrap">
                    MOST POPULAR
                  </div>
                )}
                <div className={`w-12 h-12 rounded-full ${isFeatured ? "bg-accent/10" : "bg-green-500/10"} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${isFeatured ? "text-accent" : "text-green-600"}`} />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">{pkg.name}</h3>
                <p className="text-3xl font-bold text-foreground mb-1">{pkg.price}</p>
                <p className="text-xs text-muted-foreground mb-4">{pkg.sub}</p>

                <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Job Platforms</div>
                <ul className="space-y-2 mb-3">
                  {pkg.platforms.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>

                <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 mt-2">Promotion Channels</div>
                <ul className="space-y-2 mb-4 flex-grow">
                  {pkg.promotions.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-3">
                  <a href="https://youjobs.lk/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors">
                    <Globe className="w-3 h-3" /> YouJobs.lk
                  </a>
                  <a href="https://www.findit.lk/jobs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors">
                    <Globe className="w-3 h-3" /> Findit.lk Jobs
                  </a>
                </div>

                <p className="text-xs text-muted-foreground italic mb-4">"{pkg.quote}"</p>

                <a
                  data-selected-service="Staff Recruitment Campaigns"
                  href={buildWa(pkg.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <Button
                    variant={isFeatured ? "default" : "outline"}
                    className={isFeatured ? "w-full bg-accent hover:bg-accent/90 text-white" : "w-full border-accent text-accent hover:bg-accent hover:text-white"}
                  >
                    <MessageSquare className="w-4 h-4 mr-1.5" /> {pkg.cta}
                  </Button>
                </a>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Industries Strip */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-6">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Who We Serve</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Hiring Across Every Sector</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {industries.map((ind) => (
            <span key={ind}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-semibold text-foreground hover:border-accent hover:bg-accent/5 hover:text-accent transition-colors cursor-default">
              <span className="w-2 h-2 rounded-full bg-accent" />
              {ind}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Trusted by Leading Brands</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Companies Hiring Faster with BuzzConnect</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div key={t.author} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-card">
              <div className="text-accent text-sm tracking-widest mb-3">★★★★★</div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <strong className="font-heading text-sm text-foreground block">{t.author}</strong>
                <span className="text-xs text-muted-foreground">{t.company}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Free Bonus / Final CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="mb-16 text-center p-10 rounded-2xl bg-gradient-to-br from-accent to-accent/70 text-white relative overflow-hidden">
        <Mail className="w-12 h-12 mx-auto mb-4 opacity-80" />
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Ready to Fill Your Vacancies Faster?</h2>
        <p className="text-white/85 mb-6 max-w-xl mx-auto text-base">
          Get a free recruitment campaign plan — we'll recommend the right platforms, audience, and budget for your role.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a data-selected-service="Staff Recruitment Campaigns" href={buildWa("Hi Buzz Connect, I want a free recruitment campaign plan.")} target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-accent hover:bg-white/90 font-bold px-8 py-3 text-base">
              <Rocket className="w-5 h-5 mr-2" /> Get Your Free Plan
            </Button>
          </a>
          <Link to="/contact-us">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-accent font-bold px-8 py-3 text-base bg-transparent">
              <Send className="w-5 h-5 mr-2" /> Contact Us
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Frequently Asked Questions – Staff Recruitment Campaigns</h2>
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

      <WhatsAppCTA />

      <RelatedArticles currentPath="/staff-recruitment-campaigns-sri-lanka" />
    </ServicePageLayout>
  );
};

export default StaffRecruitment;
