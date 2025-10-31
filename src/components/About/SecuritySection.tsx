import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { GlowingText } from "../Animation/GlowingText";
import { Button } from "../Button/Button";

// Security Section Component
const SecuritySection = () => {
  const { ref, isInView } = useScrollAnimation();

  const securityFeatures = [
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
      title: "Smart Wallets",
      description: "Leverages ERC-4337 Account Abstraction to enable Multi-Factor Authentication (MFA) for on-chain accounts — enhancing user control and protecting against unauthorized access.",
      benefits: [
        "Biometric & device-based authentication",
        "Recovery mechanisms without seed phrases",
        "Gasless and batched transactions"
      ],
      link: "https://www.erc4337.io/",
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 12.5L11.5 15L16 10.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
        </svg>
      ),
      title: "ISO 27001 Compliance",
      description: "We are actively working toward ISO 27001 compliance, ensuring that our information security management systems meet the highest global standards. Security is at the core of our product development process.",
      benefits: [
        "Comprehensive risk assessment and mitigation strategies",
        "Regular security audits and continuous monitoring",
        "Employee training on information security best practices"
      ],
      link: "https://www.iso.org/standard/27001",
      color: "from-[#1CA36E]/10 to-green-500/10"
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
      <div className="w-[95%] max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-5xl font-bold mb-4">
            Our <GlowingText className="text-[#1CA36E]">Security</GlowingText> Measures
          </h2>
          <p className="text-[#D5D5D5] text-xl">
            Security That Powers Trust
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#1CA36E]/5 to-white/5 border border-[#202026] rounded-2xl p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              whileHover={{ 
                scale: 1.02,
                borderColor: "rgba(28, 163, 110, 0.5)",
                boxShadow: "0 0 30px rgba(28, 163, 110, 0.2)"
              }}
            >
              {/* Animated background on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 border border-[#5F5F7138] rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:border-[#1CA36E] transition-colors duration-300"
                  whileHover={{ 
                    backgroundColor: "rgba(28, 163, 110, 0.1)",
                    scale: 1.1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>

                <h3 className="font-bold text-2xl mb-4 text-white group-hover:text-[#1CA36E] transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-[#D5D5D5] mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-4 text-white group-hover:text-[#1CA36E] transition-colors duration-300">
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-[#D5D5D5] group-hover:text-white transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 * index + 0.1 * idx }}
                      >
                        <motion.span
                          className="w-2 h-2 bg-[#1CA36E] rounded-full mt-2 flex-shrink-0"
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: idx * 0.2 
                          }}
                        />
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => window.open(feature.link, "_blank")}
                  >
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="bg-gradient-to-br from-[#1CA36E]/10 to-white/5 p-8 rounded-2xl border border-[#1CA36E]/20 relative overflow-hidden"
            whileHover={{ 
              boxShadow: "0 0 40px rgba(28, 163, 110, 0.3)",
              borderColor: "rgba(28, 163, 110, 0.4)"
            }}
            transition={{ duration: 0.3 }}
          >
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Institution?
              </h3>
              <p className="text-[#D5D5D5] text-lg mb-8 max-w-2xl mx-auto">
                Join leading financial institutions already leveraging Sereel's institutional-grade DeFi infrastructure for next-generation efficiency and security.
              </p>
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => window.open("/contact", "_blank")}
                  >
                    Get Started Today
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default SecuritySection;