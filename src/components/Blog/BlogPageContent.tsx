import blogs from "../../Blog Data/Blogs.json";
import { Link } from "react-router-dom";
import { NewsLetter } from "../Home/NewsLetter";
import { useState } from "react";

// V4 Color Palette
const C = {
  bg: '#010201',
  surface: '#060906',
  card: '#0a0f0b',
  cardHi: '#0f1710',
  border: '#141f16',
  g: '#1ea46f',
  gL: '#2bdb8e',
  gD: '#1ea46f15',
  m: '#6b8a74',
  w: '#e8f0eb',
};

interface Blog {
  id: number;
  title: string;
  image: string;
  content: string;
  summary: string;
  date?: string;
}

const typedBlogs: Blog[] = blogs as Blog[];

// Mesh Background Component
function MeshBg() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {/* Large morphing blob */}
      <div style={{
        position: "absolute", top: "-10%", right: "-5%",
        width: "60vw", height: "60vw", maxWidth: 800, maxHeight: 800,
        borderRadius: "30% 70% 60% 40% / 50% 30% 70% 50%",
        background: `radial-gradient(ellipse at 30% 40%, ${C.g}08, ${C.g}03 50%, transparent 70%)`,
        animation: "morph 20s ease-in-out infinite",
        filter: "blur(40px)",
      }} />
      {/* Secondary blob */}
      <div style={{
        position: "absolute", bottom: "5%", left: "-10%",
        width: "45vw", height: "45vw", maxWidth: 600, maxHeight: 600,
        borderRadius: "60% 40% 30% 70% / 40% 60% 40% 60%",
        background: `radial-gradient(ellipse at 60% 60%, ${C.g}05, transparent 60%)`,
        animation: "morph 25s ease-in-out infinite reverse",
        filter: "blur(50px)",
      }} />
      {/* Dot matrix grid */}
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.25 }}>
        <defs>
          <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill={C.g} opacity="0.15" />
          </pattern>
          <radialGradient id="dotMask">
            <stop offset="0%" stopColor="white" />
            <stop offset="60%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="dm"><rect width="100%" height="100%" fill="url(#dotMask)" /></mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" mask="url(#dm)" />
      </svg>
      {/* Horizon glow */}
      <div style={{
        position: "absolute", bottom: 0, left: "10%", right: "10%", height: 1,
        background: `linear-gradient(90deg, transparent, ${C.g}15, transparent)`,
      }} />
    </div>
  );
}

export const BlogPageContent = () => {
  return (
    <div className="w-full" style={{ background: C.bg }}>
      <style>{`
        @keyframes morph { 
          0%{border-radius:30% 70% 60% 40%/50% 30% 70% 50%} 
          33%{border-radius:50% 50% 30% 70%/40% 60% 50% 50%} 
          66%{border-radius:40% 60% 50% 50%/60% 40% 60% 40%} 
          100%{border-radius:30% 70% 60% 40%/50% 30% 70% 50%}
        }
      `}</style>

      {/* Hero Section with MeshBg */}
      <div 
        className="w-full lg:h-[500px] h-[300px] flex items-center justify-center relative overflow-hidden"
        style={{ background: C.bg }}
      >
        <MeshBg />
        <div className="text-center px-5 relative z-10">
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
          <p
            className="lg:text-xl text-lg max-w-2xl mx-auto"
            style={{ color: C.m }}
          >
            Stay Updated with the Latest Insights in <br className="hidden lg:block" />
            <span style={{ color: C.g }} className="font-semibold">Institutional DeFi</span> and <span style={{ color: C.g }} className="font-semibold">Blockchain Innovation</span>
          </p>
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
              <div className="text-center mb-16">
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
                <p
                  className="text-lg"
                  style={{ color: C.m }}
                >
                  Insights from the forefront of institutional blockchain adoption
                </p>
              </div>

              {/* Blog Grid */}
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {typedBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            </>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};

// Gc-style Glow Card Component
const BlogCard = ({ blog }: { blog: Blog }) => {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="group rounded-xl overflow-hidden transition-all duration-500 relative"
      style={{
        background: hov ? C.cardHi : C.card,
        border: `1px solid ${hov ? C.g + "25" : C.border}`,
        transform: hov ? "translateY(-2px)" : "none",
        boxShadow: hov ? `0 24px 64px -16px ${C.g}12` : "none",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Top Glow Line */}
      <div
        className="absolute top-0 left-[15%] right-[15%] h-[1px] transition-all duration-500"
        style={{
          background: hov ? `linear-gradient(90deg, transparent, ${C.g}40, transparent)` : "transparent",
        }}
      />

      <Link to={`/blog/${blog.id}`} className="block">
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
        <div className="p-6">
          <div className="mb-4">
            <p 
              className="text-sm line-clamp-3 leading-relaxed"
              style={{ color: C.m }}
              dangerouslySetInnerHTML={{ __html: blog.summary }}
            />
          </div>

          {/* Read More Button */}
          <div
            className="flex items-center gap-2 text-sm group-hover:gap-3 transition-all duration-300"
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
      </Link>
    </div>
  );
};

// Empty State Component
const EmptyState = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col py-20">
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
      <p className="text-lg text-center" style={{ color: C.m }}>
        Stay tuned for exciting insights into institutional DeFi and blockchain innovation
      </p>
    </div>
  );
};
