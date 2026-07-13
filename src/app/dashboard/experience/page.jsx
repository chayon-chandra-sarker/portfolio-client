import React from 'react';
import { Plus, Pencil, Trash2, Briefcase } from "lucide-react";

const Experience = () => {
    return (
       <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Experience
          </h1>
          <p className="text-gray-500 mt-1">
            Add your work experience (internship or job).
          </p>
        </div>

        <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-lg transition">
          <Plus size={18} />
          Add Experience
        </button>
      </div>

      {/* Empty State (because no experience yet) */}
      <div className="bg-white rounded-xl shadow p-10 text-center">
        <div className="flex justify-center mb-4 text-orange-500">
          <Briefcase size={50} />
        </div>

        <h2 className="text-xl font-semibold text-gray-700">
          No Experience Added Yet
        </h2>

        <p className="text-gray-500 mt-2">
          You can add your internship, job or freelance work here.
        </p>

        <button className="mt-5 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg">
          Add First Experience
        </button>
      </div>

      {/* Table (future use when data exists) */}
      <div className="mt-6 bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-4">Company</th>
              <th className="p-4">Role</th>
              <th className="p-4">Duration</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-4 text-center text-gray-500" colSpan="4">
                No experience records yet...
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Experience;