import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MobileMenu } from "../../components/Header/MobileMenu";

export const Wallet = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full h-[400px] bg-black flex items-center justify-center bg-gradient-to-bl from-[#1CA36E]/30 via-black to-[#1CA36E]/30">
        <h1 className="text-white text-4xl font-bold">Sereel Wallet</h1>
      </div>

      <div className="w-full bg-black py-10 px-5">
        <div className="w-full max-w-[800px] mx-auto text-[#D5D5D5]">
          <p className="text-lg mb-6">
            <strong>The first institutional wallet with native ISO20022 compliance</strong>
          </p>
          <p className="mb-6">
            Every action—creating wallets, sending/receiving funds, tokenizing assets—generates standardized ISO20022 messages. Audit-ready from day one.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">
            For institutions who demand both crypto-native features and traditional finance compatibility:
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Non-custodial smart accounts</strong> with social logins (email) + WebAuthn passkeys</li>
            <li><strong>Enterprise-grade controls:</strong> Multisig, gas abstraction, transaction policies</li>
            <li><strong>Seamless integration</strong> with existing financial reporting systems</li>
            <li><strong>MEV Resistant:</strong> We take advantage of private mempools to make your trades efficient</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Why ISO20022 Matters</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Automatically generated messages for:</li>
            <ul className="list-disc list-inside ml-6">
              <li>Wallet creation (<code>ACCT</code>)</li>
              <li>Token transfers (<code>PACS</code>)</li>
              <li>Crypto Purchases (<code>DITU</code>)</li>
            </ul>
            <li><strong>No adapters needed</strong> – native compatibility with SWIFT, FedNow, SEPA, and other core banking systems</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Technical Foundation</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>ERC-4337:</strong> Programmable account recovery + gas sponsorship</li>
            <li><strong>WebAuthn:</strong> Passwordless auth via biometrics/hardware keys</li>
            <li><strong>Multisig:</strong> Configurable approval workflows (e.g., 3-of-5 signers)</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4">Use Cases</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Banks custodying tokenized assets while meeting BIS reporting requirements</li>
            <li>Corporations executing compliant cross-border stablecoin payments</li>
            <li>Investment funds automating capital calls with on-chain audit trails</li>
          </ul>

          <div className="mt-6">
            <Button
              onClick={() =>
                window.open("https://www.iso20022.org/iso-20022-message-definitions", "_blank")
              }
            >
              Get the ISO20022 Messaging Specs
            </Button>
          </div>
        </div>
      </div>

      <MobileMenu />
      <Footer />
    </div>
  );
};