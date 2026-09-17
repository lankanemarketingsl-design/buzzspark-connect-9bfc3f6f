import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowRight, BarChart3, BriefcaseBusiness, Building2, Check, Clock3, Mail,
  MapPin, MessageCircle, Phone, Send, Sparkles, Star, Target, Users,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { bb360Packages } from "@/data/bb360ServicePages";
import conversionPages from "@/data/bb360ConversionPages.json";
import dfccLogo from "@/assets/logos/dfcc.webp";
import radissonLogo from "@/assets/logos/radisson.webp";
import huntersLogo from "@/assets/logos/hunters.webp";
import salaLogo from "@/assets/logos/sala.webp";
import bestwesternLogo from "@/assets/logos/bestwestern.webp";
import chinesedragonLogo from "@/assets/logos/chinesedragon.webp";
import swarnamahalLogo from "@/assets/logos/swarnamahal.webp";
import burgerkingLogo from "@/assets/logos/burgerking.webp";
import mimosaLogo from "@/assets/logos/mimosa.webp";
import abansLogo from "@/assets/logos/abans.webp";
import odelLogo from "@/assets/logos/odel.webp";
import glomarkLogo from "@/assets/logos/glomark.webp";
import combankLogo from "@/assets/logos/combank.webp";
import allianceLogo from "@/assets/logos/alliance.webp";
import nolimitLogo from "@/assets/logos/nolimit.webp";
import bhoomiLogo from "@/assets/logos/bhoomi.webp";
import visioncareLogo from "@/assets/logos/visioncare.webp";
import lassanaLogo from "@/assets/logos/lassana.webp";
import cipmLogo from "@/assets/logos/cipm.webp";
import cinnamonLogo from "@/assets/logos/cinnamon.webp";
import slimLogo from "@/assets/logos/slim.webp";
import ninewellsLogo from "@/assets/logos/ninewells.webp";

const BRAND_LOGOS: Record<string, string> = {
  "Burger King": burgerkingLogo,
  "Chinese Dragon Cafe": chinesedragonLogo,
  Mimosa: mimosaLogo,
  Odel: odelLogo,
  "Bhoomi Realty": bhoomiLogo,
  "DFCC Bank": dfccLogo,
  "Commercial Bank": combankLogo,
  "CIPM Sri Lanka": cipmLogo,
  SLIM: slimLogo,
  "Ninewells Hospital": ninewellsLogo,
  "Alliance Finance": allianceLogo,
  Nolimit: nolimitLogo,
  Glomark: glomarkLogo,
  "Lassana.com": lassanaLogo,
  Radisson: radissonLogo,
  "Vision Care": visioncareLogo,
  Abans: abansLogo,
  Hunters: huntersLogo,
  "Sala Enterprises": salaLogo,
  Swarnamahal: swarnamahalLogo,
  Cinnamon: cinnamonLogo,
  "Best Western": bestwesternLogo,
};

const ALL_CLIENT_LOGOS: { name: string; src: string }[] = [
  { name: "DFCC Bank", src: dfccLogo },
  { name: "Radisson", src: radissonLogo },
  { name: "Hunters", src: huntersLogo },
  { name: "Sala Enterprises", src: salaLogo },
  { name: "Best Western", src: bestwesternLogo },
  { name: "Chinese Dragon Cafe", src: chinesedragonLogo },
  { name: "Swarnamahal", src: swarnamahalLogo },
  { name: "Burger King", src: burgerkingLogo },
  { name: "Mimosa", src: mimosaLogo },
  { name: "Abans", src: abansLogo },
  { name: "Odel", src: odelLogo },
  { name: "Glomark", src: glomarkLogo },
  { name: "Commercial Bank", src: combankLogo },
  { name: "Alliance Finance", src: allianceLogo },
  { name: "Nolimit", src: nolimitLogo },
  { name: "Bhoomi Realty", src: bhoomiLogo },
  { name: "Vision Care", src: visioncareLogo },
  { name: "Lassana.com", src: lassanaLogo },
  { name: "CIPM Sri Lanka", src: cipmLogo },
  { name: "Cinnamon Hotels", src: cinnamonLogo },
  { name: "SLIM", src: slimLogo },
  { name: "Ninewells Hospital", src: ninewellsLogo },
];

