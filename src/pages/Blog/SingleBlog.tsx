import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MobileMenu } from "../../components/Header/MobileMenu";
import { BlogPost } from "../../components/Blog/BlogPost";
import { GradientProvider } from "../../utils/gradient";

export const SingleBlog = () => {
  return (
    <div className="w-full">
      <GradientProvider>
        <Header />
        <MobileMenu />
        <BlogPost />

        <Footer />
      </GradientProvider>
    </div>
  );
};
