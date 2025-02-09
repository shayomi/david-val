import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { kodchasan } from "./font";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Be my Val",
  description: "Valentine date web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${kodchasan.className} antialiased background-bg flex justify-center bg-fixed px-3`}
      >
        {children}
      </body>
    </html>
  );
}
