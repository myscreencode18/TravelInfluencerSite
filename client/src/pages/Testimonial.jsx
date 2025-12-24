import React from "react";
import { FaUsers, FaHeart, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  { id: 1, name: "Alice Johnson", role: "Travel Blogger", image: "/images/testi1.webp", quote: "This influencer inspires me to travel more every day!" },
  { id: 2, name: "David Smith", role: "Photographer", image: "/images/testi2.webp", quote: "Amazing storytelling through visuals. Truly professional." },
  { id: 3, name: "Sophia Lee", role: "Travel Enthusiast", image: "/images/testi3.webp", quote: "Every post feels like a personal journey I want to be part of." },
  { id: 4, name: "Michael Brown", role: "Content Creator", image: "/images/testi4.webp", quote: "Creative, engaging, and authentic. A must-follow!" },
];

const socialStats = [
  { id: 1, icon: <FaUsers />, label: "Followers", value: "500K+" },
  { id: 2, icon: <FaHeart />, label: "Engagements", value: "10M+" },
  { id: 3, icon: <FaGlobe />, label: "Destinations Covered", value: "120+" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">What People Say</h2>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {testimonials.map((t, idx) => {
          const isEven = idx % 2 === 0;
          const topBg = isEven ? "bg-white" : "bg-blue-100";
          const bottomBg = isEven ? "bg-blue-100" : "bg-white";

          return (
            <motion.div
              key={t.id}
              className="rounded-2xl overflow-hidden shadow-lg flex flex-col h-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              {/* Top Box: Quote */}
              <div className={`flex-1 p-8 ${topBg} rounded-t-2xl relative`}>
                <span className="text-6xl text-blue-300 absolute -top-6 left-4">&#8220;</span>
                <p className="text-gray-700 text-lg mt-4">{t.quote}</p>
              </div>

              {/* Bottom Box: Image, Name, Role */}
              <div className={`flex flex-col items-center p-6 relative ${bottomBg} rounded-b-2xl`}>
                <div className="relative">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
                  />
                  {/* Decorative Shape/Icon */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full" />
                </div>
                <h3 className="mt-3 font-semibold text-lg">{t.name}</h3>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Social Proof Grid */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
        {socialStats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6">
            <div className="text-3xl text-blue-500 mb-2">{stat.icon}</div>
            <p className="text-xl font-bold">{stat.value}</p>
            <p className="text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
