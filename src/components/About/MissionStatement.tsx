
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

// Mission Statement Component
const MissionStatement = () => {
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
          className="bg-gradient-to-br from-[#1CA36E]/10 to-white/5 p-8 lg:p-12 rounded-2xl border border-[#1CA36E]/20 relative overflow-hidden"
          whileHover={{ 
            boxShadow: "0 0 40px rgba(28, 163, 110, 0.3)",
            borderColor: "rgba(28, 163, 110, 0.4)"
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Background animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#1CA36E]/5 to-transparent"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="relative z-10 text-center">
            <motion.div
              className="space-y-6 text-lg leading-relaxed"
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
                    scale: 1.05,
                    textShadow: "0 0 10px rgba(28, 163, 110, 0.8)"
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
                    scale: 1.05,
                    textShadow: "0 0 10px rgba(28, 163, 110, 0.8)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  billions
                </motion.a>
                . The financial world is not interoperable with the blockchain world. These inefficiencies drive us to build.
              </p>
              
              <p className="text-[#D5D5D5]">
                Sereel is binding traditional and{" "}
                <motion.a
                  href="https://www.investopedia.com/decentralized-finance-defi-5113835"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1CA36E] underline font-bold"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 10px rgba(28, 163, 110, 0.8)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  decentralized finance
                </motion.a>
                . Secure enough for financial institutions, scalable enough for communities and entrepreneurs. With a focus on speed and safety, our Rust-based blockchain architecture gives your capital instant liquidity, programmable yield, and bulletproof security.
              </p>
              
              <p className="text-[#D5D5D5]">
                Founded by blockchain engineers and financiers, we're pioneers in turning idle capital into programmable, yield-bearing assets that settle in minutes - not days. We're redefining the physics of value.{" "}
                <motion.span
                  className="text-[#1CA36E] font-bold"
                  animate={{ 
                    textShadow: [
                      "0 0 5px rgba(28, 163, 110, 0.5)",
                      "0 0 15px rgba(28, 163, 110, 0.8)",
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
        </motion.div>
      </div>
    </motion.div>
  );
};
export default MissionStatement;