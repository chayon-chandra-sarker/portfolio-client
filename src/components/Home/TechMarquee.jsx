"use client";

import Marquee from "react-fast-marquee";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const techs = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
];

const TechMarquee = () => {
  return (
    <section className="py-8  overflow-hidden">
      <Marquee speed={80} pauseOnHover gradient={false} className="w-full">
        {techs.map((tech, index) => (
          <div key={index} className="mx-6 md:mx-10 flex flex-col items-center gap-3">
            <div className="text-4xl md:text-5xl text-primary">{tech.icon}</div>

            <p className="uppercase tracking-[0.25em] text-sm text-base-content/70 font-medium">
              {tech.name}
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default TechMarquee;
