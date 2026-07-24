import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  ChartSpline,
  Grid2X2,
  KeyRound,
  Scale,
  Search,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
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
const categoryIcons: Record<(typeof categories)[number], LucideIcon> = {
  All: Grid2X2,
  Tokenization: Blocks,
  Compliance: ShieldCheck,
  Markets: ChartSpline,
  Custody: KeyRound,
  Regulation: Scale,
};
const featureTones = ["blue", "rose", "sage", "sand"] as const;

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
  const [featureIndex, setFeatureIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [query, setQuery] = useState("");
  const reduceMotion = useReducedMotion();
  const featuredStories = typedBlogs.slice(0, 4);
  const featuredStoryCount = featuredStories.length;
  const featured = featuredStories[featureIndex];

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return typedBlogs.filter((blog) => {
      const matchesCategory = activeCategory === "All" || getCategory(blog) === activeCategory;
      const matchesQuery = !needle || `${blog.title} ${blog.summary}`.toLowerCase().includes(needle);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const moveFeature = (step: number) => {
    setDirection(step);
    setFeatureIndex((current) => (current + step + featuredStories.length) % featuredStories.length);
  };

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setDirection(1);
      setFeatureIndex((current) => (current + 1) % featuredStoryCount);
    }, 7200);
    return () => window.clearInterval(timer);
  }, [featuredStoryCount, reduceMotion]);

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="blog-index-page blog-journal">
      <section className="blog-journal-hero wrap">
        <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ duration: .65 }}>
          <h1>Sereel Blog</h1>
          <p>Research and operating intelligence for institutions building tokenized financial products.</p>
        </motion.div>
      </section>

      {featured && (
        <section className="blog-feature-carousel" aria-label="Featured analysis">
          <div className={`blog-feature-deck tone-${featureTones[featureIndex]}`}>
            <button type="button" className="blog-feature-peek peek-left" onClick={() => moveFeature(-1)} aria-label="Previous featured article" />
            <div className="blog-feature-viewport">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.article
                  className="blog-feature-slide"
                  key={featured.id}
                  custom={direction}
                  initial={{ opacity: 0, x: reduceMotion ? 0 : direction * 90 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: reduceMotion ? 0 : direction * -90 }}
                  transition={{ duration: reduceMotion ? 0 : .82, ease: [.16, 1, .3, 1] }}
                >
                  <Link
                    className="blog-feature-art"
                    to={`/blog/${featured.id}`}
                    style={{ backgroundImage: `url(${normalizeImagePath(featured.image)})` }}
                    aria-label={`Read ${featured.title}`}
                  >
                    <span>Featured / {String(featureIndex + 1).padStart(2, "0")}</span>
                  </Link>
                  <div className="blog-feature-editorial">
                    <div className="blog-story-meta">
                      <span>{getCategory(featured)}</span>
                      <time>{featured.date || "2026"}</time>
                    </div>
                    <h2><Link to={`/blog/${featured.id}`}>{featured.title}</Link></h2>
                    <p>{cleanSummary(featured, 235)}</p>
                    <Link className="blog-feature-read" to={`/blog/${featured.id}`}>
                      Read analysis <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
            <button type="button" className="blog-feature-peek peek-right" onClick={() => moveFeature(1)} aria-label="Next featured article" />
            <div className="blog-feature-controls">
              <button type="button" onClick={() => moveFeature(-1)} aria-label="Previous featured article"><ArrowLeft size={17} /></button>
              <span>{String(featureIndex + 1).padStart(2, "0")} / {String(featuredStories.length).padStart(2, "0")}</span>
              <button type="button" onClick={() => moveFeature(1)} aria-label="Next featured article"><ArrowRight size={17} /></button>
            </div>
          </div>
        </section>
      )}

      <section className="blog-journal-search wrap">
        <label htmlFor="blog-search"><Search size={15} /><span>Search</span></label>
        <input
          id="blog-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search research, markets, standards…"
        />
      </section>

      <section className="blog-library blog-journal-library wrap">
        <div className="blog-library-head">
          <div><h2>{filtered.length} Posts</h2></div>
          <div className="blog-category-pills" aria-label="Filter articles">
            {categories.map((category) => {
              const CategoryIcon = categoryIcons[category];
              return (
                <button
                  key={category}
                  type="button"
                  className={activeCategory === category ? "active" : ""}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  <CategoryIcon aria-hidden="true" />
                  <span>{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {filtered.length > 0 ? (
          <motion.div className="blog-journal-grid" key={`${activeCategory}-${query}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .3 }}>
            {filtered.map((blog, index) => (
              <motion.article
                className="blog-journal-card"
                key={blog.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: .18 }}
                variants={reveal}
                transition={{ duration: .55, delay: (index % 4) * .045, ease: [.16, 1, .3, 1] }}
              >
                <Link
                  className="blog-journal-image"
                  to={`/blog/${blog.id}`}
                  style={{ backgroundImage: `url(${normalizeImagePath(blog.image)})` }}
                  aria-label={`Read ${blog.title}`}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i><ArrowUpRight size={15} /></i>
                </Link>
                <div className="blog-story-meta"><span>{getCategory(blog)}</span><time>{blog.date || "2026"}</time></div>
                <h3><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h3>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <div className="blog-empty"><span>00</span><p>No post match this search.</p></div>
        )}
      </section>

    </main>
  );
};
