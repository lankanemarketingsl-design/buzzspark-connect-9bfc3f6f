import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, Target, BarChart3, Mail, Smartphone, MessageSquare, Globe,
  HelpCircle, Calendar, Star, Users, TrendingUp,
  ArrowRight, Send, Rocket, Zap, Clock, Gift, DollarSign, RefreshCw,
  Music, Briefcase, GraduationCap, ShoppingBag, Ticket, Megaphone, PartyPopper
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import IndustryStatsBanner from "@/components/IndustryStatsBanner";
import FinditlkAdvantage from "@/components/FinditlkAdvantage";

const achievements = [
  { icon: Users, text: "Maximize event attendance" },
  { icon: Ticket, text: "Drive ticket sales & registrations" },
  { icon: Calendar, text: "Promote events across multiple channels" },
  { icon: Star, text: "Reach high-intent audiences via Findit.lk" },
  { icon: MessageSquare, text: "Get direct inquiries & RSVPs" },
];

const whoIsFor = [
  { icon: Music, text: "Concerts & Shows" },
  { icon: Briefcase, text: "Corporate Events" },
  { icon: GraduationCap, text: "Workshops & Seminars" },
  { icon: ShoppingBag, text: "Product Launches" },
  { icon: PartyPopper, text: "Festivals & Exhibitions" },
];

const whyChooseUs = [
  { icon: Users, text: "Access to event-seeking Sri Lankan audience" },
  { icon: Mail, text: "Multi-channel campaigns (Email + SMS + WhatsApp)" },
  { icon: Zap, text: "Faster reach compared to traditional advertising" },
  { icon: DollarSign, text: "Cost-effective alternative to paid ads" },
  { icon: Send, text: "Immediate reach and quick results" },
];

const howItWorks = [
  { step: 1, icon: Target, title: "Audience Targeting", desc: "We identify the right audience based on your event type and location" },
  { step: 2, icon: Send, title: "Multi-Channel Launch", desc: "Your event is promoted via Email, SMS, WhatsApp & Findit.lk" },
  { step: 3, icon: Megaphone, title: "Engagement & Reminders", desc: "We send event reminders, ticket updates & last-minute promotions" },
  { step: 4, icon: BarChart3, title: "Conversions & Attendance", desc: "Capture interested users and convert them into attendees" },
];

const useCases = [
  { icon: Music, title: "Concert & Show Promotions", audience: "Reach music lovers and entertainment seekers across Sri Lanka", result: "Sell out tickets faster" },
  { icon: Briefcase, title: "Corporate Events & Conferences", audience: "Target professionals and industry decision makers", result: "Maximize professional attendance" },
  { icon: GraduationCap, title: "Workshops & Training Programs", audience: "Reach learners and professionals seeking skills development", result: "Fill all available seats" },
  { icon: ShoppingBag, title: "Product Launches & Brand Activations", audience: "Generate buzz and attract media, influencers & customers", result: "Maximum launch impact" },
];

const campaignTypes = [
  "Event launch campaigns",
  "Early bird promotions",
  "Ticket sales campaigns",
  "Countdown campaigns",
  "Last-minute push campaigns",
  "Post-event follow-ups",
];

const whyBuzzConnect = [
  "Direct access to event-seeking audience",
  "Industry-focused campaign strategies",
  "Fast campaign launch and execution",
  "Designed for Sri Lankan events market",
];

const freeBonusItems = [
  "Best audience for your event",
  "Recommended campaign strategy",
  "Expected attendance results",
];

