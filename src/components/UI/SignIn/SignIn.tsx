"use client";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SignIn() {
  const { data: session, status } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);

  if (status === "loading") return <></>;
  if (status === "authenticated")
    return (
      <button className="relative my-auto cursor-pointer" onClick={() => setShowDropdown((prevState) => !prevState)}>
        <Image src={session.user?.image!} height={40} width={40} alt="profilbilde" className="rounded-full" />
        {showDropdown && (
          <div className="dark:bg-darkBgrounded absolute left-auto right-0 z-20 mt-2 flex w-20 flex-col rounded-md bg-white shadow dark:bg-darkBg">
            <ul>
              <li className="font-md rounded-md bg-white px-2 py-2 text-sm font-semibold hover:bg-lightGrey dark:bg-darkBg dark:text-white dark:hover:bg-darkSecondary">
                <button onClick={() => signOut()}>Sign Out</button>
              </li>
            </ul>
          </div>
        )}
      </button>
    );

  return (
    <Link
      href="/api/auth/signin"
      className=" my-auto cursor-pointer rounded-full bg-orange px-4 py-2 text-xs font-medium tracking-widest text-white transition duration-200 hover:scale-105 hover:bg-white hover:text-black dark:hover:bg-darkBg dark:hover:text-white"
    >
      SIGN IN
    </Link>
  );
}

// TODO: legg til svart outline på hover
// TODO: eventuelt border før/etter hover:
