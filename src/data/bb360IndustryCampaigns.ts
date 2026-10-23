import { industries } from "./bb360UseCases";

export interface IndustryCampaign {
  badge: string;
  title: string;
  points: string[];
}

// Reuse the picker's practical planning details, not its unverified performance claims.
const campaignPlans: Record<string, { titles: string[]; details: number[][]; response: string }> = {
  hotel: {
    titles: ["Introduce your hotel or resort", "Promote a direct-booking weekend offer", "Plan festive dining and seasonal stays", "Introduce corporate meeting and long-stay packages", "Promote wedding venues and site tours", "Advertise hospitality vacancies"],
    details: [[0, 2, 4], [1, 2], [0, 1], [1], [0, 1, 3], [1]],
    response: "Prepare a reservations or recruitment contact to answer date, availability, package or role questions."
  },
  real: {
    titles: ["Introduce your property agency", "Launch an apartment or housing development", "Promote seasonal property offers", "Advertise offices and commercial rentals", "Present land plots to buyers and investors", "Recruit property agents and sales consultants"],
    details: [[0, 2], [3], [1, 2], [3], [3], [0, 3]],
    response: "Route enquiries to a property adviser or recruitment contact; prepare viewing times, documents and clear next steps."
  },
  construction: {
    titles: ["Announce a construction project", "Promote building materials to trade buyers", "Showcase contractor credentials", "Advertise office, warehouse and industrial units", "Present specialist capabilities to procurement teams", "Recruit construction professionals and tradespeople"],
    details: [[1, 2], [2, 3], [0, 3], [2], [0, 3], [1, 4]],
    response: "Prepare a project, sales or hiring contact for specifications, quotations, site visits and applications."
  },
  bank: {
    titles: ["Introduce your bank or financial service", "Promote a credit-card application offer", "Explain seasonal fixed-deposit and savings offers", "Present a home-loan product", "Plan a quarter-end personal-loan campaign", "Advertise banking and branch vacancies"],
    details: [[0, 3], [3], [1], [3], [], [2, 3]],
    response: "Use an official enquiry or application channel and show eligibility, fees, rates and terms. Approval remains the institution's decision."
  },
  health: {
    titles: ["Introduce your hospital or clinic", "Announce a specialist, location or service", "Explain seasonal screening packages", "Promote dental check-ups and cleaning", "Present corporate wellness packages", "Advertise medical and healthcare vacancies"],
    details: [[2, 3], [3], [3], [], [2], []],
    response: "Provide an appointment or hiring contact, service inclusions, clinician credentials and suitability information without promising clinical outcomes."
  },
  edu: {
    titles: ["Introduce your education institute", "Promote a new course intake", "Explain professional certification programmes", "Announce school-holiday programmes", "Present corporate training workshops", "Recruit teachers, lecturers and tutors"],
    details: [[0, 2], [3], [2], [0, 3], [2], [3]],
    response: "Prepare an admissions or hiring contact and explain entry requirements, schedules, fees and application dates."
  },
  retail: {
    titles: ["Introduce your retail brand", "Launch a new product", "Plan festive shopping and gift campaigns", "Promote a weekend sale", "Announce a new store opening", "Recruit retail staff across locations"],
    details: [[0, 3], [3], [0, 2], [3], [1, 2], [3]],
    response: "Make your checkout, WhatsApp ordering or application process ready; confirm stock, sale terms and delivery areas."
  },
  food: {
    titles: ["Introduce your restaurant and cuisine", "Announce a restaurant opening", "Promote occasion-led dining", "Launch a new menu or chef", "Present delivery and corporate catering", "Recruit chefs and restaurant staff"],
    details: [[0, 3], [2, 3], [0, 2], [0, 3], [3], [3]],
    response: "Prepare a booking, ordering or application contact with opening hours, menu prices and availability."
  },
  auto: {
    titles: ["Introduce your dealership or service centre", "Announce a vehicle model and test drives", "Explain seasonal vehicle offers", "Promote a maintenance or inspection package", "Present available used vehicles", "Recruit technicians and showroom staff"],
    details: [[3], [3], [3], [2, 3], [2, 3], [3]],
    response: "Prepare a showroom, service or recruitment contact; confirm specifications, stock, warranty and finance terms where applicable."
  },
  event: {
    titles: ["Introduce your venue or event company", "Promote concert and live-show tickets", "Present corporate event packages", "Launch a conference or business summit", "Announce a public exhibition or market", "Recruit event staff and production crew"],
    details: [[0, 2], [2, 3], [2], [2, 3], [3], [2, 3]],
    response: "Use a working ticket, registration, venue-enquiry or application link with dates, location and applicable terms."
  },
  fashion: {
    titles: ["Introduce your fashion brand", "Launch a new collection", "Plan festive fashion promotions", "Promote end-of-season clearance", "Announce a boutique opening", "Recruit designers and fashion staff"],
    details: [[0, 3], [2, 3], [0, 4], [3], [1, 2, 3], [3]],
    response: "Prepare the collection, ordering or application link with sizes, stock, prices and delivery information."
  },
  biz: {
    titles: ["Introduce your professional expertise", "Launch a business service", "Explain renewal and switching offers", "Invite prospects to a breakfast or demo", "Announce a new office or market entry", "Advertise executive and senior roles"],
    details: [[2, 3], [2, 3], [3], [3], [2, 3], [2]],
    response: "Route enquiries to a consultation, proposal, registration or confidential application process with scope and timing clearly stated."
  },
  gym: {
    titles: ["Introduce your gym and trainers", "Promote a membership offer", "Announce a new fitness branch", "Explain a seasonal fitness programme", "Present employee wellness memberships", "Recruit trainers and gym staff"],
    details: [[2], [2, 3], [2, 3], [], [3], [3]],
    response: "Offer a facility visit, suitability consultation or application contact; explain schedules, membership terms and trainer credentials."
  },
  tech: {
    titles: ["Introduce your technology company", "Launch a SaaS product or app", "Explain software upgrades and renewals", "Present managed IT and cybersecurity services", "Launch an electronics product or offer", "Recruit developers and product teams"],
    details: [[2, 3], [3], [3], [2], [2, 3], [3]],
    response: "Prepare a demo, trial, quotation or application process with accurate compatibility, pricing, support and role details."
  },
  recruit: {
    titles: ["Introduce your recruitment agency", "Promote a multi-role hiring campaign", "Recruit seasonal and contract staff", "Advertise overseas employment opportunities", "Introduce your employer brand", "Advertise specialist and senior vacancies"],
    details: [[2], [2, 3], [2, 3], [2, 3], [2], [2]],
    response: "Use a clear application contact, explain selection stages and verify employer, salary, contract and approval details before publication."
  }
};

