import AboutHero from "../../components/About/AboutHero";
import { AboutIntro } from "../../components/About/AboutIntro";
import { ClientSegments } from "../../components/About/ClientSegments";
import { AdvisoryServices } from "../../components/About/AdvisoryServices";
import { Footer } from "../../components/Footer/Footer";
import { MobileMenu } from "../../components/Header/MobileMenu";

export const About = () => {
  return (
    <div className="w-full">
      <AboutHero />
      <MobileMenu />
      <AboutIntro />
      <ClientSegments />
      <AdvisoryServices />
      <Footer />
    </div>
  );
};
