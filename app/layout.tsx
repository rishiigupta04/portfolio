import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RootLayoutClient from "./RootLayoutClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rishi's Portfolio",
  description: "A Modern and Minimalist Portfolio",
  keywords: ["rishi gupta", "portfolio", "web developer", "react", "nextjs"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RootLayoutClient interClass={inter.className}>
        {children}
      </RootLayoutClient>
    </html>
  );
}
