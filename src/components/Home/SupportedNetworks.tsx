import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { GlowingText } from "../Animation/GlowingText";

export const SupportedNetworks = () => {
  const evmChains = [
    {
      name: "Ethereum",
      type: "L1",
      logo: "🔷",
    },
    {
      name: "Arbitrum",
      type: "L2",
      logo: "🔵",
    },
    {
      name: "Base",
      type: "L2",
      logo: "🔷",
    },
    {
      name: "Polygon",
      type: "L2",
      logo: "🟣",
    },
    {
      name: "Optimism",
      type: "L2",
      logo: "🔴",
    },
  ];

  const nonEvmChains = [
    {
      name: "Solana",
      logo: "🟢",
    },
    {
      name: "IOTA",
      logo: "⚪",
    },
    {
      name: "Starknet",
      logo: "🟠",
    },
  ];

  const enterpriseNetworks = [
    {
      name: "Canton Network",
      description: "privacy-preserving settlements",
      logo: "🔐",
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
            <GlowingText className="text-[#1CA36E]">Supported Networks</GlowingText>
          </motion.h3>
          <motion.p
            className="mt-2 text-center text-[#D5D5D5] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Multi-chain support across EVM, Non-EVM, and enterprise blockchain networks
          </motion.p>
        </AnimatedSection>

        <AnimatedSection className="mt-12 sm:mt-16 space-y-8">
          {/* EVM Chains Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h4
              className="text-xl sm:text-2xl font-gilroy-bold text-white mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              EVM Chains
            </motion.h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {evmChains.map((chain, index) => (
                <motion.div
                  key={index}
                  className="relative bg-gradient-to-br from-[#1CA36E]/5 to-white/5 border border-[#202026] rounded-xl p-6 hover:border-[#1CA36E]/50 transition-all duration-300 flex flex-col items-center justify-center min-h-[180px]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(28, 163, 110, 0.2)",
                  }}
                >
                  {/* Logo Placeholder */}
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/5 border border-[#5F5F7138] flex items-center justify-center mb-4 text-4xl"
                    whileHover={{
                      backgroundColor: "rgba(28, 163, 110, 0.1)",
                      borderColor: "rgba(28, 163, 110, 0.5)",
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {chain.logo}
                  </motion.div>

                  <h5 className="font-gilroy-bold text-lg text-white mb-2 text-center">
                    {chain.name}
                  </h5>

                  {/* L1/L2 Badge */}
                  <motion.div
                    className={`px-3 py-1 rounded-full text-xs font-gilroy-medium ${
                      chain.type === "L1"
                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                        : "bg-[#1CA36E]/20 text-[#1CA36E] border border-[#1CA36E]/30"
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {chain.type}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Separator */}
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-[#202026] to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* Non-EVM Chains Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h4
              className="text-xl sm:text-2xl font-gilroy-bold text-white mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Non-EVM Chains
            </motion.h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {nonEvmChains.map((chain, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-[#1CA36E]/5 to-white/5 border border-[#202026] rounded-xl p-6 hover:border-[#1CA36E]/50 transition-all duration-300 flex flex-col items-center justify-center min-h-[180px]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(28, 163, 110, 0.2)",
                  }}
                >
                  {/* Logo Placeholder */}
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/5 border border-[#5F5F7138] flex items-center justify-center mb-4 text-4xl"
                    whileHover={{
                      backgroundColor: "rgba(28, 163, 110, 0.1)",
                      borderColor: "rgba(28, 163, 110, 0.5)",
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {chain.logo}
                  </motion.div>

                  <h5 className="font-gilroy-bold text-lg text-white text-center">
                    {chain.name}
                  </h5>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Separator */}
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-[#202026] to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* Enterprise Networks Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h4
              className="text-xl sm:text-2xl font-gilroy-bold text-white mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Enterprise Networks
            </motion.h4>
            
            <div className="grid grid-cols-1 gap-4">
              {enterpriseNetworks.map((network, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 flex items-center gap-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(168, 85, 247, 0.2)",
                  }}
                >
                  {/* Logo Placeholder */}
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/5 border border-purple-500/30 flex items-center justify-center text-4xl shrink-0"
                    whileHover={{
                      backgroundColor: "rgba(168, 85, 247, 0.1)",
                      borderColor: "rgba(168, 85, 247, 0.5)",
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {network.logo}
                  </motion.div>

                  <div>
                    <h5 className="font-gilroy-bold text-lg text-white mb-1">
                      {network.name}
                    </h5>
                    <p className="text-[#D5D5D5] text-sm">
                      {network.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interoperability & Standards Section */}
          <motion.div
            className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Chainlink CCIP Integration */}
            <motion.div
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)",
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-12 h-12 rounded-full bg-white/5 border border-blue-500/30 flex items-center justify-center shrink-0 text-2xl"
                  whileHover={{
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    borderColor: "rgba(59, 130, 246, 0.5)",
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  🔗
                </motion.div>

                <div>
                  <h5 className="font-gilroy-bold text-lg text-white mb-2">
                    Interoperability
                  </h5>
                  <p className="text-[#D5D5D5] text-sm mb-3">
                    Chainlink CCIP integration for secure cross-chain messaging and asset transfers
                  </p>
                  <motion.div
                    className="inline-flex items-center gap-2 text-xs text-blue-400"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span>Cross-chain enabled</span>
                    <span>→</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* CMTA Standard */}
            <motion.div
              className="bg-gradient-to-br from-[#1CA36E]/10 to-green-500/10 border border-[#1CA36E]/20 rounded-xl p-6 hover:border-[#1CA36E]/50 transition-all duration-300"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(28, 163, 110, 0.2)",
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-12 h-12 rounded-full bg-white/5 border border-[#1CA36E]/30 flex items-center justify-center shrink-0 text-2xl"
                  whileHover={{
                    backgroundColor: "rgba(28, 163, 110, 0.1)",
                    borderColor: "rgba(28, 163, 110, 0.5)",
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  ✓
                </motion.div>

                <div>
                  <h5 className="font-gilroy-bold text-lg text-white mb-2">
                    Compliance Standard
                  </h5>
                  <p className="text-[#D5D5D5] text-sm mb-3">
                    CMTA-compliant tokenization using the CMTAT framework for regulatory adherence
                  </p>
                  <motion.div
                    className="inline-flex px-3 py-1 rounded-full bg-[#1CA36E]/20 text-[#1CA36E] text-xs font-gilroy-medium border border-[#1CA36E]/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    CMTAT Framework
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
