import { PROJECTS } from "@/assets/projects";

import IconDots from "@/components/svg/misc/IconDots";
import IconRepository from "@/components/svg/misc/IconRepository";
import SlideShow from "@/components/misc/SlideShow";

export default function Projects() {
  const projects = [...PROJECTS].reverse();

  return (
    <section>
      <h1 className="py-6 text-center font-silkscreen text-4xl tracking-widest">PROSJEKTER</h1>
      <SlideShow />
      <ul className="my-6 flex flex-col gap-5 sm:grid sm:auto-cols-fr">
        {projects.map((el, index) => {
          const colSpan = (index + 1) % 3 === 0 ? "col-span-2" : "col-span-1";
          return (
            <li key={el.id} className={`${colSpan} cursor-pointer rounded shadow-github`}>
              <a href={el.link} target="_blank" rel="noreferrer" className="flex flex-col gap-2 p-4">
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
                  <span className={`my-auto h-[12px] w-[12px] rounded-full bg-${el.colorDot}`} style={{ backgroundColor: el.colorDot }}></span>
                  <p className="text-xs">{el.text}</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
