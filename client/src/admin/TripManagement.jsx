import React, { useState } from "react";
import { PencilIcon, TrashIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

const TripsManagement = () => {
  const [trips, setTrips] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    subtitle: "",
    startDate: "",
    endDate: "",
    duration: "",
    spots: "",
    location: "",
    price: "",
    currency: "USD",
    includes: [],
    excludes: [],
    media: [],
    itinerary: [],
  });
  const [editingIndex, setEditingIndex] = useState(null);

  // Handle basic inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add Include/Exclude
  const handleAddItem = (field, value) => {
    if (!value) return;
    setFormData({
      ...formData,
      [field]: [...formData[field], value],
    });
  };

  const handleRemoveItem = (field, index) => {
    const updated = [...formData[field]];
    updated.splice(index, 1);
    setFormData({ ...formData, [field]: updated });
  };

  // Media Upload (multiple)
  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files);
    const mediaArr = files.map((file) => ({
      type: file.type.startsWith("video") ? "video" : "image",
      src: URL.createObjectURL(file),
    }));
    setFormData({ ...formData, media: [...formData.media, ...mediaArr] });
  };

  const handleRemoveMedia = (index) => {
    const updated = [...formData.media];
    updated.splice(index, 1);
    setFormData({ ...formData, media: updated });
  };

  // Itinerary
  const handleAddItinerary = () => {
    setFormData({
      ...formData,
      itinerary: [
        ...formData.itinerary,
        { day: formData.itinerary.length + 1, title: "", desc: "" },
      ],
    });
  };

  const handleItineraryChange = (index, field, value) => {
    const updated = [...formData.itinerary];
    updated[index][field] = value;
    setFormData({ ...formData, itinerary: updated });
  };

  const handleRemoveItinerary = (index) => {
    const updated = [...formData.itinerary];
    updated.splice(index, 1);
    setFormData({ ...formData, itinerary: updated });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (new Date(formData.startDate) < new Date()) {
      alert("Start date must be in the future");
      return;
    }
    if (formData.price <= 0) {
      alert("Price must be greater than 0");
      return;
    }

    if (editingIndex !== null) {
      const updatedTrips = [...trips];
      updatedTrips[editingIndex] = formData;
      setTrips(updatedTrips);
      setEditingIndex(null);
    } else {
      setTrips([...trips, { ...formData, id: crypto.randomUUID() }]);
    }

    // Reset form
    setFormData({
      id: "",
      name: "",
      subtitle: "",
      startDate: "",
      endDate: "",
      duration: "",
      spots: "",
      location: "",
      price: "",
      currency: "USD",
      includes: [],
      excludes: [],
      media: [],
      itinerary: [],
    });
  };

  const handleEdit = (index) => {
    setFormData(trips[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this trip?")) {
      setTrips(trips.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="p-4 sm:p-6 space-y-8 max-w-6xl mx-auto">
      {/* Add Trip Form */}
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          {editingIndex !== null ? "Edit Trip" : "Add Trip"}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {/* Inputs */}
          {[
            { label: "Name", name: "name", type: "text", required: true },
            { label: "Subtitle", name: "subtitle", type: "text" },
            { label: "Start Date", name: "startDate", type: "date", required: true },
            { label: "End Date", name: "endDate", type: "date", required: true },
            { label: "Duration", name: "duration", type: "text" },
            { label: "Spots", name: "spots", type: "number" },
            { label: "Location", name: "location", type: "text" },
            { label: "Price", name: "price", type: "number", required: true },
          ].map((field) => (
            <label key={field.name} className="flex flex-col text-sm">
              {field.label}
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required || false}
                className="border p-2 rounded mt-1"
              />
            </label>
          ))}

          <label className="flex flex-col text-sm">
            Currency
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="border p-2 rounded mt-1"
            >
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="EUR">EUR</option>
            </select>
          </label>

          {/* Media Upload */}
          <div className="sm:col-span-2">
            <label className="text-sm">Media (Images/Videos)</label>
            <input
              type="file"
              accept="image/*,video/*"
              multiple
              onChange={handleMediaUpload}
              className="mt-1"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.media.map((m, i) => (
                <div
                  key={i}
                  className="relative w-24 h-20 border rounded overflow-hidden"
                >
                  {m.type === "image" ? (
                    <img
                      src={m.src}
                      alt="media"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <video src={m.src} className="object-cover w-full h-full" />
                  )}
                  <button
                    type="button"
                    onClick={() => handleRemoveMedia(i)}
                    className="absolute top-0 right-0 bg-red-500 text-white px-1"
                  >
                    <XMarkIcon className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Includes/Excludes */}
          <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["includes", "excludes"].map((field) => (
              <div key={field}>
                <label className="text-sm">
                  {field === "includes" ? "Includes" : "Excludes"}
                </label>
                <div className="flex gap-2 mt-1">
                  <input
                    type="text"
                    id={`${field}-input`}
                    className="border p-2 rounded flex-1"
                  />
                  <button
                    type="button"
                    className="bg-green-500 text-white px-2 rounded"
                    onClick={() => {
                      const val =
                        document.getElementById(`${field}-input`).value;
                      handleAddItem(field, val);
                      document.getElementById(`${field}-input`).value = "";
                    }}
                  >
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </div>
                <ul className="mt-2 space-y-1">
                  {formData[field].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center bg-gray-100 px-2 py-1 rounded"
                    >
                      {item}
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(field, idx)}
                      >
                        <XMarkIcon className="w-4 h-4 text-red-500" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Itinerary */}
          <div className="sm:col-span-2">
            <label className="text-sm">Itinerary</label>
            {formData.itinerary.map((day, idx) => (
              <div key={idx} className="border p-2 rounded mt-2">
                <div className="flex justify-between">
                  <span className="font-medium text-sm">Day {day.day}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveItinerary(idx)}
                  >
                    <XMarkIcon className="w-4 h-4 text-red-500" />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Title"
                  value={day.title}
                  onChange={(e) =>
                    handleItineraryChange(idx, "title", e.target.value)
                  }
                  className="border p-2 rounded w-full mt-1"
                />
                <textarea
                  placeholder="Description"
                  value={day.desc}
                  onChange={(e) =>
                    handleItineraryChange(idx, "desc", e.target.value)
                  }
                  className="border p-2 rounded w-full mt-1"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddItinerary}
              className="mt-2 ml-2 bg-blue-500 text-white px-3 py-1 rounded"
            >
              + Add Day
            </button>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 sm:col-span-2"
          >
            {editingIndex !== null ? "Update Trip" : "Add Trip"}
          </button>
        </form>
      </div>

      {/* Trips List */}
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">All Trips</h2>
        {trips.length === 0 ? (
          <p className="text-gray-500">No trips added yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2">Name</th>
                  <th className="p-2">Dates</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {trips.map((trip, index) => (
                  <tr
                    key={trip.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-2">{trip.name}</td>
                    <td className="p-2">
                      {trip.startDate} → {trip.endDate}
                    </td>
                    <td className="p-2">
                      {trip.currency} {trip.price}
                    </td>
                    <td className="p-2 flex gap-2 flex-wrap">
                      <button
                        onClick={() => handleEdit(index)}
                        className="p-2 bg-yellow-100 rounded hover:bg-yellow-200"
                      >
                        <PencilIcon className="w-5 h-5 text-yellow-600" />
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="p-2 bg-red-100 rounded hover:bg-red-200"
                      >
                        <TrashIcon className="w-5 h-5 text-red-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripsManagement;
