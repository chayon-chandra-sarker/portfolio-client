import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";


const layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 bg-gray-100 p-6">
          {children}
    
        </main>
      </div>
    </div>
  );
};

export default layout;