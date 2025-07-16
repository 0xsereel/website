// src/hooks/useScrollAnimation.ts
import { useInView } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return { ref, isInView };
};

// src/hooks/useParallax.ts
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const useParallax = (speed = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
  
  return { ref, y };
};

// src/hooks/useGlowEffect.ts
import { useState } from "react";

export const useGlowEffect = () => {
  const [isGlowing, setIsGlowing] = useState(false);
  
  const glowProps = {
    onMouseEnter: () => setIsGlowing(true),
    onMouseLeave: () => setIsGlowing(false),
    style: {
      boxShadow: isGlowing 
        ? "0 0 30px rgba(28, 163, 110, 0.6), 0 0 60px rgba(255, 255, 255, 0.3)"
        : "none",
      transition: "box-shadow 0.3s ease"
    }
  };
  
  return { glowProps, isGlowing };
};
