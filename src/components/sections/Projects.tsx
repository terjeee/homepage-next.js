import { PROJECTS } from "@/assets/projects";

import IconDots from "@/components/svg/misc/IconDots";
import IconRepository from "@/components/svg/misc/IconRepository";
import MaxWidth from "../ui/MaxWidth";

export default function Projects() {
  return (
    <MaxWidth width="max-w-screen-sm">
      <ul className="my-4 flex flex-col gap-4 sm:grid sm:auto-cols-fr">
        {PROJECTS.reverse().map((el, index) => {
          const colSpan = (index + 1) % 3 === 0 ? "col-span-2" : "col-span-1";

          return (
            <li key={el.id} className={`p-3 ${colSpan} shadow-github rounded`}>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <div className="flex justify-center items-center gap-2">
                    <IconRepository width="15px" />
                    <a href={el.link} target="_blank" rel="noreferrer" className="hover:underline">
                      <h2 className="text-sm font-bold text-link cursor-button">{el.title}</h2>
                    </a>
                    <span className=" py-[0.1rem] px-[0.25rem] mx-auto text-[9px] font-bold text-center border border-[#A9A9A9] rounded-full">
                      Public
                    </span>
                  </div>
                  <IconDots width="12px" fill="#A9A9A9" />
                </div>
                <div className="flex gap-2 items-align">
                  <span
                    className={`my-auto h-[12px] w-[12px] rounded-full bg-${el.colorDot}`}
                    style={{ backgroundColor: el.colorDot }}
                  ></span>
                  <p className="text-[11px]">{el.text}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </MaxWidth>
  );
}