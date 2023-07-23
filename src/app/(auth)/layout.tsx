"use client";

import { useRouter } from "next/navigation";
import ArrowLeft from "@/components/svg/misc/ArrowLeft";
import Footer from "@/components/layout/Footer";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const router = useRouter();

  return (
    <>
      <nav className="group my-4 flex justify-between sm:my-8">
        <button onClick={() => router.push("/")} className=" duration-100 hover:scale-[1.1] hover:cursor-pointer">
          <ArrowLeft />
        </button>
      </nav>
      {children}
      <Footer />
    </>
  );
}
