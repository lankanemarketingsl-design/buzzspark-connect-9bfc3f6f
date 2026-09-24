import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  CalendarCheck,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  GraduationCap,
  Headphones,
  HeartPulse,
  Hotel,
  Languages,
  Mail,
  MessageCircle,
  Phone,
  PhoneCall,
  RefreshCcw,
  ShoppingBag,
  Sun,
  Target,
  Users,
  XCircle,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";

const PAGE_PATH = "/lead-follow-up-services-sri-lanka";
const WHATSAPP_NUMBER = "94771437707";
const DISPLAY_NUMBER = "+94 77 143 7707";
const SERVICE_NAME = "Lead Follow-Up Services";

const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const processSteps = [
  { number: "01", title: "You give us your prospect list", text: "Share leads from Facebook, Google, website forms, WhatsApp, events, your CRM or another customer list.", icon: Users },
  { number: "02", title: "We make the first call", text: "Our multilingual team introduces your company and starts a professional conversation with each prospect.", icon: PhoneCall },
  { number: "03", title: "We understand the requirement", text: "We ask agreed questions to understand the product, service, timing and information each person needs.", icon: Target },
  { number: "04", title: "We record outcomes and feedback", text: "We document the call status, interest, requirement, comments and recommended next action.", icon: ClipboardCheck },
  { number: "05", title: "We identify follow-up opportunities", text: "Prospects are organised by interest and next step so your sales team can prioritise the right conversations.", icon: BadgeCheck },
  { number: "06", title: "You receive a structured report", text: "Your team gets an organised customer-feedback list with context for the next sales conversation.", icon: BarChart3 },
];

const statuses = [
  ["Interested", "Expressed interest and should be contacted by your sales team.", CheckCircle2],
  ["Needs More Information", "Interested but needs details before deciding.", Mail],
  ["Follow Up Later", "Has potential but is not ready immediately.", Clock3],
  ["Not Interested", "Clearly indicated no current interest.", XCircle],
  ["No Answer", "Could not be reached and may need another attempt.", RefreshCcw],
  ["Wrong / Invalid Number", "The supplied contact number could not be used.", Phone],
] as const;

const services = [
  ["Lead Follow-Up", "We contact the marketing leads you provide and return the outcomes."],
  ["Prospect Qualification", "We identify interest and collect information relevant to your sales process."],
  ["Customer Feedback Calling", "We understand requirements, questions, concerns and customer comments."],
  ["Outbound Calling", "Professional outbound calls for campaigns, promotions and sales support."],
  ["Telemarketing", "Structured calling campaigns for offers and targeted customer outreach."],
  ["Appointment Setting", "Where appropriate, we identify prospects ready to speak with your sales team."],
  ["Customer Follow-Up", "Follow up existing customers for reminders, renewals and agreed campaigns."],
  ["Outsourced Sales Support", "An ongoing calling resource for businesses with continuous requirements."],
];

const industries = [
  ["Real Estate", "Qualify buyer and tenant enquiries, property needs and sales-call requests.", Building2],
  ["Education", "Understand course interests, preferred intakes and information students need.", GraduationCap],
  ["Finance & Insurance", "Follow up enquiries and identify customers requesting more information.", BarChart3],
  ["Hotels & Tourism", "Contact booking, package and promotional enquiries.", Hotel],
  ["Automotive", "Qualify vehicle enquiries and possible test-drive requests.", Target],
  ["Solar & Home Solutions", "Understand household requirements and follow-up readiness.", Sun],
  ["Retail & E-commerce", "Follow up campaign enquiries, requests and customer interest.", ShoppingBag],
  ["Healthcare & Wellness", "Identify enquiries needing further information or assistance.", HeartPulse],
  ["B2B Services", "Qualify business prospects before handing them to the sales team.", Users],
] as const;

