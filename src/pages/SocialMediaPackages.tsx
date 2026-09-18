import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, CheckCircle2, MessageCircle, Sparkles, Target, BarChart3, Repeat,
  Layers, TrendingUp, Wallet, Facebook, Instagram, Music2, Linkedin, Video,
  Palette, Megaphone, Users, FileBarChart, Settings2, AlertTriangle,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const WA = "94771437707";
const wa = (text: string) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

const benefits = [
  { icon: CheckCircle2, title: "Consistency builds trust", desc: "Customers trust brands that show up regularly. A package keeps your pages active with planned content, so you always look established and professional." },
  { icon: Wallet, title: "Better value for money", desc: "Bundling content, design, ads and reporting into one package costs far less than buying each piece separately — and your ad budget is managed to get more per rupee." },
  { icon: Target, title: "A real strategy", desc: "Instead of posting whatever comes to mind, a package follows a plan built around your goals — awareness, engagement or lead generation." },
  { icon: Layers, title: "Multi-platform presence", desc: "Be visible where your customers actually are — Facebook, Instagram, TikTok and LinkedIn — without managing each one yourself." },
  { icon: BarChart3, title: "Measurable results", desc: "Every package includes reporting, so you can see exactly what your money produced: reach, engagement, clicks and leads." },
  { icon: Repeat, title: "Room to scale", desc: "Start small and move up a tier whenever you're ready. No long lock-in contracts, no wasted spend." },
];

const packages = [
  {
    name: "Social Media Campaign",
    price: "From LKR 50,000",
    popular: true,
    best: "A full multi-platform campaign tailored to your business.",
    features: [
      "Multi-platform campaign setup",
      "Professional content creation",
      "Audience targeting & segmentation",
      "Paid ad management & optimisation",
      "Findit.lk integration & visibility",
      "Performance tracking & reporting",
    ],
    cta: "Get a Custom Quote",
    waText: "Hi Buzz Connect, I'm interested in your social media marketing campaign package (from LKR 50,000).",
  },
  {
    name: "Ongoing Management",
    price: "Custom",
    popular: false,
    best: "Continuous monthly content, ads & optimisation across platforms.",
    features: ["Monthly content & posting", "Ongoing ad campaigns", "Community management", "Monthly reporting", "Continuous optimisation"],
    cta: "Ask About Monthly",
    waText: "Hi Buzz Connect, I'd like ongoing monthly social media management.",
  },
  {
    name: "Enterprise / Custom",
    price: "Tailored",
    popular: false,
    best: "For larger brands & multi-location businesses.",
    features: ["All platforms", "High content & video volume", "Advanced ad campaigns", "Dedicated manager", "Multi-channel support"],
    cta: "Request a Quote",
    waText: "Hi Buzz Connect, I'd like a custom enterprise social media package quote.",
  },
];

const included = [
  ["Social media strategy", "a plan aligned to your goals and audience"],
  ["Content creation & design", "posts, banners & promotional creatives"],
  ["Paid advertising", "Facebook & Instagram ad campaigns that convert"],
  ["Audience targeting", "reach the right people by location, interest & behaviour"],
  ["Page & community management", "consistent posting & engagement"],
  ["Video & reels", "short-form video for TikTok, Reels & Shorts (higher tiers)"],
  ["WhatsApp integration", "turn followers into direct conversations"],
  ["Findit.lk visibility", "extended reach to a high-intent audience"],
  ["Performance reporting", "clear metrics on reach, engagement & leads"],
  ["Ongoing optimisation", "we refine campaigns to improve results"],
];

const inDetail = [
  { icon: Target, title: "Strategy & planning", desc: "Before a single post goes out, we map your goals, audience and message into a content plan and posting schedule. Strategy is what separates a package that grows your business from one that just fills your feed." },
  { icon: Palette, title: "Content creation & design", desc: "Professional graphics, captions and creatives designed for each platform. Good content stops the scroll — poor content gets ignored no matter how much you spend on ads." },
  { icon: Megaphone, title: "Paid advertising", desc: "Organic reach alone is limited. Paid campaigns on Facebook and Instagram put your offer in front of a precise, targeted audience and are the fastest way to generate leads and sales." },
  { icon: Users, title: "Audience targeting", desc: "We define exactly who should see your ads — by location, age, interests and behaviour — so your budget reaches buyers, not just anyone." },
  { icon: Video, title: "Video & reels", desc: "Short-form video is the highest-performing format on social today. Higher-tier packages include reels and TikTok content that drive engagement and reach." },
  { icon: FileBarChart, title: "Reporting & optimisation", desc: "You receive clear reports on what worked, and we continuously refine targeting and creative to improve results month after month." },
];

