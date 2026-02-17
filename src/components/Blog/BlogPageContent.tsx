import blogs from "../../Blog Data/Blogs.json";
import { Link } from "react-router-dom";
import { C } from "../Core/theme";
import { MeshBg, Gc, Rv } from "../Core/shared";

interface Blog {
  id: number;
  title: string;
  image: string;
  content: string;
  summary: string;
  date?: string;
}

const typedBlogs: Blog[] = blogs as Blog[];

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
        <div className="w-full max-w-[1200px] mx-auto px-5 relative z-10">
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
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
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

// Gc-style Glow Card Component
const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link to={`/blog/${blog.id}`} style={{ textDecoration: 'none' }}>
      <Gc style={{ height: "100%", display: "flex", flexDirection: "column", cursor: "pointer" }} p="0">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <div className="w-full h-[200px] relative">
            <img
              className="w-full h-full object-cover object-center"
              src={blog.image}
              alt={blog.title}
              loading="lazy"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 
                className="text-lg line-clamp-2" 
                style={{ 
                  color: C.w,
                  fontFamily: 'var(--display)',
                }}
              >
                {blog.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div className="mb-4" style={{ flex: 1 }}>
            <p 
              className="text-sm line-clamp-3 leading-relaxed"
              style={{ color: C.m, fontFamily: 'var(--body)' }}
              dangerouslySetInnerHTML={{ __html: blog.summary }}
            />
          </div>

          {/* Read More Button */}
          <div
            className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
            style={{ 
              color: C.g,
              fontFamily: 'var(--body)',
              fontWeight: 600,
            }}
          >
            <span>Read More</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Gc>
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
