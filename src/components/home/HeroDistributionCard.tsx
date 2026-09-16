import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";


const CHANNELS = [
  { key: "sms", label: "SMS", figures: 75, total: "600K", color: "#a855f7" },
  { key: "email", label: "Email", figures: 44, total: "350K", color: "#38bdf8" },
  { key: "whatsapp", label: "WhatsApp", figures: 25, total: "200K", color: "#25d366" },
  { key: "findit", label: "Findit.lk", figures: 13, total: "100K", color: "#ffb627" },
];

const WORDS = ["in their inbox", "by SMS", "on WhatsApp", "on Findit.lk"];
const STEP = 9;
const TARGET = 1250000;

const PersonIcon = ({ color, delay, go }: { color: string; delay: number; go: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className="w-[13px] h-[16px] sm:w-[14px] sm:h-[17px]"
    style={{
      fill: color,
      opacity: go ? 1 : 0,
      transform: go ? "none" : "scale(.3) translateY(4px)",
      transition: `opacity .3s ease ${delay}ms, transform .38s cubic-bezier(.2,.9,.3,1.5) ${delay}ms`,
    }}
    aria-hidden="true"
  >
    <circle cx="12" cy="7" r="4" />
    <path d="M4 21v-1.5C4 15.9 7.6 13.5 12 13.5s8 2.4 8 6V21z" />
  </svg>
);

const HeroDistributionCard = () => {
  const reduce = useReducedMotion();
  const [go, setGo] = useState(false);
  const [count, setCount] = useState(reduce ? TARGET : 0);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  const rafRef = useRef<number>();

  const figures = useMemo(() => {
    const list: { color: string; delay: number }[] = [];
    let i = 0;
    CHANNELS.forEach((ch) => {
      for (let k = 0; k < ch.figures; k++) {
        list.push({ color: ch.color, delay: i * STEP });
        i++;
      }
    });
    return list;
  }, []);

  const legendDelays = useMemo(() => {
    let acc = 0;
    return CHANNELS.map((ch) => {
      const start = acc;
      acc += ch.figures;
      return start * STEP;
    });
  }, []);

  useEffect(() => {
    if (reduce) {
      setGo(true);
      setCount(TARGET);
      return;
    }
    const id = requestAnimationFrame(() => setGo(true));
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / 2200);
      const e = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(e * TARGET));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const rotator = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIndex((w) => (w + 1) % WORDS.length);
        setWordVisible(true);
      }, 200);
    }, 1700);

    return () => {
      cancelAnimationFrame(id);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearInterval(rotator);
    };
  }, [reduce]);

  return (
    <div className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/[0.04] backdrop-blur-xl p-5 sm:p-6 shadow-2xl">
      <div className="text-center text-xs sm:text-[13px] font-medium text-primary-foreground/55 mb-1">
        Your content, distributed across every channel
      </div>

      {/* Distribution hub diagram */}
      <div className="mx-auto max-w-[440px] mb-1">
        <svg viewBox="0 0 440 146" width="100%" height="146" className="block overflow-visible" aria-hidden="true">
          <g fill="none" stroke="rgba(255,255,255,.13)" strokeWidth="2">
            <path id="bzhp1" d="M220,42 C220,82 60,70 60,112" />
            <path id="bzhp2" d="M220,42 C220,82 168,82 168,112" />
            <path id="bzhp3" d="M220,42 C220,82 272,82 272,112" />
            <path id="bzhp4" d="M220,42 C220,82 380,70 380,112" />
          </g>
          <rect x="172" y="8" width="96" height="30" rx="9" fill="#0f1d35" stroke="rgba(255,255,255,.2)" />
          <text x="220" y="28" textAnchor="middle" fill="#fff" fontSize="12.5" fontWeight="600">
            Your content
          </text>
          {CHANNELS.map((ch, i) => (
            <circle key={ch.key} cx={[60, 168, 272, 380][i]} cy="112" r="9" fill={ch.color} />
          ))}
          <g fontSize="10" fill="rgba(255,255,255,.6)" textAnchor="middle">
            {CHANNELS.map((ch, i) => (
              <text key={ch.key} x={[60, 168, 272, 380][i]} y="136">
                {ch.label}
              </text>
            ))}
          </g>
          {!reduce &&
            CHANNELS.map((ch, i) => (
              <circle key={`dot-${ch.key}`} r="4.5" fill={ch.color}>
                <animateMotion dur="1.7s" begin={`${[0, 0.4, 0.8, 0.25][i]}s`} repeatCount="indefinite">
                  <mpath href={`#bzhp${i + 1}`} />
                </animateMotion>
              </circle>
            ))}
        </svg>
      </div>


      <div
        className="font-heading text-4xl sm:text-5xl font-bold leading-none bg-clip-text text-transparent"
        style={{ backgroundImage: "linear-gradient(90deg, #38bdf8, #a855f7)" }}
      >
        {count.toLocaleString("en-US")}
        {count >= TARGET ? "+" : ""}
      </div>
      <div className="text-sm text-primary-foreground/55 mt-1 mb-4">
        real people, reached{" "}
        <span
          className="font-semibold text-accent transition-opacity duration-200"
          style={{ opacity: wordVisible ? 1 : 0 }}
        >
          {WORDS[wordIndex]}
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-[5px]">
        {figures.map((f, i) => (
          <PersonIcon key={i} color={f.color} delay={f.delay} go={go} />
        ))}
      </div>

      <p className="text-center text-[11px] text-primary-foreground/40 my-3.5">
        Each figure ≈ 8,000 people · colours show the channel
      </p>

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
        {CHANNELS.map((ch, i) => (
          <span
            key={ch.key}
            className="inline-flex items-center text-[13px] text-primary-foreground/60"
            style={{
              opacity: go ? 1 : 0,
              transform: go ? "none" : "translateY(8px)",
              transition: `opacity .45s ease ${legendDelays[i]}ms, transform .45s ease ${legendDelays[i]}ms`,
            }}
          >
            <i
              className="w-[11px] h-[11px] rounded-[3px] mr-1.5 inline-block"
              style={{ background: ch.color }}
            />
            {ch.label} <b className="text-primary-foreground font-semibold ml-1">{ch.total}</b>
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeroDistributionCard;
