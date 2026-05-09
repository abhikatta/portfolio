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
  title: {
    default: "Abhinay Katta",
    template: "%s | Abhinay Katta",
  },
  description:
    "Abhinay Katta's personal portfolio showcasing projects, skills, experience, and work in software engineering.",
  keywords: [
    "Abhinay Katta",
    "Portfolio",
    "Software Engineer",
    "Frontend Engineer",
    "React Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Python",
    "FastAPI",
    "Projects",
  ],
  authors: [{ name: "Abhinay Katta" }],
  creator: "Abhinay Katta",
  publisher: "Abhinay Katta",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://abhikatta.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://abhikatta.vercel.app",
    siteName: "Abhinay Katta",
    title: "Abhinay Katta",
    description:
      "Explore projects, skills, and professional experience in software engineering.",

    images: [
      {
        url: "https://abhikatta.vercel.app/embed-preview.png",
        width: 1200,
        height: 630,
        alt: "Abhinay Katta Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Abhinay Katta",
    description:
      "Explore projects, skills, and professional experience in software engineering.",
    creator: "@abhikkatta",
    images: ["https://abhikatta.vercel.app/embed-preview.png"],
  },

  manifest: "/site.webmanifest",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "technology",
  other: {
    "theme-color": "#e70000",
  },
  verification: {
    google: "hm8I5fmrlai0lhGG_bhmtd3ETpBfdYAWea6rVGQnD5o",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abhinay Katta",
              url: "https://abhikatta.vercel.app",
              jobTitle: "Software Engineer",
              description:
                "Software engineer building with React, Next.js, Python, and FastAPI.",
              email: "abhinaykatta97@gmail.com",
              image: "https://abhikatta.vercel.app/abhinaykatta.webp",
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Frontend Development",
                "Python",
                "FastAPI",
                "PostgreSQL",
              ],
              sameAs: [
                "https://github.com/abhikatta",
                "https://linkedin.com/in/abhinaykatta",
                "https://twitter.com/abhikkatta",
              ],
            }),
          }}
        />
        <LenisWrapper>
          <Navbar />
          {children}
          <Footer />
        </LenisWrapper>
      </body>
    </html>
  );
}
