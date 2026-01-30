// src/components/Home/CoreProduct.tsx
import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { AnimatedCard } from "../Animation/AnimatedCard";
import { GlowingText } from "../Animation/GlowingText";
import { useNavigate } from "react-router-dom";

export const CoreProduct = () => {
  const navigate = useNavigate();

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
      title: "Enterprise Wallet Infrastructure",
      subtitle: "Institutional-Grade Custody & Key Management",
      description:
        "Enterprise EOA wallets and multisignature solutions engineered for institutional security requirements.",
      capabilities: [
        "Enterprise EOA wallets with institutional security",
        "Multi-signature governance with approval workflows",
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
      title: "Tokenization Engine",
      subtitle: "Multi-Chain Tokenization Built on Open Standards",
      description:
        "Deploy compliant security tokens using the CMTA standard—the institutional benchmark adopted by major Swiss banks.",
      capabilities: [
        "EVM Chains: Ethereum, Arbitrum, Base, Polygon, Optimism",
        "Non-EVM: Solana, IOTA, Starknet",
        "Enterprise: Canton Network (privacy-preserving)",
        "Interoperability: Chainlink CCIP integration",
        "CMTA-compliant tokenization (CMTAT & ERC3643)",
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
            d="M3 3.8H21M3 9.8H21M3 15.8H21M3 21.8H21"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Asset Classes & Regulatory Support",
      subtitle: "Tokenize Any Asset. Any Jurisdiction.",
      description:
        "Technical and legal frameworks to tokenize assets compliantly across global markets.",
      capabilities: [
        "Securities & Equity, Bonds & Fixed Income",
        "Private Credit, Stablecoins, Utility Tokens",
        "Regulation S (Non-US Offerings)",
        "Regulation D (Accredited US Investors)",
        "MiCA-Ready, Swiss DLT, Singapore MAS Guidelines",
      ],
    },
    {
      icon: (
        <svg
          width="25"
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
      title: "Market Infrastructure",
      subtitle: "Trading, Settlement & Distribution Rails",
      description:
        "Complete market infrastructure for primary issuance, secondary trading, and institutional settlement.",
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
            <GlowingText className="text-[#1CA36E]">Platform</GlowingText> Pillars
          </motion.h3>
          <motion.p
            className="mt-2 text-center text-[#D5D5D5] text-sm sm:text-base lg:text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Complete institutional infrastructure from custody to tokenization to market access
          </motion.p>
        </AnimatedSection>

        <AnimatedSection
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 sm:mt-16"
          variant="stagger"
        >
          {pillars.map((pillar, index) => (
            <AnimatedCard
              key={index}
              className="w-full border border-[#202026] rounded-xl p-6 sm:p-8 bg-gradient-to-br from-[#1CA36E]/5 to-white/5 hover:border-[#1CA36E]/50 transition-all duration-300 flex flex-col"
              delay={index * 0.1}
            >
              <div className="w-full flex items-start gap-4 mb-4">
                <motion.div
                  className="w-14 h-14 sm:w-16 sm:h-16 border border-[#5F5F7138] rounded-full bg-white/5 flex items-center justify-center shrink-0"
                  whileHover={{
                    backgroundColor: "rgba(28, 163, 110, 0.1)",
                    borderColor: "rgba(28, 163, 110, 0.5)",
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {pillar.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-gilroy-bold text-xl sm:text-2xl text-white mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-[#1CA36E] text-sm sm:text-base font-medium">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-[#D5D5D5] mb-4 leading-relaxed text-sm sm:text-base">
                {pillar.description}
              </p>

              <div className="space-y-2 mb-6 flex-1">
                {pillar.capabilities.map((capability, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-2 text-sm text-[#969696]"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      className="w-1.5 h-1.5 bg-[#1CA36E] rounded-full mt-1.5 shrink-0"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.3,
                      }}
                    />
                    <span>{capability}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={() => navigate("/contact")}
                className="text-[#1CA36E] text-sm font-medium hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                whileHover={{ x: 5 }}
              >
                Contact us for more info
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </AnimatedCard>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};
