import Link from "next/link";

import IconGithub from "@/components/svg/ui/IconGithub";
import IconMail from "@/components/svg/ui/IconMail";

export default function Footer() {
  return (
    <footer className="py-16">
      <div className="flex justify-center items-center gap-2">
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