const extraDetails: Record<string, Record<number, string[]>> = {
  bank: { 1: ["Show annual fees, offer expiry and applicant eligibility alongside the benefit."], 2: ["State deposit duration, applicable rates and withdrawal conditions accurately."], 3: ["Explain loan eligibility, repayment terms and required documents."], 4: ["Present the loan purpose, application deadline, charges and eligibility without promising approval."] },
  health: { 1: ["Show the specialist's credentials, consultation hours and appointment process."], 2: ["Explain who the screening is suitable for and what is included."], 3: ["State the check-up or cleaning inclusions, price and appointment availability."], 5: ["Publish the role, registration requirements, salary range and application deadline."] },
  auto: { 2: ["Publish genuine offer dates, available vehicles and finance conditions; avoid delivery or approval promises."], 3: ["Only describe parts and technician authorisations that your service centre can verify."] },
  gym: { 0: ["Show the actual facilities, trainer credentials, opening hours and location."], 3: ["Describe programme duration, session format, price and suitability without promising fitness or health results."], 4: ["Explain the group rate, employee eligibility and membership inclusions."] },
  tech: { 0: ["Use only verifiable client, experience and capability claims."], 3: ["Define the assessment, support scope and service hours without promising complete protection."], 5: ["Publish the actual salary currency, work arrangement, technology stack and role requirements."] },
  biz: { 0: ["Use verifiable experience and client information rather than unsupported leadership claims."] },
  recruit: { 3: ["Confirm applicable SLBFE approval and clearly state any lawful fees and contract conditions."], 4: ["Use genuine employee feedback only with permission and explain the actual work environment."] }
};

export const bb360IndustryCampaigns: Record<string, IndustryCampaign[]> = Object.fromEntries(
  industries.map(industry => {
    const plan = campaignPlans[industry.id];
    if (!plan) return [industry.id, []];
    return [industry.id, industry.useCases.map((useCase, index) => ({
      badge: useCase.badge,
      title: plan.titles[index] ?? useCase.badge,
      points: [
        ...(plan.details[index] ?? []).flatMap(pointIndex => {
          const point = useCase.points[pointIndex];
          return point ? [point] : [];
        }),
        ...(extraDetails[industry.id]?.[index] ?? []),
        plan.response,
      ],
    }))];
  })
);

export const getIndustryCampaigns = (id: string) => bb360IndustryCampaigns[id] ?? [];