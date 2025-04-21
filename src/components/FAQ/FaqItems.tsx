import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is a Blockchain?",
    answer:
      "A blockchain is a decentralized, distributed ledger technology that records transactions across a network of computers. It ensures data integrity and security through cryptography and consensus mechanisms.",
  },
  {
    question: "What is SWIFT?",
    answer:
      "SWIFT (Society for Worldwide Interbank Financial Telecommunications) is a global messaging network used by financial institutions to securely exchange financial messages, primarily for international transactions. It does not transfer funds but facilitates communication between banks.",
  },
  {
    question: "What is Ethereum?",
    answer:
      "Ethereum is a decentralized, open-source blockchain platform that supports smart contracts and decentralized applications (dApps). It uses Ether (ETH) as its native cryptocurrency and is known for its programmability and versatility.",
  },
  {
    question: "What is ISO 20022?",
    answer:
      "ISO 20022 is a global standard for exchanging electronic data between financial institutions, enabling efficient and standardized communication for financial transactions. It supports rich data formats, enhancing compliance and operational efficiency.",
  },
  {
    question: "What is Proof of Stake (PoS)?",
    answer:
      "Proof of Stake is a consensus algorithm used by some blockchain networks where validators are chosen to create new blocks based on the amount of cryptocurrency they hold (stake) rather than computational power. This method is more energy-efficient than Proof of Work.",
  },
  {
    question: "What is a Validator?",
    answer:
      "A validator is a node on a blockchain network that verifies transactions and creates new blocks. In Proof of Stake systems, validators are chosen based on their stake, while in other systems, they may be chosen based on different criteria. Seree runs Ethereum PoS validators.",
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
