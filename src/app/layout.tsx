import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "react-hot-toast";
export const metadata: Metadata = {
  title: "Ascii",
  description: "Generate ascii texts with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
