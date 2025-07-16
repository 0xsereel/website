import blogs from "../../Blog Data/Blogs.json";
import { Link } from "react-router-dom";
import { NewsLetter } from "../Home/NewsLetter";
import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { AnimatedCard } from "../Animation/AnimatedCard";
import { GlowingText } from "../Animation/GlowingText";
import { useParallax } from "../../hooks/useParallax";
// import { useScrollAnimation } from "../../hooks/useScrollAnimation";

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
  const { ref: heroRef, y: heroY } = useParallax(0.5);
  const { ref: contentRef, y: contentY } = useParallax(0.2);

  return (
    <div className="w-full">
      {/* Enhanced Hero Section */}
      <motion.div 
        ref={heroRef}
        className="w-full lg:h-[500px] h-[300px] bg-black flex items-center justify-center relative overflow-hidden"
        style={{ y: heroY }}
      >
        {/* Remove the individual animated background */}
        {/* Floating elements - keep these for visual interest */}
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-[#1CA36E] rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-6 h-6 bg-white rounded-full opacity-40"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <motion.div
          className="text-center px-5 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="lg:text-6xl text-4xl font-gilroy-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to Our <GlowingText className="text-[#1CA36E]">Blog</GlowingText>
          </motion.h1>
          <motion.p
            className="lg:text-xl text-lg text-[#D5D5D5] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Stay Updated with the Latest Insights in <br className="hidden lg:block" />
            <span className="text-[#1CA36E] font-semibold">Institutional DeFi</span> and <span className="text-[#1CA36E] font-semibold">Blockchain Innovation</span>
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Enhanced Blog Grid */}
      <motion.div 
        ref={contentRef}
        className="w-full bg-black py-20 relative overflow-hidden"
        style={{ y: contentY }}
      >
        {/* Remove the individual background gradient */}

        <div className="w-full max-w-[1200px] mx-auto px-5 relative z-10">
          {typedBlogs.length > 0 ? (
            <>
              {/* Section Header */}
              <AnimatedSection className="text-center mb-16">
                <motion.h2 
                  className="text-4xl font-gilroy-bold mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <GlowingText className="text-[#1CA36E]">Latest</GlowingText> Articles
                </motion.h2>
                <motion.p
                  className="text-[#D5D5D5] text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Insights from the forefront of institutional blockchain adoption
                </motion.p>
              </AnimatedSection>

              {/* Blog Grid - keep as is */}
              <AnimatedSection 
                className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
                variant="stagger"
              >
                {typedBlogs.map((blog, index) => (
                  <BlogCard key={blog.id} blog={blog} index={index} />
                ))}
              </AnimatedSection>
            </>
          ) : (
            <EmptyState />
          )}
        </div>
      </motion.div>

      <NewsLetter />
    </div>
  );
};

// Enhanced Blog Card Component
const BlogCard = ({ blog, index }: { blog: Blog; index: number }) => {
  return (
    <AnimatedCard
      className="group bg-gradient-to-br from-[#1CA36E]/5 to-white/5 rounded-xl overflow-hidden border border-[#202026] hover:border-[#1CA36E]/50 transition-all duration-300"
      delay={index * 0.1}
    >
      <Link to={`/blog/${blog.id}`} className="block">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <motion.div
            className="w-full h-[200px] bg-gradient-to-br from-[#1CA36E]/20 to-[#1CA36E]/10 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              className="w-full h-full object-cover object-center"
              src={blog.image}
              alt={blog.title}
              loading="lazy"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Animated overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[#1CA36E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            
            {/* Title overlay */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-gilroy-bold text-lg line-clamp-2">
                {blog.title}
              </h3>
            </motion.div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            viewport={{ once: true }}
          >
            <p 
              className="text-[#D5D5D5] text-sm line-clamp-3 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.summary }}
            />
          </motion.div>

          {/* Read More Button */}
          <motion.div
            className="flex items-center gap-2 text-[#1CA36E] font-gilroy-medium text-sm group-hover:gap-3 transition-all duration-300"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            viewport={{ once: true }}
          >
            <span>Read More</span>
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </motion.div>
        </div>
      </Link>
    </AnimatedCard>
  );
};

// Empty State Component
const EmptyState = () => {
  return (
    <motion.div
      className="w-full flex items-center justify-center flex-col py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-8xl mb-6"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        📝
      </motion.div>
      <motion.h3 
        className="text-white text-4xl font-gilroy-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        No blogs found at the moment
      </motion.h3>
      <motion.p
        className="text-[#D5D5D5] text-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Stay tuned for exciting insights into institutional DeFi and blockchain innovation
      </motion.p>
    </motion.div>
  );
};
