import dfccLogo from "@/assets/logos/dfcc.webp";
import radissonLogo from "@/assets/logos/radisson.webp";
import huntersLogo from "@/assets/logos/hunters.webp";
import salaLogo from "@/assets/logos/sala.webp";
import bestwesternLogo from "@/assets/logos/bestwestern.webp";
import chinesedragonLogo from "@/assets/logos/chinesedragon.webp";
import swarnamahalLogo from "@/assets/logos/swarnamahal.webp";
import burgerkingLogo from "@/assets/logos/burgerking.webp";
import mimosaLogo from "@/assets/logos/mimosa.webp";
import abansLogo from "@/assets/logos/abans.webp";
import odelLogo from "@/assets/logos/odel.webp";
import glomarkLogo from "@/assets/logos/glomark.webp";
import combankLogo from "@/assets/logos/combank.webp";
import allianceLogo from "@/assets/logos/alliance.webp";
import nolimitLogo from "@/assets/logos/nolimit.webp";
import bhoomiLogo from "@/assets/logos/bhoomi.webp";
import visioncareLogo from "@/assets/logos/visioncare.webp";
import lassanaLogo from "@/assets/logos/lassana.webp";
import cipmLogo from "@/assets/logos/cipm.webp";
import cinnamonLogo from "@/assets/logos/cinnamon.webp";
import slimLogo from "@/assets/logos/slim.webp";
import ninewellsLogo from "@/assets/logos/ninewells.webp";
import { motion } from "framer-motion";

const logos = [
  { name: "DFCC Bank", src: dfccLogo },
  { name: "Radisson", src: radissonLogo },
  { name: "Hunters", src: huntersLogo },
  { name: "Sala Enterprises", src: salaLogo },
  { name: "Best Western", src: bestwesternLogo },
  { name: "Chinese Dragon Cafe", src: chinesedragonLogo },
  { name: "Swarnamahal", src: swarnamahalLogo },
  { name: "Burger King", src: burgerkingLogo },
  { name: "Mimosa", src: mimosaLogo },
  { name: "Abans", src: abansLogo },
  { name: "Odel", src: odelLogo },
  { name: "Glomark", src: glomarkLogo },
  { name: "Commercial Bank", src: combankLogo },
  { name: "Alliance Finance", src: allianceLogo },
  { name: "Nolimit", src: nolimitLogo },
  { name: "Bhoomi Realty", src: bhoomiLogo },
  { name: "Vision Care", src: visioncareLogo },
  { name: "Lassana.com", src: lassanaLogo },
  { name: "CIPM Sri Lanka", src: cipmLogo },
  { name: "Cinnamon Hotels", src: cinnamonLogo },
  { name: "SLIM", src: slimLogo },
  { name: "Ninewells Hospital", src: ninewellsLogo },
];

const row1 = logos.slice(0, 7);
const row2 = logos.slice(7, 14);
const row3 = logos.slice(14);

const LogoCarousel = () => {
  const doubledRow1 = [...row1, ...row1];
  const doubledRow2 = [...row2, ...row2];
  const doubledRow3 = [...row3, ...row3];

  const renderRow = (items: typeof logos, isReverse = false) => (
    <div className="relative mb-3 last:mb-0 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-muted/80 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-muted/80 to-transparent z-10" />
      <div className={`flex items-center w-max hover:[animation-play-state:paused] ${isReverse ? 'animate-scroll-reverse' : 'animate-scroll'}`}>
        {items.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex-shrink-0 mx-2 sm:mx-4 flex items-center justify-center h-14 w-28 sm:h-16 sm:w-36 rounded-lg bg-card p-2.5 sm:p-3 shadow-sm border border-border hover:border-accent/15 transition-all duration-300"
          >
            <img src={logo.src} alt={logo.name} className="h-full w-full object-contain" loading="lazy" width={144} height={64} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section data-client-logos className="py-12 sm:py-16 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-3">Our Clients</span>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            Trusted by Leading Brands in Sri Lanka
          </h2>
        </motion.div>
      </div>
      {renderRow(doubledRow1)}
      {renderRow(doubledRow2, true)}
      {renderRow(doubledRow3)}
    </section>
  );
};

export default LogoCarousel;
