import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function AboutIntro() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="w-full flex items-center justify-center mb-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="w-[95%] max-w-6xl mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-[#1CA36E]/30"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "linear-gradient(135deg, rgba(28, 163, 110, 0.15) 0%, rgba(28, 163, 110, 0.05) 50%, rgba(0, 0, 0, 0.1) 100%)",
                "linear-gradient(135deg, rgba(28, 163, 110, 0.05) 0%, rgba(28, 163, 110, 0.15) 50%, rgba(0, 0, 0, 0.1) 100%)",
                "linear-gradient(135deg, rgba(28, 163, 110, 0.15) 0%, rgba(28, 163, 110, 0.05) 50%, rgba(0, 0, 0, 0.1) 100%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute top-10 right-10 w-32 h-32 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(28, 163, 110, 0.3) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute bottom-10 left-10 w-40 h-40 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          <div className="relative z-10 p-8 lg:p-12">
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-transparent via-[#1CA36E] to-transparent"
                animate={{
                  scaleX: [0.5, 1, 0.5],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.p
              className="text-xl lg:text-2xl leading-relaxed text-[#D5D5D5] text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Sereel delivers the complete institutional stack: from secure wallet infrastructure and compliant tokenization engines to market connectivity and strategic advisory. We operate where traditional finance meets digital assets—enabling institutions to tokenize, custody, and trade any asset class across any blockchain network.
            </motion.p>

            <motion.div
              className="flex items-center justify-center mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-transparent via-[#1CA36E] to-transparent"
                animate={{
                  scaleX: [0.5, 1, 0.5],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />
            </motion.div>
          </div>

          <motion.div
            className="absolute top-0 right-0 w-2 h-2 bg-[#1CA36E] rounded-full opacity-80"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 0.3, 0.8],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-2 h-2 bg-white rounded-full opacity-60"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 0.2, 0.6],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
