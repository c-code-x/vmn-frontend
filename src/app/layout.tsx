import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VMN - Venture Mentor Network",
  description:
    "A dedicated platform to provide these entrepreneurs access to an accomplished network of mentors, professionals, entrepreneurs, innovators, and subject matter experts with experience & skills across a variety of industries and functional areas with unceasing enthusiasm to support and give back to the community and its next generation of ardent entrepreneurs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar/>

        {children}
        </body>
    </html>
  );
}
