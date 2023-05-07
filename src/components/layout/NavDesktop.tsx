import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Login from "@/components/misc/Login";
import SwitchDarkLight from "@/components/misc/SwitchDarkLight";
import IconReact from "@/components//svg/technologies/IconReact";
import IconSvelte from "../svg/technologies/IconSvelte";
import IconVue from "../svg/technologies/IconVue";

const paths = [
  ["home", "/"],
  // ["projects", "/"],
  ["contact", "/contact"],
];

export default function NavDesktop() {
  const currentPath = useRouter().pathname;
  const [dropdownOpen, setDropdownOpen] = useState(true);

  return (
    <nav className="hidden items-center py-4 sm:flex sm:justify-between">
      <div className="flex gap-2">
        {paths.map(([title, path]) => (
          <Link
            href={path}
            key={title}
            className={`font-semibold dark:text-white ${
              currentPath !== path ? "" : "underline"
            } underline-offset-4 hover:underline dark:hover:text-white `}
          >
            {title}
          </Link>
        ))}
        <div onMouseLeave={() => setDropdownOpen(false)} className="relative">
          <button onMouseEnter={() => setDropdownOpen(true)} className="font-semibold">
            sandbox
          </button>
          {dropdownOpen && (
            <ul className="absolute flex flex-col rounded pt-2 shadow">
              <Link
                href="/react"
                className="dark:hover:bg-gray-600 flex items-center gap-2 bg-white px-8 py-2 hover:bg-lightGrey dark:bg-darkBg dark:text-white"
              >
                <IconReact />
                <h3>React</h3>
              </Link>
              <a
                href="/"
                className="dark:hover:bg-gray-600 flex items-center gap-2 bg-white px-8 py-2 hover:bg-lightGrey dark:bg-darkBg dark:text-white"
              >
                <IconSvelte />
                <h3>Svelte</h3>
              </a>
              <a
                href="/"
                className="dark:hover:bg-gray-600 flex items-center gap-2 bg-white px-8 py-2 hover:bg-lightGrey dark:bg-darkBg dark:text-white"
              >
                <IconVue className="block" />
                <h3>Vue</h3>
              </a>
            </ul>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <SwitchDarkLight />
        <Login />
      </div>
    </nav>
  );
}
