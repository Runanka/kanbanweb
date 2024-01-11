import type { Metadata } from "next";
import { Sono } from "next/font/google";
import { DM_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const dmMono = DM_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | $(siteConfig.title)`,
  },
  description: siteConfig.description,
  icons:[
    {
      url:"/logo.svg",
      href:"/logo.svg",
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmMono.className}>{children}</body>
    </html>
  );
}
