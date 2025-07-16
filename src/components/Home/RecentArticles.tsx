// src/components/Home/RecentArticles.tsx
import blogs from "../../Blog Data/Blogs.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { AnimatedCard } from "../Animation/AnimatedCard";
import { GlowingText } from "../Animation/GlowingText";

interface Blog {
  id: number;
  title: string;
  image: string;
  content: string;
  summary?: string;
}

const typedBlogs: Blog[] = blogs as Blog[];

export const RecentArticles = () => {
  const recentBlogs = typedBlogs.slice(0, 3);

  return (
    <section className="w-full flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background animation */}
      {/* <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#1CA36E]/5 via-transparent to-[#1CA36E]/10"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      /> */}
      
      <div className="w-[95%] mx-auto flex justify-center items-center flex-col relative z-10">
        {/* Enhanced Title */}
        <AnimatedSection className="w-full flex items-center justify-center flex-col">
          <motion.h3 
            className="lg:text-5xl text-3xl font-gilroy-bold text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlowingText className="text-[#1CA36E]">Recent</GlowingText> Articles
          </motion.h3>
          <motion.p 
            className="text-center text-[#D5D5D5] text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Stay informed with the latest insights in institutional DeFi and blockchain innovation
          </motion.p>
        </AnimatedSection>

        <div className="w-full flex items-center justify-center mt-16 gap-8 lg:flex-row flex-col">
          {recentBlogs.length > 0 ? (
            recentBlogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))
          ) : (
            <EmptyState />
          )}
        </div>

        {/* View All Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1CA36E] to-[#00FFB2] text-white px-8 py-3 rounded-full font-gilroy-medium hover:from-[#00FFB2] hover:to-[#1CA36E] transition-all duration-300"
            >
              View All Articles
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Blog Card Component
const BlogCard = ({ blog, index }: { blog: Blog; index: number }) => {
  return (
    <AnimatedCard
      className="lg:w-[400px] w-full group"
      delay={index * 0.1}
    >
      <Link to={`/blog/${blog.id}`} className="block">
        <motion.div
          className="bg-gradient-to-br from-[#1CA36E]/5 to-white/5 rounded-xl overflow-hidden border border-[#202026] hover:border-[#1CA36E]/50 transition-all duration-300"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
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
              <p className="text-[#D5D5D5] text-sm line-clamp-3 leading-relaxed">
                {blog.summary || blog.content.substring(0, 150).replace(/[^\w\s]/g, "")}...
              </p>
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
        </motion.div>
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
        No Articles Found
      </motion.h3>
      <motion.p
        className="text-[#D5D5D5] text-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Stay tuned for exciting insights into institutional DeFi
      </motion.p>
    </motion.div>
  );
};
