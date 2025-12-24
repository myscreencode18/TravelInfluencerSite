// import React from "react";
// import { useNavigate } from "react-router-dom";

// const trips = [
//   {
//     id: 1,
//     title: "Chasing Northern Lights",
//     location: "Iceland",
//     dates: "Dec 10 - Dec 17, 2025",
//     duration: "7 Days",
//     spots: "12 spots left",
//     image: "https://source.unsplash.com/1600x900/?iceland,northernlights",
//   },
//   {
//     id: 2,
//     title: "Patagonia Expedition",
//     location: "Argentina & Chile",
//     dates: "Jan 5 - Jan 15, 2026",
//     duration: "10 Days",
//     spots: "8 spots left",
//     image: "https://source.unsplash.com/1600x900/?patagonia,mountains",
//   },
//   {
//     id: 3,
//     title: "Mystic Temples Journey",
//     location: "Cambodia",
//     dates: "Feb 1 - Feb 8, 2026",
//     duration: "8 Days",
//     spots: "10 spots left",
//     image: "https://source.unsplash.com/1600x900/?angkorwat,temple",
//   },
// ];

// const UpcomingTrips = () => {

//     const navigate = useNavigate()
//   return (
//     <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
//       {trips.map((trip) => (
//         <section
//           key={trip.id}
//           className="relative h-screen w-full flex items-center justify-start text-white snap-start"
//         >
//           {/* Background Image */}
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${trip.image})` }}
//           ></div>

//           {/* Dark Overlay */}
//           <div className="absolute inset-0 bg-black/50"></div>

//           {/* Content */}
//           <div className="relative z-10 px-6 sm:px-12 lg:px-20 max-w-3xl">
//             <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg">
//               {trip.title}
//             </h1>
//             <p className="mt-4 max-w-xl text-lg sm:text-xl text-white/90">
//   A once-in-a-lifetime experience curated and hosted personally — not just a trip, but a story you’ll carry forever.
// </p>
//             <p className="mt-4 text-lg sm:text-xl font-light italic">
//               {trip.location}
//             </p>

//             <div className="mt-6 space-y-2 text-sm sm:text-base">
//               <p>
//                 <span className="font-semibold">Dates:</span> {trip.dates}
//               </p>
//               <p>
//                 <span className="font-semibold">Duration:</span> {trip.duration}
//               </p>
//               <p>
//                 <span className="font-semibold">Availability:</span> {trip.spots}
//               </p>
//             </div>

//             <button onClick={() => navigate(`/trips/${trip.id}`)} className="mt-8 px-6 py-3 bg-white text-black font-semibold text-lg rounded-lg shadow-lg hover:bg-gray-200 transition">
//              Join the Journey →
//             </button>
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// };

// export default UpcomingTrips;
import trips from "../data/trips";
import { useNavigate } from "react-router-dom";

const UpcomingTrips = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
      {trips.map((trip) => (
        <section
          key={trip.id}
          className="relative h-screen w-full flex items-center snap-start text-white"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${trip.image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 px-6 sm:px-12 max-w-3xl">
            <h1 className="text-5xl sm:text-7xl font-extrabold">
              {trip.title}
            </h1>

            <p className="mt-4 text-xl italic">{trip.location}</p>

            <button
              onClick={() => navigate(`/trips/${trip.id}`)}
              className="mt-8 px-6 py-3 bg-white text-black rounded-lg font-semibold"
            >
              Join the Journey →
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default UpcomingTrips;
