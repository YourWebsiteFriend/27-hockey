import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "27Hockey — Skills Coaching with Sam Sternschein | Former Pro",
  description:
    "Private hockey skills coaching from Sam Sternschein — Penn State, Boston College, and 4 years of professional hockey. Skating, edges, puck skills, and shooting development.",
  keywords: [
    "hockey skills coach",
    "hockey training Long Island",
    "hockey training NYC",
    "Sam Sternschein",
    "27Hockey",
    "private hockey coaching",
    "ECHL hockey coach",
    "Penn State hockey",
    "Boston College hockey",
    "hockey edge work",
    "hockey shooting coach",
  ],
  openGraph: {
    title: "27Hockey — Coached by a Former Pro",
    description:
      "Train with Sam Sternschein — Penn State, Boston College, 4 years professional hockey. Real coaching that translates to games.",
    type: "website",
    locale: "en_US",
    siteName: "27Hockey Training and Development",
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
        className={`${oswald.variable} ${inter.variable} font-[family-name:var(--font-body)] antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
