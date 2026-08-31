import { useParams, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { SEO } from "../SEO";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  parsePublishedDate,
} from "../../utils/seo";
import {
  findBlogByParam,
  getBlogPath,
  getRelatedPosts,
  normalizeImagePath,
} from "../../utils/blog";

// Posts whose header image is square (~1:1) and renders too tall at full width
const SQUARE_HEADER_IMAGE_IDS = [6, 8, 15, 21, 22];

export const BlogPost = () => {
  const { slug } = useParams();
  const blog = findBlogByParam(slug);

  if (!blog) {
    return (
      <main className="wrap" style={{ padding: "120px 0", textAlign: "center" }}>
        <SEO title="Article Not Found" noIndex />
        <p className="mono" style={{ fontSize: 24 }}>Blog not found</p>
        <Link className="pill" to="/blog" style={{ marginTop: 24 }}>
          <span className="dot"></span>Back to Journal
        </Link>
      </main>
    );
  }

  // Legacy numeric-id URLs (/blog/22) redirect to the canonical slug URL.
  if (slug !== blog.slug && blog.slug) {
    return <Navigate to={getBlogPath(blog)} replace />;
  }

  const imageSrc = normalizeImagePath(blog.image);
  const publishedTime = parsePublishedDate(blog.date);
  const related = getRelatedPosts(blog);

  return (
    <main className="wrap">
      <SEO
        title={blog.title}
        description={blog.description || blog.summary}
        canonical={getBlogPath(blog)}
        keywords={blog.tags}
        openGraph={{
          type: "article",
          image: imageSrc,
          imageAlt: blog.imageAlt || blog.title,
          article: {
            publishedTime,
            author: blog.author,
            section: "Journal",
            tags: blog.tags,
          },
        }}
        structuredData={[
          generateArticleSchema(blog),
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Journal", url: "/blog" },
            { name: blog.title, url: getBlogPath(blog) },
          ]),
        ]}
      />

      <section className="page-hero">
        <div className="mono eyebrow lit">Journal</div>
        <h1>{blog.title}</h1>
        <p className="lede" style={{ marginTop: 16 }}>
          <span className="mono">{blog.date}</span>
        </p>
      </section>

      <section className="section">
        {blog.image && (
          <div style={{ marginBottom: 48 }}>
            <img
              src={imageSrc}
              alt={blog.imageAlt || blog.title}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              style={{
                width: SQUARE_HEADER_IMAGE_IDS.includes(blog.id) ? "40%" : "100%",
                margin: SQUARE_HEADER_IMAGE_IDS.includes(blog.id) ? "0 auto" : undefined,
                borderRadius: 18,
                border: "1px solid var(--rule-2)",
                display: "block",
              }}
            />
          </div>
        )}

        <div className="blog-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              // The page h1 is the post title above; demote any h1 in the
              // markdown body so each page has exactly one h1.
              h1: ({ children }) => <h2>{children}</h2>,
              a: ({ href, children }) => {
                const isInternal =
                  href &&
                  (href.startsWith("/") ||
                    href.startsWith("https://www.sereel.com") ||
                    href.startsWith("https://sereel.com"));
                if (isInternal) {
                  const path = href.replace(/^https?:\/\/(www\.)?sereel\.com/, "");
                  return <Link to={path || "/"}>{children}</Link>;
                }
                return (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                );
              },
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>

        {related.length > 0 && (
          <div style={{ marginTop: 64 }}>
            <h2 style={{ marginBottom: 24 }}>Related articles</h2>
            <div className="grid">
              {related.map((post) => (
                <Link className="card" to={getBlogPath(post)} key={post.id}>
                  <div
                    className="cover"
                    role="img"
                    aria-label={post.imageAlt || post.title}
                    style={{
                      backgroundImage: `url(${normalizeImagePath(post.image)})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="body">
                    <div className="meta">
                      <span className="mono">{post.date}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <span className="read">Read</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: 48 }}>
          <Link className="pill" to="/blog">
            <span className="dot"></span>Back to Journal
          </Link>
        </div>
      </section>
    </main>
  );
};
