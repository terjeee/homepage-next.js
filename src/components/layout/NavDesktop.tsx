import Link from "next/link";

import Login from "@/components/ui/Login";

export default function NavDesktop() {
  const urlPaths = [
    ["home", "/"],
    ["projects", "/"],
    ["contact", "/contact"],
  ];

  return (
    <nav className="hidden py-4 sm:flex sm:justify-between">
      <div className="flex gap-2">
        {urlPaths.map(([title, url]) => (
          <Link href={url} key={title} className="text-black font-medium hover:text-darkGrey ">
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
