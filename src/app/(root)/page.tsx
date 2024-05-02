"use client";

// import Header from "@/components/sections/Header";
import Projects from "@/components/UI/ProjectList";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/projects");
  }, []);

  return (
    <main>
      {/* <WeatherComponent /> */}
      {/* <Header /> */}
    </main>
  );
}
