import { motion } from "framer-motion";
import { Header } from "../Header/Header";
import { GlowingText } from "../Animation/GlowingText";
import TeamSection from "./TeamSection";
import AboutIntro from "./AboutIntro";
import MissionStatement from "./MissionStatement";
import SolutionsSection from "./SolutionsSection";
import SecuritySection from "./SecuritySection";


export default function AboutHero() {
  const peopleImagePath = "/images/about/about_image.jpeg";

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section with increased spacing */}
      <motion.div
        className="w-full min-h-[85vh] bg-black flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated background gradients */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(28, 163, 110, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(28, 163, 110, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(28, 163, 110, 0.12) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(28, 163, 110, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(28, 163, 110, 0.12) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(28, 163, 110, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(28, 163, 110, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(28, 163, 110, 0.08) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-32 left-20 w-3 h-3 bg-[#1CA36E] rounded-full opacity-50"
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-40 w-4 h-4 bg-white rounded-full opacity-30"
          animate={{
            y: [0, 30, 0],
            x: [0, -25, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#1CA36E] rounded-full opacity-40"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <motion.div
          className="flex text-center flex-col items-center justify-center relative z-10 px-6 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="lg:text-7xl text-5xl font-bold leading-tight mb-8"
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
            className="text-2xl text-[#D5D5D5] max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Bridging traditional finance with decentralized infrastructure for institutional innovation
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Main content sections with strategic backgrounds */}
      <div className="w-full">
        {/* Team Section - Black background */}
        <div className="bg-black py-32">
          <TeamSection peopleImagePath={peopleImagePath} />
        </div>
        
        {/* About Intro - Subtle gradient background */}
        <div className="bg-gradient-to-b from-black via-[#0A0A0A] to-black py-32">
          <AboutIntro />
        </div>
        
        {/* Mission Statement - Black background with spacing */}
        <div className="bg-black py-32">
          <MissionStatement />
        </div>
        
        {/* Solutions Section - Subtle radial gradient background */}
        <div className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black" />
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(circle at 50% 0%, rgba(28, 163, 110, 0.08) 0%, transparent 60%)"
            }}
          />
          <div className="relative z-10">
            <SolutionsSection />
          </div>
        </div>
        
        {/* Security Section - Dark gradient background */}
        <div className="bg-gradient-to-b from-black via-[#0A0A0A] to-[#050505] py-32 pb-40">
          <SecuritySection />
        </div>
      </div>
    </div>
  );
}
