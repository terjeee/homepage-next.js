"use client";

// import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";

// import IconReact from "@/components/svg/technologies/IconReact";
// import IconSvelte from "@/components/svg/technologies/IconSvelte";

const paths = [
  ["home", "/"],
  ["projects", "/projects"],
  ["contact", "/contact"],
];

export default function NavDesktop() {
  const currentPath = usePathname();
  // const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="hidden items-center py-4 sm:flex">
      <ul className="flex items-center justify-center gap-2">
        {paths.map(([title, path]) => (
          <li
            key={title}
            className={`${
              currentPath === path ? "bg-darkSecondary text-white dark:bg-white dark:text-black" : null
            } rounded-md px-2 py-[2px] text-lg font-semibold hover:bg-darkSecondary hover:text-white focus:rounded-md dark:hover:bg-white dark:hover:text-black`}
          >
            <Link href={path}>{title}</Link>
          </li>
        ))}
        {/* <li onMouseLeave={() => setShowDropdown(false)} className="relative">
          <button onMouseEnter={() => setShowDropdown(true)} className="flex items-center px-2 py-1 text-lg font-semibold">
            annet
          </button>
          {showDropdown && (
            <motion.ul
              initial={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.1 }}
              className="absolute flex flex-col justify-start gap-1 rounded-md bg-white py-1 shadow dark:bg-darkBg"
            >
              <li>
                <a
                  href="https://svelte-sandbox-tau.vercel.app/"
                  target="_blank"
                  className="flex items-center gap-2 rounded-md bg-white px-8 py-2 text-sm font-semibold hover:bg-black hover:text-white dark:bg-darkBg dark:text-white dark:hover:bg-darkSecondary"
                >
                  <IconSvelte />
                  <h3>Svelte</h3>
                </a>
              </li>
              <li>
                <a
                  href="https://react-sandbox-kappa.vercel.app/"
                  target="_blank"
                  className="flex items-center gap-2 rounded-md bg-white px-8 py-2 text-sm font-semibold hover:bg-black hover:text-white dark:bg-darkBg dark:text-white dark:hover:bg-darkSecondary"
                >
                  <IconReact />
                  <h3>React</h3>
                </a>
              </li>
            </motion.ul>
          )}
        </li> */}
      </ul>
    </div>
  );
}
