import { motion } from "framer-motion";
import { Header } from "../Header/Header";
import { GlowingText } from "../Animation/GlowingText";
import TeamSection from "./TeamSection";
import MissionStatement from "./MissionStatement";
import SolutionsSection from "./SolutionsSection";
import SecuritySection from "./SecuritySection";


export default function AboutHero() {
  const peopleImagePath = "/images/about/about_image.jpeg";

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20"></div>
        {/* Enhanced Hero Section */}
        <motion.div
          className="w-full h-[500px] bg-black flex items-center justify-center relative overflow-hidden pt-20"
        >
          {/* Animated background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(28, 163, 110, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(28, 163, 110, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(28, 163, 110, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(28, 163, 110, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(28, 163, 110, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-[#1CA36E] rounded-full opacity-60"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-6 h-6 bg-white rounded-full opacity-40"
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <motion.div
          className="flex text-center flex-col items-center justify-center relative z-10 px-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="lg:text-6xl text-4xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We Are on a Mission to <GlowingText className="text-[#1CA36E]">Maximize</GlowingText>
            <br />
            The <GlowingText className="text-[#1CA36E]">Efficiency</GlowingText> of the
            <br />
            Global Financial Ecosystem
          </motion.h1>
          <motion.p
            className="text-xl text-[#D5D5D5] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Bridging traditional finance with decentralized infrastructure for institutional innovation
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="w-full bg-black py-20 relative overflow-hidden">
        {/* Team Section */}
        <TeamSection peopleImagePath={peopleImagePath} />
        
        {/* Mission Statement */}
        <MissionStatement />
        
        {/* Solutions Section */}
        <SolutionsSection />
        
        {/* Security Section */}
        <SecuritySection />
      </div>
    </div>
  );
}