export const CoreProduct = () => {
  return (
    <section className="w-full flex items-center justify-center py-20">
      <div className="w-[95%] mx-auto">
        {/* Title */}

        <div className="w-full flex items-center justify-center flex-col">
          <h3 className="lg:text-5xl text-3xl">Our Core Product</h3>
          <p className="mt-2 text-center">
            The solutions we offer are seamless, secure and accessible
          </p>
        </div>

        {/* Cards */}

        <div className="flex items-center justify-center gap-4 mt-10 lg:flex-row flex-col">
          <div className="lg:w-[400px] w-full h-[290px] border border-[#202026] rounded-xl p-4">
            <div className="w-full">
              <div className="w-[64px] h-[64px] border border-[#5F5F7138] rounded-full bg-white/5 flex items-center justify-center">
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
            </div>

            <div className="mt-3">
              <h3 className="font-gilroy-medium text-xl">
                Noncustodial Wallet Service
              </h3>
              <p className="mt-4 text-[#D5D5D5]">
                Your assets are protected with Smart Accounts with Multi-Factor
                Authentication. Secure, self-custodied, and enterprise-ready.
              </p>
            </div>
          </div>

          <div className="lg:w-[400px] w-full h-[290px] border border-[#202026] rounded-xl p-4">
            <div className="w-full">
              <div className="w-[64px] h-[64px] border border-[#5F5F7138] rounded-full bg-white/5 flex items-center justify-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6666 2.80005L3.66663 14.8H12.6666L11.6666 22.8L21.6666 10.8H12.6666L13.6666 2.80005Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-3">
              <h3 className="font-gilroy-medium text-xl">
                Asset Tokenization Service
              </h3>
              <p className="mt-4 text-[#D5D5D5]">
                Convert fiat (e.g., fiat currency → stablecoins), bonds
                (government or privately issued) and other assets into liquid,
                tradable tokens.
              </p>
            </div>
          </div>

          <div className="lg:w-[400px] w-full h-[290px] border border-[#202026] rounded-xl p-4">
            <div className="w-full">
              <div className="w-[64px] h-[64px] border border-[#5F5F7138] rounded-full bg-white/5 flex items-center justify-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.33337 14.8H10.3334V20.8"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.3334 10.8H14.3334V4.80005"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.3334 10.8L21.3334 3.80005"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.33337 21.8L10.3334 14.8"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-3">
              <h3 className="font-gilroy-medium text-xl">
                Digital Identity Solutions
              </h3>
              <p className="mt-4 text-[#D5D5D5]">
                Zero-Knowledge Proofs & Fully Homomorphic Encryption for
                private, on-chain identity management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
