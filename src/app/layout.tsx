import "@/app/globals.css";

import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import MaxWidth from "@/components/UI/MaxWidth";
import AuthProvider from "@/app/context/AuthContext";

interface Props {
  children: React.ReactNode;
}

export const metadata = {
  title: "Hei :)",
  description: "",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="dark:bg-darkBg dark:text-white">
        <MaxWidth width="max-w-screen-md" className="flex min-h-screen flex-col px-6">
          <AuthProvider>
            <Nav />
            {children}
            <Footer />
          </AuthProvider>
        </MaxWidth>
      </body>
    </html>
  );
}
