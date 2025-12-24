import React, { useMemo, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import trips from "../data/trips";
import "swiper/css";
import "swiper/css/navigation";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";


const Fact = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-sm ring-1 ring-gray-100">
    <div className="mt-0.5">
      <Icon className="text-blue-600 text-lg" />
    </div>
    <div>
      <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
      <div className="font-semibold text-gray-900">{value}</div>
    </div>
  </div>
);

const AccordionItem = ({ item, open, onToggle }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-4 text-left"
    >
      <span className="font-semibold text-gray-900">
        Day {item.day} — {item.title}
      </span>
      <span className="text-gray-400">{open ? "–" : "+"}</span>
    </button>
    {open && <p className="pb-4 text-gray-600">{item.desc}</p>}
  </div>
);

const TripDetails = () => {
  const { id } = useParams();            
  const navigate = useNavigate();
  const formRef = useRef(null);

const trip = useMemo(
  () => trips.find(t => t.id.toLowerCase() === id.toLowerCase()),
  [id]
);


  const [openDay, setOpenDay] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: 1,
    notes: "",
  });

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your API call
    alert(`Thanks ${form.name}! We’ll reach out at ${form.email} about “${trip.name}”.`);
    setForm({ name: "", email: "", phone: "", travelers: 1, notes: "" });
  };
