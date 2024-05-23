"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import LoadingSpin from "@/components/svg/misc/LoadingSpin";
import SVGGoogle from "@/components/svg/misc/SVGGoogle";
import SVGGithub from "@/components/svg/misc/SVGGithub";

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
    <section className="m-auto flex flex-col justify-center gap-4">
      <div className="flex items-center justify-center rounded-md border-[1px]">
        <button onClick={() => signIn("google", { callbackUrl: "/dashboard" })} className="flex items-center justify-center gap-5 px-6 py-3">
          <SVGGoogle />
          <span className="font-semibold">Continue with Google</span>
        </button>
      </div>
      <div className="flex items-center justify-center rounded-md border-[1px]">
        <button onClick={() => signIn("github", { callbackUrl: "/dashboard" })} className="flex items-center justify-center gap-5 px-6 py-3">
          <SVGGithub />
          <span className="font-semibold">Continue with Github</span>
        </button>
      </div>
      {/* <hr className="my-2" />
      <form action="submit" onSubmit={() => alert("Sign In")} className="flex flex-col gap-4">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="username" className="rounded-md border px-2 py-1" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="password" className="rounded-md border px-2 py-1" />
        <button type="submit" className="rounded-md border px-2 py-1">
          Sign In
        </button>
      </form> */}
    </section>
  );
}