const faqs = [
  { q: "What is event marketing in Sri Lanka?", a: "Event marketing involves promoting your event through strategic multi-channel campaigns to attract the right audience, boost attendance, and drive ticket sales using platforms like email, SMS, WhatsApp, and Findit.lk." },
  { q: "How can Buzz Connect help promote my event?", a: "We use a multi-channel approach combining email campaigns, SMS alerts, WhatsApp messaging, and Findit.lk visibility to reach thousands of potential attendees and drive registrations." },
  { q: "What makes Buzz Connect different from other event marketing agencies?", a: "Our unique combination of direct marketing (email, SMS, WhatsApp) with Findit.lk event listings provides both instant reach and continuous visibility — something traditional agencies cannot offer." },
  { q: "How much does event marketing cost in Sri Lanka?", a: "Buzz Connect offers cost-effective event marketing packages starting from LKR 75,000. Contact us for a customized quote based on your event type and target audience." },
  { q: "What types of events can you promote?", a: "We promote all types of events including concerts, corporate events, workshops, seminars, exhibitions, product launches, festivals, and brand activations across Sri Lanka." },
  { q: "Why is Buzz Connect the best event marketing agency in Sri Lanka?", a: "Buzz Connect is the best event marketing agency because it offers fast campaign launch, instant exposure on Findit.lk's Events category, and easy, cost-effective multi-channel solutions to maximize attendance and ticket sales quickly." },
];

