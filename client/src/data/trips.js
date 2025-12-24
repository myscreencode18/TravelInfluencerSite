// src/data/trips.js
const trips = [
  {
    id: "iceland-northern-lights",
    title: "Chasing Northern Lights",
    name: "Chasing Northern Lights",
    location: "Iceland",
    dates: "Dec 10 – Dec 17, 2025",
    duration: "7 Days / 6 Nights",
    spots: 12,
    image: "/images/upcoming1.webp",
    subtitle: "Witness nature’s most magical light show",
    price: 1400,
    currency: "USD",
    media: [
      { type: "image", src: "/images/light1.webp" }
    ],
    itinerary: [
      { day: 1, title: "Arrival", desc: "Welcome to Iceland" },
      { day: 2, title: "Aurora Hunt", desc: "Chasing lights" },
    ],
    includes: ["Hotel", "Guide"],
    excludes: ["Flights"],
  },

  {
    id: "patagonia-expedition",
    title: "Patagonia Expedition",
    name: "Patagonia Hiking Expedition",
    location: "Argentina & Chile",
    dates: "Jan 5 – Jan 15, 2026",
    duration: "10 Days / 9 Nights",
    spots: 8,
    image: "/images/upcoming2.webp",
    subtitle: "Raw landscapes & epic hikes",
    price: 1200,
    currency: "USD",
    media: [
      { type: "image", src: "/images/patagonia1.webp" }
    ],
    itinerary: [
      { day: 1, title: "Arrival", desc: "Meet the group" },
    ],
    includes: ["Accommodation"],
    excludes: ["Flights"],
  },
];

export default trips;
