import { BlogPost } from "../../components/Blog/BlogPost";
import { V4Layout } from "../../components/V4/V4Layout";

export const SingleBlog = () => {
  return (
    <V4Layout excludeNewsletter={true} excludeCTA={true}>
      <BlogPost />
    </V4Layout>
  );
};
