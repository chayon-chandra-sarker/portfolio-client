"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";

const About = () => {
  return (
    <section>
      <div className="w-11/12 max-w-7xl mx-auto px-0 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.8 },
                x: { duration: 0.8 },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="rounded-2xl overflow-hidden border-4 border-primary shadow-[0_0_50px_rgba(8,145,178,0.5)]"
            >
              <Image
                src="/assets/about.jpg"
                alt="about-chayon"
                width={500}
                height={700}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md object-cover"
              />
            </motion.div>
          </div>

          {/* Right Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <motion.h2
              variants={fadeUp}
              className="text-primary font-semibold uppercase tracking-[0.3em] text-sm md:text-base"
            >
              About Me
            </motion.h2>

            <motion.h3
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold mt-3 mb-6"
            >
              Get to Know Me Better
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="font-inter text-sm md:text-base lg:text-lg leading-7 lg:leading-8 py-5 max-w-xl mx-auto lg:mx-0"
            >
              I&apos;m{" "}
              <span className="font-semibold">Chayon Chandra Sarker</span>, a
              passionate Full Stack Web Developer dedicated to building modern,
              scalable, and user-friendly web applications. I enjoy turning
              ideas into real-world digital solutions with clean code,
              responsive design, and a strong focus on performance.
              <br />
              <br />
              My primary expertise includes React.js, Next.js, Node.js,
              Express.js, Prisma, PostgreSQL, MongoDB, and Tailwind CSS. I love
              learning new technologies, solving challenging problems, and
              continuously improving my development skills.
              <br />
              <br />
              I believe that great software is not only functional but also
              intuitive, fast, and visually engaging. Whether I&apos;m
              developing a frontend interface or designing a backend API, I
              always aim to write maintainable, scalable, and efficient code.
              <br />
              <br />
              I&apos;m currently focused on expanding my expertise in full-stack
              development, building high-quality projects, and collaborating
              with clients and teams to create impactful digital experiences.
            </motion.p>
          </motion.div>
        </div>

        <div
          className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4
    gap-4
    sm:gap-6
    mt-10
    md:mt-12
  "
        >
          <div
            className="
      bg-base-200
      rounded-2xl
      p-5
      sm:p-6
      text-center
      border
      border-base-300
      hover:border-primary
      transition-all
      duration-300
      hover:-translate-y-2
    "
          >
            <h3 className="font-outfit text-3xl sm:text-4xl font-bold text-primary">
              5+
            </h3>

            <p className="mt-2 font-inter text-sm sm:text-base text-base-content font-medium">
              🚀 Projects Completed
            </p>
          </div>

          <div
            className="
      bg-base-200
      rounded-2xl
      p-5
      sm:p-6
      text-center
      border
      border-base-300
      hover:border-primary
      transition-all
      duration-300
      hover:-translate-y-2
    "
          >
            <h3 className="font-outfit text-3xl sm:text-4xl font-bold text-primary">
              15+
            </h3>

            <p className="mt-2 font-inter text-sm sm:text-base text-base-content font-medium">
              💻 Technologies
            </p>
          </div>

          <div
            className="
      bg-base-200
      rounded-2xl
      p-5
      sm:p-6
      text-center
      border
      border-base-300
      hover:border-primary
      transition-all
      duration-300
      hover:-translate-y-2
    "
          >
            <h3 className="font-outfit text-3xl sm:text-4xl font-bold text-primary">
              100%
            </h3>

            <p className="mt-2 font-inter text-sm sm:text-base text-base-content font-medium">
              🌍 Responsive Websites
            </p>
          </div>

          <div
            className="
      bg-base-200
      rounded-2xl
      p-5
      sm:p-6
      text-center
      border
      border-base-300
      hover:border-primary
      transition-all
      duration-300
      hover:-translate-y-2
    "
          >
            <h3 className="font-outfit text-3xl sm:text-4xl font-bold text-primary">
              ∞
            </h3>

            <p className="mt-2 font-inter text-sm sm:text-base text-base-content font-medium">
              📚 Continuous Learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
