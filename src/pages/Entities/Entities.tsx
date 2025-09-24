// src/pages/Entities/Entities.tsx
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MobileMenu } from "../../components/Header/MobileMenu";
import { motion } from "framer-motion";
import { AnimatedSection } from "../../components/Animation/AnimatedSection";
import { AnimatedCard } from "../../components/Animation/AnimatedCard";
import { GlowingText } from "../../components/Animation/GlowingText";
import { useParallax } from "../../hooks/useParallax";

export const Entities = () => {
  const { ref, y } = useParallax(0.3);

  const entities = [
    {
      name: "Seree Technologies, Inc.",
      location: "Delaware, USA",
      icon: "🏢",
      color: "from-blue-500/10 to-cyan-500/10",
    },
    {
      name: "Sereel Technologies Botswana",
      location: "Gaborone, Botswana",
      icon: "🌍",
      color: "from-[#1CA36E]/10 to-green-500/10",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <motion.div
        ref={ref}
        className="w-full h-[400px] bg-black flex items-center justify-center relative overflow-hidden pt-28"
        style={{ y }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 40%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 60%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 40%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
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
            <GlowingText className="text-[#1CA36E]">Global</GlowingText> Company
            Structure
          </motion.h1>
          <motion.p
            className="text-xl text-[#D5D5D5] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            As a global company, we have a growing number of entities
            strategically positioned worldwide
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="w-full bg-black py-20 px-5">
        <div className="w-full max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-gilroy-bold mb-4">
              Our <GlowingText className="text-[#1CA36E]">Entities</GlowingText>
            </h2>
            <p className="text-[#D5D5D5] text-lg">
              Strategically positioned to serve institutional clients globally
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {entities.map((entity, index) => (
              <AnimatedCard
                key={index}
                className="bg-gradient-to-br from-[#1CA36E]/5 to-white/5 border border-[#202026] rounded-2xl p-8 relative overflow-hidden group"
                delay={index * 0.2}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${entity.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                <div className="relative z-10">
                  <motion.div className="text-6xl mb-6">
                    {entity.icon}
                  </motion.div>

                  <h3 className="text-2xl font-gilroy-bold mb-2 text-[#1CA36E] group-hover:text-white transition-colors duration-300">
                    {entity.name}
                  </h3>

                  <p className="text-[#969696] mb-6 group-hover:text-[#D5D5D5] transition-colors duration-300">
                    📍 {entity.location}
                  </p>
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
