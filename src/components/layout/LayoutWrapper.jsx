"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboard && <Navbar />}

      <main
        className={
          isDashboard
            ? "flex-1 w-full"
            : "flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
        }
      >
        {children}
      </main>

      {!isDashboard && <Footer />}
    </div>
  );
}