import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import { MenuOptions } from "./MenuOptions";
import { useState } from "react";
import { useGlobal } from "../../contexts/globals";

export const Header = () => {
  const logoPath = "/images/header/logo.png";

  const { setIsMobileMenuOpen } = useGlobal();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full items-center justify-between flex flex-col p-4">
      <div className="w-full items-center justify-between flex">
        <div className="flex gap-4 items-center">
          {/* Logo */}

          <div className="flex items-center gap-3">
            <img className="w-[50px] h-[50px]" src={logoPath} alt="" />

            <h3 className="text-2xl font-gilroy-bold">Seree</h3>
          </div>

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
              <button className="flex gap-2 items-center cursor-pointer">
                <p>About Us</p>
                {/* <GoChevronDown /> */}
              </button>
            </div>

            <div>
              <button className="flex gap-2 items-center cursor-pointer">
                <p>Resources</p>
                {/* <GoChevronDown /> */}
              </button>
            </div>
          </div>
        </div>

        <div>
          {/* contact us button */}

          <button className="w-[150px] h-[50px] border-2 border-[#3A3A45] rounded-full hidden lg:block">
            Contact Us
          </button>

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
