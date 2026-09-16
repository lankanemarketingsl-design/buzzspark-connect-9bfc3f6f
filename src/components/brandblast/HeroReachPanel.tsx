import { useEffect, useMemo, useRef, useState } from "react";

/** Fixed channel colours — intentionally hard-coded hex, must not follow the theme accent. */
const SEGMENTS = [
  { key: "email", label: "Email", num: "750K", count: 187, hex: "#38bdf8" },
  { key: "fbr", label: "FB Remarketing", num: "100K", count: 25, hex: "#a855f7" },
  { key: "findit", label: "Findit.lk", num: "100K", count: 25, hex: "#ffb627" },
  { key: "fbe", label: "FB Exposure", num: "30K", count: 8, hex: "#22c55e" },
  { key: "linkedin", label: "LinkedIn", num: "8K", count: 2, hex: "#ff5a5f" },
] as const;

const STEP = 4;
const TARGET = 988000;
const WORDS = ["in their inbox", "on Facebook", "on LinkedIn", "on Findit.lk"];

const PERSON_MASK =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3Cpath d='M4 21v-1.5C4 15.9 7.6 13.5 12 13.5s8 2.4 8 6V21z'/%3E%3C/svg%3E\") center/contain no-repeat";

export default function HeroReachPanel() {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [go, setGo] = useState(!!reduce);
  const [count, setCount] = useState(reduce ? TARGET : 0);
  const [done, setDone] = useState(!!reduce);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  const rafRef = useRef<number>();

  const figures = useMemo(() => {
    const out: { hex: string; delay: number }[] = [];
    let i = 0;
    SEGMENTS.forEach((s) => {
      for (let k = 0; k < s.count; k++) {
        out.push({ hex: s.hex, delay: i * STEP });
        i++;
      }
    });
    return out;
  }, []);

  const legendDelays = useMemo(() => {
    let acc = 0;
    return SEGMENTS.map((s) => {
      const start = acc;
      acc += s.count;
      return start * STEP;
    });
  }, []);

  useEffect(() => {
    if (reduce) return;
    const raf = requestAnimationFrame(() => setGo(true));

    const dur = 1500;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(e * TARGET));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else setDone(true);
    };
    rafRef.current = requestAnimationFrame(tick);

    let hide: ReturnType<typeof setTimeout>;
    const rot = setInterval(() => {
      setWordVisible(false);
      hide = setTimeout(() => {
        setWordIndex((w) => (w + 1) % WORDS.length);
        setWordVisible(true);
      }, 150);
    }, 1500);

    return () => {
      cancelAnimationFrame(raf);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearInterval(rot);
      clearTimeout(hide);
    };
  }, [reduce]);

  return (
    <div className="rounded-[22px] border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.04] backdrop-blur-sm p-6 shadow-2xl">
      <div className="text-[13px] text-primary-foreground/70 text-center mb-1">
        Your content, distributed across all 5 channels
      </div>

      <div className="mx-auto mb-2 max-w-[440px]" aria-hidden="true">
        <svg viewBox="0 0 440 146" width="100%" height="146" className="block overflow-visible">
          <g fill="none" stroke="rgba(255,255,255,.13)" strokeWidth="2">
            <path id="bbp1" d="M220,42 C220,82 44,72 44,112" />
            <path id="bbp2" d="M220,42 C220,82 132,84 132,112" />
            <path id="bbp3" d="M220,42 C220,82 220,84 220,112" />
            <path id="bbp4" d="M220,42 C220,82 308,84 308,112" />
            <path id="bbp5" d="M220,42 C220,82 396,72 396,112" />
          </g>
          <rect x="172" y="8" width="96" height="30" rx="9" fill="#0f1d35" stroke="rgba(255,255,255,.2)" />
          <text x="220" y="28" textAnchor="middle" fill="#fff" fontSize="12.5" fontWeight="600">Your content</text>
          <circle cx="44" cy="112" r="9" fill="#38bdf8" />
          <circle cx="132" cy="112" r="9" fill="#a855f7" />
          <circle cx="220" cy="112" r="9" fill="#ffb627" />
          <circle cx="308" cy="112" r="9" fill="#22c55e" />
          <circle cx="396" cy="112" r="9" fill="#ff5a5f" />
          <g fontSize="9.5" fill="#9db0cc" textAnchor="middle">
            <text x="44" y="136">Email</text>
            <text x="132" y="136">FB Rmkt</text>
            <text x="220" y="136">Findit</text>
            <text x="308" y="136">FB Exp</text>
            <text x="396" y="136">LinkedIn</text>
          </g>
          {!reduce &&
            SEGMENTS.map((s, i) => (
              <circle key={s.key} r="4.5" fill={s.hex}>
                <animateMotion dur="1.4s" begin={`${i * 0.28}s`} repeatCount="indefinite">
                  <mpath href={`#bbp${i + 1}`} />
                </animateMotion>
              </circle>
            ))}
        </svg>
      </div>

      <div
        className="font-heading font-black text-[2.6rem] sm:text-5xl leading-none bg-clip-text text-transparent"
        style={{ backgroundImage: "linear-gradient(90deg,#38bdf8,#ffb627)" }}
      >
        {count.toLocaleString("en-US")}
        {done ? "+" : ""}
      </div>

      <div className="text-sm text-primary-foreground/70 mt-1 mb-4">
        real people, reached{" "}
        <span
          className="font-semibold transition-opacity duration-200"
          style={{ color: "#ffb627", opacity: wordVisible ? 1 : 0 }}
        >
          {WORDS[wordIndex]}
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-[5px]" aria-hidden="true">
        {figures.map((f, i) => (
          <span
            key={i}
            className="w-[13px] h-[16px]"
            style={{
              background: f.hex,
              WebkitMask: PERSON_MASK,
              mask: PERSON_MASK,
              opacity: go ? 1 : 0,
              transform: go ? "none" : "scale(.3) translateY(4px)",
              transition: reduce
                ? "none"
                : "opacity .3s ease, transform .38s cubic-bezier(.2,.9,.3,1.5)",
              transitionDelay: reduce ? undefined : `${f.delay}ms`,
            }}
          />
        ))}
      </div>

      <div className="text-center text-[11px] text-primary-foreground/50 mt-3.5 mb-4">
        Each figure = 4,000 people · colours show the channel
      </div>

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
        {SEGMENTS.map((s, i) => (
          <span
            key={s.key}
            className="inline-flex items-center text-[13px] text-primary-foreground/70"
            style={{
              opacity: go ? 1 : 0,
              transform: go ? "none" : "translateY(8px)",
              transition: reduce ? "none" : "opacity .45s ease, transform .45s ease",
              transitionDelay: reduce ? undefined : `${legendDelays[i]}ms`,
            }}
          >
            <i
              className="w-[11px] h-[11px] rounded-[3px] mr-1.5 inline-block"
              style={{ background: s.hex }}
            />
            {s.label} <b className="text-white font-semibold ml-1">{s.num}</b>
          </span>
        ))}
      </div>

      <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-[13px] text-primary-foreground/70">
        <span>Cost per person reached</span>
        <b style={{ color: "#ffb627" }}>LKR 0.015</b>
      </div>
    </div>
  );
}
