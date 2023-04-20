import type { PropsChildren } from "@/types/types";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MaxWidth from "@/components/ui/MaxWidth";

export default function Layout({ children }: PropsChildren) {
  return (
    <MaxWidth>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </MaxWidth>
  );
}
