const logoPath = "/images/header/logo.png";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useGlobal } from "../../contexts/globals";
import { Link } from "react-router-dom";

export const MobileMenu = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useGlobal();

  const menuItems = [
    { label: "Noncustodial Wallet Service", link: "/solutions/wallet" },
    { label: "Tokenization", link: "/solutions/tokenization" },
    { label: "Identity", link: "/solutions/identity" },
  ];

  const getIcon = (index: number) => {
    switch (index) {
      case 0: // Shield icon
        return (
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22.8C12 22.8 20 18.8 20 12.8V5.80005L12 2.80005L4 5.80005V12.8C4 18.8 12 22.8 12 22.8Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 1: // Lightning bolt icon
        return (
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 2.80005L4 12.8H11L10 22.8L19 12.8H12L13 2.80005Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 2: // User icon
        return (
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 12.8C14.2091 12.8 16 11.0092 16 8.80005C16 6.59091 14.2091 4.80005 12 4.80005C9.79086 4.80005 8 6.59091 8 8.80005C8 11.0092 9.79086 12.8 12 12.8Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 20.8C4 17.6 7.6 14.8 12 14.8C16.4 14.8 20 17.6 20 20.8"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`w-full h-full fixed top-0 left-0 bg-black mobile-menu lg:hidden block z-20 p-4 overflow-y-auto ${
        isMobileMenuOpen ? "open" : "closed"
      }`}
    >
      <div className="w-full justify-between items-center flex-col overflow-y-auto">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}

          <Link to="/" className="flex items-center gap-3">
            <img className="w-[50px] h-[50px]" src={logoPath} alt="" />

            <h3 className="text-2xl font-gilroy-bold">Sereel</h3>
          </Link>

          <div>
            {/* contact us button */}

            <div
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden"
            >
              <IoMdClose size={30} />
            </div>
          </div>
        </div>

        <div className="w-full mt-10">
          <div>
            <button
              className="flex gap-2 items-center cursor-pointer text-5xl"
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            >
              <p className="">Solutions</p>
              {isResourcesOpen ? <GoChevronUp /> : <GoChevronDown />}
            </button>
          </div>

          {/* Resources */}

          <div className="w-full mt-5">
            <div className="w-full ">
              <div
                className={`w-full bg-black rounded-b-xl flex-col items-center justify-between ${
                  isResourcesOpen ? "flex" : "hidden"
                }`}
              >
                <div className="w-full">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="w-full flex items-center gap-2 mt-5 first:mt-0"
                    >
                      <div className="w-[50px] h-[50px] border border-[#5F5F7138] rounded-full bg-white/5 flex items-center justify-center">
                        {getIcon(index)}
                      </div>
                      <div>
                        <p className="text-md">{item.label}</p>
                      </div>
                    </Link>
                  ))}

                  
                </div>
              </div>
            </div>
          </div>

          {/* ?== Resources */}

          <div className="w-full mt-5">
            <Link
              to="/about"
              className="flex gap-2 items-center cursor-pointer text-5xl"
            >
              <p className="">About</p>
            </Link>
          </div>

          <div className="w-full mt-5">
            <Link
              to="/contact"
              className="flex gap-2 items-center cursor-pointer text-5xl"
            >
              <p className="">Contact Us</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
