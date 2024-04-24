import { type Session } from "next-auth";

import { useState, useRef, useEffect } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import SVGDashboard from "@/components/svg/misc/SVGDashboard";
import SVGSignOut from "@/components/svg/misc/SVGSignOut";

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

  return (
    <div ref={refMenu} className="relative my-auto">
      <button className="block cursor-pointer rounded-full" onClick={() => setShowDropdown((prevState) => !prevState)}>
        <Image
          src={session.user?.image!}
          height={30}
          width={30}
          alt="profilbilde"
          className="rounded-full sm:h-10 sm:w-10"
        />
      </button>
      {showDropdown && (
        <motion.div
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.1 }}
          className="dark:bg-darkBgrounded align-center absolute left-auto right-0 min-w-full rounded-md bg-white shadow dark:bg-darkBg"
        >
          <ul className="mt-2">
            <li className="bg-whitetext-sm flex justify-center rounded-md font-semibold hover:bg-lightGrey dark:bg-darkBg dark:text-white dark:hover:bg-darkSecondary">
              <Link href="/dashboard" className="flex items-center gap-1 px-4 py-2 text-sm font-semibold">
                <SVGDashboard />
                Dashboard
              </Link>
            </li>
            <li className="bg-whitetext-sm flex justify-center rounded-md font-semibold hover:bg-lightGrey dark:bg-darkBg dark:text-white dark:hover:bg-darkSecondary">
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold"
              >
                <SVGSignOut />
                Sign Out
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}
