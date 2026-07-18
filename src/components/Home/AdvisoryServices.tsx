import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { AnimatedCard } from "../Animation/AnimatedCard";
import { GlowingText } from "../Animation/GlowingText";

export const AdvisoryServices = () => {
  const services = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Tokenomics design and optimization",
      description: "Design sustainable token economics that align with your business model and regulatory requirements."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 6V4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Network and protocol selection advisory",
      description: "Choose the optimal blockchain infrastructure for your specific use case and requirements."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Regulatory pathway mapping",
      description: "Navigate complex regulatory landscapes with confidence across multiple jurisdictions."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Go-to-market strategy for tokenized products",
      description: "Develop comprehensive launch strategies that drive adoption and market success."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.93 4.93L7.76 7.76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.24 16.24L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.93 19.07L7.76 16.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Secondary market liquidity planning",
      description: "Design liquidity frameworks that ensure long-term tradability and market depth."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V18" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 12H21" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Custom infrastructure architecture",
      description: "Build tailored tokenization infrastructure that scales with your business needs."
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] py-16 sm:py-20 lg:py-24 xl:py-32 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(28, 163, 110, 0.15) 1px, transparent 0)`,
          backgroundSize: '48px 48px',
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="w-[95%] max-w-7xl mx-auto relative z-10">
        <AnimatedSection className="w-full flex items-center justify-center flex-col mb-16 sm:mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1CA36E]/10 border border-[#1CA36E]/30 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="w-2 h-2 bg-[#1CA36E] rounded-full animate-pulse" />
            <span className="text-[#1CA36E] font-gilroy-medium text-sm">Strategic Advisory</span>
          </motion.div>

          <motion.h3
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gilroy-bold text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <GlowingText className="text-[#1CA36E]">
              Boutique Tokenization Strategy
            </GlowingText>
            <br />
            <span className="text-white">& Tokenomics Consulting</span>
          </motion.h3>

          <motion.p
            className="text-center text-[#B0B0B0] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Beyond technology, we provide strategic advisory to help institutions navigate the tokenization landscape. From tokenomics design to network selection, our team guides you from concept to launch.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" variant="stagger">
          {services.map((service, index) => (
            <AnimatedCard
              key={index}
              className="group relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-[#2A2A2A] rounded-2xl p-8 hover:border-[#1CA36E] hover:shadow-[0_8px_32px_rgba(28,163,110,0.15)] transition-all duration-500"
              delay={index * 0.1}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1CA36E]/0 via-transparent to-[#1CA36E]/0 group-hover:from-[#1CA36E]/10 group-hover:to-[#1CA36E]/5 rounded-2xl transition-all duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1CA36E]/20 to-[#1CA36E]/10 flex items-center justify-center mb-6 text-[#1CA36E] group-hover:scale-110 group-hover:from-[#1CA36E] group-hover:to-[#00FFB2] group-hover:text-white transition-all duration-500"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>

                <h4 className="font-gilroy-bold text-lg sm:text-xl mb-3 text-white group-hover:text-[#1CA36E] transition-colors duration-300">
                  {service.title}
                </h4>
                
                <p className="text-[#B0B0B0] leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </AnimatedSection>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1CA36E] to-[#00FFB2] rounded-full text-white font-gilroy-medium text-lg hover:shadow-[0_8px_32px_rgba(28,163,110,0.4)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
