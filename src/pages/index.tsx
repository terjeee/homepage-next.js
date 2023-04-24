import { Inter } from "next/font/google";

import Typewriter from "@/components/sections/Typewriter";
import SlideShow from "@/components/ui/SlideShow";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Typewriter />
      <SlideShow />
    </main>
  );
}
