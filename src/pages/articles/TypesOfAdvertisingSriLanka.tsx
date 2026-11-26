import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import RelatedArticles from "@/components/RelatedArticles";
import articleImage from "@/assets/blog/article-types-of-advertising.webp";

const TypesOfAdvertisingSriLanka = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Types of Advertising in Sri Lanka: Which One is Right for Your Business?",
      description: "8 main types of advertising in Sri Lanka — email, SMS, WhatsApp, web banners, Google Ads, social media, multi-channel and traditional. Compare and choose the right mix.",
      author: { "@type": "Organization", name: "Buzz Connect" },
      publisher: { "@type": "Organization", name: "Buzz Connect" },
      datePublished: "2026-04-24",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the main types of advertising in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The 8 main types of advertising in Sri Lanka are: email marketing, SMS marketing, WhatsApp marketing, web banner advertising, Google Ads, social media advertising, multi-channel campaigns, and traditional advertising (TV, radio, print).",
          },
        },
        {
          "@type": "Question",
          name: "Which type of advertising is most effective in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Multi-channel advertising (combining email, SMS and WhatsApp) is the most effective type for most Sri Lankan businesses because it reaches the same audience across multiple touchpoints, multiplying engagement and conversions.",
          },
        },
        {
          "@type": "Question",
          name: "What is the cheapest type of advertising in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SMS marketing is one of the cheapest types of advertising in Sri Lanka, starting from LKR 20,000 for a focused campaign. Email marketing is similarly affordable from LKR 25,000 with the lowest cost per contact reached.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use digital or traditional advertising in Sri Lanka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digital advertising wins for 95% of Sri Lankan businesses in 2026 because it is targeted, measurable, faster to launch and lower cost per result. Traditional advertising still works for very large brand-awareness budgets only.",
          },
        },
      ],
    },
  ];

  return (
    <ServicePageLayout
      badge="Advertising Sri Lanka"
      title="Types of Advertising in Sri Lanka: Which One is Right for Your Business?"
      subtitle="The 8 main types of advertising available to Sri Lankan businesses — what they cost, who they work for, and how to combine them."
    >
      <SEOHead
        title="8 Types of Advertising in Sri Lanka 2026 — Compare & Choose | Buzz Connect"
        description="Types of advertising in Sri Lanka 2026 — compare email, SMS, WhatsApp, web banners, Google Ads, social media & multi-channel. Costs, pros, cons & best fit per goal."
        canonical="/types-of-advertising-sri-lanka"
        keywords="types of advertising sri lanka, types of advertising in sri lanka, advertising channels sri lanka, digital advertising sri lanka"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: "Types of Advertising in Sri Lanka", url: "/types-of-advertising-sri-lanka" },
        ]}
        jsonLd={jsonLd}
      />

      <article className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img src={articleImage} alt="Types of advertising in Sri Lanka" className="w-full rounded-2xl mb-8" loading="lazy" width={1024} height={640} />

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Sri Lankan businesses today have more <strong>types of advertising</strong> options than ever before. Should you run Google Ads or email campaigns? Is SMS better than Facebook? Do you need web banners or is social media enough?
            </p>
            <p>
              The answer depends on your business, audience, goal, and budget. This guide explains every major type of advertising available in Sri Lanka in 2026.
            </p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">The 8 Main Types of Advertising in Sri Lanka</h2>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">1. Email Marketing Advertising</h3>
            <p>The most cost-effective form of direct advertising in Sri Lanka. Open rates of 28-35% and ROI of 4-6x campaign investment.</p>
            <p>Explore Buzz Connect's <Link to="/email-marketing" className="text-accent hover:underline font-semibold">email marketing service in Sri Lanka</Link>.</p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">2. SMS Marketing Advertising</h3>
            <p>Direct delivery to mobile phones with 90%+ open rates — the fastest way to drive immediate action.</p>
            <p>Learn more about <Link to="/sms-marketing" className="text-accent hover:underline font-semibold">SMS marketing in Sri Lanka</Link>.</p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">3. WhatsApp Marketing Advertising</h3>
            <p>Personalised, media-rich messages on Sri Lanka's most popular messaging app.</p>
            <p>See how <Link to="/whatsapp-marketing" className="text-accent hover:underline font-semibold">WhatsApp marketing in Sri Lanka</Link> builds engagement at scale.</p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">4. Web Banner Advertising</h3>
            <p>Visual display ads on high-traffic Sri Lankan websites including Findit.lk.</p>
            <p>Explore <Link to="/web-banner-advertising-sri-lanka" className="text-accent hover:underline font-semibold">web banner advertising in Sri Lanka</Link>.</p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">5. Google Ads (Paid Search)</h3>
            <p>Top-of-Google placement for high-intent customers searching for your service.</p>
            <p>Learn about <Link to="/google-ads-sri-lanka" className="text-accent hover:underline font-semibold">Google Ads for Sri Lankan businesses</Link>.</p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">6. Social Media Advertising</h3>
            <p>Facebook, Instagram, and LinkedIn ads for consumer brand building and engagement.</p>
            <p>See the full guide to <Link to="/social-media-marketing-sri-lanka" className="text-accent hover:underline font-semibold">social media marketing in Sri Lanka</Link>.</p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">7. Multi-Channel Advertising Campaigns</h3>
            <p>Combining email, SMS, WhatsApp, web banners, and social media in one coordinated campaign for maximum reach.</p>
            <p>Discover <Link to="/multi-channel-marketing-sri-lanka" className="text-accent hover:underline font-semibold">multi-channel marketing in Sri Lanka</Link>.</p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-3">8. Traditional Advertising</h3>
            <p>TV, radio, newspapers, and outdoor billboards still reach specific audiences.</p>
            <p>Read our full comparison of <Link to="/online-vs-traditional-advertising-sri-lanka" className="text-accent hover:underline font-semibold">online vs traditional advertising in Sri Lanka</Link>.</p>
            <p>Traditional reach is often strongest at live brand activations, product launches and corporate events, where people meet the brand in person. Campaigns like these depend on careful <a href="https://cypherevents.lk/event-planning-sri-lanka" target="_blank" rel="noopener noreferrer" className="text-muted-foreground no-underline hover:no-underline">event planning Sri Lanka</a> teams use to set dates, venues and audiences, followed by on-the-day <a href="https://cypherevents.lk/event-management-sri-lanka" target="_blank" rel="noopener noreferrer" className="text-muted-foreground no-underline hover:no-underline">event management Sri Lanka</a> brands rely on to run the experience smoothly. Pairing an event with SMS, WhatsApp and social ads before and after the day turns one-off attendance into lasting leads.</p>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Side-by-Side Comparison</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border p-3 text-left text-foreground">Type</th>
                    <th className="border border-border p-3 text-left text-foreground">Best For</th>
                    <th className="border border-border p-3 text-left text-foreground">Typical ROI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border p-3">Email Marketing</td><td className="border border-border p-3">B2B, hotels, real estate, finance</td><td className="border border-border p-3">4-6x investment</td></tr>
                  <tr><td className="border border-border p-3">SMS Marketing</td><td className="border border-border p-3">Urgent offers, events, retail</td><td className="border border-border p-3">3-5x — fastest response</td></tr>
                  <tr><td className="border border-border p-3">WhatsApp</td><td className="border border-border p-3">Premium offers, bookings</td><td className="border border-border p-3">High personal engagement</td></tr>
                  <tr><td className="border border-border p-3">Web Banners</td><td className="border border-border p-3">Brand awareness, retargeting</td><td className="border border-border p-3">Strong for awareness</td></tr>
                  <tr><td className="border border-border p-3">Google Ads</td><td className="border border-border p-3">High search demand businesses</td><td className="border border-border p-3">Variable</td></tr>
                  <tr><td className="border border-border p-3">Social Media Ads</td><td className="border border-border p-3">Consumer brands, fashion</td><td className="border border-border p-3">Strong for awareness</td></tr>
                  <tr><td className="border border-border p-3">Multi-Channel</td><td className="border border-border p-3">Major launches, max reach</td><td className="border border-border p-3">Highest combined</td></tr>
                  <tr><td className="border border-border p-3">Traditional</td><td className="border border-border p-3">Mass consumer brands</td><td className="border border-border p-3">Hard to measure</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">How to Choose the Right Type</h2>
            <p>Ask three questions: Who is your audience? What is your goal? What is your budget? See the full{" "}
              <Link to="/advertising-cost-sri-lanka" className="text-accent hover:underline font-semibold">advertising cost guide for Sri Lanka</Link>{" "}
              for detailed pricing across every channel.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent p-6 my-8 rounded">
              <p className="font-semibold text-foreground mb-2">💡 The Honest Answer</p>
              <p className="text-muted-foreground">
                No single advertising type is best for every business. The strongest results come from coordinated multi-channel campaigns — email and SMS for direct reach, Google Ads for search capture, and web banners for retargeting — all managed by a single agency with a unified strategy.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Buzz Connect — All Types Under One Roof</h2>
            <p>
              Buzz Connect is the only advertising company in Sri Lanka offering all eight types of advertising under one roof. Explore all{" "}
              <Link to="/advertising-sri-lanka" className="text-accent hover:underline font-semibold">advertising services in Sri Lanka</Link>{" "}
              and start your campaign today.
            </p>

            <p className="mt-8">
              👉 Need help choosing? See our step-by-step{" "}
              <Link to="/how-to-advertise-business-sri-lanka" className="text-accent hover:underline font-semibold">guide on how to advertise your business in Sri Lanka</Link>.
            </p>
          </div>
        </motion.div>
        <div className="my-8 p-5 rounded-xl border border-accent/30 bg-accent/5">
          <p className="text-sm sm:text-base text-foreground">
            Comparing your options? See our full breakdown of the top{" "}
            <Link to="/digital-marketing-companies-sri-lanka" className="font-semibold text-accent underline underline-offset-2 hover:no-underline">
              digital marketing companies in Sri Lanka
            </Link>{" "}
            and how to pick the right partner for your business.
          </p>
        </div>
        <RelatedArticles currentPath="/types-of-advertising-sri-lanka" />
      </article>
    </ServicePageLayout>
  );
};

export default TypesOfAdvertisingSriLanka;
