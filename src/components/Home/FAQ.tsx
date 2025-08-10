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
    question: "What kind of wallets does Sereel provide?",
    answer:
      "We provide non-custodial, smart contract-based wallets powered by ERC-4337. These wallets offer programmable features like spending limits, session keys, and gasless transactions all without sacrificing security.",
  },
  {
    question: "Who are our solutions for?",
    answer:
      "We serve banks, fintechs, insurance firms, investment platforms, and other regulated financial institutions looking to adopt secure, compliant, and scalable blockchain technology.",
  },
  {
    question: "What can Sereel tokenize?",
    answer:
      "Our platform supports tokenization of fiat, bonds, real estate, commodities, invoices, equity, and more, we turn real-world assets into programmable, tradable digital tokens.",
  },
  {
    question: "What is ISO 20022?",
    answer:
      "ISO 20022 is a global standard for exchanging electronic data between financial institutions, enabling efficient and standardized communication for financial transactions. It supports rich data formats, enhancing compliance and operational efficiency.",
  },
  {
    question: "What is ERC-3643?",
    answer:
      "ERC-3643 is a security token standard designed for compliant and permissioned digital assets. Sereel uses it to help institutions tokenize bonds, equity, and real-world assets while maintaining full compliance with regulatory requirements.",
  },
  {
    question: "What standards do we use for tokenized assets?",
    answer:
      "We support ERC-1400 and ERC-3643 standards for regulated asset tokens, as well as custom structures where needed.",
  },
  {
    question: "What is Restaking?",
    answer:
      "Restaking refers to the process of using staked assets on a Proof of Stake network to run applications other than the consensus mechanism being run. This enables validators to earn additional fees on top of running blockchains such as Ethereum. Sereel participates in restaking by running additional services such as machine learning training and zero knowledge processing.",
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
            Get answers to common questions about institutional DeFi and the
            Sereel Protocol
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
              Our team is ready to help you understand how Sereel can transform
              your institution's approach to DeFi
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
