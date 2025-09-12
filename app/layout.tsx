import type {Metadata} from "next";
import {GoogleAnalytics} from "@next/third-parties/google";

import "./globals.css";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Flow Fest",
  description: "Wellness & Lifestyle",
  icons: {
    icon: "/flowfest-icon.svg",
    apple: "/flowfest-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />

      <html lang="en">
        <body>
          {children}
          <GoogleAnalytics gaId="G-6MMECMWWSM" />
        </body>
      </html>
      <Footer />
    </>
  );
}
