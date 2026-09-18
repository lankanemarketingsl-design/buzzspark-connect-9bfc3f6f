// Social media topical cluster — specialist service pages.
// Each entry has a distinct search intent. Do not duplicate an intent that an
// existing page already covers (main service page, packages, cost, guide,
// best-company, TikTok, LinkedIn, post design, lead generation).

export interface ClusterLink {
  label: string;
  to: string;
}

export interface ClusterSection {
  title: string;
  desc: string;
}

export interface ClusterFaq {
  q: string;
  a: string;
}

export interface SocialClusterPage {
  slug: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  keywords: string;
  /** One-sentence direct answer, shown immediately under the H1. */
  answer: string;
  intro: string[];
  serviceHeading: string;
  services: ClusterSection[];
  processHeading: string;
  process: { step: string; desc: string }[];
  deliverables: string[];
  notIncluded?: string[];
  /** Who this service is a good fit for. */
  whoFor?: string[];
  /** Numbers we report on for this service. */
  metrics?: { name: string; desc: string }[];
  /** Common mistakes we see and what we do instead. */
  mistakes?: { title: string; desc: string }[];
  industriesNote: string;
  industries: ClusterLink[];
  tableHeading?: string;
  table?: { head: string[]; rows: string[][] };
  faqs: ClusterFaq[];
  siblings: ClusterLink[];
  waText: string;
  serviceType: string;
}

export const SOCIAL_HUB: ClusterLink = {
  label: "Social Media Marketing Sri Lanka",
  to: "/social-media-marketing-sri-lanka",
};

