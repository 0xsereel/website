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

  const logoY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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

  const handleScheduleConsultation = () => {
    navigate("/contact");
  };

  const handleDownloadOverview = () => {
    console.log("Download Infrastructure Overview");
  };

  return (
    <section
      className="w-full flex items-center flex-col min-h-screen relative overflow-hidden hero-background safe-area-padding"
      ref={containerRef}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(28, 163, 110, 0.05) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="z-[100] relative w-full">
        <Header />
      </div>

      <div className="w-full flex-1 flex items-center justify-center lg:flex-row flex-col relative z-10 pt-20 pb-8 lg:pt-0 lg:pb-0 gap-8 lg:gap-12">
        <motion.div
          className="lg:w-[50%] w-full lg:pl-[5%] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-0 flex flex-col justify-center"
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="absolute -inset-4 rounded-3xl opacity-0"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(28, 163, 110, 0.05) 100%)",
                backdropFilter: "blur(10px)",
              }}
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-gilroy-bold leading-tight text-center lg:text-left relative z-10">
              RWA Tokenization Platform & Institutional Tokenization Infrastructure
            </h1>
          </motion.div>

          <motion.div
            className="mt-4 sm:mt-5 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div
              className="absolute -inset-3 rounded-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            />
            <p className="text-base sm:text-lg lg:text-xl text-[#D5D5D5] max-w-[90%] sm:max-w-[600px] text-center lg:text-left mx-auto lg:mx-0 leading-relaxed relative z-10 p-3">
              Enterprise digital asset custody, security token issuance, and CMTA tokenization infrastructure. Bond tokenization platform with Regulation S/D compliance. Multi-chain tokenization across Canton Network and institutional DeFi infrastructure for real world asset tokenization, private credit tokenization, treasury tokenization, and stablecoin issuance.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button onClick={handleScheduleConsultation} className="px-8 py-4 w-full sm:w-auto shadow-lg shadow-[#1CA36E]/20">
                Schedule Consultation
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full" style={{ background: "rgba(255, 255, 255, 0.03)" }} />
                <Button 
                  onClick={handleDownloadOverview} 
                  className="px-8 py-4 w-full sm:w-auto bg-transparent border-2 border-[#1CA36E] text-[#1CA36E] hover:bg-[#1CA36E] hover:text-white transition-all duration-300 backdrop-blur-sm relative"
                >
                  Download Infrastructure Overview
                </Button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-6 sm:mt-8 lg:mt-12 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="absolute -inset-4 rounded-3xl"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(28, 163, 110, 0.03) 100%)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(28, 163, 110, 0.1)",
                  "0 0 40px rgba(28, 163, 110, 0.2)",
                  "0 0 20px rgba(28, 163, 110, 0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 lg:gap-8 relative z-10 p-4">
              <motion.div
                className="text-center lg:text-left flex-1 min-w-0 relative"
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0"
                  whileHover={{ opacity: 1 }}
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(28, 163, 110, 0.05) 100%)",
                    backdropFilter: "blur(10px)",
                  }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10 p-2">
                  <motion.div 
                    className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-gilroy-bold text-[#1CA36E]"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(28, 163, 110, 0.3)",
                        "0 0 20px rgba(28, 163, 110, 0.5)",
                        "0 0 10px rgba(28, 163, 110, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    $30B+
                  </motion.div>
                  <div className="text-xs sm:text-sm text-[#969696] leading-tight mt-1">
                    Tokenized RWA Market
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="text-center lg:text-left flex-1 min-w-0 relative"
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0"
                  whileHover={{ opacity: 1 }}
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(28, 163, 110, 0.05) 100%)",
                    backdropFilter: "blur(10px)",
                  }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10 p-2">
                  <motion.div 
                    className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-gilroy-bold text-[#1CA36E]"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(28, 163, 110, 0.3)",
                        "0 0 20px rgba(28, 163, 110, 0.5)",
                        "0 0 10px rgba(28, 163, 110, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  >
                    189%
                  </motion.div>
                  <div className="text-xs sm:text-sm text-[#969696] leading-tight mt-1">
                    Projected CAGR to 2030
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="text-center lg:text-left flex-1 min-w-0 relative"
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0"
                  whileHover={{ opacity: 1 }}
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(28, 163, 110, 0.05) 100%)",
                    backdropFilter: "blur(10px)",
                  }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10 p-2">
                  <motion.div 
                    className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-gilroy-bold text-[#1CA36E]"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(28, 163, 110, 0.3)",
                        "0 0 20px rgba(28, 163, 110, 0.5)",
                        "0 0 10px rgba(28, 163, 110, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  >
                    $3T+
                  </motion.div>
                  <div className="text-xs sm:text-sm text-[#969696] leading-tight mt-1">
                    Projected Market by 2030
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-[50%] w-full h-0 lg:h-full hidden lg:flex items-center justify-center relative overflow-hidden"
          style={{ y: logoY }}
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <motion.div
              className="absolute rounded-full"
              style={{
                width: "70%",
                height: "70%",
                background: "radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          <motion.div
            className="relative z-10"
            style={{
              scale: logoScale,
              x: mousePosition.x,
              y: mousePosition.y,
            }}
          >
            <motion.div 
              className="relative flex items-center justify-center overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 60%)",
                  backdropFilter: "blur(15px)",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
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
                    "brightness(1.1) drop-shadow(0 0 30px rgba(28, 163, 110, 0.6)) drop-shadow(0 0 60px rgba(255, 255, 255, 0.1))",
                    "brightness(1.2) drop-shadow(0 0 50px rgba(28, 163, 110, 0.8)) drop-shadow(0 0 80px rgba(255, 255, 255, 0.15))",
                    "brightness(1.1) drop-shadow(0 0 30px rgba(28, 163, 110, 0.6)) drop-shadow(0 0 60px rgba(255, 255, 255, 0.1))",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-2 h-2"
                style={{
                  boxShadow: "0 0 200px 100px rgba(28, 163, 110, 0.4)",
                  borderRadius: "50%",
                }}
                animate={{
                  boxShadow: [
                    "0 0 200px 100px rgba(28, 163, 110, 0.3), 0 0 300px 150px rgba(255, 255, 255, 0.05)",
                    "0 0 300px 140px rgba(28, 163, 110, 0.5), 0 0 400px 200px rgba(255, 255, 255, 0.08)",
                    "0 0 200px 100px rgba(28, 163, 110, 0.3), 0 0 300px 150px rgba(255, 255, 255, 0.05)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <motion.div 
                className="absolute top-0 left-1/2 w-3 h-3 bg-[#1CA36E] rounded-full transform -translate-x-1/2 -translate-y-12 shadow-lg shadow-[#1CA36E]/50"
                style={{
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
                animate={{
                  opacity: [0.8, 1, 0.8],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-full transform translate-x-8 translate-y-8 shadow-lg shadow-white/50"
                style={{
                  backdropFilter: "blur(5px)",
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.5), inset 0 0 10px rgba(28, 163, 110, 0.3)",
                }}
                animate={{
                  opacity: [0.8, 1, 0.8],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-3 h-3 bg-[#1CA36E] rounded-full transform -translate-x-8 translate-y-8 shadow-lg shadow-[#1CA36E]/50"
                style={{
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
                animate={{
                  opacity: [0.8, 1, 0.8],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(28, 163, 110, 0.4) 100%)",
                    backdropFilter: "blur(3px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${i * 60}deg) translateY(-150px)`,
                  }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[#1CA36E] rounded-full flex justify-center relative"
          whileHover={{ scale: 1.1 }}
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            backdropFilter: "blur(5px)",
            boxShadow: "0 0 20px rgba(28, 163, 110, 0.2)",
          }}
        >
          <motion.div
            className="w-1 h-3 bg-[#1CA36E] rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              boxShadow: "0 0 10px rgba(28, 163, 110, 0.5)",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
