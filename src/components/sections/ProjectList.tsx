"use client";

import { motion } from "framer-motion";

import { PROJECTS } from "../../../public/projects";
import IconRepository from "@/components/svg/misc/SVGRepository";
import SVGDots from "@/components/svg/misc/SVGDots";

export default function ProjectList() {
  const projects = [...PROJECTS].reverse();

  return (
    <ul className="flex flex-col gap-5 sm:grid sm:auto-cols-fr">
      {projects.map((el, index) => {
        const colSpan = (index + 1) % 3 === 0 ? "col-span-2" : "col-span-1";

        return (
          projects.length > 0 && (
            <motion.li
              key={el.id}
              initial={{ opacity: 0, translateY: -25 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`${colSpan} group cursor-pointer rounded-md shadow-github`}
            >
              <a href={el.link} target="_blank" rel="noreferrer" className="flex flex-col gap-2 px-4 py-3">
                <div className="flex justify-between">
                  <div className="flex items-center justify-center gap-2">
                    <IconRepository width="15px" />
                    <h2 className=" cursor-button text-md font-bold text-link group-hover:underline md:text-lg">{el.title}</h2>
                    <span className="mx-auto rounded-full border border-[#A9A9A9] px-[0.25rem] py-[0.1rem] text-center text-[9px] font-bold">
                      Public
                    </span>
                  </div>
                  {/* // TODO: implement DND */}
                  <SVGDots width="12px" fill="#A9A9A9" />
                </div>
                <div className="items-align flex gap-2">
                  <span className={`my-auto h-[12px] w-[12px] rounded-full bg-${el.colorDot}`} style={{ backgroundColor: el.colorDot }}></span>
                  <p className="text-xs">{el.text}</p>
                </div>
              </a>
            </motion.li>
          )
        );
      })}
    </ul>
  );
}
