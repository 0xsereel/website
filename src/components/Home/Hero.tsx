import { Button } from "../Button/Button";
import { Header } from "../Header/Header";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const glowingSereelLogoPath = "/images/Hero/glowing_Sereel_logo.svg"; 
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/contact");
  };

  return (
    <section className="w-full flex items-center  flex-col  lg:h-screen">
        <Header />
      <div className="w-[95%] mx-auto flex items-center justify-between mt-10 lg:flex-row flex-col-reverse">
        <div className="lg:w-[50%] w-full lg:mt-0">
          <h3 className="lg:text-7xl text-5xl">
            Unlock the <br /> future of finance
          </h3>

          <p className="text-xl mt-5">
            Institutional-grade blockchain solutions for fast settlements, DeFi
            access, and asset tokenization.
          </p>

          <div className="mt-5">
            <Button onClick={handleGetStarted}>Get Started</Button>
          </div>
        </div>

        <div className="lg:w-[50%] w-full lg:flex items-center justify-center overflow-hidden">
          <img src={glowingSereelLogoPath} className="lg:w-[120%] -ml-[10%] glowing-logo" alt="" />
        </div>
      </div>
    </section>
  );
};
