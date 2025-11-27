import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer, TopBar } from "@/components/layout";

export const metadata: Metadata = {
  title: "Damani Nexus Limited | Tech for Every Terrain",
  description:
    "Transforming ideas into powerful digital solutions. We provide custom systems, ERP, financial systems, GIS services, and IoT solutions for businesses across East Africa.",
  keywords: [
    "ERP Systems",
    "Custom Software",
    "GIS Services",
    "Financial Systems",
    "IoT Solutions",
    "SACCO Systems",
    "Kenya",
    "Nairobi",
  ],
  authors: [{ name: "Damani Nexus Limited" }],
  icons: {
    icon: "/damani_svg.svg",
    shortcut: "/damani_svg.svg",
    apple: "/damani_svg.svg",
  },
  openGraph: {
    title: "Damani Nexus Limited | Tech for Every Terrain",
    description:
      "Transforming ideas into powerful digital solutions that drive business growth.",
    url: "https://damaninexus.com",
    siteName: "Damani Nexus",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
