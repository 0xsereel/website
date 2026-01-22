import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { AnimatedCard } from "../Animation/AnimatedCard";
import { GlowingText } from "../Animation/GlowingText";

export const ClientSegments = () => {
  const segments = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 16V8C20.9996 7.64088 20.9071 7.28758 20.7315 6.97401C20.556 6.66044 20.3037 6.39677 20 6.205L13 2.205C12.696 2.01333 12.3511 1.91247 12 1.91247C11.6489 1.91247 11.304 2.01333 11 2.205L4 6.205C3.69626 6.39677 3.44398 6.66044 3.26846 6.97401C3.09294 7.28758 3.00036 7.64088 3 8V16C3.00036 16.3591 3.09294 16.7124 3.26846 17.026C3.44398 17.3395 3.69626 17.6032 4 17.795L11 21.795C11.304 21.9867 11.6489 22.0875 12 22.0875C12.3511 22.0875 12.696 21.9867 13 21.795L20 17.795C20.3037 17.6032 20.556 17.3395 20.7315 17.026C20.9071 16.7124 20.9996 16.3591 21 16Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.27002 6.96L12 12.01L20.73 6.96"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22.08V12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "For Fund Managers",
      description:
        "Private credit tokenization and treasury tokenization with our RWA tokenization platform. Security token issuance with CMTA tokenization. Automate NAV calculations and dividend distributions. Enable 24/7 subscriptions with institutional tokenization infrastructure.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "For Stock Exchanges",
      description:
        "Launch tokenized securities platform with bond tokenization platform capabilities. Security token issuance with multi-chain tokenization and Canton Network integration. Enable T+0 settlement with institutional DeFi infrastructure.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "For Clearing Houses",
      description:
        "Atomic settlement and real-time collateral management. Reduce counterparty risk with smart contract-based clearing. Eliminate failed trades.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 22V12H15V22"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "For Banks",
      description:
        "Offer RWA tokenization platform as-a-service with institutional tokenization infrastructure. Bond tokenization platform for Regulation S/D token issuance. Enterprise digital asset custody with CMTA tokenization and stablecoin issuance platform capabilities.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "For Family Offices",
      description:
        "Private credit tokenization and real world asset tokenization with enterprise digital asset custody. Access tokenized securities platform for treasury tokenization. Multi-chain tokenization with institutional DeFi infrastructure and Canton Network integration.",
    },
  ];

  return (
    <section className="w-full flex items-center justify-center py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden safe-area-padding">
      <div className="w-[95%] max-w-7xl mx-auto relative z-10 responsive-container">
        <AnimatedSection className="w-full flex items-center justify-center flex-col">
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-gilroy-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlowingText className="text-[#1CA36E]">
              Who We Serve
            </GlowingText>
          </motion.h3>
          <motion.p
            className="mt-2 text-center text-[#D5D5D5] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            RWA tokenization platform with institutional tokenization infrastructure, security token issuance, bond tokenization platform, and enterprise digital asset custody for institutional market participants
          </motion.p>
        </AnimatedSection>

        <AnimatedSection
          className="responsive-grid mt-12 sm:mt-16"
          variant="stagger"
        >
          {segments.map((segment, index) => (
            <AnimatedCard
              key={index}
              className="w-full min-h-[280px] sm:min-h-[300px] border border-[#202026] rounded-xl p-4 sm:p-6 bg-gradient-to-br from-[#1CA36E]/5 to-white/5 hover:border-[#1CA36E]/50 transition-all duration-300 flex flex-col"
              delay={index * 0.1}
            >
              <div className="w-full">
                <motion.div
                  className="w-12 h-12 sm:w-16 sm:h-16 border border-[#5F5F7138] rounded-full bg-white/5 flex items-center justify-center mb-3 sm:mb-4 shrink-0"
                  whileHover={{
                    backgroundColor: "rgba(28, 163, 110, 0.1)",
                    borderColor: "rgba(28, 163, 110, 0.5)",
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {segment.icon}
                </motion.div>
              </div>

              <div className="mt-2 sm:mt-3 flex-1 flex flex-col">
                <h3 className="font-gilroy-bold text-lg sm:text-xl mb-2 text-white">
                  {segment.title}
                </h3>
                <p className="text-[#D5D5D5] leading-relaxed text-sm sm:text-base">
                  {segment.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};
