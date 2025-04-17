"use client";
import Container from "@/components/container";
import { motion, Variants } from "motion/react";

const HomeHero = () => {
  //   useEffect(() => {
  //     animate("#header-alphabet", {
  //       skew: [45, 0],
  //       translateX: [-100, 0],
  //       translateY: [-100, 0],
  //       opacity: [0, 1],
  //       loop: false,
  //       duration: 400,
  //       delay: stagger(100),
  //     });

  //     createDraggable("#header-title", {
  //       releaseEase: createSpring({ stiffness: 200 }),
  //     });
  //   }, []);

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

  return (
    <Container className="flex flex-row items-center justify-between">
      <div>
        <p className="text-sky-200 text-xl md:text-4xl">hi, my name is </p>
        <div className="mt-30 h-auto flex flex-col">
          <p className="text-2xl lg:text-5xl font-syne mb-10">I am</p>
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
                className="!font-boldonse uppercase text-6xl leading-20 lg:text-7xl 2xl:text-8xl font-black !text-primaryYellow">
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default HomeHero;
