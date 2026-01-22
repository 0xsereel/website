import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { AnimatedCard } from "../Animation/AnimatedCard";
import { GlowingText } from "../Animation/GlowingText";

export const WhySereel = () => {
  const reasons = [
    {
      title: "Standards-Based, Not Proprietary",
      description:
        "Built on CMTA—the open standard adopted by leading Swiss banks, validated by Project Guardian, and recognized across 40+ institutional members. Your tokens are portable, not locked into our platform.",
    },
    {
      title: "True Multi-Chain, Not Multi-Chain Theater",
      description:
        "Native deployments across EVM chains, Solana, IOTA, Starknet, and Canton Network. Not bridges. Not wrapped tokens. Native issuance with full feature parity.",
    },
    {
      title: "Privacy Where It Matters",
      description:
        "Canton Network integration enables privacy-preserving transactions for institutional use cases requiring confidentiality—without sacrificing regulatory transparency.",
    },
    {
      title: "Production-Ready, Not Pilot-Ready",
      description:
        "Live clients tokenizing bonds, securities, stablecoins, and utility tokens. Proven infrastructure supporting real capital flows, not proofs of concept.",
    },
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
            <GlowingText className="text-[#1CA36E]">Why Sereel</GlowingText>
          </motion.h3>
          <motion.p
            className="mt-2 text-center text-[#D5D5D5] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Built for institutions that need real solutions, not pilot projects
          </motion.p>
        </AnimatedSection>

        <AnimatedSection
          className="responsive-grid mt-12 sm:mt-16"
          variant="stagger"
        >
          {reasons.map((reason, index) => (
            <AnimatedCard
              key={index}
              className="w-full min-h-[280px] sm:min-h-[300px] border border-[#202026] rounded-xl p-4 sm:p-6 bg-gradient-to-br from-[#1CA36E]/5 to-white/5 hover:border-[#1CA36E]/50 transition-all duration-300 flex flex-col"
              delay={index * 0.1}
            >
              <div className="mt-2 sm:mt-3 flex-1 flex flex-col">
                <h3 className="font-gilroy-bold text-lg sm:text-xl mb-2 text-white">
                  {reason.title}
                </h3>
                <p className="text-[#D5D5D5] leading-relaxed text-sm sm:text-base">
                  {reason.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};
