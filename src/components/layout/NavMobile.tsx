"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import useScrollLock from "@/utils/hooks/useScrollLock";

import IconMenu from "@/components/svg/misc/SVGMenu";
import IconHome from "@/components/svg/misc/SVGHome";
import IconMail from "@/components/svg/misc/SVGMail";
import IconCode from "@/components/svg/misc/SVGCode";
import IconSvelte from "@/components/svg/technologies/IconSvelte";
import IconReact from "@/components/svg/technologies/IconReact";

export default function NavMobile() {
  const [menuOpen, toggleMenuOpen] = useState(false);
  const [sandboxOpen, toggleSandboxOpen] = useState(false);
  const [toggleScrollLock] = useScrollLock();

  const toggleMenu = () => {
    toggleMenuOpen((prevState) => !prevState);
    toggleSandboxOpen(false);
    toggleScrollLock();
  };

  return (
    <>
      <div className="flex max-h-screen flex-col sm:hidden">
        <div className="my-auto flex justify-between">
          <button className="z-50 focus:outline-none" onClick={toggleMenu}>
            <IconMenu />
          </button>
        </div>
        {menuOpen && (
          <div className="z-40">
            <div className="absolute inset-x-0 inset-y-0 h-screen bg-white dark:bg-darkBg">
              <div className="flex h-full items-center justify-end pr-6">
                <ul className="flex flex-col gap-6">
                  <motion.li
                    initial={{ opacity: 0, translateY: -10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link href="/" onClick={toggleMenu} className="flex items-center justify-end gap-2">
                      <h2 className="text-2xl font-semibold tracking-wider">home</h2>
                      <IconHome height={37.5} width={37.5} />
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, translateY: -10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                  >
                    <Link href="/contact" onClick={toggleMenu} className="flex items-center justify-end gap-2">
                      <h2 className="text-2xl font-semibold tracking-wider">contact</h2>
                      <IconMail height={37.5} width={37.5} />
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, translateY: -10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="relative"
                  >
                    <button
                      onClick={() => toggleSandboxOpen((prevState) => !prevState)}
                      className="flex items-center justify-end gap-2"
                    >
                      <h2 className="text-2xl font-semibold tracking-wider">sandbox</h2>
                      <IconCode height={37.5} width={37.5} />
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
                            className="flex items-center gap-1 bg-white py-2 text-base font-semibold hover:bg-lightGrey dark:bg-darkBg dark:text-white dark:hover:bg-darkSecondary"
                          >
                            <IconSvelte />
                            <h3>Svelte</h3>
                          </a>
                        </motion.li>
                        <motion.li
                          initial={{ opacity: 0, translateY: -10 }}
                          animate={{ opacity: 1, translateY: 0 }}
                          transition={{ duration: 0.2, delay: 0.05 }}
                          onClick={toggleMenu}
                          className="flex justify-center"
                        >
                          <a
                            href="https://react-sandbox-kappa.vercel.app/"
                            target="_blank"
                            className="flex items-center gap-1 bg-white py-2 text-base font-semibold hover:bg-lightGrey dark:bg-darkBg dark:text-white dark:hover:bg-darkSecondary"
                          >
                            <IconReact />
                            <h3>React</h3>
                          </a>
                        </motion.li>
                      </ul>
                    )}
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
