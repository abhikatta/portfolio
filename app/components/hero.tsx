"use client";
import Container from "@/components/ui/container";
import { motion, useScroll, useTransform, Variants } from "motion/react";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const subY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const NameVariants: Variants = {
    initial: {
      x: -200,
      y: -100,
      skewX: 45,
      opacity: 0,
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
  return (
    <section id="home" ref={ref} className="h-screen min-h-full relative">
      <Container className="h-full my-0 lg:my-0 flex flex-col items-center justify-center">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "9vh 9vh",
          }}
        />

        <motion.div
          style={{ opacity }}
          className="flex h-full my-40 items-end w-full justify-center mx-auto relative z-10">
          <motion.div
            style={{ y: titleY, scale }}
            className="absolute bottom-0 left-0">
            <motion.span
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { duration: 1 } },
              }}
              initial="initial"
              animate="animate"
              className="inline-block text-2xl min-[390px]:text-3xl md:text-4xl font-syne tracking-tighter">
              hi, my name is
            </motion.span>

            <h1 className="flex flex-col w-full">
              <span>
                {"Abhinay".split("").map((letter, index) => (
                  <motion.span
                    variants={NameVariants}
                    initial="initial"
                    animate="animate"
                    custom={index}
                    key={index}
                    viewport={{ once: true }}
                    className="inline-block text-4xl min-[390px]:text-5xl md:text-6xl lg:text-9xl uppercase font-black font-syne tracking-tighter">
                    {letter}
                  </motion.span>
                ))}
              </span>
              <span>
                {"Katta".split("").map((letter, index) => (
                  <motion.span
                    variants={NameVariants}
                    initial="initial"
                    animate="animate"
                    custom={7 + index}
                    key={index}
                    viewport={{ once: true }}
                    className="inline-block italic text-4xl min-[390px]:text-5xl md:text-6xl lg:text-9xl uppercase font-black font-syne tracking-tighter text-accent">
                    {letter}
                  </motion.span>
                ))}
              </span>
            </h1>
          </motion.div>

          <motion.div style={{ y: subY }} className=" absolute top-0 right-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}>
              <aside className="md:pl-[33px] md:border-l hairline">
                <dl className="space-y-5 max-w-md text-sm">
                  <div>
                    <dt className="text-muted-foreground">role</dt>
                    <dd>SDE-1 @ ScaleReal</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">focus</dt>
                    <dd>
                      frontend architecture · performance · state · clean code ·
                      maintainable systems
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">based</dt>
                    <dd>India · remote-friendly</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">status</dt>
                    <dd className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                      </span>
                      open to interesting work
                    </dd>
                  </div>
                </dl>
              </aside>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
