"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export const LenisSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return <></>;
};
