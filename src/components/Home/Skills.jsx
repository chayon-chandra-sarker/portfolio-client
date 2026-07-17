"use client";

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
  FaCookieBite,
  FaUserShield,
  FaLock,
  FaDocker,
  FaServer,
  FaCloud,
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
  SiAuth0,
  SiVercel,
  SiStripe,
} from "react-icons/si";

import {
  TbApi,
  TbDatabase,
  TbCode,
} from "react-icons/tb";

import { MdSecurity } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
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
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-600" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-blue-600" />,
      },
      { name: "TypeScript", 
        icon: <SiTypescript className="text-blue-600" />
      },
      {
        name: "Prisma ORM",
        icon: <SiPrisma  className="text-blue-600"/>,
      },
      {
        name: "REST API",
        icon: <TbApi className="text-sky-500" />,
      },
    ],
  },

  {
    title: "Database",
    skills: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-blue-500" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-sky-600" />,
      },
    ],
  },

  {
    title: "Authentication & Security",
    skills: [
      {
        name: "JWT",
        icon: <FaLock className="text-red-500" />,
      },
      {
        name: "Bcrypt",
        icon: <FaLock className="text-yellow-500" />,
      },
      {
        name: "Cookies",
        icon: <FaCookieBite className="text-orange-400" />,
      },
      {
        name: "OAuth",
        icon: <SiAuth0 className="text-orange-500" />,
      },
      {
        name: "CORS",
        icon: <MdSecurity className="text-green-500" />,
      },
      {
        name: "RBAC",
        icon: <FaUserShield className="text-blue-500" />,
      },
    ],
  },

  {
    title: "Development Tools",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-orange-500" />,
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-400" />,
      },
      {
        name: "Figma",
        icon: <FaFigma className="text-pink-500" />,
      },
      {
        name: "VS Code",
        icon: <TbCode className="text-blue-500" />,
      },
      {
        name: "Beekeeper Studio",
        icon: <TbDatabase className="text-amber-500" />,
      },
    ],
  },

  {
    title: "Deployment & DevOps",
    skills: [
      {
        name: "Docker",
        icon: <FaDocker className="text-blue-500" />,
      },
      {
        name: "Vercel",
        icon: <SiVercel />,
      },
      {
        name: "Render",
        icon: <FaServer className="text-purple-500" />,
      },
      {
        name: "Cloudinary",
        icon: <FaCloud className="text-sky-500" />,
      },
      {
        name: "Stripe",
        icon: <SiStripe className="text-violet-500" />,
      },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-12 md:py-20 overflow-hidden">
      <div className="w-11/12 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h4 className="text-primary uppercase tracking-[0.3em] font-semibold font-outfit text-sm md:text-base">
            My Skills
          </h4>

          <h2 className="text-3xl md:text-4xl font-bold font-outfit mt-3">
            Technologies I Work With
          </h2>
        </div>


        <Swiper
          effect="coverflow"
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          slidesPerView="auto"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={800}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 120,
            modifier: 2,
            scale: 0.9,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[
            EffectCoverflow,
            Pagination,
            Autoplay,
          ]}
          className="pb-12"
        >

          {skillCategories.map((category) => (
            <SwiperSlide
              key={category.title}
              className="
                !w-[280px]
                sm:!w-[300px]
                md:!w-[330px]
              "
            >

              <div
                className="
                  min-h-[380px]
                  md:min-h-[430px]
                  bg-base-200
                  rounded-3xl
                  border
                  border-base-300
                  p-6
                  md:p-8
                  shadow-xl
                  hover:border-primary
                  hover:shadow-primary/20
                  transition-all
                  duration-500
                "
              >

                <h3
                  className="
                  text-2xl
                  md:text-3xl
                  font-bold
                  text-primary
                  mb-6
                  "
                >
                  {category.title}
                </h3>


                <div className="space-y-4 md:space-y-5">

                  {category.skills.map((skill)=>(
                    <div
                      key={skill.name}
                      className="
                        flex
                        items-center
                        gap-3
                        md:gap-4
                      "
                    >

                      <span className="text-2xl md:text-3xl">
                        {skill.icon}
                      </span>

                      <span
                        className="
                        text-base
                        md:text-lg
                        font-medium
                        "
                      >
                        {skill.name}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
};

export default Skills;
