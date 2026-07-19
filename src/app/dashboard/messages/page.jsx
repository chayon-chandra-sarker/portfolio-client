"use client";

import React, { useEffect, useState } from "react";
import { Trash2, Mail } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get all messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        const res = await axios.get(
          "https://portfolio-server-mpeo.onrender.com/api/messages/all-messages",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          },
        );

        setMessages(res.data.data || []);
      } catch (error) {
        console.log(error.response?.status);
        console.log(error.response?.data);

        toast.error(error.response?.data?.message || "Failed to load messages");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);
  // Delete Message

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("accessToken");

      await axios.delete(
        `https://portfolio-server-mpeo.onrender.com/api/messages/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        },
      );

      setMessages((prev) => prev.filter((msg) => msg.id !== id));

      toast.success("Message deleted successfully");
    } catch (error) {
      console.log(error.response?.status);
      console.log(error.response?.data);

      toast.error(error.response?.data?.message || "Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
  <div>
    {/* Header */}
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Messages
      </h1>

      <p className="mt-1 text-gray-500">
        View all contact form messages from users.
      </p>
    </div>

    {/* Messages */}
    <div className="space-y-4">
      {messages.length > 0 ? (
        messages.map((msg) => (
          <div
            key={msg.id}
            className="rounded-xl border-l-4 border-cyan-500 bg-white p-5 shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100">
                  <Mail className="text-cyan-600" size={20} />
                </div>

                <div>
                  <h2 className="font-semibold text-gray-800">
                    {msg.name}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {msg.email}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    {new Date(msg.createdAt).toLocaleString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleDelete(msg.id)}
                className="text-red-500 transition hover:text-red-800 cursor-pointer"
              >
                <Trash2 size={20} />
              </button>
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-600">
              {msg.subject}
            </h3>

            <p className="mt-2 text-gray-600">
              {msg.message}
            </p>
          </div>
        ))
      ) : (
        <div className="rounded-xl bg-white p-10 text-center shadow">
          <Mail size={50} className="mx-auto text-gray-300" />

          <h2 className="mt-3 text-xl font-semibold text-gray-700">
            No Messages Yet
          </h2>

          <p className="mt-2 text-gray-500">
            User messages will appear here.
          </p>
        </div>
      )}
    </div>
  </div>
);
};

export default Messages;
