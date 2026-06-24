import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, Target, Smartphone, MessageSquare, Globe,
  HelpCircle, Briefcase, Users, TrendingUp,
  ArrowRight, Rocket, Zap, DollarSign,
  Crown, Rocket as RocketIcon
} from "lucide-react";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";

const WA_NUMBER = "94771976351";

const stats = [
  { value: "350K+", label: "Candidate database" },
  { value: "3", label: "Job platforms per campaign" },
  { value: "24hrs", label: "Campaign launch" },
  { value: "4", label: "Campaign packages" },
];

const platforms = [
  {
    id: "yj",
    name: "YouJobs.lk",
    tag: "Job portal · Google indexed",
    headline: "Reach candidates actively searching",
    desc: "YouJobs.lk is Sri Lanka's modern job portal — every listing is indexed on Google Jobs within hours. Candidates apply directly, for free, from any device.",
    features: [
      "Google Jobs indexed within hours",
      "Verified employer badge on listing",
      "Mobile-first apply — zero friction for candidates",
      "IT, finance, sales, engineering, remote roles",
      "Free to apply for all candidates",
    ],
    stats: [
      { value: "100%", label: "Google Jobs indexed" },
      { value: "Free", label: "For candidates" },
    ],
    color: "green",
    link: "https://youjobs.lk/",
  },
  {
    id: "fd",
    name: "Findit.lk",
    tag: "Directory + jobs · 200K users",
    headline: "Dominate Sri Lanka's top job directory",
    desc: "Findit.lk is Sri Lanka's most trusted online directory. With 200K+ monthly users browsing jobs, your listing gets continuous visibility to motivated candidates from Colombo to Jaffna.",
    features: [
      "200K+ monthly job seekers on the platform",
      "Featured placement in category (Growth+)",
      "Premium top-of-category visibility (Pro+)",
      "Island-wide coverage across all cities",
      "All job categories — factory to management",
    ],
    stats: [
      { value: "200K+", label: "Monthly users" },
      { value: "Weeks", label: "Continuous visibility" },
    ],
    color: "red",
    link: "https://www.findit.lk/jobs",
  },
  {
    id: "bc",
    name: "BuzzConnect",
    tag: "Facebook · Findit.lk · YouJobs.lk",
    headline: "Push your vacancy directly to candidates",
    desc: "Unlike portals where candidates must find you, BuzzConnect actively promotes your vacancy via Facebook ads — driving direct responses from job seekers immediately.",
    features: [
      "Facebook & Instagram targeted campaigns",
      "Campaign launched within 24 hours",
    ],
    stats: [
      { value: "Fast", label: "Direct responses" },
      { value: "24 hrs", label: "Go live" },
    ],
    color: "blue",
    link: "#packages",
  },
];

const whyCards = [
  { icon: RocketIcon, title: "Active push, not passive waiting", desc: "Your vacancy reaches thousands of job seekers via Facebook ads the same day — not buried in a listing no one sees." },
  { icon: Globe, title: "3 platforms, one campaign", desc: "YouJobs.lk + Findit.lk + Facebook in a single package. No managing multiple vendors." },
  { icon: Target, title: "Targeted by role and location", desc: "Reach candidates segmented by industry, experience level, and city — not a blanket blast to irrelevant people." },
  { icon: Zap, title: "24-hour campaign launch", desc: "Tell us your role today, receive applications tomorrow. No lengthy setups or account approvals required." },
  { icon: DollarSign, title: "More cost-effective than agencies", desc: "Starting at LKR 12,000, you get multi-platform reach that would cost 5× more through traditional agencies." },
  { icon: Crown, title: "Proven results across industries", desc: "Used by DFCC Bank, Radisson, Swarnamahal, Best Western and hundreds of Sri Lankan businesses." },
];

