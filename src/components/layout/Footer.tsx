import Link from "next/link";

import IconGithub from "@/components/svg/IconGithub";
import IconMail from "@/components/svg/IconMail";

export default function Footer() {
  return (
    <footer className="">
      <div className="flex justify-center items-center gap-2">
        <a href="https://www.github.com/terjeee" target="_blank" rel="noreferrer" className="scale-90 hover:scale-100">
          <IconGithub />
        </a>
        <Link href="/contact" className=" hover:scale-110">
          <IconMail />
        </Link>
      </div>
    </footer>
  );
}