import type { Children } from "@/types/types";

import MaxWidth from "@/components/misc/MaxWidth";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Props {
  children: Children;
}

export default function Layout({ children }: Props) {
  return (
    <MaxWidth width="max-w-screen-md" className="px-4">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </MaxWidth>
  );
}
