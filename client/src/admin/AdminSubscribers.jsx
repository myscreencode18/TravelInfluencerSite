import React, { useState } from "react";

const AdminSubscribers = () => {
  const [subscribers, setSubscribers] = useState([
    { id: 1, email: "rahul@example.com", date: "2025-08-28" },
    { id: 2, email: "priya@example.com", date: "2025-08-30" },
    { id: 3, email: "arjun@example.com", date: "2025-09-01" },
  ]);

  const [selected, setSelected] = useState([]);

  // Toggle single subscriber
  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  // Toggle all
  const toggleAll = () => {
    if (selected.length === subscribers.length) {
      setSelected([]);
    } else {
      setSelected(subscribers.map((s) => s.id));
    }
  };

  // Delete selected
  const handleBulkDelete = () => {
    setSubscribers(subscribers.filter((s) => !selected.includes(s.id)));
    setSelected([]);
  };

  // Export CSV
  const handleExport = () => {
    const headers = ["Email", "Subscribed On"];
    const rows = subscribers
      .filter((s) => selected.length === 0 || selected.includes(s.id))
      .map((s) => [s.email, s.date]);

    const csvContent =
      [headers, ...rows].map((e) => e.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "subscribers.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          📬 Subscribers
        </h1>

        <div className="bg-white rounded-xl shadow p-6">
          {/* Bulk Actions */}
          {selected.length > 0 && (
            <div className="mb-4 flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg">
              <p className="text-gray-700">
                {selected.length} selected
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleBulkDelete}
                  className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition"
                >
                  Delete Selected
                </button>
                <button
                  onClick={handleExport}
                  className="px-3 py-1 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition"
                >
                  Export Selected
                </button>
              </div>
            </div>
          )}

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={
                        selected.length === subscribers.length &&
                        subscribers.length > 0
                      }
                      onChange={toggleAll}
                    />
                  </th>
                  <th className="px-4 py-3 text-gray-600 font-medium">#</th>
                  <th className="px-4 py-3 text-gray-600 font-medium">Email</th>
                  <th className="px-4 py-3 text-gray-600 font-medium">
                    Subscribed On
                  </th>
                  <th className="px-4 py-3 text-gray-600 font-medium text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {subscribers.length === 0 && (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center py-6 text-gray-500 italic"
                    >
                      No subscribers yet.
                    </td>
                  </tr>
                )}

                {subscribers.map((sub, index) => (
                  <tr
                    key={sub.id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selected.includes(sub.id)}
                        onChange={() => toggleSelect(sub.id)}
                      />
                    </td>
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">{sub.email}</td>
                    <td className="px-4 py-3">{sub.date}</td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => {
                          setSubscribers(subscribers.filter((s) => s.id !== sub.id));
                          setSelected(selected.filter((id) => id !== sub.id));
                        }}
                        className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer: Stats */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-gray-600">
              Total Subscribers:{" "}
              <span className="font-semibold">{subscribers.length}</span>
            </p>
            <button
              onClick={handleExport}
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              Export All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSubscribers;
