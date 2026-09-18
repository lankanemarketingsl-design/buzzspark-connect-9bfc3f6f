import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, BarChart3, Building2, CheckCircle2, CircleDollarSign, Eye,
  Facebook, GraduationCap, Heart, Hotel, Instagram, Layers3, Linkedin,
  Megaphone, MessageCircle, RefreshCw, Search, Send, ShoppingBag, Sparkles,
  Target, Users, Utensils, Video, Workflow, XCircle,
} from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";
import SocialCampaignPlanForm from "@/components/SocialCampaignPlanForm";
import { Button } from "@/components/ui/button";

const waUrl = "https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27d%20like%20a%20free%20social%20media%20campaign%20plan.";

const problems = [
  "Posting without a strategy", "Boosting posts without a clear objective", "Reaching people unlikely to buy",
  "Attractive creative without a conversion path", "No retargeting or lead follow-up", "No clear measurement",
  "Spending without understanding the numbers", "Using the same content on every platform", "Prioritising followers over business outcomes",
];

const framework = [
  ["Attract", "Reach audiences relevant to the offer."], ["Engage", "Give people a useful reason to interact."],
  ["Capture", "Turn interest into messages, forms or enquiries."], ["Nurture", "Reconnect through remarketing, email, SMS or WhatsApp where appropriate."],
  ["Convert", "Move prospects towards the campaign objective."], ["Measure", "Track meaningful business and campaign metrics."],
  ["Optimise", "Improve the creative, audience, offer and budget allocation."],
];

const platforms = [
  { icon: Facebook, name: "Facebook", best: "Local businesses, broad audiences and community", objectives: "Leads, reach, offers, traffic and remarketing", content: "Posts, video, carousels and lead forms", recommendation: "When scale, local targeting or retargeting matters", to: "/facebook-marketing-sri-lanka" },
  { icon: Instagram, name: "Instagram", best: "Hospitality, food, fashion, beauty and lifestyle", objectives: "Discovery, engagement, product interest and enquiries", content: "Reels, Stories, carousels and visual campaigns", recommendation: "When the product or experience benefits from strong visuals", to: "/instagram-marketing-sri-lanka" },
  { icon: Video, name: "TikTok", best: "Younger audiences, discovery and education", objectives: "Awareness, consideration and product discovery", content: "Short-form video, demonstrations and explainers", recommendation: "When the team can sustain platform-native video", to: "/tiktok-marketing-sri-lanka" },
  { icon: Linkedin, name: "LinkedIn", best: "B2B, recruitment and professional services", objectives: "Corporate visibility, enquiries and employer branding", content: "Expert posts, company updates and professional campaigns", recommendation: "When decision-makers or professional audiences are central", to: "/linkedin-marketing-sri-lanka" },
];

const services = [
  ["Social Media Strategy", "Turns your business objective into a channel, audience, content and measurement plan.", "Clarify the route to results", "/social-media-agency-sri-lanka"],
  ["Content Strategy", "Plans useful campaign themes, formats, messages and calls to action.", "Build relevant attention", "/social-media-content-creation-sri-lanka"],
  ["Social Media Management", "Coordinates publishing, monitoring and ongoing improvement.", "Maintain a consistent presence", "/social-media-management-sri-lanka"],
  ["Facebook Marketing", "Uses Facebook content, audiences, offers, lead forms and remarketing.", "Reach and capture local demand", "/facebook-marketing-sri-lanka"],
  ["Instagram Marketing", "Combines Reels, Stories, carousels and advertising for visual discovery.", "Create product and brand interest", "/instagram-marketing-sri-lanka"],
  ["TikTok Marketing", "Develops short-form video suited to discovery and platform behaviour.", "Earn attention through video", "/tiktok-marketing-sri-lanka"],
  ["LinkedIn Marketing", "Supports B2B visibility, recruitment and professional audience targeting.", "Reach business decision-makers", "/linkedin-marketing-sri-lanka"],
  ["Paid Social Advertising", "Plans objectives, targeting, placements, budgets and optimisation.", "Scale qualified reach", "/social-media-advertising-sri-lanka"],
  ["Lead Generation", "Connects ads and content to forms, messages and follow-up paths.", "Generate qualified enquiries", "/social-media-lead-generation-sri-lanka"],
  ["Retargeting", "Reconnects with people who visited, watched or engaged when appropriate.", "Continue the buying journey", "/meta-ads-agency-sri-lanka"],
  ["Campaign Management", "Coordinates launch, monitoring, testing and reporting across a campaign.", "Keep delivery accountable", "/social-media-campaigns-sri-lanka"],
  ["Creative Production", "Produces static, carousel, short-video and promotional campaign assets.", "Communicate the offer clearly", "/social-media-content-creation-sri-lanka"],
  ["Performance Reporting", "Explains delivery, response, cost and next actions in practical terms.", "Make informed decisions", "/social-media-campaigns-sri-lanka"],
];

