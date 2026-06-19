import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Users, Crown, CheckCircle, Mail, HelpCircle, Smartphone, MessageSquare, Globe, Rocket, ArrowRight, Zap } from "lucide-react";
import IndustryMarketingSection from "@/components/IndustryMarketingSection";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import { Button } from "@/components/ui/button";
import EmailHeroContent from "@/components/email/EmailHeroContent";
import DigitalMarketingCTA from "@/components/DigitalMarketingCTA";

const packages = [
  { name: "One Email Campaign + Findit.lk Web Ad", corp: "LKR 6,000", full: "LKR 8,000", mega: "LKR 12,000", fb: "✔", ig: "✔", li: "✔", webAd: "01", appAd: "01", feed: "✔" },
  { name: "Two Email Campaigns + Findit.lk Web Ads", corp: "LKR 10,800", full: "LKR 15,000", mega: "LKR 22,000", fb: "✔", ig: "✔", li: "✔", webAd: "02", appAd: "02", feed: "✔" },
  { name: "Five Email Campaigns (One month period) + Findit.lk Web Ads", corp: "LKR 28,000", full: "LKR 38,000", mega: "LKR 55,000", fb: "✔", ig: "✔", li: "✔", webAd: "05", appAd: "05", feed: "✔" },
  { name: "Ten Email Campaigns (Two months) + Findit.lk Web Ads", corp: "LKR 54,000", full: "LKR 72,000", mega: "LKR 108,000", fb: "✔", ig: "✔", li: "✔", webAd: "10", appAd: "10", feed: "✔" },
  { name: "Twenty Email Campaigns + Findit.lk Web Ads", corp: "LKR 108,000", full: "LKR 140,000", mega: "LKR 210,000", fb: "✔", ig: "✔", li: "✔", webAd: "40", appAd: "40", feed: "✔" },
  { name: "VIP Email Campaign (For 50,000 VIP database)", corp: "LKR 7,500", full: "", mega: "", fb: "✔", ig: "✔", li: "✔", webAd: "01", appAd: "01", feed: "✔" },
];

const faqs = [
  { q: "What is email marketing in Sri Lanka?", a: "Email marketing is a digital marketing method that allows businesses to send targeted promotional messages directly to customers via email. It is one of the most cost-effective ways to reach large audiences in Sri Lanka." },
  { q: "How effective is email marketing in Sri Lanka?", a: "Email marketing offers one of the highest ROI among all digital marketing channels. When combined with multi-channel strategies like Findit.lk advertising, conversion rates increase significantly." },
  { q: "How many people can I reach with Buzz Connect?", a: "You can reach over 350,000+ corporate email users and 50,000+ VIP contacts, including highly targeted audiences across Sri Lanka." },
  { q: "Why choose Buzz Connect for email marketing?", a: "Buzz Connect is the only email marketing company in Sri Lanka that combines bulk email campaigns with Findit.lk multi-channel advertising, offering the largest databases, cost-effective packages, and proven campaign success." },
  { q: "What is multi-channel email marketing?", a: "Multi-channel email marketing uses multiple platforms together — email, web ads, app ads, and social media — to reinforce your message and improve engagement and conversion rates." },
  { q: "How much does email marketing cost in Sri Lanka?", a: "Email marketing packages at Buzz Connect start from LKR 6,000 for the corporate database and LKR 8,000 for the full 500,000 database. All packages include Findit.lk advertising at no extra cost." },
  { q: "Which industries benefit most from email marketing in Sri Lanka?", a: "Email marketing in Sri Lanka works across all major industries including hotels, education, real estate, e-commerce, restaurants, healthcare, automotive, finance, fashion, events, and recruitment. Each industry can leverage targeted campaigns for lead generation, bookings, and sales." },
  { q: "How fast can I launch an email marketing campaign?", a: "With Buzz Connect, your email marketing campaign in Sri Lanka can be launched within hours. Our team handles design, database targeting, and delivery — so you can start reaching customers the same day." },
  { q: "Can I combine email marketing with SMS and WhatsApp campaigns?", a: "Yes! Buzz Connect offers integrated multi-channel campaigns combining email marketing with SMS marketing, WhatsApp marketing, and Findit.lk web advertising for maximum reach and ROI across Sri Lanka." },
];

