import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="w-full bg-[#F9F9F9]">

      {/* Story Intro */}
      <div className="max-w-4xl mx-auto text-center py-28 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#1B1B1B] mb-6">
          My Travel Story
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Every journey begins with curiosity, courage, and a desire to explore beyond comfort.
        </p>
      </div>

      {/* Section 1 */}
      <div
        ref={(el) => (sectionsRef.current[0] = el)}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center py-24 px-6"
      >
        <img
          src="/images/about1.webp"
          alt="First Journey"
          className="rounded-3xl shadow-2xl w-full h-[420px] object-cover"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4">The First Journey</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            It all started with my first trip to the mountains. The silence, the
            cold air, and endless horizons changed the way I saw the world.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div
        ref={(el) => (sectionsRef.current[1] = el)}
        className="bg-white"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center py-24 px-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Exploring the World</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cities, cultures, and conversations with strangers taught me that
              travel is more about people than places.
            </p>
          </div>
          <img
            src="/images/about2.webp"
            alt="Exploration"
            className="rounded-3xl shadow-2xl w-full h-[420px] object-cover"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div
        ref={(el) => (sectionsRef.current[2] = el)}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center py-24 px-6"
      >
        <img
          src="/images/about3.webp"
          alt="Influencer Life"
          className="rounded-3xl shadow-2xl w-full h-[420px] object-cover"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4">Sharing My Stories</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Today, I document journeys to inspire others to step outside, take
            risks, and create stories of their own.
          </p>
        </div>
      </div>
    </section>
  );
}
