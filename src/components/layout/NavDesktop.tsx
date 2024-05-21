"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const paths = [
  ["home", "/"],
  ["projects", "/projects"],
  ["contact", "/contact"],
];

export default function NavDesktop() {
  const currentPath = usePathname();

  return (
    <div className="hidden items-center py-4 sm:flex">
      <ul className="flex items-center justify-center gap-3 md:gap-3">
        {paths.map(([title, path]) => (
          <li
            key={title}
            className={`border-b-2 px-1 pb-[0.5px] font-semibold hover:border-black hover:dark:border-white
            ${currentPath !== path ? "border-[rgba(0,0,0,0)]" : "border-red hover:border-red dark:hover:border-red"}`}
          >
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
