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
    <section className="flex w-full flex-col-reverse items-center justify-between gap-12 overflow-hidden py-10 lg:flex-row lg:py-20">
      {/* Left Content */}
      <motion.div
        className="w-full text-center lg:w-1/2 lg:text-left"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-inter text-primary text-sm tracking-[0.3em] uppercase md:text-base lg:text-lg"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-outfit py-4 text-4xl leading-tight font-extrabold tracking-tight break-words sm:text-5xl lg:text-5xl"
        >
          Chayon Chandra <span className="text-primary">Sarker</span>
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className="font-outfit from-primary to-secondary bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent sm:text-3xl lg:text-4xl"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-inter mx-auto max-w-xl py-5 text-sm leading-7 md:text-base lg:mx-0 lg:text-lg lg:leading-8"
        >
          I build modern, scalable, and user-focused web applications using
          React, Next.js, Node.js, Express.js, Prisma, PostgreSQL, and MongoDB.
          Passionate about clean code, responsive design, and creating seamless
          digital experiences.
        </motion.p>
        <div className="mt-6 flex w-full flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
          <a
            href="/assets/Resume of Chayon Chandra Sarker.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-primary w-full rounded-full border-0 text-black hover:bg-cyan-400 sm:w-auto sm:min-w-[190px]"
          >
            Download Resume
            <FaArrowDown />
          </a>

          <Link
            href="#contact"
            className="btn btn-outline btn-primary w-full rounded-full sm:w-auto sm:min-w-[190px]"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="border-primary mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-full border-4 shadow-[0_0_60px_rgba(8,145,178,0.6)] sm:max-w-[380px] lg:max-w-[450px]"
      >
        <Image
          src="/assets/chayon.jpg"
          alt="Chayon Chandra Sarker"
          width={500}
          height={500}
          priority
          className="h-full w-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Banner;