const platforms = [
  { icon: Facebook, title: "Facebook Marketing", desc: "Sri Lanka's largest social audience. Best for lead generation, brand awareness and local business promotion." },
  { icon: Instagram, title: "Instagram Marketing", desc: "Visual storytelling that converts — ideal for hotels, fashion, beauty, food and lifestyle brands." },
  { icon: Music2, title: "TikTok Marketing", desc: "Fast-growing reach and viral potential — perfect for younger audiences and brand awareness." },
  { icon: Linkedin, title: "LinkedIn Marketing", desc: "Essential for B2B — reach decision-makers, corporate services and professional audiences." },
];

const byPlatform = [
  ["Facebook Advertising Packages", "Lead generation, brand awareness and local promotion on Sri Lanka's largest social platform."],
  ["Instagram Marketing Packages", "Visual, conversion-focused campaigns for hotels, fashion, food and lifestyle brands."],
  ["TikTok Marketing Packages", "Short-form video and viral reach to engage younger audiences and grow awareness."],
  ["LinkedIn Marketing Packages", "B2B campaigns that reach decision-makers, professionals and corporate audiences."],
];

const priceFactors = [
  ["Number of platforms", "managing four platforms costs more than one."],
  ["Content volume", "more posts, graphics and video means more design work."],
  ["Paid ad budget", "your ad spend is separate from the management fee."],
  ["Video production", "reels and TikTok content take more time than static posts."],
  ["Level of strategy", "a tailored strategy costs more than templated posting."],
  ["Reporting & optimisation", "ongoing analysis and refinement adds value."],
];

const howToChoose = [
  { title: "New to social ads?", desc: "Start with a focused single-platform campaign, measure the response, then expand to more platforms as results come in." },
  { title: "Want a steady presence?", desc: "A managed campaign keeps you posting consistently across platforms so your brand always looks active and professional." },
  { title: "Want leads & sales?", desc: "The full Social Media Campaign (from LKR 50,000) adds paid ads and targeting across platforms — this is where most businesses see real enquiries." },
  { title: "Established brand?", desc: "A custom enterprise package gives you full management, video content and advanced campaigns across every platform." },
  { title: "Running a promotion?", desc: "Run a short, intensive campaign across Facebook & Instagram to spike reach and enquiries for a launch, sale or event." },
  { title: "Not sure?", desc: "Tell us your goal and budget and we'll recommend the right package — no pressure, no long contracts." },
];

const industries = [
  ["Hotels & Tourism", "Promote rooms, offers & experiences to travellers and drive direct bookings."],
  ["Restaurants & Cafes", "Fill tables with mouth-watering visuals, offers and event promotions."],
  ["Real Estate", "Showcase listings, generate buyer leads and target investors."],
  ["Fashion & Retail", "Launch collections, drive store visits and grow online sales."],
  ["Education", "Promote courses and generate student enquiries during intake season."],
  ["SMEs & Startups", "Build brand awareness affordably and generate consistent leads."],
];

const comparison = [
  ["Strategy", "Generic", "Custom multi-platform strategy"],
  ["Content", "Basic posts", "Professional creatives & video"],
  ["Platforms", "Usually one", "Facebook, Instagram, TikTok & LinkedIn"],
  ["Multi-channel", "Not included", "Email, SMS, WhatsApp & Findit.lk"],
  ["Reach beyond social", "No", "Findit.lk high-intent audience"],
  ["Reporting", "Limited", "Detailed analytics & optimisation"],
  ["Contracts", "Long lock-ins", "Flexible — scale up or down"],
];

const process = [
  ["Understand goals", "We learn your business & audience."],
  ["Recommend a package", "We suggest the right tier for your budget."],
  ["Create content", "We design posts, ads & video."],
  ["Launch campaigns", "We run & manage across platforms."],
  ["Report & optimise", "We track results and improve."],
];

