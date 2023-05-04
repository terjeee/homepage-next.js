import { Inter } from "next/font/google";

import Typewriter from "@/components/sections/Typewriter";
import Projects from "@/components/sections/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Typewriter />
      <Projects />
    </>
  );
}
