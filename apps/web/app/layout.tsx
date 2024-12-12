import type { Metadata } from "next";
import "./globals.css";
import { fredoka } from "@/public/fonts";

export const metadata: Metadata = {
  title: "Treasury Island",
  description: "Treasury Island",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fredoka.className}>{children}</body>
    </html>
  );
}
