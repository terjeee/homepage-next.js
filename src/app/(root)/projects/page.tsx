"use client";

import SlideShow from "@/components/UI/SlideShow";
import ProjectList from "@/components/UI/ProjectList";
import { TypeAnimation } from "react-type-animation";

export default function Projects() {
  return (
    <main className="md:px-8">
      <h1 className="my-16 pb-4 text-center font-silkscreen text-3xl tracking-[0.2em] sm:text-4xl md:my-20">
        <TypeAnimation sequence={["prosjekter", 10000, " prosjekter", 10000]} speed={1} cursor={true} repeat={Infinity} className="font-silkscreen" />
      </h1>
      <ProjectList />
      <div className="py-4 md:py-6">
        <SlideShow />
      </div>
    </main>
  );
}
