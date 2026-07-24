import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const SEREEL_HERO_LOGO = "/images/Hero/glowing_seree_logo_expanded.svg";

export const HomeHero = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 55, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 55, damping: 22 });
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroLift = useTransform(scrollYProgress, [0, 1], [0, -48]);
  const heroFade = useTransform(scrollYProgress, [0, 0.72, 1], [1, 0.86, 0]);
  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 34 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={heroRef}
      className="marketing-hero wrap"
      aria-labelledby="home-hero-title"
      onPointerMove={(event) => {
        if (!reduceMotion) {
          pointerX.set((event.clientX / window.innerWidth - 0.5) * 34);
          pointerY.set((event.clientY / window.innerHeight - 0.5) * 34);
        }
      }}
    >
      <div className="hero-rail-field" aria-hidden="true">
        <span className="hero-rail rail-one" />
        <span className="hero-rail rail-two" />
        <span className="hero-rail rail-three" />
        <span className="hero-light-sweep" />
        <span className="hero-circuit-frame" />
        <span className="hero-data-stream stream-one">
          {Array.from({ length: 7 }, (_, index) => <i key={index} />)}
        </span>
        <span className="hero-data-stream stream-two">
          {Array.from({ length: 5 }, (_, index) => <i key={index} />)}
        </span>
      </div>
      <motion.div
        className="hero-copy"
        style={reduceMotion ? undefined : { y: heroLift, opacity: heroFade }}
      >
        <h1
          id="home-hero-title"
          aria-label="The rails behind tokenized capital markets."
        >
          {"The rails behind tokenized capital markets."
            .split(" ")
            .map((word, index) => (
              <motion.span
                className="hero-word"
                aria-hidden="true"
                key={word}
                initial={{ y: reduceMotion ? "0%" : "115%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.85,
                  delay: 0.08 + index * 0.055,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
        </h1>
        <motion.p
          className="hero-subhead"
          initial="hidden"
          animate="visible"
          variants={reveal}
          transition={{ duration: 0.75, delay: 0.48 }}
        >
          Tokenization, custody, compliance, settlement, and market rails for
          issuer-owned financial products on public and private chains.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial="hidden"
          animate="visible"
          variants={reveal}
          transition={{ duration: 0.75, delay: 0.6 }}
        >
          <Link className="market-cta primary" to="/contact">
            <span>Schedule consultation</span>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="logo-stage hero-logo-stage"
        aria-hidden="true"
        initial={{
          opacity: 0,
          scale: reduceMotion ? 1 : 0.82,
          rotate: reduceMotion ? 0 : -5,
        }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 1.4,
          delay: 0.18,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={reduceMotion ? undefined : { x: smoothX, y: smoothY }}
      >
        <img src={SEREEL_HERO_LOGO} alt="" />
      </motion.div>
    </motion.section>
  );
};