const WA_NUMBER = "94771976351";
const PERSON_MASK = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3Cpath d='M4 21v-1.5C4 15.9 7.6 13.5 12 13.5s8 2.4 8 6V21z'/%3E%3C/svg%3E\") center/contain no-repeat";
const CHANNELS = [
  { label: "Email", total: "750K", count: 187, color: "hsl(var(--reach-email))" },
  { label: "FB Remarketing", total: "100K", count: 25, color: "hsl(var(--reach-remarketing))" },
  { label: "Findit.lk", total: "100K", count: 25, color: "hsl(var(--reach-findit))" },
  { label: "FB Exposure", total: "30K", count: 8, color: "hsl(var(--reach-facebook))" },
  { label: "LinkedIn", total: "8K", count: 2, color: "hsl(var(--reach-linkedin))" },
] as const;
const serviceLinks = ["/email-marketing", "/sms-marketing", "/whatsapp-marketing", "/lead-generation-sri-lanka"];
const cardIcons = [Sparkles, Target, Users, Building2, BriefcaseBusiness, BarChart3];
const whatsappUrl = (message: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
const placementSlug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");

type ConversionPage = (typeof conversionPages)[number];

function ReachPanel({ page }: { page: ConversionPage }) {
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
    <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 shadow-2xl backdrop-blur-sm sm:p-6">
      <p className="text-xs text-primary-foreground/65">{page.reachHeader}</p>
      <div className="mt-1 font-heading text-4xl font-black text-industry sm:text-5xl" aria-live="polite">{count.toLocaleString("en-US")}{count === 988000 ? "+" : ""}</div>
      <p className="mb-4 text-sm text-primary-foreground/65">{page.reachSub}</p>
      <div className="flex flex-wrap justify-center gap-1" aria-hidden="true">
        {people.map((color, index) => <span key={`${color}-${index}`} className="h-4 w-[13px] transition-[opacity,transform] duration-300" style={{ background: color, WebkitMask: PERSON_MASK, mask: PERSON_MASK, opacity: visible ? 1 : 0, transform: visible ? "none" : "scale(.3)", transitionDelay: reduceMotion ? undefined : `${index * 4}ms` }} />)}
      </div>
      <p className="my-3 text-center text-[11px] text-primary-foreground/45">Each figure ≈ 4,000 people · colours show the channel</p>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">{CHANNELS.map((channel) => <span key={channel.label} className="inline-flex items-center text-xs text-primary-foreground/65"><i className="mr-1.5 h-2.5 w-2.5 rounded-sm" style={{ background: channel.color }} />{channel.label} <b className="ml-1 text-primary-foreground">{channel.total}</b></span>)}</div>
    </div>
  );
}

