"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import IconReact from "@/components/svg/technologies/IconReact";
import IconSvelte from "@/components/svg/technologies/IconSvelte";

const paths = [
  ["home", "/"],
  // ["projects", "/"],
  ["contact", "/contact"],
];

export default function NavDesktop() {
  const currentPath = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="hidden items-center py-4 sm:flex">
      <ul className="flex gap-3">
        {paths.map(([title, path]) => (
          <li key={title}>
            <Link
              href={path}
              className={`text-lg font-semibold dark:text-white ${
                currentPath !== path ? "" : "underline"
              } underline-offset-4 hover:underline dark:hover:text-white `}
            >
              {title}
            </Link>
          </li>
        ))}
        <li onMouseLeave={() => setDropdownOpen(false)} className="relative">
          <button onMouseEnter={() => setDropdownOpen(true)} className="flex items-center text-lg font-semibold">
            sandbox
          </button>
          {dropdownOpen && (
            <ul className=" absolute flex flex-col rounded bg-white py-1 shadow dark:bg-darkBg">
              <a
                href="https://svelte-sandbox-tau.vercel.app/"
                target="_blank"
                className="flex items-center gap-2 bg-white px-8 py-2 text-sm font-semibold hover:bg-lightGrey dark:bg-darkBg dark:text-white dark:hover:bg-darkSecondary"
              >
                <IconSvelte />
                <h3>Svelte</h3>
              </a>
              <a
                href="https://react-sandbox-kappa.vercel.app/"
                target="_blank"
                className="flex items-center gap-2 bg-white px-8 py-2 text-sm font-semibold hover:bg-lightGrey dark:bg-darkBg dark:text-white dark:hover:bg-darkSecondary"
              >
                <IconReact />
                <h3>React</h3>
              </a>
              {/* <a
                href="/"
                className="flex items-center gap-2 bg-white px-8 py-2 text-sm hover:bg-lightGrey dark:bg-darkBg dark:text-white dark:hover:bg-darkSecondary"
              >
                <IconVue className="block" />
                <h3>Vue</h3>
              </a> */}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