const mistakes = [
  ["Buying on price alone", "The cheapest package isn't always the best value. Look at what's included and the results it can produce, not just the monthly figure."],
  ["Skipping paid ads", "Organic reach on social media has fallen sharply. A package with no ad budget will struggle to reach new customers."],
  ["Trying to be everywhere", "Spreading a small budget across every platform rarely works. Focus on the one or two platforms where your customers actually are."],
  ["No clear goal", "\"More followers\" isn't a business goal. Decide whether you want awareness, engagement or leads — the package should be built around it."],
  ["Ignoring the reports", "Reporting only helps if you act on it. A good package uses the data to keep improving results each month."],
  ["No follow-up channel", "Social creates interest, but leads convert through follow-up. Connect your package to a direct follow-up channel to close the loop."],
];

const faqs = [
  { q: "How much do social media marketing packages cost in Sri Lanka?", a: "Buzz Connect social media marketing packages start from LKR 50,000 for a full multi-platform campaign. The exact price depends on how many platforms you want, your ad budget and content volume — we tailor every package to your goals." },
  { q: "What's included in a social media package?", a: "Depending on the tier, a package includes strategy, content creation and design, paid advertising, audience targeting, page management, video/reels, WhatsApp integration, Findit.lk visibility and performance reporting." },
  { q: "Which social media package is best for a small business?", a: "Most businesses start with a single full multi-platform campaign from LKR 50,000, then move to ongoing monthly management once they see results. Tell us your goals and budget and we'll recommend the right fit." },
  { q: "Do you offer monthly social media management packages?", a: "Yes — we offer both one-off campaigns and ongoing monthly management. Tell us your preference and we'll tailor a package with content, ads and reporting; there are no long lock-in contracts." },
  { q: "Which platforms do the packages cover?", a: "Facebook, Instagram, TikTok and LinkedIn. We help you choose the right mix for your audience rather than spreading your budget across platforms that won't perform." },
  { q: "Do you offer Facebook, Instagram or TikTok-specific packages?", a: "Yes — you can focus a package on a single platform such as Facebook advertising, Instagram marketing or TikTok, or combine platforms. We recommend the mix that best fits where your customers spend their time." },
  { q: "Can I customise a package?", a: "Absolutely. Every package is a starting point — we adjust platforms, post volume, ad spend and add-ons to fit your business and budget, including custom enterprise packages." },
  { q: "How soon will I see results?", a: "Paid ads deliver visibility and can generate leads within days. Organic growth and brand building typically show over 3–6 months. Combining both gives the best short- and long-term results." },
  { q: "Is social media marketing worth it for my business?", a: "Yes — done with a clear strategy and paid ads, social media reaches a large audience cost-effectively, builds trust and generates measurable leads. Focus on return on investment rather than cost alone." },
];

const SectionLabel = ({ children }: { children: string }) => (
  <span className="text-sm font-semibold text-accent uppercase tracking-wider">{children}</span>
);

