import Link from "next/link";

import SVGMail from "@/components/svg/misc/SVGMail";
import SVGGithub from "@/components/svg/misc/SVGGithub";

const languages = ["no", "en", "jp"];

export default function Footer() {
  return (
    <footer className="relative mt-auto px-8 pb-10 pt-20">
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-0">
        <div className="flex items-center justify-center gap-2">
          <a
            href="https://www.github.com/terjeee"
            target="_blank"
            rel="noreferrer"
            className="scale-90 hover:scale-105"
          >
            <SVGGithub />
          </a>
          <Link href="/contact" className="hover:scale-105">
            <SVGMail />
          </Link>
        </div>
        {/* <ul className="flex gap-2 sm:absolute sm:right-0 sm:mr-10">
          {languages.map((language, index) => {
            return (
              <li className="flex gap-2">
                <button className="hover:font-semibold focus:font-normal">{language}</button>
              </li>
            );
          })}
        </ul> */}
      </div>
    </footer>
  );
}
