import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VMN - Venture Mentor Network",
  description:
    "Venture Mentor Network connects aspiring entrepreneurs With experienced mentors, fostering growth and success. Empowering entrepreneurs to reach new heights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
