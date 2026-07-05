import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300 mt-20">
      <div className="w-11/12 mx-auto py-10">

        {/* Logo */}
        <div className="text-center">
          <h2 className="text-3xl font-outfit font-bold text-primary">
            Chayon
          </h2>

          <p className="font-inter text-base-content/80 mt-2">
            Full Stack Web Developer
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <Link href="/#home">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </div>

        {/* Social */}
        <div className="flex justify-center gap-4 mt-6">
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

        {/* Copyright */}
        <div className="border-t border-base-300 mt-7 pt-5 text-center">
          <p className="text-base-content/70">
            © 2026 Chayon Chandra Sarker. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;