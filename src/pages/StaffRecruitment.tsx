import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, Target, BarChart3, Mail, Smartphone, MessageSquare, Globe, Search,
  HelpCircle, Briefcase, Users, TrendingUp,
  ArrowRight, Send, Rocket, Zap, Clock, Gift, DollarSign, RefreshCw,
  Building, GraduationCap, ShoppingBag, Factory, Heart, Truck, Crown, Star
} from "lucide-react";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import IndustryStatsBanner from "@/components/IndustryStatsBanner";
import FinditlkAdvantage from "@/components/FinditlkAdvantage";

const achievements = [
  { icon: Users, text: "Attract more qualified candidates" },
  { icon: Briefcase, text: "Fill vacancies faster" },
  { icon: Target, text: "Reach active job seekers on Findit.lk" },
  { icon: Star, text: "Build stronger employer branding" },
  { icon: MessageSquare, text: "Get direct applications & inquiries" },
];

const whoIsFor = [
  { icon: Building, text: "Corporates & SMEs" },
  { icon: Factory, text: "Manufacturing & Logistics" },
  { icon: ShoppingBag, text: "Retail & Hospitality" },
  { icon: GraduationCap, text: "Education Institutes" },
  { icon: Heart, text: "Healthcare & NGOs" },
];

const whyChooseUs = [
  { icon: Users, text: "Access to Sri Lanka's active job-seeker audience" },
  { icon: Mail, text: "Multi-channel campaigns (Email + SMS + WhatsApp)" },
  { icon: Zap, text: "Faster hiring compared to traditional job portals" },
  { icon: DollarSign, text: "Cost-effective alternative to paid recruitment" },
  { icon: Send, text: "Immediate reach and quick results" },
];

const howItWorks = [
  { step: 1, icon: Target, title: "Define Your Hiring Needs", desc: "We identify the right audience segments based on your job roles and locations" },
  { step: 2, icon: Mail, title: "Launch Multi-Channel Campaign", desc: "Your vacancies are promoted via Email, Facebook & Findit.lk" },
  { step: 3, icon: Send, title: "Drive Applications", desc: "Candidates apply via WhatsApp, lead forms, or direct contact" },
  { step: 4, icon: BarChart3, title: "Hire Faster", desc: "Track responses and fill your positions efficiently" },
];

const useCases = [
  { icon: Building, title: "Corporate Hiring Campaigns", audience: "Reach professionals and graduates across Sri Lanka", result: "Fill skilled positions faster" },
  { icon: Factory, title: "Mass Recruitment Drives", audience: "Promote bulk hiring for factories, retail, and logistics", result: "Attract high-volume applicants" },
  { icon: Briefcase, title: "Walk-in Interview Promotions", audience: "Drive foot traffic to walk-in events and open days", result: "Maximize interview attendance" },
  { icon: GraduationCap, title: "Graduate & Internship Recruitment", audience: "Target fresh graduates and interns for entry-level roles", result: "Build your talent pipeline" },
];

const campaignTypes = [
  "Job vacancy email blasts",
  "Walk-in interview promotions",
  "Employer branding campaigns",
  "Urgent hiring alerts",
  "Seasonal recruitment drives",
  "Bulk staff hiring campaigns",
];

const whyBuzzConnect = [
  "Direct access to active job-seeking audience",
  "Industry-focused recruitment strategies",
  "Fast campaign launch and execution",
  "Designed for the Sri Lankan job market",
];

const freeBonusItems = [
  "Best channels for your vacancies",
  "Recommended campaign strategy",
  "Expected application results",
];

