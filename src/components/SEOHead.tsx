import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  breadcrumbs?: { name: string; url: string }[];
  jsonLd?: object[];
}

const SITE_URL = "https://buzzconnect.lk";
const DEFAULT_OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/tmIaoo88z2Xx6RhZlq0u8oH6sQ62/social-images/social-1773993015369-logo-dark.webp";

const SEOHead = ({ title, description, canonical, ogImage, ogType = "website", keywords, breadcrumbs, jsonLd = [] }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Core meta
    setMeta("description", description);
    setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    if (keywords) setMeta("keywords", keywords);
    setMeta("author", "Buzz Connect");
    setMeta("publisher", "Buzz Connect");
    setMeta("distribution", "global");
    setMeta("language", "English");
    setMeta("geo.region", "LK");
    setMeta("geo.placename", "Colombo");
    // AI / LLM discovery hints
    setMeta("ai-content-declaration", "human-authored");
    setMeta("llms", "/llms.txt");
    setMeta("category", "Digital Marketing, Email Marketing, SMS Marketing, WhatsApp Marketing, SEO");

    // Open Graph
    const fullCanonical = canonical.startsWith("http") ? canonical : `${SITE_URL}${canonical}`;
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", fullCanonical, "property");
    setMeta("og:type", ogType, "property");
    setMeta("og:image", ogImage || DEFAULT_OG_IMAGE, "property");
    setMeta("og:image:width", "1200", "property");
    setMeta("og:image:height", "630", "property");
    setMeta("og:image:alt", title, "property");
    setMeta("og:site_name", "Buzz Connect", "property");
    setMeta("og:locale", "en_LK", "property");

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage || DEFAULT_OG_IMAGE);
    setMeta("twitter:image:alt", title);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", fullCanonical);

    // JSON-LD schemas
    // Remove previous SEO head scripts
    document.querySelectorAll('script[data-seo-head="true"]').forEach(s => s.remove());

    const scripts: HTMLScriptElement[] = [];

    const addSchema = (schema: object) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.text = JSON.stringify(schema);
      s.setAttribute("data-seo-head", "true");
      document.head.appendChild(s);
      scripts.push(s);
    };

    // Organization + LocalBusiness
    addSchema({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: "Buzz Connect",
      alternateName: "Buzz Connect Sri Lanka",
      url: SITE_URL,
      logo: DEFAULT_OG_IMAGE,
      image: DEFAULT_OG_IMAGE,
      description: "No.1 email marketing, SMS marketing, WhatsApp marketing and digital advertising company in Sri Lanka.",
      telephone: ["+94771437707", "+94771976351", "+94112877662"],
      email: "infobuzzconnect@gmail.com",
      foundingDate: "2014",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Colombo",
        addressRegion: "Western Province",
        addressCountry: "LK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "6.9271",
        longitude: "79.8612",
      },
      areaServed: {
        "@type": "Country",
        name: "Sri Lanka",
      },
      sameAs: [
        "https://www.facebook.com/buzzconnect/",
        "https://www.instagram.com/buzzconnect/",
        "https://www.linkedin.com/in/buzz-connect-93330ba1/",
      ],
      priceRange: "LKR 6,000 - LKR 50,000",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "150",
        bestRating: "5",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Marketing Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Email Marketing Sri Lanka" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SMS Marketing Sri Lanka" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "WhatsApp Marketing Sri Lanka" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services Sri Lanka" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design Sri Lanka" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Graphic Design Sri Lanka" } },
        ],
      },
    });

    // Speakable (helps voice assistants / AI summarizers pick key content)
    addSchema({
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: fullCanonical,
      name: title,
      description,
      inLanguage: "en-LK",
      isPartOf: { "@id": `${SITE_URL}/#organization` },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", "main p"],
      },
    });

    // Breadcrumbs
    if (breadcrumbs && breadcrumbs.length > 0) {
      addSchema({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((bc, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: bc.name,
          item: bc.url.startsWith("http") ? bc.url : `${SITE_URL}${bc.url}`,
        })),
      });
    }

    // Additional JSON-LD
    jsonLd.forEach(addSchema);

    return () => {
      scripts.forEach((s) => {
        if (s.parentNode) s.parentNode.removeChild(s);
      });
    };
  }, [title, description, canonical, ogImage, ogType, keywords, breadcrumbs, jsonLd]);

  return null;
};

export default SEOHead;
