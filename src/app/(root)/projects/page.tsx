"use client";

import SlideShow from "@/components/UI/SlideShow";
import ProjectList from "@/components/UI/ProjectList";
import { TypeAnimation } from "react-type-animation";

export default function Projects() {
  return (
    <main className="sm:px-10">
      <h1 className="my-10 pb-4 text-center font-silkscreen text-3xl tracking-[0.2em] sm:text-4xl sm:mb-16 sm:mt-20">
        <TypeAnimation
          sequence={["prosjekter", 10000, " prosjekter", 10000]}
          speed={1}
          cursor={true}
          repeat={Infinity}
          className="font-silkscreen"
        />
      </h1>
      <div className="hidden sm:block mx-8">
        <SlideShow />
      </div>
      <ProjectList />
    </main>
  );
}
