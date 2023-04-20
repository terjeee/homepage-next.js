import { useState } from "react";
import Link from "next/link";
import useScrollLock from "@/utils/hooks/useScrollLock";

import IconMenu from "@/components/svg/IconMenu";
import Login from "@/components/ui/Login";
import IconHome from "@/components/svg/IconHome";
import IconCode from "@/components/svg/IconCode";
import IconMail from "@/components/svg/IconMail";

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
          <button onClick={toggleMenu} className="hover:bg-red">
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

// z-index: -1;
//   position: absolute;
//   inset: 0;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   background: color.$bg-1;
//   padding-bottom: calc(layout.$page-padding * 2);

//   .list {
//     display: flex;
//     align-items: center;
//     gap: 2rem;

//     li {
//       .icon {
//         display: block;
//         padding: calc(layout.$page-padding / 2);
//         margin: auto;

//         svg {
//           display: block;
//           font-size: 1.5rem;
//         }
//       }

//       &:hover .icon {
//         background: color.$bg-1-shade;
//         border-radius: 50%;
//         transition: background 250ms ease-in-out;
//       }
//     }
//   }
// }
