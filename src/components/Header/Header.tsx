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
    <header className="w-full fixed top-0 z-50 items-center justify-between flex flex-col p-4 bg-black bg-opacity-80 backdrop-blur-sm">
      {" "}
      <div className="w-full items-center justify-between flex">
        <div className="flex gap-4 items-center">
          {/* Logo */}

          <Link to="/" className="flex items-center gap-3">
            <img className="w-[50px] h-[50px]" src={logoPath} alt="" />

            <h3 className="text-2xl font-gilroy-bold">Sereel</h3>
          </Link>

          {/* Menu Buttons  */}

          <div className="font-gilroy-medium lg:flex gap-5 ml-3 text-md hidden">
            <div>
              <button
                className="flex gap-2 items-center cursor-pointer"
                onClick={handleOpenMenu}
              >
                <p>Solutions</p>
                {isOpen ? <GoChevronUp /> : <GoChevronDown />}
              </button>
            </div>

            <div>
              <Link
                to="/about"
                className="flex gap-2 items-center cursor-pointer"
              >
                <p>About Us</p>
                {/* <GoChevronDown /> */}
              </Link>
            </div>

            <div>
              <Link
                to="/blog"
                className="flex gap-2 items-center cursor-pointer"
              >
                <p>Blog</p>
                {/* <GoChevronDown /> */}
              </Link>
            </div>

            <div>
              <a
                href="https://github.com/0xsereel/whitepaper/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center cursor-pointer"
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
            className="w-[150px] h-[50px] border-2 border-[#3A3A45] rounded-full hidden lg:flex items-center justify-center hover:border-[#1CA36E] transition-colors duration-300"
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

          <div onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden">
            <FaBars size={30} />
          </div>
        </div>
      </div>
      <div>
        <MenuOptions isOpen={isOpen} />
      </div>
    </header>
  );
};
