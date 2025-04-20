"use client";
import Container from "@/components/container";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { cn } from "@/utils/cn";
import { motion, useAnimationControls, Variants } from "motion/react";
import { useEffect, useMemo, useState } from "react";

const getPositions = (
  positionValue: number,
  differential: number,
  pointerCount: number
) => {
  let positions = [];
  let val = -differential;
  positions.push(`${positionValue}px`);

  for (let index = 0; index < pointerCount; index++) {
    if (positionValue >= 0) {
      positionValue += val;
    } else {
      positionValue -= val;
    }
    positions.push(`${positionValue}px`);
  }
  return positions;
};

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
      skew: 45,
    },
    animate: (delayValue: number) => ({
      skew: 0,
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
    <Container className="flex flex-col items-start justify-between pt-20">
      <div className=" mt-14 2xl:mt-30 h-auto flex flex-col">
        <p className="text-2xl lg:text-5xl font-syne mb-10 lg:mb-20">
          hi, my name is
        </p>
        <motion.div id="header-title" className="flex flex-row">
          {"Abhinay Katta".split("").map((letter, index) => (
            <motion.span
              variants={NameVariants}
              initial="initial"
              animate="animate"
              custom={index}
              key={index}
              viewport={{ once: true }}
              id="header-alphabet"
              className="!font-boldonse uppercase text-4xl leading-20 lg:text-7xl 2xl:text-8xl font-black !text-primaryYellow"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <div className="lg:mt-20 w-full h-auto relative overflow-hidden flex flex-row items-center justify-center">
        <h2 className="font-boldonse left-auto right-auto text-xl lg:text-2xl whitespace-nowrap min-w-fit mr-5 lg:mr-0 lg:min-w-[7rem] 2xl:text-4xl">
          I am a
        </h2>
        <motion.div
          animate={controls}
          className="h-full ml-0 lg:ml-[5rem] mr-auto w-full flex flex-col items-start justify-between"
        >
          {iAm.map((i, ind) => (
            <motion.h1
              key={ind}
              className={cn(
                "text-2xl lg:text-6xl font-lemonMilk h-fit w-fit whitespace-nowrap my-6 px-4 py-2",
                ind === currentIndex
                  ? "text-primaryYellow border-1 border-primaryYellow"
                  : "text-blue-900 blur-[8px]"
              )}
            >
              {i}
            </motion.h1>
          ))}
        </motion.div>
      </div>
    </Container>
  );
};

export default HomeHero;
