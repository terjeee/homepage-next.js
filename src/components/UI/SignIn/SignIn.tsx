"use client";

import { useSession, signOut } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SignIn() {
  const { data: session, status } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);
  const refMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (refMenu.current && !refMenu.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  if (status === "loading") return <></>;
  if (status === "authenticated")
    return (
      <div ref={refMenu} className="relative my-auto">
        <button
          className="block cursor-pointer rounded-full focus:outline-link"
          onClick={() => setShowDropdown((prevState) => !prevState)}
        >
          <Image src={session.user?.image!} height={40} width={40} alt="profilbilde" className="rounded-full" />
        </button>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.1 }}
            className="dark:bg-darkBgrounded align-center absolute left-auto right-0 w-24 rounded-md bg-white shadow dark:bg-darkBg"
          >
            <ul>
              <li className="bg-whitetext-sm rounded-md font-semibold hover:bg-lightGrey dark:bg-darkBg dark:text-white dark:hover:bg-darkSecondary">
                <button onClick={() => signOut()} className="w-full py-2 text-sm font-semibold">
                  Sign Out
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
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
