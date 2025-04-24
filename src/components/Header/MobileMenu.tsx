const logoPath = "/images/header/logo.png";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useGlobal } from "../../contexts/globals";

export const MobileMenu = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useGlobal();

 

  return (
    <div className={`w-full h-full fixed top-0 left-0 bg-black mobile-menu lg:hidden block z-20 p-4 overflow-y-auto ${isMobileMenuOpen ? "open" : "closed"}`}>
      <div className="w-full justify-between items-center flex-col overflow-y-auto">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}

          <div className="flex items-center gap-3">
            <img className="w-[50px] h-[50px]" src={logoPath} alt="" />

            <h3 className="text-2xl font-gilroy-bold">Seree</h3>
          </div>

          <div>
            {/* contact us button */}

            <div onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden">
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
                  <div className="w-full flex items-center gap-2">
                    <div className="w-[50px] h-[50px] border border-[#5F5F7138] rounded-full bg-white/5 flex items-center justify-center">
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-md">Noncustodial Wallet Service</p>
                    </div>
                  </div>

                  <div className="w-full flex items-center gap-2 mt-5">
                    <div className="w-[50px] h-[50px] border border-[#5F5F7138] rounded-full bg-white/5 flex items-center justify-center">
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-md">Tokenization</p>
                    </div>
                  </div>

                  <div className="w-full flex items-center gap-2 mt-5">
                    <div className="w-[50px] h-[50px] border border-[#5F5F7138] rounded-full bg-white/5 flex items-center justify-center">
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-md">Identity</p>
                    </div>
                  </div>

                  <div className="w-full flex items-center gap-2 mt-5">
                    <div className="w-[50px] h-[50px] border border-[#5F5F7138] rounded-full bg-white/5 flex items-center justify-center">
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-md">Private Blockchain</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>


          {/* ?== Resources */}

          <div className="w-full mt-5">
            <button
              className="flex gap-2 items-center cursor-pointer text-5xl"
            >
              <p className="">About</p>
            </button>
          </div>

          <div className="w-full mt-5">
            <button
              className="flex gap-2 items-center cursor-pointer text-5xl"
            >
              <p className="">Resources</p>
            </button>
          </div>

          <div className="w-full mt-5">
            <button
              className="flex gap-2 items-center cursor-pointer text-5xl"
            >
              <p className="">Blog</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
