"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { BsFillSendFill } from "react-icons/bs";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { FaFacebook } from "react-icons/fa6";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "https://portfolio-server-mpeo.onrender.com/api/messages/create",
        formData
      );

      if (res.data.success) {
        toast.success("Message sent successfully ✅");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message || "Failed to send message"
      );
    } finally {
      setLoading(false);
    }
  };

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
          I&apos;m open to freelance projects, full-time positions, remote,
          hybrid, and on-site opportunities. Whether you&apos;re looking for a
          developer to join your team or collaborate on an exciting project,
          I&apos;d love to hear from you.
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
                <p className="text-base-content/80">
                  chayon438@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-2xl text-primary" />
              <div>
                <h4 className="font-semibold text-base-content">Phone</h4>
                <p className="text-base-content/80">
                  +880 1779-188207
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl text-primary" />
              <div>
                <h4 className="font-semibold text-base-content">
                  Location
                </h4>
                <p className="text-base-content/80">
                  Dhaka, Bangladesh
                </p>
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
          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="input input-bordered w-full"
              required
            />

            <textarea
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="btn bg-primary text-black border-0 hover:bg-cyan-400 w-full"
            >
              {loading ? "Sending..." : "Send Message"}
              <BsFillSendFill />
            </button>

          </form>
        </div>
      </div>
    </div>
  </section>
);

};

export default Contact;
