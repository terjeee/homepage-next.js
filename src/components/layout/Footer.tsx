import Link from "next/link";

import IconGithub from "@/components/svg/misc/IconGithub";
import IconMail from "@/components/svg/misc/IconMail";

export default function Footer() {
  return (
    <footer className="mt-auto py-12">
      <div className="flex items-center justify-center gap-2">
        <a href="https://www.github.com/terjeee" target="_blank" rel="noreferrer" className="scale-90 hover:scale-95">
          <IconGithub />
        </a>
        <Link href="/contact" className=" hover:scale-110">
          <IconMail />
        </Link>
      </div>
    </footer>
  );
}
