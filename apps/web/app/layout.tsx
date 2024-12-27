import type { Metadata } from "next";
import "./globals.css";
import { fredoka } from "@/public/fonts";
import AttackModal from "@/views/marketplace/attack-modal";
import Marketplace from "@/views/marketplace/page";
import WalletHub from "@/components/wallet-hub";

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
      <body className={fredoka.className}>
        {children}
        <AttackModal />

        <Marketplace />
        <WalletHub />
      </body>
    </html>
  );
}
