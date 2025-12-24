import { useEffect, useRef, } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const headlineRef = useRef(null);
  const buttonRef = useRef(null);
  const leftImageRef = useRef(null);
const navigate = useNavigate();
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Headline animation
    tl.from(headlineRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
    });

    // Button animation (overlap slightly with headline)
    tl.fromTo(
      buttonRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.5"
    );

    // Smooth zoom-in effect for left image (scroll aware)
    gsap.fromTo(
      leftImageRef.current,
      { scale: 1 },
      {
        scale: 1.1,
        duration: 8,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        scrollTrigger: {
          trigger: leftImageRef.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play pause resume pause",
        },
      }
    );
  }, []);

  return (
    <section className="min-h-screen flex flex-col md:flex-row ">
      {/* Left Column - Travel Image */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto overflow-hidden">
        <img
          ref={leftImageRef}
          src="/hero-left-bg.jpg"
          alt="Scenic travel view"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Column - Content with Background Image */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative flex flex-col justify-center px-8 md:px-16 text-white">
        {/* Background Image */}
        <img
          src="/hero-right-bg.jpg"
          alt="Artistic background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1
            ref={headlineRef}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight"
          >
            Discover Your Next Story
          </h1>
          <p className="text-base md:text-lg mb-8 text-white/90">
            Journey through cultures, colors, and experiences that stay forever.
          </p>
          <div ref={buttonRef} className="flex gap-4">
            
            <button
             onClick={() => navigate("/blog")}
            aria-label="Explore next travel stories"
            className="px-6 md:px-8 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
          >
           Take the Trip
          </button>
          <button  
    onClick={() => navigate("/UpcomingTrips")}
    aria-label="Travel with me"
    className="px-6 md:px-8 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
  >
    Travel With Me
  </button>
          
          </div>
          
        </div>
      </div>
    </section>
  );
}
