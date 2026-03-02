import { Link } from "react-router-dom";

export const Footer = () => {
  const logoPath = "/images/Hero/glowing_seree_logo.svg";

  return (
    <footer className="w-full flex items-center justify-center py-12 sm:py-16 lg:py-20 safe-area-padding">
      <div className="lg:w-[90%] w-full mx-auto">
        <div className="w-full flex justify-between items-start lg:flex-row flex-col gap-8 lg:gap-0">
          <div className="flex flex-col items-start gap-3">
            <Link to="/" className="flex items-center gap-3 min-h-[44px]">
              <img className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" src={logoPath} alt="Sereel Logo" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-gilroy-bold">Sereel</h3>
            </Link>
            <p className="text-[#1CA36E] text-sm sm:text-base font-gilroy-medium italic mt-2">
              Institutional-Grade Infrastructure. Enterprise Standards.
            </p>
          </div>

          <div className="flex items-start gap-8 sm:gap-10 lg:gap-12 xl:gap-16 lg:flex-row flex-col w-full lg:w-auto justify-center lg:justify-start">
            <div className="text-center lg:text-left">
                <h3 className="font-gilroy-bold my-3 sm:my-4 lg:my-5 text-base sm:text-lg">About Us</h3>
                <div className="flex flex-col space-y-2 sm:space-y-3">
                  <Link
                    to="/about"
                    className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-colors text-sm sm:text-base"
                  >
                    About
                  </Link>
                  <Link to="/entities" className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-colors text-sm sm:text-base">Entities</Link>
                  <Link to="/partnerships" className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-colors text-sm sm:text-base">Partnerships</Link>
                </div>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="font-gilroy-bold my-3 sm:my-4 lg:my-5 text-base sm:text-lg">Resources</h3>
              <div className="flex flex-col space-y-2 sm:space-y-3">
                <Link to="/blog" className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-colors text-sm sm:text-base">Blog</Link>
                <Link to="/repositories" className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-colors text-sm sm:text-base">Research Repository</Link>
                <Link to="/terms" className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-colors text-sm sm:text-base">Terms of Use</Link>
                <Link to="/privacy-policy" className="min-h-[44px] flex items-center justify-center lg:justify-start hover:text-[#1CA36E] transition-colors text-sm sm:text-base">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#333]">
          <p className="text-center text-[#D5D5D5] text-xs sm:text-sm lg:text-base">
            Sereel 2026, All Rights Reserved. Sereel Technologies, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};
