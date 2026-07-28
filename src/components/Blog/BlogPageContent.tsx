import blogs from "../../Blog Data/Blogs.json";
import { Link } from "react-router-dom";

interface Blog {
  id: number;
  title: string;
  image: string;
  content: string;
  summary: string;
  date?: string;
}

const typedBlogs: Blog[] = blogs as Blog[];

const normalizeImagePath = (path: string) => {
  const cleaned = path.replace(/\\/g, "/");
  return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
};

export const BlogPageContent = () => {
  const featured = typedBlogs[0];
  const rest = typedBlogs.slice(1);

  return (
    <main className="wrap">
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
                <span className="mono">{featured.date || "2026-05-04"}</span>
              </div>
              <h2>
                {featured.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="lit">
                  {featured.title.split(" ").slice(-1)[0]}
                </span>
              </h2>
              <p>{featured.summary || featured.content.substring(0, 160)}...</p>
              <Link className="read" to={`/blog/${featured.id}`}>
                Read article
              </Link>
            </div>
            <div
              className="cover"
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
              <Link className="card" to={`/blog/${blog.id}`} key={blog.id}>
                <div
                  className="cover"
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
                    <span className="mono">
                      {blog.date || "2026-04-22"}
                    </span>
                  </div>
                  <h3>{blog.title}</h3>
                  <p>
                    {blog.summary
                      ? blog.summary.substring(0, 120) + "..."
                      : blog.content.substring(0, 120).replace(/[#*_`]/g, "") +
                        "..."}
                  </p>
                  <span className="read">Read</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {typedBlogs.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", color: "var(--muted)" }}>
            <p className="mono">No articles found.</p>
          </div>
        )}
      </section>
    </main>
  );
};
