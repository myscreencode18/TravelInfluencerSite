import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

const AdventureInvitation = () => {

     const navigate = useNavigate()
  const pastTrips = [
    "/images/adventure1.webp",
    "/images/adventure2.webp",
    "/images/adventure3.webp",
    "/images/adventure4.webp",  

  ];

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-white py-16">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/group-adventure.webp"
            alt="Group Adventure"
            className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Right Text */}
        <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Join My Next Adventure
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            Ever dreamed of exploring breathtaking destinations with like-minded
            travelers? Come with me on curated group trips filled with laughter,
            culture, and unforgettable memories. Whether you're a solo traveler
            or with friends—this journey is for you.
          </p>
          <button onClick={() => navigate("/UpcomingTrips")} className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-xl shadow-md hover:bg-blue-700 transition transform hover:scale-105">
            See Upcoming Trips
          </button>
          <p className="text-sm text-gray-500">
            Limited spots available. Don’t miss out!
          </p>
        </div>
      </div>

      {/* Past Trips Carousel */}
      <div className="max-w-7xl mx-auto mt-16 px-6 lg:px-12">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
          Memories from Past Adventures ✨
        </h3>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {pastTrips.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-60 md:h-72 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-500">
                <img
                  src={src}
                  alt={`Trip memory ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AdventureInvitation;
