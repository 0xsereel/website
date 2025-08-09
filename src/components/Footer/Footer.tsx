import { Link } from "react-router-dom";

export const Footer = () => {
  const logoPath = "/images/Hero/glowing_seree_logo.svg";

  return (
    <footer className="w-full flex items-center justify-center py-20 px-5">
      <div className="lg:w-[90%] w-full mx-auto">
        <div className="w-full flex justify-between items-start lg:flex-row flex-col">
          <Link to="/" className="flex items-center gap-3 min-h-[44px]">
            <img className="w-[200px] h-[200px]" src={logoPath} alt="Sereel Logo" />

            <h3 className="text-2xl font-gilroy-bold">Sereel</h3>
          </Link>

          <div className="flex items-start gap-10 lg:flex-row flex-col">
            <div className="text-center lg:text-left">
              <h3 className="font-gilroy-bold my-5">Solutions</h3>
              <div className="flex flex-col space-y-3">
                <Link to="/solutions/wallet" className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-colors">Wallet</Link>
                <Link to="/solutions/tokenization" className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-colors">Tokenization</Link>
                <Link to="/solutions/defi" className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-colors">DeFi</Link>
              </div>
            </div>

            <div className="text-center lg:text-left">
                <h3 className="font-gilroy-bold my-5">About Us</h3>
                <div className="flex flex-col space-y-3">
                  <Link
                    to="/about"
                    className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-colors"
                  >
                    About
                  </Link>
                  <Link to="/entities" className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-colors">Entities</Link>
                  <Link to="/partnerships" className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-colors">Partnerships</Link>
                </div>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="font-gilroy-bold my-5">Resources</h3>
              <div className="flex flex-col space-y-3">
                <Link to="/blog" className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-colors">Blog</Link>
                <Link to="/repositories" className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-colors">Research Repository</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-10">
          <p className="text-center text-[#D5D5D5] lg:text-md text-sm">
            Sereel 2025, All Rights Reserved. Sereel Technologies, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};
