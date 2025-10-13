
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

// Team Section Component
const TeamSection = ({ peopleImagePath }: { peopleImagePath: string }) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="w-full flex items-center justify-center mb-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="w-[95%] max-w-4xl mx-auto">

        <motion.div
          className="relative group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="relative overflow-hidden rounded-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={peopleImagePath}
              className="w-full max-w-[800px] mx-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
              alt="Team photo"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                (target.nextSibling as HTMLElement).style.display = 'flex';
              }}
            />
            
            {/* Fallback placeholder */}
            <div className="w-full h-64 bg-[#202026] rounded-2xl items-center justify-center text-[#969696] hidden">
              <div className="text-center">
                <div className="text-4xl mb-2">👥</div>
                <p>Team Photo</p>
              </div>
            </div>
            
            {/* Overlay effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[#1CA36E]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            
            {/* Glowing border */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent"
              whileHover={{ 
                borderColor: "#1CA36E",
                boxShadow: "0 0 30px rgba(28, 163, 110, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TeamSection;