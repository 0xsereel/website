// src/components/Home/ReadyToTokenize.tsx
import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { GlowingText } from "../Animation/GlowingText";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";

export const ReadyToTokenize = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full flex items-center justify-center py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden safe-area-padding">
      <div className="w-[95%] max-w-5xl mx-auto relative z-10 responsive-container">
        <AnimatedSection className="w-full flex items-center justify-center flex-col border border-[#202026] rounded-2xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#1CA36E]/10 to-black/50 backdrop-blur-sm">
          <motion.h3
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gilroy-bold text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to <GlowingText className="text-[#1CA36E]">Tokenize</GlowingText>?
          </motion.h3>

          <motion.p
            className="mt-4 sm:mt-6 text-center text-[#D5D5D5] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Whether you're launching a tokenized fund, digitizing corporate bonds, or building exchange infrastructure—we'll architect the solution. Schedule a consultation to discuss your requirements.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => navigate("/contact")}
                className="px-8 py-4 text-base sm:text-lg"
              >
                Schedule Strategic Consultation
              </Button>
            </motion.div>

            <motion.button
              onClick={() => navigate("/repositories")}
              className="px-8 py-4 text-base sm:text-lg border border-[#1CA36E] text-[#1CA36E] rounded-full hover:bg-[#1CA36E]/10 transition-all duration-300"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(28, 163, 110, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Documentation
            </motion.button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
