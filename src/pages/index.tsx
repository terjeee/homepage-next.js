import { Inter } from "next/font/google";

// import Header from "@/components/sections/Header";
import Projects from "@/components/sections/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Projects />
    </>
  );
}
