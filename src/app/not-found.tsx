import Container from "@/components/container";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <Container className="flex h-screen w-screen flex-col items-center justify-center">
      <h2 className="font-syne text-center text-2xl text-black lg:text-3xl">
        Hi there, thanks for checking out this page, even though it was marked
        &quot;Work in Progress&quot;. That or I am wrong and this page
        doesn&apos;t exist.
        <br />
        <br />
        But here is the link to my older website incase you wanna check it out,
        please keep in mind that it&apos;s not completely updated yet:
        <a
          rel="noreferrer"
          target="_blank"
          className="cursor-pointer px-3 py-2 hover:underline"
          href="https://abhikatta.vercel.app"
        >
          Older website
        </a>
      </h2>
      <h3 className="font-syne mt-10 text-center text-xl text-black lg:text-2xl">
        Or go back to home page:{" "}
        <Link
          href="/"
          className="bg-accentBlue cursor-pointer px-2 py-1 text-center"
        >
          Homepage
        </Link>
      </h3>
    </Container>
  );
};

export default Page;
