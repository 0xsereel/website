// src/components/Blog/BlogPost.tsx
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import blogs from "../../Blog Data/Blogs.json";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { GlowingText } from "../Animation/GlowingText";
import { useParallax } from "../../hooks/useParallax";

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
  const { ref, y } = useParallax(0.3);

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
      setImageSrc("images/blog/Seree_con_logo.jpg");

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
      <div className="w-full h-screen flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-6xl mb-4"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            🔍
          </motion.div>
          <h2 className="text-2xl font-gilroy-bold text-white mb-2">Blog not found</h2>
          <p className="text-[#D5D5D5]">The article you're looking for doesn't exist</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full bg-black min-h-screen">
      {/* Hero Section */}
      <motion.div
        ref={ref}
        className="w-full h-[400px] bg-gradient-to-br from-[#1CA36E]/10 via-black to-[#1CA36E]/5 flex items-center justify-center relative overflow-hidden"
        style={{ y }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 25% 25%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 75% 75%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 25% 75%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 25% 25%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="text-center px-5 relative z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="lg:text-5xl text-3xl font-gilroy-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {blog.title}
          </motion.h1>
          <motion.p 
            className="text-[#969696] text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {blog.date}
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <div className="w-full bg-black py-20">
        <div className="w-[90%] max-w-4xl mx-auto">
          
          {/* Featured Image */}
          <AnimatedSection className="mb-12">
            <motion.div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1CA36E]/10 to-white/5 border border-[#202026]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {!imageLoaded && (
                <motion.div
                  className="w-full h-[400px] flex items-center justify-center"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-4xl">📸</div>
                </motion.div>
              )}
              
              <motion.img
                src={imageSrc}
                alt={blog.title}
                className="w-full max-h-[500px] object-cover rounded-2xl"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: imageLoaded ? 1 : 0, scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              />
              
              {/* Image overlay effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          </AnimatedSection>

          {/* Article Content */}
          <AnimatedSection className="blog-content">
            <motion.div
              className="prose prose-lg max-w-none w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  a: ({ href, children }) => (
                    <motion.a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1CA36E] underline hover:text-[#00FFB2] transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {children}
                    </motion.a>
                  ),
                  h1: ({ children }) => (
                    <motion.h1
                      className="text-4xl font-gilroy-bold mb-6 mt-8"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <GlowingText className="text-[#1CA36E]">{children}</GlowingText>
                    </motion.h1>
                  ),
                  h2: ({ children }) => (
                    <motion.h2
                      className="text-3xl font-gilroy-bold mb-4 mt-8"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <GlowingText className="text-[#1CA36E]">{children}</GlowingText>
                    </motion.h2>
                  ),
                  h3: ({ children }) => (
                    <motion.h3
                      className="text-2xl font-gilroy-bold mb-3 mt-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <GlowingText className="text-[#1CA36E]">{children}</GlowingText>
                    </motion.h3>
                  ),
                  p: ({ children }) => (
                    <motion.p
                      className="text-[#D5D5D5] mb-4 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {children}
                    </motion.p>
                  ),
                  ul: ({ children }) => (
                    <motion.ul
                      className="list-disc pl-6 mb-4 space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      {children}
                    </motion.ul>
                  ),
                  ol: ({ children }) => (
                    <motion.ol
                      className="list-decimal pl-6 mb-4 space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      {children}
                    </motion.ol>
                  ),
                  li: ({ children }) => (
                    <motion.li
                      className="text-[#D5D5D5]"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {children}
                    </motion.li>
                  ),
                  blockquote: ({ children }) => (
                    <motion.blockquote
                      className="border-l-4 border-[#1CA36E] pl-4 italic text-[#1CA36E] bg-[#1CA36E]/5 p-4 rounded-r-lg my-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        backgroundColor: "rgba(28, 163, 110, 0.1)",
                        borderColor: "#00FFB2"
                      }}
                    >
                      {children}
                    </motion.blockquote>
                  ),
                  code: ({ children }) => (
                    <motion.code
                      className="bg-[#202026] text-[#1CA36E] px-2 py-1 rounded text-sm font-mono"
                      whileHover={{ 
                        backgroundColor: "rgba(28, 163, 110, 0.1)",
                        color: "#00FFB2"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {children}
                    </motion.code>
                  ),
                  pre: ({ children }) => (
                    <motion.pre
                      className="bg-[#202026] p-4 rounded-lg overflow-x-auto mb-4 border border-[#1CA36E]/20"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        borderColor: "rgba(28, 163, 110, 0.5)",
                        backgroundColor: "rgba(28, 163, 110, 0.05)"
                      }}
                    >
                      {children}
                    </motion.pre>
                  ),
                }}
              >
                {blog.content}
              </ReactMarkdown>
            </motion.div>
          </AnimatedSection>

          {/* Back to Blog Button */}
          <AnimatedSection className="mt-12 text-center">
            <motion.a
              href="/blog"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1CA36E] to-[#00FFB2] text-white px-8 py-3 rounded-full font-gilroy-medium hover:from-[#00FFB2] hover:to-[#1CA36E] transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(28, 163, 110, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                animate={{ x: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </motion.svg>
              Back to Blog
            </motion.a>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
