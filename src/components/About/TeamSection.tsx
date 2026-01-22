
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const TeamSection = ({ peopleImagePath }: { peopleImagePath: string }) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="w-full flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-5xl mx-auto px-6">

        <motion.div
          className="relative group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="relative overflow-hidden rounded-3xl"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <img
              src={peopleImagePath}
              className="w-full max-w-[900px] mx-auto rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              alt="Team photo"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                (target.nextSibling as HTMLElement).style.display = 'flex';
              }}
            />
            
            {/* Fallback placeholder */}
            <div className="w-full h-96 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-3xl items-center justify-center text-[#969696] hidden">
              <div className="text-center">
                <div className="text-6xl mb-4">👥</div>
                <p className="text-xl">Team Photo</p>
              </div>
            </div>
            
            {/* Subtle overlay effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[#1CA36E]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            
            {/* Glowing border on hover */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-transparent"
              whileHover={{ 
                borderColor: "rgba(28, 163, 110, 0.4)",
                boxShadow: "0 0 40px rgba(28, 163, 110, 0.2)"
              }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TeamSection;
