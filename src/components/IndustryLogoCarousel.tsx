import { motion } from "framer-motion";

interface Client {
  name: string;
  logo: string;
}

interface IndustryLogoCarouselProps {
  title: string;
  subtitle: string;
  clients: Client[];
}

const IndustryLogoCarousel = ({ title, subtitle, clients }: IndustryLogoCarouselProps) => {
  const mid = Math.ceil(clients.length / 2);
  const row1 = clients.slice(0, mid);
  const row2 = clients.slice(mid);

  const doubled1 = [...row1, ...row1];
  const doubled2 = [...row2, ...row2];

  const renderRow = (items: Client[], reverse: boolean = false) => (
    <div className="relative mb-3 last:mb-0 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-background to-transparent z-10" />
      <div className={`flex items-center w-max hover:[animation-play-state:paused] ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'}`}>
        {items.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex-shrink-0 mx-2 sm:mx-4 flex items-center justify-center h-16 w-28 sm:h-20 sm:w-36 rounded-xl bg-card p-3 sm:p-4 shadow-sm border border-border"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-full w-full object-contain"
              loading="lazy"
            width={144} height={64} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      data-client-logos
      className="mb-16 overflow-hidden"
    >
      <div className="text-center mb-8">
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Trusted Partners</span>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">{title}</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">{subtitle}</p>
      </div>
      {renderRow(doubled1)}
      {renderRow(doubled2, true)}
    </motion.div>
  );
};

export default IndustryLogoCarousel;
