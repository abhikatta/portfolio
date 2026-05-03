"use client";
import Container from "@/components/ui/container";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import SectionTitle from "./ui/section-title";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const subY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="h-screen max-h-[1080px] relative">
      <Container className="border-b-2 h-full border-ink my-0 lg:my-0 flex flex-col items-center justify-center">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <motion.div
          style={{ opacity }}
          className="flex h-full my-40 items-end w-full justify-center mx-auto relative z-10">
          <motion.div style={{ y: titleY }} className="absolute top-0 left-0">
            <SectionTitle>hi, my name is </SectionTitle>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl min-[390px]:text-5xl md:text-6xl lg:text-9xl uppercase font-black font-syne tracking-tighter">
              Abhinay
              <br />
              <span className="text-accent">Katta</span>
            </motion.h1>
          </motion.div>
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute bottom-6 text-xs font-mono opacity-60">
            scroll ↓
          </motion.div>
          <motion.div
            style={{ y: subY }}
            className=" absolute bottom-0 right-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}>
              <aside className="md:pl-8 md:border-l hairline">
                <dl className="space-y-5 font-mono text-sm">
                  <div>
                    <dt className="text-muted-foreground">role</dt>
                    <dd>SDE-1 @ ScaleReal</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">focus</dt>
                    <dd>performance · state · frontend architecture</dd>
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
