"use client";

import { useTheme } from "next-themes";
import { MdOutlineHighlight } from "react-icons/md";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      className="btn btn-circle btn-ghost btn-sm"
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
    >
      <MdOutlineHighlight size={30} />
    </button>
  );
}