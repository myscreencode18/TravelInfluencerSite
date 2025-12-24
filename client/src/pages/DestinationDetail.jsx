import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const destinations = [
  { 
    id: 1, 
    name: "Paris, France", 
    image: "/images/paris1.webp", 
    description: "The city of lights and love, famous for its iconic landmarks like the Eiffel Tower, Louvre Museum, and charming streets of Montmartre.",
    gallery: [
      "/images/paris2.webp",
      "/images/paris3.webp",
      "/images/paris4.webp",
    ],
    tips: [
      "Visit the Louvre early to avoid crowds.",
      "Take a Seine river cruise at sunset.",
      "Explore hidden cafes in Le Marais."
    ]
  },
  { 
    id: 2, 
    name: "Tokyo, Japan", 
    image: "/images/tokyo1.webp", 
    description: "A vibrant city blending ultra-modern skyscrapers with traditional temples and gardens. Famous for Shibuya Crossing, sushi, and cherry blossoms.",
    gallery: [
      "/images/tokyo2.webp",
      "/images/tokyo3.webp",
      "/images/tokyo4.webp",
    ],
    tips: [
      "Use a Suica card for easy travel on trains.",
      "Visit temples early to avoid tourists.",
      "Try street food at Tsukiji Market."
    ]
  },
  { 
    id: 3, 
    name: "New York, USA", 
    image: "/images/york1.webp", 
    description: "The city that never sleeps. Explore iconic landmarks like Times Square, Central Park, Brooklyn Bridge, and diverse cultural neighborhoods.",
    gallery: [
      "/images/york2.webp",
      "/images/york3.webp",
      "/images/york4.webp",
    ],
    tips: [
      "Walk around Central Park for free sightseeing.",
      "Visit observation decks for panoramic views.",
      "Try local bagels and street food."
    ]
  }
];

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find((d) => d.id === parseInt(id));
  const [activeTab, setActiveTab] = useState("overview");

  if (!destination) return <p className="text-center mt-20">Destination not found</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <img src={destination.image} alt={destination.name} className="w-full h-96 object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl text-white font-bold text-center">{destination.name}</h1>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <button
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>

      {/* Tabs Section */}
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <div className="flex border-b border-gray-300 mb-6">
          {["overview", "gallery", "tips"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 font-semibold ${
                activeTab === tab ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-gray-700 text-lg"
            >
              {destination.description}
            </motion.div>
          )}

          {activeTab === "gallery" && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {destination.gallery.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </motion.div>
          )}

          {activeTab === "tips" && (
            <motion.ul
              key="tips"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="list-disc list-inside text-gray-700"
            >
              {destination.tips.map((tip, i) => (
                <li key={i} className="mb-2">{tip}</li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>

      {/* Related Destinations */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <h2 className="text-2xl font-bold mb-6">You might also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations
            .filter((d) => d.id !== destination.id)
            .map((d) => (
              <motion.div
                key={d.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.03 }}
                onClick={() => navigate(`/destination/${d.id}`)}
              >
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{d.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{d.description}</p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  );
};

export default DestinationDetail;
