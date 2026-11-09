import { useEffect, useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  type MotionValue,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLang } from "../../i18n/LanguageProvider";
import { useMediaQuery, useViewport } from "../../hooks/useViewport";
import { emitBrandReveal } from "../../utils/brandReveal";
import { SereelMark } from "../Brand/SereelMark";
import { CheckPanel, IssuePanel, OperatePanel } from "./StoryPanels";

/*
 * Scroll map for the animated story (fractions of the section's scroll).
 * The mark spins and docks at the left edge, then turns one petal at a time
 * toward each takeaway, then spins into the nav logo.
 */
const HOLD = 0.05;
const DOCKED = 0.17;
const STAGES: [number, number][] = [
  [0.17, 0.36],
  [0.42, 0.6],
  [0.66, 0.84],
];
const FLY_START = 0.86;
const FLY_END = 0.95;

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
  const input = [start - 0.03, start + 0.015, end - 0.015, end + 0.03];
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
  const { scrollYProgress: progress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

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
    [hero.x, hero.x, docked.x, docked.x, corner.x].map((value) => value - half)
  );
  const y = useTransform(
    progress,
    [0, HOLD, DOCKED, FLY_START, FLY_END],
    [hero.y, hero.y, docked.y, docked.y, corner.y].map((value) => value - half)
  );
  const scale = useTransform(
    progress,
    [0, HOLD, DOCKED, FLY_START, FLY_END],
    [1, 1, docked.scale, docked.scale, corner.scale]
  );
  // 450 turns the top petal to face right; each step of 120 brings the next petal round;
  // the last spin lands upright (1080) to match the nav logo.
  const rotate = useTransform(
    progress,
    [0, HOLD, DOCKED, 0.36, 0.42, 0.6, 0.66, FLY_START, FLY_END],
    [0, 0, 450, 450, 570, 570, 690, 690, 1080]
  );
  const markOpacity = useTransform(progress, [0, 0.915, 0.95], [1, 1, 0]);
  const petalTop = useTransform(progress, [0.14, 0.18, 0.36, 0.4], [0, 1, 1, 0]);
  const petalLeft = useTransform(progress, [0.38, 0.42, 0.6, 0.64], [0, 1, 1, 0]);
  const petalRight = useTransform(progress, [0.62, 0.66, 0.84, 0.88], [0, 1, 1, 0]);

  const heroOpacity = useTransform(progress, [0, 0.025, 0.08], [1, 1, 0]);
  const heroY = useTransform(progress, [0, 0.08], [0, -64]);
  const heroVisibility = useTransform(heroOpacity, (value) => (value > 0.01 ? "visible" : "hidden"));
  const cueOpacity = useTransform(progress, [0, 0.02], [1, 0]);

  const brandReveal = useTransform(progress, [0.88, 0.95], [0, 1]);
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
          className="story-mark"
          style={{ width: size, height: size, x, y, scale, rotate, opacity: markOpacity }}
        >
          <SereelMark highlight={[petalTop, petalLeft, petalRight]} />
        </motion.div>

        <StoryPanel progress={progress} range={STAGES[0]}>
          <IssuePanel />
        </StoryPanel>
        <StoryPanel progress={progress} range={STAGES[1]}>
          <CheckPanel />
        </StoryPanel>
        <StoryPanel progress={progress} range={STAGES[2]}>
          <OperatePanel />
        </StoryPanel>
      </div>
    </section>
  );
};

/** Small screens and reduced motion: the same three takeaways, stacked, with a still mark per petal. */
const StaticStory = () => {
  useEffect(() => {
    emitBrandReveal(1);
  }, []);

  const blocks = [
    { key: "issue", rotation: 90, highlight: [1, 0, 0] as [number, number, number], panel: <IssuePanel /> },
    { key: "check", rotation: 210, highlight: [0, 1, 0] as [number, number, number], panel: <CheckPanel /> },
    { key: "operate", rotation: 330, highlight: [0, 0, 1] as [number, number, number], panel: <OperatePanel /> },
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
