import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import blogs from "../../Blog Data/Blogs.json";

interface Blog {
  id: number;
  title: string;
  image: string;
  content: string;
  summary: string;
  date?: string;
}

const typedBlogs = blogs as Blog[];
const categories = ["All", "Tokenization", "Compliance", "Markets", "Custody", "Regulation"] as const;

const normalizeImagePath = (path: string) => {
  const cleaned = path.replace(/\\/g, "/");
  return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
};

const getCategory = (blog: Blog) => {
  const value = `${blog.title} ${blog.summary}`.toLowerCase();
  if (value.includes("custod") || value.includes("bitcoin")) return "Custody";
  if (value.includes("regulat") || value.includes("mica") || value.includes("vasp")) return "Regulation";
  if (value.includes("compliance") || value.includes("zero-knowledge") || value.includes("zk")) return "Compliance";
  if (value.includes("market") || value.includes("liquidity") || value.includes("institutional")) return "Markets";
  return "Tokenization";
};

const cleanSummary = (blog: Blog, limit = 155) => {
  const source = blog.summary || blog.content;
  const clean = source.replace(/[#*_`>\n]/g, " ").replace(/\s+/g, " ").trim();
  return clean.length > limit ? `${clean.slice(0, limit).trim()}…` : clean;
};

export const BlogPageContent = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const reduceMotion = useReducedMotion();
  const featured = typedBlogs[0];
  const filtered = useMemo(() => typedBlogs.slice(1).filter((blog) => activeCategory === "All" || getCategory(blog) === activeCategory), [activeCategory]);
  const reveal = { hidden: { opacity: 0, y: reduceMotion ? 0 : 26 }, visible: { opacity: 1, y: 0 } };

  return (
    <main className="blog-index-page">
      <section className="blog-index-hero wrap">
        <motion.div initial="hidden" animate="visible" variants={reveal}>
          <span className="blog-index-kicker">Sereel intelligence / Journal</span>
          <h1>Signals shaping tokenized capital markets.</h1>
        </motion.div>
        <motion.div className="blog-index-hero-aside" initial="hidden" animate="visible" variants={reveal} transition={{ delay: .1 }}>
          <p>Research, regulatory analysis, and infrastructure perspectives for institutions building financial products on-chain.</p>
          <div><span>{String(typedBlogs.length).padStart(2, "0")}</span><small>Published<br/>briefings</small></div>
        </motion.div>
      </section>

      {featured && <section className="blog-feature-shell wrap">
        <motion.article className="blog-feature-story" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} variants={reveal}>
          <Link className="blog-feature-image" to={`/blog/${featured.id}`} style={{ backgroundImage: `url(${normalizeImagePath(featured.image)})` }} aria-label={`Read ${featured.title}`}>
            <span>Lead analysis</span><i><ArrowUpRight size={17}/></i>
          </Link>
          <div className="blog-feature-copy">
            <div className="blog-story-meta"><span>{getCategory(featured)}</span><time>{featured.date || "2026"}</time></div>
            <h2><Link to={`/blog/${featured.id}`}>{featured.title}</Link></h2>
            <p>{cleanSummary(featured, 240)}</p>
            <Link className="blog-text-link" to={`/blog/${featured.id}`}>Read the analysis <ArrowUpRight size={15}/></Link>
          </div>
        </motion.article>
      </section>}

      <section className="blog-library wrap">
        <div className="blog-library-head">
          <div><span>Research archive</span><h2>Latest perspectives.</h2></div>
          <span>{filtered.length} articles</span>
        </div>
        <div className="blog-category-rail" aria-label="Filter articles">
          {categories.map((category) => <button key={category} type="button" className={activeCategory === category ? "active" : ""} onClick={() => setActiveCategory(category)}><i/>{category}</button>)}
        </div>

        {filtered.length > 0 ? <motion.div className="blog-story-grid" key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .3 }}>
          {filtered.map((blog, index) => <motion.article className="blog-story-card" key={blog.id} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={reveal} transition={{ delay: (index % 3) * .055 }}>
            <Link className="blog-story-image" to={`/blog/${blog.id}`} style={{ backgroundImage: `url(${normalizeImagePath(blog.image)})` }} aria-label={`Read ${blog.title}`}>
              <span>{String(index + 1).padStart(2, "0")}</span><i><ArrowUpRight size={15}/></i>
            </Link>
            <div className="blog-story-meta"><span>{getCategory(blog)}</span><time>{blog.date || "2026"}</time></div>
            <h3><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h3>
            <p>{cleanSummary(blog)}</p>
            <Link className="blog-card-link" to={`/blog/${blog.id}`} aria-label={`Read ${blog.title}`}>Read article <ArrowUpRight size={14}/></Link>
          </motion.article>)}
        </motion.div> : <div className="blog-empty"><span>00</span><p>No briefings in this category yet.</p></div>}
      </section>
    </main>
  );
};
