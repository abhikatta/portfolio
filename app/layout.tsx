import Footer from "@/components/footer";
import LenisWrapper from "@/components/LenisWrapper";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhikatta.vercel.app"),
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
  manifest: "/site.webmanifest",
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
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        syne.variable,
        jetbrainsMono.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <LenisWrapper>
          <Navbar />
          {children}
          <Footer />
        </LenisWrapper>
      </body>
    </html>
  );
}
