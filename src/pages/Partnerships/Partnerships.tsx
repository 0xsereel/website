// src/pages/Partnerships/Partnerships.tsx
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MobileMenu } from "../../components/Header/MobileMenu";
import { motion } from "framer-motion";
import { AnimatedSection } from "../../components/Animation/AnimatedSection";
import { GlowingText } from "../../components/Animation/GlowingText";
import { useParallax } from "../../hooks/useParallax";

export const Partnerships = () => {
  const { ref, y } = useParallax(0.3);

  const partnerships = [
    {
      name: "VIA Labs",
      logo: "/images/partnerships/logos/via-labs-logo.jpg",
      url: "https://vialabs.io"
    },
    {
      name: "Primus Labs",
      logo: "/images/partnerships/logos/primus-labs-logo.jpg",
      url: "https://primuslabs.xyz"
    }
  ];

  return (
    <div className="w-full">
      <Header />
      
      <motion.div 
        ref={ref}
        className="w-full h-[400px] bg-black flex items-center justify-center relative overflow-hidden"
        style={{ y }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 25% 25%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 75% 75%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 25% 75%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 25% 25%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="text-center relative z-10 px-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl font-gilroy-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Strategic <GlowingText className="text-[#1CA36E]">Partnerships</GlowingText>
          </motion.h1>
          <motion.p 
            className="text-xl text-[#D5D5D5] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Collaborating with industry leaders to drive innovation and interoperability in institutional DeFi
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="w-full bg-black py-20 px-5">
        <div className="w-full max-w-5xl mx-auto">
          
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-gilroy-bold mb-4">
              Our <GlowingText className="text-[#1CA36E]">Partners</GlowingText>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {partnerships.map((partner, index) => (
              <motion.a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/5 border border-[#202026] rounded-2xl p-8 hover:border-[#1CA36E]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(28, 163, 110, 0.2)" }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-auto object-contain"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <MobileMenu />
      <Footer />
    </div>
  );
};
