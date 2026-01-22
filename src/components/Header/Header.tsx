import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import { MenuOptions } from "./MenuOptions";
import { useState } from "react";
import { useGlobal } from "../../contexts/globals";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Header = () => {
  const logoPath = "/images/Hero/glowing_seree_logo.svg";

  const { setIsMobileMenuOpen } = useGlobal();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full fixed top-0 z-50 items-center justify-between flex flex-col safe-area-padding" style={{ padding: 'clamp(0.75rem, 2vw, 1.25rem)' }}>
      <div className="w-full backdrop-blur-xl bg-black/40 border border-white/5 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] px-4 sm:px-6 lg:px-8 py-3">
        <div className="w-full items-center justify-between flex">
          <div className="flex gap-4 items-center">
            <Link to="/" className="flex items-center gap-3 min-h-[44px] group">
              <motion.img 
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px] drop-shadow-[0_0_8px_rgba(28,163,110,0.4)]" 
                src={logoPath} 
                alt="Sereel Logo" 
              />

              <motion.h3 
                className="text-lg sm:text-xl lg:text-2xl font-gilroy-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent"
                whileHover={{ 
                  backgroundImage: "linear-gradient(to right, #ffffff, #1CA36E)",
                }}
              >
                Sereel
              </motion.h3>
            </Link>

            <div className="font-gilroy-medium lg:flex gap-1 xl:gap-3 ml-2 lg:ml-4 text-sm lg:text-md hidden">
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <button
                  className="flex gap-2 items-center cursor-pointer min-h-[44px] px-4 py-2 rounded-xl hover:bg-white/5 transition-all duration-300 hover:text-[#1CA36E] relative group"
                  onClick={handleOpenMenu}
                  aria-label="Solutions menu"
                >
                  <p className="relative">
                    Solutions
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1CA36E] to-[#00FFB2] group-hover:w-full transition-all duration-300"></span>
                  </p>
                  {isOpen ? <GoChevronUp aria-hidden="true" className="transition-transform duration-300" /> : <GoChevronDown aria-hidden="true" className="transition-transform duration-300" />}
                </button>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  to="/about"
                  className="flex gap-2 items-center cursor-pointer min-h-[44px] px-4 py-2 rounded-xl hover:bg-white/5 transition-all duration-300 hover:text-[#1CA36E] relative group"
                  aria-label="About Us page"
                >
                  <p className="relative">
                    About Us
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1CA36E] to-[#00FFB2] group-hover:w-full transition-all duration-300"></span>
                  </p>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  to="/blog"
                  className="flex gap-2 items-center cursor-pointer min-h-[44px] px-4 py-2 rounded-xl hover:bg-white/5 transition-all duration-300 hover:text-[#1CA36E] relative group"
                  aria-label="Blog page"
                >
                  <p className="relative">
                    Blog
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1CA36E] to-[#00FFB2] group-hover:w-full transition-all duration-300"></span>
                  </p>
                </Link>
              </motion.div>
            </div>
          </div>

          <div>
            <Link
              to="/contact"
              className="w-[120px] lg:w-[150px] h-[40px] lg:h-[50px] border border-white/10 rounded-full hidden lg:flex items-center justify-center backdrop-blur-sm bg-gradient-to-r from-transparent to-transparent hover:from-[#1CA36E]/10 hover:to-[#00FFB2]/10 hover:border-[#1CA36E]/50 transition-all duration-300 min-h-[44px] text-sm lg:text-base group relative overflow-hidden shadow-[0_4px_16px_0_rgba(0,0,0,0.2)]"
              aria-label="Contact Us"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1CA36E]/0 via-[#1CA36E]/10 to-[#1CA36E]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <motion.span
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 12px rgba(28, 163, 110, 0.6)",
                }}
                className="text-white group-hover:text-[#1CA36E] transition-colors duration-300 relative z-10 font-gilroy-medium"
              >
                Contact Us
              </motion.span>
            </Link>

            <motion.button 
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => setIsMobileMenuOpen(true)} 
              className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl hover:bg-white/5 transition-all duration-300 hover:text-[#1CA36E]"
              aria-label="Open mobile menu"
            >
              <FaBars size={24} aria-hidden="true" />
            </motion.button>
          </div>
        </div>
      </div>
      <div>
        <MenuOptions isOpen={isOpen} />
      </div>
    </header>
  );
};
