import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, Target, BarChart3, Mail, Smartphone, MessageSquare, Globe,
  HelpCircle, Home, Building2, MapPin, Users, TrendingUp,
  ArrowRight, Send, Eye, Key, Landmark, DollarSign, Rocket, Crown, RefreshCw,
  Zap, Clock, Gift
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import IndustryStatsBanner from "@/components/IndustryStatsBanner";
import FinditlkAdvantage from "@/components/FinditlkAdvantage";
import IndustryLogoCarousel from "@/components/IndustryLogoCarousel";

import assetlineLogo from "@/assets/clients/assetline-lands.webp";
import homeLandsLogo from "@/assets/clients/home-lands.webp";
import promiseLandLogo from "@/assets/clients/promise-land.webp";
import empireLandsLogo from "@/assets/clients/empire-lands.webp";
import bhoomiLogo from "@/assets/clients/bhoomi.webp";
import capitalTrustLogo from "@/assets/clients/capital-trust.webp";
import primeLandLogo from "@/assets/clients/prime-land.webp";

const realEstateClients = [
  { name: "Assetline Lands", logo: assetlineLogo },
  { name: "Home Lands", logo: homeLandsLogo },
  { name: "Promise Land", logo: promiseLandLogo },
  { name: "Empire Lands", logo: empireLandsLogo },
  { name: "Bhoomi Realty", logo: bhoomiLogo },
  { name: "Capital Trust Properties", logo: capitalTrustLogo },
  { name: "Prime Land", logo: primeLandLogo },
];

const achievements = [
  { icon: Users, text: "Generate serious property buyer inquiries" },
  { icon: Home, text: "Sell lands, houses & apartments faster" },
  { icon: Building2, text: "Promote new property developments & projects" },
  { icon: TrendingUp, text: "Reach high-intent investors & home buyers" },
  { icon: MessageSquare, text: "Get direct calls and WhatsApp inquiries" },
];

const whoIsFor = [
  { icon: Building2, text: "Property Developers" },
  { icon: Key, text: "Real Estate Agents" },
  { icon: MapPin, text: "Land Sale Companies" },
  { icon: Home, text: "Apartment & Housing Projects" },
  { icon: DollarSign, text: "Property Investment Companies" },
];

const whyChooseUs = [
  { icon: Users, text: "Access to targeted Sri Lankan property buyers" },
  { icon: Mail, text: "Multi-channel marketing (Email + SMS + WhatsApp)" },
  { icon: Zap, text: "Faster results than social media ads" },
  { icon: DollarSign, text: "Cost-effective compared to traditional advertising" },
  { icon: Send, text: "Immediate reach to thousands of potential buyers" },
];

const howItWorks = [
  { step: 1, icon: Target, title: "Target Audience Selection", desc: "We target users interested in property buying, investing, and relocation" },
  { step: 2, icon: Mail, title: "Campaign Creation", desc: "We design high-converting property messages" },
  { step: 3, icon: Send, title: "Multi-Channel Promotion", desc: "Your listings are promoted via Email, SMS & WhatsApp" },
  { step: 4, icon: BarChart3, title: "Lead Generation", desc: "You receive calls, messages, and buyer inquiries" },
];

const useCases = [
  { icon: MapPin, title: "Land Sales Campaign", audience: "Promote land projects to investors", result: "Generate high-quality buyer inquiries" },
  { icon: Building2, title: "Apartment Promotions", audience: "Target urban buyers", result: "Increase site visits & bookings" },
  { icon: Home, title: "House Sales", audience: "Reach families looking to relocate", result: "Faster property sales" },
  { icon: TrendingUp, title: "Property Investment Offers", audience: "Target high-income individuals", result: "Attract serious investors" },
];

const whyBuzzConnect = [
  "Direct access to property-interested audiences",
  "Proven system for lead generation",
  "Industry-focused campaigns",
  "Fast campaign launch and results",
];

const freeBonusItems = [
  "Best audience for your property",
  "Recommended campaign strategy",
  "Expected lead results",
];

