"use client";

import Link from "next/link";
import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/animations/variants";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Contact = () => {
  return (
    <section>
      <div className="w-11/12 mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-primary font-outfit uppercase tracking-[0.3em] font-semibold">
            Contact Me
          </p>

          <h2 className="text-4xl font-outfit font-bold text-base-content mt-3">
            Let&apos;s Work Together
          </h2>

          <p className="text-base-content/80 mt-4 max-w-2xl mx-auto">
            I&apos;m open to freelance projects, full-time positions, remote, hybrid, and on-site opportunities. Whether you&apos;re looking for a developer to join your team or collaborate on an exciting project, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-base-200 rounded-2xl p-8 border border-base-300">
            <h3 className="text-2xl font-bold text-base-content mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl text-primary" />
                <div>
                  <h4 className="font-semibold text-base-content">Email</h4>
                  <p className="text-base-content/80">chayon438@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-2xl text-primary" />
                <div>
                  <h4 className="font-semibold text-base-content">Phone</h4>
                  <p className="text-base-content/80">+880 1779-188207</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-2xl text-primary" />
                <div>
                  <h4 className="font-semibold text-base-content">Location</h4>
                  <p className="text-base-content/80">Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Link
                  href="https://github.com/chayon-chandra-sarker"
                  target="_blank"
                  className="btn btn-circle btn-outline btn-primary"
                >
                  <FaGithub />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/chayon11/"
                  target="_blank"
                  className="btn btn-circle btn-outline btn-primary"
                >
                  <FaLinkedin />
                </Link>

                <Link
                  href="https://www.facebook.com/chayonsarkerns"
                  target="_blank"
                  className="btn btn-circle btn-outline btn-primary"
                >
                  <FaFacebook />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-base-200 rounded-2xl p-8 border border-base-300">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />

              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="textarea textarea-bordered w-full"
              ></textarea>

              <button className="btn bg-primary text-black border-0 hover:bg-cyan-400 w-full">Send Message <BsFillSendFill /></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
