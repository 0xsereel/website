import { Footer } from "../../components/Footer/Footer";
import { MobileMenu } from "../../components/Header/MobileMenu";
import { CoreProduct } from "../../components/Home/CoreProduct";
import { FAQ } from "../../components/Home/FAQ";
import { Hero } from "../../components/Home/Hero";
import { IGS } from "../../components/Home/IGS";
import { NewsLetter } from "../../components/Home/NewsLetter";
import RecentArticles from "../../components/Home/RecentArticles/index";
import { GradientProvider } from "../../utils/gradient";

export const Home = () => {
  return (
    <GradientProvider>
      <div className="w-full">
        <MobileMenu />
        <Hero />
        <CoreProduct />
        <IGS />
        <RecentArticles />
        <FAQ />
        <NewsLetter />
        <Footer />
      </div>
    </GradientProvider>
  );
};