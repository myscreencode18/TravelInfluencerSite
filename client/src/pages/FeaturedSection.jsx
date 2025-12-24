import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const featuredContent = [
  { id: 1, title: "Santorini Sunsets", category: "Romance", image: "/images/santorini.webp", size: "large", description: "Experience magical sunsets in Santorini with breathtaking ocean views." },
  { id: 2, title: "Himalayan Treks", category: "Adventure", image: "/images/himalaya.webp", size: "medium", description: "High altitude treks, snow peaks, and unforgettable adventure." },
  { id: 3, title: "Venetian Nights", category: "Culture", image: "/images/venice.webp", size: "small", description: "Explore romantic canals and historic architecture in Venice." },
  { id: 4, title: "Tokyo Streets", category: "Urban", image: "/images/tokyo.webp", size: "medium", description: "Dive into the bustling streets and neon lights of Tokyo." },
  { id: 5, title: "Desert Dreams", category: "Exploration", image: "/images/desert.webp", size: "large", description: "Vast deserts and endless horizons, perfect for adventure seekers." },
  { id: 6, title: "Bali Bliss", category: "Nature", image: "/images/bali.webp", size: "small", description: "Tropical paradise with serene beaches and lush landscapes." },
  { id: 7, title: "Paris Evenings", category: "Romance", image: "/images/paris.webp", size: "medium", description: "Romantic evenings under the lights of the Eiffel Tower." },
  { id: 8, title: "Amazon Jungle", category: "Adventure", image: "/images/amazon.webp", size: "small", description: "Dense jungles and exotic wildlife for the bold traveler." },
];

const sizeClasses = {
  small: "sm:row-span-1 sm:col-span-1 sm:h-40",
  medium: "sm:row-span-2 sm:col-span-2 sm:h-80",
  large: "sm:row-span-2 sm:col-span-3 sm:h-96",
};

const swipeConfidenceThreshold = 10000; 
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const FeaturedContent = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % featuredContent.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-gray-800">
        Featured Journeys
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[200px] gap-4 sm:gap-6 max-w-7xl mx-auto">
        {featuredContent.map((item, index) => (
          <motion.div
            key={item.id}
            className={`relative rounded-2xl overflow-hidden shadow-lg h-60 sm:h-auto cursor-pointer ${sizeClasses[item.size]}`}
            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedIndex(index)}
          >
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <span className="px-2 py-1 bg-white/30 text-xs rounded-full backdrop-blur-sm">
                {item.category}
              </span>
              <h3 className="text-base sm:text-lg font-semibold mt-2">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal with swipe */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key={featuredContent[selectedIndex].id}
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-xl relative"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) handleNext();
                else if (swipe > swipeConfidenceThreshold) handlePrev();
              }}
            >
              <img
                src={featuredContent[selectedIndex].image}
                alt={featuredContent[selectedIndex].title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{featuredContent[selectedIndex].title}</h2>
                <p className="text-gray-600">{featuredContent[selectedIndex].description}</p>
                <button
                  className="mt-4 px-4 py-2 bg-black text-white rounded-lg"
                  onClick={() => setSelectedIndex(null)}
                >
                  Close
                </button>
              </div>

              {/* Navigation */}
              <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-3xl text-white bg-black/30 px-3 py-1 rounded-full"
                onClick={handlePrev}
              >
                ‹
              </button>
              <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-3xl text-white bg-black/30 px-3 py-1 rounded-full"
                onClick={handleNext}
              >
                ›
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedContent;
