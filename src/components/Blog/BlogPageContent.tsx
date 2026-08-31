import { Link } from "react-router-dom";
import { SEO } from "../SEO";
import { generateBlogListingSchema } from "../../utils/seo";
import {
  blogEntries,
  getBlogPath,
  normalizeImagePath,
} from "../../utils/blog";

export const BlogPageContent = () => {
  const featured = blogEntries[0];
  const rest = blogEntries.slice(1);

  return (
    <main className="wrap">
      <SEO
        title="Journal — Tokenized Capital Markets Research"
        description="Regulatory analysis, infrastructure notes, and market perspective for institutional on-chain finance, from the Sereel research team."
        canonical="/blog"
        structuredData={generateBlogListingSchema(blogEntries)}
      />

      <section className="page-hero">
        <div className="mono eyebrow lit">Journal</div>
        <h1>
          Research for tokenized capital markets.
        </h1>
        <p className="lede">
          Regulatory analysis, infrastructure notes, and market perspective for
          institutional on-chain finance.
        </p>
      </section>

      <section className="section">
        {featured && (
          <article className="feature">
            <div>
              <div className="meta">
                <span className="mono lit">Featured</span>
                <span className="mono">{featured.date}</span>
              </div>
              <h2>
                {featured.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="lit">
                  {featured.title.split(" ").slice(-1)[0]}
                </span>
              </h2>
              <p>{featured.description || featured.summary}</p>
              <Link className="read" to={getBlogPath(featured)}>
                Read article
              </Link>
            </div>
            <div
              className="cover"
              role="img"
              aria-label={featured.imageAlt || featured.title}
              style={
                featured.image
                  ? {
                      backgroundImage: `url(${normalizeImagePath(featured.image)})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : undefined
              }
            />
          </article>
        )}

        {rest.length > 0 && (
          <div className="grid">
            {rest.map((blog) => (
              <Link className="card" to={getBlogPath(blog)} key={blog.id}>
                <div
                  className="cover"
                  role="img"
                  aria-label={blog.imageAlt || blog.title}
                  style={
                    blog.image
                      ? {
                          backgroundImage: `url(${normalizeImagePath(blog.image)})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : undefined
                  }
                />
                <div className="body">
                  <div className="meta">
                    <span className="mono">{blog.date}</span>
                  </div>
                  <h3>{blog.title}</h3>
                  <p>{blog.description || blog.summary}</p>
                  <span className="read">Read</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {blogEntries.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", color: "var(--muted)" }}>
            <p className="mono">No articles found.</p>
          </div>
        )}
      </section>
    </main>
  );
};
