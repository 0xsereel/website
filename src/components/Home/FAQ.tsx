// src/components/Home/FAQ.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { GlowingText } from "../Animation/GlowingText";

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
    <section className="w-full flex items-center justify-center py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden safe-area-padding">
      {/* Background animation */}
      {/* <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#1CA36E]/5 via-transparent to-[#1CA36E]/10"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      /> */}

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-[#1CA36E] rounded-full opacity-40"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-6 h-6 bg-white rounded-full opacity-30"
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="w-[95%] max-w-4xl mx-auto flex justify-center items-center flex-col relative z-10 responsive-container">
        {/* Enhanced Title */}
        <AnimatedSection className="w-full flex items-center justify-center flex-col">
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-gilroy-bold mb-4 responsive-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlowingText className="text-[#1CA36E]">
              Frequently Asked
            </GlowingText>{" "}
            Questions
          </motion.h3>
          <motion.p
            className="text-center text-[#D5D5D5] text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get answers to common questions about RWA tokenization platform, institutional tokenization infrastructure, security token issuance, CMTA tokenization, and Canton Network integration
          </motion.p>
        </AnimatedSection>

        {/* Enhanced FAQ Items */}
        <div className="w-full max-w-4xl mt-16">
          <div className="w-full max-w-4xl mt-16 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#1CA36E]/5 to-white/5 border border-[#202026] rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="p-6 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ backgroundColor: "rgba(28, 163, 110, 0.05)" }}
                >
                  <h3 className="text-xl font-gilroy-medium text-white">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#1CA36E]"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="overflow-hidden"
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 pt-4 text-[#D5D5D5]">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>{" "}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-br from-[#1CA36E]/10 to-white/5 p-8 rounded-2xl border border-[#1CA36E]/20 relative overflow-hidden"
            whileHover={{
              boxShadow: "0 0 40px rgba(28, 163, 110, 0.3)",
              borderColor: "rgba(28, 163, 110, 0.4)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h4
              className="text-2xl font-gilroy-bold mb-4"
              animate={{
                textShadow: [
                  "0 0 10px rgba(28, 163, 110, 0.5)",
                  "0 0 20px rgba(28, 163, 110, 0.8)",
                  "0 0 10px rgba(28, 163, 110, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Still Have Questions?
            </motion.h4>
            <p className="text-[#D5D5D5] mb-6 max-w-2xl mx-auto">
              Our team is ready to help you deploy RWA tokenization platform with institutional DeFi infrastructure, security token issuance, enterprise digital asset custody, and Canton Network tokenization
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1CA36E] to-[#00FFB2] text-white px-8 py-3 rounded-full font-gilroy-medium hover:from-[#00FFB2] hover:to-[#1CA36E] transition-all duration-300"
                whileHover={{
                  boxShadow: "0 0 30px rgba(28, 163, 110, 0.6)",
                }}
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
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
