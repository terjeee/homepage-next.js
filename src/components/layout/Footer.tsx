import Link from "next/link";

import SVGMail from "@/components/svg/misc/SVGMail";
import SVGGithub from "@/components/svg/misc/SVGGithub";

const languages = ["no", "en", "jp"];

export default function Footer() {
  return (
    <footer className="relative py-12">
      <div className="items-align flex items-center justify-center">
        <div className="mx-auto flex items-center gap-2">
          <a href="https://www.github.com/terjeee" target="_blank" rel="noreferrer" className="scale-90 hover:scale-105">
            <SVGGithub />
          </a>
          <Link href="/contact" className="hover:scale-105">
            <SVGMail />
          </Link>
        </div>
        <ul className="absolute right-0 flex justify-end gap-2 py-2">
          {languages.map((language, index) => {
            return (
              <li className="flex gap-2">
                <button className="hover:font-semibold focus:font-normal">{language}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
