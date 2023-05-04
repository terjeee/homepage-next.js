import { useState, useEffect } from "react";

import IconMoon from "@/components/svg/misc/IconMoon";
import IconSun from "@/components/svg/misc/IconSun";

export default function SwitchDarkLight() {
  const [theme, setTheme] = useState<string | undefined>(undefined);

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

  function toggleTheme() {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  }

  return (
    <button onClick={toggleTheme}>
      {theme === "light" && <IconMoon width="20" />}
      {theme === "dark" && <IconSun width="20" />}
    </button>
  );
}
