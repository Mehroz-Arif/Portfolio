import type { Metadata } from "next";
import { Inter, Outfit, Bebas_Neue, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mehroz Arif — MERN Stack Developer",
  description:
    "Portfolio of Mehroz Arif — Full Stack & MERN Stack Developer specializing in Next.js, React, Node.js, and scalable web applications.",
  keywords: [
    "Mehroz Arif",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
  ],
  authors: [{ name: "Mehroz Arif" }],
  openGraph: {
    title: "Mehroz Arif — MERN Stack Developer",
    description:
      "Full Stack & MERN Stack Developer specializing in Next.js, React, and scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} ${bebasNeue.variable} ${oswald.variable} antialiased bg-[#fbf7f0] text-[#2e2319]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
