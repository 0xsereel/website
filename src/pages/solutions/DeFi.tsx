import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MobileMenu } from "../../components/Header/MobileMenu";

export const Identity = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full h-[300px] bg-black flex items-center justify-center bg-gradient-to-bl from-[#1CA36E]/30 via-black to-[#1CA36E]/30">
        <h1 className="text-white text-4xl font-bold">DeFi Integration</h1>
      </div>

      <div className="w-full bg-black py-10 px-5">
        <div className="w-full max-w-[800px] mx-auto text-[#D5D5D5]">
          <p className="text-lg mb-6">
            <strong>DeFi is revolutionizing capital markets—unlocking unprecedented liquidity, accessibility, and efficiency for traditional assets.</strong>
          </p>
          <p className="mb-6">
            Traditional financial systems are limited by intermediaries, barriers to entry, and operational inefficiencies. <strong>Sereel bridges traditional finance with DeFi infrastructure.</strong>
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Comprehensive DeFi Rails</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Asset Tokenization:</strong> Transform traditional assets into tradable digital tokens</li>
            <li><strong>Exchange Infrastructure:</strong> Deploy customized trading platforms for tokenized assets</li>
            <li><strong>Derivatives Markets:</strong> Create options, futures, and other derivative products</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">For Financial Institutions</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Reduce</strong> operational costs through automated smart contracts</li>
            <li><strong>Expand</strong> market reach with 24/7 global trading capabilities</li>
            <li><strong>Unlock</strong> new revenue streams through innovative financial products</li>
          </ul>

          <p className="text-lg">
            At Sereel, we don't just tokenize assets—we build complete DeFi ecosystems around them. <strong>Contact us</strong> to revolutionize your approach to capital markets.
          </p>
        </div>
      </div>

      <MobileMenu />
      <Footer />
    </div>
  );
};