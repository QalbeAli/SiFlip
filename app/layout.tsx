import type { Metadata } from "next";
import "./globals.css";
import { Oswald } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SiFlip",
  description: "Created By Qalb",
};

const oswald = Oswald({
  weight: ["400", "700"], // You can customize weights
  subsets: ["latin"], // Subset options (latin, latin-ext, etc.)
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
