"use client";
import { useState, useEffect } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const tabletMediaQuery = window.matchMedia("(max-width: 1200px)");

    const updateIsMobile = (event: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(event.matches);
    };

    const updateIsTablet = (event: MediaQueryListEvent | MediaQueryList) => {
      setIsTablet(event.matches);
    };

    updateIsMobile(mediaQuery);
    updateIsTablet(tabletMediaQuery);

    mediaQuery.addEventListener("change", updateIsMobile);
    tabletMediaQuery.addEventListener("change", updateIsTablet);

    return () => {
      mediaQuery.removeEventListener("change", updateIsMobile);
      tabletMediaQuery.removeEventListener("change", updateIsTablet);
    };
  }, []);

  return { isMobile, isTablet };
};
