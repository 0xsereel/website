// src/utils/animations.ts
import { Variants } from "framer-motion";

// Animation variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Hover effects
export const glowHover = {
  hover: {
    boxShadow: "0 0 30px rgba(28, 163, 110, 0.6), 0 0 60px rgba(255, 255, 255, 0.3)",
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  tap: {
    scale: 0.98,
    boxShadow: "0 0 20px rgba(28, 163, 110, 0.8), 0 0 40px rgba(255, 255, 255, 0.5)",
    transition: { duration: 0.1 }
  }
};

export const cardHover = {
  hover: {
    y: -5,
    boxShadow: "0 0 25px rgba(28, 163, 110, 0.4)",
    borderColor: "rgba(28, 163, 110, 0.8)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Click blink effect
export const blinkClick = {
  tap: {
    boxShadow: [
      "0 0 0px rgba(28, 163, 110, 0)",
      "0 0 30px rgba(28, 163, 110, 1)",
      "0 0 60px rgba(255, 255, 255, 0.8)",
      "0 0 30px rgba(28, 163, 110, 1)",
      "0 0 0px rgba(28, 163, 110, 0)"
    ],
    transition: { duration: 0.6, ease: "easeInOut" }
  }
};

// Scroll-triggered animations
export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const parallaxSlow = {
  y: [0, -50],
  transition: { duration: 1, ease: "easeOut" }
};

export const parallaxFast = {
  y: [0, -100],
  transition: { duration: 1, ease: "easeOut" }
};
