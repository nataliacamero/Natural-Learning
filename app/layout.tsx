import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

import { localeFromPath } from "@/app/_i18n/content";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Natural Learning — Aprende tecnología sin miedo",
  description:
    "Una biblioteca tranquila para aprender programación e inteligencia artificial, con explicaciones claras y experimentos pequeños.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = localeFromPath(
    (await headers()).get("x-natural-learning-locale") ?? undefined,
  );

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
