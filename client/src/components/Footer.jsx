import React from "react";
import { FaInstagram, FaYoutube, FaTiktok, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate()

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Left Column: Brand & Socials */}
        <div className="space-y-5">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            TravelInfluence
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Inspiring journeys and authentic experiences across the globe.
          </p>
          <div className="flex space-x-5">
            <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition transform hover:scale-110">
              <FaInstagram size={24} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-red-600 transition transform hover:scale-110">
              <FaYoutube size={24} />
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-gray-300 transition transform hover:scale-110">
              <FaTiktok size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition transform hover:scale-110">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="space-y-5">
          <h3 className="text-2xl font-semibold text-white">Quick Links</h3>
          <ul className="space-y-3">
            {["Blog", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Newsletter */}
        <div className="space-y-6">
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-white">✈️ Join the Journey</h3>
            <p className="text-gray-400 mt-2">
              Subscribe for travel tips, guides, and inspiration straight to your inbox.
            </p>
            <form className="mt-4 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 mt-3 text-sm">
              Join over <span className="text-white font-semibold">50,000+</span> adventurers.
            </p>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 mt-12 py-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} TravelInfluence. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-3">
          <a href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
