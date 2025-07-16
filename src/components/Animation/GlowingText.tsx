import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowingTextProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export const GlowingText = ({ 
  children, 
  className = "", 
  glowColor = "#1CA36E" 
}: GlowingTextProps) => {
  return (
    <motion.span
      className={className}
      whileHover={{
        textShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}`,
        scale: 1.05
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.span>
  );
};