const faqs = [
  { q: "What is real estate marketing in Sri Lanka?", a: "Real estate marketing involves promoting properties, developments, and real estate services to potential buyers and investors through targeted digital marketing channels." },
  { q: "How can Buzz Connect help sell properties faster?", a: "We combine SMS property alerts, WhatsApp buyer inquiries, email brochures, and Findit.lk.lk Real Estate category visibility to reach thousands of potential buyers simultaneously." },
  { q: "Can you target property investors specifically?", a: "Yes, our database includes property investors, high-net-worth individuals, and corporate buyers — allowing precise targeting for premium property listings." },
  { q: "How much does real estate marketing cost in Sri Lanka?", a: "Buzz Connect offers real estate marketing packages starting from LKR 75,000. Contact us for a customized quote based on your property portfolio." },
  { q: "How quickly can I start getting buyer inquiries?", a: "Most property campaigns start generating inquiries within 24-48 hours of launch, with sustained visibility through Findit.lk.lk for weeks." },
  { q: "Why is Buzz Connect the best real estate marketing agency in Sri Lanka?", a: "Buzz Connect is the best real estate marketing agency because it offers fast campaign launch, instant exposure on Findit.lk.lk's Real Estate category, and easy, cost-effective multi-channel solutions to generate high-quality property buyer leads quickly." },
];

