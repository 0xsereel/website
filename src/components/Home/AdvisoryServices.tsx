import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { AnimatedCard } from "../Animation/AnimatedCard";
import { GlowingText } from "../Animation/GlowingText";

export const AdvisoryServices = () => {
  const services = [
    "Tokenomics design and optimization",
    "Network and protocol selection advisory",
    "Regulatory pathway mapping",
    "Go-to-market strategy for tokenized products",
    "Secondary market liquidity planning",
    "Custom infrastructure architecture",
  ];

  return (
    <section className="w-full flex items-center justify-center py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden safe-area-padding">
      <div className="w-[95%] max-w-7xl mx-auto relative z-10 responsive-container">
        <AnimatedSection className="w-full flex items-center justify-center flex-col">
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-gilroy-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlowingText className="text-[#1CA36E]">
              Boutique Tokenization Strategy & Tokenomics Consulting
            </GlowingText>
          </motion.h3>
          <motion.p
            className="mt-2 text-center text-[#D5D5D5] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Beyond technology, we provide strategic advisory to help institutions navigate the tokenization landscape. From tokenomics design to network selection, our team guides you from concept to launch.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection className="mt-12 sm:mt-16" variant="stagger">
          <AnimatedCard
            className="w-full border border-[#202026] rounded-xl p-6 sm:p-8 bg-gradient-to-br from-[#1CA36E]/5 to-white/5 hover:border-[#1CA36E]/50 transition-all duration-300"
            delay={0.2}
          >
            <div className="space-y-3 sm:space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    className="w-2 h-2 bg-[#1CA36E] rounded-full mt-2 shrink-0"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                  <span className="text-[#D5D5D5] text-base sm:text-lg">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </AnimatedCard>
        </AnimatedSection>
      </div>
    </section>
  );
};
