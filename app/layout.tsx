import type { Metadata } from "next";
import { Glory } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";


const glory = Glory({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | $(siteConfig.title)`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={glory.className}>{children}</body>
    </html>
  );
}
