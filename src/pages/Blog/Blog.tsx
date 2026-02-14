import { BlogPageContent } from "../../components/Blog/BlogPageContent";
import { V4Layout } from "../../components/V4/V4Layout";
import { SEO } from "../../components/SEO/SEO";
import { generateBlogListingSchema, SITE_CONFIG, type BlogArticleData } from "../../utils/seo";
import blogs from "../../Blog Data/Blogs.json";

const typedBlogs: BlogArticleData[] = blogs as BlogArticleData[];

export const Blog = () => {
  const blogListingSchema = generateBlogListingSchema(typedBlogs);
  
  const blogDescription = "Explore insights on institutional blockchain adoption, RWA tokenization, DeFi innovation, and digital asset infrastructure. Stay updated with the latest trends in institutional DeFi.";
  
  return (
    <>
      <SEO
        title="Blog - Institutional Blockchain Insights"
        description={blogDescription}
        keywords={[
          'blockchain blog',
          'institutional DeFi insights',
          'RWA tokenization news',
          'digital asset articles',
          'tokenization insights',
          'blockchain innovation',
          'institutional blockchain',
        ]}
        canonical="/blog"
        openGraph={{
          type: 'website',
          title: 'Blog - Institutional Blockchain Insights',
          description: blogDescription,
          url: `${SITE_CONFIG.url}/blog`,
          image: '/images/Hero/glowing_seree_logo_expanded.svg',
          imageAlt: 'Sereel Blog',
        }}
        twitter={{
          card: 'summary_large_image',
          title: 'Blog - Institutional Blockchain Insights',
          description: blogDescription,
          image: '/images/Hero/glowing_seree_logo_expanded.svg',
        }}
        structuredData={blogListingSchema}
      />
      <V4Layout>
        <BlogPageContent />
      </V4Layout>
    </>
  );
};
