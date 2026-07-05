import React from "react";
import Logo from "./Logo";
import NavLinks from "../buttons/NavLinks";
import ThemeToggle from "../buttons/ThemeToggle ";


const Navbar = () => {
  const nav = (
    <>
      <li>
        <NavLinks href="#home">Home</NavLinks>
      </li>
      <li>
        <NavLinks href="#about">About</NavLinks>
      </li>
      <li>
        <NavLinks href="#skill">Skills</NavLinks>
      </li>
      <li>
        <NavLinks href="#project">Projects</NavLinks>
      </li>
      <li>
        <NavLinks href="#contact">Contact</NavLinks>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-300">
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="navbar min-h-20 px-0">
          {/* Left */}
          <div className="navbar-start">
            {/* Mobile Menu */}
            <div className="dropdown lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-md dropdown-content mt-3 w-60 rounded-xl bg-base-100 shadow-lg border border-base-300 p-3 space-y-1"
              >
                {nav}
              </ul>
            </div>

            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2 text-base font-medium">
              {nav}
            </ul>
          </div>

          {/* Right */}
          <div className="navbar-end gap-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;