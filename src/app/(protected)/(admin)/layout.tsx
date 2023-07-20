"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import ArrowLeft from "@/components/svg/misc/ArrowLeft";
import Authenticated from "@/components/UI/Authetication/Authenticated";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const router = useRouter();
  const { data: session, status } = useSession();

  // TODO: SJEKK OM "autheticated" -> role = "ADMIN", om "USER" redirect til /dashboard

  if (status === "unauthenticated") return router.replace("/signin");

  if (status === "authenticated") {
    return (
      <>
        <nav className="group my-4 flex justify-between sm:my-8">
          <button onClick={() => router.push("/")} className=" duration-100 hover:scale-[1.1] hover:cursor-pointer">
            <ArrowLeft />
          </button>
          <Authenticated session={session} />
        </nav>
        {children}
      </>
    );
  }
}