const EmailMarketing = () => {
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
      name: "Email Marketing Sri Lanka",
      provider: { "@type": "Organization", name: "Buzz Connect" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      description: "Best email marketing services in Sri Lanka with 350,000+ corporate database and multi-channel Findit.lk advertising integration.",
    },
  ], []);

  return (
    <ServicePageLayout
      badge="Email Marketing Sri Lanka"
      title="Multi-Channel Email Campaigns That Drive Real Results"
      subtitle="Reach your audience, increase visibility, and generate real business opportunities — campaigns starting from LKR 6,000"
    >
      <SEOHead
        title="Email Marketing Sri Lanka | Email Marketing Companies in Sri Lanka"
        description="Email marketing Sri Lanka by best email marketing companies in Sri Lanka. Run email marketing campaign Sri Lanka with affordable packages."
        canonical="/email-marketing"
        keywords="email marketing sri lanka, email campaigns sri lanka, email advertising sri lanka, bulk email marketing sri lanka, email marketing services sri lanka, best email marketing company sri lanka, email marketing packages sri lanka, email database sri lanka, corporate email marketing"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Email Marketing", url: "/email-marketing" },
        ]}
        jsonLd={jsonLd}
      />

      {/* All high-converting hero content */}
      <EmailHeroContent />

      {/* Corporate & VIP Reach */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-card shadow-card border border-border"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <Users className="w-6 h-6 text-secondary-foreground" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground">📧 Corporate Database</h3>
              <p className="text-accent font-semibold text-sm">350,000+ active contacts</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-4 text-sm">
            Professionals, executives, business owners — age 18–55, covering mostly western province.
          </p>
          <ul className="space-y-2">
            {["Managers", "General Managers", "Executive & officers", "Small business owners", "Undergraduate students", "House wives", "Association Members", "Gender - Male 60% & Female 40%"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-2xl bg-card shadow-card border border-border"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
              <Crown className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground">👑 VIP Database</h3>
              <p className="text-accent font-semibold text-sm">50,000+ high-value audience</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-4 text-sm">
            CEOs, directors, entrepreneurs — age 35–60, Colombo & greater Colombo, 80% male.
          </p>
          <ul className="space-y-2">
            {["Premium business leaders", "Multinational companies Directors", "CEO'S", "Celebrities", "Sports personals", "Doctors", "Entrepreneurs", "Private sector high salary earning employees (Over 350,000 per month)", "Heads of Government institutes"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto text-center"
      >
        <p className="text-foreground font-semibold text-lg">👉 Reach the right people, not just more people.</p>
      </motion.div>

      {/* Packages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">Our Email Marketing Packages in Sri Lanka</h2>
        <p className="text-muted-foreground text-center mb-2">💰 Simple & Transparent Pricing — No hidden charges</p>
        <p className="text-muted-foreground text-center mb-8 text-sm">We enjoy adapting our strategies to offer every client the best solutions that are at the forefront of the industry.</p>

        <div className="overflow-x-auto">
          <table className="w-full bg-card rounded-xl shadow-card border border-border overflow-hidden text-sm">
            <thead>
              <tr className="gradient-hero text-primary-foreground">
                <th className="text-left p-3 font-heading"></th>
                <th className="text-center p-3 font-heading">Facebook sharing & Story updates</th>
                <th className="text-center p-3 font-heading">Instagram story updates</th>
                <th className="text-center p-3 font-heading">Linkedin post sharing</th>
                <th className="text-center p-3 font-heading">Findit.lk Web ad for Two weeks</th>
                <th className="text-center p-3 font-heading">Findit.lk App ad for Two weeks</th>
                <th className="text-center p-3 font-heading">Promote in Findit.lk Business Feed</th>
                <th className="text-center p-3 font-heading">350,000 Corporate Database</th>
                <th className="text-center p-3 font-heading">Findit.lk Featured ad one month</th>
                <th className="text-center p-3 font-heading">500,000 Corporate Database</th>
                <th className="text-center p-3 font-heading">750,000 Corporate Database</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg, i) => (
                <tr key={pkg.name} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                  <td className="p-3 text-foreground font-medium">{pkg.name}</td>
                  <td className="p-3 text-center">{pkg.fb}</td>
                  <td className="p-3 text-center">{pkg.ig}</td>
                  <td className="p-3 text-center">{pkg.li}</td>
                  <td className="p-3 text-center">{pkg.webAd}</td>
                  <td className="p-3 text-center">{pkg.appAd}</td>
                  <td className="p-3 text-center">{pkg.feed}</td>
                  <td className="p-3 text-center font-semibold text-accent">{pkg.corp}</td>
                  <td className="p-3 text-center">✔</td>
                  <td className="p-3 text-center font-semibold text-secondary">{pkg.full}</td>
                  <td className="p-3 text-center font-semibold text-accent">{pkg.mega}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Package CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
        <p className="text-foreground font-bold text-lg mb-1">Not sure which package is right for you?</p>
        <p className="text-muted-foreground text-sm mb-5">Our team will recommend the best plan for your budget and goals</p>
        <a data-selected-service="Email Marketing" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20need%20help%20choosing%20the%20right%20email%20marketing%20package." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity">
          <MessageSquare className="w-4 h-4" /> Get Free Consultation
        </a>
      </motion.div>

      {/* Multi-Channel Upsell */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Scale Your Marketing</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">📈 Need Larger Reach for Email Marketing?</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">For businesses looking to go beyond email and reach massive audiences — we offer advanced multi-channel marketing campaigns across Sri Lanka.</p>
        </div>

        <Link to="/multi-channel-marketing-sri-lanka" className="block p-8 pt-10 rounded-2xl upsell-highlight mb-8 relative overflow-hidden cursor-pointer hover:scale-[1.01] transition-transform duration-300">
          <div className="absolute top-0 right-0 px-5 py-2 rounded-bl-xl bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider animate-pulse">🔥 Most Popular</div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">🌐 Upgrade Email Campaigns to Multi-Channel</h3>
          <p className="text-muted-foreground mb-5">Combine your email campaigns with:</p>
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

        <Link to="/brand-blast-360" className="block p-8 pt-10 rounded-2xl upsell-highlight mb-8 relative overflow-hidden cursor-pointer hover:scale-[1.01] transition-transform duration-300">
          <div className="absolute top-0 right-0 px-5 py-2 rounded-bl-xl bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider animate-pulse">🚀 Maximum Reach</div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">⚡ Brand Blast 360 — 5 Channels, One Campaign</h3>
          <p className="text-muted-foreground mb-5">Unlock the full power of multi-channel marketing with Brand Blast 360. Reach 988,000+ contacts across:</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
            {[
              { icon: Mail, label: "Email 750K" },
              { icon: Smartphone, label: "Facebook" },
              { icon: MessageSquare, label: "LinkedIn" },
              { icon: Globe, label: "Findit.lk" },
              { icon: Zap, label: "Remarketing" },
            ].map((ch, i) => (
              <motion.div key={ch.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/5 border border-secondary/20 text-center">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <ch.icon className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-foreground font-medium text-sm">{ch.label}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-secondary font-semibold text-center text-lg">👉 One price · One report · 988,000+ reach starting LKR 15,000</p>
        </Link>

        <div className="p-8 rounded-2xl gradient-hero text-center relative overflow-hidden">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary-foreground mb-3">🚀 Scale Your Marketing Beyond Email</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">For businesses looking to go beyond email and achieve nationwide visibility, our multi-channel campaigns deliver unmatched reach and impact.</p>
          <Link to="/multi-channel-marketing-sri-lanka">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3 rounded-full text-base">
              <Rocket className="w-5 h-5 mr-2" /> View Multi-Channel Campaigns
            </Button>
          </Link>
        </div>
      </motion.div>

      <IndustryMarketingSection
        sectionEmoji="✉️"
        sectionTitle="Email Marketing Services for Every Industry in Sri Lanka"
        intro="Looking for email marketing in Sri Lanka that actually delivers results? Our data-driven campaigns help businesses reach the right audience, generate qualified leads, and drive real revenue — across every major industry in Sri Lanka."
        subtitle="Whether you want instant inquiries, more sales, or brand awareness, our email marketing campaigns are built to perform."
        industries={[
          { emoji: "🏨", title: "Hotel Email Marketing Sri Lanka – Increase Direct Bookings & Revenue", campaigns: ["Weekend getaway & staycation promotions", "Seasonal offers (Avurudu, December, long weekends)", "Luxury packages targeting high-income travelers"], results: ["More direct bookings (reduce OTA commissions)", "Higher room occupancy rates", "Increased revenue per campaign"], link: "/hotel-marketing-sri-lanka", linkText: "hotel marketing" },
          { emoji: "🎓", title: "Education Email Marketing Sri Lanka – Generate High-Quality Student Leads", campaigns: ["Course intake promotions (degree, diploma, short courses)", "Scholarship & limited-seat announcements", "Deadline-driven enrollment campaigns"], results: ["Consistent student inquiries", "Faster intake filling", "Lower cost per lead"], link: "/education-marketing-sri-lanka", linkText: "education marketing" },
          { emoji: "🏠", title: "Real Estate Email Marketing Sri Lanka – Reach Serious Property Buyers", campaigns: ["Apartment launches & land sales", "Investment opportunities for high-income audiences", "Location-targeted property promotions"], results: ["Direct buyer inquiries", "Faster sales cycles", "High-value, serious leads"], link: "/real-estate-marketing-sri-lanka", linkText: "real estate marketing" },
          { emoji: "🛍️", title: "E-commerce Email Marketing Sri Lanka – Drive Instant Sales", campaigns: ["Flash sales & limited-time discounts", "Product launches & exclusive offers", "Seasonal campaigns (New Year, festive promotions)"], results: ["Immediate website traffic", "Increased online sales", "Higher customer retention"], link: "/restaurant-marketing-sri-lanka", linkText: "restaurant & retail marketing" },
          { emoji: "🍽️", title: "Restaurant Email Marketing Sri Lanka – Increase Daily Customers", campaigns: ["Lunch & dinner deals", "Event promotions (live music, special nights)", "Discount coupons & loyalty campaigns"], results: ["Increased foot traffic", "More repeat customers", "Stronger brand recall"], link: "/restaurant-marketing-sri-lanka", linkText: "restaurant marketing" },
          { emoji: "💼", title: "Recruitment Email Marketing Sri Lanka – Find the Right Talent Faster", campaigns: ["Job vacancy promotions", "Industry-specific hiring campaigns", "Bulk recruitment drives"], results: ["Faster hiring cycles", "More qualified applicants", "Reduced recruitment costs"], link: "/staff-recruitment-campaigns-sri-lanka", linkText: "staff recruitment" },
          { emoji: "🏥", title: "Healthcare Email Marketing Sri Lanka – Boost Patient Engagement", campaigns: ["Health checkup promotions", "Clinic awareness campaigns", "Appointment reminders & follow-ups"], results: ["Increased patient bookings", "Better engagement & trust", "Improved retention rates"], link: null, linkText: "" },
          { emoji: "🚗", title: "Automotive Email Marketing Sri Lanka – Increase Inquiries & Sales", campaigns: ["Vehicle promotions & limited-time offers", "Service reminders & maintenance campaigns", "New model launches"], results: ["More showroom visits", "Increased inquiries", "Higher conversion rates"], link: null, linkText: "" },
          { emoji: "🏦", title: "Finance Email Marketing Sri Lanka – Generate High-Value Leads", campaigns: ["Loan, leasing & credit card offers", "Investment & savings promotions", "Financial awareness campaigns"], results: ["Qualified financial leads", "Higher approval conversions", "Strong ROI campaigns"], link: "/finance-marketing-sri-lanka", linkText: "finance marketing" },
          { emoji: "👗", title: "Fashion Email Marketing Sri Lanka – Grow Your Brand & Sales", campaigns: ["New collection launches", "Seasonal fashion campaigns", "Exclusive offers & influencer collaborations"], results: ["Increased brand awareness", "Higher sales (online & in-store)", "Repeat customers"], link: "/fashion-marketing-sri-lanka", linkText: "fashion marketing" },
          { emoji: "🎉", title: "Event Email Marketing Sri Lanka – Maximize Attendance & Ticket Sales", campaigns: ["Concerts, exhibitions & corporate events", "Early-bird ticket promotions", "Reminder & urgency campaigns"], results: ["Higher event turnout", "Faster ticket sales", "Strong audience engagement"], link: "/event-marketing-sri-lanka", linkText: "event marketing" },
          { emoji: "🏢", title: "Corporate & B2B Email Marketing Sri Lanka – Reach Decision Makers Directly", campaigns: ["Service promotions targeting businesses", "Partnership & collaboration offers", "Corporate announcements"], results: ["Direct access to decision-makers", "High-quality B2B leads", "Increased conversions"], link: null, linkText: "" },
          { emoji: "🧳", title: "Travel & Tourism Email Marketing Sri Lanka – Promote Packages & Experiences", campaigns: ["Local & international tour packages", "Holiday & seasonal travel deals", "Group & corporate travel promotions"], results: ["Increased bookings", "More inquiries", "Higher campaign ROI"], link: "/hotel-marketing-sri-lanka", linkText: "hotel & travel marketing" },
        ]}
        whyTitle="🔥 Why Our Email Marketing Works in Sri Lanka"
        whyPoints={["Access to 350,000+ targeted email users", "Reach corporate professionals & high-income audiences", "Fast campaign launch (within hours)", "Proven performance across multiple industries", "Integrated campaigns (Email + SMS + Web Advertising)"]}
        whyFooter="👉 Compared to other channels, email marketing in Sri Lanka delivers faster reach, better targeting, and higher ROI"
        crossLinks={[]}
        ctaTitle="🚀 Start Your Email Marketing Campaign in Sri Lanka Today"
        ctaSubtitle="Ready to reach thousands of potential customers and generate real results?"
        ctaWhatsAppMessage="Hi Buzz Connect, I want to start an email marketing campaign for my industry."
        ctaButtonText="Get a Free Consultation & Campaign Strategy"
      />

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="w-7 h-7 text-primary" />
          <h2 className="font-heading text-2xl font-bold text-foreground">Frequently Asked Questions – Email Marketing Sri Lanka</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group p-5 rounded-xl bg-card shadow-card border border-border">
              <summary className="font-heading font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                {faq.q}
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center p-10 sm:p-14 rounded-2xl gradient-hero relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.15),transparent_70%)]" />
        <div className="relative z-10">
          <p className="text-accent font-bold text-sm uppercase tracking-wider mb-3">Ready to Reach More Customers?</p>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">Launch a Campaign That Delivers Real Visibility</h2>
          <p className="text-primary-foreground/80 mb-3 max-w-2xl mx-auto text-lg">
            Get More Reach. Get More Results.
          </p>
          <p className="text-primary-foreground/60 mb-8 max-w-xl mx-auto text-sm">
            From LKR 6,000 — reach 350,000+ professionals with email + Findit.lk advertising included
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact-us" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-opacity text-base shadow-lg">
              Start Your Campaign Today <ArrowRight className="w-4 h-4" />
            </Link>
            <a data-selected-service="Email Marketing" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%20want%20to%20start%20an%20email%20campaign." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors text-base">
              <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
      {/* ROI Calculation Article Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 mb-8 max-w-4xl mx-auto"
      >
        <Link
          to="/email-marketing-roi-calculation-sri-lanka"
          className="block p-6 sm:p-8 rounded-2xl bg-card border border-accent/30 hover:border-accent hover:shadow-xl transition-all group"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">📊</span>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">New Guide</p>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                How to Calculate Your Email Marketing ROI in Sri Lanka
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                Learn exactly how to read your BuzzConnect campaign report, calculate your true return on investment, and use the data to make every next campaign stronger.
              </p>
              <span className="inline-flex items-center text-sm font-semibold text-accent">
                Read the ROI Guide <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </Link>
      </motion.div>

      <RelatedArticles currentPath="/email-marketing" />
      <DigitalMarketingCTA variant="alt" />
    </ServicePageLayout>
  );
};

export default EmailMarketing;
