import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { GlowingText } from "../Animation/GlowingText";

export const FinalCTA = () => {
  const navigate = useNavigate();

  const handleScheduleConsultation = () => {
    navigate("/contact");
  };

  const handleDownloadOverview = () => {
    console.log("Download Platform Overview");
  };

  const handleViewDocs = () => {
    console.log("View Documentation");
  };

  return (
    <section className="w-full flex items-center justify-center py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden safe-area-padding">
      <div className="w-[95%] max-w-4xl mx-auto relative z-10">
        <AnimatedSection className="w-full flex items-center justify-center flex-col text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gilroy-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlowingText className="text-[#1CA36E]">Ready to Tokenize?</GlowingText>
          </motion.h2>

          <motion.p
            className="mt-4 sm:mt-6 text-[#D5D5D5] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Whether you're launching a tokenized fund, digitizing corporate bonds, or building exchange infrastructure—we'll architect the solution. Schedule a consultation to discuss your requirements.
          </motion.p>

          <motion.div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                onClick={handleScheduleConsultation}
                className="px-8 py-4 w-full sm:w-auto"
              >
                Schedule Strategic Consultation
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                onClick={handleDownloadOverview}
                className="px-8 py-4 w-full sm:w-auto bg-transparent border-2 border-[#1CA36E] text-[#1CA36E] hover:bg-[#1CA36E] hover:text-white transition-colors"
              >
                Download Platform Overview
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                onClick={handleViewDocs}
                className="px-8 py-4 w-full sm:w-auto bg-transparent border-2 border-[#969696] text-[#969696] hover:bg-[#969696] hover:text-white transition-colors"
              >
                View Documentation
              </Button>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