const RealEstateMarketing = () => {
  const jsonLd = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Real Estate Marketing Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Multi-channel real estate marketing services in Sri Lanka combining SMS, WhatsApp, email, and Findit.lk.lk visibility to generate property buyer leads.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Real Estate Marketing"
      title="Generate Property Buyers & Sellers in Sri Lanka – Fast"
      subtitle="Promote your lands, houses, apartments, and real estate projects with targeted Email, SMS & WhatsApp campaigns that bring real inquiries."
    >
      <SEOHead
        title="Real Estate Marketing Sri Lanka | Real Estate Marketing agency"
        description="No.1 real estate marketing company in Sri Lanka. Real Estate Marketing Agency for high-quality leads, better visibility & faster sales."
        canonical="/real-estate-marketing-sri-lanka"
        keywords="real estate marketing sri lanka, property marketing colombo, real estate advertising sri lanka, property lead generation, land sales marketing, property promotion sri lanka, real estate digital marketing, property buyer leads"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Real Estate Marketing", url: "/real-estate-marketing-sri-lanka" }]}
        jsonLd={jsonLd}
      />

      {/* Hero CTA Buttons */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-4 mb-12 -mt-4">
        <a data-selected-service="Real Estate Marketing" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20get%20property%20leads.%20Please%20share%20details." target="_blank" rel="noopener noreferrer">
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-base font-bold rounded-full"><Home className="w-5 h-5 mr-2" />Get Property Leads</Button>
        </a>
        <Link to="/contact-us">
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 text-base font-bold rounded-full"><Rocket className="w-5 h-5 mr-2" />Start Your Campaign</Button>
        </Link>
      </motion.div>

      <IndustryStatsBanner
        icon={Building2}
        gradient="gradient-realestate"
        tagline="Property Lead Generation Campaigns"
        stats={[
          { value: "300K+", label: "Targeted Contacts" },
          { value: "High-Ticket", label: "Lead Quality" },
          { value: "Weeks", label: "Sustained Visibility" },
          { value: "48hrs", label: "First Inquiries" },
        ]}
      />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Real estate is a high-value industry where every lead matters. Buzz Connect's <Link to="/" className="text-muted-foreground underline-offset-2 hover:underline">email marketing Sri Lanka</Link> service helps you present property listings, virtual tours, and project launches to thousands of targeted buyers and investors.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Reach potential buyers instantly through <Link to="/sms-marketing" className="text-muted-foreground underline-offset-2 hover:underline">SMS marketing Sri Lanka</Link> with location-based targeting, and use <Link to="/whatsapp-marketing" className="text-muted-foreground underline-offset-2 hover:underline">WhatsApp marketing Sri Lanka</Link> to share brochures, floor plans, and handle property inquiries in real-time.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Strengthen your property brand with ongoing <Link to="/social-media-marketing-sri-lanka" className="text-muted-foreground underline-offset-2 hover:underline">social media marketing Sri Lanka</Link> campaigns that showcase your developments and attract serious buyers.
        </p>
      </motion.div>

      {/* 💰 What You Can Achieve */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">What You Can Achieve</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Stop Wasting Money on Low-Response Ads.</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">With BuzzConnect, you can reach the right property buyers and generate real results.</p>
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

      {/* 🎯 Who This Is For */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Who This Is For</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Who Real Estate Marketing Is Designed For</h2>
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

      <IndustryLogoCarousel
        title="Trusted by Leading Real Estate Brands"
        subtitle="We help Sri Lanka's top property developers and real estate companies generate qualified buyer leads."
        clients={realEstateClients}
      />

      {/* Real Estate Advertising Packages - PRESERVED */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Pricing Packages</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Real Estate Marketing Packages with Remarketing</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Property buyers don't decide instantly — they choose after seeing the right property multiple times.</p>
          <p className="text-accent font-semibold mt-3 max-w-2xl mx-auto">1 property sale = hundreds of thousands in value. You only need 1 serious buyer to justify the campaign.</p>
          <div className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/30">
            <span className="text-accent font-bold text-sm">🎉 6-Month Subscription = 10% Discount on All Packages</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Property Leads Starter */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border border-border flex flex-col">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Property Leads Starter</h3>
            <p className="text-3xl font-bold text-foreground mb-1">LKR 75,000</p>
            <p className="text-xs text-muted-foreground mb-4">Best for small agents & property listings</p>
            <ul className="space-y-2 mb-4 flex-grow">
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />1 Targeted Email Campaign (property buyers / investors)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Featured listing in Findit.lk 'Real Estate'</li>
              <li className="flex items-start gap-2 text-sm"><Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" /><a href="https://www.findit.lk/promotions/real-estate" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors">🔗 View on Findit.lk.lk <ArrowRight className="w-3 h-3" /></a></li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Findit.lk.lk Banner Placement (real estate category)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />7-day visibility boost</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />🔁 Basic Remarketing (repeat exposure)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Property ad creative (image + offer)</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mb-4">"Generate initial buyer inquiries"</p>
            <a data-selected-service="Real Estate Marketing" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Real%20Estate%20Property%20Leads%20Starter%20Package%20(LKR%2075%2C000).%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>

          {/* Buyer Flow - Most Popular */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border-2 border-accent flex flex-col ring-2 ring-accent/20">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-white text-xs font-bold">MOST POPULAR</div>
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Crown className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Buyer Flow</h3>
            <p className="text-3xl font-bold text-foreground mb-1">LKR 118,000</p>
            <p className="text-xs text-muted-foreground mb-4">Consistent property inquiries</p>
            <ul className="space-y-2 mb-4 flex-grow">
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />2–3 Targeted Email Campaigns (segmented)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Premium Findit.lk real estate placement</li>
              <li className="flex items-start gap-2 text-sm"><Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" /><a href="https://www.findit.lk/promotions/real-estate" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors">🔗 View on Findit.lk.lk <ArrowRight className="w-3 h-3" /></a></li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Findit.lk.lk Banner Placement (premium position)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Campaigns for urgent buyers (hot properties)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />🔁 Advanced Remarketing (multi-touch)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Performance report</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mb-4">"Consistent property inquiries"</p>
            <a data-selected-service="Real Estate Marketing" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Real%20Estate%20Buyer%20Flow%20Package%20(LKR%20118%2C000).%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button className="w-full bg-accent hover:bg-accent/90 text-white"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>

          {/* High Value Deals */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border border-border flex flex-col">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
              <RefreshCw className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">High Value Deals</h3>
            <p className="text-3xl font-bold text-foreground mb-1">LKR 298,000</p>
            <p className="text-xs text-muted-foreground mb-4">Close high-value property deals faster</p>
            <ul className="space-y-2 mb-4 flex-grow">
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />4–6 Email Campaigns (full funnel strategy)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Top ranking in Findit.lk category</li>
              <li className="flex items-start gap-2 text-sm"><Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" /><a href="https://www.findit.lk/promotions/real-estate" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors">🔗 View on Findit.lk.lk <ArrowRight className="w-3 h-3" /></a></li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Findit.lk.lk Banner Placement (top-tier position)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />🔁 Full Funnel Remarketing</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />🎬 TikTok Video Ad (property promo video)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Custom property landing page</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Priority promotion for featured properties</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mb-4">"Close high-value property deals faster"</p>
            <a data-selected-service="Real Estate Marketing" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Real%20Estate%20High%20Value%20Deals%20Package%20(LKR%20298%2C000).%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>
        </div>
      </motion.div>

      {/* 🚀 Multi-Channel Upsell Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Scale Your Marketing</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">📈 Need Larger Reach for Real Estate Marketing?</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">For property developers, real estate companies, and large-scale projects looking to go beyond standard campaigns — we offer advanced multi-channel marketing campaigns across Sri Lanka.</p>
        </div>

        <Link to="/multi-channel-marketing-sri-lanka" className="block p-8 pt-10 rounded-2xl upsell-highlight mb-8 relative overflow-hidden cursor-pointer hover:scale-[1.01] transition-transform duration-300">
          <div className="absolute top-0 right-0 px-5 py-2 rounded-bl-xl bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider animate-pulse">🔥 Most Popular</div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">🌐 Upgrade Real Estate Campaigns to Multi-Channel</h3>
          <p className="text-muted-foreground mb-5">Combine your property promotions with:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {[
              { icon: Mail, label: "Email Marketing" },
              { icon: Smartphone, label: "SMS Campaigns" },
              { icon: MessageSquare, label: "WhatsApp Marketing" },
              { icon: Globe, label: "Exposure on Findit.lk.lk" },
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

        <div className="p-8 rounded-2xl bg-card shadow-card border border-border mb-8">
          <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">🏢 Ideal for Large-Scale Property Campaigns</h3>
          <p className="text-muted-foreground mb-4">This solution is best suited for:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Large property developers & housing projects",
              "New project launches & showroom openings",
              "Seasonal promotions (Avurudu, year-end deals)",
              "Brand awareness for real estate companies",
              "Land sale campaigns targeting investors",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-muted-foreground text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">Designed for businesses that need mass visibility + fast impact</p>
        </div>

        <div className="p-8 rounded-2xl bg-card shadow-card border border-border mb-8">
          <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">🎯 What You Can Achieve with Multi-Channel Real Estate Campaigns</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              "Brand awareness campaigns across Sri Lanka",
              "New project launches & showroom openings",
              "Promotional offers for lands, apartments & houses",
              "Driving website traffic and direct inquiries",
              "Selling properties in a short time",
              "Reaching new buyers & investors nationwide",
              "Re-engaging past property inquiries",
              "Building strong top-of-mind brand recall",
              "Expanding your real estate reach across Sri Lanka",
              "Generating quick market response for new listings",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <ArrowRight className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-card shadow-card border border-border mb-8">
          <h3 className="font-heading text-lg font-bold text-foreground mb-4">💡 Why Large Real Estate Companies Choose Multi-Channel Campaigns</h3>
          <p className="text-muted-foreground mb-4">Instead of relying on a single platform:</p>
          <ul className="space-y-2.5">
            {[
              "Reach buyers through multiple touchpoints",
              "Increase brand recall and trust",
              "Drive faster inquiries and site visits",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-foreground font-medium text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-accent font-semibold mt-4">👉 The result: higher visibility + better conversion rates</p>
        </div>

        <div className="p-8 rounded-2xl bg-card shadow-card border border-border mb-8 overflow-x-auto">
          <h3 className="font-heading text-lg font-bold text-foreground mb-5">🆚 Standard vs Multi-Channel Real Estate Campaigns</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Feature</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Standard Property Marketing</th>
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

        <div className="p-8 rounded-2xl gradient-realestate text-center relative overflow-hidden">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary-foreground mb-3">🚀 Scale Your Real Estate Marketing Across Sri Lanka</h3>
          <p className="text-primary-foreground/80 mb-2 max-w-xl mx-auto">For property companies looking to go beyond standard promotions and achieve nationwide visibility, our multi-channel campaigns deliver unmatched reach and impact.</p>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">If you're looking for maximum reach, faster visibility, and large-scale campaigns — explore our full solution.</p>
          <Link to="/multi-channel-marketing-sri-lanka">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3 rounded-full text-base">
              <Rocket className="w-5 h-5 mr-2" /> View Multi-Channel Campaigns
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* 📊 Why Real Estate Companies Choose Us */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Why Real Estate Companies Choose BuzzConnect</h2>
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

      {/* 🚀 How It Works */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Process</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">How Real Estate Marketing Works</h2>
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

      {/* 🎯 Use Cases */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Use Cases</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Real Estate Marketing Use Cases</h2>
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
        title="Findit.lk.lk Real Estate Advantage"
        description="Get your properties promoted in Findit.lk.lk's Real Estate category for continuous visibility to active property seekers and investors in Sri Lanka."
        gradient="gradient-realestate"
        links={[
          { label: "Real Estate", url: "https://www.findit.lk/promotions/real-estate" },
        ]}
        benefits={["Access to active property seekers", "High visibility in Real Estate category", "Long-term listing promotion", "Better qualified leads than classifieds"]}
      />

      {/* 📊 Real Campaign Results */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <div className="p-8 rounded-2xl bg-accent/5 border border-accent/20 text-center">
          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <BarChart3 className="w-7 h-7 text-accent" />
          </div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3">Real Campaign Results</h2>
          <p className="text-muted-foreground mb-4">See how real estate companies in Sri Lanka sold properties faster using our targeted marketing campaigns.</p>
          <Link to="/real-estate-marketing-case-studies-sri-lanka">
            <Button className="bg-accent hover:bg-accent/90 text-white font-bold"><BarChart3 className="w-5 h-5 mr-2" /> View Real Estate Marketing Case Studies</Button>
          </Link>
        </div>
      </motion.div>

      {/* 🧠 Why BuzzConnect */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6">Why BuzzConnect for Real Estate Marketing?</h2>
        <ul className="space-y-3">
          {whyBuzzConnect.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-muted-foreground font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* 🎁 Free Bonus */}
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
              <h2 className="font-heading text-xl font-bold text-foreground">Get a FREE Real Estate Marketing Plan</h2>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">Tailored to your property business. We will show you:</p>
          <ul className="space-y-2 mb-6">
            {freeBonusItems.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <a data-selected-service="Real Estate Marketing" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27d%20like%20a%20FREE%20Real%20Estate%20Marketing%20Plan%20for%20my%20business." target="_blank" rel="noopener noreferrer">
            <Button className="bg-accent hover:bg-accent/90 text-white font-bold"><Gift className="w-4 h-4 mr-2" />Get Your Free Plan</Button>
          </a>
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Frequently Asked Questions – Real Estate Marketing Sri Lanka</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-5 rounded-xl bg-card shadow-card border border-border">
              <h3 className="flex items-start gap-2 font-heading font-semibold text-foreground mb-2"><HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />{faq.q}</h3>
              <p className="text-muted-foreground text-sm pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 🔥 Urgency Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <div className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20 text-center">
          <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
            <Clock className="w-7 h-7 text-destructive" />
          </div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3">Limited Real Estate Campaign Slots Available</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-2">Limited campaign slots available for real estate companies each month.</p>
          <p className="text-foreground font-semibold">Book your campaign now and stay ahead of competitors.</p>
        </div>
      </motion.div>

      {/* ⚡ Final CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-10 rounded-2xl gradient-realestate text-white relative overflow-hidden">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Start Getting Property Buyers This Month</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">Generate property buyer leads with <strong>multi-channel real estate marketing in Sri Lanka</strong>. Contact Buzz Connect today.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a data-selected-service="Real Estate Marketing" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20talk%20to%20an%20expert%20about%20real%20estate%20marketing." target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base">Talk to an Expert <ArrowRight className="inline w-4 h-4 ml-1" /></button>
          </a>
          <Link to="/contact-us">
            <button className="px-8 py-3 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent/10 transition-colors text-base">Get Proposal</button>
          </Link>
          <a data-selected-service="Real Estate Marketing" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20launch%20a%20real%20estate%20marketing%20campaign." target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 rounded-full bg-accent/20 text-accent font-bold hover:bg-accent/30 transition-colors text-base">Launch Campaign</button>
          </a>
        </div>
      </motion.div>

      <RelatedArticles currentPath="/real-estate-marketing-sri-lanka" />
    </ServicePageLayout>
  );
};

export default RealEstateMarketing;
