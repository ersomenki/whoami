import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Frontend Developer | Портфолио",
  description: "Сайт-визитка Frontend Developer — React, Next.js, TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistMono.variable} antialiased`}
    >
      <body className="bg-black text-green-400 font-mono">
        {children}
      </body>
    </html>
  );
}
