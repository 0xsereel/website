import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Footer = () => {
  const logoPath = "/images/Hero/glowing_seree_logo.svg";

  return (
    <footer className="w-full flex items-center justify-center py-16 sm:py-20 lg:py-24 safe-area-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#1CA36E]/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="lg:w-[90%] w-full mx-auto relative z-10">
        <div className="backdrop-blur-xl bg-white/[0.02] border border-white/5 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] p-8 sm:p-10 lg:p-12">
          <div className="w-full flex justify-between items-start lg:flex-row flex-col gap-12 lg:gap-16">
            <Link to="/" className="flex items-center gap-4 min-h-[44px] mb-4 lg:mb-0 group">
              <motion.img 
                whileHover={{ scale: 1.05, rotate: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 drop-shadow-[0_0_12px_rgba(28,163,110,0.5)]" 
                src={logoPath} 
                alt="Sereel Logo" 
              />

              <motion.h3 
                className="text-xl sm:text-2xl lg:text-3xl font-gilroy-bold bg-gradient-to-br from-white via-white/95 to-[#1CA36E]/80 bg-clip-text text-transparent"
                whileHover={{ 
                  backgroundImage: "linear-gradient(135deg, #ffffff, #1CA36E, #00FFB2)",
                }}
              >
                Sereel
              </motion.h3>
            </Link>

            <div className="flex items-start gap-10 sm:gap-12 lg:gap-16 xl:gap-20 lg:flex-row flex-col w-full lg:w-auto justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <h3 className="font-gilroy-bold my-4 sm:my-5 lg:my-6 text-base sm:text-lg text-white/90 relative inline-block">
                  Solutions
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#1CA36E] to-transparent"></span>
                </h3>
                <div className="flex flex-col space-y-3 sm:space-y-4">
                  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link 
                      to="/solutions/wallet" 
                      className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-all duration-300 text-sm sm:text-base text-white/70 hover:text-[#1CA36E] group relative"
                    >
                      <span className="relative">
                        Wallet
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1CA36E] to-[#00FFB2] group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link 
                      to="/solutions/tokenization" 
                      className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-all duration-300 text-sm sm:text-base text-white/70 hover:text-[#1CA36E] group relative"
                    >
                      <span className="relative">
                        Tokenization
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1CA36E] to-[#00FFB2] group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link 
                      to="/solutions/defi" 
                      className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-all duration-300 text-sm sm:text-base text-white/70 hover:text-[#1CA36E] group relative"
                    >
                      <span className="relative">
                        DeFi
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1CA36E] to-[#00FFB2] group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <h3 className="font-gilroy-bold my-4 sm:my-5 lg:my-6 text-base sm:text-lg text-white/90 relative inline-block">
                  About Us
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#1CA36E] to-transparent"></span>
                </h3>
                <div className="flex flex-col space-y-3 sm:space-y-4">
                  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link
                      to="/about"
                      className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-all duration-300 text-sm sm:text-base text-white/70 hover:text-[#1CA36E] group relative"
                    >
                      <span className="relative">
                        About
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1CA36E] to-[#00FFB2] group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link 
                      to="/entities" 
                      className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-all duration-300 text-sm sm:text-base text-white/70 hover:text-[#1CA36E] group relative"
                    >
                      <span className="relative">
                        Entities
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1CA36E] to-[#00FFB2] group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link 
                      to="/partnerships" 
                      className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-all duration-300 text-sm sm:text-base text-white/70 hover:text-[#1CA36E] group relative"
                    >
                      <span className="relative">
                        Partnerships
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1CA36E] to-[#00FFB2] group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <h3 className="font-gilroy-bold my-4 sm:my-5 lg:my-6 text-base sm:text-lg text-white/90 relative inline-block">
                  Resources
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#1CA36E] to-transparent"></span>
                </h3>
                <div className="flex flex-col space-y-3 sm:space-y-4">
                  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link 
                      to="/blog" 
                      className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-all duration-300 text-sm sm:text-base text-white/70 hover:text-[#1CA36E] group relative"
                    >
                      <span className="relative">
                        Blog
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1CA36E] to-[#00FFB2] group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link 
                      to="/repositories" 
                      className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-all duration-300 text-sm sm:text-base text-white/70 hover:text-[#1CA36E] group relative"
                    >
                      <span className="relative">
                        Research Repository
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1CA36E] to-[#00FFB2] group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-white/10 relative">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#1CA36E]/50 to-transparent"></div>
            <motion.p 
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              className="text-center text-white/80 font-gilroy-bold text-sm sm:text-base lg:text-lg mb-5 bg-gradient-to-r from-white/70 via-[#1CA36E]/70 to-white/70 bg-clip-text text-transparent"
            >
              Institutional DeFi. Enterprise Standards.
            </motion.p>
            <p className="text-center text-white/50 text-xs sm:text-sm lg:text-base font-gilroy">
              Sereel 2025, All Rights Reserved. Sereel Technologies, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
