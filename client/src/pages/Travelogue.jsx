import React from "react";
import { useNavigate } from "react-router-dom";
import blogs from "../data/blogs";

const Travelogue = () => {
  const featuredPost = blogs.find((post) => post.featured);
  const otherPosts = blogs.filter((post) => !post.featured);
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50">

    
   <section className="relative h-screen flex flex-col justify-center items-center bg-gray-900 text-white overflow-hidden">
  
  <div className="absolute inset-0 bg-[url('/images/blog-covers.webp')] bg-cover bg-center scale-110 md:scale-100 transform-gpu" style={{ willChange: 'transform' }}></div>

 
  <div className="absolute inset-0 bg-black/60"></div>

 
  <div className="relative z-10 text-center px-6 max-w-3xl space-y-6">
    <p className="uppercase tracking-[0.35em] text-xs text-gray-300">
      Travelogue
    </p>

    <h2 className="text-4xl md:text-6xl font-light leading-snug">
      Every place leaves a mark.
      <br />
      <span className="font-semibold text-white">Some change you forever.</span>
    </h2>

    <p className="text-sm text-gray-400 italic">
      Scroll down to enter the story ↓
    </p>
  </div>

  {/* Scroll indicator animation with bottom spacing */}
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
    <svg className="w-6 h-6 text-gray-400 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</section>



      {/* --- Featured Hero --- */}
      {featuredPost && (
        <div className="relative -mt-16 mb-20 max-w-6xl mx-auto">
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="w-full h-[75vh] object-cover rounded-3xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-transparent rounded-3xl flex flex-col justify-center items-center text-center px-8 md:px-16">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              {featuredPost.title}
            </h2>
            <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-3xl italic leading-relaxed">
              {featuredPost.excerpt}
            </p>
            <button className="mt-8 px-8 py-3 bg-white/90 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-white transition transform hover:scale-105">
              Read Story
            </button>
          </div>
        </div>
      )}

      {/* --- Blog Grid --- */}
      <div className="max-w-7xl mx-auto px-4 grid gap-10 md:grid-cols-2 lg:grid-cols-3 auto-rows-[400px] mt-16">
        {otherPosts.map((post) => (
          <div
            key={post.id}
            className="relative group rounded-3xl overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={post.heroImage}
              alt={post.title}
              className="w-full h-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6 rounded-3xl">
              <h3 className="text-2xl font-bold text-white">{post.title}</h3>
              <p className="text-sm text-gray-200 mt-2">{post.excerpt}</p>
              <button
                onClick={() => navigate(`/blog/${post.id}`)}
                className="mt-4 text-sm px-5 py-2 bg-white/90 text-gray-900 rounded-full font-semibold hover:bg-white transition transform hover:scale-105"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 mb-16 text-center max-w-4xl mx-auto">
        <p className="text-gray-500 mb-4 italic">Every trip starts with a story...</p>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          Every trip is a story — want to join the next chapter?
        </h3>
        <button className="mt-8 px-10 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition transform hover:scale-105">
          Join My Adventures
        </button>
      </div>

    </section>
  );
};

export default Travelogue;
