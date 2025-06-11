import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MobileMenu } from "../../components/Header/MobileMenu";

export const Tokenization = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full h-[300px] bg-black flex items-center justify-center bg-gradient-to-bl from-[#1CA36E]/30 via-black to-[#1CA36E]/30">
        <h1 className="text-white text-4xl font-bold">Asset Tokenization</h1>
      </div>

      <div className="w-full bg-black py-10 px-5">
        <div className="w-full max-w-[800px] mx-auto text-[#D5D5D5]">
          <p className="text-lg mb-6">
            <strong>Tokens aren’t the future—they’re the <em>now</em>.</strong> Sereel makes asset tokenization <strong>fast, compliant, and as easy as a bank transfer</strong>.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Historical Value of Tokens</h2>
          <p className="mb-6">
            Historically, tokens derived value from:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Utility</strong> (e.g., Ether)</li>
            <li><strong>Collateral</strong> (e.g., DAI)</li>
            <li><strong>Backed assets</strong> (e.g., USDC)</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Sereel’s Innovation</h2>
          <p className="mb-6">
            We go further. With Sereel’s <strong>zkTLS (Zero-Knowledge Transport Layer Security) proofs</strong>, tokenize real-world assets <strong>with real-time, private audits</strong>—slashing costs and delays by 90%.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Need Liquidity?</h2>
          <p className="mb-6">
            Burn tokens in seconds and withdraw from your trust account instantly. Ready to retokenize? Deposit and hit <strong>one API call</strong>. No paperwork. No wait.
          </p>
        </div>
      </div>

      <MobileMenu />
      <Footer />
    </div>
  );
};