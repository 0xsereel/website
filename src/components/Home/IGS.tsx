// Instititutional Grade Software (section)

export const IGS = () => {
  const securityIconPath = "/images/solutions/security.png";
  const financialPracticeIconPath = "/images/solutions/financial-practices.png";
  const iso20022IconPath = "/images/solutions/ISO20022.png";

  return (
    <section className="w-full flex items-center justify-center pb-10 pt-20">
      <div className="w-[90%] mx-auto">
        {/* Title */}

        <div className="lg:w-[95%] w-full flex  lg:items-center justify-between mx-auto lg:flex-row flex-col">
          <div className="flex  flex-col lg:w-fit w-full">
            <h3 className="lg:text-5xl text-3xl">Institutional-Grade Software</h3>
            <p className="mt-2">
              The solutions our product offers are seamless, secure and
              accessible .
            </p>
          </div>

          <div className="lg:mt-0 mt-10">
            {/* contact us button */}

            <button className="w-[150px] h-[50px] border-2 border-[#3A3A45] rounded-full">
              Contact Us
            </button>
          </div>
        </div>

        <div className="lg:w-[95%] w-full lg:h-[490px] h-fit border border-[#202026] mt-10 mx-auto rounded-xl flex lg:flex-row flex-col">
          {/* Security */}

          <div className="lg:w-[33%] w-full rounded-tl-xl rounded-bl-xl h-full lg:border-r border-r-[#202026] p-4 bg-black bg-gradient-to-br from-[#1CA36E]/20  to-black">
            <div className="w-full">
              <div className="w-[64px] h-[64px] border border-[#5F5F7138] rounded-full bg-white/5 flex items-center justify-center">
                <h3>1</h3>
              </div>
            </div>

            <div className="mt-5 w-full flex items-center justify-center">
              <img src={securityIconPath} className="w-[150px]" alt="" />
            </div>

            <div className="mt-[50px]">
              <h3 className="font-gilroy-medium text-xl">Security</h3>
              <p className="mt-4 text-[#969696]">
                Military-Grade Custody: Multi-sig, MPC, and audited smart
                contracts. Your assets are protected at every layer
              </p>
            </div>
          </div>

          {/* Fiancial Practices */}

          <div className="lg:w-[33%] w-full h-full lg:border-r border-r-[#202026] p-4 bg-black bg-gradient-to-br from-[#1CA36E]/20  to-black">
            <div className="w-full">
              <div className="w-[64px] h-[64px] border border-[#5F5F7138] rounded-full bg-white/5 flex items-center justify-center">
                <h3>2</h3>
              </div>
            </div>

            <div className="mt-5 w-full flex items-center justify-center">
              <img
                src={financialPracticeIconPath}
                className="w-[200px]"
                alt=""
              />
            </div>

            <div className="mt-[50px]">
              <h3 className="font-gilroy-medium text-xl">
                Seree’s Financial Practices{" "}
              </h3>
              <p className="mt-4 text-[#969696]">
                Designed for Compliance: Transparent ledgers, audit trails, and
                compliance-first architecture.
              </p>
            </div>
          </div>

          <div className="lg:w-[33%] w-full h-full  p-4 bg-black bg-gradient-to-br from-[#1CA36E]/20  to-black">
            <div className="w-full">
              <div className="w-[64px] h-[64px] border border-[#5F5F7138] rounded-full bg-white/5 flex items-center justify-center">
                <h3>3</h3>
              </div>
            </div>

            <div className="mt-5 w-full flex items-center justify-center">
              <img src={iso20022IconPath} className="w-[150px]" alt="" />
            </div>

            <div className="mt-[50px]">
              <h3 className="font-gilroy-medium text-xl">
                ISO20022 Compliance
              </h3>
              <p className="mt-4 text-[#969696]">
                Future-Proof Messaging: Stable coin transfers and wallet actions
                adhere to global banking standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
