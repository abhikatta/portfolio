import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import PageLoad from "@/components/page-load";
import WaitForLoad from "@/components/wait-for-load";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Abhinay Katta | Portfolio",
  description:
    "Frontend developer with a sharp eye for design, speed, and performance. Specializing in React, Next.js, Tailwind, and some experience in  Python and Unity game development.",
  keywords:
    "Frontend Developer, Web Developer, Game Developer, React, TailwindCSS, Unity, Python, JavaScript, Next.js, UI/UX, Performance Optimization, Abhinay Katta Portfolio",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Abhinay Katta | Portfolio",
    description:
      "Frontend developer with a sharp eye for design, speed, and performance. Specializing in React, Next.js, Tailwind, and some experience in  Python and Unity game development.",
    url: "https://abhikatta.vercel.app",
    type: "website",
    images: [
      {
        url: "/favicon-32x32.png",
        width: 1200,
        height: 630,
        alt: "Abhinay Katta Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@abhikkatta",
    creator: "@abhikkatta",
    title: "Abhinay Katta | Portfolio",
    description:
      "Frontend developer with a sharp eye for design, speed, and performance. Specializing in React, Next.js, Tailwind, and some experience in  Python and Unity game development.",
    images: ["/favicon-32x32.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <PageLoad />
        <WaitForLoad>
          <Navbar />
          {children}
        </WaitForLoad>
      </body>
    </html>
  );
}
