// src/components/Home/CoreProduct.tsx
import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
// import { AnimatedCard } from "../Animation/AnimatedCard";
import { GlowingText } from "../Animation/GlowingText";
// import { useParallax } from "../../hooks/useParallax";

const logos = [
"/public/images/blog/Arbitrum.png",
"/public/images/blog/Base.jfif",
"/public/images/blog/Canton_network.png",
"/public/images/blog/Ethereum.png",
"/public/images/blog/Iota.png",
"/public/images/blog/optimism.png",
"/public/images/blog/Starknet.png",
"/public/images/blog/polygon.jfif",


];

export const SupportedChains = () => {
    // const { ref, y } = useParallax(0.3);
    
    const scrollingLogos = [...logos, ...logos];


  return (
    <section className="w-full flex items-center justify-center py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden safe-area-padding">
      {/* Parallax Background */}
      {/* <motion.div
        ref={ref}
        className="absolute inset-0 bg-gradient-to-br from-[#1CA36E]/5 via-transparent to-[#1CA36E]/10"
        style={{ y }}
      /> */}

      <div className="w-[95%] max-w-7xl mx-auto relative z-10 responsive-container">
        <AnimatedSection className="w-full flex items-center justify-center flex-col">
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-gilroy-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
                <GlowingText className="text-[#1CA36E]"> Supported</GlowingText>{" "} Chains
                      
          </motion.h3>
           <motion.p
                className="mt-2 text-center text-[#D5D5D5] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                >
                Built without Boundaries. Seamlessly deployed across chains powering decentralized finance.
            </motion.p> 
                  
        <div className="w-full overflow-hidden relative mt-10 sm:mt-12 lg:mt-14">
            <motion.div
              className="flex items-center gap-6 sm:gap-10 lg:gap-16"
              animate={{ x: [0, -1000] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              }}
              whileHover={{ animationPlayState: "paused" as never }}
            >
              {scrollingLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[140px] sm:min-w-[180px] lg:min-w-[220px] opacity-70 hover:opacity-100 transition-opacity"
                >
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm">
                    <img
                      src={logo}
                      alt="Trusted company logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
                      
                  
        </AnimatedSection>

       
      </div>
    </section>
  );
};
