import React, { useState } from "react";

const AdminMessages = () => {
  // Dummy messages (later this will come from backend)
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@example.com",
      purpose: "Collaboration",
      message: "We would love to partner with you for our campaign!",
      date: "2025-09-01",
    },
    {
      id: 2,
      name: "Priya Gupta",
      email: "priya@example.com",
      purpose: "Shoot / Story",
      message: "Looking for a pre-wedding shoot at Manali.",
      date: "2025-09-02",
    },
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleDelete = (id) => {
    setMessages(messages.filter((msg) => msg.id !== id));
    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">📩 Messages</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Messages List */}
          <div className="md:col-span-1 bg-white rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              All Messages
            </h2>
            <div className="space-y-4">
              {messages.length === 0 && (
                <p className="text-gray-500">No messages yet.</p>
              )}

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  onClick={() => setSelectedMessage(msg)}
                  className={`p-3 border rounded-lg cursor-pointer transition ${
                    selectedMessage?.id === msg.id
                      ? "bg-gray-100 border-black"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <h3 className="font-medium text-gray-800">{msg.name}</h3>
                  <p className="text-sm text-gray-500">{msg.purpose}</p>
                  <p className="text-xs text-gray-400">{msg.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Message Details */}
          <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
            {selectedMessage ? (
              <>
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {selectedMessage.name}
                    </h2>
                    <p className="text-gray-500">{selectedMessage.email}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(selectedMessage.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>

                <div className="mt-6 space-y-4">
                  <p>
                    <span className="font-semibold">Purpose:</span>{" "}
                    {selectedMessage.purpose}
                  </p>
                  <p>
                    <span className="font-semibold">Message:</span>
                  </p>
                  <p className="bg-gray-50 p-4 rounded-md text-gray-700 leading-relaxed">
                    {selectedMessage.message}
                  </p>
                </div>
              </>
            ) : (
              <p className="text-gray-500 text-center mt-20">
                Select a message to view details
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMessages;
