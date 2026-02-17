import blogs from "../../Blog Data/Blogs.json";
import { Link } from "react-router-dom";
import { C } from "../Core/theme";
import { MeshBg, Rv } from "../Core/shared";

interface Blog {
  id: number;
  title: string;
  image: string;
  content: string;
  summary?: string;
  date?: string;
}

const typedBlogs: Blog[] = blogs as Blog[];

function getCardSummary(blog: Blog) {
  const raw = (blog.summary && blog.summary.trim().length > 0 ? blog.summary : blog.content) || "";
  const cleaned = raw
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[[^\]]+\]\([^)]+\)/g, " ")
    .replace(/[#*_`>-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return cleaned.length > 150 ? `${cleaned.slice(0, 150).trim()}...` : cleaned;
}

export const BlogPageContent = () => {
  return (
    <div className="w-full mx-auto" style={{ background: C.bg }}>
      {/* Hero Section with MeshBg */}
      <div 
        className="w-full lg:h-[500px] h-[300px] flex items-center justify-center relative overflow-hidden"
        style={{ background: C.bg }}
      >
        <MeshBg />
        <div className="text-center px-5 relative z-10 mx-auto">
          <Rv>
            <h1 
              className="lg:text-6xl text-4xl mb-4"
              style={{
                fontFamily: 'var(--display)',
                background: `linear-gradient(135deg, ${C.w}, ${C.g})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Welcome to Our Blog
            </h1>
          </Rv>
          <Rv d={0.1}>
            <p
              className="lg:text-xl text-lg max-w-2xl mx-auto"
              style={{ color: C.m, fontFamily: 'var(--body)' }}
            >
              Stay Updated with the Latest Insights in <br className="hidden lg:block" />
              <span style={{ color: C.g }} className="font-semibold">Institutional DeFi</span> and <span style={{ color: C.g }} className="font-semibold">Blockchain Innovation</span>
            </p>
          </Rv>
        </div>
      </div>

      {/* Blog Grid */}
      <div 
        className="w-full py-20 relative overflow-hidden"
        style={{ background: C.bg }}
      >
        <div className="w-full max-w-[1320px] mx-auto px-5 relative z-10">
          {typedBlogs.length > 0 ? (
            <>
              {/* Section Header */}
              <div className="mb-16">
                <Rv>
                  <div className="sl" style={{
                    fontSize: 11,
                    letterSpacing: '3.5px',
                    textTransform: 'uppercase',
                    color: C.g,
                    fontWeight: 500,
                    marginBottom: 18,
                    fontFamily: 'var(--mono)',
                  }}>
                    Latest Articles
                  </div>
                </Rv>
                <Rv d={0.06}>
                  <h2 
                    className="text-4xl mb-4"
                    style={{
                      fontFamily: 'var(--display)',
                      background: `linear-gradient(135deg, ${C.g}, ${C.w})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Latest Articles
                  </h2>
                </Rv>
                <Rv d={0.12}>
                  <p
                    className="text-lg"
                    style={{ color: C.m, fontFamily: 'var(--body)' }}
                  >
                    Insights from the forefront of institutional blockchain adoption
                  </p>
                </Rv>
              </div>

              {/* Blog Grid */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
                {typedBlogs.map((blog, index) => (
                  <Rv key={blog.id} d={index * 0.08}>
                    <BlogCard blog={blog} />
                  </Rv>
                ))}
              </div>
            </>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
};

// Blog Card
const BlogCard = ({ blog }: { blog: Blog }) => {
  const summary = getCardSummary(blog);

  return (
    <Link to={`/blog/${blog.id}`} className="group block h-full" style={{ textDecoration: "none" }}>
      <article
        style={{
          height: "100%",
          minHeight: 460,
          display: "flex",
          flexDirection: "column",
          borderRadius: 16,
          border: `1px solid ${C.border}`,
          overflow: "hidden",
          background: "linear-gradient(180deg, #04100b 0%, #020706 100%)",
          transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.borderColor = `${C.g}66`;
          e.currentTarget.style.boxShadow = "0 22px 44px -26px rgba(28,163,110,0.7)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.borderColor = C.border;
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div className="relative" style={{ height: 242 }}>
          <img
            className="w-full h-full object-cover object-center"
            src={blog.image}
            alt={blog.title}
            loading="lazy"
          />

          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.04) 28%, rgba(0,0,0,0.88) 100%)" }}
          />

          <div className="absolute bottom-0 left-0 right-0" style={{ padding: "0 16px 16px" }}>
            <h3
              className="line-clamp-2"
              style={{
                margin: 0,
                color: C.w,
                fontFamily: "var(--display)",
                fontSize: "clamp(18px, 2vw, 36px)",
                lineHeight: 1.07,
                letterSpacing: "-0.45px",
                textAlign: "left",
                textShadow: "0 6px 18px rgba(0,0,0,0.52)",
              }}
            >
              {blog.title}
            </h3>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "18px 20px 20px",
            background: "linear-gradient(180deg, rgba(1,8,6,0.92) 0%, rgba(1,8,6,1) 100%)",
            borderTop: `1px solid ${C.border}`,
          }}
        >
          <div
            style={{
              color: C.m,
              fontFamily: "var(--body)",
              fontSize: 15,
              lineHeight: 1.56,
              margin: 0,
              textAlign: "left",
              paddingRight: 6,
            }}
          >
            <p className="line-clamp-3" style={{ margin: 0 }}>
              {summary}
            </p>
          </div>

          <div className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300" style={{ marginTop: 18, color: C.g, fontFamily: "var(--body)", fontWeight: 600, fontSize: 15 }}>
            <span>Read More</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
};

// Empty State Component
const EmptyState = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col py-20">
      <Rv>
        <div className="text-8xl mb-6">📝</div>
        <h3 
          className="text-4xl mb-4" 
          style={{ 
            color: C.w,
            fontFamily: 'var(--display)',
          }}
        >
          No blogs found at the moment
        </h3>
        <p className="text-lg text-center" style={{ color: C.m, fontFamily: 'var(--body)' }}>
          Stay tuned for exciting insights into institutional DeFi and blockchain innovation
        </p>
      </Rv>
    </div>
  );
};
