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
    "Hi Buzz Connect, I'd like a free TikTok Marketing Sri Lanka strategy consultation."
  );

const faqs = [
  {
    q: "How much does TikTok advertising cost in Sri Lanka?",
    a: "TikTok Ads have a minimum campaign budget of approximately USD 50 per campaign and USD 20 per ad group per day. For most Sri Lankan businesses, an effective TikTok advertising budget starts from LKR 50,000–100,000 per month in ad spend. Buzz Connect's management fee is separate, starting from LKR 40,000/month.",
  },
  {
    q: "How many people use TikTok in Sri Lanka?",
    a: "As of 2026, TikTok has over 6 million active monthly users in Sri Lanka. The platform is particularly strong among users aged 18–35 in urban and semi-urban areas and is growing rapidly in rural Sri Lanka through increased mobile data access.",
  },
  {
    q: "Can a small business in Sri Lanka succeed on TikTok without a large budget?",
    a: "Yes. Unlike Facebook and Instagram where organic reach has declined sharply, TikTok's algorithm gives every video the chance to go viral regardless of follower count or budget. A small Sri Lankan business with a compelling product or engaging story can reach hundreds of thousands of people organically.",
  },
  {
    q: "What type of content works best on TikTok in Sri Lanka?",
    a: "Product showcase and demonstration videos, behind-the-scenes business content, entertaining or humorous videos using trending sounds, Sinhala-language content that feels authentic and local, transformation videos, customer testimonial videos, and educational content under 60 seconds.",
  },
  {
    q: "Does TikTok work for B2B marketing in Sri Lanka?",
    a: "TikTok is primarily a B2C platform in Sri Lanka, making it most effective for businesses selling to consumers. B2B companies can use TikTok for employer branding and recruitment. For pure B2B lead generation, LinkedIn marketing is typically more effective.",
  },
  {
    q: "How quickly will I see results from TikTok marketing?",
    a: "Organic TikTok results can appear within the first week — a single well-made video can generate thousands of views within 24–48 hours. TikTok Ads results are visible from day one of campaign launch. Most businesses see meaningful lead and sales impact within 60–90 days.",
  },
  {
    q: "Can Buzz Connect create TikTok content in Sinhala?",
    a: "Yes. We create TikTok content in Sinhala, Tamil, and English. Sinhala-language content consistently achieves higher organic reach on TikTok Sri Lanka. We recommend a Sinhala-first content strategy for businesses targeting a broad Sri Lankan consumer audience.",
  },
  {
    q: "How do I get started with TikTok marketing from Buzz Connect?",
    a: "Contact Buzz Connect on WhatsApp +94 77 143 7707 or email infobuzzconnect@gmail.com. We offer a free strategy consultation to plan your TikTok campaign.",
  },
];

