"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`${path == path.startsWith (href) && "text-primary"} text-lg font-medium`}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
