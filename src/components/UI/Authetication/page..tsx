"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import LoadingSpin from "@/components/svg/misc/LoadingSpin";
import Authenticated from "./Authenticated";

export default function Authetication() {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      return router.push("/signin");
    },
  });

  if (status === "loading") {
    return (
      <div className="my-auto flex h-10 w-10 items-center justify-center">
        <LoadingSpin />
      </div>
    );
  }

  return <Authenticated session={session} />;
}
