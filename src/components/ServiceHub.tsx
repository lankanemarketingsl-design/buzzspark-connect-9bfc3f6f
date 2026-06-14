import { useState } from "react";
import { Link } from "react-router-dom";

type Card = {
  to: string;
  icon: string;
  title: string;
  desc: string;
  cta?: string;
};

type Tab = { id: string; label: string; cards: Card[] };

const TABS: Tab[] = [
  {
    id: "services",
    label: "All Services",
    cards: [
      { to: "/email-marketing", icon: "📧", title: "Email Marketing", desc: "Targeted campaigns to 500,000+ verified Sri Lankan contacts with automation and tracking." },
      { to: "/sms-marketing", icon: "💬", title: "SMS Marketing", desc: "95%+ open rates. Instant reach for promotions, alerts and time-sensitive campaigns." },
      { to: "/whatsapp-marketing", icon: "📱", title: "WhatsApp Marketing", desc: "Broadcast campaigns and personalised messaging reaching 90%+ of Sri Lankan smartphone users." },
      { to: "/seo-sri-lanka", icon: "🔍", title: "SEO Services", desc: "Proven first-page Google rankings for competitive Sri Lankan keywords. Long-term organic growth." },
      { to: "/social-media-marketing-sri-lanka", icon: "📲", title: "Social Media Marketing", desc: "Content strategy, paid ads and community management across Facebook, Instagram and TikTok." },
      { to: "/google-ads-sri-lanka", icon: "🎯", title: "Google Ads", desc: "Certified campaign management for search, display, YouTube and Shopping ads with full reporting." },
      { to: "/lead-generation-sri-lanka", icon: "⚡", title: "Lead Generation", desc: "End-to-end pipelines that deliver verified, sales-ready leads directly to your team." },
      { to: "/multi-channel-marketing-sri-lanka", icon: "🔗", title: "Multi-Channel Strategy", desc: "All channels coordinated into one growth engine — 250% higher conversions than single-channel." },
      { to: "/website-design-sri-lanka", icon: "🖥️", title: "Website Design", desc: "Custom, mobile-optimised, conversion-focused websites built for the Sri Lankan market." },
      { to: "/graphic-designing-in-sri-lanka", icon: "🎨", title: "Graphic Design", desc: "Brand identity, ad creatives, social content and print design that stands out." },
      { to: "/web-banner-advertising-sri-lanka", icon: "📰", title: "Web Banner Advertising", desc: "Premium placements on Findit.lk and top Sri Lankan platforms for high-visibility brand exposure." },
      { to: "/linkedin-marketing-sri-lanka", icon: "💼", title: "LinkedIn Marketing", desc: "B2B lead generation, thought leadership content and targeted campaigns for professionals." },
      { to: "/tiktok-marketing-sri-lanka", icon: "🎵", title: "TikTok Marketing", desc: "Short-form video strategy and paid campaigns reaching Sri Lanka's fastest-growing audience." },
      { to: "/special-advertising-packages", icon: "📦", title: "Special Packages", desc: "Bundled multi-channel packages designed for maximum ROI at competitive rates.", cta: "View packages" },
    ],
  },
  {
    id: "direct",
    label: "Direct Marketing",
    cards: [
      { to: "/email-marketing", icon: "📧", title: "Email Marketing", desc: "Segmented campaigns to 500,000+ verified contacts. Average ROI: LKR 36 for every LKR 1 spent." },
      { to: "/sms-marketing", icon: "💬", title: "SMS Marketing", desc: "95%+ open rates. Delivered in seconds to any mobile number in Sri Lanka." },
      { to: "/whatsapp-marketing", icon: "📱", title: "WhatsApp Marketing", desc: "The #1 messaging app in Sri Lanka. Broadcasts, automation and direct engagement." },
      { to: "/lead-generation-sri-lanka", icon: "⚡", title: "Lead Generation", desc: "Qualified leads delivered to your inbox or CRM — ready to convert." },
    ],
  },
  {
    id: "growth",
    label: "Growth & SEO",
    cards: [
      { to: "/seo-sri-lanka", icon: "🔍", title: "SEO Services", desc: "On-page, technical and off-page SEO with first-page Google rankings for Sri Lankan keywords." },
      { to: "/website-design-sri-lanka", icon: "🖥️", title: "Website Design", desc: "Fast, mobile-first, conversion-optimised websites — built to rank and convert." },
      { to: "/multi-channel-marketing-sri-lanka", icon: "🔗", title: "Multi-Channel Strategy", desc: "Integrated campaigns across every channel for compounding growth over time." },
      { to: "/graphic-designing-in-sri-lanka", icon: "🎨", title: "Graphic Design", desc: "Creatives that convert — from social ads to brand identity and landing page design." },
    ],
  },
  {
    id: "paid",
    label: "Paid & Social",
    cards: [
      { to: "/google-ads-sri-lanka", icon: "🎯", title: "Google Ads", desc: "Search, display, YouTube, Shopping — certified management with transparent ROI reporting." },
      { to: "/social-media-marketing-sri-lanka", icon: "📲", title: "Social Media Marketing", desc: "Organic and paid across Facebook, Instagram, TikTok and YouTube for Sri Lankan audiences." },
      { to: "/linkedin-marketing-sri-lanka", icon: "💼", title: "LinkedIn Marketing", desc: "B2B campaigns, sponsored content and InMail that reaches decision-makers." },
      { to: "/tiktok-marketing-sri-lanka", icon: "🎵", title: "TikTok Marketing", desc: "Video-first campaigns for brands targeting younger Sri Lankan demographics." },
      { to: "/web-banner-advertising-sri-lanka", icon: "📰", title: "Web Banner Ads", desc: "High-visibility display ads on premium Sri Lankan platforms including Findit.lk." },
      { to: "/online-advertising-sri-lanka", icon: "📡", title: "Online Advertising", desc: "Full-funnel paid media strategy across all major digital advertising platforms." },
    ],
  },
  {
    id: "industries",
    label: "By Industry",
    cards: [
      { to: "/hotel-marketing-sri-lanka", icon: "🏨", title: "Hotels & Tourism", desc: "Direct bookings, OTA reduction and seasonal multi-channel campaigns for hotels and resorts." },
      { to: "/real-estate-marketing-sri-lanka", icon: "🏠", title: "Real Estate", desc: "High-quality property leads for developers and agents — email, SMS and Google Ads." },
      { to: "/education-marketing-sri-lanka", icon: "🎓", title: "Education", desc: "Student recruitment, course promotions and enrolment nurturing via WhatsApp automation." },
      { to: "/finance-marketing-sri-lanka", icon: "💰", title: "Finance & Insurance", desc: "Compliant, trust-building campaigns that generate qualified leads for financial products." },
      { to: "/restaurant-marketing-sri-lanka", icon: "🍽️", title: "Restaurants & Retail", desc: "Foot traffic, reservations and repeat customers through hyperlocal digital campaigns." },
      { to: "/fashion-marketing-sri-lanka", icon: "👗", title: "Fashion & Clothing", desc: "Visual-first campaigns on Instagram, TikTok and Facebook that drive sales and brand love." },
      { to: "/event-marketing-sri-lanka", icon: "🎪", title: "Events & Conferences", desc: "Ticket sales, registrations and sponsorship campaigns with urgency-driven multi-channel tactics." },
      { to: "/staff-recruitment-campaigns-sri-lanka", icon: "👥", title: "Staff Recruitment", desc: "Reach qualified candidates fast with targeted email, SMS and social media recruitment campaigns." },
    ],
  },
];

