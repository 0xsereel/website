import { Link } from "react-router-dom";

export const Footer = () => {
  const logoPath = "/images/Hero/glowing_seree_logo.svg";

  return (
    <footer className="w-full flex items-center justify-center py-20 px-5">
      <div className="lg:w-[90%] w-full mx-auto">
        <div className="w-full flex justify-between items-start lg:flex-row flex-col">
          <Link to="/" className="flex items-center gap-3">
            <img className="w-[200px] h-[200px]" src={logoPath} alt="" />

            <h3 className="text-2xl font-gilroy-bold">Sereel</h3>
          </Link>

          <div className="flex items-start gap-10">
            <div>
              <h3 className="font-gilroy-bold my-5">Solutions</h3>
              <Link to="/solutions/wallet" className="my-3">Wallet</Link> <br />
              <Link to="/solutions/tokenization" className="my-3">Tokenization</Link> <br />
              <Link to="/solutions/defi" className="my-3">DeFi</Link>
            </div>

            <div>
                <h3 className="font-gilroy-bold my-5">About Us</h3>
                <Link
                  to="/about"
                  className="my-3 cursor-pointer"
                >
                  About
                </Link> <br />
              <Link to="/entities" className="my-3">Entities</Link> <br />
              <Link to="/partnerships" className="my-10">Partnerships</Link>
            </div>

            <div>
              <h3 className="font-gilroy-bold my-5">Resources</h3>
              <Link to="/blog" className="my-3">Blog</Link> <br />
              <Link to="/repositories" className="my-3">Research Repository</Link>
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
