"use client";
import Container from "@/components/container";
import RightHomeInteraction from "@/components/right-home-interaction";
import { variantProps } from "@/components/common-motion-elements";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { cn } from "@/utils/cn";
import { motion, useAnimationControls, Variants } from "motion/react";
import { useEffect, useState } from "react";

const HomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isMobile } = useIsMobile();

  // TODO: Need to find a way to NOT hard code this
  const SPACE_DIFFERENTIAL = 128;

  // TODO: un-hardcode this

  const iAm = ["Frontend dev", "UI enjoyer", "Animation abuser"];

  const NameVariants: Variants = {
    initial: {
      x: -100,
      opacity: 0,
      y: -100,
      skewX: 45,
    },
    animate: (delayValue: number) => ({
      skewX: 0,
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay: delayValue * 0.1,
        type: "spring",
      },
    }),
  };

  const controls = useAnimationControls();

  useEffect(() => {
    let positions: string[];
    if (isMobile) {
      positions = ["96px", "0px", "-96px"];
    } else {
      positions = [
        `${SPACE_DIFFERENTIAL}px`,
        "0px",
        `-${SPACE_DIFFERENTIAL}px`,
      ];
    }
    let thisIndex = 0;
    const animateLoop = async () => {
      while (true) {
        setCurrentIndex(thisIndex);
        await controls.start({
          y: positions[thisIndex],
          transition: {
            duration: 0.5,
            ease: "easeInOut",
            type: "spring",
            damping: 10,
          },
        });
        await new Promise((r) => setTimeout(r, 2000));

        thisIndex = (thisIndex + 1) % positions.length;
      }
    };

    animateLoop();
  }, [isMobile]);

  return (
    <>
      <div className="absolute top-0 left-0 -z-10 h-screen w-full backdrop-blur-sm"></div>

      <Container className="z-10 flex w-full flex-row items-start justify-between">
        <div>
          <div className="flex h-auto flex-col">
            <p className="font-syne mb-10 text-2xl lg:mb-20 lg:text-5xl">
              hi, my name is
            </p>
            <div id="header-title" className="flex flex-row">
              {"Abhinay Katta".split("").map((letter, index) => (
                <motion.span
                  variants={NameVariants}
                  {...variantProps}
                  whileHover="hoverAnimate"
                  custom={index}
                  key={index}
                  viewport={{ once: true }}
                  id="header-alphabet"
                  className="!font-boldonse !text-primaryYellow text-4xl leading-20 font-normal tracking-tight uppercase lg:text-7xl 2xl:text-8xl"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="relative flex h-auto w-full flex-row items-center justify-center overflow-hidden 2xl:mt-20">
            <h2 className="font-boldonse right-auto left-auto mr-5 min-w-fit text-xl whitespace-nowrap lg:mr-0 lg:min-w-[5.5rem] 2xl:min-w-[7rem] 2xl:text-4xl">
              I am a
            </h2>
            <motion.div
              animate={controls}
              className="mr-auto ml-0 flex h-full w-full flex-col items-start justify-between 2xl:ml-[5rem]"
            >
              {iAm.map((i, ind) => (
                <h1
                  key={ind}
                  className={cn(
                    "font-lemonMilk my-6 h-fit w-fit px-4 py-2 text-2xl whitespace-nowrap lg:text-6xl",
                    ind === currentIndex
                      ? "text-primaryYellow border-primaryYellow border-1"
                      : "text-blue-200 blur-[8px]",
                  )}
                >
                  {i}
                </h1>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="mx-auto my-auto hidden xl:block">
          <RightHomeInteraction />
        </div>
      </Container>
    </>
  );
};

export default HomeHero;
