// src/components/Home/IGS.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { GlowingText } from "../Animation/GlowingText";
// import { useParallax } from "../../hooks/useParallax";

export const IGS = () => {
  const securityIconPath = "/images/solutions/security.png";
  const financialPracticeIconPath = "/images/solutions/financial-practices.png";
  const poRPath = "/images/solutions/PoR.png";

  // const { ref, y } = useParallax(0.2);

  const features = [
    {
      number: "1",
      title: "Security",
      description:
        "High-Grade Noncustodial Wallets: Multi-sig hardware wallets. Your assets are protected at every layer",
      icon: securityIconPath,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      number: "2",
      title: "Sereel's Financial Practices",
      description:
        "Designed for Compliance: Transparent ledgers, audit trails, and compliance-first architecture.",
      icon: financialPracticeIconPath,
      color: "from-[#1CA36E]/20 to-green-500/20",
    },
    {
      number: "3",
      title: "Proof Of Reserves",
      description:
        "PoR powered by zkTLS ensuring transparent and secure on-chain reserve verification, safeguarding assets and maintaining privacy.",
      icon: poRPath,
      color: "from-yellow-500/20 to-orange-500/20",
    },
  ];

  return (
    <section className="w-full flex items-center justify-center pb-10 pt-20 relative overflow-hidden">
      {/* Parallax Background */}
      {/* <motion.div
        ref={ref}
        className="absolute inset-0 bg-gradient-to-tl from-[#1CA36E]/5 via-transparent to-[#1CA36E]/10"
        style={{ y }}
      /> */}

      <div className="w-[90%] mx-auto relative z-10">
        <AnimatedSection className="lg:w-[95%] w-full flex lg:items-center justify-between mx-auto lg:flex-row flex-col">
          <div className="flex flex-col lg:w-fit w-full">
            <motion.h3
              className="lg:text-5xl text-3xl font-gilroy-bold"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlowingText className="text-[#1CA36E]">
                Institutional-Grade
              </GlowingText>{" "}
              Software
            </motion.h3>
            <motion.p
              className="mt-2 text-[#D5D5D5]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Built secure for high-stakes activity
            </motion.p>
          </div>

          <motion.div
            className="lg:mt-0 mt-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
          </motion.div>
        </AnimatedSection>

        <AnimatedSection className="lg:w-[95%] w-full lg:h-fit h-fit border border-[#202026] mt-10 mx-auto rounded-xl flex lg:flex-row flex-col overflow-hidden">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="lg:w-[33%] w-full h-full p-6 bg-gradient-to-br from-[#1CA36E]/5 to-black relative overflow-hidden flex flex-col" // Added flex flex-col
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                backgroundColor: "rgba(28, 163, 110, 0.1)",
                scale: 1.02,
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0`}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10 flex flex-col h-full">
                {" "}
                {/* Added flex flex-col and h-full */}
                <motion.div
                  className="w-[64px] h-[64px] border border-[#5F5F7138] rounded-full bg-white/5 flex items-center justify-center mb-6"
                  whileHover={{
                    backgroundColor: "rgba(28, 163, 110, 0.1)",
                    borderColor: "rgba(28, 163, 110, 0.5)",
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3
                    className="font-gilroy-bold text-[#1CA36E]"
                    whileHover={{ scale: 1.2 }}
                  >
                    {feature.number}
                  </motion.h3>
                </motion.div>
                <motion.div
                  className="w-full flex items-center justify-center mb-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={feature.icon}
                    className="w-[150px] h-[120px] object-contain" // Added fixed height
                    alt={feature.title}
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 1, -1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  />
                </motion.div>
                <div className="mt-auto flex flex-col">
                  {" "}
                  {/* Changed to mt-auto and added flex flex-col */}
                  <motion.h3
                    className="font-gilroy-bold text-xl mb-4 text-white h-[56px] flex items-center" // Added fixed height
                    whileHover={{
                      color: "#1CA36E",
                      textShadow: "0 0 10px rgba(28, 163, 110, 0.8)",
                    }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    className="text-[#969696] leading-relaxed min-h-[100px]" // Added min-height
                    whileHover={{ color: "#D5D5D5" }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};
