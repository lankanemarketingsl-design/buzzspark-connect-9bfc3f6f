import ServicePageLayout from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import DigitalMarketingCTA from "@/components/DigitalMarketingCTA";
import article1 from "@/assets/blog/article-1.webp";
import article2 from "@/assets/blog/article-2.webp";
import article3 from "@/assets/blog/article-3.webp";
import article4 from "@/assets/blog/article-4.webp";
import article5 from "@/assets/blog/article-5.webp";
import article6 from "@/assets/blog/article-6.webp";
import article7 from "@/assets/blog/article-7.webp";
import article8 from "@/assets/blog/article-8.webp";
import articleEmailPower from "@/assets/blog/article-email-power.webp";
import articleSmsEngagement from "@/assets/blog/article-sms-engagement.webp";
import articleWhatsappFuture from "@/assets/blog/article-whatsapp-future.webp";
import articleMultichannelReach from "@/assets/blog/article-multichannel-reach.webp";
import articleSeoMatters from "@/assets/blog/article-seo-matters.webp";
import articleLeadGen from "@/assets/blog/article-lead-gen.webp";
import articleSocialMedia from "@/assets/blog/article-social-media.webp";
import articleHotelMarketing from "@/assets/blog/article-hotel-marketing.webp";
import articleEducationMarketing from "@/assets/blog/article-education-marketing.webp";
import articleFinanceMarketing from "@/assets/blog/article-finance-marketing.webp";
import articleRestaurantMarketing from "@/assets/blog/article-restaurant-marketing.webp";
import articleRealestateMarketing from "@/assets/blog/article-realestate-marketing.webp";
import articleFashionMarketing from "@/assets/blog/article-fashion-marketing.webp";
import articleBestAdvertising from "@/assets/blog/article-best-advertising.webp";
import articleDigitalAdGuide from "@/assets/blog/article-digital-advertising-guide.webp";
import articleOnlineVsTraditional from "@/assets/blog/article-online-vs-traditional.webp";
import articleGoogleAdsCost from "@/assets/blog/article-google-ads-cost.webp";
import articleEmailGuide from "@/assets/blog/article-email-guide-sri-lanka.webp";
import articleEmailPricing from "@/assets/blog/article-email-pricing-roi.webp";
import articleEmailIndustries from "@/assets/blog/article-email-industry-use-cases.webp";
import articleEmailVsSocial from "@/assets/blog/article-email-vs-social-media.webp";
import articleMultichannelVsFb from "@/assets/blog/article-multichannel-vs-facebook.webp";
import articleFinditlkEmail from "@/assets/blog/article-finditlk-email-conversions.webp";
import articleEducationEmail from "@/assets/blog/article-education-email-enrollments.webp";
import articleRealestateEmail from "@/assets/blog/article-realestate-email-leads.webp";
import articleHotelEmail from "@/assets/blog/article-hotel-email-bookings.webp";
import articleEcommerceEmail from "@/assets/blog/article-ecommerce-email-sales.webp";
import articleRecruitmentEmail from "@/assets/blog/article-recruitment-email-hiring.webp";
import articleHealthcareEmail from "@/assets/blog/article-healthcare-email-engagement.webp";
import articleAutomotiveEmail from "@/assets/blog/article-automotive-email-sales.webp";
import articleEventEmail from "@/assets/blog/article-event-email-attendance.webp";
import articleLeadGenAgency from "@/assets/blog/article-lead-gen-agency.webp";
import articleMultichannelCampaigns from "@/assets/blog/article-multichannel-campaigns.webp";
const articles = [
  {
    title: "Email Marketing Sri Lanka: The Complete Guide for Businesses in 2026",
    date: "Jun 01, 2026",
    excerpt: "How email marketing works in Sri Lanka in 2026 — 350,000+ verified contacts, campaign types, results to expect, and how to launch your first campaign.",
    path: "/email-marketing-sri-lanka-complete-guide-2026",
    image: articleEmailPower,
  },
  {
    title: "SMS Marketing Sri Lanka: How to Reach 600,000 Customers Instantly in 2026",
    date: "Jun 01, 2026",
    excerpt: "Bulk SMS Sri Lanka delivers 90%+ open rates in 3 minutes. Campaign types, results, pricing and how to combine SMS with email & WhatsApp for maximum reach.",
    path: "/sms-marketing-sri-lanka-600000-customers-2026",
    image: articleSmsEngagement,
  },
  {
    title: "Social Media Marketing Sri Lanka: The Complete 2026 Guide",
    date: "Jun 01, 2026",
    excerpt: "Facebook, Instagram, TikTok & LinkedIn in Sri Lanka — paid ad strategy, organic management, costs, and multi-channel results for 2026.",
    path: "/social-media-marketing-sri-lanka-complete-guide-2026",
    image: articleSocialMedia,
  },
  {
    title: "How to Choose a Digital Marketing Agency in Sri Lanka (2026 Buyer's Guide)",
    date: "May 14, 2026",
    excerpt: "Buyer's checklist, pricing benchmarks and red flags to avoid when choosing a digital marketing agency in Sri Lanka.",
    path: "/how-to-choose-digital-marketing-agency",
    image: articleBestAdvertising,
  },
  {
    title: "Email vs SMS vs WhatsApp Marketing in Sri Lanka: Which Wins in 2026?",
    date: "May 14, 2026",
    excerpt: "Head-to-head comparison of email, SMS and WhatsApp marketing — open rates, cost, ROI and when to use each channel.",
    path: "/email-vs-sms-vs-whatsapp-marketing",
    image: articleEmailVsSocial,
  },
  {
    title: "Digital Marketing Cost in Sri Lanka (2026 Price Guide)",
    date: "May 14, 2026",
    excerpt: "Real digital marketing prices in Sri Lanka 2026 — by channel and business size. Email, SMS, WhatsApp, SEO, Google Ads & multi-channel.",
    path: "/digital-marketing-cost-sri-lanka",
    image: articleGoogleAdsCost,
  },
  {
    title: "Digital Marketing Trends in Sri Lanka 2025–2026",
    date: "May 14, 2026",
    excerpt: "10 major digital marketing trends shaping Sri Lanka in 2025–2026 — AI, WhatsApp commerce, video, first-party data and more.",
    path: "/digital-marketing-trends-sri-lanka",
    image: articleMultichannelCampaigns,
  },
  {
    title: "What is Advertising in Sri Lanka? Complete Guide for Businesses (2026)",
    date: "Apr 24, 2026",
    excerpt: "Every type of advertising available in Sri Lanka — digital, direct, traditional, multi-channel. Learn which channels work for which goals.",
    path: "/what-is-advertising-sri-lanka",
    image: articleBestAdvertising,
  },
  {
    title: "Types of Advertising in Sri Lanka: Which One is Right for You?",
    date: "Apr 24, 2026",
    excerpt: "8 main types of advertising in Sri Lanka — email, SMS, WhatsApp, web banners, Google Ads, social media, multi-channel & traditional.",
    path: "/types-of-advertising-sri-lanka",
    image: articleDigitalAdGuide,
  },
  {
    title: "Advertising Cost in Sri Lanka (2026 Pricing Guide)",
    date: "Apr 24, 2026",
    excerpt: "Real advertising costs in Sri Lanka 2026 — by channel, industry & business size. Email from LKR 25K, multi-channel from LKR 100K.",
    path: "/advertising-cost-sri-lanka",
    image: articleGoogleAdsCost,
  },
  {
    title: "How to Advertise Your Business in Sri Lanka: Step-by-Step Guide",
    date: "Apr 24, 2026",
    excerpt: "8-step process for launching effective advertising in Sri Lanka — audience, goal, channels, budget, message, landing page, launch & optimise.",
    path: "/how-to-advertise-business-sri-lanka",
    image: articleMultichannelCampaigns,
  },
  {
    title: "Advertising Sri Lanka: How to Reach 500,000+ People Fast",
    date: "Apr 24, 2026",
    excerpt: "How Buzz Connect's mass-reach advertising delivers your message to 500,000+ verified Sri Lankans within 24-48 hours of brief.",
    path: "/advertising-reach-sri-lanka",
    image: articleMultichannelReach,
  },
  {
    title: "Best Lead Generation Company in Sri Lanka (2026 Guide)",
    date: "Apr 23, 2026",
    excerpt: "What separates the best lead generation companies in Sri Lanka — verified database, multi-channel reach, industry experience and qualified leads with transparent reporting.",
    path: "/best-lead-generation-company-sri-lanka",
    image: articleLeadGenAgency,
  },
  {
    title: "Lead Generation Cost in Sri Lanka (2026 Pricing Guide)",
    date: "Apr 23, 2026",
    excerpt: "Lead generation cost in Sri Lanka 2026 — pricing by channel, industry & cost per lead. Compare email, SMS, WhatsApp, Google Ads and multi-channel pricing.",
    path: "/lead-generation-cost-sri-lanka",
    image: articleLeadGen,
  },
  {
    title: "What is Direct Marketing in Sri Lanka? Complete Guide (2026)",
    date: "Apr 23, 2026",
    excerpt: "Reach exact target customers by email, SMS, WhatsApp & web ads. Learn how direct marketing works in Sri Lanka, what it costs, and why businesses choose Buzz Connect.",
    path: "/what-is-direct-marketing-sri-lanka",
    image: articleMultichannelReach,
  },
  {
    title: "Best Digital Marketing Agency in Sri Lanka (2026 Checklist)",
    date: "Apr 23, 2026",
    excerpt: "An 8-point checklist to evaluate any digital marketing agency in Sri Lanka — what to look for in services, case studies, pricing, reporting & multi-channel capability.",
    path: "/best-digital-marketing-agency-sri-lanka",
    image: articleBestAdvertising,
  },
  {
    title: "Best Direct Marketing Company in Sri Lanka (2026 Guide)",
    date: "Apr 23, 2026",
    excerpt: "What separates the best direct marketing companies from the rest in Sri Lanka — verified database, multi-channel capability, industry experience & speed of execution.",
    path: "/best-direct-marketing-company-sri-lanka",
    image: articleMultichannelCampaigns,
  },
  {
    title: "Website Design in Sri Lanka: Complete Guide for Businesses (2026)",
    date: "Apr 23, 2026",
    excerpt: "Everything Sri Lankan businesses need to know about website design in 2026 — what's included, mobile-first design, SEO integration, costs & ROI.",
    path: "/website-design-guide-sri-lanka",
    image: articleDigitalAdGuide,
  },
  {
    title: "Best Website Design Company in Sri Lanka (2026 Guide)",
    date: "Apr 23, 2026",
    excerpt: "How to choose the right website design partner in 2026 — and why Buzz Connect builds custom, mobile-first, SEO-ready sites that convert visitors into customers.",
    path: "/best-website-design-company-sri-lanka",
    image: articleDigitalAdGuide,
  },
  {
    title: "Best Google Ads Agency in Sri Lanka (2026 Guide)",
    date: "Apr 23, 2026",
    excerpt: "What to look for in a Google Ads agency in Sri Lanka — proven results, landing page design, transparent budgets, multi-channel integration & monthly reporting.",
    path: "/best-google-ads-agency-sri-lanka",
    image: articleGoogleAdsCost,
  },
  {
    title: "How to Calculate Your Email Marketing ROI in Sri Lanka (2026 Guide)",
    date: "Apr 23, 2026",
    excerpt: "Learn how to read your BuzzConnect campaign report and calculate your real email marketing ROI step-by-step — with real Sri Lankan examples & formulas.",
    path: "/email-marketing-roi-calculation-sri-lanka",
    image: articleEmailPricing,
  },
  {
    title: "Digital Marketing Company in Sri Lanka | BuzzConnect",
    date: "Apr 20, 2026",
    excerpt: "Looking for a trusted digital marketing company in Sri Lanka? Discover how BuzzConnect uses WhatsApp bulk messaging & email marketing to deliver real results — fast.",
    path: "/digital-marketing-company-in-sri-lanka",
    image: articleMultichannelCampaigns,
  },
  {
    title: "Education Marketing Case Studies – Sri Lanka (2026)",
    date: "Apr 13, 2026",
    excerpt: "Education marketing case studies from Sri Lanka. See how institutes filled course intakes faster using email campaigns, Findit.lk, StudyWay.lk & remarketing.",
    path: "/education-marketing-case-studies-sri-lanka",
    image: articleEducationMarketing,
  },
  {
    title: "Restaurant Marketing Case Studies – Sri Lanka (2026)",
    date: "Apr 13, 2026",
    excerpt: "Restaurant marketing case studies from Sri Lanka. See how restaurants increased foot traffic & sales using email campaigns, Findit.lk exposure & remarketing.",
    path: "/restaurant-marketing-case-studies-sri-lanka",
    image: articleRestaurantMarketing,
  },
  {
    title: "Staff Recruitment Case Studies – Sri Lanka (2026)",
    date: "Apr 13, 2026",
    excerpt: "Staff recruitment case studies from Sri Lanka. See how companies hired faster using Findit.lk, social media campaigns & multi-channel recruitment strategies.",
    path: "/staff-recruitment-case-studies-sri-lanka",
    image: articleRecruitmentEmail,
  },
  {
    title: "Event Marketing Case Studies – Sri Lanka (2026)",
    date: "Apr 13, 2026",
    excerpt: "Event marketing case studies from Sri Lanka. See how seminars, concerts & large-scale events drove registrations & sold tickets using email campaigns, Findit.lk & remarketing.",
    path: "/event-marketing-case-studies-sri-lanka",
    image: articleEventEmail,
  },
  {
    title: "Fashion Marketing Case Studies – Sri Lanka (2026)",
    date: "Apr 13, 2026",
    excerpt: "Fashion marketing case studies from Sri Lanka. See how clothing brands built awareness & drove sales using targeted email campaigns, Findit.lk exposure & remarketing.",
    path: "/fashion-marketing-case-studies-sri-lanka",
    image: articleFashionMarketing,
  },
  {
    title: "Finance Marketing Case Studies – Sri Lanka (2026)",
    date: "Apr 13, 2026",
    excerpt: "Finance marketing case studies from Sri Lanka. See how finance companies generated high-quality leads for loans, credit cards & leasing using email and remarketing.",
    path: "/finance-marketing-case-studies-sri-lanka",
    image: articleFinanceMarketing,
  },
  {
    title: "Real Estate Marketing Case Studies – Sri Lanka (2026)",
    date: "Apr 13, 2026",
    excerpt: "Real estate marketing case studies from Sri Lanka. See how properties sold faster using targeted email campaigns, Findit.lk exposure, and remarketing.",
    path: "/real-estate-marketing-case-studies-sri-lanka",
    image: articleRealestateMarketing,
  },
  {
    title: "Hotel Digital Marketing Case Studies – Sri Lanka (2026)",
    date: "Apr 13, 2026",
    excerpt: "Real hotel marketing case studies from Sri Lanka. See how hotels increased bookings and achieved 90%+ occupancy using email, Findit.lk, and remarketing.",
    path: "/hotel-digital-marketing-case-studies-sri-lanka",
    image: articleHotelMarketing,
  },
  {
    title: "Why Direct Marketing is the Fastest Way to Reach 500,000+ People (2026)",
    date: "Apr 12, 2026",
    excerpt: "Direct marketing is the fastest way to reach 500,000+ people in Sri Lanka. Launch campaigns in 3-5 hours via email, SMS & WhatsApp for instant results.",
    path: "/fast-direct-marketing-sri-lanka",
    image: articleMultichannelReach,
  },
  {
    title: "Why Direct Marketing Should Be in Your Digital Marketing Budget (2026)",
    date: "Apr 12, 2026",
    excerpt: "Why direct marketing (email, SMS, WhatsApp) should be a core part of your digital marketing budget in Sri Lanka. Instant reach, brand awareness & more.",
    path: "/direct-marketing-strategy-sri-lanka",
    image: articleMultichannelReach,
  },
  {
    title: "How Digital Marketing Drives Brand Awareness & More Customer Calls",
    date: "Apr 12, 2026",
    excerpt: "Learn how digital marketing drives instant brand awareness, top-of-mind recall, and more customer calls & inquiries for businesses in Sri Lanka.",
    path: "/digital-marketing-brand-awareness-sri-lanka",
    image: articleMultichannelReach,
  },
  {
    title: "Best Hotel Marketing Agency in Sri Lanka (2026 Guide)",
    date: "Apr 12, 2026",
    excerpt: "Find the best hotel marketing agency in Sri Lanka. Expert strategies to increase bookings, improve visibility, and grow your hotel brand.",
    path: "/best-hotel-marketing-agency-sri-lanka",
    image: articleHotelMarketing,
  },
  {
    title: "Hotel Marketing Cost in Sri Lanka (2026 Pricing Guide)",
    date: "Apr 12, 2026",
    excerpt: "How much does hotel marketing cost in Sri Lanka? Learn about pricing for SEO, Google Ads, social media, and email marketing for hotels.",
    path: "/hotel-marketing-cost-sri-lanka",
    image: articleHotelMarketing,
  },
  {
    title: "How Hotel Marketing Works in Sri Lanka (Complete Guide 2026)",
    date: "Apr 12, 2026",
    excerpt: "Learn how hotel marketing works step-by-step — from attracting guests to increasing bookings. A complete guide for hotels in Sri Lanka.",
    path: "/how-hotel-marketing-works-sri-lanka",
    image: articleHotelMarketing,
  },
  {
    title: "How Email Marketing Works in Sri Lanka (Complete Guide 2026)",
    date: "Apr 12, 2026",
    excerpt: "Learn how email marketing works step-by-step — from building lists to tracking results. A complete guide for businesses in Sri Lanka.",
    path: "/how-email-marketing-works-sri-lanka",
    image: articleEmailGuide,
  },
  {
    title: "Email Subject Lines That Increase Open Rates (Sri Lanka Guide 2026)",
    date: "Apr 12, 2026",
    excerpt: "Learn the best email subject line strategies to boost open rates, improve engagement, and drive conversions for your business in Sri Lanka.",
    path: "/email-subject-lines-guide-sri-lanka",
    image: articleEmailGuide,
  },
  {
    title: "How Lead Generation Works in Sri Lanka (Complete 2026 Guide)",
    date: "Apr 12, 2026",
    excerpt: "Learn how lead generation works step-by-step — from attracting audiences to converting them into paying customers in Sri Lanka.",
    path: "/how-lead-generation-works-sri-lanka",
    image: articleLeadGen,
  },
  {
    title: "How Graphic Design Helps Businesses Grow in Sri Lanka (2026 Guide)",
    date: "Apr 12, 2026",
    excerpt: "Discover how professional graphic design helps businesses in Sri Lanka build brand identity, increase sales, and improve marketing performance.",
    path: "/how-graphic-design-helps-business-sri-lanka",
    image: articleSocialMedia,
  },
  {
    title: "Best Social Media Marketing Company in Sri Lanka (2026 Guide)",
    date: "Apr 12, 2026",
    excerpt: "Find the best social media marketing company in Sri Lanka. Expert Facebook, Instagram & TikTok marketing to grow your brand and generate leads.",
    path: "/best-social-media-marketing-company-sri-lanka",
    image: articleSocialMedia,
  },
  {
    title: "Social Media Marketing Cost in Sri Lanka (2026 Pricing Guide)",
    date: "Apr 12, 2026",
    excerpt: "How much does social media marketing cost in Sri Lanka? Learn about pricing models, factors that affect cost, and how to get the best ROI.",
    path: "/social-media-marketing-cost-sri-lanka",
    image: articleSocialMedia,
  },
  {
    title: "How Social Media Marketing Works in Sri Lanka (Complete Guide)",
    date: "Apr 12, 2026",
    excerpt: "Learn how social media marketing works — audience targeting, content creation, paid advertising, and optimization for businesses in Sri Lanka.",
    path: "/how-social-media-marketing-works-sri-lanka",
    image: articleSocialMedia,
  },
  {
    title: "Google Ads Services in Sri Lanka (2026 Guide + Pricing)",
    date: "Apr 12, 2026",
    excerpt: "Run high-converting Google Ads campaigns in Sri Lanka. Learn about search, display, YouTube & shopping ads with expert PPC management.",
    path: "/google-ads-sri-lanka",
    image: articleGoogleAdsCost,
  },
  {
    title: "Best SEO Company in Sri Lanka (2026 Guide)",
    date: "Apr 12, 2026",
    excerpt: "Find the best SEO company in Sri Lanka. Learn what to look for, key services, and how professional SEO can help your business rank on Google.",
    path: "/best-seo-company-sri-lanka",
    image: articleSeoMatters,
  },
  {
    title: "SEO Cost in Sri Lanka (2026 Pricing Guide)",
    date: "Apr 12, 2026",
    excerpt: "How much does SEO cost in Sri Lanka? Learn about SEO pricing models, factors that affect cost, and how to get the best value.",
    path: "/seo-cost-sri-lanka",
    image: articleSeoMatters,
  },
  {
    title: "How SEO Works in Sri Lanka (Beginner to Advanced Guide)",
    date: "Apr 12, 2026",
    excerpt: "Learn how SEO works — from on-page optimization to link building. A complete guide for beginners and advanced marketers in Sri Lanka.",
    path: "/how-seo-works-sri-lanka",
    image: articleSeoMatters,
  },
  {
    title: "Why SEO is the Smartest Long-Term Strategy for Businesses in Sri Lanka",
    date: "Apr 13, 2026",
    excerpt: "Discover why investing in SEO delivers sustainable growth, higher ROI, and long-term visibility for Sri Lankan businesses.",
    path: "/seo-investment-long-term-strategy-sri-lanka",
    image: articleSeoMatters,
  },
  {
    title: "SEO Consultant in Sri Lanka: How to Choose the Right Expert",
    date: "Apr 13, 2026",
    excerpt: "Learn how to choose the right SEO consultant in Sri Lanka for your business — what to look for and what to expect.",
    path: "/seo-consultant-sri-lanka",
    image: articleSeoMatters,
  },
  {
    title: "SEO Specialist in Sri Lanka: Why Your Business Needs One",
    date: "Apr 13, 2026",
    excerpt: "Discover why hiring an SEO specialist in Sri Lanka is critical for improving your Google rankings and online visibility.",
    path: "/seo-specialist-sri-lanka",
    image: articleSeoMatters,
  },
  {
    title: "SEO Services in Sri Lanka: What You Should Expect",
    date: "Apr 13, 2026",
    excerpt: "Learn what professional SEO services in Sri Lanka include and how they drive traffic, leads, and business growth.",
    path: "/seo-services-sri-lanka",
    image: articleSeoMatters,
  },
  {
    title: "SEO vs Paid Ads in Sri Lanka: Which is Better?",
    date: "Apr 13, 2026",
    excerpt: "Compare SEO and paid advertising in Sri Lanka — costs, ROI, and which strategy delivers better long-term results.",
    path: "/seo-vs-paid-ads-sri-lanka",
    image: articleSeoMatters,
  },
  {
    title: "How to Rank #1 in Google Sri Lanka: Industry-Focused Guide",
    date: "Apr 13, 2026",
    excerpt: "A complete industry-focused guide to ranking #1 on Google in Sri Lanka — covering hotels, education, healthcare, real estate, and more.",
    path: "/rank-number-one-google-sri-lanka",
    image: articleSeoMatters,
  },
  {
    title: "Multi-Channel Email Campaigns That Deliver Real Visibility",
    date: "Apr 7, 2026",
    excerpt: "Go beyond email with Buzz Connect's multi-channel campaigns combining Email, Findit.lk & Facebook Story promotion for maximum visibility and lead generation.",
    path: "/multi-channel-email-campaigns-sri-lanka",
    image: articleMultichannelCampaigns,
  },
  {
    title: "Lead Generation Agency Sri Lanka: How to Choose the Right Partner",
    date: "Mar 29, 2026",
    excerpt: "How to choose the right lead generation agency in Sri Lanka. Multi-channel strategies combining email, SMS, WhatsApp & Findit.lk for maximum qualified leads.",
    path: "/lead-generation-agency-sri-lanka",
    image: articleLeadGenAgency,
  },
  {
    title: "E-commerce Email Marketing: Increase Sales & Retention",
    date: "Mar 29, 2026",
    excerpt: "How email marketing increases sales and customer retention for e-commerce businesses in Sri Lanka with cart recovery, flash sales & multi-channel strategies.",
    path: "/ecommerce-email-marketing-sales-sri-lanka",
    image: articleEcommerceEmail,
  },
  {
    title: "Recruitment Marketing: How Email Campaigns Speed Up Hiring",
    date: "Mar 29, 2026",
    excerpt: "How email marketing helps companies in Sri Lanka speed up hiring with targeted job campaigns, candidate sourcing & multi-channel recruitment strategies.",
    path: "/recruitment-email-marketing-hiring-sri-lanka",
    image: articleRecruitmentEmail,
  },
  {
    title: "Healthcare Marketing: How Email Campaigns Improve Patient Engagement",
    date: "Mar 29, 2026",
    excerpt: "How email marketing improves patient engagement for healthcare providers in Sri Lanka with appointment reminders, health promotions & multi-channel strategies.",
    path: "/healthcare-email-marketing-engagement-sri-lanka",
    image: articleHealthcareEmail,
  },
  {
    title: "Automotive Marketing: How Email Campaigns Drive Sales",
    date: "Mar 29, 2026",
    excerpt: "How email marketing drives vehicle sales and service bookings for automotive businesses in Sri Lanka with targeted campaigns & Findit.lk integration.",
    path: "/automotive-email-marketing-sales-sri-lanka",
    image: articleAutomotiveEmail,
  },
  {
    title: "Event Marketing: How Email Campaigns Increase Attendance",
    date: "Mar 29, 2026",
    excerpt: "How email marketing increases attendance for events, workshops & training programs in Sri Lanka with targeted campaigns & multi-channel promotion.",
    path: "/event-email-marketing-attendance-sri-lanka",
    image: articleEventEmail,
  },
  {
    title: "Education Marketing: How Email Campaigns Increase Student Enrollments",
    date: "Mar 29, 2026",
    excerpt: "How email marketing helps education institutes in Sri Lanka increase student enrollments with targeted campaigns and multi-channel strategies.",
    path: "/education-email-marketing-enrollments-sri-lanka",
    image: articleEducationEmail,
  },
  {
    title: "Real Estate Marketing: How Email Campaigns Generate Property Leads",
    date: "Mar 29, 2026",
    excerpt: "How email marketing helps real estate businesses in Sri Lanka generate high-quality property leads with targeted campaigns and Findit.lk integration.",
    path: "/real-estate-email-marketing-leads-sri-lanka",
    image: articleRealestateEmail,
  },
  {
    title: "Hotel Marketing: How Email Campaigns Increase Bookings",
    date: "Mar 29, 2026",
    excerpt: "How email marketing increases hotel bookings in Sri Lanka with targeted campaigns, seasonal promotions, and multi-channel strategies.",
    path: "/hotel-email-marketing-bookings-sri-lanka",
    image: articleHotelEmail,
  },
  {
    title: "Why Multi-Channel Marketing Is More Effective Than Facebook Campaigns in Sri Lanka",
    date: "Mar 29, 2026",
    excerpt: "Stop depending on Facebook alone. Discover how combining Email, SMS, WhatsApp & Findit.lk delivers superior reach, engagement, and ROI for Sri Lankan businesses.",
    path: "/multi-channel-vs-facebook-sri-lanka",
    image: articleMultichannelVsFb,
  },
  {
    title: "How Findit.lk + Email Marketing Increases Conversions in Sri Lanka",
    date: "Mar 29, 2026",
    excerpt: "Combine high-intent Findit.lk search traffic with targeted email campaigns for maximum lead generation across 10+ industries in Sri Lanka.",
    path: "/finditlk-email-marketing-conversions-sri-lanka",
    image: articleFinditlkEmail,
  },
  {
    title: "Complete Guide to Email Marketing in Sri Lanka (2026)",
    date: "Mar 29, 2026",
    excerpt: "The ultimate guide to email marketing in Sri Lanka. Learn strategies, campaign types, tools, and how to run professional bulk email campaigns for maximum ROI.",
    path: "/email-marketing-guide-sri-lanka",
    image: articleEmailGuide,
  },
  {
    title: "Email Marketing Pricing in Sri Lanka: Costs, Packages & ROI",
    date: "Mar 29, 2026",
    excerpt: "How much does email marketing cost in Sri Lanka? Compare pricing, packages, and ROI. Learn why email delivers the best return on investment.",
    path: "/email-marketing-pricing-sri-lanka",
    image: articleEmailPricing,
  },
  {
    title: "How Email Marketing Helps Education, Real Estate & Hotels in Sri Lanka",
    date: "Mar 29, 2026",
    excerpt: "Discover how email marketing drives results for education, real estate, hotels, restaurants, fashion, and finance businesses in Sri Lanka.",
    path: "/email-marketing-industries-sri-lanka",
    image: articleEmailIndustries,
  },
  {
    title: "Email Marketing vs Social Media Marketing in Sri Lanka",
    date: "Mar 29, 2026",
    excerpt: "Email marketing vs social media — compare reach, cost, conversion rates, and ROI. Learn which strategy works best for your business in Sri Lanka.",
    path: "/email-marketing-vs-social-media-sri-lanka",
    image: articleEmailVsSocial,
  },
  {
    title: "Best Advertising Company in Sri Lanka",
    date: "Mar 24, 2025",
    excerpt: "Discover why BuzzConnect is the best advertising company in Sri Lanka. Multi-channel email, SMS, WhatsApp & banner advertising solutions for 2,000+ businesses.",
    path: "/best-advertising-company-sri-lanka",
    image: articleBestAdvertising,
  },
  {
    title: "Digital Advertising Sri Lanka: Complete Guide",
    date: "Mar 24, 2025",
    excerpt: "A complete guide to digital advertising in Sri Lanka covering email, SMS, WhatsApp, social media, and banner advertising strategies for maximum ROI.",
    path: "/digital-advertising-sri-lanka-complete-guide",
    image: articleDigitalAdGuide,
  },
  {
    title: "Online Advertising vs Traditional Advertising in Sri Lanka",
    date: "Mar 24, 2025",
    excerpt: "Compare online and traditional advertising in Sri Lanka. Learn which method delivers better ROI, reach, and measurable results for your business.",
    path: "/online-vs-traditional-advertising-sri-lanka",
    image: articleOnlineVsTraditional,
  },
  {
    title: "Google Ads Sri Lanka Cost Guide",
    date: "Mar 24, 2025",
    excerpt: "How much do Google Ads cost in Sri Lanka? Complete cost guide covering CPC rates, budgets, and tips to maximize ROI with alternative advertising options.",
    path: "/google-ads-sri-lanka-cost-guide",
    image: articleGoogleAdsCost,
  },
  {
    title: "Hotel Marketing in Sri Lanka: How to Increase Bookings and Revenue",
    date: "Mar 24, 2025",
    excerpt: "Learn how hotels in Sri Lanka can increase bookings and revenue with digital marketing strategies including email, SMS, WhatsApp, and social media campaigns.",
    path: "/hotel-marketing-increase-bookings-sri-lanka",
    image: articleHotelMarketing,
  },
  {
    title: "Education Marketing in Sri Lanka: How to Attract More Students",
    date: "Mar 24, 2025",
    excerpt: "Educational institutions in Sri Lanka can attract more students with digital marketing. Email, SMS, WhatsApp and social media strategies for enrollment growth.",
    path: "/education-marketing-attract-students-sri-lanka",
    image: articleEducationMarketing,
  },
  {
    title: "Finance Marketing in Sri Lanka: How to Generate High-Quality Leads",
    date: "Mar 24, 2025",
    excerpt: "Finance marketing requires trust and precision. Learn how email, SMS, WhatsApp, and targeted advertising generate quality leads for financial businesses in Sri Lanka.",
    path: "/finance-marketing-generate-leads-sri-lanka",
    image: articleFinanceMarketing,
  },
  {
    title: "Restaurant Marketing in Sri Lanka: How to Attract More Customers",
    date: "Mar 24, 2025",
    excerpt: "Restaurants in Sri Lanka need effective marketing to stand out. Learn how SMS, WhatsApp, social media, and email drive foot traffic and online orders.",
    path: "/restaurant-marketing-attract-customers-sri-lanka",
    image: articleRestaurantMarketing,
  },
  {
    title: "Real Estate Marketing in Sri Lanka: How to Generate Property Leads",
    date: "Mar 24, 2025",
    excerpt: "Real estate marketing helps attract serious buyers and investors. Learn how email, SMS, WhatsApp, and landing pages drive quality property leads in Sri Lanka.",
    path: "/real-estate-marketing-generate-property-leads-sri-lanka",
    image: articleRealestateMarketing,
  },
  {
    title: "Fashion Marketing in Sri Lanka: How to Grow Your Brand Online",
    date: "Mar 24, 2025",
    excerpt: "Fashion brands in Sri Lanka can grow online with social media, influencer collaborations, email marketing, and WhatsApp campaigns for higher sales.",
    path: "/fashion-marketing-grow-brand-sri-lanka",
    image: articleFashionMarketing,
  },
  {
    title: "Social Media Marketing in Sri Lanka: Why Your Business Needs It",
    date: "Mar 24, 2025",
    excerpt: "Social media marketing is essential for Sri Lankan businesses. Learn how Facebook, Instagram, and TikTok help you engage customers and build brand awareness.",
    path: "/social-media-marketing-why-your-business-needs-it-sri-lanka",
    image: articleSocialMedia,
  },
  {
    title: "Lead Generation in Sri Lanka: How to Get More Customers for Your Business",
    date: "Mar 24, 2025",
    excerpt: "Learn how lead generation helps Sri Lankan businesses attract and convert more customers using email, SMS, and WhatsApp marketing campaigns.",
    path: "/lead-generation-get-more-customers-sri-lanka",
    image: articleLeadGen,
  },
  {
    title: "What is SEO and Why It Matters for Businesses in Sri Lanka",
    date: "Mar 24, 2025",
    excerpt: "Learn what SEO is and why it's essential for Sri Lankan businesses. Discover how search engine optimization drives organic traffic, leads, and long-term growth.",
    path: "/seo-why-it-matters-sri-lanka",
    image: articleSeoMatters,
  },
  {
    title: "Why Email Marketing is Still the Most Powerful Tool for Businesses in Sri Lanka",
    date: "Mar 24, 2025",
    excerpt: "Email marketing delivers the highest ROI for businesses in Sri Lanka. Learn why email campaigns outperform social media and how to leverage them for consistent growth.",
    path: "/email-marketing-most-powerful-tool-sri-lanka",
    image: articleEmailPower,
  },
  {
    title: "How SMS Marketing is Driving Instant Customer Engagement in Sri Lanka",
    date: "Mar 24, 2025",
    excerpt: "With open rates exceeding 90%, SMS marketing is the fastest way to reach customers in Sri Lanka. Discover how instant text campaigns drive engagement and conversions.",
    path: "/sms-marketing-driving-engagement-sri-lanka",
    image: articleSmsEngagement,
  },
  {
    title: "WhatsApp Marketing in Sri Lanka: The Future of Customer Communication",
    date: "Mar 24, 2025",
    excerpt: "Millions of Sri Lankans use WhatsApp daily. Learn how businesses use WhatsApp marketing for promotions, customer support, and higher conversion rates.",
    path: "/whatsapp-marketing-future-sri-lanka",
    image: articleWhatsappFuture,
  },
  {
    title: "Multi-Channel Marketing in Sri Lanka: The Key to Maximum Reach",
    date: "Mar 24, 2025",
    excerpt: "Combine Email, SMS, WhatsApp and social media for maximum reach. Learn why multi-channel marketing strategies outperform single-channel approaches.",
    path: "/multi-channel-marketing-maximum-reach-sri-lanka",
    image: articleMultichannelReach,
  },
  {
    title: "The Future of Email Marketing in Sri Lanka: Email Campaigns + Findit.lk Ads",
    date: "Mar 21, 2025",
    excerpt: "Discover how Buzz Connect combines precision email campaigns with Findit.lk category-based advertising for maximum marketing impact. A dual-channel strategy for higher conversions in Sri Lanka.",
    path: "/future-of-email-marketing-sri-lanka",
    image: article8,
  },
  {
    title: "The Power of Multi-Channel Marketing in Sri Lanka with Buzz Connect",
    date: "Mar 20, 2025",
    excerpt: "Discover how Buzz Connect's unique multi-channel marketing strategy combining Email, SMS, WhatsApp, and Findit.lk delivers unmatched visibility and faster results for Sri Lankan businesses.",
    path: "/multi-channel-marketing-in-sri-lanka",
    image: article7,
  },
  {
    title: "4 Reasons Why Email Marketing Is Important For Your Internet Marketing",
    date: "Aug 04, 2020",
    excerpt: "Don't get us wrong, social media is an extremely important component in any business' marketing strategy. Social Media is a great channel for interacting with your audience and strengthening your personal relationships with them.",
    path: "/why-email-marketing-is-important",
    image: article1,
  },
  {
    title: "Why You Need Email Marketing",
    date: "Aug 05, 2020",
    excerpt: "Email marketing is the highly cost effective digital marketing strategy of sending direct emails to prospects and customers. Email marketing convert prospects into customers, and turn one-time buyers into loyal, raving fans.",
    path: "/why-you-need-email-marketing",
    image: article2,
  },
  {
    title: "SEO Sri Lanka (Search Engine Optimization)",
    date: "Aug 06, 2020",
    excerpt: "SEO stand for Search Engine Optimization, which is the practice of increasing the quantity and quality of traffic to your website through organic search engine results.",
    path: "/best-seo-services-sri-lanka",
    image: article3,
  },
  {
    title: "Classified Advertising in Sri Lanka",
    date: "Aug 06, 2020",
    excerpt: "Classified advertising is a cheap and easy way for small businesses to connect with potential customers. It's a great way to get the word out about your company, especially if you can't budget for other forms of advertising.",
    path: "/classified-advertising-in-sri-lanka",
    image: article4,
  },
  {
    title: "SMS Marketing in Sri Lanka",
    date: "Aug 06, 2020",
    excerpt: "SMS Marketing is sending promotional campaigns for marketing purposes using text messages (SMS). These messages are mostly meant to communicate sensitive offers, updates, and promotions to people.",
    path: "/sms-marketing-in-sri-lanka",
    image: article5,
  },
  {
    title: "Enable Missing Images to Display in Various Email Clients",
    date: "Aug 06, 2020",
    excerpt: "Images in an email sometimes don't display for a variety of reasons. If your contacts are telling you that they're receiving your email but content isn't displaying properly, a good place to start is to have them check the settings in their email client.",
    path: "/enable-missing-images-to-display",
    image: article6,
  },
  {
    title: "Best SMS Marketing Company in Sri Lanka (2026 Guide)",
    date: "Apr 12, 2026",
    excerpt: "Looking for the best SMS marketing company in Sri Lanka? Learn what to look for, key benefits, and how to choose the right SMS marketing partner for your business.",
    path: "/best-sms-marketing-company-sri-lanka",
    image: article5,
  },
];

