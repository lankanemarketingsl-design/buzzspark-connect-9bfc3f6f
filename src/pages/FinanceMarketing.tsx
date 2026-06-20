import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle, Target, BarChart3, Mail, Smartphone, MessageSquare, Globe,
  HelpCircle, Building2, CreditCard, Landmark, Users, TrendingUp,
  ArrowRight, Send, Eye, Shield, DollarSign, Briefcase, Rocket, Crown, RefreshCw,
  Zap, Clock, Award, Gift
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import DigitalMarketingCTA from "@/components/DigitalMarketingCTA";
import IndustryStatsBanner from "@/components/IndustryStatsBanner";
import FinditlkAdvantage from "@/components/FinditlkAdvantage";
import IndustryLogoCarousel from "@/components/IndustryLogoCarousel";

import allianceFinanceLogo from "@/assets/clients/alliance-finance.webp";
import amwCapitalLogo from "@/assets/clients/amw-capital.webp";
import cbcFinanceLogo from "@/assets/clients/cbc-finance.webp";
import commercialCreditLogo from "@/assets/clients/commercial-credit.webp";
import pmfFinanceLogo from "@/assets/clients/pmf-finance.webp";
import arpicoFinanceLogo from "@/assets/clients/arpico-finance.webp";
import asiaAssetLogo from "@/assets/clients/asia-asset.webp";
import ndbBankLogo from "@/assets/clients/ndb-bank.webp";
import amanaBankLogo from "@/assets/clients/amana-bank.webp";
import nsbBankLogo from "@/assets/clients/nsb-bank.webp";
import peoplesBankLogo from "@/assets/clients/peoples-bank.webp";
import cargillsBankLogo from "@/assets/clients/cargills-bank.webp";
import bocLogo from "@/assets/clients/boc.webp";
import commercialBankLogo from "@/assets/clients/commercial-bank.webp";
import dfccBankLogo from "@/assets/clients/dfcc-bank.webp";

const financeClients = [
  { name: "Bank of Ceylon", logo: bocLogo },
  { name: "Commercial Bank", logo: commercialBankLogo },
  { name: "People's Bank", logo: peoplesBankLogo },
  { name: "NSB", logo: nsbBankLogo },
  { name: "DFCC Bank", logo: dfccBankLogo },
  { name: "NDB Bank", logo: ndbBankLogo },
  { name: "Amana Bank", logo: amanaBankLogo },
  { name: "Cargills Bank", logo: cargillsBankLogo },
  { name: "Alliance Finance", logo: allianceFinanceLogo },
  { name: "AMW Capital Leasing", logo: amwCapitalLogo },
  { name: "CBC Finance", logo: cbcFinanceLogo },
  { name: "Commercial Credit", logo: commercialCreditLogo },
  { name: "PMF Finance", logo: pmfFinanceLogo },
  { name: "Arpico Finance", logo: arpicoFinanceLogo },
  { name: "Asia Asset Finance", logo: asiaAssetLogo },
];

const achievements = [
  { icon: DollarSign, text: "Generate loan applications from qualified prospects" },
  { icon: CreditCard, text: "Increase credit card sign-ups" },
  { icon: Shield, text: "Get insurance leads from the right audience" },
  { icon: TrendingUp, text: "Promote fixed deposits & investment plans" },
  { icon: Users, text: "Reach high-intent financial customers across Sri Lanka" },
];

const whyChooseUs = [
  { icon: Users, text: "Access to targeted Sri Lankan audience segments" },
  { icon: Mail, text: "Multi-channel campaigns (Email, SMS, WhatsApp)" },
  { icon: DollarSign, text: "Cost-effective compared to traditional advertising" },
  { icon: Zap, text: "Fast campaign execution" },
  { icon: BarChart3, text: "Measurable results and ROI tracking" },
];

const howItWorks = [
  { step: 1, icon: Target, title: "Audience Targeting", desc: "We identify the right audience (income level, interest, behavior)" },
  { step: 2, icon: Mail, title: "Campaign Setup", desc: "We create high-converting messages for your offer" },
  { step: 3, icon: Send, title: "Multi-Channel Promotion", desc: "Your campaign runs across Email, SMS & WhatsApp" },
  { step: 4, icon: BarChart3, title: "Lead Generation", desc: "You receive real inquiries and potential customers" },
];

