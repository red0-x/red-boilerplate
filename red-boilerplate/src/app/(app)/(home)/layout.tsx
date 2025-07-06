import type { Metadata } from "next";
import {Spline_Sans, Spline_Sans_Mono } from "next/font/google";
import "../globals.css";

const splineSans = Spline_Sans({
  variable: "--font-spline-sans",
  subsets: ["latin"],
});

const splineSansMono = Spline_Sans_Mono({
  variable: "--font-spline-sans-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Red Boilerplate",
  description: "Boilerplate with Next.js Tailwind Typescript MongoDB Payload ShadcnUI and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${splineSans.variable} ${splineSansMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