const Resources = () => {
  return (
    <ServicePageLayout
      badge="Resources"
      title="Resources"
      subtitle="Expert articles on email marketing, SMS campaigns, SEO, and digital advertising strategies for Sri Lankan businesses."
    >
      <SEOHead
        title="Digital Marketing Blog Sri Lanka | Free Guides & Tips"
        description="Free digital marketing articles for Sri Lankan businesses. Email marketing tips, SMS campaign strategies, SEO guides & advertising insights by Buzz Connect experts."
        canonical="/resources"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
        ]}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((a, i) => (
          <motion.div
            key={a.path}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(i * 0.04, 0.3) }}
          >
            <Link
              to={a.path}
              className="group flex flex-col rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-xl transition-all h-full overflow-hidden"
            >
              <div className="aspect-[16/9] overflow-hidden bg-muted">
                <img
                  src={a.image}
                  alt={a.title}
                  width={720}
                  height={405}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading={i < 3 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={i < 3 ? "high" : "low"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {a.date}
                </div>
                <h3 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug line-clamp-2">
                  {a.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">{a.excerpt}</p>
                <span className="inline-flex items-center text-sm font-semibold text-accent mt-auto">
                  Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <DigitalMarketingCTA variant="alt" />
    </ServicePageLayout>
  );
};

export default Resources;
