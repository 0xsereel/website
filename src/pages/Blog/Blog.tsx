import { Header } from "../../components/Header/Header";
import { MobileMenu } from "../../components/Header/MobileMenu";
import { Footer } from "../../components/Footer/Footer";
import { BlogPageContent } from "../../components/Blog/BlogPageContent";

export const Blog = () => {
  return (
    <div className="w-full">
      <Header />
      <MobileMenu />
      <BlogPageContent />
      <Footer />
    </div>
  );
};