const process = [
  ["01", "Business discovery", "We clarify the business, offer, customer, geography, competition, current marketing and objective."],
  ["02", "Audience and market research", "We identify target locations, demographics, interests, behaviours and customer intent."],
  ["03", "Campaign strategy", "We select the objective, platform mix, offer, funnel, budget and useful KPIs."],
  ["04", "Creative production", "We develop approved static, carousel or video assets, copy and landing-page messaging where needed."],
  ["05", "Campaign launch", "We configure audiences, ads, placements, tracking and budgets for the agreed scope."],
  ["06", "Monitor and optimise", "We review reach, click-through rate, cost per click, leads, conversions and creative response."],
  ["07", "Report and improve", "We explain performance and recommend the next campaign cycle based on what the data shows."],
];

const industries = [
  [Hotel, "Hotels & Hospitality", "Promote rooms, packages and experiences with visual campaigns, retargeting and booking-focused calls to action."],
  [Utensils, "Restaurants & Food", "Turn menu items, new launches and limited offers into local discovery, reservations and delivery enquiries."],
  [Building2, "Real Estate", "Present listings with video and carousels, capture enquiries and reconnect with interested prospects."],
  [GraduationCap, "Education", "Promote courses, intakes and seminars through information-led creative and enquiry campaigns."],
  [CircleDollarSign, "Finance", "Explain services clearly, build credibility and route qualified prospects into compliant enquiry journeys."],
  [ShoppingBag, "Retail & E-commerce", "Use product-led creative, offers and remarketing to support discovery and purchase intent."],
  [Sparkles, "Fashion, Beauty & Fitness", "Use visual demonstrations, transformations and launches to drive relevant appointments or product interest."],
  [Building2, "B2B & Technology", "Reach professional audiences with expertise, use cases and consultation-led campaigns."],
  [Users, "Recruitment", "Present vacancies and employer value clearly, then route suitable applicants into a simple application path."],
  [Megaphone, "Events & Automotive", "Build time-bound awareness, showcase the experience or product and capture registrations or enquiries."],
];

const examples = [
  { industry: "Hotel", objective: "Generate booking enquiries", campaign: "Room or package offer", platform: "Facebook + Instagram", creative: "Video + carousel", cta: "WhatsApp or booking page", measure: "Qualified enquiries and confirmed bookings" },
  { industry: "Education", objective: "Generate course enquiries", campaign: "Intake campaign", platform: "Facebook + Instagram", creative: "Course benefits + proof + CTA", cta: "Lead form or WhatsApp", measure: "Qualified leads and enrolments" },
  { industry: "Real estate", objective: "Generate property enquiries", campaign: "Listing launch", platform: "Facebook + Instagram", creative: "Property video + carousel", cta: "Request details", measure: "Qualified property enquiries" },
];

