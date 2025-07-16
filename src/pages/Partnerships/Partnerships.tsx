// src/pages/Partnerships/Partnerships.tsx
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MobileMenu } from "../../components/Header/MobileMenu";
import { motion } from "framer-motion";
import { AnimatedSection } from "../../components/Animation/AnimatedSection";
import { AnimatedCard } from "../../components/Animation/AnimatedCard";
import { GlowingText } from "../../components/Animation/GlowingText";
import { useParallax } from "../../hooks/useParallax";

export const Partnerships = () => {
  const { ref, y } = useParallax(0.3);

  const partnerships = [
    {
      name: "VIA Labs",
      image: "/images/partnerships/via.png",
      description: "VIA Labs is a platform focused on connecting blockchain networks to create a seamless, interoperable environment.",
      focus: "Blockchain Interoperability",
      collaboration: "Cross-chain infrastructure development"
    },
    {
      name: "Primus Labs",
      image: "/images/partnerships/primus.png",
      description: "Primus Labs is a zkTLS-based data & compute verification layer for blockchains. We utilize their technology to verify real world assets.",
      focus: "zkTLS Verification",
      collaboration: "Real-world asset verification systems"
    }
  ];

  return (
    <div className="w-full">
      <Header />
      
      {/* Hero Section */}
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
            <p className="text-[#D5D5D5] text-lg">
              Building the future of institutional DeFi together
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {partnerships.map((partner, index) => (
              <AnimatedCard
                key={index}
                className="bg-gradient-to-br from-[#1CA36E]/5 to-white/5 border border-[#202026] rounded-2xl p-8 relative overflow-hidden group"
                delay={index * 0.2}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#1CA36E]/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
                  <motion.div
                    className="lg:w-[300px] w-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-full h-[200px] object-cover rounded-lg group-hover:shadow-lg group-hover:shadow-[#1CA36E]/20 transition-shadow duration-300"
                    />
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.h3 
                      className="text-3xl font-gilroy-bold mb-4 text-[#1CA36E] group-hover:text-white transition-colors duration-300"
                      whileHover={{ 
                        textShadow: "0 0 10px rgba(28, 163, 110, 0.8)"
                      }}
                    >
                      {partner.name}
                    </motion.h3>
                    
                    <p className="text-[#D5D5D5] mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {partner.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-gilroy-bold text-lg mb-2 text-white">
                          Focus Area
                        </h4>
                        <p className="text-[#969696] group-hover:text-[#D5D5D5] transition-colors duration-300">
                          {partner.focus}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-gilroy-bold text-lg mb-2 text-white">
                          Collaboration
                        </h4>
                        <p className="text-[#969696] group-hover:text-[#D5D5D5] transition-colors duration-300">
                          {partner.collaboration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>

      <MobileMenu />
      <Footer />
    </div>
  );
};
