import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { buildJobSchemaDescription, getJob, jobs, JOB_LOCATION } from "@/data/jobs";

const SITE_URL = "https://buzzconnect.lk";
const WA_NUMBER = "94771437707";

const JobPage = () => {
  const { slug } = useParams();
  const job = getJob(slug);

  if (!job) return <Navigate to="/careers" replace />;

  const url = `${SITE_URL}/careers/${job.slug}`;
  const applyMessage = encodeURIComponent(
    `Hi BuzzConnect, I'd like to apply for the ${job.title} position (${JOB_LOCATION}).\n\nName: \nEmail: \nExperience: \nPortfolio/CV link: `,
  );
  const applyHref = `https://wa.me/${WA_NUMBER}?text=${applyMessage}`;

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: buildJobSchemaDescription(job),
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    employmentType: job.employmentType,
    identifier: {
      "@type": "PropertyValue",
      name: "BuzzConnect",
      value: job.identifier,
    },
    url,
    directApply: true,
    hiringOrganization: {
      "@type": "Organization",
      name: "BuzzConnect",
      sameAs: SITE_URL,
      logo: `${SITE_URL}/favicon.ico`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Colombo",
        addressRegion: "Western Province",
        addressCountry: "LK",
      },
    },
    applicantLocationRequirements: { "@type": "Country", name: "Sri Lanka" },
    industry: "Digital Marketing",
  };

  const otherJobs = jobs.filter((j) => j.slug !== job.slug);

  return (
    <>
      <SEOHead
        title={job.seoTitle}
        description={job.metaDescription}
        canonical={`/careers/${job.slug}`}
        keywords={job.keywords}
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Careers", url: "/careers" },
          { name: job.title, url: `/careers/${job.slug}` },
        ]}
        jsonLd={[jobPostingSchema]}
      />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-14 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(var(--accent),0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <nav aria-label="Breadcrumb" className="py-3">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-primary-foreground/60 hover:text-accent text-xs sm:text-sm">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/40" />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/careers" className="text-primary-foreground/60 hover:text-accent text-xs sm:text-sm">Careers</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/40" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-accent text-xs sm:text-sm font-medium">{job.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              {job.h1}
            </h1>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-light/20 border border-navy-light/30 text-primary-foreground/80 text-sm">
                <MapPin className="w-4 h-4 text-accent" /> {JOB_LOCATION}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-light/20 border border-navy-light/30 text-primary-foreground/80 text-sm">
                <Briefcase className="w-4 h-4 text-accent" /> {job.employmentLabel}
              </span>
            </div>
            <p className="text-primary-foreground/75 mb-8">{job.lead[0]}</p>
            <a
              href={applyHref}
              target="_blank"
              rel="noopener noreferrer"
              data-selected-service={`career: ${job.title}`}
              data-wa-placement="job_hero"
            >
              <Button variant="hero" size="lg" className="text-lg px-8">
                Apply Now via WhatsApp <MessageCircle className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {job.title} at BuzzConnect
            </h2>
            {job.lead.map((p, i) => (
              <p key={i} className="text-muted-foreground mb-4">{p}</p>
            ))}

            {job.sections.map((section, i) => (
              <div key={i} className="mt-10">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3">
                  {section.heading}
                </h3>
                {section.intro && <p className="text-muted-foreground mb-3">{section.intro}</p>}
                {section.bullets && (
                  <ul className="space-y-2 mb-3">
                    {section.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-foreground/90">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.paragraphs?.map((p, pi) => (
                  <p key={pi} className="text-muted-foreground mb-3">{p}</p>
                ))}
              </div>
            ))}

            {/* Location / Employment */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-border bg-card">
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">{JOB_LOCATION}</p>
              </div>
              <div className="p-5 rounded-xl border border-border bg-card">
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">Employment Type</h3>
                <p className="text-muted-foreground">{job.employmentLabel}</p>
              </div>
            </div>

            {/* Related services */}
            <div className="mt-10">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Work You'll Be Part Of
              </h3>
              <div className="flex flex-wrap gap-3">
                {job.relatedServices.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-foreground hover:border-accent hover:text-accent transition-colors text-sm"
                  >
                    {s.label} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Apply */}
            <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">How to Apply</h2>
              <p className="text-muted-foreground mb-6">
                Send your CV and a short introduction (plus your portfolio, if relevant) through WhatsApp and our team will get back to you.
              </p>
              <a
                href={applyHref}
                target="_blank"
                rel="noopener noreferrer"
                data-selected-service={`career: ${job.title}`}
                data-wa-placement="job_footer"
              >
                <Button variant="hero" size="lg" className="text-lg px-8">
                  Apply Now via WhatsApp <MessageCircle className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other jobs */}
      <section className="py-14 gradient-hero">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-8 text-center">
            Other Career Opportunities
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {otherJobs.map((j) => (
              <Link
                key={j.slug}
                to={`/careers/${j.slug}`}
                className="p-5 rounded-xl border border-navy-light/30 bg-navy-light/10 hover:border-accent transition-colors"
              >
                <h3 className="font-heading text-lg font-bold text-primary-foreground mb-1">{j.title}</h3>
                <p className="text-primary-foreground/60 text-sm">{j.cardBlurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobPage;
