"use client";

import React from "react";
import { Search, Bell, User, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 shadow-sm flex items-center justify-between px-4 md:px-6">
      {/* Left Side */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu */}
        <label
          htmlFor="dashboard-drawer"
          className="btn btn-circle lg:hidden border-2 border-primary text-primary hover:bg-primary hover:text-white"
        >
          <Menu size={22} />
        </label>

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg w-80">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3 md:gap-5">
        {/* Notification */}
        <button className="relative">
          <Bell size={22} className="text-gray-700" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Admin */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white">
            <User size={20} />
          </div>

          <div className="hidden md:block">
            <h3 className="font-semibold text-gray-800">
              Chayon Chandra Sarker
            </h3>

            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