export const socialClusterPages: SocialClusterPage[] = [
  {
    slug: "facebook-marketing-sri-lanka",
    navLabel: "Facebook Marketing",
    metaTitle: "Facebook Marketing Sri Lanka | Facebook Ads & Page Management",
    metaDescription:
      "Facebook marketing services in Sri Lanka: page management, content, Facebook Ads and lead generation campaigns. Packages start from LKR 50,000. Talk to Buzz Connect.",
    h1: "Facebook Marketing Sri Lanka",
    keywords:
      "facebook marketing sri lanka, facebook advertising sri lanka, facebook ads agency sri lanka, facebook ads management sri lanka, facebook lead generation sri lanka, meta advertising sri lanka",
    answer:
      "Facebook marketing means running your Facebook page and your paid Facebook (Meta) ad campaigns together so that content builds trust and ads bring in enquiries. Buzz Connect handles both, with social media packages starting from LKR 50,000 as an agency fee, separate from your advertising budget.",
    intro: [
      "Facebook is still the largest social platform in Sri Lanka, which is why most local businesses start there. The problem is rarely the platform — it is that pages are posted to irregularly and ad money is spent on boosting posts instead of running structured campaigns.",
      "We treat your page and your ads as one system: planned content that makes your business look established, and campaigns built around a specific objective such as enquiries, messages, calls or purchases.",
    ],
    serviceHeading: "What our Facebook marketing service covers",
    services: [
      { title: "Facebook page management", desc: "Planned posting, captions written for a Sri Lankan audience, page optimisation, and a consistent look across your cover, profile and creatives." },
      { title: "Content and creative", desc: "Graphics, offer posts, reels and short video built for the Facebook feed rather than resized print artwork." },
      { title: "Facebook Ads campaigns", desc: "Campaigns set up in Meta Ads Manager with a single clear objective, proper audiences, correct placements and a tested creative set." },
      { title: "Lead generation campaigns", desc: "Lead forms, Messenger and WhatsApp click-to-chat campaigns that put enquiries directly into your team's hands." },
      { title: "Remarketing", desc: "Re-reach people who watched your video, visited your website or engaged with your page — usually your cheapest source of conversions." },
      { title: "Audience targeting", desc: "Location, age, interest, behaviour and lookalike audiences, refined as data comes in instead of set once and forgotten." },
      { title: "Community management", desc: "Comment replies and inbox handling so genuine enquiries are not left sitting unanswered." },
      { title: "Reporting", desc: "A clear report of reach, engagement, clicks, cost per result and enquiries — with what we plan to change next." },
    ],
    processHeading: "How a Facebook campaign runs with us",
    process: [
      { step: "Objective", desc: "We agree the one thing the campaign must produce: enquiries, messages, calls, footfall or online sales." },
      { step: "Audience", desc: "We define who should see it and build the targeting, including remarketing and lookalike audiences where data allows." },
      { step: "Creative", desc: "We produce the posts, ad creatives and copy, usually with a few variations to test." },
      { step: "Setup", desc: "Campaign structure, budget split and tracking are configured in Meta Ads Manager." },
      { step: "Launch and optimise", desc: "We monitor cost per result and shift budget to the audiences and creatives that perform." },
      { step: "Report", desc: "You get results and recommendations, and we roll the learning into the next cycle." },
    ],
    deliverables: [
      "Facebook page setup or clean-up",
      "Monthly content plan and creatives",
      "Facebook Ads campaign build and management",
      "Audience and remarketing setup",
      "Ad copy and creative variations",
      "Comment and inbox handling",
      "Performance report with recommendations",
    ],
    notIncluded: [
      "Your Facebook advertising budget — media spend is paid to Meta and is separate from our agency fee",
      "Photography or video shoots, unless quoted separately",
      "Website or landing page development, unless quoted separately",
    ],
    whoFor: [
      "Businesses whose customers already message pages before buying — restaurants, hotels, clinics, showrooms and retailers",
      "Companies that have spent on boosted posts and cannot say what an enquiry cost them",
      "Brands with a page that has gone quiet and now looks less established than it is",
      "Teams that can answer WhatsApp or Messenger enquiries the same day",
    ],
    metrics: [
      { name: "Cost per enquiry", desc: "Total ad spend divided by genuine enquiries — the number that decides whether the campaign is worth repeating." },
      { name: "Message and lead volume", desc: "How many conversations or form submissions the campaign produced in the period." },
      { name: "Cost per 1,000 people reached", desc: "Shows whether your creative and audience are getting efficient distribution." },
      { name: "Click-through rate", desc: "A creative signal: low CTR almost always means the hook or the offer, not the targeting." },
      { name: "Video hold rate", desc: "How far people watch — the quickest way to tell which video to put more budget behind." },
      { name: "Page growth and saves", desc: "The slower trust signals that make later campaigns cheaper." },
    ],
    mistakes: [
      { title: "Boosting posts instead of building campaigns", desc: "Boosting defaults to engagement, so you buy likes. We build campaigns with a lead, message or sales objective instead." },
      { title: "One creative for a whole month", desc: "Facebook audiences fatigue fast. We run several creatives and refresh the winners rather than waiting for results to collapse." },
      { title: "Sending everyone to a phone number nobody answers", desc: "We route enquiries to WhatsApp or a form your team actually monitors, and agree a response time." },
      { title: "Changing the campaign every day", desc: "Constant edits reset learning. We give a campaign a defined test window before judging it." },
      { title: "Agency-owned ad accounts", desc: "We work inside your Business Manager so the pixel, audiences and history stay with you." },
    ],
    industriesNote:
      "Facebook works differently for a hotel than it does for a property developer. These are the industries we run campaigns for most often:",
    industries: [
      { label: "Hotel & travel marketing", to: "/hotel-marketing-sri-lanka" },
      { label: "Restaurant & retail marketing", to: "/restaurant-marketing-sri-lanka" },
      { label: "Real estate marketing", to: "/real-estate-marketing-sri-lanka" },
      { label: "Education marketing", to: "/education-marketing-sri-lanka" },
      { label: "Fashion & clothing marketing", to: "/fashion-marketing-sri-lanka" },
      { label: "Finance & credit marketing", to: "/finance-marketing-sri-lanka" },
    ],
    tableHeading: "Boosting a post vs running a Facebook campaign",
    table: {
      head: ["", "Boosting a post", "Structured campaign"],
      rows: [
        ["Objective", "Engagement by default", "Chosen objective, e.g. leads or messages"],
        ["Targeting", "Broad and basic", "Detailed audiences, remarketing, lookalikes"],
        ["Creative", "Whatever was posted", "Built and tested for the objective"],
        ["Measurement", "Likes and reach", "Cost per enquiry or purchase"],
      ],
    },
    faqs: [
      { q: "What is a realistic monthly Facebook ad budget for a small Sri Lankan business?", a: "Most small businesses start with a modest daily budget and increase once the cost per enquiry is known. We recommend a starting figure based on your target number of enquiries and your margin per sale, rather than a fixed number, and we review it after the first two weeks." },
      { q: "Do you need access to my Facebook page and ad account?", a: "Yes. We request partner access to your Facebook page and ad account inside your own Business Manager. You stay the owner and can remove our access at any time." },
      { q: "Can you run ads in Sinhala and Tamil?", a: "Yes. We write ad copy and captions in English, Sinhala or Tamil, and often test the same offer in two languages because response rates can differ noticeably." },
      { q: "What if my page has very few followers?", a: "Paid campaigns do not depend on your follower count — the audience is defined by targeting. A tidy page with recent posts helps conversion, so we usually publish a short run of content alongside the first campaign." },
      { q: "Do you handle Messenger and WhatsApp replies?", a: "We handle comments and routine page messages during working hours and pass genuine sales enquiries to your team, since pricing and availability answers need to come from you." },
      { q: "How much does Facebook advertising cost in Sri Lanka?", a: "There are two costs: the advertising budget you pay Meta, and the agency fee for managing the campaign. Ad budgets are flexible and can start small, while our social media packages begin at LKR 50,000 as a management fee. We quote both clearly before anything goes live." },
      { q: "Is Facebook marketing still effective for Sri Lankan businesses?", a: "Yes, for most local businesses it remains the widest reach available and the cheapest route to enquiries — provided campaigns are set up with a real objective rather than boosted posts." },
      { q: "Do I need a Facebook and an Instagram campaign separately?", a: "Not necessarily. Both run through Meta Ads, so one campaign can appear on both. We decide the placements based on where your audience actually responds." },
      { q: "Who owns the ad account and the page?", a: "You do. We work inside your Business Manager, so your page, ad account, audiences and campaign history stay yours." },
      { q: "How long before I see results?", a: "Paid campaigns usually produce first enquiries within days. Page growth and trust-building from content take longer — a few months of consistent posting." },
    ],
    siblings: [
      { label: "social media advertising", to: "/social-media-advertising-sri-lanka" },
      { label: "Meta ads management", to: "/meta-ads-agency-sri-lanka" },
      { label: "social media management", to: "/social-media-management-sri-lanka" },
      { label: "social media lead generation", to: "/social-media-lead-generation-sri-lanka" },
      { label: "social media packages", to: "/social-media-packages-sri-lanka" },
    ],
    waText: "Hi Buzz Connect, I'd like to discuss Facebook marketing for my business in Sri Lanka.",
    serviceType: "Facebook Marketing",
  },
  {
    slug: "social-media-advertising-sri-lanka",
    navLabel: "Social Media Advertising",
    metaTitle: "Social Media Advertising Sri Lanka | Paid Social Campaigns",
    metaDescription:
      "Paid social media advertising in Sri Lanka across Facebook, Instagram, TikTok and LinkedIn. Campaign setup, targeting, creative and reporting. Agency fee from LKR 50,000.",
    h1: "Social Media Advertising Sri Lanka",
    keywords:
      "social media advertising sri lanka, paid social media marketing sri lanka, social media ads sri lanka, social media advertising agency sri lanka, meta advertising sri lanka",
    answer:
      "Social media advertising is the paid side of social: you pay a platform to place your message in front of a defined audience. Buzz Connect plans and manages paid campaigns on Facebook, Instagram, TikTok and LinkedIn, and always separates the advertising budget from our management fee.",
    intro: [
      "Organic reach on social platforms is limited — most of the people who follow your page will never see a given post. Advertising is how you reach beyond that, and how you reach people who have never heard of you.",
      "Paid social rewards structure. The campaigns that work have one objective, a clear audience, creative made for the placement, and enough measurement to know what a result costs.",
    ],
    serviceHeading: "What paid social advertising includes",
    services: [
      { title: "Platform selection", desc: "We pick platforms based on your audience rather than running everything everywhere — Facebook and Instagram for most local businesses, TikTok for younger reach, LinkedIn for B2B." },
      { title: "Campaign objectives", desc: "Awareness, traffic, engagement, video views, messages, lead generation or conversions — chosen before anything is built." },
      { title: "Audience building", desc: "Location, demographic, interest and behaviour targeting, plus custom and lookalike audiences from your own data." },
      { title: "Retargeting", desc: "Follow up website visitors, video viewers and past engagers with a second, more direct message." },
      { title: "Ad creative", desc: "Static, carousel and short video creative written and designed per placement, with variations to test." },
      { title: "Budget planning", desc: "How much to put behind each campaign, how to split it across platforms, and when to scale." },
      { title: "Tracking and reporting", desc: "Cost per click, cost per enquiry and cost per conversion where it can be tracked — not just impressions." },
    ],
    processHeading: "How we run a paid social campaign",
    process: [
      { step: "Brief", desc: "Your offer, your margin and the result the campaign has to produce." },
      { step: "Plan", desc: "Platforms, objective, audiences, creative concepts and a budget recommendation." },
      { step: "Build", desc: "Campaign structure, audiences and tracking configured in each platform's ads manager." },
      { step: "Test", desc: "Multiple creatives and audiences run against each other in the first phase." },
      { step: "Optimise", desc: "Budget moves to what converts; underperforming sets are paused or rebuilt." },
      { step: "Report", desc: "Results, cost per result and the next round of recommendations." },
    ],
    deliverables: [
      "Paid social media strategy and platform plan",
      "Campaign build across chosen platforms",
      "Audience, retargeting and lookalike setup",
      "Ad creative and copy variations",
      "Ongoing optimisation during the campaign",
      "Performance report with cost per result",
    ],
    notIncluded: [
      "Media spend paid to Meta, TikTok or LinkedIn — this is your advertising budget and is always separate from our fee",
      "Influencer fees, if an influencer campaign is added",
    ],
    whoFor: [
      "Businesses that need enquiries or sales within weeks, not a slow organic build",
      "Brands launching a product, location, intake or seasonal offer",
      "Advertisers already spending on social who cannot see a cost per result",
      "Companies with margin to reinvest once a cost per enquiry is proven",
    ],
    metrics: [
      { name: "Cost per result", desc: "Cost per lead, message, purchase or booking, depending on the objective agreed at the start." },
      { name: "Return on ad spend", desc: "Where sales values can be tracked, revenue attributed to the campaign against the media spend." },
      { name: "Reach and frequency", desc: "How many people saw the campaign and how often — the check against audience fatigue." },
      { name: "Click-through rate", desc: "Creative and message performance, compared between variants." },
      { name: "Landing page conversion rate", desc: "Where a page is involved, whether the traffic actually converts once it arrives." },
      { name: "Spend pacing", desc: "Whether budget is being delivered evenly or being absorbed by one ad set." },
    ],
    mistakes: [
      { title: "Running every platform at once on a small budget", desc: "Split too thin, nothing gets enough data. We start where your audience is strongest and expand after results." },
      { title: "Choosing the wrong objective", desc: "Traffic campaigns bring cheap clicks that never enquire. The objective must match the business result." },
      { title: "No retargeting", desc: "The people who already engaged are the cheapest buyers. We always build a retargeting layer." },
      { title: "No tracking before launch", desc: "Without pixel or event setup you cannot compare campaigns. Tracking goes in first." },
      { title: "Judging a campaign in 48 hours", desc: "Early costs are unstable. We agree a fair review window up front." },
    ],
    industriesNote: "Paid social carries most of the enquiry volume for these industries:",
    industries: [
      { label: "Hotel & travel marketing", to: "/hotel-marketing-sri-lanka" },
      { label: "Real estate marketing", to: "/real-estate-marketing-sri-lanka" },
      { label: "Education marketing", to: "/education-marketing-sri-lanka" },
      { label: "Restaurant & retail marketing", to: "/restaurant-marketing-sri-lanka" },
      { label: "Event marketing", to: "/event-marketing-sri-lanka" },
    ],
    tableHeading: "Which platform for which objective",
    table: {
      head: ["Platform", "Strongest for", "Typical use"],
      rows: [
        ["Facebook", "Widest local reach, enquiries", "Lead forms, messages, offers"],
        ["Instagram", "Visual products, younger urban buyers", "Reels, product and lifestyle campaigns"],
        ["TikTok", "Reach and attention at low cost", "Short video, awareness, launches"],
        ["LinkedIn", "B2B and corporate decision makers", "Lead generation, recruitment, services"],
      ],
    },
    faqs: [
      { q: "How is the advertising budget paid?", a: "You can pay the platform directly with your own card, or we can bill media spend at cost as a separate line to our fee. Either way, the amount going to the platform is always shown separately from the agency fee." },
      { q: "Which platform gives the cheapest results in Sri Lanka?", a: "It depends on your product and audience, not on the platform alone. Facebook usually gives the widest and cheapest local reach, TikTok can be cheaper for attention, and LinkedIn costs more per click but reaches decision makers. We test rather than assume." },
      { q: "Can you take over an existing campaign mid-flight?", a: "Yes. We start with an audit of the account structure, audiences, creative and tracking, then decide whether to repair or rebuild — and we tell you which, and why." },
      { q: "How often will I get reports?", a: "Monthly as standard, with a mid-campaign check-in for short promotional pushes. During a launch we share numbers weekly." },
      { q: "What happens if the campaign is not working?", a: "We change one thing at a time in a defined order: offer, creative, audience, then placement. If the economics cannot work at your price point, we say so instead of quietly spending the budget." },
      { q: "What is the difference between social media marketing and social media advertising?", a: "Marketing is the whole activity — strategy, content, page management and paid campaigns. Advertising is specifically the paid placement of your message. Most businesses need both." },
      { q: "How much should a business spend on social media advertising?", a: "Enough to reach a meaningful share of your audience for long enough to learn what works. Rather than quoting one number, we start from your target number of enquiries and your cost per enquiry, then recommend a budget." },
      { q: "Is the ad budget included in your fee?", a: "No. Our fee covers strategy, creative, setup, management and reporting. The advertising budget is paid to the platform and is fully yours." },
      { q: "Can you advertise without a website?", a: "Yes. Lead forms, Messenger and WhatsApp campaigns collect enquiries without a website, although a landing page usually improves quality." },
    ],
    siblings: [
      { label: "Facebook marketing", to: "/facebook-marketing-sri-lanka" },
      { label: "Instagram marketing", to: "/instagram-marketing-sri-lanka" },
      { label: "Meta ads agency", to: "/meta-ads-agency-sri-lanka" },
      { label: "social media campaigns", to: "/social-media-campaigns-sri-lanka" },
      { label: "social media packages", to: "/social-media-packages-sri-lanka" },
    ],
    waText: "Hi Buzz Connect, I'd like to run paid social media advertising in Sri Lanka.",
    serviceType: "Social Media Advertising",
  },
  {
    slug: "social-media-management-sri-lanka",
    navLabel: "Social Media Management",
    metaTitle: "Social Media Management Sri Lanka | Content & Community Management",
    metaDescription:
      "Social media management in Sri Lanka: strategy, content calendar, design, posting, community management and monthly reporting for Facebook, Instagram, TikTok and LinkedIn.",
    h1: "Social Media Management Sri Lanka",
    keywords:
      "social media management sri lanka, social media management services sri lanka, social media manager sri lanka, facebook page management sri lanka, instagram management sri lanka",
    answer:
      "Social media management is the ongoing work of running your accounts: strategy, a content calendar, design and copy, publishing, replying to comments and messages, and monthly reporting. Buzz Connect manages Facebook, Instagram, TikTok and LinkedIn pages for Sri Lankan businesses.",
    intro: [
      "Most businesses do not lose customers on social media because of one bad post. They lose them because the page looks abandoned — the last post is four months old and nobody answered the last three messages.",
      "Management is the discipline that fixes that: a plan, a calendar, consistent creative, and someone responsible for the inbox.",
    ],
    serviceHeading: "What social media management includes",
    services: [
      { title: "Strategy", desc: "Goals, audience, tone of voice, content pillars and posting frequency per platform." },
      { title: "Content calendar", desc: "A month planned ahead and shared with you for approval, so nothing is rushed on the day." },
      { title: "Design and copy", desc: "Post creatives, carousels, story frames and captions written for your audience." },
      { title: "Reels and short video", desc: "Short-form video, the format currently getting the most reach on Instagram, Facebook and TikTok." },
      { title: "Publishing", desc: "Scheduled posting at sensible times, per platform, without you having to remember." },
      { title: "Community management", desc: "Replying to comments, handling messages and passing genuine enquiries to your team." },
      { title: "Brand consistency", desc: "Colours, fonts and messaging kept consistent so your page looks like one brand." },
      { title: "Monthly reporting", desc: "Reach, followers, engagement, saved and shared content, and enquiries received." },
    ],
    processHeading: "How management works month to month",
    process: [
      { step: "Onboarding", desc: "Brand assets, access, offers, tone and approval process are agreed." },
      { step: "Plan", desc: "We send next month's calendar with topics, formats and platforms." },
      { step: "Approve", desc: "You review and approve; revisions happen before publishing, not after." },
      { step: "Publish", desc: "Content goes out on schedule across your platforms." },
      { step: "Engage", desc: "We handle comments and messages during working hours and escalate anything sensitive." },
      { step: "Review", desc: "Monthly report and a short plan of what changes next month." },
    ],
    deliverables: [
      "Documented social media strategy",
      "Monthly content calendar for approval",
      "Post designs, captions and hashtags",
      "Short-form video or reels, where included in your package",
      "Scheduled publishing across platforms",
      "Comment and inbox handling during working hours",
      "Monthly performance report",
    ],
    notIncluded: [
      "Paid advertising budget — ad spend and ad management are quoted separately",
      "24/7 inbox cover; community management runs during working hours unless agreed otherwise",
      "Photo and video shoots, unless included in your package",
    ],
    whoFor: [
      "Businesses whose customers check the page before visiting or buying",
      "Teams with no in-house designer or content writer",
      "Brands posting inconsistently, with long gaps between posts",
      "Companies with unanswered comments and messages piling up",
    ],
    metrics: [
      { name: "Reach and non-follower reach", desc: "How many people saw your content, and how many were new to your page." },
      { name: "Saves and shares", desc: "The strongest signal that content was genuinely useful rather than just scrolled past." },
      { name: "Follower growth", desc: "Steady growth from content, tracked separately from any paid growth." },
      { name: "Message and comment volume", desc: "How many conversations the page started in the month." },
      { name: "Response time", desc: "How quickly enquiries were answered during working hours." },
      { name: "Top and weakest posts", desc: "What to make more of next month, and what to stop making." },
    ],
    mistakes: [
      { title: "Posting for the sake of posting", desc: "Filler content trains the algorithm to show you less. We plan fewer, stronger posts over daily noise." },
      { title: "Reusing print artwork", desc: "Flyer designs do not read on a phone. Creative is built for the feed, in the right aspect ratio." },
      { title: "Ignoring the inbox", desc: "Unanswered messages are lost sales. Community management is part of the service, with an agreed response window." },
      { title: "No approval rhythm", desc: "Last-minute approvals produce rushed content. We work a month ahead on a shared calendar." },
      { title: "Reporting vanity numbers only", desc: "Reach and likes alone say little. Reports tie content back to enquiries and to next month's plan." },
    ],
    industriesNote: "Ongoing management matters most where customers check your page before buying:",
    industries: [
      { label: "Hotel & travel marketing", to: "/hotel-marketing-sri-lanka" },
      { label: "Restaurant & retail marketing", to: "/restaurant-marketing-sri-lanka" },
      { label: "Fashion & clothing marketing", to: "/fashion-marketing-sri-lanka" },
      { label: "Education marketing", to: "/education-marketing-sri-lanka" },
      { label: "Finance & credit marketing", to: "/finance-marketing-sri-lanka" },
    ],
    tableHeading: "Management vs advertising — what each one does",
    table: {
      head: ["", "Social media management", "Social media advertising"],
      rows: [
        ["Purpose", "Presence, trust, retention", "Reach and enquiries"],
        ["Output", "Content, posting, engagement", "Campaigns and paid placements"],
        ["Cost structure", "Monthly fee", "Fee plus media spend"],
        ["Speed of results", "Builds over months", "Days"],
      ],
    },
    faqs: [
      { q: "How many posts per month do we get?", a: "It depends on the package and platforms. A typical starting scope is a planned mix of designed posts, reels and stories across two platforms; the exact counts are written into your package so there is no ambiguity." },
      { q: "Who approves the content?", a: "You do. We send next month's calendar with captions and creative for approval, and revisions are handled before anything is published." },
      { q: "Do we still need ads if you manage our pages?", a: "Organic reach is limited on every platform, so most businesses get their enquiry volume from paid campaigns and their credibility from managed content. Management and advertising are quoted separately so you can start with one." },
      { q: "What access do you need?", a: "Partner or admin access to your pages inside your own Business Manager, plus your logo files, photos and offer details. Accounts stay in your ownership." },
      { q: "Can we pause the service and come back later?", a: "Yes. Management is a monthly service. We hand back the content calendar and templates so nothing stalls if you pause." },
      { q: "What is included in social media management?", a: "Strategy, a content calendar, design and captions, publishing, community management and monthly reporting. The exact volume of posts and platforms depends on the package you choose." },
      { q: "How much does social media management cost in Sri Lanka?", a: "Our social media packages start from LKR 50,000. The right tier depends on how many platforms you need, how much content per month, and whether video and paid campaigns are included." },
      { q: "Do you manage messages and comments?", a: "Yes, during working hours. We reply to routine questions, and pass genuine sales enquiries straight to your team." },
      { q: "Can you manage only one platform?", a: "Yes. Many clients start with Facebook and Instagram only, and add TikTok or LinkedIn later." },
    ],
    siblings: [
      { label: "social media content creation", to: "/social-media-content-creation-sri-lanka" },
      { label: "Facebook marketing", to: "/facebook-marketing-sri-lanka" },
      { label: "Instagram marketing", to: "/instagram-marketing-sri-lanka" },
      { label: "social media packages", to: "/social-media-packages-sri-lanka" },
    ],
    waText: "Hi Buzz Connect, I'd like a quote for monthly social media management.",
    serviceType: "Social Media Management",
  },
  {
    slug: "social-media-agency-sri-lanka",
    navLabel: "Social Media Agency",
    metaTitle: "Social Media Agency Sri Lanka | Strategy, Content & Paid Social",
    metaDescription:
      "Looking for a social media agency in Sri Lanka? See what an agency actually does, what to ask before hiring one, and how Buzz Connect works. Packages from LKR 50,000.",
    h1: "Social Media Agency in Sri Lanka",
    keywords:
      "social media agency sri lanka, social media company sri lanka, social media agencies sri lanka, social media marketing agency sri lanka",
    answer:
      "A social media agency plans your strategy, produces content, manages your pages and runs your paid campaigns, then reports on results. Buzz Connect does all four for Sri Lankan businesses, with packages starting from LKR 50,000 and reach extended through our own platform Findit.lk.",
    intro: [
      "Most businesses start looking for an agency at one of two moments: the page has gone quiet, or money has been spent on ads with nothing to show for it.",
      "This page explains what an agency should be doing for you, the questions worth asking before you sign, and how we work — so you can compare properly rather than on price alone.",
    ],
    serviceHeading: "What a social media agency does",
    services: [
      { title: "Strategy", desc: "Deciding which platforms, which audiences and which message, based on your business goals." },
      { title: "Creative production", desc: "Designing and writing the posts, ads and videos, month after month." },
      { title: "Paid media", desc: "Building and managing ad campaigns, and being accountable for the cost per result." },
      { title: "Page management", desc: "Publishing, community management and keeping the brand consistent." },
      { title: "Measurement", desc: "Reporting on reach, engagement and enquiries, and changing the plan when numbers say so." },
      { title: "Coordination", desc: "Connecting social with your other channels so campaigns reinforce each other instead of running in isolation." },
    ],
    processHeading: "Questions worth asking any agency",
    process: [
      { step: "Who owns the accounts?", desc: "Your page, ad account and audience data should stay in your Business Manager." },
      { step: "What exactly is delivered monthly?", desc: "Number of posts, videos, platforms, campaigns and reports — in writing." },
      { step: "Is ad spend separate?", desc: "The agency fee and the platform media spend should be quoted as two different lines." },
      { step: "What will be measured?", desc: "Reach and likes alone are weak. Ask for cost per enquiry or cost per sale where trackable." },
      { step: "Who does the work?", desc: "Ask who writes, designs and runs the ads, and how approvals work." },
      { step: "What happens if it does not work?", desc: "Ask how the plan changes after a poor month — a good agency has an answer." },
    ],
    deliverables: [
      "Social media strategy for your business",
      "Content production and page management",
      "Paid campaign setup and management",
      "Multi-channel support across email, SMS, WhatsApp and Findit.lk where useful",
      "Reporting you can act on",
    ],
    whoFor: [
      "Businesses that need one team accountable for strategy, content and ads",
      "Companies that have cycled through freelancers with inconsistent output",
      "Brands wanting social joined up with email, SMS, WhatsApp and Findit.lk reach",
      "Owners who want a monthly report they can actually act on",
    ],
    metrics: [
      { name: "Cost per enquiry", desc: "The headline commercial number across all paid activity." },
      { name: "Enquiry volume by channel", desc: "Which platform or channel produced which enquiries, so budget follows results." },
      { name: "Content output delivered", desc: "What was promised versus what was published in the month." },
      { name: "Reach and audience growth", desc: "Whether your audience is genuinely expanding." },
      { name: "Response time to enquiries", desc: "Because slow follow-up wastes good campaigns." },
      { name: "Spend efficiency trend", desc: "Whether cost per result is improving month over month." },
    ],
    mistakes: [
      { title: "Hiring on price alone", desc: "The cheapest quote usually hides a smaller scope. Compare deliverables, not headline fees." },
      { title: "Letting the agency own your accounts", desc: "Insist your page, ad account and pixel stay in your Business Manager." },
      { title: "Accepting fee and ad spend as one figure", desc: "You should always see what buys reach and what pays for work as two separate lines." },
      { title: "No agreed scope in writing", desc: "Post counts, platforms, campaigns and reporting frequency should be documented before you start." },
      { title: "Reporting without recommendations", desc: "A report should end with what changes next month, otherwise it is just a screenshot." },
    ],
    industriesNote: "Industries we work with regularly:",
    industries: [
      { label: "Hotels & travel", to: "/hotel-marketing-sri-lanka" },
      { label: "Restaurants & retail", to: "/restaurant-marketing-sri-lanka" },
      { label: "Real estate", to: "/real-estate-marketing-sri-lanka" },
      { label: "Education", to: "/education-marketing-sri-lanka" },
      { label: "Finance & credit", to: "/finance-marketing-sri-lanka" },
      { label: "Fashion & clothing", to: "/fashion-marketing-sri-lanka" },
    ],
    faqs: [
      { q: "Should we hire an agency or an in-house social media person?", a: "An in-house person is often better once you need daily presence and product knowledge. An agency is usually better when you need design, video, copy and paid media skills at once without hiring four people. Many clients do both — in-house content with agency paid media." },
      { q: "How long is the commitment?", a: "Management is monthly. We usually suggest three months as a fair window to establish content rhythm and a reliable cost per enquiry, but you are not locked into a long contract." },
      { q: "How do we hand over from our current agency?", a: "We ask for admin transfer of your page and ad account, past campaign data, brand files and the current content calendar. We audit what exists before changing anything." },
      { q: "Do you share case studies?", a: "We discuss relevant work and the numbers we are permitted to share in a call. We do not publish invented results or testimonials on this site." },
      { q: "Who will we be dealing with day to day?", a: "You get one point of contact who coordinates the designer, video editor and paid media specialist working on your account." },
      { q: "What does a social media marketing agency do?", a: "It takes responsibility for your social presence: strategy, content, page management, paid campaigns and reporting — so the work happens consistently instead of whenever someone in your team has time." },
      { q: "How do I choose a social media agency in Sri Lanka?", a: "Compare what is actually delivered each month, whether ad spend is separate from the fee, what will be measured, and whether you keep ownership of your accounts. Price alone tells you very little." },
      { q: "How much does a social media agency charge in Sri Lanka?", a: "Fees vary widely with scope. Our packages start from LKR 50,000 as a management fee, with advertising budget quoted separately." },
      { q: "Do you work with small businesses?", a: "Yes. Smaller businesses usually start with one or two platforms and a modest ad budget, then scale once the cost per enquiry is known." },
    ],
    siblings: [
      { label: "social media marketing services", to: "/social-media-marketing-sri-lanka" },
      { label: "social media management", to: "/social-media-management-sri-lanka" },
      { label: "paid social advertising", to: "/social-media-advertising-sri-lanka" },
      { label: "social media packages", to: "/social-media-packages-sri-lanka" },
    ],
    waText: "Hi Buzz Connect, I'm looking for a social media agency in Sri Lanka.",
    serviceType: "Social Media Agency Services",
  },
  {
    slug: "social-media-campaigns-sri-lanka",
    navLabel: "Social Media Campaigns",
    metaTitle: "Social Media Campaigns Sri Lanka | Campaign Planning & Management",
    metaDescription:
      "Social media campaign management in Sri Lanka — objective, audience, creative, launch, optimisation and reporting for promotions, launches and lead generation campaigns.",
    h1: "Social Media Campaigns in Sri Lanka",
    keywords:
      "social media campaigns sri lanka, social media campaign management sri lanka, social media promotional campaigns sri lanka, digital campaign agency sri lanka",
    answer:
      "A social media campaign is a time-bound push with one objective — a launch, a promotion, an event or a lead generation drive — run across the platforms where your audience is. Buzz Connect plans, builds, optimises and reports on campaigns for Sri Lankan businesses.",
    intro: [
      "Ongoing management keeps your page alive. A campaign is different: it has a start, an end, a budget and one thing it must achieve.",
      "Campaigns are where most of the measurable business impact happens — bookings for a season, enrolments for an intake, enquiries for a new project, footfall for an opening.",
    ],
    serviceHeading: "Types of campaign we run",
    services: [
      { title: "Product or service launch", desc: "Build anticipation, then convert with a concentrated paid push in the launch window." },
      { title: "Promotion and offer campaigns", desc: "Seasonal offers, discounts and bundles with a clear deadline and a strong call to action." },
      { title: "Lead generation campaigns", desc: "Forms, Messenger or WhatsApp campaigns designed to fill your pipeline with enquiries." },
      { title: "Event campaigns", desc: "Awareness before, reminders during the run-up, and registration or ticket conversion." },
      { title: "Awareness campaigns", desc: "Reach-focused campaigns for new brands or new locations that nobody is searching for yet." },
      { title: "Recruitment campaigns", desc: "Reaching candidates on social, alongside our recruitment platforms." },
    ],
    processHeading: "Our campaign process",
    process: [
      { step: "1. Objective", desc: "One measurable goal and the number that defines success." },
      { step: "2. Audience", desc: "Who we need to reach, and which segments get which message." },
      { step: "3. Strategy", desc: "Message, offer, timeline and budget split across platforms." },
      { step: "4. Creative", desc: "Designs, video and copy produced per platform, with variants." },
      { step: "5. Platform selection", desc: "Facebook, Instagram, TikTok, LinkedIn or a combination — plus other channels where relevant." },
      { step: "6. Launch", desc: "Campaigns go live with tracking in place." },
      { step: "7. Optimisation", desc: "Daily monitoring; budget shifted to the best performing sets." },
      { step: "8. Reporting", desc: "Final report with results, cost per result and what to repeat next time." },
    ],
    deliverables: [
      "Campaign strategy document",
      "Creative set per platform",
      "Campaign build and tracking",
      "Mid-campaign optimisation",
      "Enquiry handover to your team",
      "End-of-campaign report",
    ],
    whoFor: [
      "Businesses with a date to hit — an opening, an intake, a season or an event",
      "Brands launching a new product, project or location",
      "Companies needing a concentrated enquiry push rather than ongoing posting",
      "Teams that can handle a short spike in enquiries",
    ],
    metrics: [
      { name: "Cost per result", desc: "Cost per lead, registration, booking or sale for the campaign period." },
      { name: "Total results delivered", desc: "Measured against the target agreed before launch." },
      { name: "Reach within the target audience", desc: "How much of the audience you actually covered in the window." },
      { name: "Creative comparison", desc: "Which concept and hook produced results at the lowest cost." },
      { name: "Daily pacing", desc: "Whether spend and results tracked evenly across the campaign." },
      { name: "Post-campaign audience", desc: "The engaged and video-viewer audiences left behind for the next campaign to retarget." },
    ],
    mistakes: [
      { title: "Starting too late", desc: "Campaigns launched days before the date have no time to learn. We plan the run-up backwards from the deadline." },
      { title: "No single objective", desc: "A campaign that must do awareness and sales at once does neither well. One goal per campaign." },
      { title: "Same creative for every platform", desc: "Feed, story and short video need different framing. We produce per placement." },
      { title: "No urgency in the offer", desc: "Time-bound campaigns need a real reason to act now — a date, a limit or a deadline." },
      { title: "No plan for the leads", desc: "We agree the handover and response process before spending, not after enquiries arrive." },
    ],
    industriesNote: "Campaign-driven industries we work with:",
    industries: [
      { label: "Event marketing", to: "/event-marketing-sri-lanka" },
      { label: "Hotels & travel", to: "/hotel-marketing-sri-lanka" },
      { label: "Education", to: "/education-marketing-sri-lanka" },
      { label: "Real estate", to: "/real-estate-marketing-sri-lanka" },
      { label: "Restaurants & retail", to: "/restaurant-marketing-sri-lanka" },
    ],
    faqs: [
      { q: "How far in advance should we plan a campaign?", a: "Two to three weeks before launch for a straightforward promotion, and four to six weeks where video production or an event run-up is involved. That allows creative approval, tracking setup and a short testing phase before the main push." },
      { q: "Can you run a one-off campaign without a monthly contract?", a: "Yes. Campaigns can be quoted as a standalone project with a defined start, end and deliverables. Many clients start this way and add ongoing management later." },
      { q: "How is a campaign budget split?", a: "Typically a smaller testing phase first, then the majority of the budget behind the creative and audience that proved cheapest per result. The exact split is set out in the campaign plan." },
      { q: "What do we receive at the end?", a: "A report with results against the target, cost per result, the winning creative, and specific recommendations for the next campaign — plus the audiences built during the campaign, which stay in your account." },
      { q: "Can a campaign include SMS, email or WhatsApp?", a: "Yes, and multi-channel campaigns usually perform better because the same audience sees a consistent message in more than one place. We quote each channel separately so you can choose." },
      { q: "How long should a social media campaign run?", a: "Most promotional campaigns run two to four weeks — long enough to gather data and optimise, short enough to keep urgency. Launches and seasonal pushes are planned around the date." },
      { q: "What is the difference between a campaign and ongoing management?", a: "A campaign has one objective, a fixed period and its own budget. Management is the continuous content and community work that runs regardless." },
      { q: "Can a campaign run across social and other channels?", a: "Yes, and it usually performs better. We often combine social with email, SMS, WhatsApp and Findit.lk placements in one multi-channel campaign." },
      { q: "What does a campaign cost?", a: "The management fee starts from LKR 50,000 depending on scope, with the advertising budget quoted separately based on the reach and results you need." },
    ],
    siblings: [
      { label: "paid social advertising", to: "/social-media-advertising-sri-lanka" },
      { label: "Facebook marketing", to: "/facebook-marketing-sri-lanka" },
      { label: "social media lead generation", to: "/social-media-lead-generation-sri-lanka" },
      { label: "multi-channel marketing", to: "/multi-channel-marketing-sri-lanka" },
      { label: "social media packages", to: "/social-media-packages-sri-lanka" },
    ],
    waText: "Hi Buzz Connect, I'd like to plan a social media campaign.",
    serviceType: "Social Media Campaign Management",
  },
  {
    slug: "instagram-marketing-sri-lanka",
    navLabel: "Instagram Marketing",
    metaTitle: "Instagram Marketing Sri Lanka | Instagram Ads & Content",
    metaDescription:
      "Instagram marketing services in Sri Lanka: reels, stories, content, Instagram Ads and lead generation for hotels, restaurants, fashion and lifestyle brands.",
    h1: "Instagram Marketing Sri Lanka",
    keywords:
      "instagram marketing sri lanka, instagram advertising sri lanka, instagram ads agency sri lanka, instagram management sri lanka, instagram reels marketing sri lanka",
    answer:
      "Instagram marketing combines a strong visual feed, reels and stories with paid Instagram (Meta) ads. It suits businesses people choose with their eyes — hotels, restaurants, fashion, beauty, interiors and lifestyle brands. Buzz Connect handles content and paid campaigns together.",
    intro: [
      "Instagram is where a hotel room, a plate of food or an outfit does the selling. The platform rewards good visuals and short video, and punishes stock-looking artwork.",
      "It is also a Meta platform, so the same ad system that powers Facebook campaigns places Instagram ads — which means one budget can work across both when that makes sense.",
    ],
    serviceHeading: "What Instagram marketing includes",
    services: [
      { title: "Instagram strategy", desc: "Positioning, content pillars, posting rhythm and the look of your grid." },
      { title: "Reels", desc: "Short vertical video, currently the strongest format for reach and new followers." },
      { title: "Stories", desc: "Daily presence, polls, behind the scenes, offers and link stickers." },
      { title: "Feed and carousel content", desc: "Designed posts and multi-slide carousels that explain, showcase or sell." },
      { title: "Instagram Ads", desc: "Paid campaigns through Meta Ads Manager for reach, traffic, messages, leads or sales." },
      { title: "Influencer collaborations", desc: "Where a collaboration genuinely fits your brand, we identify and coordinate creators." },
      { title: "Profile optimisation", desc: "Bio, highlights, action buttons and links set up so a visitor knows what to do next." },
      { title: "Reporting", desc: "Reach, saves, shares, profile visits, follows and enquiries." },
    ],
    processHeading: "How we run Instagram",
    process: [
      { step: "Audit", desc: "We review your current profile, content performance and competitors." },
      { step: "Plan", desc: "A monthly plan across reels, carousels, single posts and stories." },
      { step: "Produce", desc: "Design, editing and captions, kept in one visual style." },
      { step: "Publish", desc: "Posting at the times your audience is active." },
      { step: "Promote", desc: "The best organic content gets paid budget behind it — usually cheaper than promoting untested creative." },
      { step: "Review", desc: "Monthly reporting and content adjustments." },
    ],
    deliverables: [
      "Instagram content plan",
      "Reels, carousels, posts and stories",
      "Profile and highlights optimisation",
      "Instagram ad campaigns",
      "Comment and DM handling during working hours",
      "Monthly report",
    ],
    whoFor: [
      "Businesses people choose with their eyes — hotels, villas, restaurants, cafés, salons and interiors",
      "Fashion, beauty and lifestyle brands selling to urban buyers",
      "Brands with a steady supply of photos and video from real operations",
      "Businesses selling through DMs or an online store",
    ],
    metrics: [
      { name: "Non-follower reach", desc: "How much of your reach came from discovery rather than existing followers." },
      { name: "Saves and shares", desc: "Instagram's clearest quality signals, and the best predictor of continued reach." },
      { name: "Reel watch time", desc: "How far viewers get before dropping off, used to pick the next hooks." },
      { name: "Profile visits and link taps", desc: "Whether content actually moves people towards enquiring or buying." },
      { name: "DM conversations", desc: "Enquiries started in the inbox, which is where most Instagram selling happens locally." },
      { name: "Cost per result on Instagram placements", desc: "For paid campaigns, what an enquiry or sale costs from Instagram specifically." },
    ],
    mistakes: [
      { title: "Posting text-heavy graphics", desc: "Instagram rewards visuals and video. Information-dense artwork belongs in a carousel, not a single feed post." },
      { title: "Ignoring reels", desc: "Reels currently carry most of the discovery reach. A feed-only account grows very slowly." },
      { title: "An unclear profile", desc: "Bio, highlights and action buttons should tell a first-time visitor what you sell and how to buy within seconds." },
      { title: "Stock imagery", desc: "Real rooms, real plates and real staff outperform stock in almost every local account we manage." },
      { title: "Leaving DMs unanswered", desc: "On Instagram the inbox is the sales counter. We reply during working hours and hand over real enquiries." },
    ],
    industriesNote: "Instagram performs particularly well for:",
    industries: [
      { label: "Hotels & travel", to: "/hotel-marketing-sri-lanka" },
      { label: "Restaurants & cafés", to: "/restaurant-marketing-sri-lanka" },
      { label: "Fashion & clothing", to: "/fashion-marketing-sri-lanka" },
      { label: "Events", to: "/event-marketing-sri-lanka" },
      { label: "Real estate", to: "/real-estate-marketing-sri-lanka" },
    ],
    tableHeading: "Facebook or Instagram — which one first?",
    table: {
      head: ["", "Facebook", "Instagram"],
      rows: [
        ["Audience", "Broadest, all ages, island-wide", "Younger, urban, visual-led"],
        ["Best content", "Offers, information, community", "Reels, product and lifestyle visuals"],
        ["Typical use", "Lead generation, local reach", "Brand desire, discovery, e-commerce"],
        ["Ads", "Meta Ads", "Meta Ads, same account"],
      ],
    },
    faqs: [
      { q: "How often should a business post on Instagram?", a: "Consistency matters more than volume. A workable rhythm for most local businesses is a few strong feed or reel posts a week plus regular stories, rather than daily posts that run out of ideas after a month." },
      { q: "Do hashtags still help?", a: "They help a little with categorisation, but they are no longer the main driver of reach. The hook, the visual and watch time matter far more, so that is where we spend the effort." },
      { q: "Can we sell directly through Instagram in Sri Lanka?", a: "Most local brands sell through DMs, WhatsApp or a website link, and we set the profile up for that. Full in-app checkout is not generally available locally, so we optimise the conversation path instead." },
      { q: "Do we need a professional photoshoot?", a: "Not to start. Good phone footage from your own operation, edited well, performs strongly. We advise on what to capture, and quote a shoot separately if you want one." },
      { q: "Can Instagram and Facebook run from one budget?", a: "Yes. Both are bought through Meta Ads, so one campaign can place ads on both and let the system find the cheaper placement for your objective." },
      { q: "Should my business use Facebook or Instagram?", a: "If you need the widest local reach and enquiries, start with Facebook. If your product is visual and your buyers are younger and urban, Instagram usually pays back faster. Many businesses run both from one Meta ad account." },
      { q: "How much do Instagram ads cost in Sri Lanka?", a: "Instagram ads run on Meta's auction, so cost depends on audience, placement and creative quality. Budgets are flexible; our management fee starts from LKR 50,000 and is quoted separately from ad spend." },
      { q: "Do reels really matter?", a: "Yes. Short vertical video currently gets the most non-follower reach on Instagram, which makes it the fastest way to be discovered." },
      { q: "Do you shoot the video?", a: "We produce edited reels from your footage as standard. Full production shoots are quoted separately." },
    ],
    siblings: [
      { label: "Facebook marketing", to: "/facebook-marketing-sri-lanka" },
      { label: "paid social advertising", to: "/social-media-advertising-sri-lanka" },
      { label: "social media content creation", to: "/social-media-content-creation-sri-lanka" },
      { label: "social media management", to: "/social-media-management-sri-lanka" },
      { label: "social media packages", to: "/social-media-packages-sri-lanka" },
    ],
    waText: "Hi Buzz Connect, I'd like to discuss Instagram marketing for my brand.",
    serviceType: "Instagram Marketing",
  },
  {
    slug: "meta-ads-agency-sri-lanka",
    navLabel: "Meta Ads",
    metaTitle: "Meta Ads Agency Sri Lanka | Facebook & Instagram Advertising",
    metaDescription:
      "Meta ads management in Sri Lanka — Facebook and Instagram advertising from one account. Business Manager setup, audiences, retargeting, conversion campaigns and reporting.",
    h1: "Meta Ads Agency in Sri Lanka",
    keywords:
      "meta ads agency sri lanka, meta advertising sri lanka, meta ads management sri lanka, facebook instagram ads agency sri lanka",
    answer:
      "Meta Ads is the single advertising system behind Facebook, Instagram, Messenger and Audience Network. One campaign, built in Meta Ads Manager, can place ads across all of them. Buzz Connect sets up and manages Meta ad accounts and campaigns for Sri Lankan businesses. We are an independent agency and not affiliated with Meta.",
    intro: [
      "Many businesses think of Facebook ads and Instagram ads as separate purchases. They are not — both are bought through Meta Ads, from the same account, often within the same campaign.",
      "Understanding that changes how budget is spent: instead of splitting money between platforms by guesswork, you let one campaign find the cheapest placement for the result you asked for.",
    ],
    serviceHeading: "What Meta ads management covers",
    services: [
      { title: "Business Manager setup", desc: "Correct account, page, pixel and permission structure — so your assets stay yours." },
      { title: "Campaign architecture", desc: "Campaign, ad set and ad structure built around one objective, not stacked randomly." },
      { title: "Audience targeting", desc: "Saved, custom and lookalike audiences built from your customer data and site traffic." },
      { title: "Retargeting", desc: "Sequenced follow-up for people who engaged, watched or visited but did not convert." },
      { title: "Conversion campaigns", desc: "Pixel and event setup so Meta optimises towards purchases, leads or messages rather than clicks." },
      { title: "Creative testing", desc: "Multiple creatives and hooks tested per audience, with losing variants cut quickly." },
      { title: "Reporting", desc: "Spend, cost per result and where the budget is being wasted." },
    ],
    processHeading: "How Meta ad accounts are set up and run",
    process: [
      { step: "Access", desc: "We work as partners inside your Business Manager; you keep ownership." },
      { step: "Tracking", desc: "Pixel or Conversions API events configured where a website is involved." },
      { step: "Structure", desc: "Campaigns built per objective with clean ad set separation." },
      { step: "Launch", desc: "Learning phase managed rather than interrupted by constant edits." },
      { step: "Scale", desc: "Winning ad sets get budget increases at a controlled pace." },
      { step: "Report", desc: "Regular reporting against cost per result." },
    ],
    deliverables: [
      "Business Manager and ad account audit or setup",
      "Pixel and event tracking setup",
      "Campaign, ad set and creative build",
      "Custom, lookalike and retargeting audiences",
      "Ongoing optimisation and creative testing",
      "Performance reporting",
    ],
    notIncluded: ["Meta media spend, which you pay to Meta directly or through your own card"],
    whoFor: [
      "Businesses already spending on Facebook or Instagram ads without clear reporting",
      "Advertisers who need proper pixel and conversion tracking on a website or store",
      "Companies with an inherited or messy ad account that needs an audit",
      "Brands ready to scale a campaign that is already producing enquiries",
    ],
    metrics: [
      { name: "Cost per result", desc: "Cost per lead, message, add-to-cart or purchase, by campaign and ad set." },
      { name: "Return on ad spend", desc: "Tracked revenue against spend where pixel or Conversions API data is available." },
      { name: "Frequency", desc: "How often the same person is being shown the ad, the early warning for fatigue." },
      { name: "Cost per 1,000 impressions", desc: "Auction pressure and creative quality, compared across audiences." },
      { name: "Hook and hold rates", desc: "Three-second and full video views, used to decide creative direction." },
      { name: "Event match quality", desc: "Whether tracking is passing clean data back to Meta so optimisation works." },
    ],
    mistakes: [
      { title: "Too many ad sets on a small budget", desc: "Budget fragments and nothing exits the learning phase. We consolidate structure to fit the spend." },
      { title: "Broken or missing pixel events", desc: "Meta cannot optimise towards a conversion it cannot see. Tracking is verified before launch." },
      { title: "Editing during the learning phase", desc: "Every significant edit restarts learning. We batch changes at review points." },
      { title: "Scaling budget too fast", desc: "Large jumps destabilise a working ad set. We scale in controlled increments." },
      { title: "Agency-owned assets", desc: "Pixels, audiences and campaign history should live in a Business Manager you own." },
    ],
    industriesNote: "Meta ads carry most paid volume for:",
    industries: [
      { label: "Real estate", to: "/real-estate-marketing-sri-lanka" },
      { label: "Hotels & travel", to: "/hotel-marketing-sri-lanka" },
      { label: "Education", to: "/education-marketing-sri-lanka" },
      { label: "Finance & credit", to: "/finance-marketing-sri-lanka" },
      { label: "Fashion & clothing", to: "/fashion-marketing-sri-lanka" },
    ],
    faqs: [
      { q: "What does a Meta ads audit look at?", a: "Account and campaign structure, objectives, audience overlap, creative variety and fatigue, pixel and event setup, attribution settings, and historical cost per result. We come back with what to fix first and the likely impact." },
      { q: "Do we need a website for Meta ads to work?", a: "No. Lead form, Messenger and WhatsApp campaigns work without a website. A website or landing page with proper tracking gives Meta better data to optimise against, which usually lowers cost per result over time." },
      { q: "Is a verified business or Business Manager needed?", a: "A Business Manager is strongly recommended so you own your assets. Business verification is required for some ad categories and higher spend limits, and we guide you through it if it applies." },
      { q: "How do special ad categories affect targeting?", a: "Credit, employment and housing ads face restricted targeting on Meta. If you advertise in those categories we design around the restrictions, usually with broader audiences and sharper creative and copy." },
      { q: "Can you work alongside our in-house team?", a: "Yes. We often handle campaign structure, tracking and optimisation while an in-house team produces content, with a shared reporting view." },
      { q: "Are Meta ads and Facebook ads the same thing?", a: "Facebook ads are one part of Meta Ads. The same ad account also places ads on Instagram, Messenger and Audience Network." },
      { q: "Do I need my own Business Manager?", a: "Yes, we recommend it. Your page, pixel, audiences and campaign history are valuable assets and should sit in an account you own." },
      { q: "Can you fix a poorly performing existing ad account?", a: "Often, yes. We start with an audit of structure, audiences, creative and tracking before recommending a rebuild or a repair." },
      { q: "Is Buzz Connect affiliated with Meta?", a: "No. We are an independent Sri Lankan agency that manages advertising on Meta platforms." },
    ],
    siblings: [
      { label: "Facebook marketing", to: "/facebook-marketing-sri-lanka" },
      { label: "Instagram marketing", to: "/instagram-marketing-sri-lanka" },
      { label: "paid social advertising", to: "/social-media-advertising-sri-lanka" },
      { label: "Google Ads Sri Lanka", to: "/google-ads-sri-lanka" },
    ],
    waText: "Hi Buzz Connect, I need help managing Meta (Facebook & Instagram) ads.",
    serviceType: "Meta Ads Management",
  },
  {
    slug: "social-media-lead-generation-sri-lanka",
    navLabel: "Social Media Lead Generation",
    metaTitle: "Social Media Lead Generation Sri Lanka | Facebook & Instagram Leads",
    metaDescription:
      "Generate leads from Facebook, Instagram and WhatsApp in Sri Lanka. Lead campaigns, forms, follow-up flow and reporting on cost per enquiry. Buzz Connect.",
    h1: "Social Media Lead Generation Sri Lanka",
    keywords:
      "social media lead generation sri lanka, facebook lead generation sri lanka, generate leads from facebook sri lanka, social media leads sri lanka",
    answer:
      "Social media lead generation uses paid campaigns to collect contact details or start conversations with people interested in your offer — through lead forms, WhatsApp, Messenger or a landing page. The result to measure is cost per qualified enquiry, not likes.",
    intro: [
      "A lead campaign only works when the whole chain works: the ad, the form or chat, the speed of follow-up, and the sales conversation. Most disappointing campaigns break at follow-up, not at the ad.",
      "We build the campaign and the handover together, so enquiries reach your team while they are still interested.",
    ],
    serviceHeading: "How we generate leads from social media",
    services: [
      { title: "Offer design", desc: "A reason to enquire now — a quote, a site visit, a free consultation, a limited offer." },
      { title: "Lead form campaigns", desc: "Meta instant forms that collect details without leaving the app, with qualifying questions to filter time-wasters." },
      { title: "WhatsApp campaigns", desc: "Click-to-chat ads that start a WhatsApp conversation, which suits Sri Lankan buyer behaviour well." },
      { title: "Landing page campaigns", desc: "Where a page is needed to explain price, spec or credibility before someone enquires." },
      { title: "Retargeting", desc: "Second-touch campaigns for people who engaged but did not enquire." },
      { title: "Lead handover", desc: "Leads delivered to your team by sheet, email or CRM, with a follow-up script." },
      { title: "Reporting", desc: "Lead volume, cost per lead and, where you share outcomes, cost per closed sale." },
    ],
    processHeading: "The lead generation funnel",
    process: [
      { step: "1. Ad", desc: "Targeted creative and copy carrying a specific offer." },
      { step: "2. Form or chat", desc: "Instant form, WhatsApp or landing page — whichever converts best for your product." },
      { step: "3. Capture", desc: "Details collected with qualifying questions to improve lead quality." },
      { step: "4. Follow-up", desc: "Fast contact by your team; speed is the single biggest factor in conversion." },
      { step: "5. Sales process", desc: "Quotation, site visit, demo or booking depending on your business." },
      { step: "6. Reporting", desc: "Cost per lead, lead quality feedback and campaign adjustments." },
    ],
    deliverables: [
      "Lead campaign strategy and offer",
      "Campaign build with lead forms or WhatsApp routing",
      "Qualifying questions to filter leads",
      "Retargeting campaigns",
      "Lead delivery to your team",
      "Cost per lead reporting",
    ],
    notIncluded: [
      "Media spend paid to the platform",
      "Your sales team's follow-up calls, though we advise on scripts and response times",
    ],
    whoFor: [
      "Businesses with a sales team or an owner who can call back the same day",
      "Considered purchases — property, education, finance, medical, vehicles, construction",
      "Companies that know roughly what a customer is worth and can judge a fair cost per lead",
      "Brands wanting WhatsApp conversations rather than website form fills",
    ],
    metrics: [
      { name: "Cost per lead", desc: "Media spend divided by the number of leads captured in the period." },
      { name: "Cost per qualified lead", desc: "The number that matters: cost per lead your team judges worth pursuing." },
      { name: "Lead-to-appointment rate", desc: "How many enquiries turned into a call, visit or demo." },
      { name: "Speed to first contact", desc: "Time between the lead arriving and your team responding." },
      { name: "Form completion rate", desc: "Whether qualifying questions are filtering usefully or driving people away." },
      { name: "Cost per closed sale", desc: "Where you share outcomes, the full commercial picture back to spend." },
    ],
    mistakes: [
      { title: "Slow follow-up", desc: "Interest fades within the hour. We agree a response process before the campaign launches." },
      { title: "No qualifying questions", desc: "Cheap leads that cannot afford your product waste sales time. A couple of filters raise quality sharply." },
      { title: "Hiding the price entirely", desc: "Signalling a price range or eligibility in the ad reduces junk enquiries and improves conversion." },
      { title: "No retargeting for near-misses", desc: "People who opened the form but did not submit are the cheapest second chance available." },
      { title: "No feedback loop", desc: "Without knowing which leads closed, targeting cannot improve. We ask for simple weekly feedback." },
    ],
    industriesNote: "Lead campaigns we run most often:",
    industries: [
      { label: "Real estate leads", to: "/real-estate-marketing-sri-lanka" },
      { label: "Education enrolments", to: "/education-marketing-sri-lanka" },
      { label: "Finance & credit leads", to: "/finance-marketing-sri-lanka" },
      { label: "Hotel bookings", to: "/hotel-marketing-sri-lanka" },
      { label: "General lead generation", to: "/lead-generation-sri-lanka" },
    ],
    faqs: [
      { q: "How much does a lead cost from Facebook or Instagram in Sri Lanka?", a: "It varies widely by industry, offer and how tightly you qualify. A low-commitment enquiry is far cheaper than a qualified appointment for a high-value purchase. We set an expected range after the first test phase rather than promising a number up front." },
      { q: "How do leads reach our team?", a: "By WhatsApp notification, email, a shared sheet, or straight into your CRM where one exists. We confirm the route in testing so no lead sits in a platform inbox nobody checks." },
      { q: "Do you guarantee a number of leads?", a: "No, and we would be cautious of anyone who does without knowing your offer and budget. We set a target based on test data and are accountable for cost per lead against it." },
      { q: "What if the leads are poor quality?", a: "We tighten targeting, sharpen copy about price or eligibility, add or change qualifying questions, and test a different offer. Quality feedback from your sales team is part of the process." },
      { q: "Can leads be collected without a website?", a: "Yes. Instant forms and WhatsApp click-to-chat campaigns capture enquiries entirely within the app, which suits many Sri Lankan businesses well." },
      { q: "Can social media really generate leads, not just likes?", a: "Yes — when the campaign objective is set to leads or messages and the offer is specific. Engagement objectives produce likes; lead objectives produce enquiries." },
      { q: "How fast should we follow up on a lead?", a: "Within minutes where possible, and the same day at the latest. Lead quality is judged on conversion, and conversion drops sharply with delay." },
      { q: "Facebook lead forms or WhatsApp?", a: "WhatsApp usually gets a higher response rate in Sri Lanka because the conversation starts immediately. Forms are better when you need structured data for a sales team to work through." },
      { q: "How is lead quality improved?", a: "Tighter targeting, clearer ad copy about price or eligibility, and qualifying questions in the form. We also feed closed-sale data back into targeting where you can share it." },
    ],
    siblings: [
      { label: "lead generation services", to: "/lead-generation-sri-lanka" },
      { label: "Facebook marketing", to: "/facebook-marketing-sri-lanka" },
      { label: "paid social advertising", to: "/social-media-advertising-sri-lanka" },
      { label: "WhatsApp marketing", to: "/whatsapp-marketing" },
      { label: "social media campaigns", to: "/social-media-campaigns-sri-lanka" },
    ],
    waText: "Hi Buzz Connect, I want to generate leads from social media.",
    serviceType: "Social Media Lead Generation",
  },
  {
    slug: "social-media-content-creation-sri-lanka",
    navLabel: "Social Media Content Creation",
    metaTitle: "Social Media Content Creation Sri Lanka | Design, Reels & Copy",
    metaDescription:
      "Social media content creation in Sri Lanka: post design, carousels, reels, short video and captions built per platform. Buzz Connect produces content that fits your brand.",
    h1: "Social Media Content Creation Sri Lanka",
    keywords:
      "social media content creation sri lanka, social media content agency sri lanka, social media video creation sri lanka, social media reels sri lanka, instagram post design sri lanka",
    answer:
      "Social media content creation is the production side of social: concepts, design, short video and captions made for each platform. Post design is one part of it — content creation also covers planning, video, copy and adapting each asset per placement.",
    intro: [
      "Content is what makes paid budget efficient. The same audience and the same offer can cost twice as much per enquiry simply because the creative does not stop the scroll.",
      "We produce content in a consistent brand style, in the formats each platform actually favours, rather than resizing one design to fit everywhere.",
    ],
    serviceHeading: "What we produce",
    services: [
      { title: "Post and carousel design", desc: "Single posts and multi-slide carousels for Facebook, Instagram and LinkedIn." },
      { title: "Short video and reels", desc: "Vertical edits with captions, hooks and music, built for reels, TikTok and Shorts." },
      { title: "Story frames", desc: "Story sets for offers, announcements, polls and link stickers." },
      { title: "Ad creative", desc: "Creative made specifically to be advertised, with variations for testing." },
      { title: "Captions and copy", desc: "Copy written for your audience, in English, Sinhala or Tamil as required." },
      { title: "Content planning", desc: "Monthly themes and a calendar so production is planned, not last minute." },
      { title: "Brand kit", desc: "Templates, colours and fonts so everything looks like one brand." },
    ],
    processHeading: "How content is produced",
    process: [
      { step: "Brief", desc: "Your offers, campaigns and dates for the month." },
      { step: "Concept", desc: "Themes and formats proposed against your goals." },
      { step: "Design and edit", desc: "Creatives designed, video edited, captions written." },
      { step: "Approve", desc: "You review one batch; revisions are handled before publishing." },
      { step: "Deliver", desc: "Assets published by us, or handed over in the formats you need." },
      { step: "Learn", desc: "Performance data guides next month's formats and topics." },
    ],
    deliverables: [
      "Monthly content plan",
      "Designed posts and carousels",
      "Reels and short video edits",
      "Story frames",
      "Captions and hashtags",
      "Reusable brand templates",
    ],
    whoFor: [
      "Businesses with no in-house designer or video editor",
      "Brands whose current posts look inconsistent from one week to the next",
      "Advertisers who need fresh creative regularly because ads fatigue",
      "Companies with footage and photos sitting unused on a phone",
    ],
    metrics: [
      { name: "Hook rate", desc: "How many viewers stayed past the first three seconds of a video." },
      { name: "Saves and shares", desc: "Whether the content was useful enough to keep or pass on." },
      { name: "Non-follower reach", desc: "How much of the reach came from people who did not already follow you." },
      { name: "Click-through rate on ad creative", desc: "Which creative earns attention when money is behind it." },
      { name: "Creative lifespan", desc: "How long an asset performs before cost per result rises — this sets the refresh cycle." },
      { name: "Top formats", desc: "Which format, reel, carousel or single post, earns the best response for your brand." },
    ],
    mistakes: [
      { title: "One design resized for every platform", desc: "Crops cut off text and faces. We produce per placement in the right aspect ratios." },
      { title: "Burying the message", desc: "The offer or hook should be clear in the first second and the first line. We write for a scrolling reader." },
      { title: "No template system", desc: "Without templates, every month looks like a different brand. We build a reusable kit." },
      { title: "Video without captions", desc: "Most feed video is watched muted. Captions are standard on everything we edit." },
      { title: "Producing only for organic", desc: "Ad creative needs variants for testing. We plan paid versions alongside organic content." },
    ],
    industriesNote: "Content-led industries we produce for:",
    industries: [
      { label: "Restaurants & retail", to: "/restaurant-marketing-sri-lanka" },
      { label: "Hotels & travel", to: "/hotel-marketing-sri-lanka" },
      { label: "Fashion & clothing", to: "/fashion-marketing-sri-lanka" },
      { label: "Events", to: "/event-marketing-sri-lanka" },
      { label: "Education", to: "/education-marketing-sri-lanka" },
    ],
    faqs: [
      { q: "What do you need from us to start?", a: "Your logo files and brand colours if you have them, photos or footage of your product, premises or team, your current offers, and any product details or price points you want featured. We can work from phone footage." },
      { q: "How many revisions are included?", a: "Content is reviewed in batches with a round of revisions before publishing. Substantial re-briefs — a new concept after approval — are quoted separately so the monthly schedule stays on track." },
      { q: "Do we own the content you produce?", a: "Yes. Final assets are yours to use across social, print and your website. We hand over the files in the formats you need." },
      { q: "Can you produce content without publishing it?", a: "Yes. Content creation can be delivered as files for your own team to schedule, or bundled with management if you want us to publish as well." },
      { q: "How quickly can content be delivered?", a: "A standard monthly batch is planned and approved ahead of the month. Urgent single assets for a promotion or announcement can usually be turned around within a couple of working days." },
      { q: "How is this different from social media post design?", a: "Post design is the artwork itself, and we offer it as a standalone service. Content creation is broader: planning, video, copywriting and platform-specific versions as well as the design." },
      { q: "Do you write captions in Sinhala and Tamil?", a: "Yes, we produce captions in English, Sinhala or Tamil depending on the audience you want to reach." },
      { q: "Can you work with our existing brand guidelines?", a: "Yes. If you have a brand kit we follow it; if not, we can build a simple social template set for you." },
      { q: "Do you provide the raw files?", a: "Yes, on request. Content produced for you belongs to you." },
    ],
    siblings: [
      { label: "social media post design", to: "/social-media-post-design-sri-lanka" },
      { label: "social media management", to: "/social-media-management-sri-lanka" },
      { label: "Instagram marketing", to: "/instagram-marketing-sri-lanka" },
      { label: "graphic design services", to: "/graphic-designing-in-sri-lanka" },
      { label: "social media packages", to: "/social-media-packages-sri-lanka" },
    ],
    waText: "Hi Buzz Connect, I need social media content creation for my brand.",
    serviceType: "Social Media Content Creation",
  },
];

