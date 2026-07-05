import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    image: "/assets/chayon.jpg",
    description:
      "A modern responsive portfolio built with Next.js, Tailwind CSS, DaisyUI, and Framer Motion.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    image: "/assets/chayon.jpg",
    description:
      "A full-stack e-commerce application with authentication, dashboard, and payment integration.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    image: "/assets/chayon.jpg",
    description:
      "A productivity application for managing tasks with drag-and-drop functionality.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    live: "#",
    github: "#",
  },
];

const Projects = () => {
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

        {/* Project Grid */}
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
                <h3 className="text-2xl font-outfit font-bold text-base-content">
                  {project.title}
                </h3>

                <p className="text-base-content/80 mt-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 my-5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="badge badge-primary badge-outline"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link href={project.live} className="btn bg-primary text-black border-0 hover:bg-cyan-400">
                    Live Demo
                  </Link>

                  <Link
                    href={project.github}
                    className="btn btn-outline btn-primary"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/projects" className="btn bg-primary text-black border-0 hover:bg-cyan-400">
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;