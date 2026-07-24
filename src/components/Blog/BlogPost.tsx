import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import blogs from "../../Blog Data/Blogs.json";

interface Blog {
  id: number;
  date: string;
  title: string;
  image: string;
  content: string;
  summary?: string;
}

const typedBlogs = blogs as Blog[];

const normalizeImagePath = (path: string) => {
  const cleaned = path.replace(/\\/g, "/");
  return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
};

const getCategory = (blog: Blog) => {
  const value = `${blog.title} ${blog.summary ?? ""}`.toLowerCase();
  if (value.includes("custod") || value.includes("bitcoin")) return "Custody";
  if (value.includes("regulat") || value.includes("sec ") || value.includes("vasp")) return "Regulation";
  if (value.includes("compliance") || value.includes("zero-knowledge")) return "Compliance";
  if (value.includes("market") || value.includes("liquidity")) return "Markets";
  return "Tokenization";
};

const getReadingTime = (content: string) =>
  Math.max(2, Math.ceil(content.replace(/[#*_`>\n]/g, " ").split(/\s+/).filter(Boolean).length / 220));

export const BlogPost = () => {
  const { id } = useParams();
  const reduceMotion = useReducedMotion();
  const blog = typedBlogs.find((entry) => entry.id === Number(id));

  const related = useMemo(() => {
    if (!blog) return [];
    const category = getCategory(blog);
    const sameCategory = typedBlogs.filter(
      (entry) => entry.id !== blog.id && getCategory(entry) === category,
    );
    const remaining = typedBlogs.filter(
      (entry) => entry.id !== blog.id && !sameCategory.some((item) => item.id === entry.id),
    );
    return [...sameCategory, ...remaining].slice(0, 2);
  }, [blog]);

  if (!id || !blog) {
    return (
      <main className="blog-article-missing wrap">
        <p>Article not found.</p>
        <Link to="/blog"><ArrowLeft size={16} /> Back to Sereel Blog</Link>
      </main>
    );
  }

  const readingTime = getReadingTime(blog.content);
  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="blog-article-page">
      <article>
        <motion.header
          className="blog-article-header blog-article-column"
          initial="hidden"
          animate="visible"
          variants={reveal}
          transition={{ duration: .7, ease: [.16, 1, .3, 1] }}
        >
          <Link className="blog-article-back" to="/blog" aria-label="Back to Sereel Blog">
            <ArrowLeft size={19} strokeWidth={1.6} />
          </Link>
          <div className="blog-article-meta">
            <span>{getCategory(blog)}</span>
            <i aria-hidden="true" />
            <time>{blog.date}</time>
            <i aria-hidden="true" />
            <span><Clock3 size={13} /> {readingTime} min read</span>
          </div>
          <h1>{blog.title}</h1>
          <div className="blog-article-author">
            <span className="blog-article-author-mark" aria-hidden="true">
              <img src="/assets/glowing-logo.png" alt="" />
            </span>
            <span><strong>Sereel Research</strong><small>Official Blog</small></span>
          </div>
        </motion.header>

        <motion.figure
          className="blog-article-cover blog-article-column"
          initial={{ opacity: 0, scale: reduceMotion ? 1 : .975 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .85, delay: .12, ease: [.16, 1, .3, 1] }}
        >
          <img src={normalizeImagePath(blog.image)} alt="" />
        </motion.figure>

        <div className="blog-content blog-article-body blog-article-column">
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
      </article>

      {related.length > 0 && (
        <section className="blog-article-next blog-article-column" aria-labelledby="next-articles-title">
          <div className="blog-article-next-head">
            <h2 id="next-articles-title">Next</h2>
            <Link to="/blog">View all research <ArrowUpRight size={15} /></Link>
          </div>
          <div className="blog-article-next-grid">
            {related.map((entry) => (
              <article key={entry.id}>
                <Link
                  className="blog-article-next-image"
                  to={`/blog/${entry.id}`}
                  aria-label={`Read ${entry.title}`}
                >
                  <img src={normalizeImagePath(entry.image)} alt="" />
                  <span><ArrowUpRight size={17} /></span>
                </Link>
                <div className="blog-article-next-meta">
                  <span>{getCategory(entry)}</span><i /> <time>{entry.date}</time>
                </div>
                <h3><Link to={`/blog/${entry.id}`}>{entry.title}</Link></h3>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};
