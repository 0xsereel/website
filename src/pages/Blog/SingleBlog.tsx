import { useParams } from "react-router-dom";
import { BlogPost } from "../../components/Blog/BlogPost";
import { V4Layout } from "../../components/V4/V4Layout";
import { SEO } from "../../components/SEO/SEO";
import { generateArticleSchema, SITE_CONFIG, type BlogArticleData } from "../../utils/seo";
import blogs from "../../Blog Data/Blogs.json";

const typedBlogs: BlogArticleData[] = blogs as BlogArticleData[];

export const SingleBlog = () => {
  const { id } = useParams();
  const blog = id ? typedBlogs.find((b) => b.id === parseInt(id)) : null;

  if (!blog) {
    return (
      <>
        <SEO
          title="Blog Post Not Found"
          description="The blog post you are looking for could not be found."
          noIndex={true}
        />
          <V4Layout>
              <div style={{
                  maxWidth: 780,
                  margin: "0 auto",
                  padding: "80px clamp(16px, 4vw, 56px)",
              }}>
                  <BlogPost />
              </div>
          </V4Layout>
      </>
    );
  }

  const articleSchema = generateArticleSchema(blog);
  
  const blogDescription = blog.summary || blog.content
    .substring(0, 160)
    .replace(/[#*`]/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .trim();

  const featuredImageUrl = blog.image.startsWith('http')
    ? blog.image
    : `${SITE_CONFIG.url}/${blog.image.replace(/^\//, '')}`;

  const publishedDate = blog.date || new Date().toISOString();

  return (
    <>
      <SEO
        title={blog.title}
        description={blogDescription}
        keywords={[
          'blockchain',
          'DeFi',
          'tokenization',
          'institutional finance',
          'digital assets',
        ]}
        canonical={`/blog/${blog.id}`}
        openGraph={{
          type: 'article',
          title: blog.title,
          description: blogDescription,
          url: `${SITE_CONFIG.url}/blog/${blog.id}`,
          image: featuredImageUrl,
          imageAlt: blog.title,
          imageWidth: 1200,
          imageHeight: 630,
          article: {
            publishedTime: publishedDate,
            author: blog.author || SITE_CONFIG.author,
            section: 'Blockchain & DeFi',
            tags: ['blockchain', 'DeFi', 'tokenization', 'institutional finance'],
          },
        }}
        twitter={{
          card: 'summary_large_image',
          title: blog.title,
          description: blogDescription,
          image: featuredImageUrl,
        }}
        structuredData={articleSchema}
      />
        <V4Layout>
            <div style={{
                maxWidth: 780,
                margin: "0 auto",
                padding: "80px clamp(16px, 4vw, 56px)",
            }}>
                <BlogPost />
            </div>
        </V4Layout>
    </>
  );
};
