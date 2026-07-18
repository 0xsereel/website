import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedCard } from "../../Animation/AnimatedCard";

export interface BlogTypes {
  id: number;
  date?: string;
  title: string;
  image: string;
  content: string;
  summary?: string;
}

// Enhanced Blog Card Component
const BlogCard = ({ blog, index }: { blog: BlogTypes; index: number }) => {
  return (
    <AnimatedCard className="lg:w-[400px] w-full group" delay={index * 0.1}>
      <Link to={`/blog/${blog.id}`} className="block">
        <motion.div
          className="bg-gradient-to-br from-[#1CA36E]/5 to-white/5 rounded-xl overflow-hidden border border-[#202026] hover:border-[#1CA36E]/50 transition-all duration-300"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#1CA36E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 px-6 pb-5 pt-4"
                style={{ display: "flex", justifyContent: "center" }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-gilroy-bold text-lg line-clamp-2" style={{ margin: 0, textAlign: "center", maxWidth: 320 }}>
                  {blog.title}
                </h3>
              </motion.div>
            </motion.div>
          </div>

          <div className="px-7 pb-6 pt-5" style={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 168 }}>
            <motion.div
              className="mb-4"
              style={{ width: "100%", maxWidth: 320, margin: "0 auto" }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-[#D5D5D5] text-sm line-clamp-3 leading-relaxed" style={{ margin: 0 }}>
                {blog.summary ||
                  blog.content
                    .substring(0, 150)
                    .replace(/[^\w\s]/g, "")}
                ...
              </p>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-2 text-[#1CA36E] font-gilroy-medium text-sm group-hover:gap-3 transition-all duration-300"
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
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
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

export default BlogCard;
