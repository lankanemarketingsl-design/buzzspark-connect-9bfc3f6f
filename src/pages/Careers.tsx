import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, TrendingUp, Lightbulb, Users, Target, MessageCircle, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { jobs } from "@/data/jobs";
import Breadcrumbs from "@/components/Breadcrumbs";

const whyJoin = [
  { icon: Rocket, text: "Fast career growth opportunities" },
  { icon: TrendingUp, text: "Hands-on experience with real campaigns" },
  { icon: Lightbulb, text: "Work with leading brands across multiple industries" },
  { icon: Users, text: "Young, energetic and supportive team" },
  { icon: Target, text: "Performance-driven environment" },
];

const roles = [
  "Digital Marketing & Performance Ads",
  "Social Media Management",
  "Graphic Design & Creative Work",
  "Sales & Business Development",
  "Content Creation & Strategy",
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Careers", url: "/careers" },
];

const Careers = () => {
  return (
    <>
      <SEOHead
        title="Digital Marketing Jobs in Sri Lanka | Careers at BuzzConnect"
        description="Explore open digital marketing jobs and internships in Sri Lanka at BuzzConnect — Digital Marketing Specialist, Video Editor, Content Creator and marketing internships in Colombo."
        canonical="/careers"
        keywords="careers BuzzConnect, digital marketing jobs Sri Lanka, marketing internships Sri Lanka"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-16 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(var(--accent),0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Digital Marketing Jobs &amp; <span className="text-accent">Careers in Sri Lanka</span>
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/80 mb-6">
              Build Your Career in Digital Marketing
            </p>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              BuzzConnect is a fast-growing digital marketing agency in Sri Lanka, helping brands grow through performance marketing, social media, and creative strategy. We're always looking for passionate, talented individuals who want to grow in the digital space.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Open Vacancies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Current Openings
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore our open roles in Colombo, Sri Lanka. Apply in seconds via WhatsApp.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {jobs.map((job, i) => (
              <motion.div
                key={job.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col p-6 rounded-xl border border-border bg-card hover:border-accent transition-colors"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-accent mb-2">
                  {job.employmentLabel} · Colombo
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{job.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 flex-1">{job.cardBlurb}</p>
                <Link to={`/careers/${job.slug}`} className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
                  View Job <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Join BuzzConnect?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              At BuzzConnect, you don't just work — you learn, experiment, and grow fast.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whyJoin.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card"
              >
                <item.icon className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <p className="text-foreground font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-6 text-center">
              Who We're Looking For
            </h2>
            <p className="text-primary-foreground/70 text-center mb-8">
              We're open to individuals with skills or interest in:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {roles.map((role, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-lg border border-navy-light/30 bg-navy-light/10"
                >
                  <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-primary-foreground/90 font-medium">{role}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-primary-foreground/70 text-center italic">
              Whether you're experienced or just starting out, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Internships */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Internships & Freshers
            </h2>
            <p className="text-muted-foreground mb-4">We also welcome:</p>
            <div className="space-y-3 mb-6 text-left max-w-md mx-auto">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10">
                <span className="text-accent text-xl">🎓</span>
                <span className="text-foreground">Students looking for internships</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10">
                <span className="text-accent text-xl">🌟</span>
                <span className="text-foreground">Freshers who want to start a career in digital marketing</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              High-performing candidates may be offered full-time opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              How to Apply
            </h2>
            <div className="rounded-2xl border border-navy-light/30 bg-navy-light/10 p-8 mb-8">
              <MessageCircle className="w-10 h-10 text-accent mx-auto mb-4" />
              <p className="text-primary-foreground/80 mb-4">Send your details via WhatsApp:</p>
              <ul className="text-left max-w-sm mx-auto space-y-2 text-primary-foreground/70 mb-6">
                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-accent shrink-0" /> Full Name</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-accent shrink-0" /> Area of Interest (e.g. Marketing / Design / Sales)</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-accent shrink-0" /> Experience (short summary or "Fresher")</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-accent shrink-0" /> Attach your CV</li>
              </ul>
              <a data-selected-service="career opportunities"
                href="https://wa.me/94771437707?text=Hi%20BuzzConnect%2C%20I%27m%20interested%20in%20a%20career%20opportunity.%0A%0AName%3A%20%0AArea%20of%20Interest%3A%20%0AExperience%3A%20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg" className="text-lg px-8">
                  Apply via WhatsApp <MessageCircle className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Careers;
