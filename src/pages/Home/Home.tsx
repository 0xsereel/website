import { CoreProduct } from "../../components/Home/CoreProduct";
import { Hero } from "../../components/Home/Hero";
import { IGS } from "../../components/Home/IGS";
import { RecentArticles } from "../../components/Home/RecentArticles";

export const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <CoreProduct />
      <IGS />
      <RecentArticles />
    </div>
  );
};
