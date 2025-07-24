import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Header } from "../../components/Header/Header";
import { MobileMenu } from "../../components/Header/MobileMenu";
import { Footer } from "../../components/Footer/Footer";
import { Button } from "../../components/Button/Button";
import { DeFiSecurityIcon } from "../../utils/icons";

export default function DeFi() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="w-full min-h-screen bg-black text-white" ref={containerRef}>
      <Header />

      {/* Hero Section */}
      <motion.div
        className="w-full h-screen flex items-center justify-center relative overflow-hidden pt-20"
        style={{ y }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(28, 163, 110, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 60% 80%, rgba(28, 163, 110, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(28, 163, 110, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, rgba(28, 163, 110, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="text-center relative z-10 max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl font-bold text-white mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Sereel Protocol
          </motion.h1>
          <motion.p
            className="text-2xl text-[#D5D5D5] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Institutional{" "}
            <span className="text-[#1CA36E] font-semibold">
              DeFi Infrastructure
            </span>{" "}
            for the next generation of finance
          </motion.p>
            <motion.div
            className="mb-6 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
              onClick={() =>
                window.open(
                "https://github.com/0xsereel/whitepaper/tree/main",
                "_blank"
                )
              }
              className="bg-transparent border-2 border-[#1CA36E] text-[#1CA36E] hover:bg-[#1CA36E] hover:text-white"
              >
              📄 Read our Whitepaper
              </Button>
            </motion.div>
            </motion.div>
          <motion.div
            className="flex justify-center gap-8 text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1CA36E]">18-35%</div>
              <div className="text-sm text-[#969696]">APY Potential*</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1CA36E]">3-Module</div>
              <div className="text-sm text-[#969696]">Vaults</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1CA36E]">ERC-3643</div>
              <div className="text-sm text-[#969696]">Compliant</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="w-full bg-black py-20 px-5">
        <div className="w-full max-w-7xl mx-auto">
          {/* Yield Comparison Section */}
          <YieldComparisonSection />

          {/* SereelVault Architecture */}
          {/* <SereelVaultArchitecture /> */}

          {/* Three-Module Ecosystem */}
          <ThreeModuleEcosystem />

          {/* CTA Section */}
          <CTASection />
        </div>
      </div>

      <MobileMenu />
      <Footer />
    </div>
  );
}

// Yield Comparison Section
const YieldComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="w-full mb-24"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">
          Traditional Finance vs. Sereel DeFi
        </h2>
        <p className="text-[#D5D5D5] text-xl">
          Experience the next evolution in institutional finance
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Traditional Finance */}
        <motion.div
          className="bg-gradient-to-br from-red-500/10 to-orange-500/10 p-8 rounded-2xl border border-red-500/20 relative overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 40px rgba(239, 68, 68, 0.3)",
          }}
        >
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-400">
                  Traditional Finance
                </h3>
                <p className="text-[#D5D5D5]">Legacy financial systems</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[#D5D5D5]">Annual Yield</span>
                <span className="text-2xl font-bold text-red-400">5-8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#D5D5D5]">Settlement Time</span>
                <span className="text-xl font-bold text-red-400">T+3 Days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#D5D5D5]">Operating Hours</span>
                <span className="text-xl font-bold text-red-400">
                  9-5 Limited
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#D5D5D5]">Transaction Costs</span>
                <span className="text-xl font-bold text-red-400">
                  High Fees
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#D5D5D5]">Liquidity</span>
                <span className="text-xl font-bold text-red-400">
                  Fragmented
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sereel DeFi */}
        <motion.div
          className="bg-gradient-to-br from-[#1CA36E]/10 to-green-500/10 p-8 rounded-2xl border border-[#1CA36E]/20 relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 40px rgba(28, 163, 110, 0.3)",
          }}
        >
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#1CA36E]/20 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-[#1CA36E]/20 rounded-full flex items-center justify-center">
                  <DeFiSecurityIcon className="w-8 h-8 text-[#1CA36E]" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1CA36E]">
                  Sereel Protocol
                </h3>
                <p className="text-[#D5D5D5]">
                  Next-generation DeFi infrastructure
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[#D5D5D5]">Annual Yield</span>
                <motion.span
                  className="text-2xl font-bold text-[#1CA36E]"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(28, 163, 110, 0.5)",
                      "0 0 20px rgba(28, 163, 110, 0.8)",
                      "0 0 5px rgba(28, 163, 110, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  18-35%*
                </motion.span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#D5D5D5]">Settlement Time</span>
                <span className="text-xl font-bold text-[#1CA36E]">
                  Instant
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#D5D5D5]">Operating Hours</span>
                <span className="text-xl font-bold text-[#1CA36E]">
                  24/7 Global
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#D5D5D5]">Transaction Costs</span>
                <span className="text-xl font-bold text-[#1CA36E]">
                  90% Lower
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#D5D5D5]">Liquidity</span>
                <span className="text-xl font-bold text-[#1CA36E]">
                  Unified Pools
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-sm text-[#969696]">
          *APY calculations made in test environment - results not yet proven in
          production
        </p>
      </motion.div>
    </motion.div>
  );
};

