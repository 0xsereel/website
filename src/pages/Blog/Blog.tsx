import { Header } from "../../components/Header/Header";
import { BlogPageContent } from "../../components/Blog/BlogPageContent";
import { MobileMenu } from "../../components/Header/MobileMenu";
import { GradientProvider } from "../../utils/gradient";

export const Blog = () => {
  return (
    <GradientProvider>
      <div className="w-full min-h-screen text-white" style={{ background: '#010201' }}>
        <Header />
        <BlogPageContent />
        <MobileMenu />
      </div>
    </GradientProvider>
  );
};