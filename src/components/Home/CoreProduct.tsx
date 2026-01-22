// src/components/Home/CoreProduct.tsx
import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { AnimatedCard } from "../Animation/AnimatedCard";
import { GlowingText } from "../Animation/GlowingText";

export const CoreProduct = () => {
  const pillars = [
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22.8C12 22.8 20 18.8 20 12.8V5.80005L12 2.80005L4 5.80005V12.8C4 18.8 12 22.8 12 22.8Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Enterprise Digital Asset Custody",
      headline: "Institutional DeFi Infrastructure & Enterprise Wallet Solutions",
      description:
        "Enterprise digital asset custody with institutional tokenization infrastructure for RWA tokenization platform and Canton Network tokenization.",
      subDescription:
        "Purpose-built for security token issuance, bond tokenization platform operations, and institutional DeFi infrastructure requiring granular access controls and compliance-ready audit trails.",
      capabilities: [
        "Enterprise EOA wallets with institutional security architecture",
        "Multi-signature governance with configurable approval workflows",
        "Shamir Secret Sharing for distributed key recovery",
        "Complete audit trails and compliance reporting",
        "Role-based access control for treasury operations",
      ],
    },
    {
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.6666 2.80005L3.66663 14.8H12.6666L11.6666 22.8L21.6666 10.8H12.6666L13.6666 2.80005Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Security Token Issuance & CMTA Tokenization",
      headline: "Multi-Chain Tokenization with RWA Tokenization Platform",
      description:
        "Security token issuance with CMTA tokenization across Canton Network and institutional DeFi infrastructure.",
      subDescription:
        "Our bond tokenization platform enables real world asset tokenization, private credit tokenization, treasury tokenization, and stablecoin issuance platform capabilities with Regulation S/D token issuance. Deploy tokenized securities platform solutions across leading blockchain networks—the institutional benchmark for institutional tokenization infrastructure.",
      capabilities: [],
    },
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9.80005H8C9.10457 9.80005 10 10.6955 10 11.8V20.8H6C4.89543 20.8 4 19.9046 4 18.8V11.8C4 10.6955 4.89543 9.80005 6 9.80005Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 4.80005H16C17.1046 4.80005 18 5.69548 18 6.80005V20.8H14V4.80005Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 7.80005H12C13.1046 7.80005 14 8.69548 14 9.80005V20.8H10V7.80005Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Bond Tokenization Platform & Tokenized Securities",
      headline: "Private Credit Tokenization, Treasury Tokenization, Stablecoin Issuance",
      description:
        "Bond tokenization platform for private credit tokenization, treasury tokenization, and stablecoin issuance platform solutions.",
      subDescription:
        "Our tokenized securities platform provides real world asset tokenization with Regulation S/D token issuance frameworks across global markets using CMTA tokenization standards for institutional tokenization infrastructure.",
      assetClasses: [
        "Securities & Equity",
        "Bonds & Fixed Income",
        "Private Credit",
        "Stablecoins",
        "Utility Tokens",
        "Structured Products",
      ],
      regulatoryFrameworks: [
        "Regulation S (Non-US Offerings)",
        "Regulation D (Accredited US Investors)",
        "MiCA-Ready (European Union)",
        "Swiss DLT Framework",
        "Singapore MAS Guidelines",
        "Custom Jurisdictional Support",
      ],
    },
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 16.8V8.80005C20.9996 8.44093 20.9071 8.08763 20.7315 7.77406C20.556 7.46049 20.3037 7.19682 20 7.00505L13 3.00505C12.696 2.81338 12.3511 2.71252 12 2.71252C11.6489 2.71252 11.304 2.81338 11 3.00505L4 7.00505C3.69626 7.19682 3.44398 7.46049 3.26846 7.77406C3.09294 8.08763 3.00036 8.44093 3 8.80005V16.8C3.00036 17.1592 3.09294 17.5125 3.26846 17.826C3.44398 18.1396 3.69626 18.4033 4 18.595L11 22.595C11.304 22.7867 11.6489 22.8876 12 22.8876C12.3511 22.8876 12.696 22.7867 13 22.595L20 18.595C20.3037 18.4033 20.556 18.1396 20.7315 17.826C20.9071 17.5125 20.9996 17.1592 21 16.8Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.27002 7.72005L12 12.81L20.73 7.72005"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22.88V12.8"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Canton Network & Multi-Chain Integration",
      headline: "Canton Network Tokenization with Institutional DeFi Infrastructure",
      description:
        "Multi-chain tokenization with Canton Network integration for institutional DeFi infrastructure.",
      subDescription:
        "Complete RWA tokenization platform for security token issuance, enterprise digital asset custody, and tokenized securities platform. Connect institutional tokenization infrastructure to global liquidity through our exchange partnerships and CMTA tokenization standards.",
      capabilities: [
        "Primary issuance and distribution infrastructure",
        "Secondary market connectivity",
        "T+0 settlement capabilities",
        "Institutional custody integrations",
        "OTC and exchange connectivity",
      ],
    },
  ];

  return (
    <section className="w-full flex items-center justify-center py-16 sm:py-20 lg:py-28 xl:py-32 relative overflow-hidden safe-area-padding">
      <div className="w-[95%] max-w-7xl mx-auto relative z-10 responsive-container">
        <AnimatedSection className="w-full flex items-center justify-center flex-col mb-16 sm:mb-20 lg:mb-24">
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-gilroy-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlowingText className="text-[#1CA36E]">Platform Pillars</GlowingText>
          </motion.h3>
          <motion.p
            className="text-center text-[#D5D5D5] text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            RWA tokenization platform with institutional tokenization infrastructure, security token issuance, CMTA tokenization, enterprise digital asset custody, bond tokenization, and Canton Network integration for institutional DeFi infrastructure
          </motion.p>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {pillars.map((pillar, index) => (
            <AnimatedCard
              key={index}
              className={`w-full border border-[#202026] rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-[#1CA36E]/50 hover:shadow-[0_0_30px_rgba(28,163,110,0.1)] ${
                index % 2 === 0
                  ? "bg-gradient-to-br from-[#1CA36E]/8 to-white/8"
                  : "bg-gradient-to-br from-white/10 to-[#1CA36E]/5"
              }`}
              delay={index * 0.15}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border border-[#5F5F7138] rounded-2xl bg-white/5 flex items-center justify-center shrink-0"
                  whileHover={{
                    backgroundColor: "rgba(28, 163, 110, 0.15)",
                    borderColor: "rgba(28, 163, 110, 0.6)",
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="transform scale-110 sm:scale-125">
                    {pillar.icon}
                  </div>
                </motion.div>

                <div className="flex-1 space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-gilroy-bold text-xl sm:text-2xl lg:text-3xl text-white leading-tight">
                      {pillar.headline}
                    </h3>
                    <p className="text-[#E5E5E5] text-base sm:text-lg leading-relaxed">
                      {pillar.description}
                    </p>
                    <p className="text-[#B5B5B5] text-sm sm:text-base leading-relaxed">
                      {pillar.subDescription}
                    </p>
                  </div>

                  {pillar.capabilities && pillar.capabilities.length > 0 && (
                    <div className="pt-4 border-t border-[#202026]/50">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                        {pillar.capabilities.map((capability, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-3 text-sm sm:text-base text-[#A5A5A5]"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            viewport={{ once: true }}
                          >
                            <motion.span
                              className="w-2 h-2 bg-[#1CA36E] rounded-full mt-2 shrink-0"
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.6, 1, 0.6],
                              }}
                              transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                delay: idx * 0.3,
                              }}
                            />
                            <span className="leading-relaxed">{capability}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {pillar.assetClasses && (
                    <div className="pt-4 border-t border-[#202026]/50">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h4 className="font-gilroy-bold text-base sm:text-lg text-white/90 flex items-center gap-2">
                            <span className="w-1 h-6 bg-[#1CA36E] rounded-full"></span>
                            Asset Classes
                          </h4>
                          <div className="space-y-3 pl-4">
                            {pillar.assetClasses.map((asset, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-center gap-3 text-sm sm:text-base text-[#A5A5A5]"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                viewport={{ once: true }}
                              >
                                <motion.span
                                  className="w-2 h-2 bg-[#1CA36E] rounded-full shrink-0"
                                  animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.6, 1, 0.6],
                                  }}
                                  transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    delay: idx * 0.3,
                                  }}
                                />
                                {asset}
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-gilroy-bold text-base sm:text-lg text-white/90 flex items-center gap-2">
                            <span className="w-1 h-6 bg-[#1CA36E] rounded-full"></span>
                            Regulatory Frameworks
                          </h4>
                          <div className="space-y-3 pl-4">
                            {pillar.regulatoryFrameworks?.map((framework, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-center gap-3 text-sm sm:text-base text-[#A5A5A5]"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                viewport={{ once: true }}
                              >
                                <motion.span
                                  className="w-2 h-2 bg-[#1CA36E] rounded-full shrink-0"
                                  animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.6, 1, 0.6],
                                  }}
                                  transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    delay: idx * 0.3,
                                  }}
                                />
                                {framework}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
