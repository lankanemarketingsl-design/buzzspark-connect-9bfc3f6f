export const TUITION_PATH = "/tuition-class-marketing-sri-lanka";
export const TUITION_WHATSAPP = "94760317477";
export const TUITION_CAMPAIGN = "tuition_class_marketing";

export const tuitionPackages = [
  { name: "Class Starter", campaigns: 1, price: 15000, previousPrice: null, perCampaign: 15000, badge: "Start with one intake", extras: ["Multi-channel class promotion", "Class flyer designed for you", "StudyWay.lk tutor profile setup", "Campaign performance report"] },
  { name: "Term Booster", campaigns: 3, price: 40500, previousPrice: 45000, perCampaign: 13500, badge: "Keep your classes visible", extras: ["Everything in Class Starter", "One campaign per term or batch", "StudyWay.lk tutor profile setup", "6-month campaign validity"] },
  { name: "Full Batch", campaigns: 6, price: 76500, previousPrice: 90000, perCampaign: 12750, badge: "Most popular", extras: ["Everything in Class Starter", "StudyWay.lk Premium / Verified profile", "Priority 12-hour launch", "Dedicated account manager"] },
  { name: "Institute Dominator", campaigns: 10, price: 112500, previousPrice: 150000, perCampaign: 11250, badge: "Best value", extras: ["Everything in Full Batch", "Featured Premium Tutor placement", "Multiple teachers and subjects", "Free strategy call"] },
] as const;

export const tuitionFaqs = [
  { q: "Who will see my tuition class ad?", a: "We plan your promotion around your subject, grade, class format and location. StudyWay.lk helps students and parents find tutors using district, city, subject and grade filters. Advertising reach depends on available audience options and the campaign plan; directory filters do not guarantee precise city-targeted ad delivery or enrolments." },
  { q: "What is StudyWay.lk and why does it matter for tutors?", a: "StudyWay.lk is a Sri Lankan education platform with a dedicated Tuition section. Students can search tutors by subject, grade, district, city and class type. Your tutor profile gives parents somewhere to check your class details after seeing your campaign, and remains discoverable while the profile is active." },
  { q: "Do I need a StudyWay.lk account already?", a: "No. Buzz Connect creates and optimises your tutor profile with your photo, subjects, grades, locations, teaching medium, experience and class type. Premium, Verified and Featured placement depend on the selected package and StudyWay's profile requirements." },
  { q: "Can I promote online classes island-wide?", a: "Yes. We mark your class as Online or Hybrid and plan promotion beyond your home city. Include the teaching medium, joining process and lesson schedule so students know how to participate." },
  { q: "Can I promote different subjects or batches?", a: "Yes. On multi-campaign packages, each campaign credit can promote a different subject, grade or intake. Institute Dominator also supports multiple teachers and subjects. Term Booster credits have six-month validity." },
  { q: "How fast does my tuition campaign go live?", a: "The class campaign launches within 24 hours of approved artwork and payment. Full Batch includes priority 12-hour campaign launch. Profile publication follows completion of the required tutor details and any platform verification." },
  { q: "Is there a contract?", a: "No. Tutor packages are fixed-price campaign bundles, starting at LKR 15,000 for Class Starter. Choose one campaign or a multi-campaign package without an ongoing contract." },
];

export const tuitionServiceSchema = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Tuition Class Marketing Sri Lanka", serviceType: "Tuition advertising and tutor profile promotion",
  provider: { "@type": "Organization", name: "Buzz Connect", url: "https://buzzspark-connect.lovable.app" },
  areaServed: { "@type": "Country", name: "Sri Lanka" },
  url: `https://buzzspark-connect.lovable.app${TUITION_PATH}`,
  description: "Class-focused Brand Blast 360 tuition promotion planned around location, subject and grade, with StudyWay.lk tutor profile setup for A/L, O/L, scholarship, online and institute classes.",
  offers: tuitionPackages.map(p => ({ "@type": "Offer", name: p.name, price: p.price, priceCurrency: "LKR", url: `https://buzzspark-connect.lovable.app${TUITION_PATH}#packages` })),
};
export const tuitionFaqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: tuitionFaqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export function tuitionWhatsAppHref(message: string, buttonId: string) {
  const params = new URLSearchParams({ text: message, utm_source: "website", utm_medium: "whatsapp_cta", utm_campaign: TUITION_CAMPAIGN, utm_content: buttonId });
  return `https://wa.me/${TUITION_WHATSAPP}?${params}`;
}