import { ReactNode } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    keyof HTMLMotionProps<"button">
  > {
  children: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button = ({
  children,
  className,
  type = "button",
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      className={`
        bg-[#1CA36E] text-white rounded-full border border-[#00FFB21A]
        cursor-pointer flex items-center justify-center font-gilroy-medium
        relative overflow-hidden group touch-manipulation
        min-h-[44px] px-3 sm:px-8 gap-2
        transition-all duration-300
        ${className || ""}
        ${disabled ? "opacity-60 cursor-not-allowed" : ""}
      `}
      whileHover={
        disabled
          ? {}
          : {
              boxShadow:
                "0 0 30px rgba(28, 163, 110, 0.6), 0 0 60px rgba(255, 255, 255, 0.3)",
              scale: 1.05,
            }
      }
      whileTap={
        disabled
          ? {}
          : {
              scale: 0.95,
              boxShadow:
                "0 0 20px rgba(28, 163, 110, 0.8), 0 0 40px rgba(255, 255, 255, 0.5)",
            }
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
    >
      <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap text-base sm:text-[15px]">
        {children}
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-lg"
        >
          <MdOutlineArrowOutward />
        </motion.div>
      </span>
    </motion.button>
  );
};
