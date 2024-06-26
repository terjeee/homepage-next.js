import "@/app/globals.css";

import MaxWidth from "@/components/UI/MaxWidth";
import AuthProvider from "@/utils/context/AuthContext";

interface Props {
  children: React.ReactNode;
}

export const metadata = {
  title: "",
  description: "Velkommen! :)",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="dark:bg-darkBg dark:text-white min-h-screen">
        <MaxWidth width="max-w-screen-md" className="flex min-h-screen flex-col px-4 sm:px-6">
          <AuthProvider>{children}</AuthProvider>
        </MaxWidth>
      </body>
    </html>
  );
}