const useCases = [
  { icon: Landmark, title: "Loan Campaigns", audience: "Target salaried professionals and business owners", result: "Generate high-quality loan inquiries" },
  { icon: CreditCard, title: "Credit Card Promotions", audience: "Reach high-income individuals", result: "Increase card applications" },
  { icon: Shield, title: "Insurance Marketing", audience: "Target families and professionals", result: "Generate policy leads" },
  { icon: TrendingUp, title: "Investment & FD Promotions", audience: "Reach financially active users", result: "Drive deposits and sign-ups" },
];

const whyBuzzConnect = [
  "Direct access to finance-interested audiences",
  "Proven strategies for lead generation",
  "Industry-specific campaign approach",
  "Faster and more affordable than traditional marketing",
];

const freeBonusItems = [
  "Target audience strategy",
  "Recommended campaign channels",
  "Expected results",
];

const faqs = [
  { q: "What is finance marketing in Sri Lanka?", a: "Finance marketing involves promoting financial products like loans, credit cards, insurance, and investment opportunities to targeted audiences through digital marketing channels." },
  { q: "How can Buzz Connect help generate financial leads?", a: "We combine SMS offers, email promotions, WhatsApp follow-ups, and Findit.lk.lk Finance category visibility to reach high-value prospects and generate qualified leads for financial institutions." },
  { q: "Can you target high-net-worth individuals?", a: "Yes, our VIP and corporate database allows precise targeting of high-net-worth individuals, business owners, and corporate decision-makers." },
  { q: "How much does financial marketing cost in Sri Lanka?", a: "Buzz Connect offers financial marketing packages starting from LKR 60,000. Contact us for a customized quote based on your requirements." },
  { q: "Is SMS marketing effective for financial products?", a: "Absolutely. SMS has a 98% open rate, making it ideal for time-sensitive offers like loan promotions, credit card deals, and insurance renewals." },
  { q: "Why is Buzz Connect the best finance marketing agency in Sri Lanka?", a: "Buzz Connect is the best finance marketing agency because it offers fast campaign launch, instant exposure on Findit.lk.lk's Finance category, and easy, cost-effective multi-channel solutions to generate high-value loan, credit card, and insurance leads quickly." },
];

