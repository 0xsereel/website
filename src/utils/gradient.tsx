import React, { createContext, useContext, ReactNode, useEffect } from "react";
import { motion } from "framer-motion";

interface GradientContextType {
  gradientVariant: number;
  updateGradientVariant: (variant: number) => void;
}

const GradientContext = createContext<GradientContextType | undefined>(
  undefined
);

export const useGradient = () => {
  const context = useContext(GradientContext);
  if (!context) {
    throw new Error("useGradient must be used within a GradientProvider");
  }
  return context;
};

export const GradientProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollY / docHeight;

      // Determine which section of the page we're on (0-3)
      const section = Math.min(3, Math.floor(scrollPercent * 4));
      updateGradientVariant(section);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [gradientVariant, setGradientVariant] = React.useState(0);

  const updateGradientVariant = (variant: number) => {
    setGradientVariant(variant);
  };

  return (
    <GradientContext.Provider
      value={{ gradientVariant, updateGradientVariant }}
    >
      <motion.div
        className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(28, 163, 110, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(28, 163, 110, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(28, 163, 110, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(28, 163, 110, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 20%, rgba(28, 163, 110, 0.1) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(28, 163, 110, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(28, 163, 110, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(28, 163, 110, 0.05) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      {children}
    </GradientContext.Provider>
  );
};