const SocialMediaPackages = () => {
  return (
    <div className="pt-14 sm:pt-16 overflow-x-hidden">
      <SEOHead
        title="Social Media Marketing Packages Sri Lanka | From LKR 50,000 | Buzz Connect"
        description="Social media marketing packages in Sri Lanka from LKR 50,000 — Facebook, Instagram, TikTok & LinkedIn campaigns, content, paid ads & reporting. Compare packages & pricing."
        canonical="/social-media-packages-sri-lanka"
        keywords="social media packages sri lanka, social media marketing packages sri lanka, social media management packages, facebook advertising packages sri lanka, instagram marketing packages, tiktok marketing packages, linkedin marketing packages, social media package price sri lanka, social media advertising packages, monthly social media packages"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Social Media Marketing", url: "/social-media-marketing-sri-lanka" },
          { name: "Social Media Packages", url: "/social-media-packages-sri-lanka" },
        ]}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Social Media Marketing Packages — Buzz Connect",
            description: "Social media marketing packages in Sri Lanka from LKR 50,000 — Facebook, Instagram, TikTok & LinkedIn campaigns, content, paid ads and reporting.",
            brand: { "@type": "Brand", name: "Buzz Connect" },
            offers: { "@type": "Offer", priceCurrency: "LKR", price: "50000", availability: "https://schema.org/InStock", url: "https://buzzconnect.lk/social-media-packages-sri-lanka" },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />

      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/15 text-accent border border-accent/30 mb-4">
              Social Media Marketing Packages · Sri Lanka
            </span>
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Social media marketing packages in Sri Lanka — from LKR 50,000
            </h1>
            <p className="text-primary-foreground/70 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Simple, transparent social media packages for Sri Lankan businesses. Whether you want a one-off multi-platform campaign or ongoing monthly management across Facebook, Instagram, TikTok &amp; LinkedIn, there's a package built for your goals — content, targeting, paid ads and reporting included.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href={wa("Hi Buzz Connect, I'd like to see your social media marketing packages.")} target="_blank" rel="noopener noreferrer" data-selected-service="Social Media Packages">
                <Button variant="hero" size="lg" className="text-base">
                  See My Package Options <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="#packages">
                <Button variant="hero-outline" size="lg" className="text-base">Compare Packages</Button>
              </a>
            </div>
            <div className="flex flex-wrap gap-2 mt-6 sm:mt-8">
              {["From LKR 50,000", "4+ platforms", "Findit.lk integration", "Monthly or one-off"].map((chip) => (
                <span key={chip} className="px-3 py-1.5 rounded-full text-xs sm:text-sm bg-primary-foreground/10 border border-primary-foreground/20">
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 sm:py-16 space-y-16 sm:space-y-20">
        {/* Overview */}
        <section>
          <SectionLabel>Overview</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4">Social media packages built for every Sri Lankan business</h2>
          <div className="max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Every business needs a social media presence — but not every business needs the same thing. A start-up testing its first campaign has very different needs from an established brand running always-on ads across four platforms. That's why we offer <strong className="text-foreground">social media marketing packages</strong> at clear, fixed price points, so you can pick exactly the level of support you need and scale up whenever you're ready.
            </p>
            <p>
              Our <strong className="text-foreground">social media packages in Sri Lanka</strong> start from <strong className="text-foreground">LKR 50,000</strong> and cover everything from content creation and design to paid advertising, audience targeting and performance reporting — across Facebook, Instagram, TikTok and LinkedIn. Every package is amplified through <strong className="text-foreground">Findit.lk</strong>, giving your brand extra visibility with a high-intent audience actively searching for products and services. Below you'll find each package, what's included, how to choose, and answers to the most common questions about social media package pricing in Sri Lanka.
            </p>
          </div>
        </section>

        {/* Why a package */}
        <section>
          <SectionLabel>Why a package</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4">Why choose a social media package instead of one-off ads?</h2>
          <p className="text-muted-foreground max-w-4xl mb-8">
            Running the occasional boosted post can work for a quick promotion, but it rarely builds a brand or a reliable stream of leads. A structured <strong className="text-foreground">social media package</strong> gives you consistency, strategy and better value — three things random posting can't deliver.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="p-6 rounded-2xl bg-card border border-border hover:border-accent/40 transition-colors">
                <b.icon className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="packages" className="scroll-mt-24">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4">Our social media marketing packages &amp; pricing</h2>
          <p className="text-muted-foreground max-w-4xl mb-8">
            Choose a package that matches your goals. Prices below are starting points — every package can be tailored to your platforms, ad budget and content volume.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col p-6 sm:p-7 rounded-2xl border ${p.popular ? "border-accent bg-accent/5 shadow-lg" : "border-border bg-card"}`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold bg-accent text-accent-foreground">Most popular</span>
                )}
                <h3 className="font-heading font-semibold text-lg mb-1">{p.name}</h3>
                <div className="font-heading text-2xl font-bold text-accent mb-2">{p.price}</div>
                <p className="text-sm text-muted-foreground mb-5">{p.best}</p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={wa(p.waText)} target="_blank" rel="noopener noreferrer" data-selected-service="Social Media Packages">
                  <Button variant={p.popular ? "default" : "outline"} className="w-full">
                    <MessageCircle className="mr-2 w-4 h-4" /> {p.cta}
                  </Button>
                </a>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 max-w-4xl">
            Need something bigger or multi-location? We build <strong className="text-foreground">custom enterprise packages</strong> too. Prices are starting points and depend on ad budget, content volume &amp; platforms — {" "}
            <a href={wa("Hi Buzz Connect, I'd like a custom social media package quote.")} target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">ask for a tailored quote</a>.
          </p>
        </section>

        {/* What's included */}
        <section>
          <SectionLabel>What's included</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4">What you get in a Buzz Connect social media package</h2>
          <p className="text-muted-foreground max-w-4xl mb-8">
            Every package is more than "just posting." Depending on the tier you choose, your social media package can include the full set of services needed to grow a real audience and generate leads:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {included.map(([title, desc]) => (
              <div key={title} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                <Sparkles className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <p className="text-sm"><strong className="text-foreground">{title}</strong> <span className="text-muted-foreground">— {desc}</span></p>
              </div>
            ))}
          </div>
        </section>

        {/* In detail */}
        <section>
          <SectionLabel>In detail</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4">Understanding what's inside your package</h2>
          <p className="text-muted-foreground max-w-4xl mb-8">
            It helps to know what each part of a social media package actually does. Here's how the main elements work together to grow your audience and generate enquiries.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {inDetail.map((d) => (
              <div key={d.title} className="p-6 rounded-2xl bg-card border border-border">
                <d.icon className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Platforms */}
        <section>
          <SectionLabel>Platforms</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4">Platforms covered in our packages</h2>
          <p className="text-muted-foreground max-w-4xl mb-8">
            Our social media packages cover the platforms that actually drive results in Sri Lanka. We help you choose the right mix for your audience rather than spreading budget thin.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {platforms.map((p) => (
              <div key={p.title} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <p.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* By platform */}
        <section>
          <SectionLabel>By platform</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4">Social media packages for every platform</h2>
          <p className="text-muted-foreground max-w-4xl mb-8">
            Prefer to focus on one platform? Our packages can be tailored to a single channel or combined across all of them for maximum reach.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {byPlatform.map(([title, desc]) => (
              <div key={title} className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing explained */}
        <section>
          <SectionLabel>Pricing explained</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4">Why social media package prices vary in Sri Lanka</h2>
          <p className="text-muted-foreground max-w-4xl mb-8">
            If you've compared <strong className="text-foreground">social media packages in Sri Lanka</strong>, you've probably seen prices ranging from a few thousand rupees to over a hundred thousand a month. That's because "social media marketing" can mean very different things. Here's what actually drives the price:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {priceFactors.map(([title, desc]) => (
              <div key={title} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                <TrendingUp className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <p className="text-sm"><strong className="text-foreground">{title}</strong> <span className="text-muted-foreground">— {desc}</span></p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground max-w-4xl mt-6">
            Our campaigns start from <strong className="text-foreground">LKR 50,000</strong>, and we build every package around what your business actually needs — from a single-location café to a national brand. Rather than a one-size-fits-all price, we build the package around what you actually need, so you never pay for services that won't move your business forward. The fastest way to know your exact price is to tell us your goals and budget for a tailored quote.
          </p>
        </section>

        {/* How to choose */}
        <section>
          <SectionLabel>How to choose</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4">How to choose the right social media package</h2>
          <p className="text-muted-foreground max-w-4xl mb-8">
            Picking the right <strong className="text-foreground">social media package</strong> comes down to three things: your goal, your budget and how many platforms you want to be active on. Here's a simple way to decide:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {howToChoose.map((c) => (
              <div key={c.title} className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-heading font-semibold text-lg mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section>
          <SectionLabel>Who it's for</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4">Social media packages for every industry</h2>
          <p className="text-muted-foreground max-w-4xl mb-8">
            Different industries need different strategies — our packages adapt to how your customers actually buy.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map(([title, desc]) => (
              <div key={title} className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why us */}
        <section>
          <SectionLabel>Why us</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4">Why our social media packages deliver more</h2>
          <p className="text-muted-foreground max-w-4xl mb-8">
            Most agencies sell you "post management." We combine social media with a full multi-channel system — so your budget goes further and your results are bigger.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm min-w-[560px]">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 font-heading font-semibold">Feature</th>
                  <th className="text-left p-4 font-heading font-semibold">Standard packages</th>
                  <th className="text-left p-4 font-heading font-semibold text-accent">Buzz Connect packages</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([f, std, bz]) => (
                  <tr key={f} className="border-t border-border">
                    <td className="p-4 font-medium">{f}</td>
                    <td className="p-4 text-muted-foreground">{std}</td>
                    <td className="p-4 text-accent font-medium">{bz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Findit.lk */}
        <section className="p-6 sm:p-10 rounded-2xl gradient-hero text-primary-foreground">
          <SectionLabel>Extra reach</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4">Social media marketing powered by Findit.lk</h2>
          <p className="text-primary-foreground/80 max-w-4xl leading-relaxed">
            Every Buzz Connect social media package is amplified through <strong>Findit.lk</strong> — giving your business extended visibility to a high-intent audience of <strong>200,000+ monthly users</strong> actively searching for products and services in Sri Lanka. Your brand doesn't just reach people scrolling their feeds; it also shows up where buyers are actively looking — an advantage most social media agencies can't offer. For a deeper look at strategy and platforms, see our full{" "}
            <Link to="/social-media-marketing-sri-lanka" className="text-accent font-semibold hover:underline">social media marketing services in Sri Lanka</Link>.
          </p>
        </section>

        {/* Process */}
        <section>
          <SectionLabel>Process</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-6">How our social media packages work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {process.map(([title, desc], i) => (
              <div key={title} className="p-5 rounded-2xl bg-card border border-border">
                <div className="w-9 h-9 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center mb-3">{i + 1}</div>
                <h3 className="font-heading font-semibold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mistakes */}
        <section>
          <SectionLabel>Avoid these</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4">Common mistakes when buying a social media package</h2>
          <p className="text-muted-foreground max-w-4xl mb-8">
            A package only works if it's the right one, run the right way. These are the mistakes we most often see Sri Lankan businesses make — and how to avoid them.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {mistakes.map(([title, desc]) => (
              <div key={title} className="p-6 rounded-2xl bg-card border border-border">
                <AlertTriangle className="w-5 h-5 text-accent mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-6">Social media packages — frequently asked questions</h2>
          <Accordion type="single" collapsible className="max-w-4xl">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-heading">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Final thoughts */}
        <section>
          <SectionLabel>Final thoughts</SectionLabel>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-4">The right social media package pays for itself</h2>
          <div className="max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
            <p>
              In Sri Lanka's fast-moving digital market, a consistent, well-managed social media presence is no longer optional — it's how customers discover, trust and choose businesses. With full multi-platform campaigns from <strong className="text-foreground">LKR 50,000</strong>, you get a complete, managed push across every channel that reaches new customers, builds trust and generates measurable leads — then you scale up as the results come in.
            </p>
            <p>
              Whether you run a hotel, a restaurant, a retail store, a school or a service business, there's a Buzz Connect social media package sized for your goals and budget — backed by a full multi-channel system and Findit.lk visibility that most agencies can't match. Tell us where you want to grow, and we'll recommend the package that gets you there.
            </p>
          </div>
        </section>

        {/* CTA band */}
        <section className="p-6 sm:p-10 rounded-2xl bg-accent/10 border border-accent/30 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Find the right social media package for your business</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Tell us your goal and budget — we'll recommend the perfect package and have your campaign live fast. Campaigns from LKR 50,000. No long contracts.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a href={wa("Hi Buzz Connect, please recommend a social media package for my business.")} target="_blank" rel="noopener noreferrer" data-selected-service="Social Media Packages">
              <Button size="lg"><MessageCircle className="mr-2 w-4 h-4" /> Get My Package Recommendation</Button>
            </a>
            <Link to="/contact-us"><Button variant="outline" size="lg">Contact Us</Button></Link>
          </div>
        </section>

        {/* Related */}
        <section>
          <SectionLabel>Related</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {[
              ["Social Media Marketing Services", "/social-media-marketing-sri-lanka"],
              ["LinkedIn Marketing", "/linkedin-marketing-sri-lanka"],
              ["TikTok Marketing", "/tiktok-marketing-sri-lanka"],
              ["Facebook & Instagram Ads", "/online-advertising-sri-lanka"],
              ["SEO Services", "/seo-sri-lanka"],
            ].map(([label, href]) => (
              <Link key={href} to={href} className="flex items-center justify-between gap-2 p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors">
                <span className="text-sm font-medium">{label}</span>
                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SocialMediaPackages;