const FinanceMarketing = () => {
  const jsonLd = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Finance Marketing Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Multi-channel finance marketing services in Sri Lanka combining SMS, email, WhatsApp, and Findit.lk.lk visibility to generate high-value financial leads.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Finance & Credit Card Marketing"
      title="Get High-Quality Loan, Credit Card & Investment Leads in Sri Lanka"
      subtitle="Reach the right financial audience with targeted Email, SMS & WhatsApp campaigns designed to drive real applications and conversions."
    >
      <SEOHead
        title="Finance Marketing Sri Lanka | Finance Marketing Agency"
        description="Finance marketing Sri Lanka solutions from a top Finance Marketing Agency. Drive quality leads via email, ads & digital campaigns."
        canonical="/finance-marketing-sri-lanka"
        keywords="finance marketing sri lanka, credit card marketing colombo, bank marketing sri lanka, insurance marketing sri lanka, financial lead generation, loan promotion sri lanka, financial advertising sri lanka"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Finance Marketing", url: "/finance-marketing-sri-lanka" }]}
        jsonLd={jsonLd}
      />

      {/* Hero CTA Buttons */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-4 mb-12 -mt-4">
        <a data-selected-service="Finance Marketing" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20get%20finance%20leads.%20Please%20share%20details." target="_blank" rel="noopener noreferrer">
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-base font-bold rounded-full"><DollarSign className="w-5 h-5 mr-2" />Get Finance Leads</Button>
        </a>
        <Link to="/contact-us">
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 text-base font-bold rounded-full"><Rocket className="w-5 h-5 mr-2" />Start Your Campaign</Button>
        </Link>
      </motion.div>

      <IndustryStatsBanner
        icon={Landmark}
        gradient="gradient-finance"
        tagline="High-Value Financial Lead Campaigns"
        stats={[
          { value: "50+", label: "Financial Clients" },
          { value: "500K+", label: "SMS Database" },
          { value: "VIP", label: "Corporate Access" },
          { value: "24hrs", label: "Campaign Launch" },
        ]}
      />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          The financial sector requires precise targeting and compliance-friendly communication. Buzz Connect uses <Link to="/" className="text-muted-foreground underline-offset-2 hover:underline">email marketing Sri Lanka</Link> to deliver detailed product information for loans, credit cards, and investment plans to pre-qualified audiences.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Time-sensitive promotions like limited-rate offers are best delivered through <Link to="/sms-marketing" className="text-muted-foreground underline-offset-2 hover:underline">SMS marketing Sri Lanka</Link>, while <Link to="/whatsapp-marketing" className="text-muted-foreground underline-offset-2 hover:underline">WhatsApp marketing Sri Lanka</Link> enables direct conversations with potential applicants for faster lead conversion.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Our finance clients also benefit from <Link to="/social-media-marketing-sri-lanka" className="text-muted-foreground underline-offset-2 hover:underline">social media marketing Sri Lanka</Link> campaigns that build brand trust and educate customers about financial products.
        </p>
      </motion.div>

      {/* 💰 What You Can Achieve */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">What You Can Achieve</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Stop Generic Advertising. Start Performance-Driven Finance Marketing.</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">With BuzzConnect, you can reach the right financial audience and generate real results.</p>
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

      <IndustryLogoCarousel
        title="Trusted by Leading Financial Institutions"
        subtitle="We help Sri Lanka's top banks, leasing companies, and financial institutions generate high-value leads."
        clients={financeClients}
      />

      {/* Finance Advertising Packages */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Pricing Packages</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Finance Marketing Packages with Remarketing</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">We don't just generate traffic — we deliver high-intent finance leads ready to take action.</p>
          <p className="text-accent font-semibold mt-3 max-w-2xl mx-auto">1 approved loan = LKR 10,000–50,000+ value. You only need 1–3 conversions to recover full cost.</p>
          <div className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/30">
            <span className="text-accent font-bold text-sm">🎉 6-Month Subscription = 10% Discount on All Packages</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Lead Starter */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border border-border flex flex-col">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Lead Starter</h3>
            <p className="text-3xl font-bold text-foreground mb-1">LKR 60,000</p>
            <p className="text-xs text-muted-foreground mb-4">For small finance companies / testing campaigns</p>
            <ul className="space-y-2 mb-4 flex-grow">
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />1 Targeted Email Campaign (loan / finance audience)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Featured listing in Findit.lk 'Finance & Loans'</li>
              <li className="flex items-start gap-2 text-sm"><Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" /><a href="https://www.findit.lk/promotions/finance" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors">🔗 View on Findit.lk.lk <ArrowRight className="w-3 h-3" /></a></li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Findit.lk.lk Banner Placement (finance category)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />7-day visibility boost</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />🔁 Basic Remarketing (repeat exposure)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Ad creative (loan / offer focused)</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mb-4">"Generate initial finance inquiries"</p>
            <a data-selected-service="Finance Marketing" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Finance%20Lead%20Starter%20Package%20(LKR%2060%2C000).%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>

          {/* Lead Generator - Most Popular */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border-2 border-accent flex flex-col ring-2 ring-accent/20">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-white text-xs font-bold">MOST POPULAR</div>
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Crown className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Lead Generator</h3>
            <p className="text-3xl font-bold text-foreground mb-1">LKR 99,000</p>
            <p className="text-xs text-muted-foreground mb-4">Consistent daily lead generation</p>
            <ul className="space-y-2 mb-4 flex-grow">
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />2–3 Targeted Email Campaigns (segmented)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Premium Findit.lk finance placement</li>
              <li className="flex items-start gap-2 text-sm"><Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" /><a href="https://www.findit.lk/promotions/finance" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors">🔗 View on Findit.lk.lk <ArrowRight className="w-3 h-3" /></a></li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Findit.lk.lk Banner Placement (premium position)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Campaigns for urgent needs (loans / quick cash)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />🔁 Advanced Remarketing (multi-touch)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Performance report (clicks, inquiries)</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mb-4">"Consistent daily lead generation"</p>
            <a data-selected-service="Finance Marketing" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Finance%20Lead%20Generator%20Package%20(LKR%2099%2C000).%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button className="w-full bg-accent hover:bg-accent/90 text-white"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>

          {/* High Value Leads */}
          <div className="relative p-6 rounded-2xl bg-card shadow-card border border-border flex flex-col">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
              <RefreshCw className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">High Value Leads</h3>
            <p className="text-3xl font-bold text-foreground mb-1">LKR 175,000</p>
            <p className="text-xs text-muted-foreground mb-4">Maximize high-quality leads & conversions</p>
            <ul className="space-y-2 mb-4 flex-grow">
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />4–6 Email Campaigns (full funnel strategy)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Top ranking in Findit.lk finance category</li>
              <li className="flex items-start gap-2 text-sm"><Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" /><a href="https://www.findit.lk/promotions/finance" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/10 text-accent font-semibold text-xs hover:bg-accent/20 transition-colors">🔗 View on Findit.lk.lk <ArrowRight className="w-3 h-3" /></a></li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Findit.lk.lk Banner Placement (top-tier position)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />🔁 Full Funnel Remarketing</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />🎬 TikTok Video Ad (finance promo video)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Custom landing page (loan / finance offer)</li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />Priority campaign during high-demand periods</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mb-4">"Maximize high-quality leads & conversions"</p>
            <a data-selected-service="Finance Marketing" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20the%20Finance%20High%20Value%20Leads%20Package%20(LKR%20175%2C000).%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white"><MessageSquare className="w-4 h-4 mr-1" /> Inquire via WhatsApp</Button>
            </a>
          </div>
        </div>
      </motion.div>

      {/* 🚀 Multi-Channel Upsell Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Scale Your Marketing</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">📈 Need Larger Reach for Finance Marketing?</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">For banks, finance companies, and large financial groups looking to scale beyond standard campaigns — we offer advanced multi-channel marketing campaigns across Sri Lanka.</p>
        </div>

        <Link to="/multi-channel-marketing-sri-lanka" className="block p-8 pt-10 rounded-2xl upsell-highlight mb-8 relative overflow-hidden cursor-pointer hover:scale-[1.01] transition-transform duration-300">
          <div className="absolute top-0 right-0 px-5 py-2 rounded-bl-xl bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider animate-pulse">🔥 Most Popular</div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">🌐 Upgrade Finance Campaigns to Multi-Channel</h3>
          <p className="text-muted-foreground mb-5">Combine your financial promotions with:</p>
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
          <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">🏦 Ideal for Large-Scale Finance Campaigns</h3>
          <p className="text-muted-foreground mb-4">This solution is best suited for:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Banks & large finance companies",
              "New branch or product launches",
              "Seasonal promotions (New Year, Avurudu offers)",
              "Brand awareness for financial services",
              "Credit card & loan product campaigns",
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
          <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">🎯 What You Can Achieve with Multi-Channel Finance Campaigns</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              "Brand awareness campaigns across Sri Lanka",
              "New product & service launches",
              "Promotional offers for loans & deposits",
              "Driving website traffic and applications",
              "Generating leads in a short time",
              "Reaching new customers nationwide",
              "Re-engaging past clients",
              "Building strong top-of-mind brand recall",
              "Expanding your financial brand across Sri Lanka",
              "Generating quick market response for new products",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <ArrowRight className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-card shadow-card border border-border mb-8">
          <h3 className="font-heading text-lg font-bold text-foreground mb-4">💡 Why Large Finance Companies Choose Multi-Channel Campaigns</h3>
          <p className="text-muted-foreground mb-4">Instead of relying on a single platform:</p>
          <ul className="space-y-2.5">
            {[
              "Reach customers through multiple touchpoints",
              "Increase brand recall and trust",
              "Drive faster applications and inquiries",
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
          <h3 className="font-heading text-lg font-bold text-foreground mb-5">🆚 Standard vs Multi-Channel Finance Campaigns</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Feature</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Standard Finance Marketing</th>
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

        <div className="p-8 rounded-2xl gradient-finance text-center relative overflow-hidden">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary-foreground mb-3">🚀 Scale Your Finance Marketing Across Sri Lanka</h3>
          <p className="text-primary-foreground/80 mb-2 max-w-xl mx-auto">For finance companies looking to go beyond standard promotions and achieve nationwide visibility, our multi-channel campaigns deliver unmatched reach and impact.</p>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">If you're looking for maximum reach, faster visibility, and large-scale campaigns — explore our full solution.</p>
          <Link to="/multi-channel-marketing-sri-lanka">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3 rounded-full text-base">
              <Rocket className="w-5 h-5 mr-2" /> View Multi-Channel Campaigns
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* 📊 Why Finance Companies Choose Us */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Why Finance Companies Choose BuzzConnect</h2>
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
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">How Finance Marketing Works</h2>
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
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">Finance Marketing Use Cases</h2>
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
        title="Findit.lk.lk Finance & Credit Card Advantage"
        description="Get your financial products promoted in Findit.lk.lk's Finance and Credit Card categories for continuous visibility to high-intent prospects seeking financial solutions."
        gradient="gradient-finance"
        links={[
          { label: "Finance", url: "https://www.findit.lk/promotions/finance" },
          { label: "Credit Card Offers", url: "https://www.findit.lk/promotions/credit-card-offers" },
        ]}
        benefits={["Access to financial product seekers", "High visibility in Finance category", "Targeted credit card promotions", "Better qualified leads than ads"]}
      />

      {/* 📊 Real Campaign Results */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto">
        <div className="p-8 rounded-2xl bg-accent/5 border border-accent/20 text-center">
          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <BarChart3 className="w-7 h-7 text-accent" />
          </div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3">Real Campaign Results</h2>
          <p className="text-muted-foreground mb-4">See how finance companies in Sri Lanka generated high-quality leads using our targeted marketing campaigns.</p>
          <Link to="/finance-marketing-case-studies-sri-lanka">
            <Button className="bg-accent hover:bg-accent/90 text-white font-bold"><BarChart3 className="w-5 h-5 mr-2" /> View Finance Marketing Case Studies</Button>
          </Link>
        </div>
      </motion.div>

      {/* 🧠 Why BuzzConnect */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6">Why BuzzConnect for Finance Marketing?</h2>
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
              <h2 className="font-heading text-xl font-bold text-foreground">Get a FREE Finance Marketing Plan</h2>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">Tailored to your business. We will show you:</p>
          <ul className="space-y-2 mb-6">
            {freeBonusItems.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <a data-selected-service="Finance Marketing" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27d%20like%20a%20FREE%20Finance%20Marketing%20Plan%20for%20my%20business." target="_blank" rel="noopener noreferrer">
            <Button className="bg-accent hover:bg-accent/90 text-white font-bold"><Gift className="w-4 h-4 mr-2" />Get Your Free Plan</Button>
          </a>
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">Frequently Asked Questions – Finance Marketing Sri Lanka</h2>
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
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3">Limited Finance Campaign Slots Available</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-2">Limited campaign slots available for finance companies each month.</p>
          <p className="text-foreground font-semibold">Secure your campaign now and stay ahead of competitors.</p>
        </div>
      </motion.div>

      {/* ⚡ Final CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-10 rounded-2xl gradient-finance text-white relative overflow-hidden">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Start Getting Finance Leads This Month</h2>
        <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">Generate high-value financial leads with <strong>multi-channel finance marketing in Sri Lanka</strong>. Contact Buzz Connect today.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a data-selected-service="Finance Marketing" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20talk%20to%20an%20expert%20about%20finance%20marketing." target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base">Talk to an Expert <ArrowRight className="inline w-4 h-4 ml-1" /></button>
          </a>
          <Link to="/contact-us">
            <button className="px-8 py-3 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent/10 transition-colors text-base">Get a Custom Proposal</button>
          </Link>
          <a data-selected-service="Finance Marketing" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20launch%20a%20finance%20marketing%20campaign." target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 rounded-full bg-accent/20 text-accent font-bold hover:bg-accent/30 transition-colors text-base">Launch Your Campaign</button>
          </a>
        </div>
      </motion.div>

      <RelatedArticles currentPath="/finance-marketing-sri-lanka" />
      <DigitalMarketingCTA />
    </ServicePageLayout>
  );
};

export default FinanceMarketing;
