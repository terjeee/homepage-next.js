import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Login from "@/components/misc/Login";
import SwitchDarkLight from "@/components/misc/SwitchDarkLight";
import IconReact from "@/components/svg/technologies/IconReact";
import IconSvelte from "@/components/svg/technologies/IconSvelte";
import IconVue from "@/components/svg/technologies/IconVue";
import IconArrowDown from "@/components/svg/misc/IconArrowDown3";

const paths = [
  ["home", "/"],
  // ["projects", "/"],
  ["contact", "/contact"],
];

export default function NavDesktop() {
  const currentPath = useRouter().pathname;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="hidden items-center py-4 sm:flex sm:justify-between">
      <div className="flex gap-3">
        {paths.map(([title, path]) => (
          <Link
            href={path}
            key={title}
            className={`text-lg font-semibold dark:text-white ${
              currentPath !== path ? "" : "underline"
            } underline-offset-4 hover:underline dark:hover:text-white `}
          >
            {title}
          </Link>
        ))}
        <div onMouseLeave={() => setDropdownOpen(false)} className="relative">
          <button onMouseEnter={() => setDropdownOpen(true)} className="flex items-center text-lg font-semibold">
            sandbox
            <IconArrowDown height={15} width={15} className="stroke-black dark:stroke-white" />
          </button>
          {dropdownOpen && (
            <ul className="absolute flex flex-col rounded py-1 shadow">
              <Link
                href="/react"
                className="flex items-center gap-2 bg-white px-8 py-2 text-sm font-semibold hover:bg-lightGrey dark:bg-darkBg dark:text-white dark:hover:bg-darkSecondary"
              >
                <IconReact />
                <h3>React</h3>
              </Link>
              <a
                href="/"
                className="flex items-center gap-2 bg-white px-8 py-2 text-sm hover:bg-lightGrey dark:bg-darkBg dark:text-white dark:hover:bg-darkSecondary"
              >
                <IconSvelte />
                <h3>Svelte</h3>
              </a>
              <a
                href="/"
                className="flex items-center gap-2 bg-white px-8 py-2 text-sm hover:bg-lightGrey dark:bg-darkBg dark:text-white dark:hover:bg-darkSecondary"
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
