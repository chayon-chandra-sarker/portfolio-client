"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

const Projects = () => {
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

  const featuredProjects = projects
    .slice(0, 3)
    .filter((project) => project.featured === true);

  if (loading) {
    return (
      <section className="py-12 lg:py-20">
        <div className="w-11/12 max-w-7xl mx-auto">
          {/* Heading Skeleton */}
          <div className="text-center mb-12">
            <div className="h-4 w-36 sm:w-44 md:w-52 bg-base-300 rounded-full mx-auto animate-pulse"></div>

            <div className="h-8 sm:h-10 w-64 sm:w-80 md:w-96 bg-base-300 rounded-lg mx-auto mt-5 animate-pulse"></div>
          </div>

          {/* Cards Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-base-200 rounded-2xl overflow-hidden border border-base-300 animate-pulse"
              >
                {/* Image */}
                <div className="w-full h-52 sm:h-56 md:h-60 bg-base-300"></div>

                <div className="p-5 md:p-6">
                  {/* Title */}
                  <div className="h-6 w-3/4 bg-base-300 rounded"></div>

                  {/* Description */}
                  <div className="mt-4 space-y-2">
                    <div className="h-4 bg-base-300 rounded"></div>
                    <div className="h-4 bg-base-300 rounded"></div>
                    <div className="h-4 w-4/5 bg-base-300 rounded"></div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    <div className="h-8 w-20 bg-base-300 rounded-full"></div>
                    <div className="h-8 w-20 bg-base-300 rounded-full"></div>
                    <div className="h-8 w-20 bg-base-300 rounded-full"></div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <div className="h-10 w-full sm:w-28 bg-base-300 rounded-lg"></div>
                    <div className="h-10 w-full sm:w-28 bg-base-300 rounded-lg"></div>
                    <div className="h-10 w-full sm:w-28 bg-base-300 rounded-lg"></div>
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
    <section className="w-full overflow-hidden py-12 lg:py-20">
      <div className="w-full px-4 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-primary font-outfit uppercase tracking-[0.25em] text-xs sm:text-sm md:text-base font-semibold">
            Featured Projects
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-base-content">
            Some of My Recent Work
          </h2>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-base-200 rounded-2xl overflow-hidden border border-base-300 hover:border-primary hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-52 sm:h-56 md:h-60 object-cover"
              />

              <div className="p-5 md:p-6">
                <h3 className="text-xl sm:text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-base-content/80 leading-7 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 my-5">
                  {project.technology?.slice(0, 3).map((tech, index) => (
                    <span
                      key={`${tech}-${index}`}
                      className="badge badge-primary badge-outline text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="btn bg-primary text-black border-0 hover:bg-cyan-400 w-full sm:w-auto"
                  >
                    Live Demo
                  </Link>

                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="btn btn-outline btn-primary w-full sm:w-auto"
                  >
                    GitHub
                  </Link>

                  <Link
                    href={`/projects/${project.id}`}
                    className="btn btn-outline w-full sm:w-auto"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-14">
          <Link
            href="/projects"
            className="btn bg-primary text-black border-0 hover:bg-cyan-400 rounded-full px-8 w-full sm:w-auto"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