const faqs = [
  { q: "What is social media marketing in Sri Lanka?", a: "Social media marketing is the coordinated use of strategy, content, community activity and paid advertising to reach Sri Lankan audiences and support a defined business objective. It can build awareness, traffic, enquiries, leads, bookings, applications or sales depending on the campaign." },
  { q: "How much does social media marketing cost in Sri Lanka?", a: "BuzzConnect social media campaign and service packages start from LKR 50,000. The final agency fee depends on platforms, creative requirements, duration, management scope and campaign complexity; advertising media spend is quoted separately." },
  { q: "How much does a social media marketing agency charge?", a: "Agency charges vary with the work involved rather than one universal rate. Ask for a written scope showing strategy, content, ad management, reporting and any exclusions, then compare the agency fee separately from the amount paid to the advertising platform." },
  { q: "What is included in social media marketing?", a: "A scope may include strategy, content planning, creative production, page management, paid campaign setup, targeting, optimisation, lead-generation flows and reporting. Exact deliverables depend on the selected package and are confirmed before work starts." },
  { q: "What is the difference between social media marketing and social media advertising?", a: "Social media marketing is the wider system, including strategy, content, organic presence, community activity, advertising and measurement. Social media advertising is the paid part used to target and scale campaign delivery." },
  { q: "Which social media platform is best for a business in Sri Lanka?", a: "There is no single best platform for every business. Facebook may suit broad local reach, Instagram visual discovery, TikTok short-form discovery and LinkedIn professional audiences; the right choice depends on your customer, objective, offer, creative and budget." },
  { q: "How much should I spend on Facebook advertising?", a: "The appropriate media budget depends on audience size, geography, objective, competition, campaign length and required lead volume. BuzzConnect recommends separating the media budget from the agency fee and setting it only after the campaign objective and audience are clear." },
  { q: "Can social media marketing generate leads?", a: "Yes. Social campaigns can generate leads when the audience, offer, creative, call to action, capture method and follow-up process work together. Lead quality and response speed matter as much as the number of forms or messages received." },
  { q: "How long does social media marketing take to produce results?", a: "Paid campaigns can begin producing delivery and response data soon after launch, while brand building and organic audience development usually require sustained work. The practical timeline depends on the objective, budget, offer, audience and quality of the conversion path." },
  { q: "Can BuzzConnect manage Facebook and Instagram advertising?", a: "Yes. BuzzConnect can plan, set up, manage and report on Facebook and Instagram campaigns within the agreed scope, including audience targeting, creative coordination, lead generation and optimisation." },
  { q: "Does the LKR 50,000 starting price include advertising spend?", a: "No. LKR 50,000 is the starting point for BuzzConnect's campaign or service fee. Advertising media spend paid to platforms is separate unless a written package explicitly states otherwise." },
  { q: "What industries does BuzzConnect work with?", a: "BuzzConnect develops campaigns for sectors including hospitality, food, real estate, education, finance, healthcare, retail, fashion, automotive, events, construction, professional services, recruitment, fitness and technology. The strategy changes by audience and objective." },
  { q: "How do I start a social media marketing campaign?", a: "Start by sharing your business, offer, target customer, objective, preferred geography and available budget. BuzzConnect can then recommend a suitable platform mix, campaign structure, deliverables and measurement plan." },
];

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.section initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className={`mb-16 sm:mb-24 ${className}`}>{children}</motion.section>
);

