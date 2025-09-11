"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export const LenisSmoothScroll = () => {
  useEffect(() => {
    // Check if the user is on a touch device
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    // Only initialize Lenis on non-touch devices
    if (!isTouchDevice) {
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
    }
  }, []);

  return <></>;
};
