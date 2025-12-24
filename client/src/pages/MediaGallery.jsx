import React from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { FiCamera } from "react-icons/fi"; // minimalist camera icon

const galleryImages = [
  { id: 1, src: "/images/media2.webp", caption: "Paris Streets" },
  { id: 2, src: "/images/media1.webp", caption: "Tokyo Skyline" },
  { id: 3, src: "/images/media3.webp", caption: "NYC Central Park" },
  { id: 4, src: "/images/media4.webp", caption: "Bali Beach" },
  { id: 5, src: "/images/media5.webp", caption: "Rome Architecture" },
  { id: 6, src: "/images/media6.webp", caption: "Santorini Sunset" },
  { id: 7, src: "/images/media7.webp", caption: "Amsterdam Canals" },
  { id: 8, src: "/images/media8.webp", caption: "Dubai Cityscape" },
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const MediaGallery = () => {
  return (
    <section className="px-4 sm:px-6 py-12 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">
        The Immersive Masonry
      </h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="flex flex-col gap-4"
      >
        {galleryImages.map((img) => (
          <motion.div
            key={img.id}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full object-cover rounded-lg"
            />
            {/* Hover overlay with icon */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity">
              <FiCamera className="text-white text-3xl mb-2" />
              <span className="text-white text-lg font-semibold">{img.caption}</span>
            </div>
          </motion.div>
        ))}
      </Masonry>
    </section>
  );
};

export default MediaGallery;


// import React from "react";
// import Masonry from "react-masonry-css";
// import { motion } from "framer-motion";
// import { FiCamera } from "react-icons/fi";

// const galleryImages = [
//   { id: 1, src: "https://source.unsplash.com/600x800/?paris", caption: "Paris Streets", type: "portrait" },
//   { id: 2, src: "https://source.unsplash.com/800x600/?tokyo", caption: "Tokyo Skyline", type: "landscape" },
//   { id: 3, src: "https://source.unsplash.com/600x600/?newyork", caption: "NYC Central Park", type: "square" },
//   { id: 4, src: "https://source.unsplash.com/600x900/?bali", caption: "Bali Beach", type: "portrait" },
//   { id: 5, src: "https://source.unsplash.com/700x600/?rome", caption: "Rome Architecture", type: "landscape" },
//   { id: 6, src: "https://source.unsplash.com/600x700/?santorini", caption: "Santorini Sunset", type: "portrait" },
//   { id: 7, src: "https://source.unsplash.com/800x600/?amsterdam", caption: "Amsterdam Canals", type: "landscape" },
//   { id: 8, src: "https://source.unsplash.com/600x600/?dubai", caption: "Dubai Cityscape", type: "square" },
// ];

// const breakpointColumnsObj = {
//   default: 4,
//   1100: 3,
//   700: 2,
//   500: 1
// };

// const MediaGallery = () => {
//   // Function to determine aspect ratio classes
//   const getAspectClass = (type) => {
//     switch(type) {
//       case "portrait": return "aspect-[3/4]";
//       case "landscape": return "aspect-[4/3]";
//       case "square": return "aspect-square";
//       default: return "aspect-square";
//     }
//   };

//   return (
//     <section className="px-4 sm:px-6 py-12 bg-gray-50">
//       <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">
//         The Immersive Masonry
//       </h2>

//       <Masonry
//         breakpointCols={breakpointColumnsObj}
//         className="flex gap-4"
//         columnClassName="flex flex-col gap-4"
//       >
//         {galleryImages.map((img) => (
//           <motion.div
//             key={img.id}
//             className={`relative overflow-hidden rounded-lg cursor-pointer group ${getAspectClass(img.type)}`}
//             whileHover={{ scale: 1.03 }}
//             transition={{ duration: 0.3 }}
//           >
//             <img
//               src={img.src}
//               alt={img.caption}
//               className="w-full h-full object-cover rounded-lg"
//             />
//             {/* Hover overlay with icon */}
//             <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity">
//               <FiCamera className="text-white text-3xl mb-2" />
//               <span className="text-white text-lg font-semibold">{img.caption}</span>
//             </div>
//           </motion.div>
//         ))}
//       </Masonry>
//     </section>
//   );
// };

// export default MediaGallery;
