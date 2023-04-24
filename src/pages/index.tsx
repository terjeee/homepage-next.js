import { Inter } from "next/font/google";

import Typewriter from "@/components/sections/Typewriter";
import SlideShow from "@/components/sections/SlideShow";
import Projects from "@/components/sections/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Typewriter />
      <SlideShow />
      <Projects />
    </main>
  );
}
