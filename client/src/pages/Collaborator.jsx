import React from "react";
import { FaCameraRetro, FaBullhorn, FaPenFancy } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const partners = [
  { name: "BrandOne", logo: "/images/colab1.webp" },
  { name: "BrandTwo", logo: "/images/colab2.webp" },
  { name: "BrandThree", logo: "/images/conti3.webp" },
  { name: "BrandFour", logo: "/images/conti4.webp" },
  { name: "BrandFive", logo: "/images/conti5.webp" },
  { name: "BrandSix", logo: "/images/conti6.webp" },
];

const services = [
  {
    title: "Sponsored Content",
    description: "Collaborate on creative campaigns that reach a wide audience authentically.",
    icon: <FaBullhorn size={28} className="text-blue-500" />,
  },
  {
    title: "Destination Photography",
    description: "High-quality photography showcasing destinations in their best light.",
    icon: <FaCameraRetro size={28} className="text-blue-500" />,
  },
  {
    title: "Content Creation",
    description: "Professional video, blog, and social media content tailored to your brand.",
    icon: <FaPenFancy size={28} className="text-blue-500" />,
  },
];

const Collaborations = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Central Headline */}
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Let's Create Together</h2>

        {/* Partner Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center mb-12 ">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.logo}
              alt={partner.name}
              className="grayscale hover:grayscale-0 transition duration-300 max-h-20 object-contain rounded-full"
            />
          ))}
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start space-y-4 hover:shadow-2xl transition"
            >
              <div className="p-4 bg-blue-50 rounded-full">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <button
         onClick={() => navigate("/contact")}
        className="px-8 py-3 bg-blue-500 text-white rounded-full text-lg font-semibold hover:bg-blue-600 transition">
          Inquire Now
        </button>
      </div>
    </section>
  );
};

export default Collaborations;
