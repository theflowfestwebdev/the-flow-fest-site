import Head from "next/head";
import type {Metadata} from "next";
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

declare var dataLayer: any;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6MMECMWWSM"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-6MMECMWWSM');
        </script>
      </Head>

      <html lang="en">
        <body>{children}</body>
      </html>
      <Footer />
    </>
  );
}
