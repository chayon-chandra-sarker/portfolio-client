import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiPostman,
  SiMysql,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-500" />,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Prisma", icon: <SiPrisma /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      {name: "MySQL",icon: <SiMysql className="text-sky-600" />},
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
      {name: "Beekeeper Studio",icon: <TbDatabase className="text-amber-500" />},
    ],
  },
];

const Skills = () => {
  return (
    <section >
      <div className="w-11/12 mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h4 className="text-primary uppercase tracking-[0.3em] font-semibold font-outfit">
            My Skills
          </h4>

          <h2 className="text-4xl font-outfit font-bold text-base-content mt-3">
            Technologies I Work With
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-base-200 rounded-2xl p-6 border border-base-300 hover:border-primary hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-outfit font-bold text-primary mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>

                    <span className="text-base-content font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
