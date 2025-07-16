import { Button } from "../Button/Button";
import { Header } from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Hero = () => {
  const glowingSereeLogoPath = "/images/Hero/glowing_seree_logo.svg";
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transformations
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const logoRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse tracking for subtle logo interaction
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleGetStarted = () => {
    navigate("/contact");
  };

  return (
    <section className="w-full flex items-center flex-col lg:h-screen relative overflow-hidden" ref={containerRef}>
      <Header />
      
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#1CA36E]/10 via-black to-[#1CA36E]/5"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 20%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="w-[95%] mx-auto flex items-center justify-between mt-10 lg:flex-row flex-col-reverse relative z-10">
        {/* Left side - Text content */}
        <motion.div
          className="lg:w-[50%] w-full lg:mt-0"
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.h1
            className="lg:text-7xl text-5xl font-gilroy-bold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Unlock the <br />
            <motion.span
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#1CA36E] to-white bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                future
              </motion.span>
              <span className="text-transparent">future</span>
            </motion.span>{" "}
            of finance
          </motion.h1>

          <motion.p
            className="text-xl mt-5 text-[#D5D5D5] max-w-[600px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Institutional-grade blockchain solutions for{" "}
            <motion.span
              className="text-[#1CA36E] font-semibold"
              whileHover={{ scale: 1.1, glow: "0 0 10px #1CA36E" }}
            >
              fast settlements
            </motion.span>
            ,{" "}
            <motion.span
              className="text-[#1CA36E] font-semibold"
              whileHover={{ scale: 1.1, glow: "0 0 10px #1CA36E" }}
            >
              DeFi access
            </motion.span>
            , and{" "}
            <motion.span
              className="text-[#1CA36E] font-semibold"
              whileHover={{ scale: 1.1, glow: "0 0 10px #1CA36E" }}
            >
              asset tokenization
            </motion.span>
            .
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-fit"
            >
              <Button onClick={handleGetStarted}>Get Started</Button>
            </motion.div>
          </motion.div>

          {/* Animated stats */}
          <motion.div
            className="mt-12 flex gap-8 lg:flex-row flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="text-center lg:text-left"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-2xl font-gilroy-bold text-[#1CA36E]"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                18-35%
              </motion.div>
              <div className="text-sm text-[#969696]">APY Potential*</div>
            </motion.div>
            <motion.div
              className="text-center lg:text-left"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-2xl font-gilroy-bold text-[#1CA36E]"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                &lt;1min
              </motion.div>
              <div className="text-sm text-[#969696]">Settlement Time</div>
            </motion.div>
            <motion.div
              className="text-center lg:text-left"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-2xl font-gilroy-bold text-[#1CA36E]"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                90%
              </motion.div>
              <div className="text-sm text-[#969696]">Cost Reduction</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right side - Animated logo */}
        <motion.div
          className="lg:w-[50%] w-full lg:flex items-center justify-center overflow-hidden relative"
          style={{ y: logoY }}
        >
          <motion.div
            className="relative"
            style={{
              rotate: logoRotate,
              scale: logoScale,
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Outer glow rings */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(28, 163, 110, 0.3)",
                  "0 0 40px rgba(28, 163, 110, 0.5)",
                  "0 0 60px rgba(255, 255, 255, 0.3)",
                  "0 0 40px rgba(28, 163, 110, 0.5)",
                  "0 0 20px rgba(28, 163, 110, 0.3)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Logo with enhanced glow */}
            <motion.img
              src={glowingSereeLogoPath}
              className="lg:w-[120%] w-full -ml-[10%] relative z-10"
              alt="Sereel Logo"
              animate={{
                filter: [
                  "drop-shadow(0 0 20px rgba(28, 163, 110, 0.8))",
                  "drop-shadow(0 0 40px rgba(255, 255, 255, 0.6))",
                  "drop-shadow(0 0 60px rgba(28, 163, 110, 1))",
                  "drop-shadow(0 0 40px rgba(255, 255, 255, 0.6))",
                  "drop-shadow(0 0 20px rgba(28, 163, 110, 0.8))",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Rotating orbital elements */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#1CA36E] rounded-full transform -translate-x-1/2 -translate-y-8 opacity-60" />
              <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 translate-y-8 opacity-60" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[#1CA36E] rounded-full flex justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-3 bg-[#1CA36E] rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Disclaimer */}
      <motion.div
        className="absolute bottom-4 right-4 text-xs text-[#969696] max-w-[300px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        *APY calculations made in test environment - results not yet proven in production
      </motion.div>
    </section>
  );
};
