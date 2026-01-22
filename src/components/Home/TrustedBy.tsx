import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { AnimatedCard } from "../Animation/AnimatedCard";
import { GlowingText } from "../Animation/GlowingText";

interface Partner {
  name: string;
  website: string;
  description: string;
  logoPlaceholder: string;
}

export const TrustedBy = () => {
  const partners: Partner[] = [
    {
      name: "Future Wealth Group",
      website: "futurewealthgroup.ch",
      description:
        "Swiss-based investment group empowering global investments across tokenized assets and sustainable finance.",
      logoPlaceholder: "FWG",
    },
    {
      name: "GrowTokens",
      website: "growtokens.io",
      description:
        "Impact-driven ESG investment platform tokenizing solar energy projects powering African communities. Making sustainable energy investments accessible, transparent, and scalable.",
      logoPlaceholder: "GT",
    },
    {
      name: "Future Energy Global",
      website: "fe.global",
      description:
        "Accelerating sustainable aviation fuel (SAF) markets through innovative financial ecosystems. Operating at the intersection of climate and capital—integrity led, profit driven. Backed by Aviation Partners.",
      logoPlaceholder: "FEG",
    },
  ];

  return (
    <section className="w-full flex items-center justify-center py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden safe-area-padding">
      <div className="w-[95%] max-w-7xl mx-auto relative z-10 responsive-container">
        <AnimatedSection className="w-full flex items-center justify-center flex-col">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-gilroy-bold text-center max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlowingText className="text-[#1CA36E]">Trusted by institutions</GlowingText>{" "}
            building the future of sustainable finance
          </motion.h2>
        </AnimatedSection>

        <AnimatedSection
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16"
          variant="stagger"
        >
          {partners.map((partner, index) => (
            <AnimatedCard
              key={index}
              className="w-full border border-[#202026] rounded-xl p-6 sm:p-8 bg-gradient-to-br from-[#1CA36E]/5 to-white/5 hover:border-[#1CA36E]/50 transition-all duration-300 flex flex-col group"
              delay={index * 0.1}
            >
              <motion.div
                className="w-full h-24 sm:h-32 flex items-center justify-center mb-6 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-4xl sm:text-5xl font-gilroy-bold transition-all duration-300 grayscale group-hover:grayscale-0"
                  style={{ color: "#1CA36E" }}
                >
                  {partner.logoPlaceholder}
                </motion.div>
              </motion.div>

              <div className="flex-1 flex flex-col">
                <h3 className="font-gilroy-bold text-xl sm:text-2xl mb-2 text-white">
                  {partner.name}
                </h3>
                <motion.a
                  href={`https://${partner.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1CA36E] text-sm sm:text-base mb-4 hover:underline inline-flex items-center gap-1"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {partner.website}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block"
                  >
                    <path
                      d="M9 3L3 9M9 3H5M9 3V7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.a>
                <p className="text-[#D5D5D5] text-sm sm:text-base leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};