const packages = [
  {
    name: "Starter hiring",
    sub: "Quick, single-role hiring",
    price: "LKR 12,000",
    featured: false,
    platforms: ["YouJobs.lk standard listing", "Findit.lk job listing"],
    promotions: ["Facebook basic targeting"],
    cta: "Get in touch",
    message: "Hi Buzz Connect, Starter Hiring Campaign (LKR 12,000).",
  },
  {
    name: "Growth hiring",
    sub: "Consistent ongoing hiring",
    price: "LKR 25,000",
    featured: true,
    platforms: ["YouJobs.lk featured listing", "Findit.lk featured placement"],
    promotions: ["Facebook + Story promotions", "Lead form integration", "Increased campaign reach"],
    cta: "Get in touch",
    message: "Hi Buzz Connect, Growth Hiring Campaign (LKR 25,000).",
  },
  {
    name: "Pro hiring",
    sub: "High-demand & skilled roles",
    price: "LKR 45,000",
    featured: false,
    platforms: ["YouJobs.lk premium + featured", "Findit.lk premium category top"],
    promotions: ["Advanced Facebook targeting", "Multi-placement strategy", "Optimised application flow"],
    cta: "Get in touch",
    message: "Hi Buzz Connect, Pro Hiring Campaign (LKR 45,000).",
  },
  {
    name: "Mass hiring",
    sub: "Bulk recruitment drives",
    price: "Custom",
    priceNote: "pricing",
    featured: false,
    platforms: ["YouJobs.lk bulk ad slots", "Findit.lk multi-listing"],
    promotions: ["Full multi-platform blast", "Dedicated campaign manager", "Multiple creatives + TikTok video"],
    cta: "Get a custom quote",
    message: "Hi Buzz Connect, Mass Hiring Campaign custom quote.",
  },
];

const process = [
  { step: 1, title: "Share your hiring brief", desc: "Tell us the role, location, and requirements. We handle the rest." },
  { step: 2, title: "We create the campaign", desc: "Our team designs the job ad and sets up listings on YouJobs.lk, Findit.lk, and Facebook." },
  { step: 3, title: "Campaign goes live", desc: "Your vacancy is pushed live across all platforms within 24 hours. Facebook ads go live immediately." },
  { step: 4, title: "Applications arrive", desc: "Candidates apply via WhatsApp, lead forms, or direct contact. Review and hire fast." },
];

const industries = [
  { label: "Banking & Finance", color: "#1B4FD8" },
  { label: "Manufacturing & Logistics", color: "#39B54A" },
  { label: "Retail & FMCG", color: "#E8261A" },
  { label: "Hospitality & Hotels", color: "#F5A623" },
  { label: "IT & Software", color: "#8B5CF6" },
  { label: "Education & NGOs", color: "#0EA5E9" },
  { label: "Healthcare", color: "#EF4444" },
  { label: "Engineering", color: "#F97316" },
  { label: "Sales & Marketing", color: "#10B981" },
  { label: "Corporate & SMEs", color: "#6B7280" },
  { label: "Graduate & Internship", color: "#EC4899" },
  { label: "Walk-in Recruitment", color: "#D97706" },
];

const testimonials = [
  {
    text: "We filled 12 factory positions in under a week. The combination of Facebook ads and YouJobs.lk listing brought in far more applicants than we expected.",
    author: "HR Manager",
    company: "Manufacturing company, Katunayake",
    initials: "HR",
    color: "#1B4FD8",
  },
  {
    text: "BuzzConnect's campaign reached candidates we couldn't find on traditional portals. The Findit.lk featured listing kept our role visible for weeks.",
    author: "General Manager",
    company: "Hospitality group, Colombo",
    initials: "GM",
    color: "#39B54A",
  },
  {
    text: "The campaign results were a game changer — candidates responded within hours. Best value for bulk recruitment drives in Sri Lanka.",
    author: "Admin Director",
    company: "Retail chain, Sri Lanka",
    initials: "AD",
    color: "#F5A623",
  },
];

