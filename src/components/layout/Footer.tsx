import Link from "next/link";

import SVGMail from "@/components/svg/misc/SVGMail";
import SVGGithub from "@/components/svg/misc/SVGGithub";

const languages = ["no", "en", "jp"];

export default function Footer() {
  return (
    <footer className="relative mt-auto py-12">
      <div className="flex items-center justify-center gap-2">
        <a href="https://www.github.com/terjeee" target="_blank" rel="noreferrer" className="scale-90 hover:scale-105">
          <SVGGithub />
        </a>
        <Link href="/contact" className="hover:scale-105">
          <SVGMail />
        </Link>
        <ul className="absolute bottom-0 right-0 flex gap-2 py-2">
          {languages.map((language, index) => {
            return (
              <li className="flex gap-2">
                <button className="focus:font-normal hover:font-semibold">
                  {language}
                </button>
                {/* {index + 1 < languages.length ? "|" : ""} */}
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
