import { Footer } from "../../components/Footer/Footer";
import { MobileMenu } from "../../components/Header/MobileMenu";
import { CoreProduct } from "../../components/Home/CoreProduct";
import { FAQ } from "../../components/Home/FAQ";
import { Hero } from "../../components/Home/Hero";
import { TrustedBy } from "../../components/Home/TrustedBy";
import { SupportedChains } from "../../components/Home/SupportedChains";
import { IGS } from "../../components/Home/IGS";
import { NewsLetter } from "../../components/Home/NewsLetter";
import { ReadyToTokenize } from "../../components/Home/ReadyToTokenize";
import RecentArticles from "../../components/Home/RecentArticles/index";
import { GradientProvider } from "../../utils/gradient";

export const Home = () => {
  return (
    <GradientProvider>
      <div className="w-full">
        <MobileMenu />
        <Hero />
        <TrustedBy/>
        <CoreProduct />
        <SupportedChains/>
        <IGS />
        <RecentArticles />
        <FAQ />
        <ReadyToTokenize />
        <NewsLetter />
        <Footer />
      </div>
    </GradientProvider>
  );
};