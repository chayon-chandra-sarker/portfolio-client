import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getProject(slug) {
  const res = await fetch(
    `https://portfolio-server-mpeo.onrender.com/api/projects/single/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return null;

  const data = await res.json();

  return data.data;
}

export default async function ProjectDetails({ params }) {
  

  const { slug } = await params;

  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="py-20">
      <div className="w-11/12 max-w-6xl mx-auto">

        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={700}
          className="w-full h-[500px] rounded-xl object-cover"
        />

        <h1 className="text-5xl font-bold mt-10">
          {project.title}
        </h1>

        <p className="mt-6 text-lg text-base-content/80">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          {project.technology?.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="badge badge-primary badge-lg text-black "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-10">
          <Link
            href={project.liveUrl}
            target="_blank"
            className="btn btn-primary text-black"
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
            href="/"
            className="btn btn-outline"
          >
            ← Back
          </Link>
        </div>
      </div>
    </section>
  );
}