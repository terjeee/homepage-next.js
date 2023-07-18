import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
