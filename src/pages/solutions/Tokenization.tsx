import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MobileMenu } from "../../components/Header/MobileMenu";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  StockIcon, 
  LockIcon, 
  TokenIcon, 
  CostReductionIcon,
  LiquidityIcon,
  GlobalIcon,
  ComplianceIcon,
  FireIcon,
  WithdrawIcon
} from "../../utils/icons";

export const Tokenization = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    document.title = "Asset Tokenization - Sereel";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Deploy security tokens across Ethereum, Solana, IOTA, Starknet, and Canton Network using the CMTA standard. Tokenize bonds, securities, stablecoins, and private credit compliantly.');
  }, []);

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
              "radial-gradient(circle at 25% 25%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 75% 75%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 25% 75%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 25% 25%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
            Asset Tokenization
          </motion.h1>
          <motion.p 
            className="text-xl text-[#D5D5D5] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform real-world assets into <span className="text-[#1CA36E] font-semibold">liquid, tradable tokens</span> with zkTLS-powered verification
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="w-full bg-black py-20 px-5">
        <div className="w-full max-w-[1200px] mx-auto">
          
          {/* Asset Transformation Animation */}
          <AssetTransformationFlow />
          
          {/* zkTLS Proof Visualization */}
          <ZkTLSProofSection />
          
          {/* Token Lifecycle */}
          <TokenLifecycleSection />
          
          {/* Supported Assets */}
          <SupportedAssetsGrid />
          
          {/* Benefits Section */}
          <BenefitsSection />
          
          {/* CTA Section */}
          <CTASection />
          
        </div>
      </div>

      <MobileMenu />
      <Footer />
    </div>
  );
};

