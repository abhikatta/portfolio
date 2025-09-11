"use client";
import { CurveText } from "@/components/animated/curved-text-parallax";
import { SectionSmoothScroll } from "../reusable/section-smooth-scroll";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Container from "@/components/container";
import { techImages } from "@/data/tech-images";
import Image from "next/image";
import { MotionDiv } from "@/components/common-motion-elements";
import { useIsMobile } from "@/hooks/use-is-mobile";

const AboutSecondFold = () => {
  const ref = useRef(null);
  const { isMobile } = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["150%", "-50%"] : ["90%", "-30%"],
  );

  return (
    <section ref={ref} className="relative min-h-[200vh]">
      <div className="sticky top-0">
        <SectionSmoothScroll className="overflow-hidden bg-black/70">
          <CurveText
            svgTextItemsCount={20}
            scrollYProgress={scrollYProgress}
            className="top-[10%] text-7xl 2xl:top-0"
            svgTextDisplacement={13}
            {...(isMobile ? { height: "400" } : {})}
            topLine="Skills & Tech I use"
            svgPathHref="second-fold"
            svgPath={
              <path
                id="second-fold"
                d="M0.5 1C10.1721 64.0532 25.5 83.5 77.5 119C165 164 228.139 155.902 312 94.5C416.907 35.3546 470.684 31.98 560.5 62C654.693 110.037 713.443 130.861 826 160C969.713 174.52 1049.29 173.44 1193 160C1341.5 138.5 1395.14 99.8279 1538 94.5C1693.63 96.0904 1775.58 103.569 1912 129"
                stroke="none"
              />
            }
          />
          <Container className="mt-30 flex flex-col items-start justify-center gap-10 2xl:mt-0">
            <h2 className="font-poppins text-lg text-white 2xl:text-2xl">
              Things that I use or have used in the past
            </h2>
            <MotionDiv
              style={{ x }}
              className="flex h-full w-full flex-row items-center justify-center gap-15"
            >
              {techImages.map((item) => (
                <div
                  key={item.alt}
                  className="flex w-full min-w-[150px] flex-col items-center justify-center gap-y-5"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={120}
                    height={120}
                    className="aspect-square rounded-4xl object-contain grayscale transition-all duration-500 hover:scale-125 hover:grayscale-0"
                  />
                  <p className="font-boldonse text-md text-white">
                    {"{ "}
                    {item.alt}
                    {" }"}
                  </p>
                </div>
              ))}
            </MotionDiv>
          </Container>
        </SectionSmoothScroll>
      </div>
    </section>
  );
};

export default AboutSecondFold;