// Three-Module Ecosystem
const ThreeModuleEcosystem = () => {
  const [activeModule, setActiveModule] = useState(0);
  const modules = [
    {
      name: "AMM Module",
      icon: "🔄",
      description: "Automated Market Maker with dynamic fees",
      details: {
        purpose: "Provide liquidity for tokenized assets",
        mechanism: "Constant product formula (x × y = k)",
        yield: "Trading fees + liquidity rewards",
        features: [
          "Dynamic fee adjustment",
          "Impermanent loss protection",
          "Multi-asset pools",
        ],
      },
    },
    {
      name: "Lending Module",
      icon: "🏦",
      description: "Overcollateralized lending with variable rates",
      details: {
        purpose: "Generate yield through asset lending",
        mechanism: "Kinked interest rate model",
        yield: "Interest rate spreads",
        features: [
          "Multiple collateral types",
          "Liquidation protection",
          "Cross-vault positions",
        ],
      },
    },
    {
      name: "Options Module",
      icon: "📊",
      description: "Decentralized options trading",
      details: {
        purpose: "Advanced derivatives trading",
        mechanism: "Modified Black-Scholes pricing",
        yield: "Premium collection + delta hedging",
        features: [
          "Call & put options",
          "Automated settlement",
          "Risk management tools",
        ],
      },
    },
  ];

  return (
    <motion.div
      className="mb-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">Three-Module Vaults</h2>
        <p className="text-[#D5D5D5] text-xl">
          Efficient liquidity utility across three primitives
        </p>
      </div>

      {/* Module Selector */}
      <div className="flex justify-center mb-12">
        <div className="bg-[#202026] rounded-full p-2 flex">
          {modules.map((module, index) => (
            <motion.button
              key={index}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeModule === index
                  ? "bg-[#1CA36E] text-white"
                  : "text-[#969696] hover:text-white"
              }`}
              onClick={() => setActiveModule(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">{module.icon}</span>
              {module.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Module Details */}
      <motion.div
        className="bg-gradient-to-br from-[#1CA36E]/5 to-white/5 p-8 rounded-2xl border border-[#202026]"
        // key={activeModule}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Module Visualization */}
          <div className="flex items-center justify-center">
            <motion.div
              className="relative w-64 h-64 rounded-full bg-gradient-to-br from-[#1CA36E]/20 to-white/10 flex items-center justify-center"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              }}
            >
              <motion.div
                className="text-8xl"
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                }}
              >
                {modules[activeModule].icon}
              </motion.div>

              {/* Orbital Elements */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-4 left-1/2 w-3 h-3 bg-[#1CA36E] rounded-full transform -translate-x-1/2" />
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-white rounded-full" />
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-[#1CA36E] rounded-full" />
              </motion.div>
            </motion.div>
          </div>

          {/* Module Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-[#1CA36E]">
                {modules[activeModule].name}
              </h3>
              <p className="text-[#D5D5D5] text-lg mb-6">
                {modules[activeModule].description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-[#202026] p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">Purpose</h4>
                <p className="text-[#D5D5D5] text-sm">
                  {modules[activeModule].details.purpose}
                </p>
              </div>
              <div className="bg-[#202026] p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">Mechanism</h4>
                <p className="text-[#D5D5D5] text-sm">
                  {modules[activeModule].details.mechanism}
                </p>
              </div>
              <div className="bg-[#202026] p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">Yield Source</h4>
                <p className="text-[#D5D5D5] text-sm">
                  {modules[activeModule].details.yield}
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-3">Key Features</h4>
              <ul className="space-y-2">
                {modules[activeModule].details.features.map(
                  (feature, index) => (
                    <li
                      key={index}
                      className="text-[#D5D5D5] flex items-center text-sm"
                    >
                      <span className="w-2 h-2 bg-[#1CA36E] rounded-full mr-3"></span>
                      {feature}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <motion.div
      className="text-center bg-gradient-to-br from-[#1CA36E]/10 to-white/5 p-12 rounded-2xl border border-[#1CA36E]/20 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{
        boxShadow: "0 0 40px rgba(28, 163, 110, 0.4)",
      }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-20 h-20 bg-[#1CA36E]/10 rounded-full"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-16 h-16 bg-white/10 rounded-full"
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-6"
          animate={{
            textShadow: [
              "0 0 10px rgba(28, 163, 110, 0.5)",
              "0 0 20px rgba(28, 163, 110, 0.8)",
              "0 0 10px rgba(28, 163, 110, 0.5)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Ready to Experience Institutional DeFi?
        </motion.h2>
        <p className="text-[#D5D5D5] text-xl mb-8 max-w-3xl mx-auto">
          Join leading institutions already leveraging the Sereel Protocol for
          next-generation yield optimization and compliance-ready DeFi access.
        </p>
        <div className="flex justify-center gap-6">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button onClick={() => window.open("/contact", "_blank")}>
              Get Started Today
            </Button>
          </motion.div>
        </div>
        <div className="mt-8 text-sm text-[#969696] max-w-2xl mx-auto">
          <p>
            *APY calculations made in test environment - results not yet proven
            in production
          </p>
          <p className="mt-2">
            Risk disclaimer: All investments carry risk. Past performance does
            not guarantee future results.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
