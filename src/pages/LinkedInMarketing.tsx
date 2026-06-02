import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const whatsappLink =
  "https://wa.me/94771437707?text=" +
  encodeURIComponent(
    "Hi Buzz Connect, I'd like a free LinkedIn Marketing Sri Lanka strategy consultation."
  );

const faqs = [
  {
    q: "How much does LinkedIn advertising cost in Sri Lanka?",
    a: "LinkedIn advertising in Sri Lanka is priced on a cost-per-click or cost-per-impression basis, with minimum daily budgets starting from USD 10 per day. Most effective B2B campaigns run on a budget of LKR 50,000–200,000 per month in ad spend, depending on target audience size and campaign objectives. Buzz Connect's LinkedIn management fee is separate from ad spend and starts from LKR 35,000/month.",
  },
  {
    q: "How many LinkedIn users are there in Sri Lanka?",
    a: "As of 2026, Sri Lanka has over 800,000 registered LinkedIn users. The majority are based in Colombo and the Western Province, with growing communities in Kandy, Galle, and among the Sri Lankan diaspora. The professional demographic is heavily weighted towards corporate employees, IT professionals, finance sector workers, and SME owners.",
  },
  {
    q: "Is LinkedIn marketing effective for small businesses in Sri Lanka?",
    a: "Yes. LinkedIn is most effective for businesses selling to other businesses regardless of size. A small consulting firm, boutique software company, or independent training provider can compete on LinkedIn with much larger organisations because the platform rewards good content and precise targeting, not large budgets. Our Starter Package is built specifically for Sri Lankan SMEs.",
  },
  {
    q: "How long does it take to see results from LinkedIn marketing?",
    a: "Organic LinkedIn results — follower growth, content reach, and profile views — are typically visible within the first 30 days. LinkedIn advertising results (leads, website clicks) can appear within the first week. The compounding value of LinkedIn typically becomes clear between months 3 and 6.",
  },
  {
    q: "Can Buzz Connect manage LinkedIn in Sinhala or Tamil?",
    a: "Yes. We create LinkedIn content in English, Sinhala, and Tamil. For most B2B LinkedIn campaigns English is primary as the professional community predominantly engages in English, but we deliver bilingual or trilingual content strategies when needed.",
  },
  {
    q: "What is the difference between LinkedIn organic marketing and LinkedIn advertising?",
    a: "Organic LinkedIn marketing means growing your company page and personal profiles through regular content and engagement without paying LinkedIn for reach. LinkedIn advertising means paying LinkedIn to show your content, lead forms, or message ads to a targeted audience. The most effective LinkedIn strategies combine both.",
  },
  {
    q: "How do I get started with LinkedIn marketing from Buzz Connect?",
    a: "Contact Buzz Connect on WhatsApp +94 77 143 7707 or email infobuzzconnect@gmail.com. We offer a free 30-minute LinkedIn strategy consultation — no obligation.",
  },
];

