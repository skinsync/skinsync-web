import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from '@/lib/utils'
import { poppins, josefin_slab, italianno } from "@/lib/font";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skinsync",
  description: "Skincare Recommendation Based on Facial Skin Condition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" data-theme="retro">
      <body className={cn(`${poppins.variable}`, `${josefin_slab.variable}`, `${italianno.variable}`, 'bg-white')}>
        {children}
      </body>
    </html>
  );
}
