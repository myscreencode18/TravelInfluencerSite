import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Red marker
const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const destinations = [
  { id: 1, name: "Paris, France", lat: 48.8566, lng: 2.3522, image: "/images/destination1.webp", description: "The city of lights and love." },
  { id: 2, name: "Tokyo, Japan", lat: 35.6762, lng: 139.6503, image: "/images/destination2.webp", description: "A vibrant city blending tradition and technology." },
  { id: 3, name: "New York, USA", lat: 40.7128, lng: -74.006, image: "/images/destination3.webp", description: "The city that never sleeps." },
];

const Destination = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">🌍 The Interactive World</h2>

      {/* Map */}
      <div className="h-[400px] w-full mb-10 rounded-lg overflow-hidden shadow-lg">
        <MapContainer center={[20, 0]} zoom={2} style={{ width: "100%", height: "100%" }} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {destinations.map((d) => (
            <Marker key={d.id} position={[d.lat, d.lng]} icon={redIcon}>
              <Popup>
                <h3 className="font-bold">{d.name}</h3>
                <p>{d.description}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Destination Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {destinations.map((d) => (
          <motion.div
            key={d.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.03 }}
            onClick={() => navigate(`/destination/${d.id}`)}
          >
            <img src={d.image} alt={d.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{d.name}</h3>
              <p className="text-gray-600">{d.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
