// src/components/Contact/ContactContent.tsx
import { Button } from "../Button/Button";
import { IoMailOutline, IoLocationSharp } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "../Animation/AnimatedSection";
import { GlowingText } from "../Animation/GlowingText";

export const ContactContent = () => {
  const contactImagePath = "/images/contact/contact.jpg";

  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (
      form.fname === "" ||
      form.lname === "" ||
      form.email === "" ||
      form.message === ""
    ) {
      setResult("Please fill all the fields");
      return;
    }

    e.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const data = {
      access_key: "4a825a6a-442e-4605-a310-96c8ad3f0854",
      name: form.fname + " " + form.lname,
      email: form.email,
      message: form.message,
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

      const resultData = await response.json();

      if (resultData.success) {
        setResult("Thank you for contacting us!");
        setForm({ fname: "", lname: "", email: "", message: "" });
      } else {
        setResult(
          resultData.message || "Something went wrong. Please try again."
        );
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setResult("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Enhanced Hero Section */}
      <motion.div
        className="w-full lg:h-[500px] h-[300px] bg-black flex items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 30%, rgba(28, 163, 110, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(28, 163, 110, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 30%, rgba(28, 163, 110, 0.2) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(28, 163, 110, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(28, 163, 110, 0.2) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(28, 163, 110, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 30%, rgba(28, 163, 110, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(28, 163, 110, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-20 w-6 h-6 bg-[#1CA36E] rounded-full opacity-50"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-8 h-8 bg-white rounded-full opacity-30"
          animate={{
            y: [0, 25, 0],
            x: [0, -25, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <motion.div
          className="text-center relative z-10 px-5"
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
            <GlowingText className="text-[#1CA36E]">Get In</GlowingText> Touch
          </motion.h1>
          <motion.p
            className="text-xl text-[#D5D5D5] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to transform your institution with cutting-edge DeFi solutions? Let's start the conversation.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Enhanced Content Section */}
      <div className="w-full bg-black py-20 px-5 relative overflow-hidden">
        {/* Background animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#1CA36E]/3 via-transparent to-[#1CA36E]/5"
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="lg:w-[95%] w-full max-w-7xl mx-auto flex items-start justify-between lg:flex-row flex-col relative z-10">
          {/* Left side - Form */}
          <div className="lg:w-[55%] w-full">
            <AnimatedSection>
              <motion.div
                className="w-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.h2 
                  className="text-4xl font-gilroy-bold mb-4"
                  whileHover={{ 
                    textShadow: "0 0 20px rgba(28, 163, 110, 0.8)",
                    scale: 1.02
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Let's <GlowingText className="text-[#1CA36E]">Talk</GlowingText>
                </motion.h2>
                <motion.p 
                  className="text-xl text-[#D5D5D5] mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Get in touch with us using the enquiry form or{" "}
                  <br className="lg:block hidden" /> contact details below
                </motion.p>
              </motion.div>

              {/* Enhanced Result Message */}
              {result && (
                <motion.div
                  className="w-full mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className={`p-4 rounded-lg border ${
                      result.includes("Thank you") 
                        ? "bg-[#1CA36E]/10 border-[#1CA36E]/30 text-[#1CA36E]" 
                        : result.includes("Please fill") || result.includes("error")
                        ? "bg-red-500/10 border-red-500/30 text-red-400"
                        : "bg-blue-500/10 border-blue-500/30 text-blue-400"
                    }`}
                    animate={result.includes("Thank you") ? {
                      boxShadow: [
                        "0 0 10px rgba(28, 163, 110, 0.3)",
                        "0 0 20px rgba(28, 163, 110, 0.5)",
                        "0 0 10px rgba(28, 163, 110, 0.3)"
                      ]
                    } : {}}
                    transition={{ duration: 1.5, repeat: result.includes("Thank you") ? 3 : 0 }}
                  >
                    <p className="text-lg font-gilroy-medium">{result}</p>
                  </motion.div>
                </motion.div>
              )}

              {/* Enhanced Form */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <form className="w-full space-y-6" onSubmit={handleSubmit}>
                  {/* Name Fields */}
                  <div className="w-full flex items-center justify-between gap-4">
                    <motion.div 
                      className="w-[48%]"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label
                        htmlFor="fname"
                        className="text-lg font-gilroy-medium text-white mb-2 block"
                      >
                        First Name
                      </label>
                      <motion.input
                        type="text"
                        name="fname"
                        id="fname"
                        className="w-full mt-2 border border-[#202026] rounded-lg p-4 outline-none bg-gradient-to-r from-black/90 to-[#1CA36E]/5 text-white placeholder-[#969696] focus:border-[#1CA36E]/50 transition-all duration-300"
                        placeholder="John"
                        value={form.fname}
                        onChange={handleChange}
                        whileFocus={{ 
                          scale: 1.02,
                          boxShadow: "0 0 20px rgba(28, 163, 110, 0.2)"
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>

                    <motion.div 
                      className="w-[48%]"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label
                        htmlFor="lname"
                        className="text-lg font-gilroy-medium text-white mb-2 block"
                      >
                        Last Name
                      </label>
                      <motion.input
                        type="text"
                        name="lname"
                        id="lname"
                        className="w-full mt-2 border border-[#202026] rounded-lg p-4 outline-none bg-gradient-to-r from-black/90 to-[#1CA36E]/5 text-white placeholder-[#969696] focus:border-[#1CA36E]/50 transition-all duration-300"
                        placeholder="Doe"
                        value={form.lname}
                        onChange={handleChange}
                        whileFocus={{ 
                          scale: 1.02,
                          boxShadow: "0 0 20px rgba(28, 163, 110, 0.2)"
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  </div>

                  {/* Email Field */}
                  <motion.div 
                    className="w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="email"
                      className="text-lg font-gilroy-medium text-white mb-2 block"
                    >
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full mt-2 border border-[#202026] rounded-lg p-4 outline-none bg-gradient-to-r from-black/90 to-[#1CA36E]/5 text-white placeholder-[#969696] focus:border-[#1CA36E]/50 transition-all duration-300"
                      placeholder="john@yourcompany.com"
                      value={form.email}
                      onChange={handleChange}
                      whileFocus={{ 
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(28, 163, 110, 0.2)"
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>

                  {/* Message Field */}
                  <motion.div 
                    className="w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="message"
                      className="text-lg font-gilroy-medium text-white mb-2 block"
                    >
                      Message
                    </label>
                    <motion.textarea
                      name="message"
                      id="message"
                      rows={6}
                      className="w-full mt-2 border border-[#202026] rounded-lg p-4 outline-none resize-none bg-gradient-to-r from-black/90 to-[#1CA36E]/5 text-white placeholder-[#969696] focus:border-[#1CA36E]/50 transition-all duration-300"
                      placeholder="Tell us about your institution's DeFi needs..."
                      value={form.message}
                      onChange={handleChange}
                      whileFocus={{ 
                        scale: 1.01,
                        boxShadow: "0 0 20px rgba(28, 163, 110, 0.2)"
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div 
                    className="w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button 
                        type="submit" 
                        className="w-full"
                        disabled={loading}
                      >
                        <Button>
                          {loading ? "Sending..." : "Send Message"}
                        </Button>
                      </button>
                    </motion.div>
                  </motion.div>
                </form>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Right side - Image and Contact Info */}
          <div className="lg:w-[40%] w-full lg:mt-0 mt-16">
            <AnimatedSection>
              <motion.div
                className="w-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Enhanced Image */}
                <motion.div
                  className="w-full mb-8 relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={contactImagePath}
                      alt="Contact Sereel Team"
                      className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    
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
                  </div>
                </motion.div>

                {/* Enhanced Contact Info */}
                <div className="space-y-6">
                  <motion.div
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#1CA36E]/5 to-white/5 rounded-lg border border-[#202026] hover:border-[#1CA36E]/30 transition-all duration-300 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div 
                      className="w-12 h-12 border border-[#202026] group-hover:border-[#1CA36E] flex items-center justify-center rounded-full bg-gradient-to-br from-[#1CA36E]/10 to-white/5 group-hover:from-[#1CA36E]/20 group-hover:to-[#1CA36E]/10 transition-all duration-300"
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 0 20px rgba(28, 163, 110, 0.3)"
                      }}
                    >
                      <IoMailOutline className="text-[#1CA36E] text-xl" />
                    </motion.div>
                    <div>
                      <p className="text-[#969696] text-sm mb-1">Email us at</p>
                      <motion.a 
                        href="mailto:team@sereel.com" 
                        className="text-[#1CA36E] text-lg font-gilroy-medium hover:text-[#00FFB2] transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        team@sereel.com
                      </motion.a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#1CA36E]/5 to-white/5 rounded-lg border border-[#202026] hover:border-[#1CA36E]/30 transition-all duration-300 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div 
                      className="w-12 h-12 border border-[#202026] group-hover:border-[#1CA36E] flex items-center justify-center rounded-full bg-gradient-to-br from-[#1CA36E]/10 to-white/5 group-hover:from-[#1CA36E]/20 group-hover:to-[#1CA36E]/10 transition-all duration-300"
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 0 20px rgba(28, 163, 110, 0.3)"
                      }}
                    >
                      <IoLocationSharp className="text-[#1CA36E] text-xl" />
                    </motion.div>
                    <div>
                      <p className="text-[#969696] text-sm mb-1">Visit us in</p>
                      <p className="text-white text-lg font-gilroy-medium">Kigali, Rwanda</p>
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced CTA */}
                <motion.div
                  className="mt-12 p-6 bg-gradient-to-br from-[#1CA36E]/10 to-white/5 rounded-2xl border border-[#1CA36E]/20 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    boxShadow: "0 0 30px rgba(28, 163, 110, 0.2)",
                    borderColor: "rgba(28, 163, 110, 0.4)"
                  }}
                >
                  <motion.h3 
                    className="text-xl font-gilroy-bold mb-2"
                    animate={{ 
                      textShadow: [
                        "0 0 5px rgba(28, 163, 110, 0.5)",
                        "0 0 15px rgba(28, 163, 110, 0.8)",
                        "0 0 5px rgba(28, 163, 110, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Ready to Get Started?
                  </motion.h3>
                  <p className="text-[#D5D5D5] text-sm">
                    Our team typically responds within 24 hours to discuss your institutional DeFi needs.
                  </p>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};
