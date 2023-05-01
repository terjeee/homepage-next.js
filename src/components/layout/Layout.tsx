import type { Children } from "@/types/types";

import MaxWidth from "@/components/misc/MaxWidth";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Props {
  children: Children;
}

export default function Layout({ children }: Props) {
  return (
    <MaxWidth width="max-w-screen-md" className="flex flex-col justify-between px-4 min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </MaxWidth>
  );
}