const TikTokMarketing = () => {
  return (
    <ServicePageLayout
      badge="TikTok Marketing Sri Lanka"
      title="TikTok Marketing Sri Lanka — TikTok Ads, Viral Content & Influencer Campaigns"
      subtitle="TikTok has 6 million+ active users in Sri Lanka. Your audience is already there. Is your brand?"
    >
      <SEOHead
        title="TikTok Marketing Sri Lanka | TikTok Ads, Viral Content & Influencer Campaigns | Buzz Connect"
        description="Sri Lanka's leading TikTok marketing service. TikTok ads management, viral content creation, and influencer campaigns for Sri Lankan businesses. 10+ years experience. Free consultation — +94 77 143 7707."
        canonical="/tiktok-marketing-sri-lanka"
        keywords="tiktok marketing sri lanka, tiktok ads sri lanka, tiktok advertising sri lanka, tiktok agency sri lanka, tiktok influencer marketing sri lanka, tiktok for business sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/" },
          { name: "TikTok Marketing Sri Lanka", url: "/tiktok-marketing-sri-lanka" },
        ]}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "TikTok Marketing Sri Lanka",
            serviceType: "TikTok Marketing, TikTok Ads, Influencer Marketing",
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
              lowPrice: "40000",
              highPrice: "130000",
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
              TikTok has become the fastest-growing social media platform in Sri Lanka, with over <strong>6 million active users</strong> and growing faster than any other platform in the country. For Sri Lankan businesses targeting audiences under 40 — especially the 18–35 demographic that drives consumer spending in fashion, food, beauty, entertainment, education and e-commerce — <strong>TikTok marketing Sri Lanka</strong> is no longer optional. It is the single most powerful tool available.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Buzz Connect now offers dedicated TikTok marketing services designed specifically for the Sri Lankan audience — combining paid <strong>TikTok ads Sri Lanka</strong>, organic viral content creation, and influencer partnerships. Pair TikTok with our{" "}
              <Link to="/social-media-marketing-sri-lanka" className="text-accent hover:underline font-semibold">social media marketing Sri Lanka</Link>,{" "}
              <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp marketing</Link>, and{" "}
              <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel campaigns</Link>{" "}
              for maximum reach.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Why TikTok Marketing is the Biggest Opportunity for Sri Lankan Businesses in 2026</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              From virtually zero presence three years ago, TikTok now has over 6 million monthly active users in Sri Lanka. TikTok's For You Page (FYP) algorithm is the great equaliser — it shows content based on quality and relevance, not follower count or ad budget. Compare this to Facebook or Instagram where organic reach has collapsed to under 5% without paid promotion. For Sri Lankan businesses with limited budgets, this is transformative.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">The Sri Lankan TikTok Audience Profile</h2>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Age 18–24:</strong> Core TikTok audience — school leavers, undergraduates, young professionals. Highly active and trend-driven.</li>
              <li><strong className="text-foreground">Age 25–34:</strong> Rapidly growing — working professionals, young parents, entrepreneurs who discover products on TikTok before searching Google.</li>
              <li><strong className="text-foreground">Age 35–44:</strong> Emerging and significant — primarily entertainment use, but increasingly for product discovery in food, home and lifestyle.</li>
              <li><strong className="text-foreground">Geography:</strong> Colombo, Gampaha, Kandy and Galle are the highest-density markets, with strong rural penetration via mobile data.</li>
              <li><strong className="text-foreground">Language:</strong> Sinhala-language content consistently outperforms English organically. Tamil performs strongly in the North and East.</li>
              <li><strong className="text-foreground">Content preferences:</strong> Humour, food, fashion, music, dance, local culture and behind-the-scenes lifestyle content perform best.</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Why Now is the Best Time to Start TikTok Marketing in Sri Lanka</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Businesses that start TikTok marketing in Sri Lanka now will build organic followings, platform expertise and brand recognition while advertising costs are still relatively low and organic reach is exceptionally high. Within 18–24 months competition will increase and costs will rise. This is the same pattern that played out on Facebook (2012–2015) and Instagram (2016–2018) in Sri Lanka.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border space-y-5">
            <h2 className="font-heading text-2xl font-bold text-foreground">Buzz Connect's TikTok Marketing Services in Sri Lanka</h2>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-2">1. TikTok Business Account Setup & Strategy</h3>
              <p className="text-sm text-muted-foreground mb-2">We set up your TikTok Business Account, TikTok Ads Manager, and TikTok Pixel, then conduct comprehensive audience research and build your TikTok content strategy covering:</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li><strong>Content pillars</strong> — 3–4 themes your content rotates between</li>
                <li><strong>Posting frequency</strong> — typically 5–7 posts per week</li>
                <li><strong>Tone and style</strong> — voice, aesthetic and format that match your brand</li>
                <li><strong>Hashtag strategy</strong> — high-volume Sri Lankan, niche and branded hashtags</li>
                <li><strong>Sound and trend strategy</strong> — trending audio and challenges your brand can authentically join</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-2">2. TikTok Content Creation & Video Production</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Concept development based on trending formats relevant to your industry</li>
                <li>Short, punchy scripts that hook viewers in the first 2–3 seconds</li>
                <li>Filming guidance plus optional on-site filming by our team</li>
                <li>Professional editing — colour grading, text overlays, sound mixing, subtitles, TikTok-native effects</li>
                <li>Content in Sinhala, Tamil and English</li>
                <li>8–16 ready-to-post videos per month depending on your package</li>
                <li>Daily trend monitoring so your content plan stays current</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-2">3. TikTok Ads Management — Paid Advertising Campaigns</h3>
              <p className="text-sm text-muted-foreground mb-2"><strong>TikTok ad formats we manage:</strong></p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li><strong>In-Feed Ads</strong> — video ads on the For You Page, highest-volume format</li>
                <li><strong>TopView Ads</strong> — full-screen videos on app open, ideal for launches</li>
                <li><strong>Brand Takeover Ads</strong> — high-impact awareness campaigns</li>
                <li><strong>Spark Ads</strong> — boost existing organic posts as paid ads</li>
                <li><strong>Shopping Ads</strong> — for e-commerce, browse and buy inside TikTok</li>
                <li><strong>Lead Generation Ads</strong> — native forms inside the app</li>
                <li><strong>Carousel Ads</strong> — multi-image/video for product ranges or listings</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3"><strong>TikTok targeting for Sri Lanka</strong> includes geographic, age & gender, interest, behavioural, custom audiences, lookalikes and retargeting.</p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-2">4. TikTok Influencer Marketing Sri Lanka</h3>
              <p className="text-sm text-muted-foreground mb-2">On TikTok, micro-influencers (10,000–100,000 followers) often achieve higher engagement and more authentic audience connections than mega-influencers — excellent news for Sri Lankan budgets.</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Influencer identification and vetting against your target customer profile</li>
                <li>Campaign brief development covering key messages and creative guidelines</li>
                <li>Contract management — agreements, usage rights, payment</li>
                <li>Content review and approval before posting</li>
                <li>Performance tracking — views, engagement, click-throughs, conversions</li>
                <li>Categories: food & lifestyle, fashion & beauty, tech & education, entertainment, fitness, business creators</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-2">5. TikTok Performance Tracking & Monthly Reporting</h3>
              <p className="text-sm text-muted-foreground">We install the TikTok Pixel on your website and report monthly on video views and completion rates, follower growth, organic reach, paid campaign results (impressions, clicks, leads, CPL, ROAS), top-performing content analysis, competitor monitoring, and next-month strategy recommendations.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Industries That Benefit Most from TikTok Marketing in Sri Lanka</h2>
            <ul className="text-sm text-muted-foreground space-y-3">
              <li><strong className="text-foreground">Fashion, Clothing & Retail</strong> — try-ons, haul reveals and styling tips dominate.{" "}
                <Link to="/fashion-marketing-sri-lanka" className="text-accent hover:underline">Fashion marketing Sri Lanka</Link>.
              </li>
              <li><strong className="text-foreground">Food, Restaurants & Cafes</strong> — cooking videos, plating reveals, customer reactions.{" "}
                <Link to="/restaurant-marketing-sri-lanka" className="text-accent hover:underline">Restaurant marketing Sri Lanka</Link>.
              </li>
              <li><strong className="text-foreground">Beauty, Skincare & Personal Care</strong> — tutorials, routines, product reviews with high purchase intent.</li>
              <li><strong className="text-foreground">Education & Training</strong> — career advice, study tips, graduate success stories. See{" "}
                <Link to="/education-marketing-sri-lanka" className="text-accent hover:underline">education marketing Sri Lanka</Link>.
              </li>
              <li><strong className="text-foreground">Real Estate & Property</strong> — virtual tours, walk-throughs and neighbourhood guides.{" "}
                <Link to="/real-estate-marketing-sri-lanka" className="text-accent hover:underline">Real estate marketing Sri Lanka</Link>.
              </li>
              <li><strong className="text-foreground">Healthcare & Wellness</strong> — gyms, nutritionists and wellness brands reaching health-conscious audiences.</li>
              <li><strong className="text-foreground">E-Commerce & Online Stores</strong> — product demos, UGC reviews and TikTok Shopping driving direct sales.</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">TikTok Marketing Packages — Sri Lanka Pricing</h2>
            <ul className="text-sm text-muted-foreground space-y-3">
              <li><strong className="text-foreground">Starter Package</strong> — TikTok account setup, content strategy, 8 videos per month with captions and hashtags. From <strong>LKR 40,000/month</strong>.</li>
              <li><strong className="text-foreground">Growth Package</strong> — Everything in Starter plus TikTok Ads management (up to LKR 75,000 ad spend), trend monitoring, monthly performance report. From <strong>LKR 70,000/month</strong>.</li>
              <li><strong className="text-foreground">Pro Package</strong> — Full content production (16 videos/month), TikTok Ads management, 2 micro-influencer partnerships/month, Spark Ads, bi-weekly reporting. From <strong>LKR 130,000/month</strong>.</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-3">TikTok ad spend is billed separately to your TikTok Ads Manager account. Every package includes a free strategy consultation and TikTok Pixel setup.</p>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Why Choose Buzz Connect for TikTok Marketing in Sri Lanka?</h2>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li>10+ years of direct marketing experience across Sinhala, Tamil and English audiences</li>
              <li>Multi-channel reinforcement — TikTok with{" "}
                <Link to="/email-marketing" className="text-accent hover:underline">email marketing</Link> (350,000+ database),{" "}
                <Link to="/sms-marketing" className="text-accent hover:underline">SMS marketing</Link> and{" "}
                <Link to="/whatsapp-marketing" className="text-accent hover:underline">WhatsApp marketing</Link>
              </li>
              <li>Dedicated TikTok team — creative director, video editor, copywriter and account manager</li>
              <li>Real business outcomes — leads, sales, website visits — not just views</li>
              <li>Transparent monthly reporting in plain English</li>
              <li>No lock-in contracts — month-to-month with 30 days notice</li>
              <li>Direct WhatsApp support during business hours</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-card shadow-card border border-border">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">Frequently Asked Questions — TikTok Marketing Sri Lanka</h2>
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
            <h2 className="font-heading text-2xl font-bold mb-2">Ready to Go Viral on TikTok Sri Lanka?</h2>
            <p className="text-primary-foreground/90 mb-4 text-sm">WhatsApp us for a free TikTok strategy consultation — no obligation.</p>
            <Button asChild size="lg" variant="secondary">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp +94 77 143 7707
              </a>
            </Button>
          </div>

          <RelatedArticles currentPath="/tiktok-marketing-sri-lanka" />
        </motion.article>
      </div>
    </ServicePageLayout>
  );
};

export default TikTokMarketing;
