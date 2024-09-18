import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import Header from "@/app/components/common/Header";
import { Search } from "./components/Search";

export const metadata: Metadata = {
  title: "Training Next.js commerce",
  description: "iToll task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-white`}>
        <Header>
          <Search />
        </Header>
        {children}
      </body>
    </html>
  );
}