const faqs = [
  { q: "What is staff recruitment marketing?", a: "Staff recruitment marketing involves promoting your job vacancies to targeted audiences through digital channels like email, Facebook, SMS, and directory platforms like Findit.lk to attract qualified candidates." },
  { q: "How can Buzz Connect help fill vacancies faster?", a: "We use a multi-channel approach combining email campaigns, Facebook promotions, and Findit.lk job listings to reach thousands of active job seekers and drive applications quickly." },
  { q: "What makes Buzz Connect different from job portals?", a: "Unlike traditional job portals where candidates browse passively, our campaigns actively push your vacancies to targeted audiences via email, social media, and Findit.lk — increasing application rates significantly." },
  { q: "How much does a recruitment campaign cost?", a: "Buzz Connect offers recruitment campaign packages starting from LKR 12,000. Contact us for a customized quote based on your hiring needs." },
  { q: "Can you run mass hiring campaigns?", a: "Yes, our Mass Hiring Campaign is designed for bulk recruitment with multi-platform promotion, multiple ad creatives, and dedicated campaign management." },
];

const colorMap: Record<string, { top: string; badgeBg: string; badgeText: string; check: string; stat: string; }> = {
  green: {
    top: "bg-green-500",
    badgeBg: "bg-green-50",
    badgeText: "text-green-700",
    check: "text-green-500",
    stat: "text-green-600",
  },
  red: {
    top: "bg-red-500",
    badgeBg: "bg-red-50",
    badgeText: "text-red-700",
    check: "text-red-500",
    stat: "text-red-600",
  },
  blue: {
    top: "bg-blue-600",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700",
    check: "text-blue-500",
    stat: "text-blue-600",
  },
};

