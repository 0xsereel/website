
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const MissionStatement = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="w-full flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        <motion.div
          className="bg-gradient-to-br from-[#1CA36E]/5 to-white/3 p-12 lg:p-16 rounded-3xl border border-[#1CA36E]/20 relative overflow-hidden"
          whileHover={{ 
            boxShadow: "0 0 60px rgba(28, 163, 110, 0.2)",
            borderColor: "rgba(28, 163, 110, 0.3)"
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#1CA36E]/3 to-transparent"
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <motion.div
              className="space-y-8 text-lg lg:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-[#D5D5D5]">
                <motion.a
                  href="https://www.blackrock.com/corporate/investor-relations/larry-fink-annual-chairmans-letter#unlocking-private-markets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1CA36E] underline font-bold"
                  whileHover={{ 
                    scale: 1.02,
                    textShadow: "0 0 15px rgba(28, 163, 110, 0.8)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  25 trillion dollars
                </motion.a>{" "}
                sit idly in bank accounts - while cross border payments take days and cost{" "}
                <motion.a
                  href="https://papss.com/media/in-the-media/new-africa-payment-system-to-save-5-billion-in-fees-lift-trade-in-bloomberg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1CA36E] underline font-bold"
                  whileHover={{ 
                    scale: 1.02,
                    textShadow: "0 0 15px rgba(28, 163, 110, 0.8)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  billions
                </motion.a>
                . The financial world is not interoperable with the blockchain world. These inefficiencies drive us to build.
              </p>
              
              <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#1CA36E]/30 to-transparent" />
              
              <p className="text-[#D5D5D5]">
                Sereel is binding traditional and{" "}
                <motion.a
                  href="https://www.investopedia.com/decentralized-finance-defi-5113835"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1CA36E] underline font-bold"
                  whileHover={{ 
                    scale: 1.02,
                    textShadow: "0 0 15px rgba(28, 163, 110, 0.8)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  decentralized finance
                </motion.a>
                . Secure enough for financial institutions, scalable enough for communities and entrepreneurs. With a focus on speed and safety, our Rust-based blockchain architecture gives your capital instant liquidity, programmable yield, and bulletproof security.
              </p>
              
              <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#1CA36E]/30 to-transparent" />
              
              <p className="text-[#D5D5D5]">
                Founded by blockchain engineers and financiers, we're pioneers in turning idle capital into programmable, yield-bearing assets that settle in minutes - not days. We're redefining the physics of value.{" "}
                <motion.span
                  className="text-[#1CA36E] font-bold text-xl"
                  animate={{ 
                    textShadow: [
                      "0 0 5px rgba(28, 163, 110, 0.5)",
                      "0 0 20px rgba(28, 163, 110, 0.8)",
                      "0 0 5px rgba(28, 163, 110, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Join us.
                </motion.span>
              </p>
            </motion.div>
          </div>

          {/* Decorative corner elements */}
          <motion.div
            className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-[#1CA36E]/20 rounded-tl-2xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.div
            className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-[#1CA36E]/20 rounded-br-2xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
export default MissionStatement;
