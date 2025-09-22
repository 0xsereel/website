import { Button } from "../Button/Button";
import { Header } from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Hero = () => {
  const glowingSereeLogoPath = "/images/Hero/glowing_seree_logo_expanded.svg";
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
      className="w-full flex items-center flex-col min-h-screen relative overflow-hidden hero-background safe-area-padding"
      ref={containerRef}
    >
      <div className="z-[100] relative w-full">
        <Header />
      </div>

      {/* Full screen content container */}
      <div className="w-full flex-1 flex items-center justify-center lg:flex-row flex-col relative z-10 pt-20 pb-8 lg:pt-0 lg:pb-0">
        {/* Left side - Text content */}
        <motion.div
          className="lg:w-[50%] w-full lg:pl-[5%] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-0 flex flex-col justify-center"
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-gilroy-bold leading-tight text-center lg:text-left"
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
            className="text-base sm:text-lg lg:text-xl mt-4 sm:mt-5 text-[#D5D5D5] max-w-[90%] sm:max-w-[600px] text-center lg:text-left mx-auto lg:mx-0 leading-relaxed"
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
            className="mt-8 flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button onClick={handleGetStarted}className="px-8 py-4">Get Started</Button>
            </motion.div>
          </motion.div>

          {/* Enhanced statistics with horizontal layout for all screen sizes */}
          <motion.div
            className="mt-6 sm:mt-8 lg:mt-12 flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="text-center lg:text-left flex-1 min-w-0"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-gilroy-bold text-[#1CA36E]">
                &lt;4min
              </div>
              <div className="text-xs sm:text-sm text-[#969696] leading-tight mt-1">
                Settlement Time
              </div>
            </motion.div>
            <motion.div
              className="text-center lg:text-left flex-1 min-w-0"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-gilroy-bold text-[#1CA36E]">
                90%
              </div>
              <div className="text-xs sm:text-sm text-[#969696] leading-tight mt-1">
                Cost Reduction
              </div>
            </motion.div>
            <motion.div
              className="text-center lg:text-left flex-1 min-w-0"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-gilroy-bold text-[#1CA36E]">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-[#969696] leading-tight mt-1">
                Uptime
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right side - Logo area - properly hidden on mobile/medium */}
        <motion.div
          className="lg:w-[50%] w-full h-0 lg:h-full hidden lg:flex items-center justify-center relative overflow-hidden"
          style={{ y: logoY }}
        >
          <motion.div
            className="relative"
            style={{
              scale: logoScale,
              x: mousePosition.x,
              y: mousePosition.y,
            }}
          >
            {/* Logo with enhanced glow */}
            <motion.div className="relative flex items-center justify-center overflow-hidden">
              <motion.img
                src={glowingSereeLogoPath}
                className="w-[min(80vw,_500px)] lg:w-[min(40vw,_600px)] xl:w-[min(35vw,_800px)] 2xl:w-[1000px] relative z-10 max-w-full"
                alt="Sereel Logo"
                style={{
                  transformOrigin: "center",
                  maxWidth: "100%",
                  height: "auto"
                }}
                animate={{
                  filter: [
                    "brightness(1.1) drop-shadow(0 0 30px rgba(28, 163, 110, 0.6))",
                    "brightness(1.2) drop-shadow(0 0 50px rgba(28, 163, 110, 0.8))",
                    "brightness(1.1) drop-shadow(0 0 30px rgba(28, 163, 110, 0.6))",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Pulsing background element */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-2 h-2"
                style={{
                  boxShadow: "0 0 200px 100px rgba(28, 163, 110, 0.4)",
                  borderRadius: "50%",
                }}
                animate={{
                  boxShadow: [
                    "0 0 200px 100px rgba(28, 163, 110, 0.3)",
                    "0 0 300px 140px rgba(28, 163, 110, 0.5)",
                    "0 0 200px 100px rgba(28, 163, 110, 0.3)",
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
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#1CA36E] rounded-full transform -translate-x-1/2 -translate-y-12 opacity-80 shadow-lg shadow-[#1CA36E]/50" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-full transform translate-x-8 translate-y-8 opacity-80 shadow-lg shadow-white/50" />
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
    </section>
  );
};
