// Shared social media package data — consumed by the packages page, the
// campaigns cluster page and any static SEO generation so prices and
// inclusions never drift between pages.

export const SOCIAL_WA = "94771437707";
export const socialWa = (text: string) =>
  `https://wa.me/${SOCIAL_WA}?text=${encodeURIComponent(text)}`;

export interface SocialPackage {
  name: string;
  price: string;
  popular: boolean;
  badge?: string;
  best: string;
  features: string[];
  cta: string;
  waText: string;
}

export const socialCampaignPackages: SocialPackage[] = [
  {
    name: "1 Week",
    price: "LKR 20,000",
    popular: false,
    best: "A quick awareness push — perfect for a launch, offer or event.",
    features: [
      "1 designed post",
      "7-day boost on Facebook & Instagram",
      "Audience targeting",
      "Findit.lk FB page post + listing",
      "Results report",
    ],
    cta: "Start 1 Week",
    waText: "Hi Buzz Connect, I'm interested in the 1 Week social media package (LKR 20,000).",
  },
  {
    name: "2 Weeks",
    price: "LKR 35,000",
    popular: true,
    best: "More reach, more platforms — with remarketing to bring people back.",
    features: [
      "1 post or short video",
      "14-day boost on Facebook, Instagram & TikTok",
      "Targeting + remarketing",
      "Findit.lk FB page post + featured ad",
      "Results report",
    ],
    cta: "Start 2 Weeks",
    waText: "Hi Buzz Connect, I'm interested in the 2 Weeks social media package (LKR 35,000).",
  },
  {
    name: "3 Weeks",
    price: "LKR 75,000",
    popular: false,
    badge: "Includes professional video worth LKR 25,000+",
    best: "A professional video campaign across three platforms, plus direct outreach.",
    features: [
      "1 professional video (script, shoot & edit)",
      "21-day boost on Facebook, Instagram & TikTok",
      "Full remarketing",
      "Findit.lk FB page post + featured ad",
      "WhatsApp/email/SMS to opted-in contacts",
      "Detailed report",
    ],
    cta: "Start 3 Weeks",
    waText: "Hi Buzz Connect, I'm interested in the 3 Weeks social media package (LKR 75,000) with the professional video.",
  },
  {
    name: "4 Weeks",
    price: "LKR 100,000",
    popular: false,
    best: "The full month — maximum reach, lead ads and a strategy call.",
    features: [
      "Hero video + 2 short cuts",
      "30-day boost on Facebook, Instagram, TikTok & YouTube",
      "Full remarketing + lead ads",
      "Findit.lk & StudyWay.lk homepage banner",
      "WhatsApp/email/SMS to opted-in contacts",
      "Report + strategy call",
    ],
    cta: "Start 4 Weeks",
    waText: "Hi Buzz Connect, I'm interested in the 4 Weeks social media package (LKR 100,000).",
  },
];

export interface SocialManagementPlan {
  name: string;
  price: string;
  period: string;
  popular: boolean;
  best: string;
  features: string[];
  cta: string;
  waText: string;
}

export const socialManagementPlans: SocialManagementPlan[] = [
  {
    name: "Starter Management",
    price: "LKR 50,000",
    period: "/ month",
    popular: false,
    best: "For businesses that want a consistent, professional presence without hiring in-house.",
    features: [
      "8 designed posts per month",
      "Content calendar & captions",
      "Page management on Facebook & Instagram",
      "Monthly boosted campaign (ad spend separate)",
      "Findit.lk FB page post",
      "Monthly performance report",
    ],
    cta: "Start Starter",
    waText: "Hi Buzz Connect, I'm interested in the Starter social media management plan (LKR 50,000/month).",
  },
  {
    name: "Growth Management",
    price: "LKR 95,000",
    period: "/ month",
    popular: true,
    best: "For brands ready to grow reach and generate leads every month.",
    features: [
      "12 posts + 2 reels per month",
      "Facebook, Instagram & TikTok management",
      "Ongoing ad campaigns with targeting & remarketing",
      "Findit.lk featured ad each month",
      "WhatsApp lead integration",
      "Bi-weekly reports + optimisation",
    ],
    cta: "Start Growth",
    waText: "Hi Buzz Connect, I'm interested in the Growth social media management plan (LKR 95,000/month).",
  },
  {
    name: "Premium Management",
    price: "LKR 180,000",
    period: "/ month",
    popular: false,
    best: "Full always-on management — content, video, ads and lead generation across all platforms.",
    features: [
      "16 posts + 4 reels/videos per month",
      "FB, IG, TikTok, YouTube & LinkedIn management",
      "Full-funnel ad campaigns + lead ads",
      "Findit.lk & StudyWay.lk visibility",
      "WhatsApp/email/SMS to opted-in contacts",
      "Weekly reports + monthly strategy call",
    ],
    cta: "Start Premium",
    waText: "Hi Buzz Connect, I'm interested in the Premium social media management plan (LKR 180,000/month).",
  },
];

export const EXTRA_WEEK_PRICE = "LKR 10,000";
export const EXTRA_WEEK_WA_TEXT =
  "Hi Buzz Connect, I'd like to add an extra week (LKR 10,000) to my social media package.";
