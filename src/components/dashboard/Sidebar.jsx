"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  LayoutDashboard,
  FolderKanban,
  Brain,
  Briefcase,
  Mail,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const handleLogout = async () => {
  const toastId = toast.loading("Logging out...");

  try {
    const res = await fetch(
      "https://portfolio-server-mpeo.onrender.com/api/auth/logout",
      {
        method: "POST",
        credentials: "include",
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Logout failed");
    }

    toast.dismiss(toastId);
    toast.success(data.message);

    router.replace("/login");
  } catch (error) {
    toast.dismiss(toastId);

    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error("Something went wrong");
    }
  }
};
  const menuItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Projects",
      href: "/dashboard/projects",
      icon: FolderKanban,
    },
    {
      title: "Skills",
      href: "/dashboard/skills",
      icon: Brain,
    },
    {
      title: "Experience",
      href: "/dashboard/experience",
      icon: Briefcase,
    },
    {
      title: "Messages",
      href: "/dashboard/messages",
      icon: Mail,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="menu p-0 w-72 min-h-full bg-slate-900 text-white flex flex-col">
      {/* Logo */}
      <Link href={"/"} className="h-20 flex items-center justify-center border-b border-slate-700">
        <h1 className="text-2xl font-bold text-cyan-400">Chayon Admin</h1>
      </Link>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                pathname === item.href
                  ? "bg-cyan-500 text-white"
                  : "hover:bg-slate-800 text-slate-300"
              }`}
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-slate-700">
        <button onClick={handleLogout}
        className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-red-500 transition">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