const buildWhatsAppHref = (message: string) => {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}%20Please%20share%20details.`;
};

const StaffRecruitment = () => {
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
      name: "Staff Recruitment Campaigns Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Multi-channel staff recruitment campaigns in Sri Lanka combining email, Facebook, Findit.lk and YouJobs.lk visibility to speed up hiring.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="No.1 Recruitment Marketing · Sri Lanka"
      title="Fill vacancies 3× faster with Sri Lanka's best hiring campaign"
      subtitle="One campaign. Three powerful job platforms. BuzzConnect pushes your vacancies to YouJobs.lk, Findit.lk and Facebook — reaching active job seekers where they already are."
    >
      <SEOHead
        title="Staff Recruitment Campaigns Sri Lanka | Hire Faster"
        description="No.1 recruitment marketing company in Sri Lanka. Fill vacancies faster with email, Facebook, Findit.lk and YouJobs.lk campaigns. Multi-channel recruitment that delivers results."
        canonical="/staff-recruitment-campaigns-sri-lanka"
        keywords="staff recruitment sri lanka, recruitment campaigns sri lanka, hiring campaigns sri lanka, job vacancy promotion, recruitment marketing, staff hiring sri lanka, recruitment agency marketing"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Staff Recruitment Campaigns", url: "/staff-recruitment-campaigns-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      {/* Hero Platform Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-16 -mt-6 sm:-mt-10 bg-navy -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: "BC", label: "BuzzConnect Facebook Ads", sub: "Targeted Facebook & Instagram ads reaching active job seekers island-wide", stat: "350K+", statLabel: "Database", color: "blue" },
            { icon: "YJ", label: "YouJobs.lk", sub: "Google Jobs–indexed listings. Free to apply, verified employers", stat: "100%", statLabel: "Google Jobs", color: "green" },
            { icon: "FD", label: "Findit.lk Jobs", sub: "Sri Lanka's trusted directory with 200K+ monthly job seekers", stat: "200K+", statLabel: "Monthly users", color: "red" },
          ].map((card) => {
            const c = colorMap[card.color];
            return (
              <div key={card.label} className="flex items-center gap-3 p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm">
                <div className={`w-11 h-11 rounded-lg ${c.badgeBg} ${c.badgeText} flex items-center justify-center text-sm font-bold shrink-0`}>
                  {card.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-white mb-0.5">{card.label}</h4>
                  <p className="text-xs text-white/60 leading-snug">{card.sub}</p>
                </div>
                <div className="text-right shrink-0">
                  <strong className="text-lg font-bold text-accent block leading-none">{card.stat}</strong>
                  <span className="text-[10px] text-white/50 uppercase tracking-wider">{card.statLabel}</span>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 -mx-4 sm:-mx-6 lg:-mx-8"
      >
        <div className="bg-blue-600 py-7">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div key={s.label} className={`text-center ${i % 2 === 0 ? "" : "md:border-l md:border-white/15"} ${i > 1 ? "md:border-l md:border-white/15" : ""}`}>
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-white leading-none">{s.value}</div>
                  <div className="text-xs text-white/60 mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Platform Power */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
        id="platforms"
      >
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider flex items-center justify-center gap-2">
            <span className="w-5 h-0.5 bg-accent rounded-full" /> Platform power
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-3">Three platforms. Maximum reach.</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-base">Every BuzzConnect recruitment campaign simultaneously activates all three platforms — so you're not just posting a job, you're running a full hiring campaign.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {platforms.map((p) => {
            const c = colorMap[p.color];
            return (
              <div key={p.id} className="relative rounded-2xl bg-card border border-border p-6 overflow-hidden shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1">
                <div className={`absolute top-0 left-0 right-0 h-1 ${c.top}`} />
                <div className="flex items-center gap-2.5 mb-4 mt-1">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${c.badgeBg} ${c.badgeText}`}>{p.name}</span>
                  <span className="text-xs text-muted-foreground">{p.tag}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{p.headline}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-col gap-2 mb-5">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle className={`w-4 h-4 ${c.check} shrink-0 mt-0.5`} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {p.stats.map((s) => (
                    <div key={s.label} className="bg-muted rounded-lg p-3">
                      <strong className={`text-lg font-bold ${c.stat} block leading-tight`}>{s.value}</strong>
                      <span className="text-xs text-muted-foreground">{s.label}</span>
                    </div>
                  ))}
                </div>
                {p.link && p.link !== "#packages" && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 inline-flex items-center gap-1.5 text-xs font-semibold ${c.stat} hover:underline`}
                  >
                    <Globe className="w-3.5 h-3.5" /> Visit {p.name}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Why BuzzConnect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 bg-navy"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider flex items-center justify-center gap-2">
              <span className="w-5 h-0.5 bg-accent rounded-full" /> Why BuzzConnect
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-3">What makes BuzzConnect different</h2>
            <p className="text-white/60 mt-3 max-w-2xl mx-auto text-base">Traditional job portals wait for candidates to visit. BuzzConnect finds them first — across every channel they use.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyCards.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.07] transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <w.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{w.title}</h4>
                <p className="text-sm text-white/55 leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Packages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
        id="packages"
      >
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider flex items-center justify-center gap-2">
            <span className="w-5 h-0.5 bg-accent rounded-full" /> Campaign packages
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-3">Choose your hiring power</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-base">Every package includes YouJobs.lk + Findit.lk listings plus BuzzConnect multi-channel promotion. Scale up for more reach.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-5 flex flex-col ${pkg.featured ? "bg-blue-50 border-2 border-blue-500 shadow-lg" : "bg-card border border-border shadow-card"} hover:-translate-y-1 hover:shadow-card-hover transition-all`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-600 text-white text-xs font-bold whitespace-nowrap">
                  ⭐ Most popular
                </div>
              )}
              <div className="mb-1">
                <h3 className="font-heading text-lg font-bold text-foreground">{pkg.name}</h3>
                <p className="text-xs text-muted-foreground">{pkg.sub}</p>
              </div>
              <div className="font-heading text-2xl font-bold text-foreground mb-1">
                {pkg.price} {pkg.priceNote && <small className="text-sm font-medium text-muted-foreground font-body">/{pkg.priceNote}</small>}
              </div>
              <div className="h-px bg-border my-4" />
              <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Job platforms</div>
              <div className="flex flex-col gap-2 mb-3 flex-1">
                {pkg.platforms.map((feat) => (
                  <div key={feat} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-2 mb-1">Promotion channels</div>
                {pkg.promotions.map((feat) => (
                  <div key={feat} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <a href="https://www.findit.lk/jobs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-red-50 text-red-600 font-semibold text-xs hover:bg-red-100 transition-colors">
                  <Globe className="w-3 h-3" /> Findit.lk
                </a>
                <a href="https://youjobs.lk/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-green-50 text-green-600 font-semibold text-xs hover:bg-green-100 transition-colors">
                  <Briefcase className="w-3 h-3" /> YouJobs.lk
                </a>
              </div>
              <a
                data-selected-service="Staff Recruitment Campaigns"
                href={buildWhatsAppHref(pkg.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >
                <Button className={`w-full ${pkg.featured ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-navy hover:bg-navy/90 text-white"}`}>
                  <MessageSquare className="w-4 h-4 mr-1.5" /> {pkg.cta}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
        id="process"
      >
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider flex items-center justify-center gap-2">
            <span className="w-5 h-0.5 bg-accent rounded-full" /> How it works
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-3">From brief to applications in 24 hours</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-base">We handle everything from listing creation to platform publishing. You just interview the candidates.</p>
        </div>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
          {process.map((p) => (
            <div key={p.step} className="relative text-center">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white font-heading text-xl font-bold flex items-center justify-center mx-auto mb-4 relative z-10">
                {p.step}
              </div>
              <h4 className="font-heading text-base font-bold text-foreground mb-2">{p.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Industries */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 py-16 bg-muted/30 rounded-3xl -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider flex items-center justify-center gap-2">
              <span className="w-5 h-0.5 bg-accent rounded-full" /> Who we serve
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-3">Works for every industry in Sri Lanka</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-base">From garment factories in Katunayake to finance firms in Colombo 3 — BuzzConnect fills roles at every level and every sector.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span
                key={ind.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-semibold text-foreground hover:border-accent hover:bg-accent/5 hover:text-accent transition-colors cursor-default"
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: ind.color }} />
                {ind.label}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 bg-navy"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider flex items-center justify-center gap-2">
              <span className="w-5 h-0.5 bg-accent rounded-full" /> Trusted by leading brands
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-3">Companies hiring faster with BuzzConnect</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="text-accent text-sm tracking-widest mb-3">★★★★★</div>
                <p className="text-sm text-white/70 leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <strong className="text-sm text-white block">{t.author}</strong>
                    <span className="text-xs text-white/50">{t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center p-10 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-900 text-white relative overflow-hidden"
      >
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">Ready to fill your vacancies faster?</h2>
        <p className="text-white/75 mb-6 max-w-xl mx-auto text-base">Start your campaign today — reach 350K+ candidates across Sri Lanka's top job platforms.</p>
        <a
          data-selected-service="Staff Recruitment Campaigns"
          href={buildWhatsAppHref("Hi Buzz Connect, I want to launch a recruitment campaign.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-white text-blue-900 hover:bg-white/90 font-bold px-8 py-3 text-base">
            <Rocket className="w-5 h-5 mr-2" /> Start your campaign
          </Button>
        </a>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {[
            { label: "YouJobs.lk", color: "#39B54A" },
            { label: "Findit.lk", color: "#FF7A72" },
            { label: "Facebook Ads", color: "#4267B2" },
          ].map((chip) => (
            <span key={chip.label} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white/80">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: chip.color }} />
              {chip.label}
            </span>
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
