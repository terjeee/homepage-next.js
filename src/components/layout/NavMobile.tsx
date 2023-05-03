import { useState } from "react";
import Link from "next/link";

import useScrollLock from "@/utils/hooks/useScrollLock";

import IconMenu from "@/components/svg/misc/IconMenu";
import SwitchDarkLight from "@/components/misc/SwitchDarkLight";
import Login from "@/components/misc/Login";
import IconHome from "@/components/svg/misc/IconHome";
import IconCode from "@/components/svg/misc/IconCode";
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
      <nav className="flex flex-col max-h-screen sm:hidden">
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
          <div className="h-screen mb-20">
            <ul className="h-full flex justify-center items-center gap-10">
              <li>
                <Link href="/" onClick={toggleMenu} className="flex flex-col items-center gap-1">
                  <IconHome />
                  <h2 className="text-lg font-medium">home</h2>
                </Link>
              </li>
              <li>
                <Link href="/" onClick={toggleMenu} className="flex flex-col items-center gap-1">
                  <IconCode />
                  <h2 className="text-lg font-medium">projects</h2>
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={toggleMenu} className="flex flex-col items-center gap-1">
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
