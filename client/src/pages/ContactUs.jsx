import React from "react";

const ContactInfluencer = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-[55vh] w-full">
        <img
          src="/images/contact.webp"
          alt="Travel Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Let’s Create Stories Together
          </h1>
          <p className="text-white/90 mt-4 max-w-2xl">
            For brand collaborations, media features, couple stories or just to
            say hi — I’d love to hear from you.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 py-16 px-6">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ways to Connect</h2>
          <p className="text-gray-600 mb-8">
            I collaborate with brands, tourism boards, couples, and storytellers
            to create cinematic travel experiences. Whether you want to work
            together, feature my journey, or just share your story — let’s talk.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">🤝 Collaborations</h3>
              <p className="text-gray-600">
                Partner with me for brand campaigns, destination promotion, or
                product features.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">🎥 Projects</h3>
              <p className="text-gray-600">
                Let’s work on cinematic travel films, couple stories, or
                creative photography.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">💌 Just Say Hi</h3>
              <p className="text-gray-600">
                Have a question, feedback, or just want to chat? I’d love to
                hear from you.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex gap-6">
            <a
              href="#"
              className="text-gray-800 text-2xl hover:text-black transition"
            >
              🌍 Instagram
            </a>
            <a
              href="#"
              className="text-gray-800 text-2xl hover:text-black transition"
            >
              🎬 YouTube
            </a>
            <a
              href="#"
              className="text-gray-800 text-2xl hover:text-black transition"
            >
              ✉️ Email
            </a>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Let’s Connect
          </h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
            <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none">
              <option>Purpose of Contact</option>
              <option>Collaboration</option>
              <option>Shoot / Story</option>
              <option>Media / Press</option>
              <option>Just Saying Hi</option>
            </select>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Let’s Connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfluencer;
