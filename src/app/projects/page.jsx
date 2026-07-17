"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await fetch(
          "https://portfolio-server-mpeo.onrender.com/api/projects/all-project",
          {
            cache: "no-store",
          },
        );

        const data = await res.json();

        if (data.success) {
          setProjects(data.data);
        } else {
          toast.error("Failed to load projects");
        }
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  const featuredProjects = projects.filter(
    (project) => project.featured === true,
  );

  if (loading) {
    return (
      <section className="py-10">
        <div className="w-11/12 mx-auto">
          <div className="text-center mb-10">
            <div className="h-5 w-48 bg-base-300 rounded mx-auto animate-pulse"></div>
            <div className="h-10 w-80 bg-base-300 rounded mx-auto mt-4 animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-base-200 rounded-2xl overflow-hidden animate-pulse"
              >
                <div className="h-56 bg-base-300"></div>

                <div className="p-6 space-y-4">
                  <div className="h-6 bg-base-300 rounded"></div>
                  <div className="h-4 bg-base-300 rounded"></div>
                  <div className="h-4 bg-base-300 rounded w-5/6"></div>

                  <div className="flex gap-2">
                    <div className="h-8 w-20 bg-base-300 rounded"></div>
                    <div className="h-8 w-20 bg-base-300 rounded"></div>
                  </div>

                  <div className="flex gap-3">
                    <div className="h-10 w-28 bg-base-300 rounded"></div>
                    <div className="h-10 w-28 bg-base-300 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10">
      <div className="w-11/12 mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-primary font-outfit uppercase tracking-[0.3em] font-semibold">
            Featured Projects
          </p>

          <h2 className="text-4xl font-outfit font-bold text-base-content mt-3">
            Some of My Recent Work
          </h2>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-base-200 rounded-2xl overflow-hidden border border-base-300 hover:border-primary hover:-translate-y-2 transition-all duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="text-base-content/80 mt-3 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 my-5">
                  {project.technology?.slice(1,4).map((tech, index) => (
                    <span
                      key={`${tech}-${index}`}
                      className="badge badge-primary badge-outline"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="btn bg-primary text-black border-0 hover:bg-cyan-400"
                  >
                    Live Demo
                  </Link>

                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="btn btn-outline btn-primary"
                  >
                    GitHub
                  </Link>

                  <Link
                    href={`/projects/${project.id}`}
                    className="btn btn-outline"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="btn bg-primary text-black border-0 hover:bg-cyan-400"
          >
            ← Back
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
