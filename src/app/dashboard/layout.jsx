import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      {/* Drawer Toggle */}
      <input
        id="dashboard-drawer"
        type="checkbox"
        className="drawer-toggle"
      />

      {/* Main Content */}
      <div className="drawer-content flex flex-col min-h-screen bg-gray-100">
        <Navbar />

        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="dashboard-drawer"
          className="drawer-overlay"
        ></label>

        <Sidebar />
      </div>
    </div>
  );
}