import SlideShow from "@/components/UI/SlideShow";
import ProjectList from "@/components/UI/ProjectList";

export default function Projects() {
  return (
    <main>
      <h1 className="my-16 pb-4 text-center font-silkscreen text-4xl tracking-[0.2em] md:my-24 md:pb-8">PROJECTS</h1>
      <SlideShow />
      <div className="my-4">
        <ProjectList />
      </div>
    </main>
  );
}
