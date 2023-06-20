"use client";

import { useState } from "react";
import Link from "next/link";

import useScrollLock from "@/utils/hooks/useScrollLock";

import IconMenu from "@/components/svg/misc/IconMenu";
import SwitchDarkLight from "@/components/UI/SwitchDarkMode";
import Login from "@/components/UI/Login";
import IconHome from "@/components/svg/misc/IconHome";
// import IconCode from "@/components/svg/misc/IconCode";
import IconMail from "@/components/svg/misc/IconMail";

export default function NavMobile() {
  const [menuOpen, toggleMenuOpen] = useState(false);
  const [toggleScrollLock] = useScrollLock();

  const toggleMenu = () => {
    toggleMenuOpen((prevState) => !prevState);
    toggleScrollLock();
  };

  return (
    <>
      <nav className="flex max-h-screen flex-col sm:hidden">
        <div className="flex justify-between py-4">
          <button onClick={toggleMenu}>
            <IconMenu />
          </button>
          <div className="flex gap-2">
            <SwitchDarkLight />
            <Login />
          </div>
        </div>
        {menuOpen && (
          <div className="mb-20 h-screen">
            <ul className="flex h-full items-center justify-center gap-10">
              <li>
                <Link href="/" onClick={toggleMenu} className="flex flex-col items-center">
                  <IconHome />
                  <h2 className="text-lg font-medium">home</h2>
                </Link>
              </li>
              {/* <li>
                <Link href="/" onClick={toggleMenu} className="flex flex-col items-center gap-1">
                  <IconCode />
                  <h2 className="text-lg font-medium">projects</h2>
                </Link>
              </li> */}
              <li>
                <Link href="/contact" onClick={toggleMenu} className="flex flex-col items-center">
                  <IconMail />
                  <h2 className="text-lg font-medium">contact</h2>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
