// src/components/Blog/BlogPost.tsx
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import blogs from "../../Blog Data/Blogs.json";
import { useState, useEffect } from "react";
import { C } from "../Core/theme";
import { MeshBg, Rv } from "../Core/shared";

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

  // Find blog post on mount or when ID changes
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
          const paths = [
            blog.image,
            blog.image.startsWith("/") ? blog.image.substring(1) : blog.image,
            `../public/${blog.image.replace(/^\//, "")}`,
            `${window.location.origin}/${blog.image.replace(/^\//, "")}`,
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
      <div className="w-full h-screen flex items-center justify-center" style={{ background: C.bg }}>
        <div className="text-center">
          <Rv>
            <div className="text-6xl mb-4">🔍</div>
            <h2 
              className="text-2xl mb-2" 
              style={{ 
                color: C.w,
                fontFamily: 'var(--display)',
              }}
            >
              Blog not found
            </h2>
            <p style={{ color: C.m, fontFamily: 'var(--body)' }}>The article you're looking for doesn't exist</p>
          </Rv>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen" style={{ background: C.bg }}>
      {/* Hero Section */}
      <div
        className="w-full h-[400px] flex items-center relative overflow-hidden"
        style={{ background: C.bg }}
      >
        <MeshBg />
        <div className="px-8 relative z-10 max-w-4xl mx-auto">
          <Rv>
            <h1 
              className="lg:text-5xl text-3xl mb-4 leading-tight"
              style={{
                fontFamily: 'var(--display)',
                background: `linear-gradient(135deg, ${C.w}, ${C.g})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {blog.title}
            </h1>
          </Rv>
          <Rv d={0.1}>
            <p 
              className="text-lg"
              style={{ color: C.m, fontFamily: 'var(--body)' }}
            >
              {blog.date}
            </p>
          </Rv>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full py-20" style={{ background: C.bg }}>
        <div className="max-w-4xl mx-auto px-8">
          
          {/* Featured Image */}
          <Rv>
            <div className="mb-12">
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  background: C.card,
                  border: `1px solid ${C.border}`,
                }}
              >
                {!imageLoaded && (
                  <div className="w-full h-[400px] flex items-center justify-center">
                    <div className="text-4xl">📸</div>
                  </div>
                )}
                
                <img
                  src={imageSrc}
                  alt={blog.title}
                  className="w-full max-h-[500px] object-cover rounded-2xl"
                  style={{ opacity: imageLoaded ? 1 : 0 }}
                />
              </div>
            </div>
          </Rv>

          {/* Article Content */}
          <Rv d={0.1}>
            <div className="blog-content">
              <div className="prose prose-lg max-w-none w-full">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300"
                        style={{ 
                          color: C.g, 
                          textDecoration: 'underline',
                          fontFamily: 'var(--body)',
                        }}
                      >
                        {children}
                      </a>
                    ),
                    h1: ({ children }) => (
                      <h1
                        className="text-4xl mb-6 mt-8"
                        style={{ 
                          color: C.w,
                          fontFamily: 'var(--display)',
                        }}
                      >
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2
                        className="text-3xl mb-4 mt-8"
                        style={{ 
                          color: C.w,
                          fontFamily: 'var(--display)',
                        }}
                      >
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3
                        className="text-2xl mb-3 mt-6"
                        style={{ 
                          color: C.w,
                          fontFamily: 'var(--display)',
                        }}
                      >
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p
                        className="mb-4 leading-relaxed"
                        style={{ color: C.m, fontFamily: 'var(--body)' }}
                      >
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc pl-6 mb-4 space-y-2">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal pl-6 mb-4 space-y-2">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li style={{ color: C.m, fontFamily: 'var(--body)' }}>
                        {children}
                      </li>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote
                        className="border-l-4 pl-4 italic p-4 rounded-r-lg my-6"
                        style={{
                          borderColor: C.g,
                          color: C.g,
                          background: `${C.g}0d`,
                          fontFamily: 'var(--body)',
                        }}
                      >
                        {children}
                      </blockquote>
                    ),
                    code: ({ children }) => (
                      <code
                        className="px-2 py-1 rounded text-sm"
                        style={{
                          background: C.card,
                          color: C.g,
                          fontFamily: 'var(--mono)',
                        }}
                      >
                        {children}
                      </code>
                    ),
                    pre: ({ children }) => (
                      <pre
                        className="p-4 rounded-lg overflow-x-auto mb-4"
                        style={{
                          background: C.card,
                          border: `1px solid ${C.border}`,
                          fontFamily: 'var(--mono)',
                        }}
                      >
                        {children}
                      </pre>
                    ),
                  }}
                >
                  {blog.content}
                </ReactMarkdown>
              </div>
            </div>
          </Rv>

          {/* Back to Blog Button */}
          <Rv d={0.15}>
            <div className="mt-12">
              <a
                href="/blog"
                className="sb inline-flex items-center gap-2 px-8 py-3 rounded-lg transition-all duration-350"
                style={{
                  background: C.g,
                  color: C.bg,
                  border: 'none',
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'var(--body)',
                  letterSpacing: '0.2px',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = C.gL;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 12px 40px ${C.g}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = C.g;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Blogs
              </a>
            </div>
          </Rv>
        </div>
      </div>
    </div>
  );
};
