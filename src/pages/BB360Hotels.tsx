import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  BedDouble,
  Building2,
  CalendarDays,
  Check,
  Clock3,
  Coffee,
  Hotel,
  Mail,
  MapPin,
  MessageCircle,
  PartyPopper,
  Phone,
  Send,
  Sparkles,
  Star,
  Target,
  Umbrella,
  Users,
  Waves,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { bb360Packages } from "@/data/bb360ServicePages";
import radisson from "@/assets/clients/radisson.webp";
import cinnamon from "@/assets/clients/cinnamon.webp";
import jetwing from "@/assets/clients/jetwing.webp";
import kingsbury from "@/assets/clients/kingsbury.webp";
import araliya from "@/assets/clients/araliya.webp";
import browns from "@/assets/clients/browns.webp";
import bestWestern from "@/assets/logos/bestwestern.webp";
import tangerine from "@/assets/clients/tangerine.webp";

const WA_NUMBER = "94771976351";
const META_TITLE = "Email, SMS & WhatsApp Marketing for Hotels Sri Lanka";
const META_DESCRIPTION = "Email, SMS & WhatsApp marketing for hotels in Sri Lanka — promote rooms & offers to 988,000+ travellers from LKR 15,000. Live in 24 hours, no OTA commission.";
const PERSON_MASK = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3Cpath d='M4 21v-1.5C4 15.9 7.6 13.5 12 13.5s8 2.4 8 6V21z'/%3E%3C/svg%3E\") center/contain no-repeat";
const CHANNELS = [
  { label: "Email", total: "750K", count: 187, color: "#38bdf8" },
  { label: "FB Remarketing", total: "100K", count: 25, color: "#a855f7" },
  { label: "Findit.lk", total: "100K", count: 25, color: "#ffb627" },
  { label: "FB Exposure", total: "30K", count: 8, color: "#22c55e" },
  { label: "LinkedIn", total: "8K", count: 2, color: "#ff5a5f" },
] as const;

const hotelLogos = [
  { name: "Radisson", src: radisson },
  { name: "Cinnamon Hotels", src: cinnamon },
  { name: "Jetwing", src: jetwing },
  { name: "The Kingsbury", src: kingsbury },
  { name: "Araliya", src: araliya },
  { name: "Browns Hotels", src: browns },
  { name: "Best Western", src: bestWestern },
  { name: "Tangerine Beach", src: tangerine },
];

const faqs = [
  { q: "How do I get more direct hotel bookings in Sri Lanka?", a: "Run a multi-channel promotion across email, SMS, WhatsApp and Findit.lk that sends travellers straight to your booking channel — no OTA commission. Campaigns start from LKR 15,000 and can go live in 24 hours." },
  { q: "What's the best way to advertise a hotel in Sri Lanka?", a: "Combine channels. Email, SMS, WhatsApp and Findit.lk can reach 988,000+ travellers in one coordinated campaign, rather than relying on a single platform." },
  { q: "How much does it cost to promote a hotel in Sri Lanka?", a: "A hotel campaign starts from LKR 15,000 — about LKR 0.015 per person reached. Bundle campaigns to save up to 25%." },
  { q: "How can hotels promote weekend or last-minute offers?", a: "A weekend offer combines a clear rate, dates, inclusions and a booking action across email, SMS and WhatsApp — ideal for filling unsold rooms fast." },
  { q: "Can I promote wedding and banquet packages?", a: "Yes. Promote your venue, package highlights and a direct enquiry action to couples and planners." },
  { q: "How quickly can a hotel campaign go live?", a: "Within 24 hours of confirming your offer and artwork." },
  { q: "How can I reduce OTA commission for my hotel?", a: "Drive direct bookings. A multi-channel campaign sends travellers to your own booking channel or WhatsApp, so you keep the 15–25% an OTA could take." },
  { q: "How do I increase midweek hotel occupancy in Sri Lanka?", a: "Promote a midweek or last-minute offer across email, SMS and WhatsApp to fill Sunday–Thursday rooms — the gap that often costs hotels the most." },
  { q: "Can boutique hotels, resorts and villas use this?", a: "Yes. City hotels, beach resorts, boutique hotels, villas and guest houses can all use the campaign to generate direct bookings." },
];

