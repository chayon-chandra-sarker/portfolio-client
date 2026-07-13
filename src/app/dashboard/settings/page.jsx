import React from 'react';
import { User, Lock, Globe, Save } from "lucide-react";

const Settings = () => {
    return (
          <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Settings
        </h1>
        <p className="text-gray-500 mt-1">
          Manage your profile and website settings.
        </p>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Profile Settings */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center gap-2 mb-4">
            <User className="text-cyan-600" />
            <h2 className="text-xl font-semibold">
              Profile Settings
            </h2>
          </div>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 rounded mb-3"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded mb-3"
          />

          <button className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded">
            <Save size={18} />
            Save Profile
          </button>
        </div>

        {/* Password Settings */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center gap-2 mb-4">
            <Lock className="text-orange-600" />
            <h2 className="text-xl font-semibold">
              Change Password
            </h2>
          </div>

          <input
            type="password"
            placeholder="Old Password"
            className="w-full border p-2 rounded mb-3"
          />

          <input
            type="password"
            placeholder="New Password"
            className="w-full border p-2 rounded mb-3"
          />

          <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded">
            <Save size={18} />
            Update Password
          </button>
        </div>

        {/* Website Settings */}
        <div className="bg-white rounded-xl shadow p-6 lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="text-green-600" />
            <h2 className="text-xl font-semibold">
              Website Settings
            </h2>
          </div>

          <input
            type="text"
            placeholder="Portfolio Title"
            className="w-full border p-2 rounded mb-3"
          />

          <input
            type="text"
            placeholder="Short Description"
            className="w-full border p-2 rounded mb-3"
          />

          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            <Save size={18} />
            Save Settings
          </button>
        </div>
      </div>
    </div>
    );
};

export default Settings;