const models = [
  { title: "Lead Follow-Up Campaign", text: "For a specific list of 100, 500, 1,000 or more leads. You provide the list, we call, and you receive the results.", points: ["Campaign-based calling", "Structured outcome report", "Custom qualification questions"] },
  { title: "Dedicated Calling Agent", text: "For companies with a continuous prospect or customer follow-up requirement.", points: ["Ongoing lead follow-up", "Sales and customer support", "Long-term campaigns"] },
  { title: "Campaign Calling", text: "For short-term promotions, surveys, reminders, launches, events or database reactivation.", points: ["Flexible campaign period", "Agreed call script", "Campaign-specific reporting"] },
];

const faqs = [
  { q: "What is a lead follow-up service?", a: "It involves contacting prospects generated through marketing, understanding their interest, requirements and feedback, and passing structured information to your sales team." },
  { q: "Is this a traditional call center?", a: "It is a focused form of call center outsourcing. Buzz Connect concentrates on lead follow-up, prospect qualification and customer feedback rather than general inbound support." },
  { q: "Do you make the first call?", a: "Yes. You provide the prospect or customer list, and our team makes the initial call according to the agreed script and campaign requirements." },
  { q: "What information do you collect?", a: "This can include call status, interest level, requirement, questions, feedback, objections, requested follow-up and the next action relevant to your sales process." },
  { q: "Can we decide what questions your agents ask?", a: "Yes. The script and qualification questions can be customised around your business, offer, campaign and sales objectives." },
  { q: "Can you call leads from Facebook and Google?", a: "Yes. You can provide leads from Facebook, Google, landing pages, websites, WhatsApp, CRM systems, events or other campaigns." },
  { q: "Can Buzz Connect generate the leads too?", a: "Yes. Buzz Connect can generate leads through Email, SMS, WhatsApp, Findit.lk and digital campaigns, then support the first-call and qualification process." },
  { q: "Do you support Sinhala, Tamil and English?", a: "Yes. Calling is available in Sinhala, Tamil and English, according to the agreed campaign requirements." },
  { q: "Can you follow up existing customers?", a: "Yes. Campaigns can cover reminders, renewals, reactivation, feedback and other agreed outbound customer communication." },
  { q: "How much does lead follow-up calling cost?", a: "Pricing depends on the prospect volume, campaign duration, calling requirements, number of agents and reporting needs. Buzz Connect provides a campaign-specific quotation." },
];

