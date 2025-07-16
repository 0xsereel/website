// src/pages/Repositories/Repositories.tsx
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MobileMenu } from "../../components/Header/MobileMenu";
import { motion } from "framer-motion";
import { AnimatedSection } from "../../components/Animation/AnimatedSection";
import { AnimatedCard } from "../../components/Animation/AnimatedCard";
import { GlowingText } from "../../components/Animation/GlowingText";

interface ResearchPaper {
  title: string;
  link: string;
  description: string;
  category: string;
  source: string;
  year?: string;
}

export const Repositories = () => {
  const researchPapers: ResearchPaper[] = [
    {
      title: "Ethereum Whitepaper",
      link: "https://ethereum.org/en/whitepaper/",
      description: "The foundational paper that introduced the concept of programmable blockchain and smart contracts, revolutionizing decentralized applications.",
      category: "Blockchain Fundamentals",
      source: "Ethereum Foundation",
      year: "2013"
    },
    {
      title: "A Comprehensive Review of the TLSNotary Protocol",
      link: "https://arxiv.org/abs/2409.17670",
      description: "In-depth analysis of TLS-based data verification systems, crucial for our zkTLS implementation in asset tokenization.",
      category: "Zero-Knowledge Proofs",
      source: "arXiv",
      year: "2024"
    },
    {
      title: "Programmable Cryptography 0xPARC",
      link: "https://0xparc.org/blog/programmable-cryptography-1",
      description: "Explores the intersection of cryptography and programmability, fundamental to building secure and efficient DeFi protocols.",
      category: "Cryptographic Systems",
      source: "0xPARC",
      year: "2023"
    },
    {
      title: "The God Protocols",
      link: "https://nakamotoinstitute.org/library/the-god-protocols/",
      description: "Nick Szabo's seminal work on trusted third parties and the vision for trustless systems that inspired blockchain technology.",
      category: "Cryptographic Theory",
      source: "Nakamoto Institute",
      year: "1997"
    },
    {
      title: "Web Data Authentication with Garble-Then-Prove",
      link: "https://eprint.iacr.org/2023/964",
      description: "Advanced cryptographic techniques for secure data verification, directly applicable to our real-world asset verification systems.",
      category: "Zero-Knowledge Proofs",
      source: "IACR ePrint",
      year: "2023"
    },
  ];

  const categories = ["All", "Blockchain Fundamentals", "Zero-Knowledge Proofs", "Cryptographic Systems", "Cryptographic Theory"];

  return (
    <div className="w-full">
      <Header />
      
      {/* Enhanced Hero Section */}
      <motion.div
        className="w-full h-[500px] bg-black flex items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(28, 163, 110, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 20%, rgba(28, 163, 110, 0.15) 0%, transparent 50%), radial-gradient(circle at 30% 80%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(28, 163, 110, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, rgba(28, 163, 110, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-20 w-6 h-6 bg-[#1CA36E] rounded-full opacity-50"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-8 h-8 bg-white rounded-full opacity-30"
          animate={{
            y: [0, 25, 0],
            x: [0, -25, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <motion.div
          className="text-center relative z-10 px-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl font-gilroy-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlowingText className="text-[#1CA36E]">Research</GlowingText> Repository
          </motion.h1>
          <motion.p
            className="text-xl text-[#D5D5D5] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Foundational research and cutting-edge papers that inspire our institutional DeFi innovations
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Enhanced Content Section */}
      <div className="w-full bg-black py-20 px-5 relative overflow-hidden">
        {/* Background animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#1CA36E]/3 via-transparent to-[#1CA36E]/5"
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="w-full max-w-6xl mx-auto relative z-10">
          
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-gilroy-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlowingText className="text-[#1CA36E]">Research</GlowingText> That Shapes Our Vision
            </motion.h2>
            <motion.p
              className="text-[#D5D5D5] text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              These seminal papers and cutting-edge research form the theoretical foundation of our institutional DeFi solutions
            </motion.p>
          </AnimatedSection>

          {/* Research Papers Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {researchPapers.map((paper, index) => (
              <ResearchCard key={index} paper={paper} index={index} />
            ))}
          </div>

          {/* Categories Section */}
          <CategoriesSection categories={categories} />

          {/* Call to Action */}
          <CTASection />
        </div>
      </div>

      <MobileMenu />
      <Footer />
    </div>
  );
};

// Research Card Component
const ResearchCard = ({ paper, index }: { paper: ResearchPaper; index: number }) => {
  return (
    <AnimatedCard
      className="bg-gradient-to-br from-[#1CA36E]/5 to-white/5 border border-[#202026] rounded-2xl p-8 relative overflow-hidden group"
      delay={index * 0.1}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#1CA36E]/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      
      <div className="relative z-10">
        {/* Category Badge */}
        <motion.div
          className="inline-block mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <span className="px-3 py-1 bg-[#1CA36E]/20 text-[#1CA36E] rounded-full text-sm font-gilroy-medium">
            {paper.category}
          </span>
        </motion.div>

        {/* Paper Title */}
        <motion.h3
          className="text-2xl font-gilroy-bold mb-3 text-white group-hover:text-[#1CA36E] transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {paper.title}
          </motion.a>
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-[#D5D5D5] mb-4 leading-relaxed group-hover:text-white transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          viewport={{ once: true }}
        >
          {paper.description}
        </motion.p>

        {/* Source and Year */}
        <motion.div
          className="flex items-center justify-between text-sm text-[#969696] group-hover:text-[#D5D5D5] transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
        >
          <span className="font-gilroy-medium">{paper.source}</span>
          {paper.year && <span>{paper.year}</span>}
        </motion.div>

        {/* Read More Button */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#1CA36E] font-gilroy-medium text-sm group-hover:gap-3 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span>Read Paper</span>
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:rotate-45 transition-transform duration-300"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </AnimatedCard>
  );
};

// Categories Section
const CategoriesSection = ({ categories }: { categories: string[] }) => {
  return (
    <motion.div
      className="mt-20 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h3
        className="text-3xl font-gilroy-bold mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <GlowingText className="text-[#1CA36E]">Research</GlowingText> Categories
      </motion.h3>
      
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="px-6 py-3 bg-gradient-to-r from-[#1CA36E]/10 to-white/5 border border-[#202026] rounded-full text-[#D5D5D5] hover:border-[#1CA36E]/50 hover:text-[#1CA36E] transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(28, 163, 110, 0.2)"
            }}
          >
            {category}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Call to Action Section
const CTASection = () => {
  return (
    <motion.div
      className="mt-20 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="bg-gradient-to-br from-[#1CA36E]/10 to-white/5 p-12 rounded-2xl border border-[#1CA36E]/20 relative overflow-hidden"
        whileHover={{ 
          boxShadow: "0 0 40px rgba(28, 163, 110, 0.3)",
          borderColor: "rgba(28, 163, 110, 0.4)"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-20 h-20 bg-[#1CA36E]/10 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-16 h-16 bg-white/10 rounded-full"
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="relative z-10">
          <motion.h3 
            className="text-3xl font-gilroy-bold mb-4"
            animate={{ 
              textShadow: [
                "0 0 10px rgba(28, 163, 110, 0.5)",
                "0 0 20px rgba(28, 163, 110, 0.8)",
                "0 0 10px rgba(28, 163, 110, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Interested in Our Research?
          </motion.h3>
          <p className="text-[#D5D5D5] text-lg mb-8 max-w-2xl mx-auto">
            Stay updated with our latest research findings and contributions to the institutional DeFi ecosystem
          </p>
          <div className="flex justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                href="/blog"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1CA36E] to-[#00FFB2] text-white px-8 py-3 rounded-full font-gilroy-medium hover:from-[#00FFB2] hover:to-[#1CA36E] transition-all duration-300"
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(28, 163, 110, 0.6)"
                }}
              >
                Read Our Blog
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </motion.a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#1CA36E] text-[#1CA36E] px-8 py-3 rounded-full font-gilroy-medium hover:bg-[#1CA36E] hover:text-white transition-all duration-300"
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(28, 163, 110, 0.3)"
                }}
              >
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
