import { motion, useReducedMotion } from "framer-motion";
import { Check, Search, Send, Trophy } from "lucide-react";
import type { ReactNode } from "react";
import buzzLogo from "@/assets/buzz-connect-logo-v2.jpg.asset.json";
import finditLogo from "@/assets/finditlk-logo-v2.jpg.asset.json";

const BrandCard = ({
  type,
  badge,
  title,
  children,
}: {
  type: "buzz" | "findit";
  badge: string;
  title: string;
  children: ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    className={`w-full max-w-sm border-t-4 rounded-2xl border-x border-b border-primary-foreground/15 bg-primary-foreground/[0.06] p-5 text-center shadow-2xl ${
      type === "buzz" ? "border-t-secondary" : "border-t-accent"
    }`}
  >
    <div className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase ${
      type === "buzz"
        ? "border-secondary/40 bg-secondary/15 text-secondary"
        : "border-accent/40 bg-accent/10 text-accent"
    }`}>
      <Trophy className="h-3 w-3" /> {badge}
    </div>

    <div className="mx-auto my-4 flex h-20 max-w-[220px] items-center justify-center rounded-xl bg-primary-foreground px-5">
      {type === "buzz" ? (
        <img src={buzzLogo.url} alt="Buzz Connect" className="h-12 w-auto object-contain" width={154} height={43} />
      ) : (
        <a href="https://www.findit.lk/" target="_blank" rel="noopener noreferrer" aria-label="Visit Findit.lk">
          <img src={finditLogo.url} alt="Findit.lk" className="h-12 w-auto object-contain" width={160} height={48} />
        </a>
      )}
    </div>

    <h3 className={`font-heading text-lg font-bold ${type === "buzz" ? "text-secondary" : "text-accent"}`}>{title}</h3>
    <div className="mt-3 flex flex-wrap justify-center gap-2">{children}</div>
  </motion.div>
);

const Chip = ({ children }: { children: ReactNode }) => (
  <span className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/[0.05] px-2.5 py-1 text-xs font-medium text-primary-foreground">
    {children}
  </span>
);

const FlowLine = ({ reverse = false }: { reverse?: boolean }) => {
  const reduceMotion = useReducedMotion();
  return (
    <div className={`relative h-12 w-1 overflow-hidden rounded-full md:h-1 md:w-16 ${reverse ? "bg-accent/30" : "bg-secondary/30"}`} aria-hidden="true">
      {!reduceMotion && (
        <motion.span
          className={`absolute h-2.5 w-2.5 rounded-full md:hidden ${reverse ? "bg-accent" : "bg-secondary"}`}
          animate={reverse ? { y: [48, -8] } : { y: [-8, 48] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
        />
      )}
      {!reduceMotion && (
        <motion.span
          className={`absolute hidden h-2.5 w-2.5 rounded-full md:block ${reverse ? "bg-accent" : "bg-secondary"}`}
          animate={reverse ? { x: [64, -8] } : { x: [-8, 64] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
        />
      )}
    </div>
  );
};

export default function BrandPartnership() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="order-[7] overflow-hidden bg-primary py-16 text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-10 max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase text-accent">
            <Trophy className="h-4 w-4" /> An unmatchable integration
          </div>
          <h2 className="font-heading text-3xl font-black leading-tight sm:text-4xl">
            Two of Sri Lanka's <span className="text-secondary">No.1 platforms</span>, combined into the <span className="text-accent">best reach for promotions</span> in Sri Lanka.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-primary-foreground/70">
            Watch what happens when the No.1 direct-marketing network and the No.1 offer finder fire together — a combined impact no single agency can match.
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center md:flex-row">
          <BrandCard type="buzz" badge="No.1 Direct-Marketing Network" title="Pushes your brand out">
            <Chip>Email 750K</Chip><Chip>LinkedIn</Chip><Chip>Remarketing</Chip>
          </BrandCard>

          <FlowLine />

          <div className="relative flex h-44 w-44 shrink-0 items-center justify-center" aria-label="988,000 plus best impact">
            {!reduceMotion && (
              <>
                <motion.div className="absolute inset-5 rounded-full border border-secondary/50" animate={{ scale: [1, 1.35], opacity: [0.65, 0] }} transition={{ duration: 2.4, repeat: Infinity }} />
                <motion.div className="absolute inset-5 rounded-full border border-accent/50" animate={{ scale: [1, 1.35], opacity: [0.65, 0] }} transition={{ duration: 2.4, repeat: Infinity, delay: 1.2 }} />
              </>
            )}
            <motion.div
              animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }}
              transition={{ duration: 2.6, repeat: Infinity }}
              className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full border-4 border-primary-foreground/20 bg-gradient-to-br from-secondary via-secondary to-accent text-primary shadow-glow"
            >
              <strong className="font-heading text-2xl font-black">988K+</strong>
              <span className="text-[10px] font-black uppercase">Best impact</span>
            </motion.div>
          </div>

          <FlowLine reverse />

          <BrandCard type="findit" badge="No.1 Offer Finder in Sri Lanka" title="Pulls buyers in">
            <Chip>100K searchers</Chip><Chip>Always-on</Chip><Chip>Featured</Chip>
          </BrandCard>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10 text-center">
          <div className="flex items-center justify-center gap-2 font-heading text-2xl font-black sm:text-3xl">
            <Send className="h-6 w-6 text-secondary" /> + <Search className="h-6 w-6 text-accent" /> = <span className="text-accent">988,000+</span>
          </div>
          <p className="mt-2 text-primary-foreground/70">reach across 5 channels</p>
          <p className="mx-auto mt-3 flex max-w-2xl items-start justify-center gap-2 text-sm text-primary-foreground/80">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            Push + Pull, fused into one campaign — an integration no competitor in Sri Lanka can match.
          </p>
        </motion.div>
      </div>
    </section>
  );
}