const SectionTitle = ({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) => (
  <div className="mx-auto mb-9 max-w-3xl text-center">
    <p className="text-xs font-bold uppercase text-accent">{eyebrow}</p>
    <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
    {intro && <p className="mt-4 leading-relaxed text-muted-foreground">{intro}</p>}
  </div>
);

const LeadFollowUpServices = () => {
  const quoteMessage = "Hi Buzz Connect, I would like a quote for Lead Follow-Up Services in Sri Lanka.";
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Lead Follow-Up Services Sri Lanka",
      serviceType: ["Lead follow-up", "Prospect qualification", "Customer feedback calling", "Outbound calling"],
      provider: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzconnect.lk" },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      url: `https://buzzconnect.lk${PAGE_PATH}`,
      description: "Buzz Connect calls your prospects, understands their requirements, records call outcomes and customer feedback, and identifies interested leads for your sales team.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];

  return (
    <div className="pt-14 sm:pt-16">
      <SEOHead
        title="Lead Follow-Up Services Sri Lanka | Prospect Qualification | Buzz Connect"
        description="Lead follow-up services in Sri Lanka. We call your prospects, understand their requirements, collect customer feedback and identify interested leads for your sales team."
        canonical="/lead-follow-up-services-sri-lanka"
        keywords="lead follow up service sri lanka, lead qualification services sri lanka, prospect follow up services sri lanka, customer feedback calling sri lanka, customer follow up services sri lanka, lead calling service sri lanka, outbound calling services sri lanka, sales calling services sri lanka, telemarketing services sri lanka, call center outsourcing sri lanka, outsourced sales team sri lanka, appointment setting services sri lanka"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Lead Follow-Up Services", url: PAGE_PATH }]}
        jsonLd={jsonLd}
      />

      <section className="gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 pb-16 pt-3 sm:pb-24">
          <Breadcrumbs />
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/15 px-4 py-2 text-xs font-bold uppercase text-accent">
                <Headphones className="h-4 w-4" /> Sinhala • Tamil • English
              </span>
              <h1 className="mt-5 font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Lead Follow-Up &amp; Customer Qualification Services in Sri Lanka
              </h1>
              <p className="mt-5 text-xl font-semibold text-accent sm:text-2xl">We call your prospects. You get the customer feedback. Your sales team gets the opportunities.</p>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
                Give Buzz Connect your prospect list. We make the first call, understand each customer's requirement, identify interest and return a clear, organised feedback report to your sales team.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="lg"><Link to="/contact-us">Get a Free Quote <ArrowRight /></Link></Button>
                <Button asChild variant="hero-outline" size="lg"><a href={whatsappUrl(quoteMessage)} data-selected-service={SERVICE_NAME} data-wa-placement="hero" target="_blank" rel="noopener noreferrer"><MessageCircle /> Talk to Us on WhatsApp</a></Button>
              </div>
            </div>

            <div className="rounded-md border border-primary-foreground/15 bg-primary-foreground/5 p-5 backdrop-blur-sm sm:p-7">
              <p className="text-sm font-bold uppercase text-accent">What your team receives</p>
              <div className="mt-5 space-y-3">
                {["Who answered", "What each prospect needs", "Their level of interest", "Customer feedback and comments", "The recommended next action"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md border border-primary-foreground/10 bg-primary-foreground/5 p-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" /><span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-md border border-accent/30 bg-accent/10 p-4">
                <p className="font-bold text-accent">Clear campaign reporting</p>
                <p className="mt-1 text-sm text-primary-foreground/75">Every outcome and customer response is organised for your sales team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="From raw data to sales context" title="Turn Your Lead List Into Actionable Customer Feedback" intro="You have already invested in advertising and lead generation. We help make sure the prospects generated by that investment receive a first conversation." />
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground">When hundreds of enquiries arrive, some are called late or not at all. Your salespeople then start with names and phone numbers but no understanding of what each customer wants.</p>
              <div className="mt-6 border-l-4 border-accent pl-5">
                <p className="text-xl font-bold text-foreground">That's where LeadConnect by Buzz Connect comes in.</p>
                <p className="mt-2 leading-relaxed text-muted-foreground">We make the first call, understand the requirement, check interest and return structured outcomes to your sales team.</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Who answered the call", "What they are looking for", "Product or service interest", "Who wants more information", "Who needs sales follow-up", "Who was not interested", "Who could not be reached", "Recommended next step"].map((item) => (
                <div key={item} className="flex gap-3 rounded-md border border-border bg-card p-4 shadow-card"><Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><span className="font-medium text-foreground">{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/45 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="The process" title="How Our Lead Follow-Up Service Works" intro="A clear six-step workflow turns a list of unknown contacts into useful customer intelligence." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map(({ number, title, text, icon: Icon }) => (
              <article key={number} className="rounded-md border border-border bg-card p-6 shadow-card">
                <div className="flex items-center justify-between"><Icon className="h-7 w-7 text-accent" /><span className="font-heading text-3xl font-bold text-muted-foreground/30">{number}</span></div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Practical reporting" title="A Feedback Report Your Sales Team Can Use" intro="We report conversation outcomes and customer feedback with clear next steps for your sales team." />
          <div className="mx-auto max-w-6xl overflow-hidden rounded-md border border-border bg-card shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-primary text-primary-foreground"><tr>{["Prospect", "Call Status", "Interest", "Requirement", "Feedback", "Next Step"].map((h) => <th key={h} className="p-4 font-bold">{h}</th>)}</tr></thead>
                <tbody className="divide-y divide-border text-muted-foreground">
                  <tr><td className="p-4 font-semibold text-foreground">Customer A</td><td className="p-4">Answered</td><td className="p-4">Interested</td><td className="p-4">Product A</td><td className="p-4">Wants pricing</td><td className="p-4 font-semibold text-foreground">Sales follow-up</td></tr>
                  <tr><td className="p-4 font-semibold text-foreground">Customer B</td><td className="p-4">Answered</td><td className="p-4">Maybe</td><td className="p-4">Product B</td><td className="p-4">Needs details</td><td className="p-4 font-semibold text-foreground">Send information</td></tr>
                  <tr><td className="p-4 font-semibold text-foreground">Customer C</td><td className="p-4">No answer</td><td className="p-4">—</td><td className="p-4">—</td><td className="p-4">Could not reach</td><td className="p-4 font-semibold text-foreground">Retry</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mx-auto mt-8 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {statuses.map(([title, text, Icon]) => <div key={title} className="flex gap-4 rounded-md border border-border p-5"><Icon className="h-6 w-6 shrink-0 text-accent" /><div><h3 className="font-bold text-foreground">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="gradient-hero py-14 text-primary-foreground">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div><p className="text-xs font-bold uppercase text-accent">More than a call center</p><h2 className="mt-2 text-3xl font-bold sm:text-4xl">Your Outsourced Lead Follow-Up Team</h2><p className="mt-4 leading-relaxed text-primary-foreground/70">We focus on the part that directly supports marketing and sales: the first customer conversation, qualification, feedback and handoff.</p></div>
          <div className="grid grid-cols-2 gap-2 text-center text-sm font-bold sm:grid-cols-6">
            {["Lead", "First Call", "Conversation", "Qualification", "Feedback", "Sales Follow-Up"].map((item, index) => <div key={item} className="relative rounded-md border border-primary-foreground/15 bg-primary-foreground/5 px-2 py-4">{item}{index < 5 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-accent sm:block" />}</div>)}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Campaign options" title="Our Lead Follow-Up Services" intro="Choose a focused campaign or an ongoing outsourced calling resource." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, text]) => <article key={title} className="rounded-md border border-border bg-card p-5 shadow-card"><PhoneCall className="h-6 w-6 text-accent" /><h3 className="mt-4 text-lg font-bold text-foreground">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-muted/45 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="What we can learn" title="Understand Interest, Requirements and the Next Step" intro="Your qualification questions are customised to fit your business and sales process." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Customer Interest", ["Currently interested", "Considering the service", "Ready for information"]],
              ["Customer Requirement", ["What they need", "Preferred product or service", "Timing and context"]],
              ["Customer Feedback", ["Questions and concerns", "Reasons for hesitation", "What information is needed"]],
              ["Follow-Up Action", ["Call immediately", "Send information", "Follow up later"]],
            ].map(([title, points]) => <div key={title as string} className="rounded-md border border-border bg-card p-6"><h3 className="text-lg font-bold text-foreground">{title as string}</h3><ul className="mt-4 space-y-3">{(points as string[]).map((point) => <li key={point} className="flex gap-2 text-sm text-muted-foreground"><Check className="h-4 w-4 shrink-0 text-accent" />{point}</li>)}</ul></div>)}
          </div>
          <div className="mx-auto mt-10 max-w-5xl rounded-md border border-accent/30 bg-accent/10 p-6 text-center"><p className="text-xl font-bold text-foreground">Generate → Call → Understand → Qualify → Report → Follow Up → Sell</p><p className="mt-2 text-muted-foreground">Buzz Connect can support both lead generation and the first follow-up conversation.</p></div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Built for Sri Lankan customers" title="Sinhala, Tamil & English Calling" intro="Prospects can have their first conversation in a language they are comfortable using, according to the campaign setup." />
          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">{["සිංහල", "தமிழ்", "English"].map((language) => <div key={language} className="flex min-w-40 items-center justify-center gap-3 rounded-md border border-border bg-card px-6 py-5 shadow-card"><Languages className="h-6 w-6 text-accent" /><span className="text-lg font-bold text-foreground">{language}</span></div>)}</div>
        </div>
      </section>

      <section className="bg-muted/45 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Who it is for" title="Industries We Can Support" intro="For businesses that generate enquiries or hold prospect lists and need a professional team to follow them up." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{industries.map(([title, text, Icon]) => <article key={title} className="rounded-md border border-border bg-card p-5"><Icon className="h-6 w-6 text-accent" /><h3 className="mt-4 text-lg font-bold text-foreground">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Flexible engagement" title="Choose the Calling Model That Fits Your Campaign" intro="Pricing is quoted for your lead volume, duration, calling requirements, team size and reporting needs." />
          <div className="grid gap-6 lg:grid-cols-3">{models.map((model, index) => <article key={model.title} className={`rounded-md border bg-card p-7 shadow-card ${index === 0 ? "border-accent" : "border-border"}`}>{index === 0 && <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold uppercase text-accent">Popular starting point</span>}<h3 className="mt-4 text-2xl font-bold text-foreground">{model.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{model.text}</p><ul className="mt-5 space-y-3">{model.points.map((point) => <li key={point} className="flex gap-2 text-sm text-foreground"><Check className="h-4 w-4 text-accent" />{point}</li>)}</ul><Button asChild className="mt-7 w-full"><a href={whatsappUrl(`Hi Buzz Connect, I would like a quote for the ${model.title}.`)} data-selected-service={SERVICE_NAME} data-wa-placement={`model_${index + 1}`} target="_blank" rel="noopener noreferrer">Request a Quote <ArrowRight /></a></Button></article>)}</div>
        </div>
      </section>

      <section className="gradient-hero py-16 text-primary-foreground sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase text-accent">The difference</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-primary-foreground sm:text-4xl">A Qualified Prospect Gives Sales a Better Starting Point</h2>
          </div>
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div className="rounded-md border border-primary-foreground/15 bg-primary-foreground/5 p-6"><p className="text-xs font-bold uppercase text-accent">Raw lead</p><div className="mt-4 space-y-2 text-primary-foreground/75"><p><strong className="text-primary-foreground">Name:</strong> Kasun</p><p><strong className="text-primary-foreground">Phone:</strong> 077 XXX XXXX</p><p><strong className="text-primary-foreground">Source:</strong> Facebook Ad</p></div><p className="mt-5 text-sm">Your salesperson still has to discover everything.</p></div>
            <ArrowRight className="mx-auto h-7 w-7 rotate-90 text-accent md:rotate-0" />
            <div className="rounded-md border border-accent/40 bg-accent/10 p-6"><p className="text-xs font-bold uppercase text-accent">After our call</p><div className="mt-4 space-y-2 text-primary-foreground/75"><p><strong className="text-primary-foreground">Interest:</strong> Interested</p><p><strong className="text-primary-foreground">Requirement:</strong> Course information</p><p><strong className="text-primary-foreground">Feedback:</strong> Wants fees and intake dates</p><p><strong className="text-primary-foreground">Next step:</strong> Sales team to contact</p></div></div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Frequently asked questions" title="Lead Follow-Up Service FAQs" />
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">{faqs.map((faq) => <article key={faq.q} className="rounded-md border border-border bg-card p-6"><h3 className="text-lg font-bold text-foreground">{faq.q}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{faq.a}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-muted/45 py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase text-accent">Don't let your leads go cold</p><h2 className="mt-3 text-3xl font-bold text-foreground sm:text-5xl">Start Your Lead Follow-Up Campaign Today</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">You provide the prospects. We make the first call, understand the requirement, collect the feedback and organise the results. Your sales team takes the next step.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild variant="hero" size="lg"><a href={whatsappUrl(quoteMessage)} data-selected-service={SERVICE_NAME} data-wa-placement="final_cta" target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp {DISPLAY_NUMBER}</a></Button><Button asChild variant="outline" size="lg"><a href="tel:+94771437707"><Phone /> Call {DISPLAY_NUMBER}</a></Button><Button asChild variant="outline" size="lg"><a href="mailto:infobuzzconnect@gmail.com"><Mail /> Email Us</a></Button></div>
            <p className="mt-7 text-sm text-muted-foreground"><CalendarCheck className="mr-2 inline h-4 w-4 text-accent" />Campaign scope, questions and reporting fields are agreed before calling begins.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadFollowUpServices;
