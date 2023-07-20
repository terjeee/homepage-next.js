"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import IconMoon from "@/components/svg/misc/SVGMoon";
import IconSun from "@/components/svg/misc/SVGSun";

export default function SwitchDarkMode() {
  const [theme, setTheme] = useState<string | undefined>(undefined);

  function toggleTheme() {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") return setTheme("dark");
    setTheme("light");
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  return (
    <motion.button onClick={toggleTheme} whileHover={{ scale: 1.1 }} className="my-auto">
      {theme === "light" && <IconMoon width="20" />}
      {theme === "dark" && <IconSun width="20" />}
    </motion.button>
  );
}
