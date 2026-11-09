import { useEffect, useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  type MotionValue,
  easeInOut,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLang } from "../../i18n/LanguageProvider";
import { useMediaQuery, useViewport } from "../../hooks/useViewport";
import { emitBrandReveal } from "../../utils/brandReveal";
import { SereelMark } from "../Brand/SereelMark";
import { CheckPanel, IssuePanel, SettlePanel } from "./StoryPanels";

/*
 * Scroll map for the animated story (fractions of the section's scroll).
 * The mark spins slowly and docks at the left edge, then turns one petal at a
 * time toward each takeaway, then spins into the nav logo. The turns are long
 * and eased, and scroll is smoothed with a spring, so the motion glides.
 */
const HOLD = 0.03;
const DOCKED = 0.2;
const STAGES: [number, number][] = [
  [0.2, 0.33],
  [0.43, 0.56],
  [0.66, 0.79],
];
const FLY_START = 0.81;
const FLY_END = 0.97;
const SMOOTHING = { stiffness: 55, damping: 20, mass: 0.6, restDelta: 0.0005 };
const EASE = { ease: easeInOut };

const HeroCopy = () => {
  const { t } = useTranslation();
  const { localize } = useLang();
  return (
    <div className="story-hero-copy">
      <h1 id="home-hero-title">{t("home.hero.title")}</h1>
      <p className="hero-subhead">{t("home.hero.subhead")}</p>
      <div className="hero-actions">
        <Link className="market-cta primary" to={localize("/listings")}>
          {t("home.hero.viewListings")}
        </Link>
        <Link className="market-cta secondary" to={localize("/contact")}>
          {t("home.hero.talk")}
        </Link>
      </div>
    </div>
  );
};

const StoryPanel = ({
  progress,
  range,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  children: ReactNode;
}) => {
  const [start, end] = range;
  const input = [start - 0.035, start + 0.01, end - 0.01, end + 0.035];
  const opacity = useTransform(progress, input, [0, 1, 1, 0]);
  const y = useTransform(progress, input, [28, 0, 0, -28]);
  const pointerEvents = useTransform(opacity, (value) => (value > 0.5 ? "auto" : "none"));
  const visibility = useTransform(opacity, (value) => (value > 0.01 ? "visible" : "hidden"));

  return (
    <div className="story-panel">
      <motion.div style={{ opacity, y, pointerEvents, visibility }}>{children}</motion.div>
    </div>
  );
};

