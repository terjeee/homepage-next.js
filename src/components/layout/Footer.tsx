import Link from "next/link";

import SVGGithub from "@/components/svg/misc/SVGGithub";
import SVGMail from "@/components/svg/misc/SVGMail";

export default function Footer() {
  return (
    <footer className="mt-auto py-12">
      <div className="flex items-center justify-center gap-2">
        <a href="https://www.github.com/terjeee" target="_blank" rel="noreferrer" className="scale-90 hover:scale-105">
          <SVGGithub />
        </a>
        <Link href="/contact" className=" hover:scale-105">
          <SVGMail />
        </Link>
      </div>
    </footer>
  );
}
