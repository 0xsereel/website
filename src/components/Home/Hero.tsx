import { Button } from "../Button/Button";
import { Header } from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Hero = () => {
  const glowingSereeLogoPath = "/images/Hero/glowing_seree_logo.svg";
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transformations
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse tracking for subtle logo interaction
  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
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
    <section
      className="w-full flex items-center flex-col lg:h-screen relative overflow-hidden"
      ref={containerRef}
    >
      <div className="z-[100] relative w-full">
        <Header />
      </div>

      {/* Background gradient animation that covers the entire screen */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0"
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

      {/* Full screen content container */}
      <div className="w-full h-full flex items-center justify-center lg:flex-row flex-col-reverse relative z-10">
        {/* Left side - Text content */}
        <motion.div
          className="lg:w-[50%] w-full lg:mt-0 lg:pl-[5%] px-5"
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.h1
            className="lg:text-7xl text-5xl font-gilroy-bold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Unlock the{" "}
            <span className="relative inline-block">
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#1CA36E] to-white bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                future
              </motion.span>
              <span className="text-transparent">future</span>
            </span>{" "}
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
              whileHover={{ scale: 1.1, filter: "0 0 10px #1CA36E" }}
            >
              fast settlements
            </motion.span>
            ,{" "}
            <motion.span
              className="text-[#1CA36E] font-semibold"
              whileHover={{ scale: 1.1, filter: "0 0 10px #1CA36E" }}
            >
              DeFi access
            </motion.span>
            , and{" "}
            <motion.span
              className="text-[#1CA36E] font-semibold"
              whileHover={{ scale: 1.1, filter: "0 0 10px #1CA36E" }}
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

          {/* Static stats */}
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
              <div className="text-2xl font-gilroy-bold text-[#1CA36E]">
                18-35%
              </div>
              <div className="text-sm text-[#969696]">APY Potential*</div>
            </motion.div>
            <motion.div
              className="text-center lg:text-left"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-gilroy-bold text-[#1CA36E]">
                &lt;1min
              </div>
              <div className="text-sm text-[#969696]">Settlement Time</div>
            </motion.div>
            <motion.div
              className="text-center lg:text-left"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-gilroy-bold text-[#1CA36E]">
                90%
              </div>
              <div className="text-sm text-[#969696]">Cost Reduction</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right side - Full screen logo area */}
        <motion.div
          className="lg:w-[50%] w-full h-full flex items-center justify-center relative"
          style={{ y: logoY }}
        >
          <motion.div
            className="relative"
            style={{
              scale: logoScale,
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Logo with enhanced glow */}
            <motion.div className="relative flex items-center justify-center">
              <motion.img
                src={glowingSereeLogoPath}
                className="lg:w-[650px] w-[480px] relative z-10"
                alt="Sereel Logo"
                animate={{
                  filter: [
                    "brightness(1.1) drop-shadow(0 0 15px rgba(28, 163, 110, 0.6))",
                    "brightness(1.2) drop-shadow(0 0 25px rgba(28, 163, 110, 0.8))",
                    "brightness(1.1) drop-shadow(0 0 15px rgba(28, 163, 110, 0.6))",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Add a pulsing background element */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-1 h-1"
                style={{
                  boxShadow: "0 0 100px 50px rgba(28, 163, 110, 0.4)",
                  borderRadius: "50%",
                }}
                animate={{
                  boxShadow: [
                    "0 0 100px 50px rgba(28, 163, 110, 0.3)",
                    "0 0 150px 70px rgba(28, 163, 110, 0.5)",
                    "0 0 100px 50px rgba(28, 163, 110, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Three rotating orbital elements */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {/* Dot 1 - Top */}
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#1CA36E] rounded-full transform -translate-x-1/2 -translate-y-12 opacity-80 shadow-lg shadow-[#1CA36E]/50" />

              {/* Dot 2 - Bottom Right */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-full transform translate-x-8 translate-y-8 opacity-80 shadow-lg shadow-white/50" />

              {/* Dot 3 - Bottom Left */}
              <div className="absolute bottom-0 left-0 w-3 h-3 bg-[#1CA36E] rounded-full transform -translate-x-8 translate-y-8 opacity-80 shadow-lg shadow-[#1CA36E]/50" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
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
        className="absolute bottom-4 right-4 text-xs text-[#969696] max-w-[300px] z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        *APY calculations made in test environment - results not yet proven in
        production
      </motion.div>
    </section>
  );
};