const Heading = ({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) => (
  <div className="max-w-3xl mb-8">
    {eyebrow && <p className="text-sm font-semibold uppercase text-accent mb-2">{eyebrow}</p>}
    <h2 className="font-heading text-2xl sm:text-4xl font-bold text-foreground">{title}</h2>
    {intro && <p className="mt-3 text-muted-foreground leading-relaxed">{intro}</p>}
  </div>
);

const SocialMediaMarketing = () => {
  const jsonLd = useMemo(() => [
    { "@context": "https://schema.org", "@type": "Service", name: "Social Media Marketing Sri Lanka", serviceType: "Social media marketing services", url: "https://buzzconnect.lk/social-media-marketing-sri-lanka", provider: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" }, areaServed: { "@type": "Country", name: "Sri Lanka" }, description: "Social media strategy, content, paid advertising, lead generation, campaign management and reporting for Sri Lankan businesses.", offers: { "@type": "Offer", priceCurrency: "LKR", price: "50000", description: "BuzzConnect agency service packages start from LKR 50,000. Advertising media spend is separate." } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
  ], []);

  return (
    <ServicePageLayout
      badge="Social Media Marketing Sri Lanka"
      title="Social Media Marketing Sri Lanka That Turns Attention Into Customers"
      subtitle="Build your brand, reach the right Sri Lankan audience and generate measurable enquiries through strategic Facebook, Instagram, TikTok and LinkedIn campaigns. Starting from LKR 50,000."
      primaryCta={{ label: "Get Your Free Campaign Plan", href: "/social-media-marketing-sri-lanka#campaign-plan" }}
      secondaryCta={{ label: "Chat With BuzzConnect", href: waUrl }}
      heroHighlights={["Campaigns from LKR 50,000", "Facebook, Instagram, TikTok & LinkedIn", "Content + paid advertising", "Lead generation", "Campaign reporting", "Findit.lk amplification available"]}
    >
      <SEOHead
        title="Social Media Marketing Sri Lanka | Facebook, Instagram & TikTok | BuzzConnect"
        description="Social media marketing in Sri Lanka from LKR 50,000. Get strategy, content, paid advertising, lead generation and measurable reporting from BuzzConnect."
        canonical="/social-media-marketing-sri-lanka"
        keywords="social media marketing Sri Lanka, social media marketing agency Sri Lanka, social media marketing services Sri Lanka, Facebook marketing Sri Lanka, Instagram marketing Sri Lanka"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Social Media Marketing", url: "/social-media-marketing-sri-lanka" }]}
        jsonLd={jsonLd}
      />

      <Section className="grid lg:grid-cols-[1.05fr_.95fr] gap-8 items-start">
        <div>
          <Heading eyebrow="The commercial reality" title="Your Business May Be Getting Views — But Are You Getting Customers?" intro="Activity can look busy while the path to an enquiry remains broken. A useful campaign connects each post and ad to a business objective, an audience, an offer and a next step." />
          <p className="text-lg font-semibold text-foreground">BuzzConnect approaches social media as a business growth channel, not simply a posting service.</p>
          <Button asChild variant="link" className="px-0 mt-3"><a href="#campaign-process">See how we build a campaign <ArrowRight /></a></Button>
        </div>
        <ul className="grid sm:grid-cols-2 gap-3">
          {problems.map((problem) => <li key={problem} className="flex gap-3 p-4 bg-card border border-border rounded-md"><XCircle className="w-5 h-5 text-destructive shrink-0" /><span className="text-sm text-muted-foreground">{problem}</span></li>)}
        </ul>
      </Section>

      <Section>
        <Heading title="What Is Social Media Marketing in Sri Lanka?" intro="Social media marketing is the coordinated use of strategy, content, organic distribution, paid advertising, community engagement, lead generation, retargeting and measurement to support a business objective. It is broader than posting images on Facebook." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 border border-border rounded-md overflow-hidden bg-card">
          {["Strategy", "Content", "Audience", "Campaign", "Traffic", "Leads", "Follow-up", "Sales", "Measurement"].map((item, index) => <div key={item} className="relative px-3 py-5 text-center text-xs font-semibold border-b sm:border-b-0 sm:border-r border-border last:border-0">{item}{index < 8 && <ArrowRight className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-accent z-10" />}</div>)}
        </div>
      </Section>

      <Section>
        <Heading eyebrow="Our methodology" title="Our Social Media Growth Framework" intro="Not every campaign requires every stage. The framework prevents disconnected activity and keeps the campaign tied to the commercial objective." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {framework.map(([name, copy], index) => <div key={name} className="p-5 bg-card border border-border rounded-md"><span className="text-xs font-bold text-accent">0{index + 1}</span><h3 className="font-bold text-lg mt-2">{name}</h3><p className="text-sm text-muted-foreground mt-2">{copy}</p></div>)}
        </div>
      </Section>

      <Section>
        <Heading title="Which Social Media Platforms Should Your Business Use?" intro="Platform selection depends on the audience, industry, objective, creative format and budget. No platform is universally best." />
        <div className="overflow-x-auto border border-border rounded-md">
          <table className="w-full min-w-[850px] text-sm bg-card">
            <thead className="bg-primary text-primary-foreground"><tr>{["Platform", "Best for", "Typical objectives", "Content opportunities", "When we may recommend it"].map((h) => <th key={h} className="p-4 text-left">{h}</th>)}</tr></thead>
            <tbody>{platforms.map((p) => <tr key={p.name} className="border-t border-border align-top"><td className="p-4"><Link to={p.to} className="font-bold text-accent inline-flex items-center gap-2"><p.icon className="w-4 h-4" />{p.name}</Link></td><td className="p-4 text-muted-foreground">{p.best}</td><td className="p-4 text-muted-foreground">{p.objectives}</td><td className="p-4 text-muted-foreground">{p.content}</td><td className="p-4 text-muted-foreground">{p.recommendation}</td></tr>)}</tbody>
          </table>
        </div>
      </Section>

      <Section>
        <Heading eyebrow="Connected capabilities" title="Our Social Media Marketing Services in Sri Lanka" intro="The right scope combines only the services needed for your objective. Each specialist page explains its process and deliverables in more detail." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(([title, copy, objective, to]) => <Link key={title} to={to} className="group p-5 bg-card border border-border rounded-md hover:border-accent transition-colors"><h3 className="font-bold group-hover:text-accent">{title}</h3><p className="text-sm text-muted-foreground mt-2">{copy}</p><p className="text-xs font-semibold text-foreground mt-4">Objective: {objective}</p><ArrowRight className="w-4 h-4 text-accent mt-4" /></Link>)}
        </div>
        <div className="mt-8 flex flex-wrap gap-3"><Button asChild variant="hero"><a href={waUrl} data-selected-service="Social Media Marketing" target="_blank" rel="noopener noreferrer">Discuss the right service mix <MessageCircle /></a></Button><Button asChild variant="outline"><Link to="/social-media-packages-sri-lanka">Compare packages <ArrowRight /></Link></Button></div>
      </Section>

      <Section className="grid lg:grid-cols-2 gap-6">
        <div className="p-6 bg-card border border-border rounded-md"><h2 className="text-2xl font-bold">Organic Social Media</h2><p className="text-muted-foreground mt-3">Organic activity supports content, community, brand trust and a consistent long-term presence. It gives people something useful to discover when they visit or follow the brand.</p></div>
        <div className="p-6 bg-primary text-primary-foreground rounded-md"><h2 className="text-2xl font-bold">Paid Social Media</h2><p className="text-primary-foreground/75 mt-3">Paid campaigns add audience targeting, scale, campaign objectives, lead generation, traffic and conversion paths. For many businesses, combining paid campaigns with organic content creates a stronger system—but the right mix depends on the objective, audience, offer and budget.</p><Link to="/social-media-advertising-sri-lanka" className="inline-flex items-center gap-2 text-accent font-semibold mt-4">Explore social media advertising <ArrowRight className="w-4 h-4" /></Link></div>
      </Section>

      <Section>
        <Heading eyebrow="Measure what matters" title="We Don’t Build Campaigns Just for Likes" intro="Campaign objectives can include awareness, qualified reach, website traffic, messages, calls, leads, registrations, enquiries, sales, bookings, store visits, event registrations or recruitment applications." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[["Likes", "Qualified enquiries"], ["Followers", "Relevant audience growth"], ["Reach", "Qualified reach"], ["Clicks", "Conversions"]].map(([vanity, outcome]) => <div key={vanity} className="p-5 bg-card border border-border rounded-md"><p className="text-xs uppercase text-muted-foreground">Vanity metric</p><p className="font-semibold line-through decoration-destructive/60 mt-1">{vanity}</p><ArrowRight className="w-4 h-4 text-accent my-3" /><p className="text-xs uppercase text-muted-foreground">Better business metric</p><p className="font-bold text-accent mt-1">{outcome}</p></div>)}
        </div>
      </Section>

      <Section className="scroll-mt-24" >
        <div id="campaign-process" className="scroll-mt-24"><Heading eyebrow="From brief to improvement" title="How Our Social Media Marketing Campaigns Work" /></div>
        <div className="grid gap-4">{process.map(([number, title, copy]) => <div key={number} className="grid sm:grid-cols-[64px_220px_1fr] gap-3 p-5 border border-border bg-card rounded-md items-center"><span className="text-2xl font-bold text-accent">{number}</span><h3 className="font-bold">{title}</h3><p className="text-sm text-muted-foreground">{copy}</p></div>)}</div>
        <div className="mt-7"><Button asChild variant="hero"><a href="#campaign-plan">Request a campaign plan <ArrowRight /></a></Button></div>
      </Section>

      <Section className="grid lg:grid-cols-[1.1fr_.9fr] gap-8 items-start">
        <div><Heading title="What Do You Get When You Work With BuzzConnect?" intro="Depending on the agreed package and scope, deliverables can include the following. Your written proposal confirms exactly what is included." /><div className="grid sm:grid-cols-2 gap-3">{["Strategy and campaign planning", "Content concepts", "Creative production", "Advertising setup", "Audience targeting", "Campaign management", "Optimisation", "Performance reporting", "Campaign consultation", "Multi-channel opportunities"].map((item) => <div key={item} className="flex gap-2 text-sm"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" />{item}</div>)}</div></div>
        <div className="p-7 bg-primary text-primary-foreground rounded-md"><p className="text-sm text-primary-foreground/70">Starting from</p><p className="text-4xl font-bold text-accent mt-2">LKR 50,000</p><h3 className="font-bold text-xl mt-6">Two separate costs</h3><div className="mt-4 space-y-4"><div><p className="font-semibold">BuzzConnect agency fee</p><p className="text-sm text-primary-foreground/70">Strategy, agreed production, management and reporting scope.</p></div><div><p className="font-semibold">Advertising media spend</p><p className="text-sm text-primary-foreground/70">Budget paid to the advertising platform. This is separate unless a written package explicitly says otherwise.</p></div></div><Button asChild variant="hero" className="mt-6"><Link to="/social-media-packages-sri-lanka">View Social Media Packages <ArrowRight /></Link></Button></div>
      </Section>

      <Section>
        <Heading title="Who Can Benefit From Social Media Marketing?" intro="The opportunity changes by industry, customer journey and offer. These are practical uses—not promises of a particular result." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{industries.map(([Icon, title, copy]) => <div key={title as string} className="p-5 bg-card border border-border rounded-md"><Icon className="w-6 h-6 text-accent" /><h3 className="font-bold mt-3">{title as string}</h3><p className="text-sm text-muted-foreground mt-2">{copy as string}</p></div>)}</div>
        <div className="mt-7"><Button asChild variant="outline"><a href="#campaign-plan">Discuss your industry <ArrowRight /></a></Button></div>
      </Section>

      <Section>
        <Heading eyebrow="Illustrative scenarios" title="What Can a Social Media Campaign Look Like?" intro="These examples show possible campaign structures. They are not presented as client case studies or guaranteed results." />
        <div className="grid lg:grid-cols-3 gap-5">{examples.map((example) => <article key={example.industry} className="p-6 bg-card border border-border rounded-md"><p className="text-xs font-bold uppercase text-accent">Example: {example.industry}</p><dl className="mt-4 space-y-3 text-sm">{Object.entries(example).filter(([key]) => key !== "industry").map(([key, value]) => <div key={key}><dt className="capitalize font-semibold">{key}</dt><dd className="text-muted-foreground">{value}</dd></div>)}</dl></article>)}</div>
      </Section>

      <Section className="p-7 sm:p-10 bg-primary text-primary-foreground rounded-md">
        <Heading eyebrow="A wider campaign system" title="Social Media + More Reach Through BuzzConnect" intro="Findit.lk is not a social network. Where relevant, it can add a separate distribution and visibility opportunity to a coordinated campaign." />
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">{["Social Media", "Findit.lk", "Email", "SMS", "WhatsApp", "Other digital channels"].map((channel, index) => <div key={channel} className="flex items-center gap-2"><span className="px-4 py-3 border border-primary-foreground/20 rounded-md font-semibold text-sm">{channel}</span>{index < 5 && <span className="text-accent text-xl">+</span>}</div>)}</div>
        <p className="text-primary-foreground/70 mt-6 max-w-3xl">This lets us consider awareness, distribution, lead capture and follow-up together instead of treating social media as an isolated posting activity. Channels are recommended only when they fit the objective and scope.</p>
        <Button asChild variant="hero" className="mt-6"><Link to="/multi-channel-marketing-sri-lanka">Explore multi-channel marketing <ArrowRight /></Link></Button>
      </Section>

      <Section className="grid lg:grid-cols-2 gap-8">
        <div><Heading title="Why Businesses Choose BuzzConnect" /><ul className="space-y-3">{["Campaigns designed for Sri Lankan audiences and business contexts", "Strategy, creative and advertising coordinated in one workflow", "Lead-generation and follow-up paths considered from the start", "Optional multi-channel opportunities, including Findit.lk", "A transparent published starting price", "Reporting tied to agreed campaign objectives", "Industry-specific planning rather than one template", "Direct campaign consultation"].map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /><span className="text-muted-foreground">{item}</span></li>)}</ul></div>
        <div className="p-7 border border-accent/30 bg-accent/5 rounded-md"><h2 className="text-2xl font-bold">What We Don’t Believe In</h2><ul className="mt-5 space-y-3">{["Every business needs to be on every platform.", "Followers alone equal business growth.", "Boosting every post is a strategy.", "Every campaign should optimise for clicks.", "A beautiful creative automatically produces sales.", "One fixed channel mix suits every business."].map((item) => <li key={item} className="flex gap-3"><XCircle className="w-5 h-5 text-destructive shrink-0" /><span className="text-sm text-muted-foreground">{item}</span></li>)}</ul><p className="font-semibold mt-5">We believe strategy should follow the business objective.</p></div>
      </Section>

      <Section>
        <Heading title="Before You Spend Money on Social Media Ads, Check These 7 Things" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">{["Is your target customer clearly defined?", "Is the offer strong and specific?", "Is the creative suitable for the platform?", "Is there a clear call to action?", "Does the landing page or message flow work?", "Is the budget sufficient for the objective?", "Can your business follow up quickly on leads?"].map((item, index) => <div key={item} className="p-4 bg-card border border-border rounded-md"><span className="text-accent font-bold">0{index + 1}</span><p className="text-sm font-medium mt-2">{item}</p></div>)}</div>
      </Section>

      <Section className="grid lg:grid-cols-2 gap-8">
        <div><Heading title="How Much Should a Business Spend on Social Media Marketing in Sri Lanka?" intro="Plan two budgets: the agency or service fee, and the advertising media spend. BuzzConnect service packages start from LKR 50,000; the suitable media budget depends on industry, geography, objective, audience, competition, campaign duration and desired volume." /><div className="flex flex-wrap gap-3"><Button asChild variant="outline"><Link to="/social-media-marketing-cost-sri-lanka">Read the cost guide</Link></Button><Button asChild variant="outline"><Link to="/social-media-packages-sri-lanka">Compare packages</Link></Button></div></div>
        <div><Heading title="How to Choose a Social Media Marketing Agency in Sri Lanka" /><ul className="grid gap-2 text-sm text-muted-foreground">{["Do they understand your industry and customer journey?", "Can they explain the strategy, not only the posting schedule?", "Do they separate advertising spend from agency fees?", "Can they show relevant, verifiable work?", "Do they measure business outcomes?", "Who creates the content and manages the advertising?", "How often do they report and who owns the advertising accounts?", "What happens after launch and how are leads handled?"].map((item) => <li key={item} className="flex gap-2"><Search className="w-4 h-4 text-accent shrink-0 mt-0.5" />{item}</li>)}</ul></div>
      </Section>

      <Section>
        <Heading title="Social Media Marketing Results & Campaign Experience" intro="Verified outcomes should be shown with their objective, strategy, platform, period and measurement context. We will not publish invented results or anonymous claims. Until publishable case-study data is available, the clearly labelled scenarios above show how a campaign can be structured without presenting projections as facts." />
        <div className="flex flex-wrap gap-3"><Button asChild variant="outline"><Link to="/social-media-marketing-sri-lanka-complete-guide-2026">Read the educational 2026 guide <ArrowRight /></Link></Button><Button asChild variant="outline"><Link to="/lead-generation-sri-lanka">Explore lead generation</Link></Button></div>
      </Section>

      <Section>
        <Heading title="Frequently Asked Questions About Social Media Marketing in Sri Lanka" />
        <div className="grid lg:grid-cols-2 gap-4">{faqs.map((faq) => <article key={faq.q} className="p-5 bg-card border border-border rounded-md"><h3 className="font-bold flex gap-2"><MessageCircle className="w-5 h-5 text-accent shrink-0" />{faq.q}</h3><p className="text-sm text-muted-foreground mt-3 leading-relaxed">{faq.a}</p></article>)}</div>
        <div className="mt-8 flex flex-wrap gap-3"><Button asChild variant="hero"><a href={waUrl} data-selected-service="Social Media Marketing" target="_blank" rel="noopener noreferrer">Ask BuzzConnect on WhatsApp <MessageCircle /></a></Button><Button asChild variant="outline"><Link to="/social-media-packages-sri-lanka">View packages</Link></Button></div>
      </Section>

      <Section className="grid lg:grid-cols-[.8fr_1.2fr] gap-8 p-7 sm:p-10 bg-card border border-border rounded-md scroll-mt-24">
        <div id="campaign-plan" className="scroll-mt-24"><p className="text-sm font-semibold uppercase text-accent">Free campaign planning request</p><h2 className="text-3xl font-bold mt-2">Ready to Turn Social Media Into a Growth Channel?</h2><p className="text-muted-foreground mt-4">Tell us whether you want more awareness, enquiries, leads, bookings, sales or customers. We’ll use your answers to identify a suitable campaign structure.</p><div className="mt-6 p-4 bg-accent/10 border border-accent/30 rounded-md"><p className="text-sm">BuzzConnect service packages</p><p className="text-2xl font-bold text-accent">From LKR 50,000</p><p className="text-xs text-muted-foreground mt-1">Advertising media spend is separate.</p></div></div>
        <SocialCampaignPlanForm />
      </Section>

      <Section className="text-center p-8 sm:p-12 gradient-hero text-primary-foreground rounded-md">
        <h2 className="text-3xl font-bold">Choose Your Next Step</h2><p className="text-primary-foreground/75 mt-3 max-w-2xl mx-auto">Request a campaign plan, talk to BuzzConnect now, or compare the available social media packages.</p><div className="flex flex-wrap justify-center gap-3 mt-7"><Button asChild variant="hero" size="lg"><a href="#campaign-plan">Get My Free Campaign Plan</a></Button><Button asChild variant="hero-outline" size="lg"><a href={waUrl} data-selected-service="Social Media Marketing" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></Button><Button asChild variant="hero-outline" size="lg"><Link to="/social-media-packages-sri-lanka">View Packages</Link></Button></div>
      </Section>
    </ServicePageLayout>
  );
};

export default SocialMediaMarketing;
