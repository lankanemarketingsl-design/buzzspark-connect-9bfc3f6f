import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageSquare, Smartphone, PhoneCall, Send, Globe, TrendingUp, Zap } from "lucide-react";
import HeroDistributionCard from "@/components/home/HeroDistributionCard";

const heroBg = "/hero-bg.webp";

const stats = [
  { num: "350K+", label: "Email Database" },
  { num: "25K+", label: "Campaigns Sent" },
  { num: "1,500+", label: "Happy Clients" },
  { num: "10+", label: "Years Experience" },
];

const channels = [
  { icon: Mail, label: "Email", delay: 0.6 },
  { icon: MessageSquare, label: "WhatsApp", delay: 0.7 },
  { icon: Smartphone, label: "SMS", delay: 0.8 },
  { icon: Globe, label: "Findit.lk", delay: 0.9 },
];


const HeroSection = () => {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[65vh] flex items-center overflow-hidden">
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-hero opacity-[0.93]" />
      
      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-20 right-[20%] w-72 h-72 rounded-full blur-[120px] opacity-20"
        style={{ background: 'hsl(var(--accent))' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-[5%] w-56 h-56 rounded-full blur-[100px] opacity-15"
        style={{ background: 'hsl(var(--teal))' }}
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Floating icons - larger, more dramatic */}
      <motion.div
        className="absolute top-28 right-[12%] text-accent/10 hidden md:block"
        animate={{ y: [-15, 15, -15], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Send size={56} strokeWidth={1.5} />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-[8%] text-teal/10 hidden md:block"
        animate={{ y: [12, -12, 12], rotate: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <TrendingUp size={44} strokeWidth={1.5} />
      </motion.div>
      <motion.div
        className="absolute top-[55%] right-[6%] text-accent/8 hidden lg:block"
        animate={{ y: [-10, 14, -10], x: [-5, 5, -5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Zap size={38} strokeWidth={1.5} />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-8 sm:py-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
        <div className="lg:flex-1 min-w-0">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/10 text-accent border border-accent/20 mb-4 sm:mb-5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              No.1 Multi-Channel Marketing in Sri Lanka
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-foreground leading-[1.08] mb-4 sm:mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="font-heading">#1 Email Marketing, SMS Marketing & WhatsApp Marketing Company in Sri Lanka —</span>{" "}
            <span className="text-gradient-hero text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">reach 1,000,000+ real people in 24 hours, on every channel</span>.
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base text-primary-foreground/65 mb-5 sm:mb-6 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Buzz Connect is a leading multi-channel marketing platform in Sri Lanka, offering Email Marketing, SMS Marketing, and WhatsApp Marketing solutions combined with Findit.lk to help businesses expand reach, improve customer engagement, and drive targeted marketing results.
          </motion.p>

          {/* Channel pills */}
          <motion.div
            className="flex flex-wrap gap-2 sm:gap-3 mb-5 sm:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {channels.map((ch) => (
              <motion.div
                key={ch.label}
                className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: ch.delay }}
              >
                <ch.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                <span className="text-xs sm:text-sm font-medium text-primary-foreground/80">{ch.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <a data-selected-service="your services" href="https://wa.me/94771437707?text=Hi%20Buzz%20Connect%2C%20I%27m%20interested%20in%20your%20marketing%20services." target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="w-full sm:w-auto text-base px-8 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300">
                Start Your Campaign <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Link to="/contact-us">
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto text-base px-8 backdrop-blur-md border-primary-foreground/20 hover:border-primary-foreground/40 transition-all duration-300">
                <PhoneCall className="mr-2 w-4 h-4" /> Free Consultation
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-primary-foreground/8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center sm:text-left"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-accent">{stat.num}</div>
                <div className="text-[10px] sm:text-xs text-primary-foreground/45 mt-1.5 uppercase tracking-widest font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

          {/* Right side: animated content distribution card */}
          <motion.div
            className="mt-8 lg:mt-0 lg:w-[440px] xl:w-[500px] shrink-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <HeroDistributionCard />
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
