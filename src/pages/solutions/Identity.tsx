import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MobileMenu } from "../../components/Header/MobileMenu";

export const Identity = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full h-[300px] bg-black flex items-center justify-center bg-gradient-to-bl from-[#1CA36E]/30 via-black to-[#1CA36E]/30">
        <h1 className="text-white text-4xl font-bold">Digital Identity Integration</h1>
      </div>

      <div className="w-full bg-black py-10 px-5">
        <div className="w-full max-w-[800px] mx-auto text-[#D5D5D5]">
          <p className="text-lg mb-6">
            <strong>Digital identity is revolutionizing governance—but how do financial institutions comply on public blockchains without exposing sensitive data?</strong>
          </p>
          <p className="mb-6">
            For example, Rwanda’s <a href="https://www.nida.gov.rw/" target="_blank" rel="noopener noreferrer" className="text-[#1CA36E] hover:underline">National ID Agency (NIDA)</a> and others mandate verified identity for financial access. Yet public blockchains pseudonymize users. <strong>Seree bridges this gap.</strong>
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Identity-Verified Wallets</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Zero-Knowledge Proofs:</strong> Confirm Rwandan citizenship <strong>without</strong> revealing personal data</li>
            <li><strong>NIDA-Compliant:</strong> On-chain validation meets regulatory requirements</li>
            <li><strong>Private by Default:</strong> Operate in DeFi/tokenization without exposing customer IDs</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">For Financial Institutions</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Replace</strong> manual KYC with automated on-chain checks</li>
            <li><strong>Maintain</strong> full AML compliance across all transactions</li>
            <li><strong>Enable</strong> seamless digital asset adoption</li>
          </ul>

          <p className="text-lg">
            Our digital identity integration enables private participation in public networks. <strong>Contact us</strong> to learn more about digital identity integration.
          </p>
        </div>
      </div>

      <MobileMenu />
      <Footer />
    </div>
  );
};