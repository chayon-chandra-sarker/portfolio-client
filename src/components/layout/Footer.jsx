"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-base-300 bg-base-200/60 backdrop-blur-xl">
      {/* Top Glow */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="w-11/12 max-w-7xl mx-auto py-14">
        <div className="grid gap-12 md:grid-cols-3 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black font-outfit bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Chayon Sarker
            </h2>

            <p className="mt-4 text-base-content/70 leading-7 max-w-sm">
              Passionate Full Stack Developer building modern, responsive and
              scalable web applications with clean UI and powerful backend
              architecture.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-wrap justify-center gap-5 text-base-content/70">
              {[
                ["Home", "/#home"],
                ["About", "/#about"],
                ["Skills", "/#skills"],
                ["Projects", "/#projects"],
                ["Contact", "/#contact"],
              ].map(([name, href]) => (
                <Link
                  key={name}
                  href={href}
                  className="transition-all duration-300 hover:text-primary hover:-translate-y-1"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-5">
              Connect With Me
            </h3>

            <div className="flex justify-center md:justify-end gap-4">
              <Link
                href="https://github.com/chayon-chandra-sarker"
                target="_blank"
                className="btn btn-circle btn-outline btn-primary hover:scale-110 transition duration-300"
              >
                <FaGithub size={20} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/chayon11/"
                target="_blank"
                className="btn btn-circle btn-outline btn-primary hover:scale-110 transition duration-300"
              >
                <FaLinkedin size={20} />
              </Link>

              <Link
                href="https://www.facebook.com/chayonsarkerns"
                target="_blank"
                className="btn btn-circle btn-outline btn-primary hover:scale-110 transition duration-300"
              >
                <FaFacebook size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-base-content/20 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-sm text-base-content/60 flex items-center gap-2 text-center">
            © {year} Chayon Sarker. Made with
            <FaHeart className="text-red-500 animate-pulse" />
            All Rights Reserved.
          </p>

          <Link
            href="/#home"
            className="btn btn-primary btn-circle shadow-lg hover:scale-110 transition duration-300"
          >
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;