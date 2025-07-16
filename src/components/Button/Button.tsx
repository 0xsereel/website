import { ReactNode } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof HTMLMotionProps<"button">> {
  children: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <motion.button
      className={`bg-[#1CA36E] text-white px-6 py-3 rounded-full border border-[#00FFB21A] cursor-pointer flex items-center justify-center font-gilroy-medium relative overflow-hidden group ${className || ''}`}
      whileHover={{
        boxShadow: "0 0 30px rgba(28, 163, 110, 0.6), 0 0 60px rgba(255, 255, 255, 0.3)",
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
        boxShadow: "0 0 20px rgba(28, 163, 110, 0.8), 0 0 40px rgba(255, 255, 255, 0.5)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...props as any}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#1CA36E] via-[#00FFB2] to-[#1CA36E]"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{ backgroundSize: "200% 100%" }}
      />
      
      {/* Button content */}
      <span className="relative z-10 flex items-center">
        {children}
        <motion.div
          className="ml-2"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <MdOutlineArrowOutward />
        </motion.div>
      </span>
    </motion.button>
  );
};
