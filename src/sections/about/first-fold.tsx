"use client";

import Container from "@/components/container";
import { SectionSmoothScroll } from "../reusable/section-smooth-scroll";
import { useRef } from "react";
import { useScroll } from "motion/react";
import { RevealWord } from "@/components/animated/reveal-words";
import { CurveText } from "@/components/animated/curved-text-parallax";
import { useIsMobile } from "@/hooks/use-is-mobile";

const AboutFirstFold = () => {
  const topLine = "Why do I work as a frontend developer?";
  const text =
    "I've always been a huge gamer, which is what got me into coding. I started out learning game development with Unity, then got pulled into the world of AI and machine learning for a while. I eventually found that what I really enjoy is building things people can see and use, which is how I landed in frontend development with React and Next.js.";
  const words = text.split(" ");

  const { isMobile } = useIsMobile();

  const scrollRef = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress: yTextReveal } = useScroll({
    target: scrollRef,
    offset: ["start center", "start start"],
  });

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end start"],
  });

  return (
    <section ref={ref} className="relative min-h-[200vh]">
      <div ref={scrollRef} className="sticky top-0">
        <SectionSmoothScroll className="shadow-4xl relative mx-auto overflow-hidden rounded-4xl bg-gray-200">
          <CurveText
            scrollYProgress={scrollYProgress}
            svgTextItemsCount={20}
            svgTextColor="black"
            svgTextDisplacement={isMobile ? 22 : 25}
            topLine={topLine}
            {...(isMobile ? { height: "400" } : {})}
            svgPathHref="first-fold"
            svgPath={
              <path
                stroke="none"
                id="first-fold"
                d="M1 528C25.5 393 157 231 325 172C493 113 519 121.5 641 131.5C884.153 176.119 1028.36 248.976 1239 213.5C1429 181.5 1405 176 1490.5 154C1490.5 154 1711 67 1919 1"
              />
            }
          />
          <Container>
            <p className="font-poppins flex h-full w-full flex-wrap text-lg text-black 2xl:text-3xl 2xl:leading-12">
              <RevealWord words={words} scrollYProgress={yTextReveal} />
            </p>
          </Container>
        </SectionSmoothScroll>
      </div>
    </section>
  );
};

export default AboutFirstFold;
