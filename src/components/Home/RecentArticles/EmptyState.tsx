import { motion } from "framer-motion";

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
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
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

export default EmptyState;