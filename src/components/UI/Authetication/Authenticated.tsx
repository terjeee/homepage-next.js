import { useState, useRef, useEffect } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { motion } from "framer-motion";

import { type Session } from "next-auth";
import Link from "next/link";

interface Props {
  session: Session;
}

export default function Authenticated(props: Props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const refMenu = useRef<HTMLDivElement>(null);
  const { session } = props;

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

  // TODO: sjekk om bruker er ADMIN eller USER, om Admin rended <Link /> til admin-dsahboard

  return (
    <div ref={refMenu} className="relative my-auto">
      <button className="block cursor-pointer rounded-full" onClick={() => setShowDropdown((prevState) => !prevState)}>
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
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="bg-whitetext-sm mt-2 rounded-md font-semibold hover:bg-lightGrey dark:bg-darkBg dark:text-white dark:hover:bg-darkSecondary">
              <button onClick={() => signOut()} className="w-full py-2 text-sm font-semibold">
                Sign Out
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}