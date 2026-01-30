// src/components/Home/IGS.tsx
import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { GlowingText } from "../Animation/GlowingText";

export const IGS = () => {
  const differentiators = [
    {
      number: "1",
      title: "Standards-Based, Not Proprietary",
      description:
        "Built on CMTA—the open standard adopted by leading Swiss banks, validated by Project Guardian, and recognized across 40+ institutional members. Your tokens are portable, not locked into our platform.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      number: "2",
      title: "True Multi-Chain, Not Multi-Chain Theater",
      description:
        "Native deployments across EVM chains, Solana, IOTA, Starknet, and Canton Network. Not bridges. Not wrapped tokens. Native issuance with full feature parity.",
      color: "from-[#1CA36E]/20 to-green-500/20",
    },
    {
      number: "3",
      title: "Privacy Where It Matters",
      description:
        "Canton Network integration enables privacy-preserving transactions for institutional use cases requiring confidentiality—without sacrificing regulatory transparency.",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      number: "4",
      title: "Production-Ready, Not Pilot-Ready",
      description:
        "Live clients tokenizing bonds, securities, stablecoins, and utility tokens. Proven infrastructure supporting real capital flows, not proofs of concept.",
      color: "from-yellow-500/20 to-orange-500/20",
    },
  ];

  return (
    <section className="w-full flex items-center justify-center py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden safe-area-padding">
      <div className="w-[90%] max-w-7xl mx-auto relative z-10 responsive-container">
        <AnimatedSection className="w-full flex items-center justify-center flex-col mb-12">
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-gilroy-bold text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why <GlowingText className="text-[#1CA36E]">Sereel</GlowingText>
          </motion.h3>
          <motion.p
            className="mt-2 text-center text-[#D5D5D5] text-sm sm:text-base lg:text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What sets us apart in institutional tokenization infrastructure
          </motion.p>
        </AnimatedSection>

        <AnimatedSection className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((diff, index) => (
              <motion.div
                key={index}
                className="w-full border border-[#202026] rounded-xl p-6 sm:p-8 bg-gradient-to-br from-[#1CA36E]/5 to-black relative overflow-hidden hover:border-[#1CA36E]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  backgroundColor: "rgba(28, 163, 110, 0.08)",
                  scale: 1.02,
                }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${diff.color} opacity-0`}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <motion.div
                    className="w-12 h-12 sm:w-14 sm:h-14 border border-[#5F5F7138] rounded-full bg-white/5 flex items-center justify-center mb-4"
                    whileHover={{
                      backgroundColor: "rgba(28, 163, 110, 0.1)",
                      borderColor: "rgba(28, 163, 110, 0.5)",
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-gilroy-bold text-[#1CA36E] text-lg">
                      {diff.number}
                    </span>
                  </motion.div>

                  <motion.h3
                    className="font-gilroy-bold text-xl sm:text-2xl mb-3 text-white"
                    whileHover={{
                      color: "#1CA36E",
                    }}
                  >
                    {diff.title}
                  </motion.h3>
                  <motion.p
                    className="text-[#D5D5D5] leading-relaxed text-sm sm:text-base"
                    whileHover={{ color: "#FFFFFF" }}
                    transition={{ duration: 0.3 }}
                  >
                    {diff.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
