import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import blogs from "../../Blog Data/Blogs.json";
import { useState, useEffect } from "react";

interface Blog {
  id: number;
  date: string;
  title: string;
  image: string;
  content: string;
}

const typedBlogs: Blog[] = blogs as Blog[];

export const BlogPost = () => {
  const { id } = useParams();
  const [imageSrc, setImageSrc] = useState("");
  const [blog, setBlog] = useState<Blog | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (id) {
      const foundBlog = typedBlogs.find((blog) => blog.id === parseInt(id));
      if (foundBlog) {
        setBlog(foundBlog);
      }
    }
  }, [id]);

  useEffect(() => {
    if (blog) {
      setImageSrc("images/blog/Sereel_con_logo.jpg");
      setTimeout(() => {
        try {
          const normalized = blog.image.replace(/\\/g, "/");
          const paths = [
            normalized.startsWith("/") ? normalized : `/${normalized}`,
            normalized.startsWith("/") ? normalized.substring(1) : normalized,
            `../public/${normalized.replace(/^\//, "")}`,
            `${window.location.origin}/${normalized.replace(/^\//, "")}`,
          ];
          const tryNextPath = (index: number) => {
            if (index >= paths.length) return;
            const img = new Image();
            img.onload = () => {
              setImageSrc(paths[index]);
              setImageLoaded(true);
            };
            img.onerror = () => tryNextPath(index + 1);
            img.src = paths[index];
          };
          tryNextPath(0);
        } catch (error) {
          console.error("Error in image loading:", error);
          setImageLoaded(true);
        }
      }, 200);
    }
  }, [blog]);

  if (!id || !blog) {
    return (
      <main className="wrap" style={{ padding: "120px 0", textAlign: "center" }}>
        <p className="mono" style={{ fontSize: 24 }}>Blog not found</p>
        <Link className="pill" to="/blog" style={{ marginTop: 24 }}>
          <span className="dot"></span>Back to Journal
        </Link>
      </main>
    );
  }

  return (
    <main className="wrap">
      <section className="page-hero">
        <div className="mono eyebrow lit">[ Journal ]</div>
        <h1>{blog.title}</h1>
        <p className="lede" style={{ marginTop: 16 }}>
          <span className="mono">{blog.date}</span>
        </p>
      </section>

      <section className="section">
        {blog.image && (
          <div style={{ marginBottom: 48 }}>
            {!imageLoaded && (
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  borderRadius: 18,
                  border: "1px dashed var(--rule-2)",
                  background: "var(--bg-2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--muted)",
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  textTransform: "uppercase",
                }}
              >
                Loading image...
              </div>
            )}
            <img
              src={imageSrc}
              alt={blog.title}
              style={{
                width: "100%",
                borderRadius: 18,
                border: "1px solid var(--rule-2)",
                display: imageLoaded ? "block" : "none",
              }}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        )}

        <div className="blog-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>

        <div style={{ marginTop: 48 }}>
          <Link className="pill" to="/blog">
            <span className="dot"></span>Back to Journal
          </Link>
        </div>
      </section>
    </main>
  );
};
