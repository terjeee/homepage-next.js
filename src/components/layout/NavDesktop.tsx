import Link from "next/link";
import { useRouter } from "next/router";

import Login from "@/components/misc/Login";

export default function NavDesktop() {
  const currentPath = useRouter().pathname;
  const paths = [
    ["home", "/"],
    ["projects", "/"],
    ["contact", "/contact"],
  ];

  console.log(currentPath);

  return (
    <nav className="hidden py-4 sm:flex sm:justify-between items-center">
      <div className="flex gap-2">
        {paths.map(([title, path]) => (
          <Link
            href={path}
            key={title}
            className={`font-semibold ${
              currentPath === path ? "text-black underline" : "text-darkGrey"
            } hover:text-black underline-offset-8 hover:underline `}
          >
            {title}
          </Link>
        ))}
      </div>
      <div>
        <Login />
      </div>
    </nav>
  );
}
