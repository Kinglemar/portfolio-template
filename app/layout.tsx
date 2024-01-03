import type { Metadata } from "next";
import type { Viewport } from "next";
import { Poppins, Unbounded } from "next/font/google";
import "./globals.scss";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const popins = Poppins({
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
  subsets: ["latin"]
});
const unbounded = Unbounded({
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-unbounded",
  display: "swap",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Paragon Technologies",
  description: "Creating the best didgital solution.",
  // metadataBase: new URL("https://payduenow.com"),
  referrer: "origin-when-cross-origin",
  keywords: [
    "Software engineering",
    "Software development",
    "Digital",
    "Works",
    "Website",
    "Mobile apps",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${popins.variable} ${unbounded.variable}`}>
      <body>
      <main>
            <Navbar />
            <main className="pt-[4.6rem]">{children}</main>
            <Footer />
          </main>
      </body>
    </html>
  );
}
