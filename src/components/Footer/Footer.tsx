export const Footer = () => {
  const logoPath = "/images/header/logo.png";

  return (
    <footer className="w-full flex items-center justify-center py-20">
      <div className="w-[90%] mx-auto">
        <div className="w-full flex justify-between items-start">
          <div className="flex items-center gap-3">
            <img className="w-[50px] h-[50px]" src={logoPath} alt="" />

            <h3 className="text-2xl font-gilroy-bold">Seree</h3>
          </div>

          <div className="flex items-start gap-10">
            <div>
              <h3 className="font-gilroy-bold my-5">Solutions</h3>
              <p className="my-3">Wallet</p>
              <p className="my-3">Tokenization</p>
              <p className="my-3">Identity</p>
              <p className="my-3">Private Blockchains</p>
            </div>

            <div>
              <h3 className="font-gilroy-bold my-5">About Us</h3>
              <p className="my-3">About</p>
              <p className="my-3">Entities</p>
              <p className="my-3">Partnerships</p>
            </div>

            <div>
              <h3 className="font-gilroy-bold my-5">Resources</h3>
              <p className="my-3">Blog</p>
              <p className="my-3">Case Studies</p>
              <p className="my-3">White Paper</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-10">
          <p className="text-center text-[#D5D5D5]">
            Seree 2025, All Rights Reserved. Seree Technologies, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};
