"use client";

import { Ball } from "./ball";
import { drawBall } from "../../utils/ball";
import { PARTICLE_COUNT } from "@/data/constants";
import { useEffect, useRef } from "react";

export const BallBg = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ballsRef = useRef<Ball[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (ballsRef.current.length === 0) {
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        ballsRef.current.push(new Ball(canvas));
      }
    }

    let animationFrameId: number;

    const animate = () => {
      // Clear the canvas for the new frame.
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update positions
      for (const ball of ballsRef.current) {
        ball.moveBall();
      }

      // Draw all balls. This is more efficient than drawing them one by one.
      drawBall(canvas, ballsRef.current);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas className="absolute top-0 -z-10 h-full w-full" ref={canvasRef} />
  );
};
