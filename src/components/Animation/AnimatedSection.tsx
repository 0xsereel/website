import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { fadeInUp, staggerContainer } from "../../utils/animations";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variant?: "fadeInUp" | "stagger";
  delay?: number;
}

export const AnimatedSection = ({ 
  children, 
  className = "", 
  variant = "fadeInUp",
  delay = 0 
}: AnimatedSectionProps) => {
  const { ref, isInView } = useScrollAnimation();
  
  const variants = variant === "stagger" ? staggerContainer : fadeInUp;
  
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};