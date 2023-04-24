import { useState } from "react";
import Link from "next/link";

import useScrollLock from "@/utils/hooks/useScrollLock";

import IconMenu from "@/components/svg/ui/IconMenu";
import Login from "@/components/ui/Login";
import IconHome from "@/components/svg/ui/IconHome";
import IconCode from "@/components/svg/ui/IconCode";
import IconMail from "@/components/svg/ui/IconMail";

export default function NavMobile() {
  const [menuOpen, toggleMenuOpen] = useState(false);
  const [toggleScrollLock] = useScrollLock();

  const toggleMenu = () => {
    toggleMenuOpen((prevState) => !prevState);
    toggleScrollLock();
  };

  return (
    <>
      <nav className="flex flex-col max-h-screen md:hidden">
        <div className="flex justify-between py-4">
          <button onClick={toggleMenu}>
            <IconMenu />
          </button>
          <Login />
        </div>
        {menuOpen && (
          <div className="h-screen mb-20">
            <ul className="h-full flex justify-center items-center gap-10">
              <li>
                <Link href="/" className="flex flex-col items-center gap-1">
                  <IconHome />
                  <h2 className="text-lg font-medium">home</h2>
                </Link>
              </li>
              <li>
                <Link href="/" className="flex flex-col items-center gap-1">
                  <IconCode />
                  <h2 className="text-lg font-medium">projects</h2>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex flex-col items-center gap-1">
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
