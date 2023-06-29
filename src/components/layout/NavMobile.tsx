"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import useScrollLock from "@/utils/hooks/useScrollLock";

import IconMenu from "@/components/svg/misc/IconMenu";
import SwitchDarkLight from "@/components/UI/SwitchDarkMode";
import Login from "@/components/UI/Login";
import IconHome from "@/components/svg/misc/IconHome";
import IconMail from "@/components/svg/misc/IconMail";
import IconCode from "@/components/svg/misc/IconCode";
import IconSvelte from "../svg/technologies/IconSvelte";
import IconReact from "../svg/technologies/IconReact";

export default function NavMobile() {
  const [menuOpen, toggleMenuOpen] = useState(false);
  const [sandboxOpen, toggleSandboxOpen] = useState(false);
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
              <li>
                <Link href="/contact" onClick={toggleMenu} className="flex flex-col items-center">
                  <IconMail />
                  <h2 className="text-lg font-medium">contact</h2>
                </Link>
              </li>
              <li className="relative">
                <button onClick={() => toggleSandboxOpen((prevState) => !prevState)} className="flex flex-col items-center">
                  <IconCode />
                  <h2 className="text-lg font-medium">sandbox</h2>
                </button>
                {sandboxOpen && (
                  <ul className="absolute w-full py-1">
                    <motion.li
                      initial={{ opacity: 0, translateY: -25 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * 1 }}
                      className="flex justify-center"
                    >
                      <a
                        href="https://svelte-sandbox-tau.vercel.app/"
                        target="_blank"
                        className="flex items-center gap-1 bg-white py-2 text-sm font-semibold hover:bg-lightGrey dark:bg-darkBg dark:text-white dark:hover:bg-darkSecondary"
                      >
                        <IconSvelte />
                        <h3>Svelte</h3>
                      </a>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, translateY: -25 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * 2 }}
                      className="flex justify-center"
                    >
                      <a
                        href="https://react-sandbox-kappa.vercel.app/"
                        target="_blank"
                        className="flex items-center gap-1 bg-white py-2 text-sm font-semibold hover:bg-lightGrey dark:bg-darkBg dark:text-white dark:hover:bg-darkSecondary"
                      >
                        <IconReact />
                        <h3>React</h3>
                      </a>
                    </motion.li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
