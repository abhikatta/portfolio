import { createRandomColor } from "@/utils/ball";

export interface BallProps {
  centerX: number;
  centerY: number;
  radius: number;
  mass: number;
  velocity: number;
  dt: number;
  RGB: ReturnType<typeof createRandomColor>;
  vector: { x: number; y: number };
  direction: number;
  fillStyle: string;
}
