"use client";

// import Header from "@/components/sections/Header";
import Projects from "@/components/UI/ProjectList";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  router.replace("/projects");

  return (
    <main>
      {/* <Header /> */}
      {/* <Projects /> */}
    </main>
  );
}
