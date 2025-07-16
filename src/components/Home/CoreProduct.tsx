// src/components/Home/CoreProduct.tsx
import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { AnimatedCard } from "../Animation/AnimatedCard";
import { GlowingText } from "../Animation/GlowingText";
import { useParallax } from "../../hooks/useParallax";

export const CoreProduct = () => {
  const { ref, y } = useParallax(0.3);

  const products = [
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
      title: "Noncustodial Wallet Service",
      description:
        "Your assets are protected with Smart Accounts with Multi-Factor Authentication. Secure, self-custodied, and enterprise-ready.",
      features: [
        "ERC-4337 Smart Accounts",
        "WebAuthn Integration",
        "ISO20022 Compliance",
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
      title: "Asset Tokenization Service",
      description:
        "Convert fiat, bonds, and other assets into liquid, tradable tokens with zkTLS-powered verification.",
      features: [
        "zkTLS Verification",
        "Instant Liquidity",
        "90% Cost Reduction",
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
      title: "Sereel Protocol",
      description:
        "Institutional DeFi infrastructure with 18-35% APY potential through our three-module ecosystem.",
      features: [
        "AMM + Lending + Options",
        "ERC-3643 Compliant",
        "Risk Management",
      ],
    },
  ];

  return (
    <section className="w-full flex items-center justify-center py-20 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        ref={ref}
        className="absolute inset-0 bg-gradient-to-br from-[#1CA36E]/5 via-transparent to-[#1CA36E]/10"
        style={{ y }}
      />

      <div className="w-[95%] mx-auto relative z-10">
        <AnimatedSection className="w-full flex items-center justify-center flex-col">
          <motion.h3
            className="lg:text-5xl text-3xl font-gilroy-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our{" "}
            <GlowingText className="text-[#1CA36E]">Core Products</GlowingText>
          </motion.h3>
          <motion.p
            className="mt-2 text-center text-[#D5D5D5]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The solutions we offer are seamless, secure and accessible
          </motion.p>
        </AnimatedSection>

        <AnimatedSection
          className="flex items-center justify-center gap-8 mt-16 lg:flex-row flex-col"
          variant="stagger"
        >
          {products.map((product, index) => (
            <AnimatedCard
              key={index}
              className="lg:w-[400px] w-full min-h-[350px] border border-[#202026] rounded-xl p-6 bg-gradient-to-br from-[#1CA36E]/5 to-white/5 hover:border-[#1CA36E]/50 transition-all duration-300"
              delay={index * 0.1}
            >
              <div className="w-full">
                <motion.div
                  className="w-[64px] h-[64px] border border-[#5F5F7138] rounded-full bg-white/5 flex items-center justify-center mb-4"
                  whileHover={{
                    backgroundColor: "rgba(28, 163, 110, 0.1)",
                    borderColor: "rgba(28, 163, 110, 0.5)",
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {product.icon}
                </motion.div>
              </div>

              <div className="mt-3">
                <h3 className="font-gilroy-bold text-xl mb-3 text-white">
                  {product.title}
                </h3>
                <p className="text-[#D5D5D5] mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-[#969696]"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.span
                        className="w-2 h-2 bg-[#1CA36E] rounded-full"
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
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};
