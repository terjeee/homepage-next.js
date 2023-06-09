"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import useScrollLock from "@/utils/hooks/useScrollLock";

import IconMenu from "@/components/svg/misc/IconMenu";
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
    toggleScrollLock();
    toggleSandboxOpen(false);
    toggleMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex max-h-screen flex-col sm:hidden">
        <div className="my-auto flex justify-between">
          <button className="z-50" onClick={toggleMenu}>
            <IconMenu />
          </button>
        </div>
        {menuOpen && (
          <div className="z-40">
            <div className="absolute inset-x-0 inset-y-0 h-screen bg-white dark:bg-darkBg">
              <div className="flex h-full items-center justify-center">
                <ul className="flex flex-col pb-28">
                  <li className="py-3">
                    <Link href="/" onClick={toggleMenu} className="flex items-center gap-2">
                      <IconHome />
                      <h2 className="font- text-lg font-semibold tracking-wider">home</h2>
                    </Link>
                  </li>
                  <li className="py-3">
                    <Link href="/contact" onClick={toggleMenu} className="flex items-center gap-2">
                      <IconMail />
                      <h2 className="font- text-lg font-semibold tracking-wider">contact</h2>
                    </Link>
                  </li>
                  <li className="relative py-3">
                    <button onClick={() => toggleSandboxOpen((prevState) => !prevState)} className="flex items-center gap-2">
                      <IconCode className="pt-[0.5px]" />
                      <h2 className="font- text-lg font-semibold tracking-wider">sandbox</h2>
                    </button>
                    {sandboxOpen && (
                      <ul className="absolute w-full py-1">
                        <motion.li
                          initial={{ opacity: 0, translateY: -10 }}
                          animate={{ opacity: 1, translateY: 0 }}
                          transition={{ duration: 0.2 }}
                          onClick={toggleMenu}
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
                          initial={{ opacity: 0, translateY: -10 }}
                          animate={{ opacity: 1, translateY: 0 }}
                          transition={{ duration: 0.2 }}
                          onClick={toggleMenu}
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
            </div>
          </div>
        )}
      </div>
    </>
  );
}
