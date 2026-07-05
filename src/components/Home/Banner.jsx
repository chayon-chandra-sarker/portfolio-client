"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
const Banner = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-10 lg:py-20">
      {/* Left Content */}
      <motion.div
        className="w-full lg:w-1/2 text-center lg:text-left"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-inter text-sm md:text-base lg:text-lg tracking-[0.3em] text-primary uppercase"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-outfit text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight py-4 leading-tight"
        >
          Chayon Chandra <span className="text-primary">Sarker</span>
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-inter text-sm md:text-base lg:text-lg leading-7 lg:leading-8 py-5 max-w-xl mx-auto lg:mx-0"
        >
          I build modern, scalable, and user-focused web applications using
          React, Next.js, Node.js, Express.js, Prisma, PostgreSQL, and MongoDB.
          Passionate about clean code, responsive design, and creating seamless
          digital experiences.
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
          <Link
            href="/assets/Resume of Chayon Chandra Sarker.pdf"
            download
            className="btn bg-primary text-black border-0 hover:bg-cyan-400"
          >
            Download Resume
            <FaArrowDown />
          </Link>

          <Link href="#contact" className="btn btn-outline btn-primary">
            Contact Me
          </Link>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          boxShadow: [
            "0 0 20px rgba(8,145,178,0.3)",
            "0 0 50px rgba(8,145,178,0.6)",
            "0 0 20px rgba(8,145,178,0.3)",
          ],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="rounded-full p-2 border-4 border-primary shadow-[0_0_80px_rgba(8,145,178,0.8)]"
      >
        <Image
          src="/assets/chayon.jpg"
          alt="Chayon Chandra Sarker"
          width={500}
          height={500}
          priority
          className="rounded-full object-cover
                 w-64 h-64
                 sm:w-80 sm:h-80
                 md:w-96 md:h-96
                 lg:w-[500px] lg:h-[500px]"
        />
      </motion.div>
    </section>
  );
};

export default Banner;
