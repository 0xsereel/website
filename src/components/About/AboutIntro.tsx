import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function AboutIntro() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="w-full flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-[#1CA36E]/20 bg-gradient-to-br from-[#0A0A0A] to-black"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "linear-gradient(135deg, rgba(28, 163, 110, 0.08) 0%, rgba(28, 163, 110, 0.03) 50%, rgba(0, 0, 0, 0) 100%)",
                "linear-gradient(135deg, rgba(28, 163, 110, 0.03) 0%, rgba(28, 163, 110, 0.08) 50%, rgba(0, 0, 0, 0) 100%)",
                "linear-gradient(135deg, rgba(28, 163, 110, 0.08) 0%, rgba(28, 163, 110, 0.03) 50%, rgba(0, 0, 0, 0) 100%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Decorative glowing orbs */}
          <motion.div
            className="absolute top-16 right-16 w-40 h-40 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(28, 163, 110, 0.15) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute bottom-16 left-16 w-48 h-48 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          <div className="relative z-10 p-12 lg:p-20">
            {/* Top decorative line */}
            <motion.div
              className="flex items-center justify-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-transparent via-[#1CA36E] to-transparent"
                animate={{
                  scaleX: [0.5, 1, 0.5],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Main content with increased spacing */}
            <motion.p
              className="text-2xl lg:text-3xl leading-relaxed text-[#D5D5D5] text-center font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Sereel's RWA tokenization platform delivers institutional tokenization infrastructure with security token issuance, CMTA tokenization, and enterprise digital asset custody. Our bond tokenization platform supports Regulation S/D token issuance with multi-chain tokenization across Canton Network. We provide institutional DeFi infrastructure for real world asset tokenization, private credit tokenization, treasury tokenization, stablecoin issuance platform capabilities, and tokenized securities platform solutions—enabling institutions to tokenize, custody, and trade any asset class across any blockchain network.
            </motion.p>

            {/* Bottom decorative line */}
            <motion.div
              className="flex items-center justify-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-transparent via-[#1CA36E] to-transparent"
                animate={{
                  scaleX: [0.5, 1, 0.5],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />
            </motion.div>
          </div>

          {/* Corner accent dots */}
          <motion.div
            className="absolute top-4 right-4 w-2 h-2 bg-[#1CA36E] rounded-full opacity-60"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 0.2, 0.6],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-4 left-4 w-2 h-2 bg-white rounded-full opacity-40"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.1, 0.4],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
