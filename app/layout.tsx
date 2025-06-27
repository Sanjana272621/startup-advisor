import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Link href = {"/"}> Home </Link>
          <Link href = {"/about"}> About </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
