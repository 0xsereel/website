import { Button } from "../Button/Button";
import { Header } from "../Header/Header";

export const AboutHero = () => {
  const peopleImagePath = "/images/about/about_image.jpeg";

  return (
    <div className="w-full">
      <Header />
      <div className="w-full h-[400px] bg-black flex items-center  flex-col  bg-gradient-to-bl from-[#1CA36E]/30 via-black to-[#1CA36E]/30    ">
        <div className=" flex text-center flex-col mt-20 text-5xl font-bold gap-5">
            <h3>We Are on a Mission to Maximize</h3>
            <h3>The Efficiency of the</h3>
            <h3>Global Financial Ecosystem</h3>
        </div>
      </div>
      <div className="w-full bg-black py-20 p-5">
        <div className="w-full flex items-center justify-center">
          <img
            src={peopleImagePath}
            className="w-[800px] rounded-xl grayscale"
            alt=""
          />
        </div>

        <div className="w-full flex items-center justify-center mt-20">
          <div className="w-[95%] mx-auto">
            {/* Title */}

            <div className="w-full h-[400px] bg-black flex items-center justify-center flex-col bg-gradient-to-br from-[#1CA36E]/30 via-black to-[#1CA36E]/30">
              <div className="w-[95%] text-center">
                <p className="text-[#D5D5D5]">
                  {" "}
                    <a
                    href="https://www.blackrock.com/corporate/investor-relations/larry-fink-annual-chairmans-letter#unlocking-private-markets"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1CA36E] underline"
                    >
                    <strong>25 trillion dollars</strong>
                    </a> sit idly in bank
                  accounts - while cross border payments take days and cost{" "}
                  <a
                    href="https://papss.com/media/in-the-media/new-africa-payment-system-to-save-5-billion-in-fees-lift-trade-in-bloomberg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1CA36E] underline"
                  >
                    billions
                  </a>
                  . The financial world is not interoperable with the blockchain
                  world. These inefficiencies drive us to build.
                </p>
                <p className="text-[#D5D5D5] mt-4">
                  Seree is the first open tokenization service in Rwanda,
                  binding traditional and{" "}
                  <a
                  href="https://www.investopedia.com/decentralized-finance-defi-5113835"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1CA36E] underline"
                  >
                  decentralized finance
                  </a>
                  . Secure enough for financial institutions, scalable
                  enough for communities and entrepreneurs. With a focus on
                  speed and safety, our Rust-based blockchain architecture gives
                  your capital instant liquidity, programmable yield, and
                  bulletproof security.
                </p>
                <p className="text-[#D5D5D5] mt-4">
                  Founded by blockchain engineers and financiers,
                  we're pioneers in turning idle capital into programmable,
                  yield-bearing assets that settle in minutes - not days. From
                  Rwanda to the world, we're redefining the physics of money.{" "}
                  <strong>Join us.</strong>
                </p>
              </div>
            </div>

            <div className="w-full flex items-center justify-center flex-col">
              <h3 className="lg:text-5xl text-3xl">Our Solutions</h3>
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
                    Your assets are protected with cutting-edge ERC-4337 Smart
                    Accounts with Multi-Factor Authentication (Email, Passkeys).
                    Secure, self-custodied, and enterprise-ready.
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
                    zkTLS-Powered Tokenization: Convert fiat (e.g., Rwandan
                    Francs → sFRW) and other assets into liquid, tradable
                    tokens.
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
        </div>

        <div className="w-full flex items-center justify-center mt-20">
          <div className="w-[95%] mx-auto">
            {/* Title */}

            <div className="w-full flex items-center justify-center flex-col">
              <h3 className="lg:text-5xl text-3xl">Our Security measures</h3>
              <p className="mt-2 text-center">Security That Powers Trust</p>
            </div>

            {/* Cards */}

            <div className="flex items-center justify-center gap-4 mt-10 lg:flex-row flex-col">
              <div className="lg:w-[500px] w-full h-[420px] border border-[#202026] rounded-xl p-4">
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
                    ERC-4337 Smart Accounts
                  </h3>
                  <p className="mt-4 text-[#D5D5D5]">
                    Leverages ERC-4337 Account Abstraction to enable
                    Multi-Factor Authentication (MFA) for on-chain accounts —
                    enhancing user control and protecting against unauthorized
                    access.
                  </p>
                </div>

                <div className="mt-3">
                  <h3 className="font-gilroy-medium text-xl">Key Benefits</h3>

                  <ul className="list-disc list-inside">
                    <li>Biometric & device-based authentication</li>

                    <li>Recovery mechanisms without seed phrases</li>
                    <li>Gasless and batched transactions</li>
                  </ul>
                </div>

                <div className="w-full mt-3">
                  <Button
                    onClick={() =>
                      window.open("https://www.erc4337.io/", "_blank")
                    }
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              <div className="lg:w-[500px] w-full h-[420px] border border-[#202026] rounded-xl p-4">
                <div className="w-full">
                  <div className="w-[64px] h-[64px] border border-[#5F5F7138] rounded-full bg-white/5 flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12.5L11.5 15L16 10.5"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mt-3">
                  <h3 className="font-gilroy-medium text-xl">
                    ISO 27001 Compliance
                  </h3>
                  <p className="mt-4 text-[#D5D5D5]">
                    We are actively working toward ISO 27001 compliance,
                    ensuring that our information security management systems
                    meet the highest global standards. Security is at the core
                    of our product development process.
                  </p>
                </div>

                <div className="mt-3">
                  <h3 className="font-gilroy-medium text-xl">
                    Key Initiatives
                  </h3>

                  <ul className="list-disc list-inside">
                    <li>
                      Comprehensive risk assessment and mitigation strategies
                    </li>
                    <li>Regular security audits and continuous monitoring</li>
                    <li>
                      Employee training on information security best practices
                    </li>
                  </ul>
                </div>

                <div className="w-full mt-3">
                  <Button
                    onClick={() =>
                      window.open(
                        "https://www.iso.org/standard/27001",
                        "_blank"
                      )
                    }
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
