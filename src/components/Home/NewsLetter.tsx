// src/components/Home/NewsLetter.tsx
import { useState } from "react";
import { Button } from "../Button/Button";
import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { GlowingText } from "../Animation/GlowingText";

export const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    setMessage("Submitting...");

    const data = {
      access_key: "4a825a6a-442e-4605-a310-96c8ad3f0854",
      email,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setMessage("Thank you for signing up!");
        setEmail("");
      } else {
        setMessage(result.message || "Something went wrong. Please try again.");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full flex items-center justify-center py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden safe-area-padding newsletter-container">
      {/* Enhanced Background */}
      {/* <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 30%, rgba(28, 163, 110, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(28, 163, 110, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 30%, rgba(28, 163, 110, 0.3) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(28, 163, 110, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(28, 163, 110, 0.3) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(28, 163, 110, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 30%, rgba(28, 163, 110, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(28, 163, 110, 0.2) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      /> */}

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-6 h-6 bg-[#1CA36E] rounded-full opacity-60"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-8 h-8 bg-white rounded-full opacity-40"
        animate={{
          y: [0, 25, 0],
          x: [0, -25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="w-[95%] max-w-4xl mx-auto flex justify-center items-center flex-col relative z-10 responsive-container px-4 sm:px-6">
        {/* Enhanced Title */}
        <AnimatedSection className="w-full flex items-center justify-center flex-col">
          <motion.h3
            className="newsletter-title text-center font-gilroy-bold mb-4 responsive-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GlowingText className="text-[#1CA36E]">Newsletter</GlowingText>{" "}
            Signup
          </motion.h3>
          <motion.p
            className="newsletter-description text-center text-[#D5D5D5] max-w-2xl mx-auto responsive-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Stay ahead of the curve with exclusive insights into institutional
            DeFi innovations and market updates
          </motion.p>
        </AnimatedSection>

        {/* Enhanced Form */}
        <motion.form
          className="w-full my-8 sm:my-10 lg:my-12 flex items-center justify-center"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="newsletter-form-container w-full max-w-[600px] bg-gradient-to-r from-black/90 to-[#1CA36E]/10 border border-[#202026]  flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-2 backdrop-blur-sm gap-2 sm:gap-0"
            whileHover={{
              borderColor: "rgba(28, 163, 110, 0.5)",
              boxShadow: "0 0 30px rgba(28, 163, 110, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.input
              type="email"
              className="outline-none border-none text-base sm:text-lg w-full sm:w-[69%] bg-transparent px-4 py-2 sm:py-3 text-white placeholder-[#969696] focus:ring-0 focus:outline-none min-h-[44px]"
              placeholder="hello@yourcompany.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ boxShadow: "none" }}
              whileFocus={{
                // Custom focus styles that don't include an outline
                color: "#ffffff",
                textShadow: "0 0 5px rgba(28, 163, 110, 0.5)",
              }}
              transition={{ duration: 0.2 }}
            />
            <div className="w-full sm:w-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="newsletter-button w-full sm:w-auto px-6 sm:px-6 py-3 sm:py-3 text-sm sm:text-base"
                >
                  {loading ? "Submitting..." : "Get started now"}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.form>

        {/* Enhanced Message Display */}
        {message && (
          <motion.div
            className="text-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className={`text-lg font-gilroy-medium ${
                message.includes("Thank you")
                  ? "text-[#1CA36E]"
                  : message.includes("error") || message.includes("valid")
                  ? "text-red-400"
                  : "text-[#D5D5D5]"
              }`}
              animate={
                message.includes("Thank you")
                  ? {
                      textShadow: [
                        "0 0 5px rgba(28, 163, 110, 0.5)",
                        "0 0 15px rgba(28, 163, 110, 0.8)",
                        "0 0 5px rgba(28, 163, 110, 0.5)",
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 1.5,
                repeat: message.includes("Thank you") ? 3 : 0,
              }}
            >
              {message}
            </motion.p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
