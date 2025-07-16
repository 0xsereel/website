import { ReactNode } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof HTMLMotionProps<"button">> {
  children: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  // Add these properties to fix the type errors
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button = ({ children, className, type = "button", disabled = false, ...props }: ButtonProps) => {
  return (
    <motion.button
      className={`bg-[#1CA36E] text-white px-6 py-3 rounded-full border border-[#00FFB21A] cursor-pointer flex items-center justify-center font-gilroy-medium relative overflow-hidden group ${className || ''} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
      whileHover={{
        boxShadow: disabled ? "none" : "0 0 30px rgba(28, 163, 110, 0.6), 0 0 60px rgba(255, 255, 255, 0.3)",
        scale: disabled ? 1 : 1.05,
      }}
      whileTap={{
        scale: disabled ? 1 : 0.95,
        boxShadow: disabled ? "none" : "0 0 20px rgba(28, 163, 110, 0.8), 0 0 40px rgba(255, 255, 255, 0.5)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      disabled={disabled}
      type={type}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...props as any}
    >
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