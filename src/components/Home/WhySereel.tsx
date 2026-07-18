import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { AnimatedCard } from "../Animation/AnimatedCard";

export const WhySereel = () => {
  const reasons = [
    {
      number: "01",
      title: "Standards-Based, Not Proprietary",
      description:
        "Built on CMTA—the open standard adopted by leading Swiss banks, validated by Project Guardian, and recognized across 40+ institutional members. Your tokens are portable, not locked into our platform.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12V19C21 19.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      number: "02",
      title: "True Multi-Chain, Not Multi-Chain Theater",
      description:
        "Native deployments across EVM chains, Solana, IOTA, Starknet, and Canton Network. Not bridges. Not wrapped tokens. Native issuance with full feature parity.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      number: "03",
      title: "Privacy Where It Matters",
      description:
        "Canton Network integration enables privacy-preserving transactions for institutional use cases requiring confidentiality—without sacrificing regulatory transparency.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      number: "04",
      title: "Production-Ready, Not Pilot-Ready",
      description:
        "Live clients tokenizing bonds, securities, stablecoins, and utility tokens. Proven infrastructure supporting real capital flows, not proofs of concept.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#F8FAF9] via-white to-[#F0F9F5] py-16 sm:py-20 lg:py-24 xl:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(28,163,110,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(28,163,110,0.05)_0%,transparent_50%)] pointer-events-none" />

      <div className="w-[95%] max-w-7xl mx-auto relative z-10">
        <AnimatedSection className="w-full flex items-center justify-center flex-col mb-16 sm:mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-[#1CA36E]/20 mb-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="w-2 h-2 bg-[#1CA36E] rounded-full animate-pulse" />
            <span className="text-[#1CA36E] font-gilroy-medium text-sm">Why Choose Us</span>
          </motion.div>

          <motion.h3
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gilroy-bold text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-[#1A1A1A] via-[#1CA36E] to-[#1A1A1A] bg-clip-text text-transparent">
              Why Sereel
            </span>
          </motion.h3>

          <motion.p
            className="text-center text-[#666666] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Built for institutions that need real solutions, not pilot projects
          </motion.p>
        </AnimatedSection>

        <AnimatedSection
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          variant="stagger"
        >
          {reasons.map((reason, index) => (
            <AnimatedCard
              key={index}
              className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 sm:p-10 hover:border-[#1CA36E] hover:shadow-[0_12px_48px_rgba(28,163,110,0.15)] transition-all duration-500"
              delay={index * 0.15}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1CA36E]/0 via-transparent to-[#1CA36E]/0 group-hover:from-[#1CA36E]/5 group-hover:to-[#1CA36E]/5 rounded-3xl transition-all duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1CA36E]/10 to-[#1CA36E]/5 flex items-center justify-center text-[#1CA36E] group-hover:scale-110 group-hover:from-[#1CA36E] group-hover:to-[#00FFB2] group-hover:text-white transition-all duration-500"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    {reason.icon}
                  </motion.div>
                  
                  <span className="text-6xl font-gilroy-bold text-[#1CA36E]/10 group-hover:text-[#1CA36E]/20 transition-colors duration-500">
                    {reason.number}
                  </span>
                </div>

                <h4 className="font-gilroy-bold text-xl sm:text-2xl mb-4 text-[#1A1A1A] group-hover:text-[#1CA36E] transition-colors duration-300">
                  {reason.title}
                </h4>
                
                <p className="text-[#666666] leading-relaxed text-base sm:text-lg">
                  {reason.description}
                </p>

                <motion.div
                  className="mt-6 w-12 h-1 bg-gradient-to-r from-[#1CA36E] to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </div>
            </AnimatedCard>
          ))}
        </AnimatedSection>

        <motion.div
          className="mt-16 sm:mt-20 bg-gradient-to-r from-[#1CA36E] to-[#00FFB2] rounded-3xl p-10 sm:p-12 text-center shadow-[0_12px_48px_rgba(28,163,110,0.2)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl sm:text-3xl font-gilroy-bold text-white mb-4">
            Ready to build on production-grade infrastructure?
          </h4>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join leading institutions leveraging our CMTA-compliant, multi-chain tokenization platform
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full text-[#1CA36E] font-gilroy-medium text-lg hover:shadow-[0_8px_32px_rgba(255,255,255,0.3)] transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