const SectionHeading = ({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) => (
  <div className="mx-auto mb-9 max-w-3xl text-center"><p className="text-xs font-bold uppercase text-industry">{eyebrow}</p><h2 className="mt-2 font-heading text-3xl font-black sm:text-4xl">{title}</h2>{body && <p className="mt-3 text-primary-foreground/65">{body}</p>}</div>
);

export default function BB360ServicePage() {
  const { industry } = useParams();
  const page = conversionPages.find((item) => item.slug === industry);
  if (!page) return <Navigate to="/brand-blast-360" replace />;

  const industryName = page.eyebrow.replace("Brand Blast 360 · ", "");
  const launchMessage = `Hi Buzz Connect, I want to launch a ${industryName} campaign. Please help me choose a package.`;
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Service", name: page.keywordLine, serviceType: `${industryName} promotion campaign`, provider: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" }, areaServed: { "@type": "Country", name: "Sri Lanka" }, url: `https://buzzconnect.lk/brand-blast-360/${page.slug}`, description: page.description, offers: bb360Packages.map((pkg) => ({ "@type": "Offer", name: pkg.name, price: pkg.price.replace(/[^\d]/g, ""), priceCurrency: "LKR" })) },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
  ];
  const style = { "--industry-accent": `var(--industry-${page.slug})` } as CSSProperties;

  return (
    <main className="bb360-industry min-h-screen overflow-x-hidden bg-primary pb-20 text-primary-foreground lg:pb-0" data-industry={page.slug} style={style}>
      <SEOHead title={page.title.replace(" | Buzz Connect", "")} description={page.description} canonical={`/brand-blast-360/${page.slug}`} keywords={page.keywords} breadcrumbs={[{ name: "Home", url: "/" }, { name: "Brand Blast 360", url: "/brand-blast-360" }, { name: industryName, url: `/brand-blast-360/${page.slug}` }]} jsonLd={jsonLd} />

      <section className="pt-8 sm:pt-10 lg:pt-14"><div className="container mx-auto px-4"><Breadcrumbs /><div className="grid items-center gap-9 py-10 lg:grid-cols-[1.06fr_.94fr] lg:py-14"><div><p className="text-xs font-bold uppercase text-industry">{page.eyebrow}</p><h1 className="mt-3 max-w-2xl font-heading text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{page.h1}</h1><p className="mt-3 font-heading text-lg font-semibold text-secondary">{page.keywordLine}</p><p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg">{page.hero}</p><div className="mt-6 flex flex-wrap gap-3">{[["988K+","reach"],["LKR 15,000","fixed · 5 channels"],["24 hrs","live · or next free"]].map(([value,label])=><div key={value} className="min-w-28 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3"><b className="block font-heading text-lg text-industry">{value}</b><span className="text-[11px] text-primary-foreground/55">{label}</span></div>)}</div><div className="mt-6 flex flex-col gap-3 sm:flex-row"><Button className="bg-industry text-primary-foreground hover:bg-industry/90" size="lg" asChild><a href={whatsappUrl(launchMessage)} target="_blank" rel="noopener noreferrer" data-wa-placement={`bb360_${page.slug}_hero`} data-selected-service={`Brand Blast 360 — ${industryName}`}><MessageCircle/>Launch My Campaign</a></Button><Button variant="hero-outline" size="lg" asChild><Link to="/contact-us">Free Consultation</Link></Button></div><p className="mt-4 text-xs text-primary-foreground/45">{page.heroNote}</p></div><ReachPanel page={page}/></div></div></section>

      <section aria-label="Our Clients — Trusted by Leading Brands in Sri Lanka" data-client-logos className="border-y border-primary-foreground/10 bg-primary-foreground/[0.03] py-10"><div className="container mx-auto px-4"><p className="mb-1 text-center text-xs font-semibold uppercase text-primary-foreground/45">Our Clients</p><h2 className="mb-6 text-center font-heading text-xl font-bold sm:text-2xl">Trusted by Leading Brands in Sri Lanka</h2><div className="flex flex-wrap justify-center gap-2 sm:gap-3">{ALL_CLIENT_LOGOS.map((logo)=><span key={logo.name} className="flex h-11 w-24 items-center justify-center rounded-md bg-card p-2 sm:h-12 sm:w-32"><img src={logo.src} alt={`${logo.name} logo`} className="h-full w-full object-contain" loading="lazy" width={128} height={48}/></span>)}</div></div></section>
      <section className="py-12"><div className="container mx-auto px-4"><div className="mx-auto max-w-5xl rounded-xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6 text-center text-primary-foreground/65 sm:p-8">{page.definition}</div></div></section>
      <section className="py-14"><div className="container mx-auto px-4"><SectionHeading eyebrow="The problem" title="Sound familiar?"/><div className="grid gap-4 md:grid-cols-3">{page.pains.map((item,index)=>{const Icon=cardIcons[index];return <article key={item.title} className="rounded-lg border border-primary-foreground/10 border-l-industry bg-primary-foreground/[0.04] p-5"><Icon className="mb-4 h-6 w-6 text-industry"/><h3 className="font-heading text-lg font-bold">{item.title}</h3><p className="mt-2 text-sm text-primary-foreground/60">{item.body}</p></article>})}</div></div></section>
      <section className="bg-primary-foreground/[0.03] py-16"><div className="container mx-auto px-4"><SectionHeading eyebrow="The fix" title="One campaign puts your offer everywhere" body="Pick a promotion you already have — we turn it into one coordinated campaign across every channel."/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{page.useCases.map((item,index)=>{const Icon=cardIcons[index];return <article key={item.title} className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] p-5"><Icon className="h-7 w-7 text-industry"/><h3 className="mt-4 font-heading font-bold">{item.title}</h3><p className="mt-2 text-sm text-primary-foreground/60">{item.body}</p></article>})}</div></div></section>
      <section className="py-16"><div className="container mx-auto px-4"><SectionHeading eyebrow="Who it's for" title={`Built for every kind of ${industryName.toLowerCase()} business`}/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{page.types.map((item,index)=>{const Icon=cardIcons[index];return <article key={item.title} className="flex gap-4 rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] p-5"><Icon className="h-6 w-6 shrink-0 text-industry"/><div><h3 className="font-heading font-bold">{item.title}</h3><p className="mt-1 text-sm text-primary-foreground/60">{item.body}</p></div></article>})}</div></div></section>
      <section className="bg-primary-foreground/[0.03] py-16"><div className="container mx-auto px-4"><SectionHeading eyebrow="By channel" title={`How ${industryName.toLowerCase()} businesses reach ${page.reachSub.replace(" reached across 5 channels", "")}`}/><div className="grid gap-4 lg:grid-cols-2">{page.services.map((service,index)=>{const Icon=[Mail,Send,MessageCircle,Target][index];return <article key={service.title} className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6"><div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-industry/15 text-industry"><Icon/></div><h2 className="font-heading text-xl font-bold">{service.title}</h2><p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">{service.body}</p><Link to={serviceLinks[index]} className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-secondary">Explore {index===0?"Email Marketing":index===1?"SMS Marketing":index===2?"WhatsApp Marketing":"Lead Generation"}<ArrowRight className="h-4 w-4"/></Link></article>})}</div></div></section>
      <section className="py-16"><div className="container mx-auto px-4"><SectionHeading eyebrow="Why it works" title="Built to drive real enquiries"/><div className="grid gap-4 md:grid-cols-3">{page.results.map((item)=><article key={item.value} className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6 text-center"><b className="font-heading text-2xl text-industry">{item.value}</b><p className="mt-2 text-sm text-primary-foreground/60">{item.label}</p></article>)}</div><p className="mt-4 text-center text-xs text-primary-foreground/40">Illustrative outcomes from campaign examples; actual results vary by offer and market conditions.</p></div></section>
      <section className="bg-primary-foreground/[0.03] py-16"><div className="container mx-auto px-4"><SectionHeading eyebrow="The smarter maths" title={page.comparisonTitle}/><div className="overflow-x-auto"><table className="mx-auto w-full min-w-[720px] max-w-5xl text-left text-sm"><thead><tr className="border-b border-primary-foreground/15 text-xs uppercase text-primary-foreground/45">{page.comparisonHeaders.map((header,index)=><th key={`${header}-${index}`} className={`p-3 ${index===3?"text-industry":""}`}>{header||"Comparison"}</th>)}</tr></thead><tbody>{page.comparisonRows.map((row)=><tr key={row[0]} className="border-b border-primary-foreground/10">{row.map((cell,index)=>index===0?<th key={cell} className="p-3 font-medium text-primary-foreground/55">{cell}</th>:<td key={`${cell}-${index}`} className={`p-3 ${index===3?"font-semibold":""}`}>{index===3&&<Check className="mr-1 inline h-4 w-4 text-industry"/>}{cell}</td>)}</tr>)}</tbody></table></div></div></section>
      <section className="py-16"><div className="container mx-auto px-4"><SectionHeading eyebrow="Simple process" title="Live in 24 hours"/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["Send your offer","Tell us what you want to promote."],["We build it","We prepare the creative, content and setup."],["Live across 5 channels","Your campaign goes out within 24 hours."],["Enquiries to you","Leads land on your phone or WhatsApp."]].map(([title,body],index)=><article key={title} className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] p-5"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-industry font-black text-primary-foreground">{index+1}</span><h3 className="mt-4 font-heading font-bold">{title}</h3><p className="mt-2 text-sm text-primary-foreground/60">{body}</p></article>)}</div></div></section>
      <section className="bg-primary-foreground/[0.03] py-16"><div className="container mx-auto px-4"><SectionHeading eyebrow={`Why ${industryName.toLowerCase()} businesses choose Brand Blast 360`} title="One package. Every reason to book it."/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{[["Fixed LKR 15,000","No bidding, no surprises. Bundle to save up to 25%."],["5 channels, one price","Email, remarketing, Findit.lk, social and LinkedIn."],["Live in 24 hours","Send your offer today; it's out tomorrow."],["Free Findit.lk feature","Stay discoverable on Sri Lanka's offer finder."],["5–7 touchpoints","The frequency people typically need before they act."],["Full report","See opens, clicks and reach after every campaign."]].map(([title,body],index)=>{const Icon=cardIcons[index];return <article key={title} className="flex gap-4 rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] p-5"><Icon className="h-6 w-6 shrink-0 text-industry"/><div><h3 className="font-heading font-bold">{title}</h3><p className="mt-1 text-sm text-primary-foreground/60">{body}</p></div></article>})}</div><div className="mt-6 rounded-lg border border-industry/40 bg-industry/10 p-5 text-center text-primary-foreground/65"><strong className="text-industry">Our guarantee:</strong> your campaign is live within 24 hours — or your next one is free.</div></div></section>
      <section id="pricing" className="py-16"><div className="container mx-auto px-4"><SectionHeading eyebrow="Choose your campaign" title="Fixed price · no contract" body="Every package fires all 5 channels and 988,000+ reach per campaign. Bundle to save."/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{bb360Packages.map((pkg,index)=><article key={pkg.name} className={`relative flex flex-col rounded-lg border bg-primary-foreground/[0.04] p-6 ${index===2?"border-industry shadow-glow":"border-primary-foreground/10"}`}>{index===2&&<span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-industry px-3 py-1 text-[10px] font-bold uppercase text-primary-foreground">Most popular</span>}<p className="text-xs font-bold uppercase text-primary-foreground/40">Package</p><h3 className="mt-1 font-heading text-xl font-black">{pkg.name}</h3><p className="mt-4 font-heading text-2xl font-black text-industry">{pkg.price}</p><p className="text-xs text-primary-foreground/50">{pkg.campaigns}</p><p className="mt-2 min-h-8 text-xs font-semibold text-industry">{pkg.highlight}</p><ul className="my-5 flex-1 space-y-2 text-sm text-primary-foreground/65"><li><Check className="mr-2 inline h-4 w-4 text-industry"/>All 5 channels</li><li><Check className="mr-2 inline h-4 w-4 text-industry"/>988,000+ reach</li><li><Check className="mr-2 inline h-4 w-4 text-industry"/>{pkg.validity}</li><li><Check className="mr-2 inline h-4 w-4 text-industry"/>Full report</li></ul><Button className="bg-industry text-primary-foreground hover:bg-industry/90" asChild><a href={whatsappUrl(`Hi Buzz Connect, I want the ${pkg.name} package for my ${industryName} campaign.`)} target="_blank" rel="noopener noreferrer" data-wa-placement={`bb360_${page.slug}_package_${placementSlug(pkg.name)}`} data-selected-service={`Brand Blast 360 — ${industryName} — ${pkg.name}`} data-pricing-tier={pkg.name} data-pricing-price={pkg.price}><MessageCircle/>Choose {index===0?"Starter":index===1?"Growth":index===2?"Power":"Market"}</a></Button></article>)}</div></div></section>
      <section className="bg-primary-foreground/[0.03] py-16"><div className="container mx-auto max-w-3xl px-4 text-center"><div className="flex justify-center gap-1 text-industry" aria-label="Five stars">{Array.from({length:5},(_,i)=><Star key={i} className="h-5 w-5 fill-current"/>)}</div><blockquote className="mt-5 font-heading text-xl font-medium leading-relaxed sm:text-2xl">{page.testimonial}</blockquote><p className="mt-4 text-sm text-primary-foreground/55">{page.testimonialWho}</p></div></section>
      <section className="py-16"><div className="container mx-auto max-w-4xl px-4"><SectionHeading eyebrow="Questions" title={page.faqTitle}/><div className="space-y-3">{page.faqs.map((faq)=><details key={faq.q} className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.04] p-5"><summary className="cursor-pointer font-heading font-bold">{faq.q}</summary><p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">{faq.a}</p></details>)}</div>{page.crossLink&&<p className="mt-7 text-center text-sm text-primary-foreground/50">Looking for ongoing marketing? <Link to={page.crossLink.href} className="font-bold text-secondary">{page.crossLink.label}</Link></p>}</div></section>
      <section className="bg-primary-foreground/[0.03] py-16 text-center sm:py-20"><div className="container mx-auto max-w-3xl px-4"><span className="inline-flex rounded-full border border-industry/40 bg-industry/10 px-4 py-2 text-xs font-bold text-industry">Limited launch slots this month</span><h2 className="mt-5 font-heading text-3xl font-black sm:text-5xl">{page.closerTitle}</h2><p className="mx-auto mt-4 max-w-2xl text-primary-foreground/65">{page.closerBody}</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><Button className="bg-industry text-primary-foreground hover:bg-industry/90" size="lg" asChild><a href={whatsappUrl(launchMessage)} target="_blank" rel="noopener noreferrer" data-wa-placement={`bb360_${page.slug}_final`} data-selected-service={`Brand Blast 360 — ${industryName}`}><MessageCircle/>Launch My Campaign</a></Button><Button variant="hero-outline" size="lg" asChild><Link to="/contact-us">Free Consultation</Link></Button></div><div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-primary-foreground/50"><a href="mailto:infobuzzconnect@gmail.com"><Mail className="mr-1 inline h-4 w-4"/>infobuzzconnect@gmail.com</a><a href="tel:+94771976351"><Phone className="mr-1 inline h-4 w-4"/>+94 77 197 6351</a><span><MapPin className="mr-1 inline h-4 w-4"/>Colombo, Sri Lanka</span></div></div></section>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-primary-foreground/15 bg-primary/95 p-3 backdrop-blur lg:hidden"><Button className="bg-industry text-primary-foreground" asChild><a href={whatsappUrl(launchMessage)} target="_blank" rel="noopener noreferrer" data-wa-placement={`bb360_${page.slug}_sticky_mobile`} data-selected-service={`Brand Blast 360 — ${industryName}`}><MessageCircle/>WhatsApp us</a></Button><Button variant="hero-outline" asChild><Link to="/contact-us">Free consultation</Link></Button></div>
    </main>
  );
}
