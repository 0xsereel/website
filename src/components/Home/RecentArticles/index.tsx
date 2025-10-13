import { blogs } from "../../../Blog Data/Blogs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedSection } from "../../Animation/AnimatedSection";
import { GlowingText } from "../../Animation/GlowingText";
import EmptyState from "./EmptyState";
import BlogCard from "./BlogCard";
import { BlogTypes } from "./BlogCard";

const typedBlogs: BlogTypes[] = blogs as BlogTypes[];

export const RecentArticles = () => {
  const recentBlogs = typedBlogs.slice(0, 3);

  return (
    <section className="w-full flex items-center justify-center py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden safe-area-padding">
      {/* Background animation */}
      {/* <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#1CA36E]/5 via-transparent to-[#1CA36E]/10"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      /> */}
      
      <div className="w-[95%] max-w-7xl mx-auto flex justify-center items-center flex-col relative z-10 responsive-container">
        {/* Enhanced Title */}
        <AnimatedSection className="w-full flex items-center justify-center flex-col">
          <motion.h3 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-gilroy-bold text-center mb-4 responsive-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlowingText className="text-[#1CA36E]">Recent</GlowingText> Articles
          </motion.h3>
          <motion.p 
            className="text-center text-[#D5D5D5] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto responsive-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Stay informed with the latest insights in institutional DeFi and blockchain innovation
          </motion.p>
        </AnimatedSection>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3
         gap-6 mt-12 sm:mt-16
         ">
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
          className="mt-8 sm:mt-10 lg:mt-12"
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1CA36E] to-[#00FFB2] text-white px-6 sm:px-8 py-3 rounded-full font-gilroy-medium hover:from-[#00FFB2] hover:to-[#1CA36E] transition-all duration-300 min-h-[44px] text-sm sm:text-base"
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

export default RecentArticles

