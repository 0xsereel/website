import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MobileMenu } from "../../components/Header/MobileMenu";

export const Partnerships = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full h-[300px] bg-black flex items-center justify-center bg-gradient-to-bl from-[#1CA36E]/30 via-black to-[#1CA36E]/30">
        <h1 className="text-white text-4xl font-bold">Our Partnerships Drive Innovation and Interoperability</h1>
      </div>

      <div className="w-full bg-black py-10 px-5">
        <div className="w-full mt-10 flex flex-col items-center gap-8">
          <div className="w-full max-w-[800px] flex flex-col lg:flex-row items-center gap-6 border border-[#202026] rounded-xl p-6 bg-[#1A1A1A]">
            <img
              src="images/partnerships/via.png"
              alt="VIA Labs"
              className="w-full lg:w-[200px] h-[200px] object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white">VIA Labs</h3>
              <p className="mt-2 text-[#D5D5D5]">
                VIA Labs is a platform focused on connecting blockchain networks to create a seamless, interoperable environment.
              </p>
            </div>
          </div>

          <div className="w-full max-w-[800px] flex flex-col lg:flex-row items-center gap-6 border border-[#202026] rounded-xl p-6 bg-[#1A1A1A]">
            <img
              src="images/partnerships/primus.png"
              alt="Primus Labs"
              className="w-full lg:w-[200px] h-[200px] object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white">Primus Labs</h3>
              <p className="mt-2 text-[#D5D5D5]">
                Primus Labs is a zkTLS-based data & compute verification layer for blockchains. We utilize their technology to verify real world assets.
              </p>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu />
      <Footer />
    </div>
  );
};