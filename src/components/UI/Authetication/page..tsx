"use client";

import { useSession } from "next-auth/react";

import LoadingSpin from "@/components/svg/misc/LoadingSpin";
import SignIn from "@/components/UI/Authetication/SignIn";
import Authenticated from "./Authenticated";

export default function Authetication() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="my-auto flex h-10 w-10 items-center justify-center">
        <LoadingSpin />
      </div>
    );
  }

  if (status === "authenticated") {
    return <Authenticated session={session} />;
  }

  return <SignIn />;
}
