import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What kind of wallets does Seree provide?",
    answer:
      "We provide non-custodial, smart contract-based wallets powered by ERC-4337 . These wallets offer programmable features like spending limits, session keys, and gasless transactions all without sacrificing security.",
  },
  {
    question: "Who are our solutions for?",
    answer:
      "We serve banks, fintechs, insurance firms, investment platforms, and other regulated financial institutions across Africa looking to adopt secure, compliant, and scalable blockchain technology.",
  },
  {
    question: "What can Seree tokenize ?",
    answer:
      "Our platform supports tokenization of fiat, bonds, real estate, commodities, invoices, equity, and more, we turn real-world assets into programmable, tradable digital tokens.",
  },
  {
    question: "What is ISO 20022?",
    answer:
      "ISO 20022 is a global standard for exchanging electronic data between financial institutions, enabling efficient and standardized communication for financial transactions. It supports rich data formats, enhancing compliance and operational efficiency.",
  },
  {
    question: "What is ERC-3643 ?",
    answer:
      "ERC-3643 is a security token standard designed for compliant and permissioned digital assets. Seree uses it to help institutions tokenize bonds, equity, and real-world assets while maintaining full compliance with regulatory requirements.",
  },
  {
    question: "What standards do we use for tokenized assets?",
    answer:
      "We support ERC-1400 and ERC-3643 standards for regulated asset tokens, as well as custom structures where needed.",
  },
  {
    question: "What is Restaking?",
    answer:
      "Restaking refers to the process of using staked assets on a Proof of Stake network to run applications other than the consensus mechanism being run. This enables validators to earn additional fees on top of running blockchains such as Ethereum. Seree participates in restaking by running additional services such as machine learning training and zero knowledge processing.",
  },
];

export default function FAQItems(): ReactNode {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-[#111] border border-[#222] rounded-xl px-6 py-4"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center text-left text-white text-lg font-medium cursor-pointer"
          >
            {faq.question}
            <span className="text-green-500">
              {openIndex === index ? <FiMinus /> : <FiPlus />}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden text-gray-300 mt-2"
              >
                <div className="py-2">{faq.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
