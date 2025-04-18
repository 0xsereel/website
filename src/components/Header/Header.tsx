import React from "react";
import { GoChevronDown } from "react-icons/go";

export const Header = () => {
  const logoPath = "/images/header/logo.png";
  return (
    <div className="w-full items-center justify-between flex p-4">
      <div className="flex gap-4 items-center">
        {/* Logo */}

        <div className="flex items-center gap-3">
          <img className="w-[50px] h-[50px]" src={logoPath} alt="" />

          <h3 className="text-2xl font-gilroy-bold">Seree</h3>
        </div>

        {/* Menu Buttons  */}

        <div className="font-gilroy-medium flex gap-5 ml-3 text-md">
          <div>
            <button className="flex gap-2 items-center cursor-pointer">
              <p>Solutions</p>
              <GoChevronDown />
            </button>
          </div>

          <div>
            <button className="flex gap-2 items-center cursor-pointer">
              <p>About Us</p>
              <GoChevronDown />
            </button>
          </div>

          <div>
            <button className="flex gap-2 items-center cursor-pointer">
              <p>Resources</p>
              <GoChevronDown />
            </button>
          </div>
        </div>
      </div>

      <div>{/* contact us button */}

        <button className="w-[150px] h-[50px] border-2 border-[#3A3A45] rounded-full">Contact Us</button>
      </div>
    </div>
  );
};
