// src/components/About/AdvisoryServices.tsx
import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { GlowingText } from "../Animation/GlowingText";
import { useNavigate } from "react-router-dom";

export const AdvisoryServices = () => {
  const navigate = useNavigate();

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
      <div className="w-[95%] max-w-6xl mx-auto relative z-10 responsive-container">
        <AnimatedSection className="w-full border border-[#202026] rounded-2xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#1CA36E]/10 to-black/50 backdrop-blur-sm">
          <motion.div
            className="flex flex-col lg:flex-row gap-8 lg:gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-1/2">
              <motion.h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-gilroy-bold mb-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <GlowingText className="text-[#1CA36E]">Boutique</GlowingText>{" "}
                Tokenization Strategy
              </motion.h3>
              <motion.p
                className="text-lg sm:text-xl text-[#1CA36E] font-semibold mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                & Tokenomics Consulting
              </motion.p>
              <motion.p
                className="text-[#D5D5D5] leading-relaxed text-sm sm:text-base mb-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Beyond technology, we provide strategic advisory to help institutions navigate the tokenization landscape. From tokenomics design to network selection, our team guides you from concept to launch.
              </motion.p>

              <motion.button
                onClick={() => navigate("/contact")}
                className="flex items-center gap-2 text-[#1CA36E] font-semibold hover:text-white transition-colors duration-300 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                Schedule a consultation
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </div>

            <div className="lg:w-1/2">
              <motion.h4
                className="text-lg sm:text-xl font-gilroy-bold text-white mb-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Services
              </motion.h4>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-[#1CA36E] rounded-full mt-2 shrink-0"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    <span className="text-[#D5D5D5] text-sm sm:text-base">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
