import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import MaxWidth from "@/components/UI/MaxWidth";

interface Props {
  children: React.ReactNode;
}

export const metadata = {
  title: "Velkommen!",
  description: ":)",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="dark:bg-darkBg dark:text-white">
        <MaxWidth width="max-w-screen-lg">
          <Nav />
          {children}
          <Footer />
        </MaxWidth>
      </body>
    </html>
  );
}