const whatsappUrl = (message: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
const launchMessage = "Hi Buzz Connect, I want to launch a hotel promotion campaign. Please help me choose a package.";

function ReachPanel() {
  const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [count, setCount] = useState(reduceMotion ? 988000 : 0);
  const [visible, setVisible] = useState(reduceMotion);
  const frame = useRef<number>();
  const people = useMemo(() => CHANNELS.flatMap((channel) => Array.from({ length: channel.count }, () => channel.color)), []);

  useEffect(() => {
    if (reduceMotion) return;
    const start = performance.now();
    setVisible(true);
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / 1500);
      setCount(Math.round((1 - Math.pow(1 - progress, 3)) * 988000));
      if (progress < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => { if (frame.current) cancelAnimationFrame(frame.current); };
  }, [reduceMotion]);

  return (
    <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 sm:p-6 shadow-2xl backdrop-blur-sm">
      <p className="text-xs text-primary-foreground/65">One campaign · every channel travellers use</p>
      <div className="mt-1 font-heading text-4xl sm:text-5xl font-black text-accent" aria-live="polite">
        {count.toLocaleString("en-US")}{count === 988000 ? "+" : ""}
      </div>
      <p className="mb-4 text-sm text-primary-foreground/65">travellers reached across 5 channels</p>
      <div className="flex flex-wrap justify-center gap-1" aria-hidden="true">
        {people.map((color, index) => (
          <span
            key={`${color}-${index}`}
            className="h-4 w-[13px] transition-[opacity,transform] duration-300"
            style={{
              background: color,
              WebkitMask: PERSON_MASK,
              mask: PERSON_MASK,
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "scale(.3)",
              transitionDelay: reduceMotion ? undefined : `${index * 4}ms`,
            }}
          />
        ))}
      </div>
      <p className="my-3 text-center text-[11px] text-primary-foreground/45">Each figure ≈ 4,000 people · colours show the channel</p>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
        {CHANNELS.map((channel) => (
          <span key={channel.label} className="inline-flex items-center text-xs text-primary-foreground/65">
            <i className="mr-1.5 h-2.5 w-2.5 rounded-sm" style={{ background: channel.color }} />
            {channel.label} <b className="ml-1 text-primary-foreground">{channel.total}</b>
          </span>
        ))}
      </div>
    </div>
  );
}

const SectionHeading = ({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) => (
  <div className="mx-auto mb-9 max-w-3xl text-center">
    <p className="text-xs font-bold uppercase text-accent">{eyebrow}</p>
    <h2 className="mt-2 font-heading text-3xl font-black sm:text-4xl">{title}</h2>
    {body && <p className="mt-3 text-primary-foreground/65">{body}</p>}
  </div>
);

export default function BB360Hotels() {
  const jsonLd = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Email, SMS & WhatsApp Marketing for Hotels Sri Lanka",
      serviceType: "Hotel promotion campaign",
      provider: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      url: "https://buzzconnect.lk/brand-blast-360/hotels",
      description: META_DESCRIPTION,
      offers: bb360Packages.map((pkg) => ({ "@type": "Offer", name: pkg.name, price: pkg.price.replace(/[^\d]/g, ""), priceCurrency: "LKR" })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
    },
  ], []);

  const useCases = [
    [BedDouble, "Weekend Escapes", "Fill Friday–Sunday rooms with a timely direct-booking offer."],
    [PartyPopper, "Festive & Seasonal", "Avurudu, Christmas and New Year — launched early to sell out first."],
    [Sparkles, "Weddings & Banquets", "Reach engaged couples with venue and package enquiries."],
    [Users, "Corporate & MICE", "Meetings, conferences and long-stay packages for decision-makers."],
    [Coffee, "Buffet & Dining", "Promote buffets, brunches and high tea to local diners."],
    [Umbrella, "Staycations", "Reach Sri Lankans planning a convenient local getaway."],
  ] as const;
  const propertyTypes = [
    [Building2, "City Hotels", "Fill business and leisure rooms in Colombo, Kandy and Galle."],
    [Waves, "Beach Resorts", "Reach travellers planning Bentota, Negombo and south-coast stays."],
    [Hotel, "Boutique Hotels", "Stand out and fill rooms without depending on OTAs."],
    [BedDouble, "Villas & Guest Houses", "Win direct bookings for villas, bungalows and guest houses."],
    [Coffee, "Restaurants & Banquets", "Promote dining, buffets and wedding banquets within your hotel."],
    [Sparkles, "Spa & Wellness", "Fill spa, wellness and staycation packages midweek."],
  ] as const;
  const serviceSections = [
    ["Email Marketing for Hotels", "Put room offers, weekend packages, dining promotions and seasonal deals in front of travel-ready inboxes. Build direct bookings with clear rates, inclusions and a direct response action — without OTA commission.", "/email-marketing", "Explore Email Marketing"],
    ["SMS Marketing for Hotels", "Send island-wide last-minute deals, weekend offers and timely reminders by SMS to fill unsold rooms fast. It is ideal when dates are close and timing matters most.", "/sms-marketing", "Explore SMS Marketing"],
    ["WhatsApp Marketing for Hotels", "Share rich offers, confirm bookings and re-engage past guests directly on their phones. Interested travellers can ask about dates, inclusions and availability in one conversation.", "/whatsapp-marketing", "Explore WhatsApp Marketing"],
    ["Lead Generation for Hotels", "Turn campaign attention into room, wedding, dining and corporate enquiries routed straight to your phone or WhatsApp. Every offer has one clear next step for the guest.", "/lead-generation-sri-lanka", "Explore Lead Generation"],
  ] as const;

  return (
    <main className="hotel-bb360 min-h-screen overflow-x-hidden bg-primary pb-20 text-primary-foreground lg:pb-0">
      <SEOHead
        title={META_TITLE}
        description={META_DESCRIPTION}
        canonical="/brand-blast-360/hotels"
        keywords="email marketing for hotels sri lanka, sms marketing for hotels, whatsapp marketing for hotels, hotel promotion campaign sri lanka, increase hotel bookings, hotel direct bookings, reduce OTA commission"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Brand Blast 360", url: "/brand-blast-360" }, { name: "Hotels", url: "/brand-blast-360/hotels" }]}
        jsonLd={jsonLd}
      />

      <section className="pt-8 sm:pt-10 lg:pt-14">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="grid items-center gap-9 py-10 lg:grid-cols-[1.06fr_.94fr] lg:py-14">
            <div>
              <p className="text-xs font-bold uppercase text-accent">Brand Blast 360 · Hotels</p>
              <h1 className="mt-3 max-w-2xl font-heading text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">Fill every room — even midweek.</h1>
              <p className="mt-3 font-heading text-lg font-semibold text-secondary">Email, SMS & WhatsApp Marketing for Hotels in Sri Lanka</p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg">Put your rooms, packages and offers in front of 988,000+ travellers in one campaign — from LKR 15,000, live in 24 hours. Direct bookings, no OTA commission.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[['988K+', 'traveller reach'], ['LKR 15,000', 'fixed · 5 channels'], ['24 hrs', 'live · or next free']].map(([value, label]) => <div key={value} className="min-w-28 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3"><b className="block font-heading text-lg text-accent">{value}</b><span className="text-[11px] text-primary-foreground/55">{label}</span></div>)}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button variant="hero" size="lg" asChild><a href={whatsappUrl(launchMessage)} target="_blank" rel="noopener noreferrer" data-wa-placement="bb360_hotels_hero" data-selected-service="Brand Blast 360 — Hotels"><MessageCircle />Launch My Hotel Campaign</a></Button>
                <Button variant="hero-outline" size="lg" asChild><Link to="/contact-us" data-placement="bb360_hotels_free_consultation">Free Consultation</Link></Button>
              </div>
              <p className="mt-4 text-xs text-primary-foreground/45">Fixed price · no contract · trusted by leading Sri Lankan hotels · 4.9/5</p>
            </div>
            <ReachPanel />
          </div>
        </div>
      </section>

      <section aria-label="Trusted hotel clients" className="border-y border-primary-foreground/10 bg-primary-foreground/[0.03] py-6">
        <div className="container mx-auto px-4">
          <p className="mb-4 text-center text-xs font-semibold uppercase text-primary-foreground/45">Trusted by leading Sri Lankan hotels</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
            {hotelLogos.map((logo) => <div key={logo.name} className="flex h-14 items-center justify-center rounded-md bg-card px-3"><img src={logo.src} alt={`${logo.name} logo`} className="max-h-9 max-w-full object-contain" width={110} height={36} /></div>)}
          </div>
        </div>
      </section>

      <section className="py-12"><div className="container mx-auto px-4"><div className="mx-auto max-w-5xl rounded-xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6 text-center text-primary-foreground/65 sm:p-8"><p><strong className="text-primary-foreground">Email, SMS & WhatsApp marketing for hotels in Sri Lanka</strong> lets your property promote rooms, packages, dining and events to 988,000+ travellers — and win direct bookings without paying OTA commission. Brand Blast 360 combines all five channels into one campaign, live in 24 hours from LKR 15,000 (about LKR 0.015 per person). Available for hotels, resorts, villas and guest houses across Colombo, Kandy, Galle, Bentota, Ella, Negombo and Nuwara Eliya.</p></div></div></section>

      <section className="py-14"><div className="container mx-auto px-4"><SectionHeading eyebrow="The problem" title="Sound familiar?" body="The three things quietly costing hotels the most revenue." /><div className="grid gap-4 md:grid-cols-3">{[[CalendarDays,"Empty rooms Sun–Thu","Midweek gaps drain revenue while your fixed costs stay exactly the same."],[BadgeDollarSign,"OTAs take 15–25%","Every OTA night hands away margin you could have kept with a direct booking."],[Clock3,"Festive dates fill late","Avurudu and December packages sell out at competitors before you even advertise."]].map(([Icon,title,body])=><article key={title as string} className="rounded-lg border border-primary-foreground/10 border-l-accent bg-primary-foreground/[0.04] p-5"><Icon className="mb-4 h-6 w-6 text-accent"/><h3 className="font-heading text-lg font-bold">{title as string}</h3><p className="mt-2 text-sm text-primary-foreground/60">{body as string}</p></article>)}</div></div></section>

      <section className="bg-primary-foreground/[0.03] py-16"><div className="container mx-auto px-4"><SectionHeading eyebrow="The fix" title="One campaign puts your offer everywhere travellers look" body="Choose a promotion you already have — we turn it into one coordinated campaign across every channel that drives direct bookings." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{useCases.map(([Icon,title,body])=><article key={title} className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] p-5"><Icon className="h-7 w-7 text-accent"/><h3 className="mt-4 font-heading font-bold">{title}</h3><p className="mt-2 text-sm text-primary-foreground/60">{body}</p></article>)}</div></div></section>

      <section className="py-16"><div className="container mx-auto px-4"><SectionHeading eyebrow="Who it's for" title="Built for every kind of Sri Lankan property"/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{propertyTypes.map(([Icon,title,body])=><article key={title} className="flex gap-4 rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] p-5"><Icon className="h-6 w-6 shrink-0 text-accent"/><div><h3 className="font-heading font-bold">{title}</h3><p className="mt-1 text-sm text-primary-foreground/60">{body}</p></div></article>)}</div></div></section>

      <section className="py-16"><div className="container mx-auto px-4"><SectionHeading eyebrow="By channel" title="How hotels reach travellers on every channel"/><div className="grid gap-4 lg:grid-cols-2">{serviceSections.map(([title,body,path,label],index)=><article key={title} className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6"><div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-accent/15 text-accent">{index===0?<Mail/>:index===1?<Send/>:index===2?<MessageCircle/>:<Target/>}</div><h2 className="font-heading text-xl font-bold">{title}</h2><p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">{body}</p><Link to={path} className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-secondary">{label}<ArrowRight className="h-4 w-4"/></Link></article>)}</div></div></section>

      <section className="bg-primary-foreground/[0.03] py-16"><div className="container mx-auto px-4"><SectionHeading eyebrow="Why it works" title="Built to drive direct bookings"/><div className="grid gap-4 md:grid-cols-3">{[["2–3 bookings","typically recover the whole campaign cost"],["5–7 touchpoints","the typical frequency guests need before they book"],["0% commission","direct bookings — keep what OTAs would take"]].map(([stat,label])=><article key={stat} className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6 text-center"><b className="font-heading text-2xl text-accent">{stat}</b><p className="mt-2 text-sm text-primary-foreground/60">{label}</p></article>)}</div><p className="mt-4 text-center text-xs text-primary-foreground/40">Illustrative typical outcomes; actual results vary by offer, property and season.</p></div></section>

      <section className="py-16"><div className="container mx-auto px-4"><SectionHeading eyebrow="The smarter maths" title="Direct bookings beat OTAs & single-channel ads"/><div className="overflow-x-auto"><table className="mx-auto w-full min-w-[720px] max-w-5xl text-left text-sm"><thead><tr className="border-b border-primary-foreground/15 text-xs uppercase text-primary-foreground/45"><th className="p-3">Comparison</th><th className="p-3">OTAs</th><th className="p-3">Facebook ads only</th><th className="p-3 text-accent">Brand Blast 360</th></tr></thead><tbody>{[["Commission","15–25% per booking","—","0% — direct bookings"],["Reach","Their platform only","One platform","988,000+ across 5 channels"],["Cost","Per booking, forever","Per click","Fixed from LKR 15,000"],["You own the guest","No","Partly","Yes — your own database"],["Launch time","Ongoing","Days","24 hours"]].map((row)=><tr key={row[0]} className="border-b border-primary-foreground/10"><th className="p-3 font-medium text-primary-foreground/55">{row[0]}</th><td className="p-3">{row[1]}</td><td className="p-3">{row[2]}</td><td className="p-3 font-semibold"><Check className="mr-1 inline h-4 w-4 text-secondary"/>{row[3]}</td></tr>)}</tbody></table></div></div></section>

      <section className="py-16"><div className="container mx-auto px-4"><SectionHeading eyebrow="Simple process" title="Live in 24 hours"/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["Send your offer","Tell us the room, package or event you want to promote."],["We build it","We prepare the creative, content and setup for you."],["Live across 5 channels","Your campaign goes out within 24 hours."],["Enquiries to you","Bookings and enquiries land on your phone or WhatsApp."]].map(([title,body],index)=><article key={title} className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] p-5"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent font-black text-accent-foreground">{index+1}</span><h3 className="mt-4 font-heading font-bold">{title}</h3><p className="mt-2 text-sm text-primary-foreground/60">{body}</p></article>)}</div></div></section>

      <section className="py-16"><div className="container mx-auto px-4"><SectionHeading eyebrow="Why hotels choose Brand Blast 360" title="One package. Every reason to book it."/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{[[BadgeDollarSign,"Fixed LKR 15,000","No bidding, no surprises. Bundle to save up to 25%."],[Hotel,"No OTA commission","Direct bookings — keep the 15–25% OTAs take."],[Clock3,"Live in 24 hours","Send your offer today; it's out tomorrow."],[MapPin,"Free Findit.lk feature","Stay discoverable on Sri Lanka's offer finder."],[Target,"5–7 touchpoints","The typical frequency guests need before they book."],[BarChart3,"Full report","See opens, clicks and reach after every campaign."]].map(([Icon,title,body])=><article key={title as string} className="flex gap-4 rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] p-5"><Icon className="h-6 w-6 shrink-0 text-accent"/><div><h3 className="font-heading font-bold">{title as string}</h3><p className="mt-1 text-sm text-primary-foreground/60">{body as string}</p></div></article>)}</div><div className="mt-6 rounded-lg border border-accent/40 bg-accent/10 p-5 text-center text-primary-foreground/65"><strong className="text-accent">Our guarantee:</strong> your campaign is live within 24 hours — or your next one is free.</div></div></section>

      <section id="pricing" className="bg-primary-foreground/[0.03] py-16"><div className="container mx-auto px-4"><SectionHeading eyebrow="Choose your campaign" title="Fixed price · no contract" body="Every package fires all 5 channels and 988,000+ reach per campaign. Bundle to save."/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{bb360Packages.map((pkg,index)=><article key={pkg.name} className={`relative flex flex-col rounded-lg border bg-primary-foreground/[0.04] p-6 ${index===2?"border-accent shadow-glow":"border-primary-foreground/10"}`}>{index===2&&<span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase text-accent-foreground">Most popular</span>}<p className="text-xs font-bold uppercase text-primary-foreground/40">{index===0?"Entry":index===1?"Growth":index===2?"Accelerate":"Own the market"}</p><h3 className="mt-1 font-heading text-xl font-black">{pkg.name}</h3><p className="mt-4 font-heading text-2xl font-black text-accent">{pkg.price}</p><p className="text-xs text-primary-foreground/50">{pkg.campaigns}</p><p className="mt-2 min-h-8 text-xs font-semibold text-accent">{pkg.highlight}</p><ul className="my-5 flex-1 space-y-2 text-sm text-primary-foreground/65"><li><Check className="mr-2 inline h-4 w-4 text-accent"/>All 5 channels</li><li><Check className="mr-2 inline h-4 w-4 text-accent"/>988,000+ reach</li><li><Check className="mr-2 inline h-4 w-4 text-accent"/>{pkg.validity}</li><li><Check className="mr-2 inline h-4 w-4 text-accent"/>Full report</li></ul><Button variant="hero" asChild><a href={whatsappUrl(`Hi Buzz Connect, I want the ${pkg.name} for my hotel (${pkg.campaigns}, ${pkg.price}).`)} target="_blank" rel="noopener noreferrer" data-wa-placement={`bb360_hotels_package_${pkg.name.toLowerCase().replace(/\s+/g,"_")}`} data-selected-service={`Brand Blast 360 — Hotels — ${pkg.name}`} data-pricing-tier={pkg.name} data-pricing-price={pkg.price}><MessageCircle/>Choose {index===0?"Starter":index===1?"Growth":index===2?"Power":"Market"}</a></Button></article>)}</div></div></section>

      <section className="py-16"><div className="container mx-auto max-w-3xl px-4 text-center"><div className="flex justify-center gap-1 text-accent" aria-label="Five stars">{Array.from({length:5},(_,i)=><Star key={i} className="h-5 w-5 fill-current"/>)}</div><blockquote className="mt-5 font-heading text-xl font-medium leading-relaxed sm:text-2xl">“Three large bookings came in the first week that paid for the entire campaign. Guests mentioned seeing us in email and social the same week.”</blockquote><p className="mt-4 text-sm text-primary-foreground/55">Hotel & Hospitality · Colombo · <strong className="text-accent">bookings in week one</strong></p></div></section>

      <section className="bg-primary-foreground/[0.03] py-16"><div className="container mx-auto max-w-4xl px-4"><SectionHeading eyebrow="Questions" title="Hotel marketing FAQs"/><div className="space-y-3">{faqs.map((faq)=><details key={faq.q} className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] p-5"><summary className="cursor-pointer font-heading font-bold">{faq.q}</summary><p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">{faq.a}</p></details>)}</div><p className="mt-7 text-center text-sm text-primary-foreground/50">Looking for ongoing, month-round marketing? <Link to="/hotel-marketing-sri-lanka" className="font-bold text-secondary">Explore our complete hotel marketing services →</Link></p></div></section>

      <section className="py-16 text-center sm:py-20"><div className="container mx-auto max-w-3xl px-4"><span className="inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-bold text-accent">Limited launch slots this month</span><h2 className="mt-5 font-heading text-3xl font-black sm:text-5xl">Your next fully-booked weekend is 24 hours away.</h2><p className="mx-auto mt-4 max-w-2xl text-primary-foreground/65">Send us the offer you want to promote — we'll have it live across all 5 channels within 24 hours. Fixed price. No contract.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><Button variant="hero" size="lg" asChild><a href={whatsappUrl("Hi Buzz Connect, I want to launch a hotel promotion campaign this week. Please help me start.")} target="_blank" rel="noopener noreferrer" data-wa-placement="bb360_hotels_final" data-selected-service="Brand Blast 360 — Hotels"><MessageCircle/>Launch My Hotel Campaign</a></Button><Button variant="hero-outline" size="lg" asChild><Link to="/contact-us">Free Consultation</Link></Button></div><div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-primary-foreground/50"><a href="mailto:infobuzzconnect@gmail.com"><Mail className="mr-1 inline h-4 w-4"/>infobuzzconnect@gmail.com</a><a href="tel:+94771976351"><Phone className="mr-1 inline h-4 w-4"/>+94 77 197 6351</a><span><MapPin className="mr-1 inline h-4 w-4"/>Colombo, Sri Lanka</span></div></div></section>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-primary-foreground/15 bg-primary/95 p-3 backdrop-blur lg:hidden"><Button variant="hero" asChild><a href={whatsappUrl(launchMessage)} target="_blank" rel="noopener noreferrer" data-wa-placement="bb360_hotels_sticky_mobile" data-selected-service="Brand Blast 360 — Hotels"><MessageCircle/>WhatsApp us</a></Button><Button variant="hero-outline" asChild><Link to="/contact-us">Free consultation</Link></Button></div>
    </main>
  );
}
