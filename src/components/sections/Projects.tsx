"use client";

import { PROJECTS } from "../../../public/projects";

import { motion } from "framer-motion";

import IconDots from "@/components/svg/misc/IconDots";
import IconRepository from "@/components/svg/misc/IconRepository";
import SlideShow from "@/components/UI/SlideShow";

export default function Projects() {
  const projects = [...PROJECTS].reverse();

  return (
    <section className="pt-2">
      <motion.h1
        initial={{ opacity: 0, translateX: 0 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5 }}
        className="py-6 text-center font-silkscreen text-4xl tracking-widest"
      >
        PROSJEKTER
      </motion.h1>
      <SlideShow />
      <ul className="my-6 flex flex-col gap-5 sm:grid sm:auto-cols-fr">
        {projects.map((el, index) => {
          const colSpan = (index + 1) % 3 === 0 ? "col-span-2" : "col-span-1";
          return (
            // hvis listen fetches bruk {projects.length > 0  && <motion.li />} for ikke å kjøre for tidlig
            <motion.li
              key={el.id}
              initial={{ opacity: 0, translateY: -25 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className={`${colSpan} cursor-pointer rounded-md shadow-github`}
            >
              <a href={el.link} target="_blank" rel="noreferrer" className="flex flex-col gap-2 px-4 py-3">
                <div className="flex justify-between">
                  <div className="flex items-center justify-center gap-2">
                    <IconRepository width="15px" />
                    <h2 className="cursor-button text-md font-bold text-link md:text-lg">{el.title}</h2>
                    <span className="mx-auto rounded-full border border-[#A9A9A9] px-[0.25rem] py-[0.1rem] text-center text-[9px] font-bold">
                      Public
                    </span>
                  </div>
                  <IconDots width="12px" fill="#A9A9A9" />
                </div>
                <div className="items-align flex gap-2">
                  <span
                    className={`my-auto h-[12px] w-[12px] rounded-full bg-${el.colorDot}`}
                    style={{ backgroundColor: el.colorDot }}
                  ></span>
                  <p className="text-xs">{el.text}</p>
                </div>
              </a>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
