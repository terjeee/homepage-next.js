"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import LoadingSpin from "@/components/svg/misc/LoadingSpin";
import SVGGithub from "@/components/svg/misc/SVGGithub";
import SVGGoogle from "@/components/svg/misc/SVGGoogle";

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
    <section className="m-auto flex flex-col justify-center gap-4 p-4">
      <div className="flex items-center justify-center rounded-md border-[1px]">
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex items-center justify-center gap-5 px-6 py-3"
        >
          <SVGGoogle />
          <span className="font-semibold">Continue with Google</span>
        </button>
      </div>
      <div className="flex items-center justify-center rounded-md border-[1px]">
        <button
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="flex items-center justify-center gap-5 px-6 py-3"
        >
          <SVGGithub width={20} height={20} />
          <span className="font-semibold">Continue with Github</span>
        </button>
      </div>
    </section>
  );
}
