// src/components/About/AboutIntro.tsx
import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";

export const AboutIntro = () => {
  return (
    <section className="w-full flex items-center justify-center py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden safe-area-padding bg-black">
      <div className="w-[95%] max-w-5xl mx-auto relative z-10 responsive-container">
        <AnimatedSection className="w-full">
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-center text-white leading-relaxed font-gilroy-medium"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Sereel delivers the <span className="text-[#1CA36E] font-gilroy-bold">complete institutional stack</span>: from secure wallet infrastructure and compliant tokenization engines to market connectivity and strategic advisory. We operate where traditional finance meets digital assets—enabling institutions to tokenize, custody, and trade any asset class across any blockchain network.
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
};
