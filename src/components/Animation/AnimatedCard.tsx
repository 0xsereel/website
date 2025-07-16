import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cardHover, blinkClick } from "../../utils/animations";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  delay?: number;
}

export const AnimatedCard = ({ 
  children, 
  className = "", 
  onClick,
  delay = 0 
}: AnimatedCardProps) => {
  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover="hover"
      whileTap="tap"
      variants={{ ...cardHover, ...blinkClick }}
      onClick={onClick}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};