if (!trip) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-xl font-semibold text-gray-600">
        Trip not found 🧭
      </p>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gray-50">



      {/* Sticky Top Bar */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900"
          >
            <FaArrowLeft /> <span className="font-medium">Back to all trips</span>
          </button>
          <div className="font-semibold text-gray-900 truncate">{trip.name}</div>
          <button
            onClick={scrollToForm}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Book Now
          </button>
        </div>
      </div>
{/* Trip Hero */}
<section className="relative h-[70vh] w-full flex items-end">
  <img
    src={trip.media[0]?.src}
    alt={trip.name}
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 text-white">
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
      {trip.name}
    </h1>
    <p className="mt-4 max-w-2xl text-lg text-white/90">
      {trip.subtitle}
    </p>

    <div className="mt-6 flex flex-wrap gap-4 text-sm">
      <span className="bg-white/20 px-4 py-2 rounded-full">
        📍 {trip.location}
      </span>
      <span className="bg-white/20 px-4 py-2 rounded-full">
        🗓 {trip.dates}
      </span>
      <span className="bg-white/20 px-4 py-2 rounded-full">
        ⏳ {trip.duration}
      </span>
    </div>
  </div>
</section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Media Carousel */}
        <div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop
              spaceBetween={10}
              className="w-full h-[260px] sm:h-[360px] md:h-[460px] bg-black"
            >
              {trip.media.map((m, idx) => (
                <SwiperSlide key={idx}>
                  {m.type === "image" ? (
                    <img
                      src={m.src}
                      alt={`slide-${idx}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <video
                      className="w-full h-full object-cover"
                      src={m.src}
                      poster={m.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Optional captions / notes under carousel */}
          <p className="text-sm text-gray-500 mt-3">
            A glimpse of what you’ll experience on <span className="font-medium text-gray-700">{trip.name}</span>.
          </p>
        </div>

        {/* Right: Details & Booking */}
        <div className="space-y-8">
          {/* Headline */}
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">{trip.name}</h1>
            {trip.subtitle && (
              <p className="text-gray-600 mt-2">{trip.subtitle}</p>
            )}
            <div className="mt-3 inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700">
              🌍 {trip.location}
            </div>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 gap-3">
            <Fact icon={FaCalendarAlt} label="Dates" value={trip.dates} />
            <Fact icon={FaClock} label="Duration" value={trip.duration} />
            <Fact icon={FaUsers} label="Spots" value={`${trip.spots} Travelers`} />
            <Fact icon={FaMapMarkerAlt} label="Location" value={trip.location} />
          </div>

          {/* Itinerary */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Itinerary</h2>
            <p className="text-sm text-gray-500 mb-4">Tap a day to see details.</p>
            <div>
              {trip.itinerary.map((item) => (
                <AccordionItem
                  key={item.day}
                  item={item}
                  open={openDay === item.day}
                  onToggle={() => setOpenDay(openDay === item.day ? -1 : item.day)}
                />
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Pricing</h2>
            <div className="flex items-end gap-3">
              <div className="text-3xl font-extrabold text-gray-900">
                {trip.currency} {trip.price.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500 mb-1">per person</div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Included</h3>
                <ul className="space-y-2">
                  {trip.includes.map((i, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <FaCheckCircle className="mt-0.5 text-green-600" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Not Included</h3>
                <ul className="space-y-2">
                  {trip.excludes.map((i, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <FaTimesCircle className="mt-0.5 text-red-600" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          {/* <div ref={formRef} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Book Your Spot</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-1">
                <label className="text-sm text-gray-700">Full Name</label>
                <input
                  className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="md:col-span-1">
                <label className="text-sm text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="md:col-span-1">
                <label className="text-sm text-gray-700">Phone</label>
                <input
                  className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div className="md:col-span-1">
                <label className="text-sm text-gray-700">Travelers</label>
                <input
                  type="number"
                  min={1}
                  className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  value={form.travelers}
                  onChange={(e) => setForm({ ...form, travelers: Number(e.target.value) })}
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-gray-700">Notes (optional)</label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Any questions, dietary preferences, rooming requests, etc."
                />
              </div>
              <div className="md:col-span-2 flex items-center justify-between gap-4">
                <div className="text-sm text-gray-500">
                  Secure your spot early — trips often sell out.
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  ✅ Book My Spot
                </button>
              </div>
            </form>
          </div> */}

          <div
  ref={formRef}
  className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 overflow-hidden"
>
  {/* Header */}
  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-6 text-white">
    <h2 className="text-2xl font-extrabold">
      Reserve Your Spot
    </h2>
    <p className="mt-1 text-sm text-white/90">
      Limited seats • Curated experience • Personal hosting
    </p>
  </div>

  {/* Form */}
  <form
    onSubmit={handleSubmit}
    className="px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-5"
  >
    {/* Name */}
    <div>
      <label className="text-sm font-medium text-gray-700">
        Full Name
      </label>
      <input
        className="mt-1 w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3
        focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
        placeholder="Your full name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
    </div>

    {/* Email */}
    <div>
      <label className="text-sm font-medium text-gray-700">
        Email Address
      </label>
      <input
        type="email"
        className="mt-1 w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3
        focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
        placeholder="you@example.com"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
    </div>

    {/* Phone */}
    <div>
      <label className="text-sm font-medium text-gray-700">
        Phone Number
      </label>
      <input
        className="mt-1 w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3
        focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
        placeholder="+91 XXXXX XXXXX"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
    </div>

    {/* Travelers */}
    <div>
      <label className="text-sm font-medium text-gray-700">
        Number of Travelers
      </label>
      <input
        type="number"
        min={1}
        className="mt-1 w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3
        focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
        value={form.travelers}
        onChange={(e) =>
          setForm({ ...form, travelers: Number(e.target.value) })
        }
      />
    </div>

    {/* Notes */}
    <div className="md:col-span-2">
      <label className="text-sm font-medium text-gray-700">
        Special Requests / Notes
      </label>
      <textarea
        rows={4}
        className="mt-1 w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3
        focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
        placeholder="Dietary preferences, room sharing, questions..."
        value={form.notes}
        onChange={(e) => setForm({ ...form, notes: e.target.value })}
      />
    </div>

    {/* Footer */}
    <div className="md:col-span-2 mt-4">
      <button
        type="submit"
        className="w-full rounded-2xl bg-blue-600 hover:bg-blue-700
        text-white font-extrabold text-lg py-4 transition
        shadow-lg shadow-blue-600/30"
      >
        🌍 Reserve My Place
      </button>

      <p className="mt-4 text-center text-xs text-gray-500">
        No payment required now • We’ll contact you personally
      </p>
    </div>
  </form>
</div>


          {/* Soft reassurance */}
          <p className="text-xs text-gray-500">
            By booking, you agree to our cancellation policy and trip terms. We’ll never share your data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
