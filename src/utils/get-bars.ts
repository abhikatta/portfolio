import { COLOR_OPTIONS } from "@/data/constants";
import { Bar } from "./types";

export const getBars = (MAX_BARS: number, MIN_BARS: number): Array<Bar> => {
  const bars: Bar[] = [];

  const barsCount =
    Math.ceil(Math.random() * (MAX_BARS - MIN_BARS + 1)) + MIN_BARS;

  const barColor =
    COLOR_OPTIONS[Math.floor(Math.random() * COLOR_OPTIONS.length)];

  for (let index = 0; index < barsCount; index++) {
    bars.push({
      delay: Math.random() * 0.5,
      bgColor: barColor,
    });
  }

  return bars;
};
