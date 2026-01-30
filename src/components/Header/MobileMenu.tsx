const logoPath = "/images/header/logo.png";
import { IoMdClose } from "react-icons/io";
import { useGlobal } from "../../contexts/globals";
import { Link } from "react-router-dom";

export const MobileMenu = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useGlobal();

  return (
    <div
      className={`w-full h-full fixed top-0 left-0 bg-black mobile-menu lg:hidden block z-20 p-4 overflow-y-auto ${
        isMobileMenuOpen ? "open" : "closed"
      }`}
    >
      <div className="w-full justify-between items-center flex-col overflow-y-auto">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}

          <Link to="/" className="flex items-center gap-3 min-h-[44px]">
            <img className="w-[50px] h-[50px]" src={logoPath} alt="Sereel Logo" />

            <h3 className="text-2xl font-gilroy-bold">Sereel</h3>
          </Link>

          <div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close mobile menu"
            >
              <IoMdClose size={30} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="w-full mt-10">
          <div className="w-full mt-5">
            <Link
              to="/about"
              className="flex gap-2 items-center cursor-pointer text-5xl min-h-[44px] py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <p className="">About</p>
            </Link>
          </div>

          <div className="w-full mt-5">
            <Link
              to="/blog"
              className="flex gap-2 items-center cursor-pointer text-5xl min-h-[44px] py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <p className="">Blog</p>
            </Link>
          </div>

          <div className="w-full mt-5">
            <Link
              to="/contact"
              className="flex gap-2 items-center cursor-pointer text-5xl min-h-[44px] py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <p className="">Contact Us</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
