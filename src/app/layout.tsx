import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LenisWrapper from "@/components/LenisWrapper";
import MouseEffect from "@/components/MouseEffect";

const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Abhinay Katta",
  description:
    "Welcome to Abhinay Katta's personal portfolio. Discover projects, skills, and experiences in the software industry.",
  keywords: "Abhinay Katta, Portfolio, Web Developer, Designer, Projects",
  authors: [{ name: "Abhinay Katta" }],
  openGraph: {
    type: "website",
    url: "https://abhikatta.vercel.app/",
    title: "Abhinay Katta",
    description:
      "Welcome to Abhinay Katta's personal portfolio. Discover projects, skills, and experiences in the software industry.",
    images: ["/android-chrome-192x192.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhinay Katta",
    description:
      "Welcome to Abhinay Katta's personal portfolio. Discover projects, skills, and experiences in the software industry.",
    images: ["/android-chrome-192x192.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.variable} antialiased`}>
        <LenisWrapper>
          <MouseEffect>{children}</MouseEffect>
        </LenisWrapper>
      </body>
    </html>
  );
}
