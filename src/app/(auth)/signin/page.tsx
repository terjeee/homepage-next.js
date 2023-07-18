"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingSpin from "@/components/svg/misc/LoadingSpin";
import SvgGoogle from "@/components/svg/misc/SvgGoogle";
import SvgGithub from "@/components/svg/misc/SvgGithub";

export default function SignIn() {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading")
    return (
      <div className="m-auto flex justify-center">
        <LoadingSpin />
      </div>
    );

  if (status === "authenticated") return router.push("/");

  return (
    <div className="m-auto flex flex-col justify-center gap-4 p-4">
      <div className="flex items-center justify-center rounded-md border-[1px]">
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex items-center justify-center gap-5 px-6 py-3"
        >
          <SvgGoogle />
          <span className="font-semibold">Continue with Google</span>
        </button>
      </div>
      <div className="flex items-center justify-center rounded-md border-[1px]">
        <button
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="flex items-center justify-center gap-5 px-6 py-3"
        >
          <SvgGithub width={20} height={20} />
          <span className="font-semibold">Continue with Github</span>
        </button>
      </div>
    </div>
  );
}
