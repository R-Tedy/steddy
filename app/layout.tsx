import type { Metadata } from "next";
import { Manrope, Playfair } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair({
  variable: '--font-playfair',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Steddy",
  description: "Hi, this is my personal site to explain what I do and how I can help you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${playfair.variable}  antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
