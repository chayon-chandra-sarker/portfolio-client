import React from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
          <p className="text-gray-500 mt-1">
            Manage all your portfolio projects.
          </p>
        </div>

        <Link
          href="/dashboard/projects/add-project"
          className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded-lg transition"
        >
          <Plus size={18} />
          Add Project
        </Link>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Technology</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-4 font-medium">Portfolio Website</td>

              <td className="p-4">Full Stack</td>

              <td className="p-4">Next.js, Express, Prisma</td>

              <td className="p-4">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Published
                </span>
              </td>

              <td className="p-4">
                <div className="flex justify-center gap-3">
                  <button className="text-blue-600 hover:text-blue-800">
                    <Pencil size={20} />
                  </button>

                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 size={20} />
                  </button>
                </div>
              </td>
            </tr>

            <tr className="border-t">
              <td className="p-4 text-center text-gray-500" colSpan="5">
                More projects will appear here...
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
