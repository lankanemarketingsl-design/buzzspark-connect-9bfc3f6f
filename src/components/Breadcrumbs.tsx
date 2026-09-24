import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { graphicDesignServices } from "@/data/graphicDesignServices";

const pathLabels: Record<string, string> = {
  "/email-marketing": "Email Marketing",
  "/sms-marketing": "SMS Marketing",
  "/whatsapp-marketing": "WhatsApp Marketing",
  "/lead-generation-sri-lanka": "Lead Generation",
  "/lead-follow-up-services-sri-lanka": "Lead Follow-Up Services",
  "/social-media-marketing-sri-lanka": "Social Media Marketing",
  "/multi-channel-marketing-sri-lanka": "Multi-Channel Marketing",
  "/online-advertising-sri-lanka": "Online Advertising",
  "/graphic-designing-in-sri-lanka": "Graphic Design",
  "/seo-sri-lanka": "SEO Services",
  "/website-design-sri-lanka": "Website Design",
  "/resources": "Resources",
  "/why-email-marketing-is-important": "Why Email Marketing Is Important",
  "/why-you-need-email-marketing": "Why You Need Email Marketing",
  "/best-seo-services-sri-lanka": "Best SEO Services Sri Lanka",
  "/sms-marketing-in-sri-lanka": "SMS Marketing in Sri Lanka",
  "/enable-missing-images-to-display": "Enable Missing Images",
  "/multi-channel-marketing-in-sri-lanka": "Multi-Channel Marketing in Sri Lanka",
  "/special-advertising-packages": "Special Packages",
  // Industry pages
  "/hotel-marketing-sri-lanka": "Hotel & Travel Marketing",
  "/education-marketing-sri-lanka": "Education Marketing",
  "/finance-marketing-sri-lanka": "Finance & Credit Marketing",
  "/restaurant-marketing-sri-lanka": "Restaurant & Retail Marketing",
  "/real-estate-marketing-sri-lanka": "Real Estate Marketing",
  "/fashion-marketing-sri-lanka": "Fashion & Clothing Marketing",
  "/event-marketing-sri-lanka": "Event Marketing",
  "/advertising-sri-lanka": "Advertising",
  "/careers": "Careers",
  "/staff-recruitment-campaigns-sri-lanka": "Staff Recruitment Campaigns",
  "/home-services-construction-marketing-sri-lanka": "Home Services & Construction Marketing",
};

// Build graphic design service labels from data
const graphicDesignLabels: Record<string, string> = {};
graphicDesignServices.forEach((s) => {
  graphicDesignLabels[`/${s.slug}`] = s.title;
});

const articlePaths = [
  "/why-email-marketing-is-important",
  "/why-you-need-email-marketing",
  "/best-seo-services-sri-lanka",
  "/sms-marketing-in-sri-lanka",
  "/enable-missing-images-to-display",
  "/multi-channel-marketing-in-sri-lanka",
];

const Breadcrumbs = () => {
  const location = useLocation();
  const path = location.pathname;

  const isGraphicDesignService = !!graphicDesignLabels[path];
  const currentLabel = pathLabels[path] || graphicDesignLabels[path];

  if (!currentLabel || path === "/") return null;

  const isArticle = articlePaths.includes(path);

  return (
    <nav className="container mx-auto px-4 py-3" aria-label="Breadcrumb">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="text-primary-foreground/60 hover:text-accent text-xs sm:text-sm">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-primary-foreground/40" />
          {isArticle && (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/resources" className="text-primary-foreground/60 hover:text-accent text-xs sm:text-sm">Resources</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-primary-foreground/40" />
            </>
          )}
          {isGraphicDesignService && (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/graphic-designing-in-sri-lanka" className="text-primary-foreground/60 hover:text-accent text-xs sm:text-sm">Graphic Design</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-primary-foreground/40" />
            </>
          )}
          <BreadcrumbItem>
            <BreadcrumbPage className="text-accent text-xs sm:text-sm font-medium">{currentLabel}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  );
};

export default Breadcrumbs;
