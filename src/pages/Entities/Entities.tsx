import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MobileMenu } from "../../components/Header/MobileMenu";

export const Entities = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full h-[300px] bg-black flex items-center justify-center bg-gradient-to-bl from-[#1CA36E]/30 via-black to-[#1CA36E]/30">
        <h1 className="text-white text-4xl font-bold">As a global company, we have a growing number of entities.</h1>
      </div>

      <div className="w-full bg-black py-10 px-5">

        <div className="w-full mt-10 flex flex-col items-center gap-8">
          <div className="w-full max-w-[600px] border border-[#202026] rounded-xl p-6 bg-[#1A1A1A]">
            <h3 className="text-2xl font-bold text-white">
              Seree Technologies, Inc.
            </h3>
            <p className="mt-2 text-[#D5D5D5]">
              Incorporated in Delaware; responsible for fundraising and
              technology development.
            </p>
          </div>

          <div className="w-full max-w-[600px] border border-[#202026] rounded-xl p-6 bg-[#1A1A1A]">
            <h3 className="text-2xl font-bold text-white">
              Seree Technologies Rwanda
            </h3>
            <p className="mt-2 text-[#D5D5D5]">
              Incorporated in Rwanda; responsible for payments and client
              services in Rwanda.
            </p>
          </div>
        </div>
      </div>

      <MobileMenu />
      <Footer />
    </div>
  );
};
