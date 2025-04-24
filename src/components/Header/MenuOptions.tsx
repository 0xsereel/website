export const MenuOptions = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="w-full h-[300px] absolute top-0 left-0 mt-20 z-20 lg:block hidden">
      <div
        className={`w-[700px] h-[250px] border border-[#202026] bg-black ml-40 rounded-b-xl flex  items-center justify-between p-5 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-[45%] h-full">
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
        </div>

        <div className="w-[45%] h-full">
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
              <p className="text-md">Private Blockchain</p>
            </div>
          </div>

          {/* <div className="w-full flex items-center gap-2 mt-5">
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
          </div> */}

          {/* <div className="w-full flex items-center gap-2 mt-5">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};
