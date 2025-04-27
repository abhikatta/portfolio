"use client";
import Container from "@/components/container";
import UseIs404 from "@/hooks/use-is-404";
import Link from "next/link";
import React from "react";

const Page = () => {
  const { is404 } = UseIs404();
  return (
    <Container className="flex h-screen w-full max-w-5xl flex-col items-center justify-center">
      {is404 && (
        <h1 className="font-syne mb-15 text-center text-3xl text-black lg:text-5xl">
          404 Not found
        </h1>
      )}
      <h2 className="font-syne text-center text-2xl text-black lg:text-3xl">
        Hi there, thank you so much for checking out this page,{" "}
        {is404
          ? "but however you may have got here, this page doesn't exist on my site ;("
          : "this page will be updated soon."}
        {!is404 && (
          <>
            <br />
            <br />
          </>
        )}
        {!is404 && (
          <h2 className="font-syne text-center text-2xl text-black lg:text-3xl">
            Here is the link to my older website incase you wanna check it out,
            please keep in mind that it&apos;s not completely updated yet:
            <br />
            <a
              rel="noreferrer"
              target="_blank"
              className="cursor-pointer px-3 py-2 hover:underline"
              href="https://abhikatta.vercel.app"
            >
              Older website
            </a>
          </h2>
        )}
      </h2>
      <br />
      <br />
      <h3 className="font-syne text-center text-xl text-black lg:text-2xl">
        {is404 ? "Go" : "Or go"} back to home page:{" "}
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
