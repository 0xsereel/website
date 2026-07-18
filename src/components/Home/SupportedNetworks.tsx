import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { GlowingText } from "../Animation/GlowingText";

export const SupportedNetworks = () => {
  const evmChains = [
    {
      name: "Ethereum",
      type: "L1",
      logo: "/images/networks/ethereum.jpg",
    },
    {
      name: "Arbitrum",
      type: "L2",
      logo: "/images/networks/arbitrum.jpg",
    },
    {
      name: "Base",
      type: "L2",
      logo: "/images/networks/base.jpg",
    },
    {
      name: "Polygon",
      type: "L2",
      logo: "/images/networks/polygon.jpg",
    },
    {
      name: "Optimism",
      type: "L2",
      logo: "/images/networks/optimism.jpg",
    },
  ];

  const nonEvmChains = [
    {
      name: "Solana",
      logo: "/images/networks/solana.jpg",
    },
    {
      name: "IOTA",
      logo: "/images/networks/iota.jpg",
    },
    {
      name: "Starknet",
      logo: "/images/networks/starknet.jpg",
    },
  ];

  const enterpriseNetworks = [
    {
      name: "Canton Network",
      description: "privacy-preserving settlements",
      logo: "/images/networks/canton.jpg",
    },
  ];

  return (
    <section className="w-full flex items-center justify-center py-20 sm:py-24 lg:py-32 xl:py-40 relative overflow-hidden safe-area-padding">
      <div className="w-[95%] max-w-7xl mx-auto relative z-10 responsive-container">
        <AnimatedSection className="w-full flex items-center justify-center flex-col mb-20">
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
            className="mt-6 text-center text-[#D5D5D5] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Multi-chain support across EVM, Non-EVM, and enterprise blockchain networks
          </motion.p>
        </AnimatedSection>

        <AnimatedSection className="space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h4
              className="text-xl sm:text-2xl lg:text-3xl font-gilroy-bold text-white mb-12 text-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              EVM Chains
            </motion.h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
              {evmChains.map((chain, index) => (
                <motion.div
                  key={index}
                  className="group relative aspect-square bg-gradient-to-br from-[#1CA36E]/5 to-white/5 border border-[#202026] rounded-2xl p-8 hover:border-[#1CA36E]/50 transition-all duration-500 overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 20px 60px rgba(28, 163, 110, 0.3)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#1CA36E]/0 to-[#1CA36E]/0 group-hover:from-[#1CA36E]/10 group-hover:to-[#1CA36E]/5 transition-all duration-500"
                  />
                  
                  <div className="relative w-full h-full flex items-center justify-center">
                    <motion.img
                      src={chain.logo}
                      alt={chain.name}
                      className="w-full h-full object-contain rounded-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-[#202026] to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h4
              className="text-xl sm:text-2xl lg:text-3xl font-gilroy-bold text-white mb-12 text-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Non-EVM Chains
            </motion.h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-10 max-w-4xl mx-auto">
              {nonEvmChains.map((chain, index) => (
                <motion.div
                  key={index}
                  className="group relative aspect-square bg-gradient-to-br from-purple-500/5 to-white/5 border border-[#202026] rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 20px 60px rgba(168, 85, 247, 0.3)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-purple-500/5 transition-all duration-500"
                  />
                  
                  <div className="relative w-full h-full flex items-center justify-center">
                    <motion.img
                      src={chain.logo}
                      alt={chain.name}
                      className="w-full h-full object-contain rounded-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-[#202026] to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h4
              className="text-xl sm:text-2xl lg:text-3xl font-gilroy-bold text-white mb-12 text-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Enterprise Networks
            </motion.h4>
            
            <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
              {enterpriseNetworks.map((network, index) => (
                <motion.div
                  key={index}
                  className="group relative aspect-square bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-[#202026] rounded-2xl p-12 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 20px 60px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/5 transition-all duration-500"
                  />
                  
                  <div className="relative w-full h-full flex items-center justify-center">
                    <motion.img
                      src={network.logo}
                      alt={network.name}
                      className="w-full h-full object-contain rounded-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 60px rgba(59, 130, 246, 0.2)",
              }}
            >
              <div className="flex items-start gap-6">
                <motion.div
                  className="w-16 h-16 rounded-full bg-white/5 border border-blue-500/30 flex items-center justify-center shrink-0 text-3xl"
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
                  <h5 className="font-gilroy-bold text-xl text-white mb-3">
                    Interoperability
                  </h5>
                  <p className="text-[#D5D5D5] text-base mb-4">
                    Chainlink CCIP integration for secure cross-chain messaging and asset transfers
                  </p>
                  <motion.div
                    className="inline-flex items-center gap-2 text-sm text-blue-400"
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

            <motion.div
              className="bg-gradient-to-br from-[#1CA36E]/10 to-green-500/10 border border-[#1CA36E]/20 rounded-2xl p-8 hover:border-[#1CA36E]/50 transition-all duration-300"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 60px rgba(28, 163, 110, 0.2)",
              }}
            >
              <div className="flex items-start gap-6">
                <motion.div
                  className="w-16 h-16 rounded-full bg-white/5 border border-[#1CA36E]/30 flex items-center justify-center shrink-0 text-3xl"
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
                  <h5 className="font-gilroy-bold text-xl text-white mb-3">
                    Compliance Standard
                  </h5>
                  <p className="text-[#D5D5D5] text-base mb-4">
                    CMTA-compliant tokenization using the CMTAT framework for regulatory adherence
                  </p>
                  <motion.div
                    className="inline-flex px-4 py-2 rounded-full bg-[#1CA36E]/20 text-[#1CA36E] text-sm font-gilroy-medium border border-[#1CA36E]/30"
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
