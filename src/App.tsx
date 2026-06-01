import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import WhatsAppGlobalTracker from "@/components/WhatsAppGlobalTracker";
import ContactCaptureDialog from "@/components/ContactCaptureDialog";
import ContactClickTracker from "@/components/ContactClickTracker";


import ScrollToTop from "@/components/ScrollToTop";
import AdminLogin from "./pages/AdminLogin.tsx";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import EmailMarketing from "./pages/EmailMarketing.tsx";
import SmsMarketing from "./pages/SmsMarketing.tsx";
import WhatsAppMarketing from "./pages/WhatsAppMarketing.tsx";
import SpecialPackages from "./pages/SpecialPackages.tsx";
import OnlineAdvertising from "./pages/OnlineAdvertising.tsx";
import GraphicDesign from "./pages/GraphicDesign.tsx";
import SeoServices from "./pages/SeoServices.tsx";
import WebsiteDesign from "./pages/WebsiteDesign.tsx";
import LeadGeneration from "./pages/LeadGeneration.tsx";
import SocialMediaMarketing from "./pages/SocialMediaMarketing.tsx";
import WebBannerAdvertising from "./pages/WebBannerAdvertising.tsx";
import Resources from "./pages/Resources.tsx";

import WhyEmailMarketingIsImportant from "./pages/articles/WhyEmailMarketingIsImportant.tsx";
import WhyYouNeedEmailMarketing from "./pages/articles/WhyYouNeedEmailMarketing.tsx";
import BestSeoServicesSriLanka from "./pages/articles/BestSeoServicesSriLanka.tsx";
import SmsMarketingInSriLanka from "./pages/articles/SmsMarketingInSriLanka.tsx";
import EnableMissingImages from "./pages/articles/EnableMissingImages.tsx";
import MultiChannelMarketingSriLanka from "./pages/articles/MultiChannelMarketingSriLanka.tsx";
import FutureEmailMarketingSriLanka from "./pages/articles/FutureEmailMarketingSriLanka.tsx";
import EmailMarketingPowerfulTool from "./pages/articles/EmailMarketingPowerfulTool.tsx";
import SmsMarketingDrivingEngagement from "./pages/articles/SmsMarketingDrivingEngagement.tsx";
import WhatsAppMarketingFuture from "./pages/articles/WhatsAppMarketingFuture.tsx";
import MultiChannelMarketingMaxReach from "./pages/articles/MultiChannelMarketingMaxReach.tsx";
import SeoWhyItMatters from "./pages/articles/SeoWhyItMatters.tsx";
import LeadGenerationGetMoreCustomers from "./pages/articles/LeadGenerationGetMoreCustomers.tsx";
import SocialMediaMarketingWhyYouNeedIt from "./pages/articles/SocialMediaMarketingWhyYouNeedIt.tsx";
import HotelMarketingIncreaseBookings from "./pages/articles/HotelMarketingIncreaseBookings.tsx";
import EducationMarketingAttractStudents from "./pages/articles/EducationMarketingAttractStudents.tsx";
import FinanceMarketingGenerateLeads from "./pages/articles/FinanceMarketingGenerateLeads.tsx";
import RestaurantMarketingAttractCustomers from "./pages/articles/RestaurantMarketingAttractCustomers.tsx";
import RealEstateMarketingPropertyLeads from "./pages/articles/RealEstateMarketingPropertyLeads.tsx";
import FashionMarketingGrowBrand from "./pages/articles/FashionMarketingGrowBrand.tsx";
import BestAdvertisingCompanySriLanka from "./pages/articles/BestAdvertisingCompanySriLanka.tsx";
import DigitalAdvertisingGuide from "./pages/articles/DigitalAdvertisingGuide.tsx";
import OnlineVsTraditionalAdvertising from "./pages/articles/OnlineVsTraditionalAdvertising.tsx";
import GoogleAdsCostGuide from "./pages/articles/GoogleAdsCostGuide.tsx";
import EmailMarketingGuide from "./pages/articles/EmailMarketingGuide.tsx";
import EmailMarketingPricing from "./pages/articles/EmailMarketingPricing.tsx";
import EmailMarketingIndustries from "./pages/articles/EmailMarketingIndustries.tsx";
import EmailVsSocialMedia from "./pages/articles/EmailVsSocialMedia.tsx";
import MultiChannelVsFacebook from "./pages/articles/MultiChannelVsFacebook.tsx";
import FinditlkEmailConversions from "./pages/articles/FinditlkEmailConversions.tsx";
import EducationEmailEnrollments from "./pages/articles/EducationEmailEnrollments.tsx";
import RealEstateEmailLeads from "./pages/articles/RealEstateEmailLeads.tsx";
import HotelEmailBookings from "./pages/articles/HotelEmailBookings.tsx";
import EcommerceEmailSales from "./pages/articles/EcommerceEmailSales.tsx";
import RecruitmentEmailHiring from "./pages/articles/RecruitmentEmailHiring.tsx";
import HealthcareEmailEngagement from "./pages/articles/HealthcareEmailEngagement.tsx";
import AutomotiveEmailSales from "./pages/articles/AutomotiveEmailSales.tsx";
import EventEmailAttendance from "./pages/articles/EventEmailAttendance.tsx";
import LeadGenAgency from "./pages/articles/LeadGenAgency.tsx";
import MultiChannelCampaignLandingPage from "./pages/articles/MultiChannelCampaignLandingPage.tsx";
import BestSmsMarketingCompanySriLanka from "./pages/articles/BestSmsMarketingCompanySriLanka.tsx";
import BestSeoCompanySriLanka from "./pages/articles/BestSeoCompanySriLanka.tsx";
import SeoCostSriLanka from "./pages/articles/SeoCostSriLanka.tsx";
import HowSeoWorksSriLanka from "./pages/articles/HowSeoWorksSriLanka.tsx";
import BestSocialMediaMarketingCompanySriLanka from "./pages/articles/BestSocialMediaMarketingCompanySriLanka.tsx";
import SocialMediaMarketingCostSriLanka from "./pages/articles/SocialMediaMarketingCostSriLanka.tsx";
import HowSocialMediaMarketingWorksSriLanka from "./pages/articles/HowSocialMediaMarketingWorksSriLanka.tsx";
import HowGraphicDesignHelpsBusinessSriLanka from "./pages/articles/HowGraphicDesignHelpsBusinessSriLanka.tsx";
import HowLeadGenerationWorksSriLanka from "./pages/articles/HowLeadGenerationWorksSriLanka.tsx";
import EmailSubjectLinesGuide from "./pages/articles/EmailSubjectLinesGuide.tsx";
import HowEmailMarketingWorks from "./pages/articles/HowEmailMarketingWorks.tsx";
import EmailMarketingRoiCalculation from "./pages/articles/EmailMarketingRoiCalculation.tsx";
import HowHotelMarketingWorks from "./pages/articles/HowHotelMarketingWorks.tsx";
import HotelMarketingCost from "./pages/articles/HotelMarketingCost.tsx";
import BestHotelMarketingAgency from "./pages/articles/BestHotelMarketingAgency.tsx";
import DigitalMarketingBrandAwareness from "./pages/articles/DigitalMarketingBrandAwareness.tsx";
import DirectMarketingStrategy from "./pages/articles/DirectMarketingStrategy.tsx";
import FastDirectMarketing from "./pages/articles/FastDirectMarketing.tsx";
import HotelDigitalMarketingCaseStudies from "./pages/articles/HotelDigitalMarketingCaseStudies.tsx";
import RealEstateMarketingCaseStudies from "./pages/articles/RealEstateMarketingCaseStudies.tsx";
import FinanceMarketingCaseStudies from "./pages/articles/FinanceMarketingCaseStudies.tsx";
import FashionMarketingCaseStudies from "./pages/articles/FashionMarketingCaseStudies.tsx";
import EventMarketingCaseStudies from "./pages/articles/EventMarketingCaseStudies.tsx";
import StaffRecruitmentCaseStudies from "./pages/articles/StaffRecruitmentCaseStudies.tsx";
import RestaurantMarketingCaseStudies from "./pages/articles/RestaurantMarketingCaseStudies.tsx";
import EducationMarketingCaseStudies from "./pages/articles/EducationMarketingCaseStudies.tsx";
import SeoInvestmentSriLanka from "./pages/articles/SeoInvestmentSriLanka.tsx";
import SeoConsultantSriLanka from "./pages/articles/SeoConsultantSriLanka.tsx";
import SeoSpecialistSriLanka from "./pages/articles/SeoSpecialistSriLanka.tsx";
import SeoServicesSriLanka from "./pages/articles/SeoServicesSriLanka.tsx";
import SeoVsPaidAdsSriLanka from "./pages/articles/SeoVsPaidAdsSriLanka.tsx";
import RankNumberOneSriLanka from "./pages/articles/RankNumberOneSriLanka.tsx";
import SeoCaseStudiesSriLanka from "./pages/articles/SeoCaseStudiesSriLanka.tsx";
import WhatIsDirectMarketing from "./pages/articles/WhatIsDirectMarketing.tsx";
import BestDigitalMarketingAgency from "./pages/articles/BestDigitalMarketingAgency.tsx";
import BestDirectMarketingCompany from "./pages/articles/BestDirectMarketingCompany.tsx";
import WebsiteDesignGuide from "./pages/articles/WebsiteDesignGuide.tsx";
import BestWebsiteDesignCompany from "./pages/articles/BestWebsiteDesignCompany.tsx";
import BestGoogleAdsAgency from "./pages/articles/BestGoogleAdsAgency.tsx";
import BestLeadGenerationCompany from "./pages/articles/BestLeadGenerationCompany.tsx";
import LeadGenerationCost from "./pages/articles/LeadGenerationCost.tsx";
import WhatIsAdvertisingSriLanka from "./pages/articles/WhatIsAdvertisingSriLanka.tsx";
import TypesOfAdvertisingSriLanka from "./pages/articles/TypesOfAdvertisingSriLanka.tsx";
import AdvertisingCostSriLanka from "./pages/articles/AdvertisingCostSriLanka.tsx";
import HowToChooseDigitalMarketingAgency from "./pages/articles/HowToChooseDigitalMarketingAgency.tsx";
import EmailVsSmsVsWhatsApp from "./pages/articles/EmailVsSmsVsWhatsApp.tsx";
import DigitalMarketingCostSriLanka from "./pages/articles/DigitalMarketingCostSriLanka.tsx";
import DigitalMarketingTrendsSriLanka from "./pages/articles/DigitalMarketingTrendsSriLanka.tsx";
import HowToAdvertiseBusinessSriLanka from "./pages/articles/HowToAdvertiseBusinessSriLanka.tsx";
import AdvertisingReachSriLanka from "./pages/articles/AdvertisingReachSriLanka.tsx";
import EmailMarketingSriLankaComplete2026 from "./pages/articles/EmailMarketingSriLankaComplete2026.tsx";
import SmsMarketingSriLanka600k2026 from "./pages/articles/SmsMarketingSriLanka600k2026.tsx";
import SocialMediaMarketingSriLankaComplete2026 from "./pages/articles/SocialMediaMarketingSriLankaComplete2026.tsx";
import GoogleAdsSriLanka from "./pages/GoogleAdsSriLanka.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import WhyChooseUs from "./pages/WhyChooseUs.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import HotelMarketing from "./pages/HotelMarketing.tsx";
import EducationMarketing from "./pages/EducationMarketing.tsx";
import FinanceMarketing from "./pages/FinanceMarketing.tsx";
import RestaurantMarketing from "./pages/RestaurantMarketing.tsx";
import RealEstateMarketing from "./pages/RealEstateMarketing.tsx";
import FashionMarketing from "./pages/FashionMarketing.tsx";
import AdvertisingSriLanka from "./pages/AdvertisingSriLanka.tsx";
import DigitalMarketingCompanySriLanka from "./pages/DigitalMarketingCompanySriLanka.tsx";
import DigitalMarketingCompaniesSriLanka from "./pages/DigitalMarketingCompaniesSriLanka.tsx";
import MarketingAgenciesSriLanka from "./pages/MarketingAgenciesSriLanka.tsx";
import AdvertisingAgenciesSriLanka from "./pages/AdvertisingAgenciesSriLanka.tsx";
import EventMarketing from "./pages/EventMarketing.tsx";
import StaffRecruitment from "./pages/StaffRecruitment.tsx";
import GraphicDesignService from "./pages/GraphicDesignService.tsx";
import Careers from "./pages/Careers.tsx";

