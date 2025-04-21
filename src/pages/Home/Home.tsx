import { CoreProduct } from "../../components/Home/CoreProduct";
import { FAQ } from "../../components/Home/FAQ";
import { Hero } from "../../components/Home/Hero";
import { IGS } from "../../components/Home/IGS";
import { NewsLetter } from "../../components/Home/NewsLetter";
import { RecentArticles } from "../../components/Home/RecentArticles";

export const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <CoreProduct />
      <IGS />
      <RecentArticles />
      <FAQ />
      <NewsLetter />
    </div>
  );
};
