"use client";

import React, { useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);


  useEffect(() => {

    const fetchProjects = async () => {
      try {

        const res = await axios.get(
          "https://portfolio-server-mpeo.onrender.com/api/projects/all-project"
        );


        setProjects(res.data.data || []);


      } catch (error) {

        console.log(error);

      }
    };


    fetchProjects();


  }, []);



  return (
    <div className="w-full space-y-6">


      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">


        <div>

          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </h1>


          <p className="mt-1 text-gray-400">
            Manage all your portfolio projects.
          </p>


        </div>



        <Link
          href="/dashboard/projects/add-project"
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
        >

          <Plus
            size={18}
            className="transition-transform group-hover:rotate-90"
          />

          Add Project

        </Link>


      </div>




      {/* Desktop Table */}

      <div className="hidden md:block overflow-x-auto rounded-xl border border-base-300 bg-base-100 shadow">


        <table className="table w-full">


          <thead>

            <tr>

              <th>Title</th>
              <th>Category</th>
              <th>Technology</th>
              <th>Status</th>
              <th className="text-center">Action</th>

            </tr>

          </thead>



          <tbody>


            {
              projects.length > 0 ? (

                projects.map((project)=>(


                  <tr key={project.id}>


                    <td className="font-semibold">
                      {project.title}
                    </td>



                    <td>
                      {project.category || "Full Stack"}
                    </td>



                    <td>
                      {
                        project.technology?.join(", ") || "N/A"
                      }
                    </td>



                    <td>


                      <div
                        className={`badge ${
                          project.featured
                          ? "badge-success"
                          : "badge-warning"
                        } badge-outline`}
                      >

                        {
                          project.featured
                          ? "Published"
                          : "Draft"
                        }

                      </div>


                    </td>



                    <td>


                      <div className="flex justify-center gap-3">


                        <Link href={`/dashboard/projects/edit/${project.id}`}>

                          <button className="btn btn-sm btn-ghost text-info">

                            <Pencil size={18}/>

                          </button>


                        </Link>



                        <Link href={`/dashboard/projects/delete/${project.id}`}>

                          <button className="btn btn-sm btn-ghost text-error">

                            <Trash2 size={18}/>

                          </button>


                        </Link>


                      </div>


                    </td>



                  </tr>


                ))



              ) : (


                <tr>

                  <td
                    colSpan="5"
                    className="text-center py-6"
                  >

                    No projects found.

                  </td>


                </tr>


              )
            }



          </tbody>



        </table>



      </div>





      {/* Mobile Card */}

      <div className="space-y-4 md:hidden">


        {
          projects.length > 0 ? (

            projects.map((project)=>(


              <div
                key={project.id}
                className="card bg-base-100 border border-base-300 shadow"
              >


                <div className="card-body">


                  <h2 className="font-bold text-lg">
                    {project.title}
                  </h2>



                  <p>
                    <span className="font-semibold">
                      Category:
                    </span>{" "}
                    {project.category || "Full Stack"}
                  </p>



                  <p className="break-words">

                    <span className="font-semibold">
                      Technology:
                    </span>{" "}

                    {
                      project.technology?.join(", ") || "N/A"
                    }

                  </p>



                  <div>


                    <span className="font-semibold">
                      Status:
                    </span>


                    <div
                      className={`badge ${
                        project.featured
                        ? "badge-success"
                        : "badge-warning"
                      } badge-outline ml-2`}
                    >

                      {
                        project.featured
                        ? "Published"
                        : "Draft"
                      }

                    </div>


                  </div>



                  <div className="flex justify-end gap-2">


                    <Link href={`/dashboard/projects/edit/${project.id}`}>

                      <button className="btn btn-sm btn-info btn-outline">

                        <Pencil size={18}/>

                      </button>


                    </Link>



                    <Link href={`/dashboard/projects/delete/${project.id}`}>

                      <button className="btn btn-sm btn-error btn-outline">

                        <Trash2 size={18}/>

                      </button>


                    </Link>


                  </div>



                </div>


              </div>


            ))


          ) : (


            <p className="text-center text-gray-400">
              No projects found.
            </p>


          )
        }


      </div>



    </div>
  );
};


export default Projects;