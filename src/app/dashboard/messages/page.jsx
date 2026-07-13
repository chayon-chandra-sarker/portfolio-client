import React from 'react';
import { Trash2, Mail } from "lucide-react";

const Messages = () => {
    return (
      <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Messages
        </h1>
        <p className="text-gray-500 mt-1">
          View all contact form messages from users.
        </p>
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {/* Single Message Card */}
        <div className="bg-white rounded-xl shadow p-5 border-l-4 border-cyan-500">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                <Mail className="text-cyan-600" size={20} />
              </div>

              <div>
                <h2 className="font-semibold text-gray-800">
                  John Doe
                </h2>
                <p className="text-sm text-gray-500">
                  john@example.com
                </p>
              </div>
            </div>

            <button className="text-red-600 hover:text-red-800">
              <Trash2 size={20} />
            </button>
          </div>

          <p className="mt-3 text-gray-600">
            Hello, I want to build a portfolio website. Please contact me.
          </p>
        </div>

        {/* Empty State */}
        <div className="bg-white rounded-xl shadow p-10 text-center">
          <Mail size={50} className="mx-auto text-gray-300" />

          <h2 className="text-xl font-semibold text-gray-700 mt-3">
            No Messages Yet
          </h2>

          <p className="text-gray-500 mt-2">
            User messages will appear here.
          </p>
        </div>
      </div>
    </div>
    );
};

export default Messages;