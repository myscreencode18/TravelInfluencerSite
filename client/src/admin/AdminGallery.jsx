import React, { useState } from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

const GalleryManagement = () => {
  const [gallery, setGallery] = useState([
    { id: 1, url: "https://source.unsplash.com/400x300/?beach", caption: "Beach Sunset" },
    { id: 2, url: "https://source.unsplash.com/400x300/?mountain", caption: "Mountain Hike" },
  ]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      id: Date.now() + Math.random(),
      url: URL.createObjectURL(file), // preview only
      caption: "",
    }));
    setGallery([...gallery, ...newImages]);
  };

  const handleCaptionChange = (id, value) => {
    setGallery(gallery.map((img) => (img.id === id ? { ...img, caption: value } : img)));
  };

  const handleDelete = (id) => {
    setGallery(gallery.filter((img) => img.id !== id));
  };

  const handleSave = () => {
    // 🔹 Normally: send `gallery` to backend (with uploaded image URLs)
    console.log("Gallery Saved:", gallery);
    alert("Gallery updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">🖼️ Gallery Management</h1>

        {/* Upload Input */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">Upload Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileUpload}
            className="block text-sm text-gray-600"
          />
        </div>

        {/* Gallery Preview */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((img) => (
            <div key={img.id} className="relative bg-gray-100 rounded-lg overflow-hidden shadow">
              <img src={img.url} alt={img.caption} className="w-full h-40 object-cover" />
              <input
                type="text"
                value={img.caption}
                onChange={(e) => handleCaptionChange(img.id, e.target.value)}
                placeholder="Add caption..."
                className="w-full px-3 py-2 border-t text-sm focus:outline-none"
              />
              <button
                onClick={() => handleDelete(img.id)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
              >
                <TrashIcon className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSave}
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Save Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryManagement;
