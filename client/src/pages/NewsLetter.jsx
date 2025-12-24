import React, { useState } from "react";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your subscription logic here
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <section className="relative bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?travel,adventure')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center py-24 px-6">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join the Journey
        </motion.h2>

        <motion.p
          className="text-white/90 text-lg sm:text-xl mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get exclusive travel tips, guides, and inspiration delivered straight to your inbox.
        </motion.p>

        {/* Email Form */}
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-lg sm:rounded-r-none w-full sm:w-auto flex-1 focus:outline-none"
            required
          />
          <motion.button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg sm:rounded-l-none hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </form>

        {/* Social Proof */}
        <motion.p
          className="text-white/80 mt-4 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Join over <span className="font-bold">50,000</span> other adventurers
        </motion.p>
      </div>
    </section>
  );
};

export default NewsletterSection;