// Asset Transformation Flow Component
const AssetTransformationFlow = () => {
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
        <h2 className="text-4xl font-gilroy-bold mb-4">Real-World Assets → Digital Tokens</h2>
        <p className="text-[#D5D5D5] text-lg">Watch how Sereel transforms traditional assets into liquid blockchain tokens</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-6 items-center">
        {/* Traditional Asset */}
        <motion.div
          className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20 text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
          }}
        >
          <div className="text-4xl mb-3">
            <StockIcon className="w-12 h-12 text-blue-500 mx-auto" />
          </div>
          <h3 className="text-lg font-gilroy-bold mb-2">Regulated Stock</h3>
          <p className="text-sm text-[#D5D5D5]">1000 Company Shares</p>
        </motion.div>

        {/* Arrow 1 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            className="text-[#1CA36E] text-3xl"
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </motion.div>
          <p className="text-xs text-[#969696] mt-1">zkTLS Verify</p>
        </motion.div>

        {/* zkTLS Verification */}
        <motion.div
          className="bg-gradient-to-br from-[#1CA36E]/10 to-green-500/10 p-6 rounded-xl border border-[#1CA36E]/20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 30px rgba(28, 163, 110, 0.3)"
          }}
        >
          <motion.div 
            className="text-4xl mb-3"
            animate={{ rotateY: [0, 180, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <LockIcon className="w-12 h-12 text-[#1CA36E] mx-auto" />
          </motion.div>
          <h3 className="text-lg font-gilroy-bold mb-2">zkTLS Proof</h3>
          <p className="text-sm text-[#D5D5D5]">Private Verification</p>
        </motion.div>

        {/* Arrow 2 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            className="text-[#1CA36E] text-3xl"
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            →
          </motion.div>
          <p className="text-xs text-[#969696] mt-1">Tokenize</p>
        </motion.div>

        {/* Digital Token */}
        <motion.div
          className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-6 rounded-xl border border-yellow-500/20 text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 30px rgba(234, 179, 8, 0.3)"
          }}
        >
          <motion.div 
            className="text-4xl mb-3"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <TokenIcon className="w-12 h-12 text-yellow-500 mx-auto" />
          </motion.div>
          <h3 className="text-lg font-gilroy-bold mb-2">RWA Token</h3>
          <p className="text-sm text-[#D5D5D5]">1000 Tokens</p>
        </motion.div>
      </div>

      {/* Benefits Below */}
      <motion.div
        className="mt-12 grid lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="text-center">
          <div className="text-2xl font-gilroy-bold text-[#1CA36E] mb-2">90%</div>
          <p className="text-sm text-[#D5D5D5]">Cost Reduction</p>
        </div>
        <div className="text-center">
          <div className="text-2xl font-gilroy-bold text-[#1CA36E] mb-2">Instant</div>
          <p className="text-sm text-[#D5D5D5]">Liquidity Access</p>
        </div>
        <div className="text-center">
          <div className="text-2xl font-gilroy-bold text-[#1CA36E] mb-2">24/7</div>
          <p className="text-sm text-[#D5D5D5]">Trading Available</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// zkTLS Proof Visualization Component
const ZkTLSProofSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { title: "Data Request", description: "Securely fetch asset data from trusted sources" },
    { title: "TLS Verification", description: "Verify data authenticity without revealing content" },
    { title: "Zero-Knowledge Proof", description: "Generate proof of verification while maintaining privacy" },
    { title: "On-Chain Verification", description: "Validate proof on blockchain for tokenization" }
  ];

  return (
    <motion.div
      className="mb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-gilroy-bold mb-4">zkTLS Proof System</h2>
        <p className="text-[#D5D5D5] text-lg">Private verification of real-world assets with zero-knowledge proofs</p>
      </div>

      <div className="bg-gradient-to-br from-[#1CA36E]/5 to-white/5 p-8 rounded-xl border border-[#202026]">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Interactive Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                  activeStep === index 
                    ? 'border-[#1CA36E] bg-[#1CA36E]/10' 
                    : 'border-[#202026] hover:border-[#1CA36E]/50'
                }`}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    activeStep === index ? 'bg-[#1CA36E] text-white' : 'bg-[#202026] text-[#969696]'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-gilroy-bold text-white">{step.title}</h3>
                    <p className="text-sm text-[#D5D5D5]">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated Visualization */}
          <div className="flex items-center justify-center">
            <motion.div
              className="relative w-64 h-64"
              animate={{ rotate: activeStep * 90 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-0 border-2 border-[#1CA36E]/30 rounded-full"
                animate={{ 
                  scale: [1, 1.1, 1],
                  borderColor: [
                    "rgba(28, 163, 110, 0.3)",
                    "rgba(28, 163, 110, 0.8)",
                    "rgba(28, 163, 110, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-8 bg-gradient-to-br from-[#1CA36E]/20 to-white/10 rounded-full flex items-center justify-center">
                <motion.div
                className="text-6xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360]
                }}
                transition={{ 
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
              >
                <LockIcon className="w-16 h-16 text-[#1CA36E]" />
              </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Token Lifecycle Section
const TokenLifecycleSection = () => {
  const [activePhase, setActivePhase] = useState(0);
  const phases = ["Mint", "Trade", "Burn", "Withdraw"];

  return (
    <motion.div
      className="mb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-gilroy-bold mb-4">Token Lifecycle</h2>
        <p className="text-[#D5D5D5] text-lg">Seamless mint, trade, and burn cycles with instant liquidity</p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="flex bg-[#202026] rounded-full p-2">
          {phases.map((phase, index) => (
            <motion.button
              key={index}
              className={`px-6 py-2 rounded-full font-gilroy-medium transition-all duration-300 ${
                activePhase === index 
                  ? 'bg-[#1CA36E] text-white' 
                  : 'text-[#969696] hover:text-white'
              }`}
              onClick={() => setActivePhase(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {phase}
            </motion.button>
          ))}
        </div>
      </div>

      <motion.div
        className="bg-gradient-to-br from-[#1CA36E]/5 to-white/5 p-8 rounded-xl border border-[#202026]"
        key={activePhase}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {activePhase === 0 && (
          <div className="text-center">
            <div className="text-6xl mb-4">
              <TokenIcon className="w-16 h-16 text-[#1CA36E] mx-auto" />
            </div>
            <h3 className="text-2xl font-gilroy-bold mb-4">Mint Tokens</h3>
            <p className="text-[#D5D5D5] mb-6">Deposit assets into trust account and mint tokens with one API call</p>
            <div className="grid lg:grid-cols-3 gap-4 text-sm">
              <div className="bg-[#202026] p-4 rounded-lg">
                <div className="text-[#1CA36E] font-bold">Step 1</div>
                <div>Deposit asset</div>
              </div>
              <div className="bg-[#202026] p-4 rounded-lg">
                <div className="text-[#1CA36E] font-bold">Step 2</div>
                <div>Verify ownership</div>
              </div>
              <div className="bg-[#202026] p-4 rounded-lg">
                <div className="text-[#1CA36E] font-bold">Step 3</div>
                <div>Mint tokens</div>
              </div>
            </div>
          </div>
        )}
        
        {activePhase === 1 && (
          <div className="text-center">
            <div className="text-6xl mb-4">
              <LiquidityIcon className="w-16 h-16 text-[#1CA36E] mx-auto" />
            </div>
            <h3 className="text-2xl font-gilroy-bold mb-4">Trade Instantly</h3>
            <p className="text-[#D5D5D5] mb-6">24/7 trading with instant settlement and global liquidity</p>
            <div className="grid lg:grid-cols-3 gap-4 text-sm">
              <div className="bg-[#202026] p-4 rounded-lg">
                <div className="text-[#1CA36E] font-bold">Global</div>
                <div>Worldwide access</div>
              </div>
              <div className="bg-[#202026] p-4 rounded-lg">
                <div className="text-[#1CA36E] font-bold">Instant</div>
                <div>No settlement delays</div>
              </div>
              <div className="bg-[#202026] p-4 rounded-lg">
                <div className="text-[#1CA36E] font-bold">Liquid</div>
                <div>Deep order books</div>
              </div>
            </div>
          </div>
        )}
        
        {activePhase === 2 && (
          <div className="text-center">
            <div className="text-6xl mb-4">
              <FireIcon className="w-16 h-16 text-[#1CA36E] mx-auto" />
            </div>
            <h3 className="text-2xl font-gilroy-bold mb-4">Burn Tokens</h3>
            <p className="text-[#D5D5D5] mb-6">Destroy tokens to unlock underlying assets in seconds</p>
            <div className="grid lg:grid-cols-3 gap-4 text-sm">
              <div className="bg-[#202026] p-4 rounded-lg">
                <div className="text-[#1CA36E] font-bold">Instant</div>
                <div>Burn in seconds</div>
              </div>
              <div className="bg-[#202026] p-4 rounded-lg">
                <div className="text-[#1CA36E] font-bold">Secure</div>
                <div>Cryptographic proof</div>
              </div>
              <div className="bg-[#202026] p-4 rounded-lg">
                <div className="text-[#1CA36E] font-bold">Automated</div>
                <div>No manual process</div>
              </div>
            </div>
          </div>
        )}
        
        {activePhase === 3 && (
          <div className="text-center">
            <div className="text-6xl mb-4">
              <WithdrawIcon className="w-16 h-16 text-[#1CA36E] mx-auto" />
            </div>
            <h3 className="text-2xl font-gilroy-bold mb-4">Withdraw Assets</h3>
            <p className="text-[#D5D5D5] mb-6">Instantly access your underlying assets from trust account</p>
            <div className="grid lg:grid-cols-3 gap-4 text-sm">
              <div className="bg-[#202026] p-4 rounded-lg">
                <div className="text-[#1CA36E] font-bold">Instant</div>
                <div>No waiting period</div>
              </div>
              <div className="bg-[#202026] p-4 rounded-lg">
                <div className="text-[#1CA36E] font-bold">Secure</div>
                <div>Multi-sig protection</div>
              </div>
              <div className="bg-[#202026] p-4 rounded-lg">
                <div className="text-[#1CA36E] font-bold">Flexible</div>
                <div>Partial withdrawals</div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

// Supported Assets Grid
const SupportedAssetsGrid = () => {
  const assets = [
    { icon: "🏠", name: "Real Estate", description: "Commercial & residential properties" },
    { icon: "📊", name: "Stocks", description: "Public and private equity shares" },
    { icon: "💎", name: "Commodities", description: "Gold, oil, agricultural products" },
    { icon: "🏛️", name: "Bonds", description: "Government and corporate bonds" },
    { icon: "🎨", name: "Art & Collectibles", description: "Fine art, luxury goods, NFTs" },
    { icon: "💰", name: "Cash & Deposits", description: "Fiat currency, CDs, money markets" }
  ];

  return (
    <motion.div
      className="mb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-gilroy-bold mb-4">Supported Assets</h2>
        <p className="text-[#D5D5D5] text-lg">Tokenize any real-world asset with our universal framework</p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {assets.map((asset, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-[#1CA36E]/5 to-white/5 p-6 rounded-xl border border-[#202026] hover:border-[#1CA36E]/50 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 30px rgba(28, 163, 110, 0.2)"
            }}
          >
            <div className="text-4xl mb-4">{asset.icon}</div>
            <h3 className="text-xl font-gilroy-bold mb-2 text-white">{asset.name}</h3>
            <p className="text-[#D5D5D5] text-sm">{asset.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Benefits Section
const BenefitsSection = () => {
  const benefits = [
    {
      title: "90% Cost Reduction",
      description: "Eliminate traditional intermediaries and manual processes",
      icon: <CostReductionIcon className="w-12 h-12 text-[#1CA36E]" />
    },
    {
      title: "Instant Liquidity",
      description: "Convert illiquid assets into tradable tokens in minutes",
      icon: <LiquidityIcon className="w-12 h-12 text-[#1CA36E]" />
    },
    {
      title: "Global Access",
      description: "24/7 trading with worldwide investor participation",
      icon: <GlobalIcon className="w-12 h-12 text-[#1CA36E]" />
    },
    {
      title: "Regulatory Compliance",
      description: "Built-in ERC-3643 compliance for institutional requirements",
      icon: <ComplianceIcon className="w-12 h-12 text-[#1CA36E]" />
    }
  ];

  return (
    <motion.div
      className="mb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-gilroy-bold mb-4">Why Tokenize with Sereel?</h2>
        <p className="text-[#D5D5D5] text-lg">Unlock the full potential of your real-world assets</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#1CA36E]/5 to-white/5 rounded-xl border border-[#202026]"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 30px rgba(28, 163, 110, 0.2)"
            }}
          >
            <div className="text-4xl">{benefit.icon}</div>
            <div>
              <h3 className="text-xl font-gilroy-bold mb-2 text-white">{benefit.title}</h3>
              <p className="text-[#D5D5D5]">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// CTA Section
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
      <h2 className="text-3xl font-gilroy-bold mb-4">Ready to Tokenize Your Assets?</h2>
      <p className="text-[#D5D5D5] text-lg mb-8 max-w-2xl mx-auto">
        Join the future of asset management with Sereel's institutional-grade tokenization platform.
      </p>
      <div className="flex justify-center gap-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={() => window.open("/contact", "_blank")}
          >
            Start Tokenizing
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};
