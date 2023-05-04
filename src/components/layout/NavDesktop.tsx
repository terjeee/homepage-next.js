import Link from "next/link";
import { useRouter } from "next/router";

import Login from "@/components/misc/Login";
import SwitchDarkLight from "@/components/misc/SwitchDarkLight";

export default function NavDesktop() {
  const currentPath = useRouter().pathname;
  const paths = [
    ["home", "/"],
    // ["projects", "/"],
    ["contact", "/contact"],
  ];

  return (
    <nav className="hidden py-4 sm:flex sm:justify-between items-center">
      <div className="flex gap-2">
        {paths.map(([title, path]) => (
          <Link
            href={path}
            key={title}
            className={`text-black dark:text-white font-semibold ${
              currentPath === path ? "underline" : ""
            } hover:text-black dark:hover:text-white underline-offset-4 hover:underline `}
          >
            {title}
          </Link>
        ))}
      </div>
      <div className="flex gap-2">
        <SwitchDarkLight />
        <Login />
      </div>
    </nav>
  );
}
