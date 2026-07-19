"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import Logo from "./Logo";
import NavLinks from "../buttons/NavLinks";

import { useAuth } from "@/context/AuthContext";
import ThemeToggle from "../buttons/ThemeToggle";
import { LogOut } from "lucide-react";

const Navbar = () => {
  const router = useRouter();

  const { isLoggedIn, loading, logout } = useAuth();

  const handleLogout = async () => {
    await fetch("https://portfolio-server-mpeo.onrender.com/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    logout();
    router.push("/");
  };
  // if (loading) {
  //   return (
  //     <header className="sticky top-0 z-50 shadow-sm hover:shadow-lg transition-all duration-300 bg-base-100/80 backdrop-blur-xl">
  //       <div className="w-11/12 max-w-7xl mx-auto">
  //         <div className="navbar justify-center">
  //           <span className="loading loading-spinner loading-md"></span>
  //         </div>
  //       </div>
  //     </header>
  //   );
  // }

  const nav = (
    <>
      <li
        className="
relative
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-primary
after:transition-all
after:duration-300
hover:after:w-full
"
      >
        <NavLinks href="#home">Home</NavLinks>
      </li>

      <li
        className="
relative
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-primary
after:transition-all
after:duration-300
hover:after:w-full
"
      >
        <NavLinks href="#about">About</NavLinks>
      </li>

      <li
        className="
relative
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-primary
after:transition-all
after:duration-300
hover:after:w-full
"
      >
        <NavLinks href="#skill">Skills</NavLinks>
      </li>

      <li
        className="
relative
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-primary
after:transition-all
after:duration-300
hover:after:w-full
"
      >
        <NavLinks href="#project">Projects</NavLinks>
      </li>

      <li
        className="
relative
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-primary
after:transition-all
after:duration-300
hover:after:w-full
"
      >
        <NavLinks href="#contact">Contact</NavLinks>
      </li>

      {isLoggedIn && (
        <li
          className="
relative
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-primary
after:transition-all
after:duration-300
hover:after:w-full
"
        >
          <NavLinks href="/dashboard">Dashboard</NavLinks>
        </li>
      )}
    </>
  );
  return (
    <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-400">
      <div className="w-full px-4 max-w-7xl mx-auto">
        <div className="navbar">
          <div className="navbar-start transition duration-300 hover:scale-105">
            <div className="dropdown lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                ☰
              </div>

              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56 z-50"
              >
                {nav}
              </ul>
            </div>

            <Logo />
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2">{nav}</ul>
          </div>

          <div className="navbar-end gap-2">
            <ThemeToggle />

            {!isLoggedIn ? (
              <Link
                href="/login"
                className="
btn
btn-primary
btn-sm
text-black
hover:scale-105
transition-all
duration-300
hover:shadow-lg
hover:shadow-primary/40
"
              >
                Login
              </Link>
            ) : (
              <>
                <button
                  onClick={handleLogout}
                  className="
btn
btn-error
btn-sm
gap-2
transition-all
duration-300
hover:scale-105
hover:shadow-lg
hover:shadow-red-500/40
"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
