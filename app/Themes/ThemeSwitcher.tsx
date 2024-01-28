"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { CiSun } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const DarkIcon = () => <MdDarkMode className="h-8 w-8" />;

const LightIcon = () => <CiSun className="h-8 w-8" />;

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Aria Name"
      className={`hidden mx-2 text-zinc-600 transition-colors duration-300 transform lg:block dark:text-zinc-200 hover:text-zinc-700 dark:hover:text-zinc-400 focus:text-zinc-700 dark:focus:text-zinc-400 focus:outline-none`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <DarkIcon /> : <LightIcon />}
    </button>
  );
};
