import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, MessageSquare, Smartphone, Globe, Search, PenTool, Monitor, Package, ArrowRight, Target, Share2, Zap, Radar } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Brand Blast 360",
    bullets: ["750,000 email subscribers", "Facebook + LinkedIn exposure", "Findit.lk featured ads", "Remarketing 100K reach", "988,000+ total verified reach"],
    description: "One campaign. Five channels. Maximum reach. Starting LKR 15,000.",
    path: "/brand-blast-360",
    highlight: true,
  },
  {
    icon: Mail,
    title: "Email Marketing",
    bullets: ["350,000+ active email database", "50,000+ VIP audience reach", "10,000+ highly targeted databases", "Bulk email campaigns"],
    description: "Ideal for promotions, education intakes, product launches, and brand awareness.",
    path: "/email-marketing",
    highlight: true,
  },
  {
    icon: Smartphone,
    title: "SMS Marketing",
    bullets: ["Corporate database – 300,000", "Top marketers – 200,000", "All Island reach – 600,000", "Promotional & transactional SMS"],
    description: "Best for urgent promotions, alerts, and time-sensitive campaigns.",
    path: "/sms-marketing",
    highlight: true,
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Marketing",
    bullets: ["Bulk WhatsApp campaigns", "Targeted audience segmentation", "Rich media (images, videos, flyers)", "High conversion rates"],
    description: "Perfect for personalized communication and lead generation.",
    path: "/whatsapp-marketing",
    highlight: true,
  },
  {
    icon: Package,
    title: "Multi Channel Marketing",
    bullets: ["Reach 450,000 audience", "Reach 550,000 audience", "Reach 575,000 audience", "Reach 625,000 audience"],
    description: "Ideal for both SMEs and large-scale businesses.",
    path: "/multi-channel-marketing-sri-lanka",
    highlight: true,
  },
  {
    icon: Target,
    title: "Lead Generation",
    bullets: ["Multi-channel lead campaigns", "Database targeting & segmentation", "Landing page creation", "High-quality business leads"],
    description: "Generate high-quality leads and grow your customer base.",
    path: "/lead-generation-sri-lanka",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    bullets: ["Facebook & Instagram advertising", "Content creation & post design", "TikTok & LinkedIn campaigns", "Campaign management & reporting"],
    description: "Grow your brand with targeted social media campaigns.",
    path: "/social-media-marketing-sri-lanka",
  },
  {
    icon: Globe,
    title: "Web Advertising & Banners",
    bullets: ["Banner placements", "Discount coupons", "Web advertising placements"],
    description: "Promote your brand through banners, coupons, and web ads.",
    path: "/online-advertising-sri-lanka",
  },
  {
    icon: PenTool,
    title: "Graphic Designing",
    bullets: ["E-flyers & artwork", "Social media creatives", "Animated videos"],
    description: "Professional design including e-flyers, creatives, and videos.",
    path: "/graphic-designing-in-sri-lanka",
  },
  {
    icon: Search,
    title: "SEO Services",
    bullets: ["Improve Google rankings", "Increase website traffic", "Generate more leads"],
    description: "Improve rankings, increase traffic, and generate leads.",
    path: "/seo-sri-lanka",
  },
  {
    icon: Monitor,
    title: "Website Designing",
    bullets: ["Professional websites", "Enhanced online presence", "Increased credibility"],
    description: "Build professional websites that enhance your credibility.",
    path: "/website-design-sri-lanka",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-background relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-3">Our Services</span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Complete Digital Marketing Solutions
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            From email marketing Sri Lanka to SMS marketing Sri Lanka and WhatsApp marketing Sri Lanka — everything you need to grow your business
          </p>
        </motion.div>

        {/* Top 4 highlighted */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
          {services.filter(s => s.highlight).map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={s.path}
                className="group block p-5 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-400 border border-accent/15 hover:border-accent h-full relative overflow-hidden hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute top-0 right-0 bg-accent text-primary text-[9px] font-bold uppercase px-2.5 py-0.5 rounded-bl-lg tracking-wider">
                  Popular
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4 group-hover:shadow-glow group-hover:scale-105 transition-all duration-300">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2 text-lg">{s.title}</h3>
                  <ul className="space-y-1.5 mb-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-1.5">
                        <span className="text-accent mt-1 text-[8px]">●</span> {b}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground/60 italic">{s.description}</p>
                  <span className="inline-flex items-center mt-3 text-sm font-bold text-accent group-hover:gap-1.5 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Remaining services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.filter(s => !s.highlight).map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={s.path}
                className="group block p-4 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-400 border border-border hover:border-accent/25 h-full hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-shadow duration-300">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-semibold text-foreground mb-1.5 text-base">{s.title}</h3>
                    <ul className="space-y-1 mb-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="text-sm text-muted-foreground leading-relaxed">• {b}</li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground/60 italic">{s.description}</p>
                    <span className="inline-flex items-center mt-2 text-sm font-semibold text-accent group-hover:gap-1.5 transition-all">
                      Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