const LinkedInMarketing = () => {
  return (
    <ServicePageLayout
      badge="LinkedIn Marketing Sri Lanka"
      title="LinkedIn Marketing Sri Lanka — B2B Lead Generation, LinkedIn Ads & Company Page Management"
      subtitle="Reach Sri Lanka's 800,000+ LinkedIn professionals — CEOs, HR heads, finance directors and industry leaders — with campaigns built to generate real business results."
    >
      <SEOHead
        title="LinkedIn Marketing Sri Lanka | B2B Lead Generation & LinkedIn Ads | Buzz Connect"
        description="Sri Lanka's #1 LinkedIn marketing service. We manage LinkedIn company pages, run LinkedIn Ads, and generate qualified B2B leads. 10+ years experience. Free consultation — call +94 77 143 7707."
        canonical="/linkedin-marketing-sri-lanka"
        keywords="linkedin marketing sri lanka, linkedin advertising sri lanka, linkedin ads sri lanka, b2b marketing sri lanka, linkedin lead generation sri lanka, linkedin company page management sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/" },
          { name: "LinkedIn Marketing Sri Lanka", url: "/linkedin-marketing-sri-lanka" },
        ]}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "LinkedIn Marketing Sri Lanka",
            serviceType: "LinkedIn Marketing, LinkedIn Ads, B2B Lead Generation",
            provider: {
              "@type": "Organization",
              name: "Buzz Connect",
              url: "https://buzzconnect.lk/",
              telephone: "+94771437707",
            },
            areaServed: "Sri Lanka",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "LKR",
              lowPrice: "35000",
              highPrice: "120000",
            },
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

      <div className="max-w-3xl mx-auto">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <p className="text-muted-foreground leading-relaxed">
              LinkedIn is Sri Lanka's most powerful platform for reaching business professionals, decision-makers, company directors, and senior executives. Whether you are a B2B company looking to generate qualified leads, a professional services firm building credibility, an education provider targeting working professionals, or an employer brand trying to attract top talent —{" "}
              <strong>LinkedIn marketing Sri Lanka</strong> delivers results that no other platform can match.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Buzz Connect is Sri Lanka's most experienced multi-channel marketing partner, helping businesses reach the right people through{" "}
              <Link to="/lead-generation-sri-lanka" className="text-accent hover:underline font-semibold">B2B lead generation</Link>,{" "}
              <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing Sri Lanka</Link>, and{" "}
              <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel campaigns</Link>{" "}
              that build authority and generate real business enquiries. With 10+ years of experience and a database of 350,000+ active professional contacts, we bring unmatched local market knowledge to every LinkedIn campaign.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Why LinkedIn Marketing Matters for Sri Lankan Businesses in 2026</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              With over 800,000 registered LinkedIn users in Sri Lanka and growing rapidly, the platform has become the country's primary professional networking and B2B marketing channel. Unlike Facebook or Instagram where users are in entertainment mode, LinkedIn users are in <strong>professional mode</strong> — thinking about business, career growth, industry trends, and solutions to their work challenges.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              This mindset makes LinkedIn the highest-quality environment for B2B marketing in Sri Lanka. When your content or sponsored ad reaches a LinkedIn user in Colombo or Kandy, you are reaching someone already in the right headspace to evaluate a business solution. Compare this with the broader-reach approach of{" "}
              <Link to="/social-media-marketing-sri-lanka" className="text-accent hover:underline">social media marketing Sri Lanka</Link>{" "}
              or the immediacy of{" "}
              <Link to="/whatsapp-marketing" className="text-accent hover:underline">WhatsApp marketing Sri Lanka</Link>.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Who Is on LinkedIn in Sri Lanka?</h2>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li>Corporate executives and CEOs from Sri Lanka's leading conglomerates — John Keells, Hayleys, MAS Holdings, Dialog Axiata</li>
              <li>HR directors and talent acquisition managers actively recruiting across industries</li>
              <li>Financial services professionals from banks, insurance and investment firms</li>
              <li>IT and technology professionals from Colombo's growing tech sector</li>
              <li>Healthcare professionals, doctors and hospital administrators</li>
              <li>Education sector leaders — university administrators, department heads, training managers</li>
              <li>Marketing and communications professionals from agencies and corporate brands</li>
              <li>SME owners and entrepreneurs across sectors</li>
              <li>Graduates and young professionals from Sri Lanka's top universities</li>
              <li>International business contacts — importers, exporters, and the Sri Lankan diaspora globally</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">The LinkedIn Advantage Over Other Platforms</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              LinkedIn targeting is fundamentally different from Facebook or Instagram. On LinkedIn you can target by <strong>job title, company name, company size, industry, seniority, years of experience, educational institution, and professional skills</strong>. For companies selling ERP software, HR platforms, corporate training, financial services, import/export solutions, or premium B2B products, LinkedIn advertising Sri Lanka is in a different category entirely — it eliminates wasted reach and delivers qualified attention.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border space-y-5">
            <h2 className="font-heading text-2xl font-bold text-foreground">Buzz Connect's LinkedIn Marketing Services in Sri Lanka</h2>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-2">1. LinkedIn Company Page Setup & Management</h3>
              <p className="text-sm text-muted-foreground mb-2">A poorly set up or inactive page destroys credibility before you even speak to a prospect. We set up and optimise your LinkedIn company page from the ground up — professional banner, keyword-optimised description, showcase pages, and a consistent posting schedule.</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Page audit and full optimisation — headline, about, specialties, website link</li>
                <li>Professional banner design and logo sizing for LinkedIn specifications</li>
                <li>Content calendar with 3–4 posts per week — industry insights, news, case studies, thought leadership</li>
                <li>Copywriting in English (Sinhala or Tamil versions available on request)</li>
                <li>Branded graphic design for every post</li>
                <li>Community management — responding to comments and messages within 24 hours</li>
                <li>Monthly analytics — reach, impressions, follower growth, engagement, top content</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-2">2. LinkedIn Ads Management — Sponsored Content, InMail & Lead Gen Forms</h3>
              <p className="text-sm text-muted-foreground mb-2">LinkedIn ads Sri Lanka are more expensive per click than Facebook or Google — but far more targeted and significantly higher quality for B2B. A qualified CEO enquiry is worth more than 50 unqualified form submissions.</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Sponsored Content — single image, carousel and video ads in the LinkedIn feed</li>
                <li>Message Ads (InMail) — personalised messages delivered directly to target inboxes</li>
                <li>Lead Gen Forms — native forms pre-populated with LinkedIn profile data for high conversion</li>
                <li>Text Ads — cost-effective sidebar ads for awareness and retargeting</li>
                <li>Dynamic Ads — auto-personalised ads using viewer profile data</li>
                <li>LinkedIn Retargeting — re-engage website visitors and content viewers</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-2">3. LinkedIn B2B Lead Generation Campaigns</h3>
              <p className="text-sm text-muted-foreground mb-2">Our LinkedIn lead generation Sri Lanka process moves a cold LinkedIn user through a defined funnel — from first awareness, to engaged follower, to marketing-qualified lead, to sales conversation.</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Define your ideal customer profile — job title, company size, industry, geography</li>
                <li>Build a custom LinkedIn audience using Campaign Manager's targeting tools</li>
                <li>Create lead magnet content — guides, reports, calculators, or free consultation offers</li>
                <li>Run Sponsored Content and Lead Gen Form campaigns to capture qualified leads</li>
                <li>Deliver leads in real time via email, WhatsApp, or to your CRM</li>
                <li>A/B test creatives, headlines, and audiences weekly to reduce cost per lead</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-2">4. LinkedIn Personal Branding & Executive Profile Optimisation</h3>
              <p className="text-sm text-muted-foreground mb-2">In Sri Lanka's business community, decisions are made by people, not logos. The personal LinkedIn profiles of your CEO, MD, or key sales leaders are often the first impression a prospect has of your business.</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Full profile audit and rewrite — headline, About, experience, skills, featured section</li>
                <li>Professional headshot guidance and banner design</li>
                <li>Thought leadership content — 2–3 posts/week in your voice on industry topics</li>
                <li>Strategic connection growth to build a relevant, engaged network</li>
                <li>Engagement management to increase visibility</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-2">5. LinkedIn Content Strategy & Thought Leadership</h3>
              <p className="text-sm text-muted-foreground">Our content team creates posts, articles, and video scripts that position your brand as the go-to authority in your industry — industry insight posts, case studies, how-to content, behind-the-scenes culture, long-form LinkedIn articles, and 30–90 second native video.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Who Benefits Most from LinkedIn Marketing in Sri Lanka?</h2>
            <ul className="text-sm text-muted-foreground space-y-3">
              <li><strong className="text-foreground">Technology & Software Companies</strong> — reach CTOs, IT managers and procurement heads at large Sri Lankan corporates and international clients.</li>
              <li><strong className="text-foreground">Financial Services & Professional Services</strong> — audit, legal, consulting, insurance and investment firms reaching CFOs, finance directors and company directors. Complements{" "}
                <Link to="/finance-marketing-sri-lanka" className="text-accent hover:underline">finance marketing Sri Lanka</Link>.
              </li>
              <li><strong className="text-foreground">Education & Training Providers</strong> — universities, MBA programmes and corporate training reaching working professionals. See{" "}
                <Link to="/education-marketing-sri-lanka" className="text-accent hover:underline">education marketing Sri Lanka</Link>.
              </li>
              <li><strong className="text-foreground">Healthcare & Pharmaceuticals</strong> — reach doctors, hospital administrators and procurement heads.</li>
              <li><strong className="text-foreground">Recruitment & HR Services</strong> — see our{" "}
                <Link to="/staff-recruitment-campaigns-sri-lanka" className="text-accent hover:underline">staff recruitment campaigns Sri Lanka</Link>.
              </li>
              <li><strong className="text-foreground">Manufacturing, Export & Trade</strong> — Sri Lanka's garment, tea, spice and manufacturing exporters building relationships with international buyers.</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">LinkedIn Marketing Results — What to Expect</h2>
            <h3 className="font-heading font-semibold text-foreground mt-3 mb-1">Month 1–2: Foundation Building</h3>
            <p className="text-sm text-muted-foreground">Page follower growth of 50–200+ per month, content reaching 500–5,000 professionals organically per post, first lead form submissions, and increasing profile views from executive profile optimisation.</p>
            <h3 className="font-heading font-semibold text-foreground mt-3 mb-1">Month 3–4: Momentum Phase</h3>
            <p className="text-sm text-muted-foreground">LinkedIn's algorithm recognises your page as an active, credible publisher. Content reach increases, retargeting audiences grow, and lead quality improves. Most B2B companies see their first LinkedIn-attributed business conversations at this stage.</p>
            <h3 className="font-heading font-semibold text-foreground mt-3 mb-1">Month 5–6: Conversion Phase</h3>
            <p className="text-sm text-muted-foreground">Consistent lead flow, established thought leadership credibility, and a growing warm audience. Cost per lead from LinkedIn advertising typically falls 20–40% between month 1 and month 6.</p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">LinkedIn Marketing Packages — Sri Lanka Pricing</h2>
            <ul className="text-sm text-muted-foreground space-y-3">
              <li><strong className="text-foreground">Starter Package</strong> — Company page management, 3 posts/week, basic analytics reporting. From <strong>LKR 35,000/month</strong>.</li>
              <li><strong className="text-foreground">Growth Package</strong> — Company page management, LinkedIn Ads management (up to LKR 100,000 ad spend), lead gen campaign, monthly strategy call. From <strong>LKR 65,000/month</strong>.</li>
              <li><strong className="text-foreground">Enterprise Package</strong> — Full company page management, executive profile management for up to 3 leaders, LinkedIn Ads, lead gen forms, content strategy, bi-weekly reporting. From <strong>LKR 120,000/month</strong>.</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-3">Ad spend is billed separately to your LinkedIn account. Every package includes a free 30-minute strategy consultation.</p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Why Choose Buzz Connect for LinkedIn Marketing in Sri Lanka?</h2>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li>10+ years of direct marketing experience in Sri Lanka</li>
              <li>Access to a 350,000+ professional email database to reinforce LinkedIn with{" "}
                <Link to="/email-marketing" className="text-accent hover:underline">email marketing</Link>
              </li>
              <li>Multi-channel capability — LinkedIn working alongside{" "}
                <Link to="/sms-marketing" className="text-accent hover:underline">SMS</Link>,{" "}
                <Link to="/whatsapp-marketing" className="text-accent hover:underline">WhatsApp</Link>, and{" "}
                <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline">multi-channel marketing Sri Lanka</Link>
              </li>
              <li>Dedicated account manager with transparent reporting</li>
              <li>No lock-in contracts — month-to-month with 30 days notice</li>
              <li>Campaigns available in English, Sinhala and Tamil</li>
              <li>Direct WhatsApp support during business hours</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Frequently Asked Questions — LinkedIn Marketing Sri Lanka</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{f.q}</h3>
                  <p className="text-sm text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-center">
            <h2 className="font-heading text-2xl font-bold mb-2">Reach Sri Lanka's Decision-Makers on LinkedIn</h2>
            <p className="text-primary-foreground/90 mb-4 text-sm">WhatsApp us for a free LinkedIn strategy consultation — no obligation.</p>
            <Button asChild size="lg" variant="secondary">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp +94 77 143 7707
              </a>
            </Button>
          </div>

          <RelatedArticles currentPath="/linkedin-marketing-sri-lanka" />
        </motion.article>
      </div>
    </ServicePageLayout>
  );
};

export default LinkedInMarketing;
