export interface BB360ServicePage {
  slug: string;
  industry: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  reach: string;
  audience: string;
  priceFrom: string;
  sections: { h2: string; body: string }[];
  industryPage: string | null;
  industryAnchor?: string;
}

const SERVICE_PAGES = {
  "Email Marketing": "/email-marketing",
  "SMS Marketing": "/sms-marketing",
  "WhatsApp Marketing": "/whatsapp-marketing",
  "Lead Generation": "/lead-generation-sri-lanka",
} as const;

export const bb360ServiceLinks = SERVICE_PAGES;

export const bb360ServicePages: BB360ServicePage[] = [
  {
    slug: "hotels",
    industry: "Hotels",
    metaTitle: "Email, SMS & WhatsApp Marketing for Hotels Sri Lanka",
    metaDescription:
      "Email, SMS, WhatsApp marketing & lead generation for hotels in Sri Lanka. Reach 988,000+ travellers in one campaign from LKR 15,000. Live in 24 hours.",
    h1: "Email, SMS & WhatsApp Marketing for Hotels in Sri Lanka",
    reach: "988,000+",
    audience: "travellers",
    priceFrom: "LKR 15,000",
    industryPage: "/hotel-marketing-sri-lanka",
    industryAnchor: "hotel marketing services",
    sections: [
      {
        h2: "Email Marketing for Hotels in Sri Lanka",
        body: "A designed e-flyer with your room rates, packages and booking link lands directly in 750,000 local inboxes. Hotels use it for weekend getaways, festive season stays, high tea and day-outing offers. Because the database is local, you fill rooms with Sri Lankan travellers even in the off season.",
      },
      {
        h2: "SMS Marketing for Hotels in Sri Lanka",
        body: "SMS is read within minutes, which makes it perfect for last-minute room inventory and flash rates. Send a short message with your offer and a call number the same day you decide to discount. It works well as a reminder layer a day or two after the email blast.",
      },
      {
        h2: "WhatsApp Marketing for Hotels in Sri Lanka",
        body: "WhatsApp lets you send the visual — room photos, buffet menu, package card — and take the booking in the same chat. Guests reply with dates, your reservations team answers instantly. Enquiries from a WhatsApp campaign convert faster than any form-based channel.",
      },
      {
        h2: "Lead Generation for Hotels in Sri Lanka",
        body: "Beyond rooms, hotels need corporate, wedding and event enquiries. Findit.lk listings and LinkedIn exposure put your venue in front of companies and planners actively searching. Every enquiry reaches your team on WhatsApp so no lead sits in an inbox.",
      },
    ],
  },
  {
    slug: "restaurants",
    industry: "Restaurants",
    metaTitle: "Email, SMS & WhatsApp Marketing for Restaurants SL",
    metaDescription:
      "Email, SMS, WhatsApp marketing & lead generation for restaurants in Sri Lanka. Reach 750,000+ diners in one campaign from LKR 15,000. Live in 24 hours.",
    h1: "Email, SMS & WhatsApp Marketing for Restaurants in Sri Lanka",
    reach: "750,000+",
    audience: "diners",
    priceFrom: "LKR 15,000",
    industryPage: "/restaurant-marketing-sri-lanka",
    industryAnchor: "restaurant marketing services",
    sections: [
      {
        h2: "Email Marketing for Restaurants in Sri Lanka",
        body: "One designed e-flyer carries your new menu, buffet price and delivery number to hundreds of thousands of local diners. Restaurants use it for new branch openings, seasonal buffets and weekday lunch deals. Send it midweek and the weekend covers move.",
      },
      {
        h2: "SMS Marketing for Restaurants in Sri Lanka",
        body: "A one-line SMS with today's offer reaches diners while they are deciding where to eat. It is the cheapest way to push a slow lunch service or a same-day promotion. Pair it with your hotline so orders come straight to the branch.",
      },
      {
        h2: "WhatsApp Marketing for Restaurants in Sri Lanka",
        body: "Send the menu card on WhatsApp and take reservations and delivery orders in the same conversation. Customers ask about prices, portions and timings and get answers in seconds. It is ideal for party packages and bulk catering enquiries.",
      },
      {
        h2: "Lead Generation for Restaurants in Sri Lanka",
        body: "Featured Findit.lk placement captures people already searching for restaurants and offers near them. Facebook remarketing keeps your brand in front of everyone who viewed the campaign. All enquiries arrive on WhatsApp ready to book.",
      },
    ],
  },
  {
    slug: "real-estate",
    industry: "Real Estate",
    metaTitle: "Email, SMS & WhatsApp Marketing for Real Estate SL",
    metaDescription:
      "Email, SMS, WhatsApp marketing & lead generation for real estate in Sri Lanka. Reach 750,000+ buyers & investors from LKR 15,000. Live in 24 hours.",
    h1: "Email, SMS & WhatsApp Marketing for Real Estate in Sri Lanka",
    reach: "750,000+",
    audience: "buyers & investors",
    priceFrom: "LKR 15,000",
    industryPage: "/real-estate-marketing-sri-lanka",
    industryAnchor: "real estate marketing services",
    sections: [
      {
        h2: "Email Marketing for Real Estate in Sri Lanka",
        body: "Property buying starts with a serious, considered audience — exactly who reads email. A designed e-flyer with floor plans, price points and payment plans reaches 750,000 local professionals and investors. Developers use it for launch phases, remaining units and land sales.",
      },
      {
        h2: "SMS Marketing for Real Estate in Sri Lanka",
        body: "SMS drives site visits: a short message with the location, price from and a call number gets read immediately. Use it to announce an open-house weekend or a limited pre-launch price. It costs a fraction of a print advert and reaches far more people.",
      },
      {
        h2: "WhatsApp Marketing for Real Estate in Sri Lanka",
        body: "Buyers want photos, plans and a walkthrough video before they visit — WhatsApp delivers all three. Your sales team answers financing questions and books site visits in the same thread. Serious enquiries are identified within minutes.",
      },
      {
        h2: "Lead Generation for Real Estate in Sri Lanka",
        body: "Findit.lk listings and Facebook remarketing keep your project visible through the long decision cycle buyers take. LinkedIn exposure adds investors and corporate buyers. Every lead lands on WhatsApp with the property they enquired about.",
      },
    ],
  },
  {
    slug: "education",
    industry: "Education",
    metaTitle: "Email, SMS & WhatsApp Marketing for Education SL",
    metaDescription:
      "Email, SMS, WhatsApp marketing & lead generation for education in Sri Lanka. Reach 750,000 parents & students for intakes from LKR 15,000. Live in 24 hours.",
    h1: "Email, SMS & WhatsApp Marketing for Education in Sri Lanka",
    reach: "750,000+",
    audience: "parents & students",
    priceFrom: "LKR 15,000",
    industryPage: "/education-marketing-sri-lanka",
    industryAnchor: "education marketing services",
    sections: [
      {
        h2: "Email Marketing for Education in Sri Lanka",
        body: "Intakes are won or lost in a three-week window, and email covers that window at scale. Your course list, fees, intake date and registration link reach 750,000 parents and working professionals. Institutes run it for degree, diploma and professional course intakes.",
      },
      {
        h2: "SMS Marketing for Education in Sri Lanka",
        body: "SMS is the reminder that closes registrations — deadline dates, orientation days and open-day invitations. It reaches students who never open email but always read messages. Two sends, one at announcement and one before the deadline, lifts enrolments noticeably.",
      },
      {
        h2: "WhatsApp Marketing for Education in Sri Lanka",
        body: "Parents ask about fees, payment plans and class times before they commit; WhatsApp lets counsellors answer immediately. Share the prospectus, fee structure and application form in one chat. It shortens the gap between interest and registration.",
      },
      {
        h2: "Lead Generation for Education in Sri Lanka",
        body: "Findit.lk and Facebook remarketing capture students actively comparing courses. LinkedIn reaches working professionals looking for part-time and postgraduate study. Enquiries route to your counselling team on WhatsApp during the intake period.",
      },
    ],
  },
  {
    slug: "banking",
    industry: "Finance & Banking",
    metaTitle: "Email, SMS & WhatsApp Marketing for Finance SL",
    metaDescription:
      "Email, SMS, WhatsApp marketing & lead generation for finance & banking in Sri Lanka. Reach 750,000 professionals from LKR 15,000. Live in 24 hours.",
    h1: "Email, SMS & WhatsApp Marketing for Finance & Banking in Sri Lanka",
    reach: "750,000+",
    audience: "professionals",
    priceFrom: "LKR 15,000",
    industryPage: "/finance-marketing-sri-lanka",
    industryAnchor: "finance marketing services",
    sections: [
      {
        h2: "Email Marketing for Finance & Banking in Sri Lanka",
        body: "Financial products need detail — rates, tenures, eligibility — and email is the only channel that carries all of it properly. Reach 750,000 employed professionals with leasing, personal loan, fixed deposit and insurance offers. It is a permission-based, professional environment for a considered decision.",
      },
      {
        h2: "SMS Marketing for Finance & Banking in Sri Lanka",
        body: "SMS suits single-message offers: a new rate, a limited-period waiver, a promotional leasing rate. Delivery and read rates are the highest of any channel in Sri Lanka. Branches use it to drive walk-ins and hotline calls the same day.",
      },
      {
        h2: "WhatsApp Marketing for Finance & Banking in Sri Lanka",
        body: "Customers want to know their instalment before they apply — WhatsApp lets your officers work it out in the chat. Share rate cards, document checklists and application links instantly. It removes the friction that kills online loan applications.",
      },
      {
        h2: "Lead Generation for Finance & Banking in Sri Lanka",
        body: "LinkedIn exposure and Facebook remarketing put your products in front of salaried professionals and business owners. Findit.lk captures people comparing offers right now. Qualified enquiries reach your team on WhatsApp with the product named.",
      },
    ],
  },
  {
    slug: "fashion",
    industry: "Fashion",
    metaTitle: "Email, SMS & WhatsApp Marketing for Fashion Brands SL",
    metaDescription:
      "Email, SMS, WhatsApp marketing & lead generation for fashion brands in Sri Lanka. Reach 750,000 shoppers from LKR 15,000. Live in 24 hours.",
    h1: "Email, SMS & WhatsApp Marketing for Fashion in Sri Lanka",
    reach: "750,000+",
    audience: "shoppers",
    priceFrom: "LKR 15,000",
    industryPage: "/fashion-marketing-sri-lanka",
    industryAnchor: "fashion marketing services",
    sections: [
      {
        h2: "Email Marketing for Fashion in Sri Lanka",
        body: "Fashion sells on visuals, and a designed e-flyer shows the collection full width in the inbox. Brands use it for sale announcements, new arrivals and festive season collections across 750,000 local shoppers. Add your store list and online link so both channels benefit.",
      },
      {
        h2: "SMS Marketing for Fashion in Sri Lanka",
        body: "Sales are time-bound, and SMS is the fastest way to say the sale starts today. One line with the discount and store locations drives footfall the same afternoon. It is the natural closing push on the final days of a promotion.",
      },
      {
        h2: "WhatsApp Marketing for Fashion in Sri Lanka",
        body: "Send the lookbook on WhatsApp and let customers ask about sizes, colours and stock instantly. Order confirmation and delivery details stay in one thread. It is especially strong for boutique and online-first fashion brands.",
      },
      {
        h2: "Lead Generation for Fashion in Sri Lanka",
        body: "Findit.lk featured placement catches shoppers hunting for offers, and Facebook remarketing follows everyone who saw the campaign. The combination keeps your sale visible for its full duration. Enquiries come to WhatsApp ready to order.",
      },
    ],
  },
  {
    slug: "events",
    industry: "Events",
    metaTitle: "Email, SMS & WhatsApp Marketing for Events Sri Lanka",
    metaDescription:
      "Email, SMS, WhatsApp marketing & lead generation for events in Sri Lanka. Sell out shows with 988,000+ reach from LKR 15,000. Live in 24 hours.",
    h1: "Email, SMS & WhatsApp Marketing for Events in Sri Lanka",
    reach: "988,000+",
    audience: "attendees",
    priceFrom: "LKR 15,000",
    industryPage: "/event-marketing-sri-lanka",
    industryAnchor: "event marketing services",
    sections: [
      {
        h2: "Email Marketing for Events in Sri Lanka",
        body: "Ticket sales need mass awareness fast, and one email blast reaches 750,000 local inboxes the day you launch. Include the date, venue, ticket tiers and the booking link in a designed flyer. Organisers use it for concerts, exhibitions, conferences and workshops.",
      },
      {
        h2: "SMS Marketing for Events in Sri Lanka",
        body: "SMS is the countdown channel: two days to go, tickets closing, gates open at 6pm. It is read almost immediately, which is exactly what a fixed-date event needs. Use it for the final sales push in the last 48 hours.",
      },
      {
        h2: "WhatsApp Marketing for Events in Sri Lanka",
        body: "Attendees ask about ticket prices, parking and timings — WhatsApp answers them instantly and takes group bookings. Share the artwork, seat plan and payment details in one chat. Group and corporate bookings often come from a single conversation.",
      },
      {
        h2: "Lead Generation for Events in Sri Lanka",
        body: "Findit.lk listings and Facebook remarketing keep the event in front of people who showed interest but did not buy. LinkedIn works for conferences and B2B exhibitions, including sponsor and exhibitor leads. Everything routes to WhatsApp for fast follow-up.",
      },
    ],
  },
  {
    slug: "recruitment",
    industry: "Staff Recruitment",
    metaTitle: "Email, SMS & WhatsApp Marketing for Recruitment SL",
    metaDescription:
      "Email, SMS, WhatsApp marketing & lead generation for staff recruitment in Sri Lanka. Reach 750,000+ professionals from LKR 15,000. Applicants in 24–48h.",
    h1: "Email, SMS & WhatsApp Marketing for Staff Recruitment in Sri Lanka",
    reach: "750,000+",
    audience: "professionals",
    priceFrom: "LKR 15,000",
    industryPage: "/staff-recruitment-campaigns-sri-lanka",
    industryAnchor: "staff recruitment campaigns",
    sections: [
      {
        h2: "Email Marketing for Staff Recruitment in Sri Lanka",
        body: "Your vacancy flyer reaches 750,000 working professionals — including passive candidates who never browse job boards. Ideal for bulk hiring, branch openings and hard-to-fill technical roles. Applications come in from the first day of the campaign.",
      },
      {
        h2: "SMS Marketing for Staff Recruitment in Sri Lanka",
        body: "SMS reaches operational and field staff fastest — drivers, cashiers, technicians, sales teams. A single message with the role, location and WhatsApp number produces applicants within hours. It is the strongest channel for walk-in interview days.",
      },
      {
        h2: "WhatsApp Marketing for Staff Recruitment in Sri Lanka",
        body: "Candidates apply by sending their CV on WhatsApp, so you skip forms and portals entirely. Your HR team screens and schedules interviews in the same chat. Most clients see applications inside 24 to 48 hours.",
      },
      {
        h2: "Lead Generation for Staff Recruitment in Sri Lanka",
        body: "Job listings on YouJobs.lk and Findit.lk Jobs stay searchable long after the blast, and LinkedIn adds professional and managerial reach. Facebook remarketing re-engages candidates who read but did not apply. Every applicant lands with your HR team on WhatsApp.",
      },
    ],
  },
  {
    slug: "healthcare",
    industry: "Healthcare",
    metaTitle: "Email, SMS & WhatsApp Marketing for Healthcare SL",
    metaDescription:
      "Email, SMS, WhatsApp marketing & lead generation for healthcare in Sri Lanka. Reach 988,000+ patients from LKR 15,000. Fill your book, live in 24 hours.",
    h1: "Email, SMS & WhatsApp Marketing for Healthcare in Sri Lanka",
    reach: "988,000+",
    audience: "patients",
    priceFrom: "LKR 15,000",
    industryPage: null,
    sections: [
      {
        h2: "Email Marketing for Healthcare in Sri Lanka",
        body: "Health packages, channelling services and screening camps need clear explanation — email gives you the space. Reach 750,000 local inboxes with your package list, prices and appointment number. Hospitals, labs, dental and eye care clinics use it for seasonal and annual check-up drives.",
      },
      {
        h2: "SMS Marketing for Healthcare in Sri Lanka",
        body: "SMS drives same-week appointments for camps, vaccination drives and limited-period packages. Short, respectful messaging with a hotline number works best. It is also the most reliable channel for reaching older patients.",
      },
      {
        h2: "WhatsApp Marketing for Healthcare in Sri Lanka",
        body: "Patients ask what a package includes and whether fasting is needed before they book — WhatsApp answers privately and instantly. Your front desk can confirm appointment slots in the same chat. It reduces no-shows and phone queue pressure.",
      },
      {
        h2: "Lead Generation for Healthcare in Sri Lanka",
        body: "Findit.lk featured listings capture people searching for clinics and health packages nearby. Facebook remarketing keeps your services visible while patients decide. Appointment enquiries reach your team on WhatsApp with the service named.",
      },
    ],
  },
  {
    slug: "automotive",
    industry: "Automotive",
    metaTitle: "Email, SMS & WhatsApp Marketing for Automotive SL",
    metaDescription:
      "Email, SMS, WhatsApp marketing & lead generation for automotive in Sri Lanka. Reach 988,000+ buyers from LKR 15,000. More test drives, live in 24 hours.",
    h1: "Email, SMS & WhatsApp Marketing for Automotive in Sri Lanka",
    reach: "988,000+",
    audience: "buyers",
    priceFrom: "LKR 15,000",
    industryPage: null,
    sections: [
      {
        h2: "Email Marketing for Automotive in Sri Lanka",
        body: "Vehicle buyers compare models, prices and leasing terms before they visit — email carries all of it in one designed flyer. Reach 750,000 employed professionals with new arrivals, permit offers and leasing partnerships. Works for vehicle sales, spare parts and service promotions alike.",
      },
      {
        h2: "SMS Marketing for Automotive in Sri Lanka",
        body: "SMS fills showrooms for weekend sales events and limited stock arrivals. One line with the model, price from and location gets read within minutes. Service centres also use it for periodic service reminders and seasonal offers.",
      },
      {
        h2: "WhatsApp Marketing for Automotive in Sri Lanka",
        body: "Buyers want photos, mileage, year and monthly instalment before they travel to the yard. WhatsApp gives them all of it and books the test drive in the same chat. Sales teams close far more enquiries this way than by phone alone.",
      },
      {
        h2: "Lead Generation for Automotive in Sri Lanka",
        body: "Findit.lk listings put your stock in front of active vehicle searchers, and Facebook remarketing follows the long buying cycle. LinkedIn adds corporate and fleet enquiries. Every lead lands on WhatsApp with the model they asked about.",
      },
    ],
  },
  {
    slug: "construction",
    industry: "Construction",
    metaTitle: "Email, SMS & WhatsApp Marketing for Construction SL",
    metaDescription:
      "Email, SMS, WhatsApp marketing & lead generation for construction in Sri Lanka. Reach contractors, suppliers & B2B buyers from LKR 15,000. Live in 24 hours.",
    h1: "Email, SMS & WhatsApp Marketing for Construction in Sri Lanka",
    reach: "988,000+",
    audience: "contractors, suppliers & B2B buyers",
    priceFrom: "LKR 15,000",
    industryPage: null,
    sections: [
      {
        h2: "Email Marketing for Construction in Sri Lanka",
        body: "Construction is a B2B sale, and email reaches decision makers — contractors, engineers, architects and procurement teams. Send product catalogues, project rate cards and dealer offers to 750,000 local professionals. Suppliers of tiles, sanitary ware, steel, paint and machinery use it monthly.",
      },
      {
        h2: "SMS Marketing for Construction in Sri Lanka",
        body: "SMS works for stock arrivals, dealer promotions and price revisions that need to be known today. Site-based buyers read messages even when they never open email. Pair it with your sales hotline for immediate order enquiries.",
      },
      {
        h2: "WhatsApp Marketing for Construction in Sri Lanka",
        body: "Contractors send drawings and quantities and expect a quotation back — WhatsApp is where that conversation already happens. Share catalogues, price lists and delivery timelines instantly. It shortens quotation cycles considerably.",
      },
      {
        h2: "Lead Generation for Construction in Sri Lanka",
        body: "Findit.lk listings capture buyers searching for suppliers and services, while LinkedIn reaches project and procurement decision makers. Facebook remarketing keeps your brand visible through long project timelines. Enquiries reach your sales team on WhatsApp.",
      },
    ],
  },
];

export const getBB360ServicePage = (slug?: string) =>
  bb360ServicePages.find((p) => p.slug === slug);
