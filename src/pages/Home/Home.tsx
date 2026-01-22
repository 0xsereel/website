import { useEffect } from "react";
import { Footer } from "../../components/Footer/Footer";
import { MobileMenu } from "../../components/Header/MobileMenu";
import AboutIntro from "../../components/About/AboutIntro";
import { CoreProduct as PlatformPillars } from "../../components/Home/CoreProduct";
import { SupportedNetworks } from "../../components/Home/SupportedNetworks";
import { ClientSegments } from "../../components/Home/ClientSegments";
import { AdvisoryServices } from "../../components/Home/AdvisoryServices";
import { WhySereel } from "../../components/Home/WhySereel";
import { TrustedBy } from "../../components/Home/TrustedBy";
import { FAQ } from "../../components/Home/FAQ";
import { FinalCTA } from "../../components/Home/FinalCTA";
import { Hero } from "../../components/Home/Hero";
import { NewsLetter } from "../../components/Home/NewsLetter";
import { GradientProvider } from "../../utils/gradient";

export const Home = () => {
  useEffect(() => {
    document.title = "Sereel - Institutional DeFi.";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Sereel provides institutional-grade tokenization infrastructure for asset managers, banks, exchanges, and family offices. CMTA-compliant. Multi-chain. Production-ready.');
  }, []);

  return (
    <GradientProvider>
      <div className="w-full">
        <MobileMenu />
        <Hero />
        <AboutIntro />
        <PlatformPillars />
        <SupportedNetworks />
        <ClientSegments />
        <AdvisoryServices />
        <WhySereel />
        <TrustedBy />
        <FAQ />
        <FinalCTA />
        <NewsLetter />
        <Footer />
      </div>
    </GradientProvider>
  );
};
