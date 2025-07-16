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