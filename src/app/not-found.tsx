import Container from "@/components/container";
import Link from "next/link";

const Page = () => {
  return (
    <Container className="flex h-full w-full max-w-5xl flex-col items-center justify-center">
      <h1 className="font-syne mb-15 text-center text-3xl text-black lg:text-5xl">
        404 Not found
      </h1>
      <h2 className="font-syne text-center text-2xl text-black lg:text-3xl">
        Hi there, thank you so much for checking out this page, but however you
        may have got here, this page doesn&apos;t exist on my site ;(
        <br />
        <br />
        <span className="font-syne text-center text-2xl text-black lg:text-3xl">
          Here is the link to my older website incase you wanna check it out,
          please keep in mind that it&apos;s not completely updated yet:
          <br />
          <br />
          <Link
            rel="noreferrer"
            target="_blank"
            className="bg-accentBlue cursor-pointer px-3 py-2 hover:underline"
            href="https://abhikatta.vercel.app"
          >
            Older website
          </Link>
        </span>
      </h2>
      <br />
      <br />
      <h3 className="font-syne text-center text-xl text-black lg:text-2xl">
        Go back to home page:{" "}
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