export const socialClusterBySlug = (slug: string) =>
  socialClusterPages.find((p) => p.slug === slug);

/** Full hub link list, including existing pages that must not be duplicated. */
export const socialHubLinks: ClusterLink[] = [
  { label: "Facebook Marketing", to: "/facebook-marketing-sri-lanka" },
  { label: "Instagram Marketing", to: "/instagram-marketing-sri-lanka" },
  { label: "TikTok Marketing", to: "/tiktok-marketing-sri-lanka" },
  { label: "LinkedIn Marketing", to: "/linkedin-marketing-sri-lanka" },
  { label: "Social Media Advertising", to: "/social-media-advertising-sri-lanka" },
  { label: "Social Media Management", to: "/social-media-management-sri-lanka" },
  { label: "Social Media Campaigns", to: "/social-media-campaigns-sri-lanka" },
  { label: "Social Media Packages", to: "/social-media-packages-sri-lanka" },
  { label: "Social Media Content Creation", to: "/social-media-content-creation-sri-lanka" },
  { label: "Social Media Lead Generation", to: "/social-media-lead-generation-sri-lanka" },
  { label: "Meta Ads Agency", to: "/meta-ads-agency-sri-lanka" },
  { label: "Social Media Agency", to: "/social-media-agency-sri-lanka" },
];
