import React from "react";
import {
  FolderKanban,
  Brain,
  Briefcase,
  Mail,
} from "lucide-react";

const page = () => {
  return (
   <div>
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, Chayon 👋
        </h1>
        <p className="text-gray-500 mt-2">
          Manage your portfolio from one place.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Projects</p>
            <h2 className="text-3xl font-bold mt-2">0</h2>
          </div>

          <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
            <FolderKanban className="text-blue-600" size={28} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Skills</p>
            <h2 className="text-3xl font-bold mt-2">0</h2>
          </div>

          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
            <Brain className="text-green-600" size={28} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Experience</p>
            <h2 className="text-3xl font-bold mt-2">0</h2>
          </div>

          <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
            <Briefcase className="text-orange-600" size={28} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Messages</p>
            <h2 className="text-3xl font-bold mt-2">0</h2>
          </div>

          <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
            <Mail className="text-red-600" size={28} />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-10 bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Recent Activity
        </h2>

        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <p className="font-medium">
              No recent projects.
            </p>
            <p className="text-sm text-gray-500">
              Your latest activity will appear here.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="font-medium">
              No new messages.
            </p>
            <p className="text-sm text-gray-500">
              Contact messages will be displayed here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
