"use client";
import Container from "@/components/container";
import { motion, Variants } from "motion/react";

const HomeHero = () => {
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
    <Container className="flex flex-col items-start justify-between pt-20">
      <div className="mt-30 h-auto flex flex-col">
        <p className="text-2xl lg:text-5xl font-syne mb-10">hi, my name is </p>
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
              className="!font-boldonse uppercase text-4xl leading-20 lg:text-7xl 2xl:text-8xl font-black !text-primaryYellow">
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <div className="mt-20">
        <h2>I am a</h2>
      </div>
    </Container>
  );
};

export default HomeHero;
