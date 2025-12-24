import React, { useState } from "react";
import {
  ChartBarIcon,
  NewspaperIcon,
  CalendarIcon,
  InboxIcon,
  UsersIcon,
  Cog6ToothIcon,
  Bars3Icon,
  XMarkIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import TripsManagement from "./TripManagement";
import BlogManagement from "./BlogManagement";
import BlogAdmin from "./BlogAdmin";
import AdminMessages from "./AdminMessage";
import AdminSubscribers from "./AdminSubscribers";
import AdminSettings from "./AdminSetting";
import GalleryManagement from "./AdminGallery";

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <ChartBarIcon className="h-5 w-5" /> },
    { id: "gallery", label: "Gallery", icon: <PhotoIcon className="h-5 w-5" /> },
    { id: "trips", label: "Trips", icon: <CalendarIcon className="h-5 w-5" /> },
    { id: "blogs", label: "Travelogue", icon: <NewspaperIcon className="h-5 w-5" /> },
    { id: "messages", label: "Messages", icon: <InboxIcon className="h-5 w-5" /> },
    { id: "subscribers", label: "Subscribers", icon: <UsersIcon className="h-5 w-5" /> },
    { id: "settings", label: "Settings", icon: <Cog6ToothIcon className="h-5 w-5" /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar (Mobile overlay + Desktop fixed) */}
      <div className="md:hidden">
        {/* Mobile menu button */}
        <button
          className="p-4 text-gray-700"
          onClick={() => setSidebarOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-indigo-700 text-white flex flex-col transform 
        transition-transform duration-300 z-50
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:flex-shrink-0`}
      >
        <div className="p-6 flex justify-between items-center">
          <span className="text-2xl font-bold">Admin Panel</span>
          {/* Close button for mobile */}
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <XMarkIcon className="h-6 w-6 text-white" />
          </button>
        </div>

        <nav className="flex-1 px-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActivePage(item.id);
                setSidebarOpen(false); // close menu on mobile
              }}
              className={`flex items-center gap-3 w-full text-left px-4 py-2 rounded-md mb-2 transition 
              ${activePage === item.id ? "bg-indigo-500" : "hover:bg-indigo-600"}`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 overflow-y-auto">
        {activePage === "dashboard" && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-semibold">Total Trips</h2>
                <p className="text-3xl font-bold text-indigo-600">12</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-semibold">Blog Posts</h2>
                <p className="text-3xl font-bold text-indigo-600">28</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-semibold">Subscribers</h2>
                <p className="text-3xl font-bold text-indigo-600">452</p>
              </div>
            </div>
          </div>
        )}
          {activePage === "gallery" && <GalleryManagement/>}
        {activePage === "trips" && <TripsManagement />}
        {activePage === "blogs" && <BlogAdmin/>}
        {activePage === "messages" && <AdminMessages/>}
        {activePage === "subscribers" && <AdminSubscribers/>}
        {activePage === "settings" && <AdminSettings/>}
      </main>
    </div>
  );
};

export default AdminDashboard;
