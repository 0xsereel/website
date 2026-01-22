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
    document.title = "Sereel - RWA Tokenization Platform | Institutional Tokenization Infrastructure";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Leading RWA tokenization platform and institutional tokenization infrastructure. Security token issuance, CMTA tokenization, enterprise digital asset custody, bond tokenization, and Canton Network tokenization solutions for institutional DeFi infrastructure.');
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'RWA tokenization platform, institutional tokenization infrastructure, security token issuance, CMTA tokenization, enterprise digital asset custody, bond tokenization platform, Regulation S token issuance, Regulation D token issuance, multi-chain tokenization, Canton Network tokenization, institutional DeFi infrastructure, real world asset tokenization, private credit tokenization, treasury tokenization, stablecoin issuance platform, tokenized securities platform');
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
