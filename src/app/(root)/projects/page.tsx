"use client";

import SlideShow from "@/components/UI/SlideShow";
import ProjectList from "@/components/UI/ProjectList";
import { TypeAnimation } from "react-type-animation";

export default function Projects() {
  return (
    <main className="sm:mx-8">
      <h1 className="mb-16 mt-10 pb-4 text-center font-silkscreen text-3xl tracking-[0.2em] sm:text-4xl md:mb-20 md:mt-16">
        <TypeAnimation
          sequence={["prosjekter", 10000, " prosjekter", 10000]}
          speed={1}
          cursor={true}
          repeat={Infinity}
          className="font-silkscreen"
        />
      </h1>
      <SlideShow />
      <ProjectList />
    </main>
  );
}