const ServiceHub = () => {
  const [active, setActive] = useState<string>("services");
  const activeTab = TABS.find((t) => t.id === active) ?? TABS[0];

  return (
    <section className="my-14" aria-label="Our Services">
      <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
        What we do
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 leading-tight">
        Explore our full range of digital marketing services
      </h2>
      <p className="text-base text-muted-foreground mb-6 max-w-xl">
        Every service works standalone or as part of a coordinated multi-channel strategy built for your business.
      </p>

      <div className="flex flex-wrap gap-2 mb-6" role="tablist">
        {TABS.map((t) => {
          const isActive = t.id === active;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(t.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                isActive
                  ? "bg-foreground text-background border-foreground"
                  : "bg-card text-foreground/70 border-border hover:border-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-3.5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {activeTab.cards.map((c) => (
          <Link
            key={c.to + c.title}
            to={c.to}
            className="flex flex-col bg-card border border-border rounded-xl p-5 hover:border-foreground hover:shadow-lg hover:-translate-y-0.5 transition-all no-underline"
          >
            <span className="text-2xl mb-3" aria-hidden="true">{c.icon}</span>
            <div className="text-sm font-semibold text-foreground mb-1 leading-snug">{c.title}</div>
            <div className="text-xs text-muted-foreground leading-relaxed flex-1">{c.desc}</div>
            <div className="mt-3 text-xs font-semibold text-primary flex items-center gap-1">
              {c.cta ?? "Learn more"} <span aria-hidden="true">→</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 px-6 py-6 rounded-2xl flex flex-wrap items-center justify-between gap-4 bg-gradient-to-br from-foreground to-foreground/80">
        <div>
          <h3 className="text-lg font-bold text-background m-0 mb-1">
            Not sure which service is right for you?
          </h3>
          <p className="text-sm text-background/70 m-0">
            Book a free 30-minute strategy call — we'll map the fastest route to more leads for your business.
          </p>
        </div>
        <a
          href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27d%20like%20a%20free%20strategy%20call%20to%20find%20out%20which%20services%20suit%20my%20business."
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold no-underline whitespace-nowrap transition-colors"
          data-wa-placement="service_hub_cta"
        >
          Book free strategy call
        </a>
      </div>
    </section>
  );
};

export default ServiceHub;
