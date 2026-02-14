import { BlogPageContent } from "../../components/Blog/BlogPageContent";
import { V4Layout } from "../../components/V4/V4Layout";

export const Blog = () => {
  return (
    <V4Layout excludeNewsletter={true} excludeCTA={true}>
      <BlogPageContent />
    </V4Layout>
  );
};
