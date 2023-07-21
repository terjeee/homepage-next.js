import Link from "next/link";

import SVGMail from "@/components/svg/misc/SVGMail";
import IconGithub from "@/components/svg/misc/IconGithub";

export default function Footer() {
  return (
    <footer className="mt-auto py-12">
      <div className="flex items-center justify-center gap-2">
        <a href="https://www.github.com/terjeee" target="_blank" rel="noreferrer" className="scale-90 hover:scale-105">
          <IconGithub />
        </a>
        <Link href="/contact" className=" hover:scale-105">
          <SVGMail />
        </Link>
      </div>
    </footer>
  );
}
