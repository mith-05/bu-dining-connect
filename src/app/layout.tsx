
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import Navbar from "@/components/Navbar";
import "./globals.css";

// Import fonts to be used throughout the website
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define the website title and description displayed in browser metadata
export const metadata: Metadata = {
  title: "BU Dining Connect",
  description: "A student-driven dining feedback and menu planning platform",
};

// This layout is shared across all pages of BU Dining Connect.
export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <StyledComponentsRegistry>
          {/* Display the navigation bar on every page */}
          <Navbar />

          {/* Display the content of the current page */}
          {children}
      </StyledComponentsRegistry>
      </body>
      </html>
  );
}
