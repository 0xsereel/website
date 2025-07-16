
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQItemsProps {
  faqs?: FAQItem[];
  openIndex: number | null;
  toggleFAQ: (index: number) => void;
}

const defaultFaqs: FAQItem[] = [
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

const FAQItems = ({ faqs = defaultFaqs, openIndex, toggleFAQ }: FAQItemsProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          className="group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-br from-[#1CA36E]/5 to-white/5 border border-[#202026] rounded-xl overflow-hidden"
            whileHover={{ 
              borderColor: "rgba(28, 163, 110, 0.3)",
              boxShadow: "0 0 20px rgba(28, 163, 110, 0.1)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-[#1CA36E]/5 transition-colors duration-300 group"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="font-gilroy-bold text-lg text-white pr-4 group-hover:text-[#1CA36E] transition-colors duration-300">
                {faq.question}
              </h4>
              <motion.div
                className="flex-shrink-0 text-[#1CA36E] group-hover:text-white transition-colors duration-300"
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index ? (
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMinus size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiPlus size={20} />
                  </motion.div>
                )}
              </motion.div>
            </motion.button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <motion.div
                    className="px-6 pb-6 border-t border-[#202026]"
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    exit={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.p
                      className="text-[#D5D5D5] leading-relaxed pt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQItems;