const queryClient = new QueryClient();

const SiteChrome = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith("/admin");
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <ScrollToTop />
      {!isAdmin && <WhatsAppGlobalTracker />}
      {!isAdmin && <ContactCaptureDialog />}
      {!isAdmin && <ContactClickTracker />}


      {!isAdmin && <Navbar />}
      <main className="overflow-x-hidden">{children}</main>
      {!isAdmin && <Footer />}
      {!isAdmin && <WhatsAppCTA />}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SiteChrome>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/email-marketing" element={<EmailMarketing />} />
              <Route path="/sms-marketing" element={<SmsMarketing />} />
              <Route path="/whatsapp-marketing" element={<WhatsAppMarketing />} />
              <Route path="/multi-channel-marketing-sri-lanka" element={<SpecialPackages />} />
              <Route path="/special-advertising-packages" element={<Navigate to="/multi-channel-marketing-sri-lanka" replace />} />
              <Route path="/online-advertising-sri-lanka" element={<OnlineAdvertising />} />
              <Route path="/graphic-designing-in-sri-lanka" element={<GraphicDesign />} />
              <Route path="/e-flyer-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/business-card-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/animated-video-creation-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/logo-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/letterhead-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/hoarding-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/signboard-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/invitation-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/brochure-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/company-profile-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/presentation-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/photo-editing-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/social-media-post-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/menu-card-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/label-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/package-design-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/video-editing-sri-lanka" element={<GraphicDesignService />} />
              <Route path="/seo-sri-lanka" element={<SeoServices />} />
              <Route path="/website-design-sri-lanka" element={<WebsiteDesign />} />
              <Route path="/lead-generation-sri-lanka" element={<LeadGeneration />} />
              <Route path="/social-media-marketing-sri-lanka" element={<SocialMediaMarketing />} />
              <Route path="/web-banner-advertising-sri-lanka" element={<WebBannerAdvertising />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/hotel-marketing-sri-lanka" element={<HotelMarketing />} />
              <Route path="/education-marketing-sri-lanka" element={<EducationMarketing />} />
              <Route path="/finance-marketing-sri-lanka" element={<FinanceMarketing />} />
              <Route path="/restaurant-marketing-sri-lanka" element={<RestaurantMarketing />} />
              <Route path="/real-estate-marketing-sri-lanka" element={<RealEstateMarketing />} />
              <Route path="/fashion-marketing-sri-lanka" element={<FashionMarketing />} />
              <Route path="/advertising-sri-lanka" element={<AdvertisingSriLanka />} />
              <Route path="/digital-marketing-company-in-sri-lanka" element={<DigitalMarketingCompanySriLanka />} />
              <Route path="/digital-marketing-company-sri-lanka" element={<Navigate to="/digital-marketing-company-in-sri-lanka" replace />} />
              <Route path="/digital-marketing-companies-sri-lanka" element={<DigitalMarketingCompaniesSriLanka />} />
              <Route path="/marketing-agencies-sri-lanka" element={<MarketingAgenciesSriLanka />} />
              <Route path="/advertising-agencies-sri-lanka" element={<AdvertisingAgenciesSriLanka />} />
              <Route path="/how-to-choose-digital-marketing-agency-sri-lanka" element={<HowToChooseDigitalMarketingAgency />} />
              <Route path="/email-vs-sms-vs-whatsapp-marketing-sri-lanka" element={<EmailVsSmsVsWhatsApp />} />
              <Route path="/digital-marketing-cost-sri-lanka" element={<DigitalMarketingCostSriLanka />} />
              <Route path="/digital-marketing-trends-sri-lanka" element={<DigitalMarketingTrendsSriLanka />} />
              <Route path="/event-marketing-sri-lanka" element={<EventMarketing />} />
              <Route path="/staff-recruitment-campaigns-sri-lanka" element={<StaffRecruitment />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/google-ads-sri-lanka" element={<GoogleAdsSriLanka />} />
              <Route path="/why-email-marketing-is-important" element={<WhyEmailMarketingIsImportant />} />
              <Route path="/why-you-need-email-marketing" element={<WhyYouNeedEmailMarketing />} />
              <Route path="/best-seo-services-sri-lanka" element={<BestSeoServicesSriLanka />} />
              <Route path="/sms-marketing-in-sri-lanka" element={<SmsMarketingInSriLanka />} />
              <Route path="/enable-missing-images-to-display" element={<EnableMissingImages />} />
              <Route path="/multi-channel-marketing-in-sri-lanka" element={<MultiChannelMarketingSriLanka />} />
              <Route path="/future-of-email-marketing-sri-lanka" element={<FutureEmailMarketingSriLanka />} />
              <Route path="/email-marketing-most-powerful-tool-sri-lanka" element={<EmailMarketingPowerfulTool />} />
              <Route path="/sms-marketing-driving-engagement-sri-lanka" element={<SmsMarketingDrivingEngagement />} />
              <Route path="/whatsapp-marketing-future-sri-lanka" element={<WhatsAppMarketingFuture />} />
              <Route path="/multi-channel-marketing-maximum-reach-sri-lanka" element={<MultiChannelMarketingMaxReach />} />
              <Route path="/seo-why-it-matters-sri-lanka" element={<SeoWhyItMatters />} />
              <Route path="/lead-generation-get-more-customers-sri-lanka" element={<LeadGenerationGetMoreCustomers />} />
              <Route path="/social-media-marketing-why-your-business-needs-it-sri-lanka" element={<SocialMediaMarketingWhyYouNeedIt />} />
              <Route path="/hotel-marketing-increase-bookings-sri-lanka" element={<HotelMarketingIncreaseBookings />} />
              <Route path="/education-marketing-attract-students-sri-lanka" element={<EducationMarketingAttractStudents />} />
              <Route path="/finance-marketing-generate-leads-sri-lanka" element={<FinanceMarketingGenerateLeads />} />
              <Route path="/restaurant-marketing-attract-customers-sri-lanka" element={<RestaurantMarketingAttractCustomers />} />
              <Route path="/real-estate-marketing-generate-property-leads-sri-lanka" element={<RealEstateMarketingPropertyLeads />} />
              <Route path="/fashion-marketing-grow-brand-sri-lanka" element={<FashionMarketingGrowBrand />} />
              <Route path="/best-advertising-company-sri-lanka" element={<BestAdvertisingCompanySriLanka />} />
              <Route path="/what-is-advertising-sri-lanka" element={<WhatIsAdvertisingSriLanka />} />
              <Route path="/types-of-advertising-sri-lanka" element={<TypesOfAdvertisingSriLanka />} />
              <Route path="/advertising-cost-sri-lanka" element={<AdvertisingCostSriLanka />} />
              <Route path="/how-to-advertise-business-sri-lanka" element={<HowToAdvertiseBusinessSriLanka />} />
              <Route path="/advertising-reach-sri-lanka" element={<AdvertisingReachSriLanka />} />
              <Route path="/digital-advertising-sri-lanka-complete-guide" element={<DigitalAdvertisingGuide />} />
              <Route path="/online-vs-traditional-advertising-sri-lanka" element={<OnlineVsTraditionalAdvertising />} />
              <Route path="/google-ads-sri-lanka-cost-guide" element={<GoogleAdsCostGuide />} />
              <Route path="/email-marketing-guide-sri-lanka" element={<EmailMarketingGuide />} />
              <Route path="/email-marketing-pricing-sri-lanka" element={<EmailMarketingPricing />} />
              <Route path="/email-marketing-industries-sri-lanka" element={<EmailMarketingIndustries />} />
              <Route path="/email-marketing-vs-social-media-sri-lanka" element={<EmailVsSocialMedia />} />
              <Route path="/multi-channel-vs-facebook-sri-lanka" element={<MultiChannelVsFacebook />} />
              <Route path="/finditlk-email-marketing-conversions-sri-lanka" element={<FinditlkEmailConversions />} />
              <Route path="/education-email-marketing-enrollments-sri-lanka" element={<EducationEmailEnrollments />} />
              <Route path="/real-estate-email-marketing-leads-sri-lanka" element={<RealEstateEmailLeads />} />
              <Route path="/hotel-email-marketing-bookings-sri-lanka" element={<HotelEmailBookings />} />
              <Route path="/ecommerce-email-marketing-sales-sri-lanka" element={<EcommerceEmailSales />} />
              <Route path="/recruitment-email-marketing-hiring-sri-lanka" element={<RecruitmentEmailHiring />} />
              <Route path="/healthcare-email-marketing-engagement-sri-lanka" element={<HealthcareEmailEngagement />} />
              <Route path="/automotive-email-marketing-sales-sri-lanka" element={<AutomotiveEmailSales />} />
              <Route path="/event-email-marketing-attendance-sri-lanka" element={<EventEmailAttendance />} />
              <Route path="/lead-generation-agency-sri-lanka" element={<LeadGenAgency />} />
              <Route path="/multi-channel-email-campaigns-sri-lanka" element={<MultiChannelCampaignLandingPage />} />
              <Route path="/best-sms-marketing-company-sri-lanka" element={<BestSmsMarketingCompanySriLanka />} />
              <Route path="/best-seo-company-sri-lanka" element={<BestSeoCompanySriLanka />} />
              <Route path="/seo-cost-sri-lanka" element={<SeoCostSriLanka />} />
              <Route path="/how-seo-works-sri-lanka" element={<HowSeoWorksSriLanka />} />
              <Route path="/best-social-media-marketing-company-sri-lanka" element={<BestSocialMediaMarketingCompanySriLanka />} />
              <Route path="/social-media-marketing-cost-sri-lanka" element={<SocialMediaMarketingCostSriLanka />} />
              <Route path="/how-social-media-marketing-works-sri-lanka" element={<HowSocialMediaMarketingWorksSriLanka />} />
              <Route path="/how-graphic-design-helps-business-sri-lanka" element={<HowGraphicDesignHelpsBusinessSriLanka />} />
              <Route path="/how-lead-generation-works-sri-lanka" element={<HowLeadGenerationWorksSriLanka />} />
              <Route path="/email-subject-lines-guide-sri-lanka" element={<EmailSubjectLinesGuide />} />
              <Route path="/how-email-marketing-works-sri-lanka" element={<HowEmailMarketingWorks />} />
              <Route path="/email-marketing-roi-calculation-sri-lanka" element={<EmailMarketingRoiCalculation />} />
              <Route path="/how-hotel-marketing-works-sri-lanka" element={<HowHotelMarketingWorks />} />
              <Route path="/hotel-marketing-cost-sri-lanka" element={<HotelMarketingCost />} />
              <Route path="/best-hotel-marketing-agency-sri-lanka" element={<BestHotelMarketingAgency />} />
              <Route path="/digital-marketing-brand-awareness-sri-lanka" element={<DigitalMarketingBrandAwareness />} />
              <Route path="/direct-marketing-strategy-sri-lanka" element={<DirectMarketingStrategy />} />
              <Route path="/fast-direct-marketing-sri-lanka" element={<FastDirectMarketing />} />
              <Route path="/hotel-digital-marketing-case-studies-sri-lanka" element={<HotelDigitalMarketingCaseStudies />} />
              <Route path="/real-estate-marketing-case-studies-sri-lanka" element={<RealEstateMarketingCaseStudies />} />
              <Route path="/finance-marketing-case-studies-sri-lanka" element={<FinanceMarketingCaseStudies />} />
              <Route path="/fashion-marketing-case-studies-sri-lanka" element={<FashionMarketingCaseStudies />} />
              <Route path="/event-marketing-case-studies-sri-lanka" element={<EventMarketingCaseStudies />} />
              <Route path="/staff-recruitment-case-studies-sri-lanka" element={<StaffRecruitmentCaseStudies />} />
              <Route path="/restaurant-marketing-case-studies-sri-lanka" element={<RestaurantMarketingCaseStudies />} />
              <Route path="/education-marketing-case-studies-sri-lanka" element={<EducationMarketingCaseStudies />} />
              <Route path="/seo-investment-long-term-strategy-sri-lanka" element={<SeoInvestmentSriLanka />} />
              <Route path="/seo-consultant-sri-lanka" element={<SeoConsultantSriLanka />} />
              <Route path="/seo-specialist-sri-lanka" element={<SeoSpecialistSriLanka />} />
              <Route path="/seo-services-sri-lanka" element={<SeoServicesSriLanka />} />
              <Route path="/seo-vs-paid-ads-sri-lanka" element={<SeoVsPaidAdsSriLanka />} />
              <Route path="/rank-number-one-google-sri-lanka" element={<RankNumberOneSriLanka />} />
              <Route path="/seo-case-studies-sri-lanka" element={<SeoCaseStudiesSriLanka />} />
              <Route path="/what-is-direct-marketing-sri-lanka" element={<WhatIsDirectMarketing />} />
              <Route path="/best-digital-marketing-agency-sri-lanka" element={<BestDigitalMarketingAgency />} />
              <Route path="/best-direct-marketing-company-sri-lanka" element={<BestDirectMarketingCompany />} />
              <Route path="/website-design-guide-sri-lanka" element={<WebsiteDesignGuide />} />
              <Route path="/best-website-design-company-sri-lanka" element={<BestWebsiteDesignCompany />} />
              <Route path="/best-google-ads-agency-sri-lanka" element={<BestGoogleAdsAgency />} />
              <Route path="/best-lead-generation-company-sri-lanka" element={<BestLeadGenerationCompany />} />
              <Route path="/lead-generation-cost-sri-lanka" element={<LeadGenerationCost />} />
              <Route path="/email-marketing-sri-lanka-complete-guide-2026" element={<EmailMarketingSriLankaComplete2026 />} />
              <Route path="/sms-marketing-sri-lanka-600000-customers-2026" element={<SmsMarketingSriLanka600k2026 />} />
              <Route path="/social-media-marketing-sri-lanka-complete-guide-2026" element={<SocialMediaMarketingSriLankaComplete2026 />} />
              
              
              <Route path="*" element={<NotFound />} />
            </Routes>
        </SiteChrome>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
