import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the CMTA standard and how does Sereel use it?",
    answer:
      "The Capital Markets and Technology Association (CMTA) standard is a Swiss framework for tokenizing securities on blockchain. Sereel implements CMTA-compliant token standards to ensure that digital securities meet Swiss regulatory requirements, including the DLT Act. This enables institutions to issue compliant tokenized bonds, equity, and other securities that are legally recognized under Swiss law while maintaining interoperability with global financial systems.",
  },
  {
    question: "What multi-chain tokenization capabilities does Sereel offer?",
    answer:
      "Sereel provides comprehensive multi-chain tokenization capabilities across major blockchain networks including Ethereum, Polygon, Avalanche, Arbitrum, and other EVM-compatible chains. Our platform enables institutions to deploy tokenized assets across multiple networks simultaneously, ensuring flexibility, redundancy, and access to different liquidity pools. We support cross-chain asset transfers and maintain consistent compliance controls across all supported networks.",
  },
  {
    question: "What custody solutions does Sereel provide for institutional clients?",
    answer:
      "Sereel offers enterprise-grade custody solutions through smart contract-based wallets powered by ERC-4337 account abstraction. Our custody infrastructure includes multi-signature controls, role-based access management, hardware security module (HSM) integration, and programmable features like spending limits and session keys. We partner with leading institutional custodians to provide hybrid custody options that combine self-custody benefits with institutional-grade security and insurance coverage.",
  },
  {
    question: "Which blockchain networks does Sereel support?",
    answer:
      "Sereel supports all major EVM-compatible blockchain networks including Ethereum mainnet, Polygon, Avalanche, Arbitrum, Optimism, Base, and private/permissioned networks like Hyperledger Besu and Canton Network. We also provide integration capabilities for non-EVM chains through bridges and cross-chain messaging protocols. Our infrastructure is designed to be blockchain-agnostic, allowing institutions to choose the optimal network for their specific use case while maintaining consistent security and compliance controls.",
  },
  {
    question: "What regulatory frameworks does Sereel support?",
    answer:
      "Sereel is built to support multiple regulatory frameworks globally, including Regulation S and Regulation D for U.S. securities offerings, the European Union's Markets in Crypto-Assets (MiCA) regulation, Swiss DLT Act and FINMA guidelines, Singapore's MAS Payment Services Act, and various other jurisdictions. Our compliance infrastructure includes automated KYC/AML checks, transfer restrictions based on jurisdiction, investor accreditation verification, and reporting tools that adapt to each regulatory environment.",
  },
  {
    question: "How does Sereel integrate with Canton Network for privacy?",
    answer:
      "Sereel leverages Canton Network, a privacy-enabled interoperable blockchain network, to provide institutional clients with confidential transaction capabilities. Through Canton integration, we enable private settlements where transaction details are visible only to authorized parties, maintain data sovereignty requirements, support confidential multi-party workflows, and ensure regulatory compliance while preserving privacy. This is particularly valuable for institutions handling sensitive financial data that require both transparency to regulators and privacy from competitors.",
  },
  {
    question: "Does Sereel support T+0 settlement?",
    answer:
      "Yes, Sereel enables instant T+0 settlement for tokenized securities and digital assets. Unlike traditional financial markets that operate on T+1 or T+2 settlement cycles, blockchain-based tokenized assets can settle in real-time or within seconds. Our platform supports atomic swaps for delivery-versus-payment (DvP) transactions, instant settlement finality, 24/7 trading and settlement capabilities, and integration with both traditional and digital payment rails. This dramatically reduces counterparty risk, improves capital efficiency, and enables new types of financial products.",
  },
  {
    question: "What is ERC-3643 and why is it important for security tokens?",
    answer:
      "ERC-3643 is the T-REX (Token for Regulated EXchanges) standard, a comprehensive security token standard designed for compliant and permissioned digital securities. Sereel implements ERC-3643 to provide on-chain identity verification, transfer restrictions based on investor eligibility, forced transfers for regulatory actions, token recovery mechanisms, and compliance rule enforcement. This standard is essential for institutions tokenizing regulated securities like bonds, equity, and real-world assets, as it ensures full regulatory compliance while maintaining the benefits of blockchain technology.",
  },
  {
    question: "What are the key institutional use cases Sereel enables?",
    answer:
      "Sereel enables a wide range of institutional use cases including: tokenization of corporate and government bonds with automated coupon payments; real estate tokenization for fractional ownership and improved liquidity; private equity and venture capital fund tokenization; supply chain finance and invoice factoring; carbon credit and ESG asset tokenization; insurance product tokenization; syndicated loan management; treasury and cash management; cross-border payments and settlements; and collateral management for derivatives. Our platform is designed to handle complex institutional workflows while ensuring regulatory compliance and institutional-grade security.",
  },
  {
    question: "Who are Sereel's solutions designed for?",
    answer:
      "We serve banks, fintechs, insurance firms, investment platforms, asset managers, private equity funds, family offices, corporate treasuries, and other regulated financial institutions looking to adopt secure, compliant, and scalable blockchain technology. Our enterprise solutions are built specifically for organizations that require institutional-grade infrastructure, regulatory compliance, and seamless integration with existing financial systems.",
  },
  {
    question: "What kind of wallets does Sereel provide?",
    answer:
      "We provide non-custodial, smart contract-based wallets powered by ERC-4337 account abstraction. These wallets offer programmable features like spending limits, session keys, multi-signature controls, social recovery, gasless transactions, and batch operations—all without sacrificing security. Our wallet infrastructure is designed for institutional use with role-based access controls, audit trails, and integration with enterprise identity management systems.",
  },
  {
    question: "What is ISO 20022 and how does Sereel use it?",
    answer:
      "ISO 20022 is a global standard for exchanging electronic data between financial institutions, enabling efficient and standardized communication for financial transactions. Sereel implements ISO 20022 messaging standards to ensure seamless integration with existing banking infrastructure, support rich data formats for enhanced compliance and operational efficiency, enable structured financial data exchange, and facilitate cross-border payment interoperability. This ensures our blockchain-based solutions can work alongside traditional financial systems.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 xl:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAF9] via-white to-[#F0F9F5] pointer-events-none" />
      
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-[#1CA36E]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#00FFB2]/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="w-[95%] max-w-5xl mx-auto relative z-10">
        <AnimatedSection className="w-full flex items-center justify-center flex-col mb-16 sm:mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1CA36E]/10 border border-[#1CA36E]/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="w-2 h-2 bg-[#1CA36E] rounded-full animate-pulse" />
            <span className="text-[#1CA36E] font-gilroy-medium text-sm">FAQ</span>
          </motion.div>

          <motion.h3
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gilroy-bold text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-[#1A1A1A] via-[#1CA36E] to-[#1A1A1A] bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="text-[#1A1A1A]">Questions</span>
          </motion.h3>

          <motion.p
            className="text-center text-[#666666] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get answers to common questions about RWA tokenization platform, institutional tokenization infrastructure, security token issuance, CMTA tokenization, and Canton Network integration
          </motion.p>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#1CA36E]/50 hover:shadow-[0_8px_32px_rgba(28,163,110,0.08)] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="w-full p-6 sm:p-8 flex justify-between items-start gap-4 text-left cursor-pointer group"
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: "rgba(28, 163, 110, 0.02)" }}
              >
                <h4 className="text-lg sm:text-xl font-gilroy-bold text-[#1A1A1A] group-hover:text-[#1CA36E] transition-colors duration-300 flex-1">
                  {faq.question}
                </h4>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1CA36E]/10 flex items-center justify-center text-[#1CA36E] group-hover:bg-[#1CA36E] group-hover:text-white transition-colors duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                      <div className="w-full h-px bg-gradient-to-r from-[#1CA36E]/20 via-[#1CA36E]/50 to-[#1CA36E]/20 mb-6" />
                      <p className="text-[#666666] leading-relaxed text-base sm:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 sm:mt-20 bg-gradient-to-br from-[#1CA36E] via-[#1CA36E] to-[#00FFB2] rounded-3xl p-10 sm:p-12 text-center shadow-[0_16px_64px_rgba(28,163,110,0.25)] relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10">
            <motion.div
              className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.6 }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>

            <h4 className="text-3xl sm:text-4xl font-gilroy-bold text-white mb-4">
              Still Have Questions?
            </h4>
            <p className="text-white/95 text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Our team is ready to help you deploy RWA tokenization platform with institutional DeFi infrastructure, security token issuance, enterprise digital asset custody, and Canton Network tokenization
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full text-[#1CA36E] font-gilroy-medium text-lg hover:shadow-[0_8px_32px_rgba(255,255,255,0.3)] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Our Team
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
