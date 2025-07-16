import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Header } from "../Header/Header";
import { GlowingText } from "../Animation/GlowingText";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Button } from "../Button/Button";


export default function AboutHero() {
  const peopleImagePath = "/images/about/about_image.jpeg";

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20"></div>
        {/* Enhanced Hero Section */}
        <motion.div
          className="w-full h-[500px] bg-black flex items-center justify-center relative overflow-hidden pt-20"
        >
          {/* Animated background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(28, 163, 110, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(28, 163, 110, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(28, 163, 110, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(28, 163, 110, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-[#1CA36E] rounded-full opacity-60"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-6 h-6 bg-white rounded-full opacity-40"
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <motion.div
          className="flex text-center flex-col items-center justify-center relative z-10 px-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="lg:text-6xl text-4xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We Are on a Mission to <GlowingText className="text-[#1CA36E]">Maximize</GlowingText>
            <br />
            The <GlowingText className="text-[#1CA36E]">Efficiency</GlowingText> of the
            <br />
            Global Financial Ecosystem
          </motion.h1>
          <motion.p
            className="text-xl text-[#D5D5D5] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Bridging traditional finance with decentralized infrastructure for institutional innovation
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="w-full bg-black py-20 relative overflow-hidden">
        {/* Team Section */}
        <TeamSection peopleImagePath={peopleImagePath} />
        
        {/* Mission Statement */}
        <MissionStatement />
        
        {/* Solutions Section */}
        <SolutionsSection />
        
        {/* Security Section */}
        <SecuritySection />
      </div>
    </div>
  );
}

// Team Section Component
const TeamSection = ({ peopleImagePath }: { peopleImagePath: string }) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="w-full flex items-center justify-center mb-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="w-[95%] max-w-4xl mx-auto">

        <motion.div
          className="relative group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="relative overflow-hidden rounded-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={peopleImagePath}
              className="w-full max-w-[800px] mx-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
              alt="Team photo"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                (target.nextSibling as HTMLElement).style.display = 'flex';
              }}
            />
            
            {/* Fallback placeholder */}
            <div className="w-full h-64 bg-[#202026] rounded-2xl flex items-center justify-center text-[#969696] hidden">
              <div className="text-center">
                <div className="text-4xl mb-2">👥</div>
                <p>Team Photo</p>
              </div>
            </div>
            
            {/* Overlay effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[#1CA36E]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            
            {/* Glowing border */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent"
              whileHover={{ 
                borderColor: "#1CA36E",
                boxShadow: "0 0 30px rgba(28, 163, 110, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Mission Statement Component
const MissionStatement = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="w-full flex items-center justify-center mb-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="w-[95%] max-w-6xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#1CA36E]/10 to-white/5 p-8 lg:p-12 rounded-2xl border border-[#1CA36E]/20 relative overflow-hidden"
          whileHover={{ 
            boxShadow: "0 0 40px rgba(28, 163, 110, 0.3)",
            borderColor: "rgba(28, 163, 110, 0.4)"
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Background animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#1CA36E]/5 to-transparent"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="relative z-10 text-center">
            <motion.div
              className="space-y-6 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-[#D5D5D5]">
                <motion.a
                  href="https://www.blackrock.com/corporate/investor-relations/larry-fink-annual-chairmans-letter#unlocking-private-markets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1CA36E] underline font-bold"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 10px rgba(28, 163, 110, 0.8)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  25 trillion dollars
                </motion.a>{" "}
                sit idly in bank accounts - while cross border payments take days and cost{" "}
                <motion.a
                  href="https://papss.com/media/in-the-media/new-africa-payment-system-to-save-5-billion-in-fees-lift-trade-in-bloomberg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1CA36E] underline font-bold"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 10px rgba(28, 163, 110, 0.8)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  billions
                </motion.a>
                . The financial world is not interoperable with the blockchain world. These inefficiencies drive us to build.
              </p>
              
              <p className="text-[#D5D5D5]">
                Sereel is binding traditional and{" "}
                <motion.a
                  href="https://www.investopedia.com/decentralized-finance-defi-5113835"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1CA36E] underline font-bold"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 10px rgba(28, 163, 110, 0.8)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  decentralized finance
                </motion.a>
                . Secure enough for financial institutions, scalable enough for communities and entrepreneurs. With a focus on speed and safety, our Rust-based blockchain architecture gives your capital instant liquidity, programmable yield, and bulletproof security.
              </p>
              
              <p className="text-[#D5D5D5]">
                Founded by blockchain engineers and financiers, we're pioneers in turning idle capital into programmable, yield-bearing assets that settle in minutes - not days. We're redefining the physics of value.{" "}
                <motion.span
                  className="text-[#1CA36E] font-bold"
                  animate={{ 
                    textShadow: [
                      "0 0 5px rgba(28, 163, 110, 0.5)",
                      "0 0 15px rgba(28, 163, 110, 0.8)",
                      "0 0 5px rgba(28, 163, 110, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Join us.
                </motion.span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Solutions Section Component
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
      color: "from-blue-500/20 to-cyan-500/20"
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
      color: "from-[#1CA36E]/20 to-green-500/20"
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
      description: "Institutional DeFi infrastructure with 18-35% APY potential through our three-module ecosystem: AMM, Lending, and Options.",
      features: ["ERC-3643 compliant", "Risk management", "Yield optimization", "Institutional controls"],
      color: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  return (
    <motion.div
      ref={ref}
      className="w-full flex items-center justify-center mb-20"
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
            Our <GlowingText className="text-[#1CA36E]">Solutions</GlowingText>
          </h2>
          <p className="text-[#D5D5D5] text-xl">
            Seamless, secure and accessible institutional DeFi infrastructure
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#1CA36E]/5 to-white/5 border border-[#202026] rounded-2xl p-6 relative overflow-hidden group"
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
                className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
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
                  {solution.icon}
                </motion.div>

                <h3 className="font-bold text-xl mb-4 text-white group-hover:text-[#1CA36E] transition-colors duration-300">
                  {solution.title}
                </h3>
                
                <p className="text-[#D5D5D5] mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {solution.description}
                </p>

                <div className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-2 text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 * index + 0.1 * idx }}
                    >
                      <motion.span
                        className="w-2 h-2 bg-[#1CA36E] rounded-full"
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
                      <span className="text-[#969696] group-hover:text-[#D5D5D5] transition-colors duration-300">
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