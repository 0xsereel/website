import { Button } from "../Button/Button";
import { Header } from "../Header/Header";

export const Hero = () => {
  const glowingSereeLogoPath = "/images/Hero/glowing-seree-logo.png";

  return (
    <section className="w-full flex items-center  flex-col h-screen">
        <Header />
      <div className="w-[95%] mx-auto flex items-center justify-between mt-10">
        <div className="w-[50%]">
          <h3 className="text-7xl">
            Unlock the <br /> future of finance
          </h3>

          <p className="text-xl mt-5">
            Institutional-grade blockchain solutions for fast settlements, DeFi
            access, and asset tokenization built for financial institutions.
          </p>

          <div className="mt-5">
            <Button onClick={() => {}}>Get Started</Button>
          </div>
        </div>

        <div className="w-[50%]">
          <img src={glowingSereeLogoPath} alt="" />
        </div>
      </div>
    </section>
  );
};
