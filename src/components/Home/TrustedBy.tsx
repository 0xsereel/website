// src/components/Home/TrustedBy.tsx
import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
// import { AnimatedCard } from "../Animation/AnimatedCard";
import { GlowingText } from "../Animation/GlowingText";
// import { useParallax } from "../../hooks/useParallax";


const logos = [
  {
    image: "/images/blog/Growtoken.jfif",
    url: "https://growtokens.io/", 
    name: "Growtoken"
  },
  {
    image: "/images/blog/FWG2.jpg",
    url: "https://futurewealthgroup.ch/", 
    name: "FWG"
  },
  {
    image: "/images/blog/future_energy_global_logo.jfif",
    url: "https://fe.global/", 
    name: "Future Energy Global"
  },
];;

export const TrustedBy = () => {
    // const { ref, y } = useParallax(0.3);

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
                <GlowingText className="text-[#1CA36E]"> Trusted</GlowingText>{" "} By
                      
          </motion.h3>
           <motion.p
                className="mt-2 text-center text-[#D5D5D5] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                >
                From banks to asset managers, trusted by institutions building the future of sustainable finance.
            </motion.p> 
                  
          <div className="w-full flex items-center justify-center gap-6 sm:gap-10 lg:gap-16 mt-10 sm:mt-12 lg:mt-14 flex-wrap">
            {logos.map((logo, index) => (
              <motion.a
                key={index}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ opacity: 1, scale: 1.05 }}
              >
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.a>
            ))}
          </div>
                      
                  
        </AnimatedSection>

       
      </div>
    </section>
  );
};