const AnimatedStory = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { width, height } = useViewport();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, SMOOTHING);

  // Geometry, in px, from the viewport.
  const size = Math.min(width * 0.42, height * 0.78, 680);
  const half = size / 2;
  const hero = { x: width * 0.73, y: height * 0.54 };
  const petalReach = size * 0.488; // centre to petal tip, at scale 1
  const docked = { x: width * 0.012, y: height * 0.52, scale: Math.min((width * 0.28) / petalReach, 2.4) };
  const brandLeft = Math.max(width > 980 ? 48 : 32, (width - 1600) / 2 + 48);
  const corner = { x: brandLeft + 32, y: 39, scale: 52 / size };

  const x = useTransform(
    progress,
    [0, HOLD, DOCKED, FLY_START, FLY_END],
    [hero.x, hero.x, docked.x, docked.x, corner.x].map((value) => value - half),
    EASE
  );
  const y = useTransform(
    progress,
    [0, HOLD, DOCKED, FLY_START, FLY_END],
    [hero.y, hero.y, docked.y, docked.y, corner.y].map((value) => value - half),
    EASE
  );
  const scale = useTransform(
    progress,
    [0, HOLD, DOCKED, FLY_START, FLY_END],
    [1, 1, docked.scale, docked.scale, corner.scale],
    EASE
  );
  // 450 turns the top petal to face right; each step of 120 brings the next petal round;
  // the last spin lands upright (1080) to match the nav logo.
  const rotate = useTransform(
    progress,
    [0, HOLD, DOCKED, STAGES[0][1], STAGES[1][0], STAGES[1][1], STAGES[2][0], FLY_START, FLY_END],
    [0, 0, 450, 450, 570, 570, 690, 690, 1080],
    EASE
  );
  const markOpacity = useTransform(progress, [0, FLY_END - 0.03, FLY_END], [1, 1, 0]);
  // Full halo in the hero; softer while docked so the panels stay easy to read.
  const haloOpacity = useTransform(
    progress,
    [0, HOLD, DOCKED, FLY_START, FLY_END - 0.03, FLY_END],
    [1, 1, 0.55, 0.55, 0.4, 0],
    EASE
  );
  const petalTop = useTransform(progress, [0.16, 0.2, 0.33, 0.37], [0, 1, 1, 0]);
  const petalLeft = useTransform(progress, [0.39, 0.43, 0.56, 0.6], [0, 1, 1, 0]);
  const petalRight = useTransform(progress, [0.62, 0.66, 0.79, 0.83], [0, 1, 1, 0]);

  const heroOpacity = useTransform(progress, [0, 0.02, 0.08], [1, 1, 0]);
  const heroY = useTransform(progress, [0, 0.08], [0, -64]);
  const heroVisibility = useTransform(heroOpacity, (value) => (value > 0.01 ? "visible" : "hidden"));
  const cueOpacity = useTransform(progress, [0, 0.015], [1, 0]);

  const brandReveal = useTransform(progress, [FLY_END - 0.06, FLY_END], [0, 1]);
  useMotionValueEvent(brandReveal, "change", (value) => emitBrandReveal(value));
  useEffect(() => {
    emitBrandReveal(brandReveal.get());
    return () => emitBrandReveal(1);
  }, [brandReveal]);

  return (
    <section ref={sectionRef} className="logo-story" aria-labelledby="home-hero-title">
      <div className="logo-story-stage">
        <motion.div className="story-hero wrap" style={{ opacity: heroOpacity, y: heroY, visibility: heroVisibility }}>
          <HeroCopy />
        </motion.div>

        <motion.div className="story-cue mono" style={{ opacity: cueOpacity }} aria-hidden="true">
          <ArrowDown size={14} /> {t("home.hero.scroll")}
        </motion.div>

        <motion.div
          className="story-halo"
          style={{ width: size, height: size, x, y, scale, rotate, opacity: haloOpacity }}
          aria-hidden="true"
        >
          <img src="/images/Hero/mark-glow.webp" alt="" decoding="async" draggable={false} />
        </motion.div>

        <motion.div
          className="story-mark"
          style={{ width: size, height: size, x, y, scale, rotate, opacity: markOpacity }}
        >
          <SereelMark highlight={[petalTop, petalLeft, petalRight]} glow={false} />
        </motion.div>

        <StoryPanel progress={progress} range={STAGES[0]}>
          <IssuePanel />
        </StoryPanel>
        <StoryPanel progress={progress} range={STAGES[1]}>
          <CheckPanel />
        </StoryPanel>
        <StoryPanel progress={progress} range={STAGES[2]}>
          <SettlePanel />
        </StoryPanel>
      </div>
    </section>
  );
};

/** Small screens and reduced motion: the same three takeaways, stacked, with a still mark. No motion. */
const StaticStory = () => {
  useEffect(() => {
    emitBrandReveal(1);
  }, []);

  const blocks = [
    { key: "issue", rotation: 90, highlight: [1, 0, 0] as [number, number, number], panel: <IssuePanel /> },
    { key: "check", rotation: 210, highlight: [0, 1, 0] as [number, number, number], panel: <CheckPanel /> },
    { key: "settle", rotation: 330, highlight: [0, 0, 1] as [number, number, number], panel: <SettlePanel /> },
  ];

  return (
    <>
      <section className="story-static-hero wrap" aria-labelledby="home-hero-title">
        <HeroCopy />
        <div className="story-static-mark">
          <SereelMark />
        </div>
      </section>
      <section className="story-static wrap">
        {blocks.map((block) => (
          <div className="story-static-block" key={block.key}>
            <div className="story-static-glyph" style={{ transform: `rotate(${block.rotation}deg)` }}>
              <SereelMark highlight={block.highlight} glow={false} />
            </div>
            {block.panel}
          </div>
        ))}
      </section>
    </>
  );
};

export const LogoStory = () => {
  const reduceMotion = useReducedMotion();
  const wide = useMediaQuery("(min-width: 1024px) and (min-height: 640px)");
  return wide && !reduceMotion ? <AnimatedStory /> : <StaticStory />;
};
