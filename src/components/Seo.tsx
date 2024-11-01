import Head from "next/head";
import React from "react";

const Seo = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Abhinay Katta</title>

      <meta name="title" content="Abhinay Katta" />
      <meta
        name="description"
        content="Welcome to Abhinay Katta's personal portfolio. Discover projects, skills, and experiences in the software industry."
      />
      <meta
        name="keywords"
        content="Abhinay Katta, Portfolio, Web Developer, Designer, Projects"
      />
      <meta name="author" content="Abhinay Katta" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://abhikatta.vercel.app/" />
      <meta property="og:title" content="Abhinay Katta" />
      <meta
        property="og:description"
        content="Welcome to Abhinay Katta's personal portfolio. Discover projects, skills, and experiences in the software industry."
      />
      <meta property="og:image" content="/android-chrome-192x192.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://abhikatta.vercel.app/" />
      <meta property="twitter:title" content="Abhinay Katta" />
      <meta
        property="twitter:description"
        content="Welcome to Abhinay Katta's personal portfolio. Discover projects, skills, and experiences in the software industry."
      />
      <meta property="twitter:image" content="/android-chrome-192x192.png" />

      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
