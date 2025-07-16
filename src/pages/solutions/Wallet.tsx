import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MobileMenu } from "../../components/Header/MobileMenu";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SmartAccountIcon, 
  ISO20022Icon, 
  SecurityIcon, 
  GasAbstractionIcon,
  CorporateTreasuryIcon,
  CrossBorderIcon,
  AssetCustodyIcon
} from "../../utils/icons";


export const Wallet = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="w-full" ref={containerRef}>
      <Header />
      
      {/* Hero Section */}
      <motion.div 
        className="w-full h-[400px] bg-black flex items-center justify-center relative overflow-hidden"
        style={{ y }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 40%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 60%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 40%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="text-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl font-gilroy-bold text-white mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Sereel Wallet
          </motion.h1>
          <motion.p 
            className="text-xl text-[#D5D5D5] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            An institutional wallet with native <span className="text-[#1CA36E] font-semibold">ISO20022 compliance</span>
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="w-full bg-black py-20 px-5">
        <div className="w-full max-w-[1200px] mx-auto">
          
          {/* TradFi to DeFi Transformation Section */}
          <TradFiToDeFiAnimation />
          
          {/* Key Features Grid */}
          <WalletFeaturesGrid />
          
          {/* Technical Architecture */}
          {/* <TechnicalArchitecture /> */}
          
          {/* Use Cases */}
          <UseCases />
          
          {/* CTA Section */}
          <CTASection />
          
        </div>
      </div>

      <MobileMenu />
      <Footer />
    </div>
  );
};

// TradFi to DeFi Transformation Animation Component
const TradFiToDeFiAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="w-full mb-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-gilroy-bold mb-4">Traditional Finance → DeFi</h2>
        <p className="text-[#D5D5D5] text-lg">Watch how Sereel transforms institutional finance</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Traditional Finance */}
        <motion.div
          className="bg-gradient-to-br from-red-500/10 to-orange-500/10 p-8 rounded-xl border border-red-500/20"
          whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(239, 68, 68, 0.3)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <h3 className="text-xl font-gilroy-bold mb-4 text-red-400">Traditional Finance</h3>
            <ul className="text-[#D5D5D5] space-y-2 text-sm">
              <li>• T+3 settlement days</li>
              <li>• High operational costs</li>
              <li>• Limited transparency</li>
              <li>• Manual compliance</li>
              <li>• Fragmented systems</li>
            </ul>
          </div>
        </motion.div>

        {/* Arrow/Transformation */}
        <motion.div
          className="flex items-center justify-center"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="text-[#1CA36E] text-6xl">→</div>
        </motion.div>

        {/* DeFi */}
        <motion.div
          className="bg-gradient-to-br from-[#1CA36E]/10 to-green-500/10 p-8 rounded-xl border border-[#1CA36E]/20"
          whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(28, 163, 110, 0.3)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#1CA36E]/20 rounded-full flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"/>
              </svg>
            </div>
            <h3 className="text-xl font-gilroy-bold mb-4 text-[#1CA36E]">Sereel DeFi</h3>
            <ul className="text-[#D5D5D5] space-y-2 text-sm">
              <li>• <span className="text-[#1CA36E]">Instant</span> settlement</li>
              <li>• <span className="text-[#1CA36E]">90% cost</span> reduction</li>
              <li>• <span className="text-[#1CA36E]">Full</span> transparency</li>
              <li>• <span className="text-[#1CA36E]">Automated</span> compliance</li>
              <li>• <span className="text-[#1CA36E]">Unified</span> ecosystem</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Wallet Features Grid Component
const WalletFeaturesGrid = () => {
  const features = [
    {
      icon: <SmartAccountIcon className="w-12 h-12 text-[#1CA36E]" />,
      title: "ERC-4337 Smart Accounts",
      description: "Account recovery with gas sponsorship and social logins",
      details: ["Email + WebAuthn passkeys", "No seed phrase required", "Biometric authentication"]
    },
    {
      icon: <ISO20022Icon className="w-12 h-12 text-[#1CA36E]" />,
      title: "ISO20022 Native",
      description: "Every transaction generates standardized financial messages",
      details: ["SWIFT compatibility", "Automated reporting", "Audit-ready from day one"]
    },
    {
      icon: <SecurityIcon className="w-12 h-12 text-[#1CA36E]" />,
      title: "Enterprise Security",
      description: "Multi-sig, transaction policies, and MEV protection",
      details: ["Configurable approval flows", "Private mempool access", "Risk management tools"]
    },
    {
      icon: <GasAbstractionIcon className="w-12 h-12 text-[#1CA36E]" />,
      title: "Gas Abstraction",
      description: "Seamless user experience with sponsored transactions",
      details: ["Gasless transactions", "Batched operations", "Optimized fees"]
    }
  ];

  return (
    <div className="mb-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-gilroy-bold mb-4">Institutional-Grade Features</h2>
        <p className="text-[#D5D5D5] text-lg">Built for the demands of modern financial institutions</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-[#1CA36E]/5 to-white/5 p-8 rounded-xl border border-[#202026] hover:border-[#1CA36E]/50 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 30px rgba(28, 163, 110, 0.2)"
            }}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-gilroy-bold mb-3 text-white">{feature.title}</h3>
            <p className="text-[#D5D5D5] mb-4">{feature.description}</p>
            <ul className="space-y-2">
              {feature.details.map((detail, idx) => (
                <li key={idx} className="text-sm text-[#969696] flex items-center">
                  <span className="w-2 h-2 bg-[#1CA36E] rounded-full mr-3"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Use Cases Component
const UseCases = () => {
  const cases = [
    {
      title: "Corporate Treasury",
      description: "Automated capital calls with on-chain audit trails",
      icon: <CorporateTreasuryIcon className="w-12 h-12 text-[#1CA36E]" />
    },
    {
      title: "Cross-Border Payments",
      description: "Compliant stablecoin transfers with instant settlement",
      icon: <CrossBorderIcon className="w-12 h-12 text-[#1CA36E]" />
    },
    {
      title: "Asset Custody",
      description: "Secure tokenized asset storage with institutional controls",
      icon: <AssetCustodyIcon className="w-12 h-12 text-[#1CA36E]" />
    }
  ];

  return (
    <div className="mb-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-gilroy-bold mb-4">Use Cases</h2>
        <p className="text-[#D5D5D5] text-lg">Real-world applications for institutional clients</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {cases.map((useCase, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-[#1CA36E]/5 to-white/5 p-6 rounded-xl border border-[#202026] text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(28, 163, 110, 0.2)"
            }}
          >
            <div className="text-4xl mb-4">{useCase.icon}</div>
            <h3 className="text-xl font-gilroy-bold mb-3 text-white">{useCase.title}</h3>
            <p className="text-[#D5D5D5]">{useCase.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// CTA Section Component
const CTASection = () => {
  return (
    <motion.div
      className="text-center bg-gradient-to-br from-[#1CA36E]/10 to-white/5 p-12 rounded-xl border border-[#1CA36E]/20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ 
        boxShadow: "0 0 40px rgba(28, 163, 110, 0.3)"
      }}
    >
      <h2 className="text-3xl font-gilroy-bold mb-4">Ready to Transform Your Institution?</h2>
      <p className="text-[#D5D5D5] text-lg mb-8 max-w-2xl mx-auto">
        Join leading financial institutions already leveraging Sereel's institutional-grade DeFi infrastructure.
      </p>
      <motion.div
        className="flex justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => window.open("/contact", "_blank")}
        >
          Get Started Today
        </Button>
      </motion.div>
    </motion.div>
  );
};
