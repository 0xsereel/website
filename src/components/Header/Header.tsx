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
    <header className="w-full fixed top-0 z-50 items-center justify-between flex flex-col safe-area-padding bg-black bg-opacity-80 backdrop-blur-sm" style={{ padding: 'clamp(0.75rem, 2vw, 1rem)' }}>
      {" "}
      <div className="w-full items-center justify-between flex">
        <div className="flex gap-4 items-center">
          {/* Logo */}

          <Link to="/" className="flex items-center gap-3 min-h-[44px]">
            <img 
              className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px]" 
              src={logoPath} 
              alt="Sereel Logo" 
            />

            <h3 className="text-lg sm:text-xl lg:text-2xl font-gilroy-bold">Sereel</h3>
          </Link>

          {/* Menu Buttons  */}

          <div className="font-gilroy-medium lg:flex gap-3 xl:gap-5 ml-2 lg:ml-3 text-sm lg:text-md hidden">
            <div>
              <button
                className="flex gap-2 items-center cursor-pointer min-h-[44px] px-3 py-2"
                onClick={handleOpenMenu}
                aria-label="Solutions menu"
              >
                <p>Solutions</p>
                {isOpen ? <GoChevronUp aria-hidden="true" /> : <GoChevronDown aria-hidden="true" />}
              </button>
            </div>

            <div>
              <Link
                to="/about"
                className="flex gap-2 items-center cursor-pointer min-h-[44px] px-3 py-2"
                aria-label="About Us page"
              >
                <p>About Us</p>
              </Link>
            </div>

            <div>
              <Link
                to="/blog"
                className="flex gap-2 items-center cursor-pointer min-h-[44px] px-3 py-2"
                aria-label="Blog page"
              >
                <p>Blog</p>
              </Link>
            </div>

            <div>
              <a
                href="https://github.com/0xsereel/whitepaper/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center cursor-pointer min-h-[44px] px-3 py-2"
                aria-label="View Whitepaper on GitHub"
              >
                <p>Whitepaper</p>
              </a>
            </div>
          </div>
        </div>

        <div>
          {/* contact us button */}
          <Link
            to="/contact"
            className="w-[120px] lg:w-[150px] h-[40px] lg:h-[50px] border-2 border-[#3A3A45] rounded-full hidden lg:flex items-center justify-center hover:border-[#1CA36E] transition-colors duration-300 min-h-[44px] text-sm lg:text-base"
            aria-label="Contact Us"
          >
            <motion.span
              whileHover={{
                textShadow: "0 0 10px rgba(28, 163, 110, 0.8)",
              }}
              className="text-white hover:text-[#1CA36E] transition-colors duration-300"
            >
              Contact Us
            </motion.span>
          </Link>

          <button 
            onClick={() => setIsMobileMenuOpen(true)} 
            className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Open mobile menu"
          >
            <FaBars size={24} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div>
        <MenuOptions isOpen={isOpen} />
      </div>
    </header>
  );
};