const EventMarketing = () => {
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
      name: "Event Marketing Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Multi-channel event marketing services in Sri Lanka combining email, SMS, WhatsApp, and Findit.lk visibility to maximize event attendance and ticket sales.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Event Marketing"
      title="Event Marketing Sri Lanka – Promote Concerts, Corporate Events & Large-Scale Campaigns"
      subtitle="Maximize event visibility, increase registrations, and drive ticket sales using powerful multi-channel campaigns including Findit.lk."
    >
      <SEOHead
        title="Event Marketing Sri Lanka | Event Marketing Agency"
        description="No.1 event marketing company in Sri Lanka. Promote concerts, corporate events, workshops & festivals via email, SMS, WhatsApp & Findit.lk. Multi-channel campaigns that deliver results."
        canonical="/event-marketing-sri-lanka"
        keywords="event marketing sri lanka, concert marketing sri lanka, event promotion sri lanka, event advertising sri lanka, workshop marketing sri lanka, corporate event promotion, festival marketing sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Event Marketing", url: "/event-marketing-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      {/* Hero CTA Buttons */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-4 mb-12 -mt-4">
        <a data-selected-service="Event Marketing" href="https://wa.me/94771976351?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20promote%20my%20event.%20Please%20share%20details." target="_blank" rel="noopener noreferrer">
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-base font-bold rounded-full"><Ticket className="w-5 h-5 mr-2" />Promote My Event</Button>
        </a>
        <Link to="/contact-us">
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 text-base font-bold rounded-full"><Rocket className="w-5 h-5 mr-2" />Start Campaign</Button>
        </Link>
      </motion.div>

      <IndustryStatsBanner
        icon={Calendar}
        gradient="gradient-event"
        tagline="High-Impact Event Promotion Campaigns"
        stats={[
          { value: "500+", label: "Events Promoted" },
          { value: "1M+", label: "Audience Reached" },
          { value: "350K+", label: "Email Database" },
          { value: "24hrs", label: "Campaign Launch" },
        ]}
      />

      {/* Intro Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <div className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-4">🎯 What is Event Marketing?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Event marketing is the process of promoting an event through strategic campaigns to attract the right audience and boost attendance. We promote all types of events including:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
            {["🎤 Musical shows & concerts", "🎉 Festivals & public events", "🏢 Corporate conferences", "🎓 Workshops & seminars", "🏬 Exhibitions & trade shows", "🛍 Product launches"].map(item => (
              <div key={item} className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 text-sm text-foreground font-medium">{item}</div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Our event promotion strategy starts with <Link to="/" className="text-muted-foreground underline-offset-2 hover:underline">email marketing Sri Lanka</Link> to build early awareness and drive registrations among targeted audiences.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            As event day approaches, we deploy <Link to="/sms-marketing" className="text-muted-foreground underline-offset-2 hover:underline">SMS marketing Sri Lanka</Link> for countdown reminders and last-minute ticket pushes, while <Link to="/whatsapp-marketing" className="text-muted-foreground underline-offset-2 hover:underline">WhatsApp marketing Sri Lanka</Link> handles direct RSVP confirmations and attendee engagement.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For sustained pre-event buzz and post-event follow-ups, we integrate <Link to="/social-media-marketing-sri-lanka" className="text-muted-foreground underline-offset-2 hover:underline">social media marketing Sri Lanka</Link> to amplify reach and create shareable content.
          </p>
        </div>
      </motion.div>

      {/* What You Can Achieve */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">What You Can Achieve</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Stop Relying Only on Social Media for Event Promotion</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">With BuzzConnect's <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">advertising in Sri Lanka</Link> solutions, you can reach event-ready audiences and drive real attendance.</p>
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
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Who Event Marketing Is Designed For</h2>
          <p className="text-muted-foreground mt-2">Used by event organizers, venues, and businesses across Sri Lanka</p>
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

      {/* Why Multi-Channel Works Better */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <div className="p-8 rounded-2xl bg-card shadow-card border border-border">
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-4">🚀 Why Multi-Channel Works Better Than Facebook Ads</h2>
          <p className="text-muted-foreground mb-4">Relying only on Facebook limits your reach. With multi-channel campaigns — including Findit.lk — you connect with both:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2 p-3 rounded-lg bg-accent/5 border border-accent/20">
              <CheckCircle className="w-4 h-4 text-accent shrink-0" />
              <span className="text-foreground font-medium text-sm">Active search users (Findit.lk)</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-accent/5 border border-accent/20">
              <CheckCircle className="w-4 h-4 text-accent shrink-0" />
              <span className="text-foreground font-medium text-sm">Direct communication audiences</span>
            </div>
          </div>
          <p className="text-accent font-semibold">This leads to better conversions and stronger campaign performance.</p>
          <p className="text-muted-foreground mt-3">👉 Learn more about our <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel strategy</Link></p>
        </div>
      </motion.div>

      {/* Advertising Packages */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Pricing Packages</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Choose the Right Event Marketing Package for Your Campaign</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Every package includes Findit.lk event listing, remarketing, and multi-channel promotion to maximize attendance.</p>
          <p className="text-accent font-semibold mt-3 max-w-2xl mx-auto">Event organizers typically recover their investment with just 50–100 ticket sales.</p>
          <div className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/30">
            <span className="text-accent font-bold text-sm">🎉 Multi-Event Subscription = 10% Discount on All Packages</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Event Launch Starter */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border border-border flex flex-col">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <Ticket className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Event Launch Starter</h3>
            <p className="text-3xl font-bold text-foreground mb-1">LKR 75,000</p>
            <p className="text-xs text-muted-foreground mb-4">Best for small events, workshops & local promotions</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground mb-6 flex-1">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 1 Targeted Email Campaign (event audience)</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Featured event listing on Findit.lk</li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href="https://www.findit.lk/events" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors">🔗 View on Findit.lk <ArrowRight className="w-3 h-3" /></a>
              </li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Findit.lk Banner Placement (events category)</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 7-day visibility boost</li>
              <li className="flex items-start gap-2"><RefreshCw className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Basic Remarketing (repeat exposure)</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Event ad creative (poster + offer)</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mb-4">"Generate initial event registrations & awareness"</p>
            <a data-selected-service="Event Marketing" href="https://wa.me/94771976351?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Event%20Launch%20Starter%20Package%20(LKR%2075%2C000).%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="hero-outline" className="w-full"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>

          {/* Event Growth Campaign */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border-2 border-accent flex flex-col ring-2 ring-accent/20">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full gradient-accent text-primary text-xs font-bold">🔥 MOST POPULAR</div>
            <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Event Growth Campaign</h3>
            <p className="text-3xl font-bold text-foreground mb-1">LKR 125,000</p>
            <p className="text-xs text-muted-foreground mb-4">Best for consistent ticket sales & event promotions</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground mb-6 flex-1">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 2–3 Targeted Email Campaigns (segmented)</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Premium Findit.lk event placement</li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href="https://www.findit.lk/events" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors">🔗 View on Findit.lk <ArrowRight className="w-3 h-3" /></a>
              </li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Findit.lk Banner Placement (premium position)</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> High-interest audience targeting</li>
              <li className="flex items-start gap-2"><RefreshCw className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" /> Advanced Remarketing (multi-touch)</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Performance report</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mb-4">"Drive consistent registrations & ticket sales"</p>
            <a data-selected-service="Event Marketing" href="https://wa.me/94771976351?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Event%20Growth%20Campaign%20(LKR%20125%2C000).%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="hero" className="w-full"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>

          {/* High Impact Event Campaign */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border border-border flex flex-col">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
              <Megaphone className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">High Impact Event Campaign</h3>
            <p className="text-3xl font-bold text-foreground mb-1">LKR 175,000</p>
            <p className="text-xs text-muted-foreground mb-4">Best for concerts, festivals & large-scale events</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground mb-6 flex-1">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 4–6 Email Campaigns (full funnel strategy)</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Top ranking in Findit.lk events category</li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href="https://www.findit.lk/events" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors">🔗 View on Findit.lk <ArrowRight className="w-3 h-3" /></a>
              </li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Findit.lk Banner Placement (top-tier)</li>
              <li className="flex items-start gap-2"><RefreshCw className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> Full Funnel Remarketing</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 🎬 TikTok Video Ad (event promo)</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Custom event landing page</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Priority promotion for featured events</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mb-4">"Maximize attendance & sell out your event faster"</p>
            <a data-selected-service="Event Marketing" href="https://wa.me/94771976351?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20High%20Impact%20Event%20Campaign%20(LKR%20175%2C000).%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="hero-outline" className="w-full"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-6 font-medium">⏰ Limited slots available for upcoming event campaigns</p>
      </motion.div>

      {/* Multi-Channel Upsell Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Scale Your Marketing</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">📈 Need Larger Reach for Event Marketing?</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">For major events, festivals, and large-scale campaigns looking to reach massive audiences — we offer advanced multi-channel marketing campaigns across Sri Lanka.</p>
        </div>

        <Link to="/multi-channel-marketing-sri-lanka" className="block p-8 pt-10 rounded-2xl upsell-highlight mb-8 relative overflow-hidden cursor-pointer hover:scale-[1.01] transition-transform duration-300">
          <div className="absolute top-0 right-0 px-5 py-2 rounded-bl-xl bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider animate-pulse">🔥 Most Popular</div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">🌐 Upgrade Event Campaigns to Multi-Channel</h3>
          <p className="text-muted-foreground mb-5">Combine your event promotions with:</p>
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
          <p className="text-accent font-semibold text-center text-lg">👉 Reach hundreds of thousands to 1M+ audiences within days</p>
        </Link>

        {/* Ideal For */}
        <div className="p-8 rounded-2xl bg-card shadow-card border border-border mb-8">
          <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">🎤 Ideal for Large-Scale Events</h3>
          <p className="text-muted-foreground mb-4">This solution is best suited for:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Musical concerts & festivals",
              "Corporate conferences & summits",
              "Product launches & brand activations",
              "Multi-day exhibitions & trade shows",
              "Nationwide workshop series",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-muted-foreground text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="p-8 rounded-2xl bg-card shadow-card border border-border mb-8 overflow-x-auto">
          <h3 className="font-heading text-lg font-bold text-foreground mb-5">🆚 Standard vs Multi-Channel Event Campaigns</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Feature</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Standard Promotion</th>
                <th className="text-left py-3 px-4 text-accent font-semibold">Multi-Channel Campaign</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Reach", "Limited reach", "Nationwide reach"],
                ["Platforms", "Single platform", "Multiple platforms"],
                ["Speed", "Slower impact", "Fast results (days)"],
                ["Awareness", "Basic awareness", "High visibility + recall"],
              ].map(([feature, standard, multi]) => (
                <tr key={feature} className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground font-medium">{feature}</td>
                  <td className="py-3 px-4 text-muted-foreground">{standard}</td>
                  <td className="py-3 px-4 text-accent font-semibold">{multi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bridge CTA */}
        <div className="p-8 rounded-2xl gradient-event text-center relative overflow-hidden">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary-foreground mb-3">🚀 Scale Your Event Marketing Across Sri Lanka</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">For events looking to go beyond standard promotions and achieve nationwide visibility, our multi-channel campaigns deliver unmatched reach.</p>
          <Link to="/multi-channel-marketing-sri-lanka">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3 rounded-full text-base">
              <Rocket className="w-5 h-5 mr-2" /> View Multi-Channel Campaigns
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Why Event Organizers Choose BuzzConnect</h2>
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
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">How Our Event Marketing Process Works</h2>
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
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Event Marketing Use Cases</h2>
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

      {/* Campaign Types */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Campaign Ideas</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">📢 Event Campaign Types</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {campaignTypes.map(item => (
            <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-card">
              <PartyPopper className="w-5 h-5 text-accent shrink-0" />
              <span className="text-foreground font-medium text-sm">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <FinditlkAdvantage
        title="Findit.lk Events & Activities Advantage"
        description="Get your event promoted on Findit.lk, where users actively search for events, shows, courses, and opportunities. Unlike social media where users scroll passively, Findit.lk users are already interested — making them more likely to attend your event."
        gradient="gradient-event"
        links={[
          { label: "Events & Activities", url: "https://www.findit.lk/events" },
        ]}
        benefits={["Access to active event seekers", "High visibility in Events category", "Continuous promotion for weeks", "Better conversion than social ads"]}
      />

      {/* 📊 Real Campaign Results */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <div className="p-8 rounded-2xl bg-card shadow-card border border-border text-center">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Proven Results</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-4">Real Event Campaign Results</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">See how events in Sri Lanka maximized registrations, sold tickets, and achieved sell-out attendance with BuzzConnect.</p>
          <Link to="/event-marketing-case-studies-sri-lanka">
            <Button className="bg-accent hover:bg-accent/90 text-white font-bold">
              <BarChart3 className="w-5 h-5 mr-2" /> View Event Marketing Case Studies
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Why BuzzConnect */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6">Why BuzzConnect for Event Marketing?</h2>
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
              <h2 className="font-heading text-xl font-bold text-foreground">Get a FREE Event Marketing Plan</h2>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">Tailored to your event. We will show you:</p>
          <ul className="space-y-2 mb-6">
            {freeBonusItems.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <a data-selected-service="Event Marketing" href="https://wa.me/94771976351?text=Hi%20Buzz%20Connect%2C%20I%27d%20like%20a%20FREE%20Event%20Marketing%20Plan%20for%20my%20event." target="_blank" rel="noopener noreferrer">
            <Button className="bg-accent hover:bg-accent/90 text-white font-bold"><Gift className="w-4 h-4 mr-2" />Get Your Free Plan</Button>
          </a>
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Frequently Asked Questions – Event Marketing Sri Lanka</h2>
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

      {/* Urgency Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <div className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20 text-center">
          <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
            <Clock className="w-7 h-7 text-destructive" />
          </div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3">Limited Event Campaign Slots Available</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-2">Limited campaign slots available for events each month.</p>
          <p className="text-foreground font-semibold">Book your campaign now and ensure your event gets maximum exposure.</p>
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-10 rounded-2xl gradient-event text-white relative overflow-hidden">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">📞 Let's Promote Your Event</h2>
        <p className="text-primary-foreground/80 mb-4 max-w-xl mx-auto">Whether you're organizing a concert, corporate event, or large-scale campaign, we help you reach the right audience and achieve real results.</p>
        <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">Get more attendees with <strong>multi-channel event marketing in Sri Lanka</strong>. Contact Buzz Connect today.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a data-selected-service="Event Marketing" href="https://wa.me/94771976351?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20promote%20my%20event.%20Please%20share%20details." target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base">Talk to an Expert <ArrowRight className="inline w-4 h-4 ml-1" /></button>
          </a>
          <Link to="/contact-us">
            <button className="px-8 py-3 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent/10 transition-colors text-base">Get Proposal</button>
          </Link>
          <a data-selected-service="Event Marketing" href="https://wa.me/94771976351?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20launch%20an%20event%20marketing%20campaign." target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 rounded-full bg-accent/20 text-accent font-bold hover:bg-accent/30 transition-colors text-base">Launch Campaign</button>
          </a>
        </div>
      </motion.div>

      <RelatedArticles currentPath="/event-marketing-sri-lanka" />
    </ServicePageLayout>
  );
};

export default EventMarketing;
