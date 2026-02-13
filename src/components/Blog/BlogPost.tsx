// src/components/Blog/BlogPost.tsx
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import blogs from "../../Blog Data/Blogs.json";
import { useState, useEffect } from "react";

// V4 Color Palette
const C = {
  bg: '#010201',
  card: '#0a0f0b',
  border: '#141f16',
  g: '#1ea46f',
  m: '#6b8a74',
  w: '#e8f0eb',
};

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
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-gilroy-bold mb-2" style={{ color: C.w }}>
            Blog not found
          </h2>
          <p style={{ color: C.m }}>The article you're looking for doesn't exist</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen" style={{ background: C.bg }}>
      {/* Hero Section */}
      <div
        className="w-full h-[400px] flex items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${C.bg} 0%, ${C.card} 50%, ${C.bg} 100%)`,
        }}
      >
        <div className="text-center px-5 relative z-10 max-w-4xl mx-auto">
          <h1 
            className="lg:text-5xl text-3xl font-gilroy-bold mb-4 leading-tight"
            style={{
              background: `linear-gradient(135deg, ${C.w}, ${C.g})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {blog.title}
          </h1>
          <p 
            className="text-lg"
            style={{ color: C.m }}
          >
            {blog.date}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full py-20" style={{ background: C.bg }}>
        <div className="w-[90%] max-w-4xl mx-auto">
          
          {/* Featured Image */}
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

          {/* Article Content */}
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
                      style={{ color: C.g, textDecoration: 'underline' }}
                    >
                      {children}
                    </a>
                  ),
                  h1: ({ children }) => (
                    <h1
                      className="text-4xl font-gilroy-bold mb-6 mt-8"
                      style={{ color: C.w }}
                    >
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2
                      className="text-3xl font-gilroy-bold mb-4 mt-8"
                      style={{ color: C.w }}
                    >
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3
                      className="text-2xl font-gilroy-bold mb-3 mt-6"
                      style={{ color: C.w }}
                    >
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p
                      className="mb-4 leading-relaxed"
                      style={{ color: C.m }}
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
                    <li style={{ color: C.m }}>
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
                      }}
                    >
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code
                      className="px-2 py-1 rounded text-sm font-mono"
                      style={{
                        background: C.card,
                        color: C.g,
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

          {/* Back to Blog Button */}
          <div className="mt-12 text-center">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-gilroy-medium transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${C.g}, ${C.g})`,
                color: C.bg,
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
        </div>
      </div>
    </div>
  );
};
