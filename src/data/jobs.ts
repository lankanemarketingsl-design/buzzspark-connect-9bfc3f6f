export interface JobSection {
  heading: string;
  intro?: string;
  bullets?: string[];
  paragraphs?: string[];
}

export interface JobRelatedLink {
  label: string;
  to: string;
}

export interface Job {
  slug: string;
  title: string;
  cardBlurb: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  employmentType: "INTERN" | "FULL_TIME";
  employmentLabel: string;
  datePosted: string;
  validThrough: string;
  identifier: string;
  lead: string[];
  sections: JobSection[];
  relatedServices: JobRelatedLink[];
  schemaDescription: string;
}

const COMMON_LOCATION = "Colombo, Sri Lanka";

export const JOB_LOCATION = COMMON_LOCATION;

export const jobs: Job[] = [
  {
    slug: "digital-marketing-intern-sri-lanka",
    title: "Digital Marketing Intern",
    cardBlurb: "Learn digital marketing through hands-on campaign experience.",
    seoTitle: "Digital Marketing Intern in Sri Lanka | BuzzConnect",
    metaDescription:
      "Apply for the Digital Marketing Intern position at BuzzConnect in Sri Lanka. Gain hands-on experience in social media, digital advertising, content marketing and online campaigns.",
    keywords:
      "digital marketing internship Sri Lanka, digital marketing intern Sri Lanka, digital marketing internship Colombo",
    h1: "Digital Marketing Intern in Sri Lanka",
    employmentType: "INTERN",
    employmentLabel: "Internship",
    datePosted: "2026-08-24",
    validThrough: "2027-02-24",
    identifier: "BC-DMI-001",
    lead: [
      "BuzzConnect is looking for a passionate and motivated Digital Marketing Intern in Sri Lanka to join our growing digital marketing team.",
      "This internship is ideal for students, undergraduates, fresh graduates and individuals who want to build practical experience in digital marketing and start a career in the fast-growing digital industry.",
      "At BuzzConnect, you will get the opportunity to work on real marketing campaigns, social media projects, content, digital advertising and online marketing activities for businesses across different industries.",
    ],
    sections: [
      {
        heading: "What You Will Learn",
        intro: "As a Digital Marketing Intern, you will gain practical exposure to:",
        bullets: [
          "Social media marketing",
          "Facebook and Instagram marketing",
          "Digital advertising",
          "Content marketing",
          "Search engine optimization (SEO)",
          "Google Ads",
          "Social media content planning",
          "Campaign research and analysis",
          "Lead generation",
          "Email marketing",
          "WhatsApp marketing",
          "Online advertising",
          "Basic marketing analytics",
          "Competitor research",
          "Digital marketing strategy",
        ],
      },
      {
        heading: "Key Responsibilities",
        bullets: [
          "Assist the digital marketing team with daily marketing activities.",
          "Support social media campaign planning and execution.",
          "Research content ideas and trending topics.",
          "Assist with Facebook, Instagram and other social media campaigns.",
          "Support SEO and content marketing activities.",
          "Help prepare campaign reports and performance updates.",
          "Conduct competitor and market research.",
          "Assist in creating marketing content and campaign concepts.",
          "Support client campaign activities.",
          "Learn and apply digital marketing tools and techniques.",
        ],
      },
      {
        heading: "Who Can Apply?",
        intro: "We welcome applications from:",
        bullets: [
          "University students",
          "Undergraduates",
          "Recent graduates",
          "Students looking for digital marketing internships",
          "School leavers interested in marketing",
          "Beginners looking to start a career in digital marketing",
        ],
        paragraphs: ["Previous work experience is not essential."],
      },
      {
        heading: "Skills We Look For",
        bullets: [
          "Good communication skills",
          "Creativity and willingness to learn",
          "Interest in digital marketing",
          "Basic understanding of social media",
          "Ability to work as part of a team",
          "Positive attitude",
          "Good time management",
          "Willingness to learn new digital tools",
        ],
      },
      {
        heading: "Why Join BuzzConnect?",
        paragraphs: [
          "You will get hands-on exposure to real digital marketing campaigns rather than only theoretical training.",
          "You can work with a team involved in email marketing, SMS marketing, WhatsApp marketing, social media marketing, SEO, online advertising and lead generation.",
        ],
      },
      {
        heading: "Career Growth",
        paragraphs: [
          "High-performing interns may have the opportunity to progress into a full-time position at BuzzConnect.",
        ],
      },
    ],
    relatedServices: [
      { label: "Social Media Marketing", to: "/social-media-marketing-sri-lanka" },
      { label: "SEO Services", to: "/seo-sri-lanka" },
      { label: "Email Marketing", to: "/email-marketing" },
    ],
    schemaDescription: "",
  },
  {
    slug: "marketing-intern-sri-lanka",
    title: "Marketing Intern",
    cardBlurb: "Start your marketing career with practical experience.",
    seoTitle: "Marketing Intern in Sri Lanka | Marketing Internship | BuzzConnect",
    metaDescription:
      "Looking for a marketing internship in Sri Lanka? Join BuzzConnect as a Marketing Intern and gain practical experience in digital marketing, campaigns, social media and business growth.",
    keywords:
      "marketing internship Sri Lanka, marketing intern Sri Lanka, marketing internship Colombo",
    h1: "Marketing Intern in Sri Lanka",
    employmentType: "INTERN",
    employmentLabel: "Internship",
    datePosted: "2026-08-24",
    validThrough: "2027-02-24",
    identifier: "BC-MI-002",
    lead: [
      "BuzzConnect is looking for a creative, energetic and motivated Marketing Intern in Sri Lanka to join our team.",
      "This opportunity is suitable for students, fresh graduates and aspiring marketers who want to gain practical experience in marketing, digital campaigns, social media and business growth.",
    ],
    sections: [
      {
        heading: "About the Role",
        paragraphs: [
          "As a Marketing Intern, you will work closely with the marketing team and support campaigns designed to help businesses reach customers and generate leads.",
          "You will gain exposure to both traditional marketing concepts and modern digital marketing channels.",
        ],
      },
      {
        heading: "Key Responsibilities",
        bullets: [
          "Assist with marketing campaign planning.",
          "Research markets, competitors and customers.",
          "Assist with social media marketing.",
          "Research content and campaign ideas.",
          "Support promotional campaigns.",
          "Assist with client marketing activities.",
          "Help prepare marketing presentations and reports.",
          "Assist with lead-generation campaigns.",
          "Support email and WhatsApp marketing campaigns.",
          "Assist with online advertising activities.",
          "Track basic campaign performance.",
          "Participate in brainstorming and marketing strategy sessions.",
        ],
      },
      {
        heading: "What You Will Learn",
        intro: "During the internship, you will gain experience in:",
        bullets: [
          "Digital marketing",
          "Social media marketing",
          "Content marketing",
          "Email marketing",
          "WhatsApp marketing",
          "SMS marketing",
          "Online advertising",
          "Lead generation",
          "Marketing strategy",
          "Market research",
          "Customer acquisition",
          "Campaign reporting",
        ],
      },
      {
        heading: "Who Should Apply?",
        intro: "This marketing internship is suitable for:",
        bullets: [
          "Marketing students",
          "Business students",
          "University undergraduates",
          "Fresh graduates",
          "Students interested in digital marketing",
          "Individuals starting their marketing careers",
        ],
      },
      {
        heading: "Requirements",
        bullets: [
          "Strong interest in marketing",
          "Good communication skills",
          "Creative thinking",
          "Willingness to learn",
          "Basic knowledge of social media",
          "Good organizational skills",
          "Ability to work independently and with a team",
        ],
        paragraphs: ["Previous marketing experience is not required."],
      },
      {
        heading: "Career Opportunity",
        paragraphs: [
          "High-performing interns may be considered for future full-time opportunities at BuzzConnect.",
        ],
      },
    ],
    relatedServices: [
      { label: "Email Marketing", to: "/email-marketing" },
      { label: "WhatsApp Marketing", to: "/whatsapp-marketing" },
      { label: "Lead Generation", to: "/lead-generation-sri-lanka" },
    ],
    schemaDescription: "",
  },
  {
    slug: "digital-marketing-specialist-sri-lanka",
    title: "Digital Marketing Specialist",
    cardBlurb: "Join our team and manage real digital marketing campaigns.",
    seoTitle: "Digital Marketing Specialist in Sri Lanka | BuzzConnect Careers",
    metaDescription:
      "Join BuzzConnect as a Digital Marketing Specialist in Sri Lanka. Work on social media marketing, Google Ads, Meta Ads, SEO, lead generation and digital campaigns.",
    keywords:
      "digital marketing specialist Sri Lanka, digital marketing jobs Sri Lanka, digital marketing specialist jobs Colombo",
    h1: "Digital Marketing Specialist in Sri Lanka",
    employmentType: "FULL_TIME",
    employmentLabel: "Full-time",
    datePosted: "2026-08-24",
    validThrough: "2027-02-24",
    identifier: "BC-DMS-003",
    lead: [
      "BuzzConnect is looking for a results-driven Digital Marketing Specialist in Sri Lanka to join our growing marketing team.",
      "The ideal candidate will have a strong understanding of digital marketing and be comfortable working across social media, paid advertising, SEO, content, lead generation and campaign performance.",
    ],
    sections: [
      {
        heading: "Key Responsibilities",
        bullets: [
          "Plan and execute digital marketing campaigns.",
          "Manage social media marketing activities.",
          "Develop and optimize Facebook and Instagram advertising campaigns.",
          "Assist with Google Ads campaigns.",
          "Monitor campaign performance and KPIs.",
          "Conduct keyword and competitor research.",
          "Support SEO campaigns and content strategies.",
          "Develop lead-generation campaigns.",
          "Analyze website and campaign performance.",
          "Prepare campaign reports.",
          "Identify opportunities to improve conversion rates.",
          "Research new digital marketing trends and platforms.",
          "Work with designers and content creators to develop campaign assets.",
          "Assist with client strategy and campaign planning.",
        ],
      },
      {
        heading: "Required Skills",
        bullets: [
          "Strong understanding of digital marketing",
          "Knowledge of Meta Ads",
          "Knowledge of Google Ads",
          "Understanding of SEO",
          "Social media marketing experience",
          "Analytical and problem-solving skills",
          "Good communication skills",
          "Ability to manage multiple campaigns",
          "Strong attention to detail",
          "Ability to work with deadlines",
        ],
      },
      {
        heading: "Advantageous Skills",
        intro: "Experience with any of the following will be an advantage:",
        bullets: [
          "Google Analytics",
          "Google Search Console",
          "Meta Business Suite",
          "Google Ads",
          "SEO tools",
          "Canva",
          "WordPress",
          "Email marketing",
          "WhatsApp marketing",
          "Lead-generation platforms",
          "Marketing automation",
        ],
      },
      {
        heading: "What You'll Work On",
        intro: "You will have exposure to campaigns across multiple industries, including:",
        bullets: [
          "Education",
          "Hospitality",
          "Finance",
          "Real estate",
          "Retail",
          "Fashion",
          "Restaurants",
          "Corporate businesses",
        ],
      },
      {
        heading: "Why Join BuzzConnect?",
        paragraphs: [
          "BuzzConnect operates across multiple digital marketing channels, including email marketing, SMS marketing, WhatsApp marketing, social media marketing, SEO, Google Ads and online advertising.",
          "This gives the successful candidate the opportunity to work across multiple areas of digital marketing rather than focusing on only one channel.",
        ],
      },
    ],
    relatedServices: [
      { label: "SEO Services", to: "/seo-sri-lanka" },
      { label: "Google Ads", to: "/google-ads-sri-lanka" },
      { label: "Social Media Marketing", to: "/social-media-marketing-sri-lanka" },
    ],
    schemaDescription: "",
  },
  {
    slug: "video-editor-sri-lanka",
    title: "Video Editor",
    cardBlurb: "Create Reels, TikToks, Shorts and digital advertising content.",
    seoTitle: "Video Editor Job in Sri Lanka | Video Editing Jobs | BuzzConnect",
    metaDescription:
      "Apply for the Video Editor job at BuzzConnect in Sri Lanka. Create engaging social media videos, Reels, TikToks and digital marketing content for brands.",
    keywords:
      "video editor jobs Sri Lanka, video editor job Colombo, video editing jobs Sri Lanka",
    h1: "Video Editor Job in Sri Lanka",
    employmentType: "FULL_TIME",
    employmentLabel: "Full-time",
    datePosted: "2026-08-24",
    validThrough: "2027-02-24",
    identifier: "BC-VE-004",
    lead: [
      "BuzzConnect is looking for a creative and detail-oriented Video Editor in Sri Lanka to join our digital marketing and creative team.",
      "The role is focused on producing short-form video content for social media, digital advertising and brand campaigns.",
      "We are looking for someone who understands how to create videos that capture attention quickly and work effectively on platforms such as Instagram, Facebook, TikTok and YouTube Shorts.",
    ],
    sections: [
      {
        heading: "Key Responsibilities",
        bullets: [
          "Edit short-form videos for social media.",
          "Create Instagram Reels and TikTok videos.",
          "Edit videos for Facebook and YouTube Shorts.",
          "Create video advertisements for digital campaigns.",
          "Add captions, subtitles, transitions and graphics.",
          "Select suitable music and audio.",
          "Create engaging video hooks.",
          "Repurpose existing footage into multiple formats.",
          "Work with content creators and marketing specialists.",
          "Follow brand guidelines.",
          "Deliver videos according to campaign deadlines.",
          "Keep up with current video and social media trends.",
        ],
      },
      {
        heading: "What We're Looking For",
        bullets: [
          "Good video editing skills",
          "Strong understanding of short-form video",
          "Creative mindset",
          "Good sense of timing and storytelling",
          "Understanding of social media trends",
          "Ability to create attention-grabbing content",
          "Good communication skills",
          "Ability to work under deadlines",
        ],
      },
      {
        heading: "Software",
        intro: "Experience with any of these is an advantage:",
        bullets: [
          "Adobe Premiere Pro",
          "After Effects",
          "CapCut",
          "DaVinci Resolve",
          "Adobe Photoshop",
          "Adobe Illustrator",
        ],
      },
      {
        heading: "Bonus Skills",
        intro: "Experience creating:",
        bullets: [
          "TikTok videos",
          "Instagram Reels",
          "YouTube Shorts",
          "Facebook video ads",
          "Product videos",
          "Talking-head videos",
          "Promotional videos",
          "Social media advertisements",
        ],
        paragraphs: ["will be an advantage."],
      },
      {
        heading: "Portfolio",
        paragraphs: [
          "Applicants are encouraged to submit a portfolio or examples of previous video editing work.",
        ],
      },
    ],
    relatedServices: [
      { label: "Social Media Marketing", to: "/social-media-marketing-sri-lanka" },
      { label: "Online Advertising", to: "/online-advertising-sri-lanka" },
    ],
    schemaDescription: "",
  },
  {
    slug: "content-creator-sri-lanka",
    title: "Content Creator",
    cardBlurb: "Create mobile-first social media content for brands.",
    seoTitle: "Content Creator Job in Sri Lanka | Social Media Content Creator | BuzzConnect",
    metaDescription:
      "Join BuzzConnect as a Content Creator in Sri Lanka. Create engaging social media videos, Reels, TikToks and marketing content for leading brands.",
    keywords:
      "content creator jobs Sri Lanka, social media content creator Sri Lanka, content creator job Colombo",
    h1: "Content Creator Job in Sri Lanka",
    employmentType: "FULL_TIME",
    employmentLabel: "Full-time",
    datePosted: "2026-08-24",
    validThrough: "2027-02-24",
    identifier: "BC-CC-005",
    lead: [
      "BuzzConnect is looking for a creative and energetic Content Creator in Sri Lanka who can turn ideas into engaging social media content.",
      "This role is ideal for someone who enjoys creating videos, appearing on camera, discovering trends and producing content that people want to watch and share.",
    ],
    sections: [
      {
        heading: "Key Responsibilities",
        bullets: [
          "Create short-form social media videos.",
          "Develop creative content ideas for brands.",
          "Shoot mobile-first videos for social media.",
          "Create Instagram Reels and TikTok content.",
          "Produce Facebook and YouTube Shorts.",
          "Research current social media trends.",
          "Develop strong video hooks.",
          "Write simple video concepts and scripts.",
          "Record promotional and educational videos.",
          "Work with the digital marketing and creative teams.",
          "Participate in content planning.",
          "Create multiple content variations for campaigns.",
          "Help develop social media content calendars.",
        ],
      },
      {
        heading: "Important",
        paragraphs: [
          "This role is primarily focused on mobile-first content creation.",
          "You do not need to be a professional camera operator.",
          "The ability to confidently use a smartphone to capture natural, engaging and high-quality videos is more important.",
        ],
      },
      {
        heading: "Who We're Looking For",
        intro: "We are looking for someone who is:",
        bullets: [
          "Creative",
          "Energetic",
          "Comfortable in front of a camera",
          "Interested in TikTok and Instagram",
          "Aware of social media trends",
          "Good at communicating ideas",
          "Comfortable recording videos using a mobile phone",
          "Willing to experiment with new content formats",
        ],
      },
      {
        heading: "Advantageous Skills",
        intro: "Experience with:",
        bullets: [
          "TikTok",
          "Instagram Reels",
          "Facebook",
          "YouTube Shorts",
          "CapCut",
          "Canva",
          "Basic video editing",
          "Script writing",
          "Social media content planning",
        ],
        paragraphs: ["will be an advantage."],
      },
      {
        heading: "What You'll Create",
        intro: "You may work on:",
        bullets: [
          "Brand promotional videos",
          "Educational videos",
          "Product videos",
          "Service videos",
          "Customer-focused content",
          "Trend-based videos",
          "Behind-the-scenes content",
          "Short-form advertisements",
          "Talking-head videos",
          "Social media campaigns",
        ],
      },
      {
        heading: "Portfolio",
        paragraphs: [
          "Previous content creation experience is an advantage. Applicants can submit examples of social media videos or content they have created.",
        ],
      },
    ],
    relatedServices: [
      { label: "Social Media Marketing", to: "/social-media-marketing-sri-lanka" },
      { label: "TikTok Marketing", to: "/tiktok-marketing-sri-lanka" },
    ],
    schemaDescription: "",
  },
];

export const getJob = (slug?: string) => jobs.find((j) => j.slug === slug);

/** Build a plain-text/HTML description for JobPosting schema from page content. */
export const buildJobSchemaDescription = (job: Job) => {
  const parts: string[] = [];
  parts.push(`<p>${job.lead.join(" ")}</p>`);
  job.sections.forEach((s) => {
    parts.push(`<h3>${s.heading}</h3>`);
    if (s.intro) parts.push(`<p>${s.intro}</p>`);
    if (s.bullets?.length)
      parts.push(`<ul>${s.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>`);
    s.paragraphs?.forEach((p) => parts.push(`<p>${p}</p>`));
  });
  parts.push(`<p>Location: ${COMMON_LOCATION}. Employment type: ${job.employmentLabel}.</p>`);
  return parts.join("");
};
