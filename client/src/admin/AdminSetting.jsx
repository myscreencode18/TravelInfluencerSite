import React, { useState } from "react";

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    siteTitle: "My Travel Blog",
    logoUrl: "https://placehold.co/150x50?text=Logo",
    contactEmail: "hello@example.com",
    postsPerPage: 6,
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    theme: "light",
    footerText: "© 2025 My Travel Blog. All rights reserved.",
    profilePicture: "https://placehold.co/150x150?text=Profile",
    heroImage: "https://source.unsplash.com/1600x900/?travel,adventure",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleFileUpload = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      // 🔹 Normally: upload to backend/cloud storage -> get URL
      const fakeUrl = URL.createObjectURL(file); // preview only
      setSettings({ ...settings, [fieldName]: fakeUrl });
    }
  };

  const handleSave = () => {
    // 🔹 Normally: save to backend with API call
    console.log("Saved Settings:", settings);
    alert("Settings updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">⚙️ Settings</h1>

        <div className="space-y-8">
          {/* Site Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Site Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="siteTitle"
                value={settings.siteTitle}
                onChange={handleChange}
                placeholder="Site Title"
                className="px-4 py-2 border rounded-lg w-full"
              />
              <input
                type="text"
                name="logoUrl"
                value={settings.logoUrl}
                onChange={handleChange}
                placeholder="Logo URL"
                className="px-4 py-2 border rounded-lg w-full"
              />
            </div>
          </div>

          {/* Profile Picture */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile Picture</h2>
            <div className="flex items-center gap-6">
              <img
                src={settings.profilePicture}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, "profilePicture")}
                className="block text-sm text-gray-600"
              />
            </div>
          </div>

          {/* Hero Image */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Hero Section Image</h2>
            <div className="flex flex-col gap-4">
              <img
                src={settings.heroImage}
                alt="Hero"
                className="w-full h-48 object-cover rounded-lg border"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, "heroImage")}
                className="block text-sm text-gray-600"
              />
            </div>
          </div>

          {/* General Settings */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">General Settings</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                name="contactEmail"
                value={settings.contactEmail}
                onChange={handleChange}
                placeholder="Contact Email"
                className="px-4 py-2 border rounded-lg w-full"
              />
              <input
                type="number"
                name="postsPerPage"
                value={settings.postsPerPage}
                onChange={handleChange}
                placeholder="Posts Per Page"
                className="px-4 py-2 border rounded-lg w-full"
              />
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Social Media</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="instagram"
                value={settings.instagram}
                onChange={handleChange}
                placeholder="Instagram URL"
                className="px-4 py-2 border rounded-lg w-full"
              />
              <input
                type="text"
                name="youtube"
                value={settings.youtube}
                onChange={handleChange}
                placeholder="YouTube URL"
                className="px-4 py-2 border rounded-lg w-full"
              />
            </div>
          </div>

          {/* Theme */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Appearance</h2>
            <select
              name="theme"
              value={settings.theme}
              onChange={handleChange}
              className="px-4 py-2 border rounded-lg w-full"
            >
              <option value="light">🌞 Light</option>
              <option value="dark">🌙 Dark</option>
            </select>
          </div>

          {/* Footer */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Footer</h2>
            <textarea
              name="footerText"
              value={settings.footerText}
              onChange={handleChange}
              rows="3"
              className="px-4 py-2 border rounded-lg w-full"
            ></textarea>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSave}
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
