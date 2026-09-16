import { motion } from "framer-motion";
import { Shield, Clock, Users, TrendingUp, CheckCircle, Globe } from "lucide-react";

const badges = [
  { icon: Shield, label: "100% Data Safe" },
  { icon: Clock, label: "24hr Campaign Launch" },
  { icon: Users, label: "1,500+ Happy Clients" },
  { icon: Globe, label: "Exclusive Findit.lk Integration" },
  { icon: TrendingUp, label: "Proven ROI Results" },
  { icon: CheckCircle, label: "10+ Years Trusted" },
];

const TrustStrip = () => {
  return (
    <section className="py-4 bg-primary text-primary-foreground border-b border-primary-foreground/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 sm:gap-x-12">
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <b.icon className="w-3.5 h-3.5 text-accent" />
              <span className="text-[11px] sm:text-xs font-medium whitespace-nowrap text-primary-foreground/80">{b.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