const faqs = [
  { q: "What is staff recruitment marketing?", a: "Staff recruitment marketing involves promoting your job vacancies to targeted audiences through digital channels like email, Facebook, SMS, and directory platforms like Findit.lk to attract qualified candidates." },
  { q: "How can Buzz Connect help fill vacancies faster?", a: "We use a multi-channel approach combining email campaigns, Facebook promotions, and Findit.lk job listings to reach thousands of active job seekers and drive applications quickly." },
  { q: "What makes Buzz Connect different from job portals?", a: "Unlike traditional job portals where candidates browse passively, our campaigns actively push your vacancies to targeted audiences via email, social media, and Findit.lk — increasing application rates significantly." },
  { q: "How much does a recruitment campaign cost?", a: "Buzz Connect offers recruitment campaign packages starting from LKR 12,000. Contact us for a customized quote based on your hiring needs." },
  { q: "Can you run mass hiring campaigns?", a: "Yes, our Mass Hiring Campaign is designed for bulk recruitment with multi-platform promotion, multiple ad creatives, and dedicated campaign management." },
];

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
      description: "Multi-channel staff recruitment campaigns in Sri Lanka combining email, Facebook, and Findit.lk visibility to speed up hiring.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Staff Recruitment Marketing"
      title="Hire Faster with Multi-Channel Recruitment Campaigns in Sri Lanka"
      subtitle="Promote your job vacancies across Email, Facebook & Findit.lk — and attract more candidates, faster."
    >
      <SEOHead
        title="Staff Recruitment Campaigns Sri Lanka | Hire Faster"
        description="No.1 recruitment marketing company in Sri Lanka. Fill vacancies faster with email, Facebook & Findit.lk campaigns. Multi-channel recruitment that delivers results."
        canonical="/staff-recruitment-campaigns-sri-lanka"
        keywords="staff recruitment sri lanka, recruitment campaigns sri lanka, hiring campaigns sri lanka, job vacancy promotion, recruitment marketing, staff hiring sri lanka, recruitment agency marketing"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Staff Recruitment Campaigns", url: "/staff-recruitment-campaigns-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      {/* Hero CTA Buttons */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-4 mb-12 -mt-4">
        <a data-selected-service="Staff Recruitment Campaigns" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20run%20a%20recruitment%20campaign.%20Please%20share%20details." target="_blank" rel="noopener noreferrer">
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-base font-bold rounded-full"><Briefcase className="w-5 h-5 mr-2" />Start Hiring Campaign</Button>
        </a>
        <Link to="/contact-us">
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 text-base font-bold rounded-full"><Rocket className="w-5 h-5 mr-2" />Get a Quote</Button>
        </Link>
      </motion.div>

      <IndustryStatsBanner
        icon={Briefcase}
        gradient="gradient-hotel"
        tagline="High-Impact Recruitment Promotion Campaigns"
        stats={[
          { value: "350K+", label: "Email Database" },
          { value: "200K+", label: "Findit.lk Monthly Users" },
          { value: "24hrs", label: "Campaign Launch" },
          { value: "4", label: "Campaign Packages" },
        ]}
      />

      {/* Intro with anchor links */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Finding the right employees in Sri Lanka's competitive job market requires more than just posting on job boards. Buzz Connect helps companies fill vacancies faster using targeted <Link to="/" className="text-muted-foreground underline-offset-2 hover:underline">email marketing Sri Lanka</Link> campaigns that reach active job seekers directly.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          We combine <Link to="/sms-marketing" className="text-muted-foreground underline-offset-2 hover:underline">SMS marketing Sri Lanka</Link> for urgent hiring alerts with <Link to="/whatsapp-marketing" className="text-muted-foreground underline-offset-2 hover:underline">WhatsApp marketing Sri Lanka</Link> to enable direct candidate communication and quick applications.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          To maximize your reach, we integrate <Link to="/social-media-marketing-sri-lanka" className="text-muted-foreground underline-offset-2 hover:underline">social media marketing Sri Lanka</Link> strategies with Findit.lk job listings, ensuring your vacancies are seen by thousands of motivated candidates.
        </p>
      </motion.div>

      {/* What You Can Achieve */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">What You Can Achieve</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Stop Relying Only on Job Portals and Slow Recruitment Methods</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">With BuzzConnect's <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">advertising in Sri Lanka</Link> solutions, you can reach job-ready candidates and fill roles faster.</p>
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
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Perfect For Companies Across Sri Lanka</h2>
          <p className="text-muted-foreground mt-2">Used by corporates, SMEs, and growing businesses</p>
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

      {/* Recruitment Campaign Packages */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Pricing Packages</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Staff Recruitment Campaign Packages</h2>
          <p className="text-accent font-semibold mt-2">🎯 Designed for Visibility, Reach & Faster Hiring</p>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Buzz Connect recruitment campaigns now include YouJobs.lk ad placements across every tier, combining Findit.lk, Facebook, WhatsApp, and Google Jobs indexing to attract more qualified candidates.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20">
            <Globe className="w-3.5 h-3.5" /> Findit.lk listings
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
            <Briefcase className="w-3.5 h-3.5" /> YouJobs.lk ads
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border">
            <MessageSquare className="w-3.5 h-3.5" /> Facebook campaigns
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 border border-green-500/20">
            <Smartphone className="w-3.5 h-3.5" /> WhatsApp apply
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Starter */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border border-border flex flex-col">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Starter Hiring</h3>
            <p className="text-xs text-muted-foreground mb-2">Best for quick hiring needs</p>
            <p className="text-3xl font-bold text-foreground mb-4">LKR 12,000</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground mb-4 flex-1">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Findit.lk job listing</li>
              <li className="flex items-start gap-2"><Briefcase className="w-4 h-4 text-primary shrink-0 mt-0.5" /> YouJobs.lk standard ad</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Facebook campaign (basic targeting)</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> WhatsApp / simple apply method</li>
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              <a href="https://www.findit.lk/jobs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors"><Globe className="w-3 h-3" /> Findit.lk</a>
              <a href="https://youjobs.lk/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary font-semibold text-xs hover:bg-primary/20 transition-colors"><Briefcase className="w-3 h-3" /> YouJobs.lk</a>
            </div>
            <a data-selected-service="Staff Recruitment Campaigns" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Starter%20Hiring%20Campaign%20(LKR%2012%2C000).%20Please%20share%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="hero-outline" className="w-full"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>

          {/* Growth */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border-2 border-accent flex flex-col ring-2 ring-accent/20">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full gradient-accent text-primary text-xs font-bold">⭐ MOST POPULAR</div>
            <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Growth Hiring</h3>
            <p className="text-xs text-muted-foreground mb-2">Ideal for consistent hiring</p>
            <p className="text-3xl font-bold text-foreground mb-4">LKR 25,000</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground mb-4 flex-1">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Featured placement on Findit.lk</li>
              <li className="flex items-start gap-2"><Briefcase className="w-4 h-4 text-primary shrink-0 mt-0.5" /> YouJobs.lk featured ad</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Facebook + Story promotions</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Lead form integration</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Increased campaign reach</li>
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              <a href="https://www.findit.lk/jobs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors"><Globe className="w-3 h-3" /> Findit.lk</a>
              <a href="https://youjobs.lk/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary font-semibold text-xs hover:bg-primary/20 transition-colors"><Briefcase className="w-3 h-3" /> YouJobs.lk</a>
            </div>
            <a data-selected-service="Staff Recruitment Campaigns" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Growth%20Hiring%20Campaign%20(LKR%2025%2C000).%20Please%20share%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="hero" className="w-full"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>

          {/* Pro */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border border-border flex flex-col">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <Crown className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Pro Hiring</h3>
            <p className="text-xs text-muted-foreground mb-2">For high-demand roles</p>
            <p className="text-3xl font-bold text-foreground mb-4">LKR 45,000</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground mb-4 flex-1">
              <li className="flex items-start gap-2"><Star className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Premium visibility on Findit.lk</li>
              <li className="flex items-start gap-2"><Briefcase className="w-4 h-4 text-primary shrink-0 mt-0.5" /> YouJobs.lk premium + featured ad</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Advanced Facebook targeting</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Multi-placement promotion strategy</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Optimized application flow</li>
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              <a href="https://www.findit.lk/jobs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors"><Globe className="w-3 h-3" /> Findit.lk</a>
              <a href="https://youjobs.lk/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary font-semibold text-xs hover:bg-primary/20 transition-colors"><Briefcase className="w-3 h-3" /> YouJobs.lk</a>
            </div>
            <a data-selected-service="Staff Recruitment Campaigns" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Pro%20Hiring%20Campaign%20(LKR%2045%2C000).%20Please%20share%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="hero-outline" className="w-full"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>

          {/* Mass Hiring */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border border-border flex flex-col">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Mass Hiring</h3>
            <p className="text-xs text-muted-foreground mb-2">For bulk recruitment & scaling</p>
            <p className="text-3xl font-bold text-foreground mb-4">Custom</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground mb-4 flex-1">
              <li className="flex items-start gap-2"><Star className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> Multi-platform promotion</li>
              <li className="flex items-start gap-2"><Briefcase className="w-4 h-4 text-primary shrink-0 mt-0.5" /> YouJobs.lk bulk ad slots</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> High-reach campaign setup</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Multiple ad creatives</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Dedicated campaign management</li>
              <li className="flex items-start gap-2"><Star className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" /> TikTok Video Ad</li>
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              <a href="https://www.findit.lk/jobs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors"><Globe className="w-3 h-3" /> Findit.lk</a>
              <a href="https://youjobs.lk/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary font-semibold text-xs hover:bg-primary/20 transition-colors"><Briefcase className="w-3 h-3" /> YouJobs.lk</a>
            </div>
            <a data-selected-service="Staff Recruitment Campaigns" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Mass%20Hiring%20Campaign.%20Please%20share%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="hero-outline" className="w-full"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>
        </div>
      </motion.div>

      {/* What YouJobs.lk adds to every package */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-5xl mx-auto">
        <div className="p-6 rounded-2xl bg-muted/30 border border-border">
          <h3 className="font-heading text-lg font-bold text-foreground mb-5 text-center">What YouJobs.lk adds to every package</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { icon: Search, label: "Google Jobs indexed" },
              { icon: Users, label: "Verified employer profile" },
              { icon: Smartphone, label: "Mobile-first applications" },
              { icon: RefreshCw, label: "Daily listing refresh" },
              { icon: Gift, label: "Free to apply for candidates" },
              { icon: TrendingUp, label: "Active Sri Lankan talent pool" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border shadow-card">
                <item.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>


      {/* Multi-Channel Upsell */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Scale Your Recruitment</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">📈 Need Larger Reach for Mass Hiring?</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">For companies with ongoing hiring needs or large-scale recruitment drives — we offer advanced multi-channel campaigns across Sri Lanka.</p>
        </div>

        <Link to="/multi-channel-marketing-sri-lanka" className="block p-8 pt-10 rounded-2xl upsell-highlight mb-8 relative overflow-hidden cursor-pointer hover:scale-[1.01] transition-transform duration-300">
          <div className="absolute top-0 right-0 px-5 py-2 rounded-bl-xl bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider animate-pulse">🔥 Most Popular</div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">🌐 Upgrade Recruitment Campaigns to Multi-Channel</h3>
          <p className="text-muted-foreground mb-5">Combine your recruitment promotions with:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {[
              { icon: Mail, label: "Email Marketing" },
              { icon: Smartphone, label: "SMS Campaigns" },
              { icon: MessageSquare, label: "WhatsApp Marketing" },
              { icon: Globe, label: "Exposure on Findit.lk" },
            ].map((ch, i) => (
              <motion.div key={ch.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-accent/5 border border-accent/20 text-center">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <ch.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-foreground font-medium text-sm">{ch.label}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-accent font-semibold text-center text-lg">👉 Reach hundreds of thousands of candidates within days</p>
        </Link>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Why Companies Choose BuzzConnect for Recruitment</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {whyChooseUs.map((item, i) => (
            <motion.div key={item.text} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-card">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-secondary-foreground" />
              </div>
              <span className="text-foreground font-medium text-sm">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* How It Works */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Process</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">How Staff Recruitment Campaigns Work</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {howItWorks.map((step, i) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-card shadow-card border border-border">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full gradient-accent flex items-center justify-center text-sm font-bold text-primary">{step.step}</div>
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mt-3 mb-4">
                <step.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Use Cases */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Use Cases</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Recruitment Marketing Use Cases</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {useCases.map((uc, i) => (
            <motion.div key={uc.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card shadow-card border border-border hover:border-accent/40 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                  <uc.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg">{uc.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{uc.audience}</p>
              <p className="text-sm text-accent font-semibold flex items-center gap-1"><ArrowRight className="w-4 h-4" />{uc.result}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <FinditlkAdvantage
        title="Findit.lk Jobs & Recruitment Advantage"
        description="Get your job vacancies listed and promoted in Findit.lk's Jobs category for continuous visibility to active job seekers searching for opportunities in Sri Lanka."
        gradient="gradient-hotel"
        links={[
          { label: "Jobs & Careers", url: "https://www.findit.lk/jobs" },
        ]}
        benefits={["Access to active job seekers", "High visibility in Jobs category", "Continuous promotion for weeks", "Better applications than traditional job boards"]}
      />

      {/* What You Get */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-muted/30 border border-border">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-4">📊 What You Get with Every Campaign</h2>
        <p className="text-muted-foreground mb-4">Each campaign is designed to deliver:</p>
        <ul className="space-y-3">
          {["Strong visibility across platforms", "Reach to active job seekers", "Consistent promotion throughout the campaign", "Increased chances of receiving quality applications"].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-muted-foreground font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Optional Add-Ons */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Add-Ons</span>
          <h2 className="font-heading text-2xl font-bold text-foreground mt-2">Optional Add-Ons</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["Priority campaign boosting", "Creative design for job ads", "Featured placement upgrades", "Application handling support"].map((item) => (
            <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-card">
              <Star className="w-5 h-5 text-accent shrink-0" />
              <span className="text-foreground font-medium text-sm">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 📊 Real Campaign Results */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <div className="p-8 rounded-2xl bg-card shadow-card border border-border text-center">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Proven Results</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-4">Real Recruitment Campaign Results</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">See how companies in Sri Lanka hired faster, attracted quality candidates, and filled positions efficiently with BuzzConnect.</p>
          <Link to="/staff-recruitment-case-studies-sri-lanka">
            <Button className="bg-accent hover:bg-accent/90 text-white font-bold">
              <BarChart3 className="w-5 h-5 mr-2" /> View Recruitment Case Studies
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Why BuzzConnect */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6">Why BuzzConnect for Recruitment Marketing?</h2>
        <ul className="space-y-3">
          {whyBuzzConnect.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-muted-foreground font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Free Bonus */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <div className="p-8 rounded-2xl border-2 border-accent/30 bg-accent/5 relative overflow-hidden">
          <div className="absolute top-4 right-4 opacity-10">
            <Gift className="w-24 h-24 text-accent" />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Gift className="w-6 h-6 text-accent" />
            </div>
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Free Bonus</span>
              <h2 className="font-heading text-xl font-bold text-foreground">Get a FREE Recruitment Campaign Plan</h2>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">Tailored to your hiring needs. We will show you:</p>
          <ul className="space-y-2 mb-6">
            {freeBonusItems.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <a data-selected-service="Staff Recruitment Campaigns" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27d%20like%20a%20FREE%20Recruitment%20Campaign%20Plan%20for%20my%20company." target="_blank" rel="noopener noreferrer">
            <Button className="bg-accent hover:bg-accent/90 text-white font-bold"><Gift className="w-4 h-4 mr-2" />Get Your Free Plan</Button>
          </a>
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

      {/* Urgency */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <div className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20 text-center">
          <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
            <Clock className="w-7 h-7 text-destructive" />
          </div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3">Limited Recruitment Campaign Slots Available</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-2">We only take a limited number of recruitment campaigns each month to ensure quality results.</p>
          <p className="text-foreground font-semibold">Book your campaign now and start receiving applications.</p>
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-10 rounded-2xl gradient-hero text-white relative overflow-hidden">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Promote Your Job Vacancies Where Candidates Are Already Active</h2>
        <p className="text-primary-foreground/80 mb-4 max-w-xl mx-auto">Start your recruitment campaign today — reach more candidates and fill your vacancies faster.</p>
        <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">Powered by <strong>multi-channel campaigns</strong> and <strong>Findit.lk</strong> job listings.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a data-selected-service="Staff Recruitment Campaigns" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20launch%20a%20recruitment%20campaign." target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base">Start Your Campaign <ArrowRight className="inline w-4 h-4 ml-1" /></button>
          </a>
          <Link to="/contact-us">
            <button className="px-8 py-3 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent/10 transition-colors text-base">Get Proposal</button>
          </Link>
        </div>
      </motion.div>

      <WhatsAppCTA />

      <RelatedArticles currentPath="/staff-recruitment-campaigns-sri-lanka" />
    </ServicePageLayout>
  );
};

export default StaffRecruitment;
