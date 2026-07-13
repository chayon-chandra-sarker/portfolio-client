import React from 'react';
import { Plus, Pencil, Trash2 } from "lucide-react";

const Skills = () => {
    return (
       <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Skills
          </h1>
          <p className="text-gray-500 mt-1">
            Manage your technical skills.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition">
          <Plus size={18} />
          Add Skill
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-4">Skill Name</th>
              <th className="p-4">Level</th>
              <th className="p-4">Category</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-4 font-medium">
                JavaScript
              </td>

              <td className="p-4">
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  Advanced
                </span>
              </td>

              <td className="p-4">
                Frontend
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
              <td className="p-4 text-center text-gray-500" colSpan="4">
                More skills will appear here...
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Skills;