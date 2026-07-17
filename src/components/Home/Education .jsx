"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";

const educations = [
  {
    degree: "BSc in Computer Science & Engineering (Ongoing)",
    institute: "Northern University Bangladesh",
    duration: "Expected Graduation: 2029",
    details: [
      "Currently pursuing a Bachelor's degree in Computer Science & Engineering.",
      "Focused on Software Engineering, Data Structures & Algorithms, Database Systems, and Modern Web Development.",
    ],
  },
  {
    degree: "Diploma in Computer Engineering",
    institute: "Kurigram Polytechnic Institute",
    duration: "2022",
    details: [
      "Department: Computer",
      "Session: 2017–2018",
      "CGPA: 3.13 / 4.00",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institute: "Deuty High School and College",
    duration: "2017",
    details: ["Board: Dinajpur", "Group: Science", "GPA: 4.50 / 5.00"],
  },
];

const certificates = [
  {
    title: "Frontend Development Certificate",
    provider: "Programming Hero",
    description:
      "Completed an intensive Frontend Development program covering HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, and responsive web design.",
    certificateLink:
      "https://drive.google.com/file/d/165TatMhNjOwR9GrPZDEpMP5VSdLAWC8Q/view?usp=drive_link",
  },
  {
    title: "Web Design Certificate",
    provider: "IT Bangladesh",
    description:
      "Successfully completed a professional Web Design course focused on UI design principles, responsive layouts, and modern frontend web design.",
    certificateLink:
      "https://drive.google.com/file/d/1T8T0E8wrxa6t7J7c22tYbFBadcOuIOgv/view?usp=sharing",
  },
];

const Education = () => {
  return (
    <section className="py-12 lg:py-20">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-primary uppercase tracking-[0.25em] text-xs sm:text-sm md:text-base font-semibold"
          >
            Education
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-base-content mt-3"
          >
            Academic Journey
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base lg:text-lg text-base-content/80 mt-4 max-w-3xl mx-auto leading-7"
          >
            My academic background and professional training have provided me
            with a strong foundation in computer science, software engineering,
            and modern full-stack web development.
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative border-l-2 border-primary pl-5 sm:pl-8 space-y-6 sm:space-y-8 lg:space-y-10"
        >
          {educations.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="relative bg-base-200 rounded-2xl border border-base-300 p-5 sm:p-6 hover:border-primary hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -left-[30px] sm:-left-[42px] top-7 sm:top-8 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary border-4 border-base-100"></div>

              <span className="text-xs sm:text-sm font-semibold text-primary">
                {item.duration}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-base-content mt-2">
                {item.degree}
              </h3>

              <h4 className="text-base sm:text-lg text-secondary font-medium mt-1">
                {item.institute}
              </h4>

              <ul className="mt-4 space-y-2">
                {item.details.map((detail, i) => (
                  <li
                    key={i}
                    className="text-sm sm:text-base text-base-content/80 flex items-start gap-2 leading-7"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <div className="mt-16 lg:mt-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-12"
          >
            <motion.p
              variants={fadeUp}
              className="text-primary uppercase tracking-[0.25em] text-xs sm:text-sm md:text-base font-semibold"
            >
              Certifications
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-base-content mt-3"
            >
              Professional Training
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base lg:text-lg text-base-content/80 mt-4 max-w-3xl mx-auto leading-7"
            >
              Continuous learning is an essential part of my development
              journey. These certifications reflect my commitment to improving
              my technical skills and staying up to date with modern web
              technologies.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {certificates.map((certificate, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-base-200 rounded-2xl border border-base-300 p-5 sm:p-6 hover:border-primary hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-base-content">
                  {certificate.title}
                </h3>

                <p className="text-primary font-semibold mt-2 text-sm sm:text-base">
                  {certificate.provider}
                </p>

                <p className="text-sm sm:text-base text-base-content/80 mt-4 leading-7">
                  {certificate.description}
                </p>

                <Link
                  href={certificate.certificateLink}
                  target="_blank"
                  className="btn bg-primary text-black border-0 hover:bg-cyan-400 mt-6 w-full sm:w-auto rounded-full"
                >
                  View Certificate
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
