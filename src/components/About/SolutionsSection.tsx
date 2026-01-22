
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { GlowingText } from "../Animation/GlowingText";

const SolutionsSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const solutions = [
    {
      icon: (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      description: "Your assets are protected with Smart Accounts featuring Multi-Factor Authentication. Secure, self-custodied, and enterprise-ready with ERC-4337 integration.",
      features: ["WebAuthn biometrics", "ISO20022 compliance", "Gas abstraction", "Multi-sig support"],
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      description: "Transform real-world assets into liquid, tradable tokens using zkTLS-powered verification. Instant liquidity with 90% cost reduction.",
      features: ["zkTLS verification", "Real-time auditing", "Instant burn/mint", "Trust account integration"],
      color: "from-[#1CA36E]/10 to-green-500/10"
    },
    {
      icon: (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.33337 14.8H10.3334V20.8"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.3334 10.8H14.3334V4.80005"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.3334 10.8L21.3334 3.80005"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.33337 21.8L10.3334 14.8"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Sereel Protocol",
      description: "Institutional DeFi infrastructure with three modules: AMM, Lending, and Options.",
      features: ["ERC-3643 compliant", "Risk management", "Yield optimization", "Institutional controls"],
      color: "from-yellow-500/10 to-orange-500/10"
    }
  ];

  return (
    <motion.div
      ref={ref}
      className="w-full flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Our <GlowingText className="text-[#1CA36E]">Solutions</GlowingText>
          </h2>
          <p className="text-[#D5D5D5] text-xl lg:text-2xl font-light">
            Seamless, secure and accessible institutional DeFi infrastructure
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#0A0A0A] to-black border border-[#202026] rounded-3xl p-8 lg:p-10 relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              whileHover={{ 
                scale: 1.02,
                borderColor: "rgba(28, 163, 110, 0.4)",
                boxShadow: "0 0 40px rgba(28, 163, 110, 0.15)"
              }}
            >
              {/* Animated background gradient on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              
              <div className="relative z-10">
                <motion.div
                  className="w-20 h-20 border border-[#5F5F7138] rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:border-[#1CA36E] transition-colors duration-500"
                  whileHover={{ 
                    backgroundColor: "rgba(28, 163, 110, 0.1)",
                    scale: 1.05
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {solution.icon}
                </motion.div>

                <h3 className="font-bold text-2xl mb-5 text-white group-hover:text-[#1CA36E] transition-colors duration-500">
                  {solution.title}
                </h3>
                
                <p className="text-[#D5D5D5] text-base mb-8 leading-relaxed group-hover:text-white transition-colors duration-500">
                  {solution.description}
                </p>

                <div className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3 text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 * index + 0.1 * idx }}
                    >
                      <motion.span
                        className="w-2 h-2 bg-[#1CA36E] rounded-full flex-shrink-0"
                        animate={{ 
                          scale: [1, 1.4, 1],
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: idx * 0.2 
                        }}
                      />
                      <span className="text-[#969696] group-hover:text-[#D5D5D5] transition-colors duration-500">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SolutionsSection
