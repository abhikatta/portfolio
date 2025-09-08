// "use client";

import { MotionDiv } from "@/utils/variant-props-spread";
import { Variants } from "motion/react";

// import { cn } from "@/utils/cn";
// import { animate } from "motion/react";

// const idConstructor = (i: number, j: number) => `#${i}-${j}`;

// const GRID_SIZE = 10;

// const RightHomeInteraction = () => {
//   const animateGrid = (i: number, j: number, type: "leave" | "enter") => {
//     const directions = [
//       { dx: 0, dy: -1 },
//       { dx: 0, dy: 1 },
//       { dx: -1, dy: 0 },
//       { dx: 1, dy: 0 },
//       { dx: 1, dy: 1 },
//       { dx: 1, dy: -1 },
//       { dx: -1, dy: -1 },
//       { dx: -1, dy: 1 },
//     ];

//     // Animate the center cell
//     const center = document.getElementById(idConstructor(i, j));
//     if (center) {
//       animate(center, {
//         backgroundColor: type === "enter" ? "transparent" : "",
//         x: 0,
//         y: 0,
//       });
//     }

//     // Animate surrounding elements
//     directions.forEach(({ dx, dy }) => {
//       const x = i + dx;
//       const y = j + dy;
//       const el = document.getElementById(idConstructor(x, y));
//       if (!el) return;

//       animate(
//         el,
//         {
//           x: type === "enter" ? dx * 20 : 0,
//           y: type === "enter" ? dy * 20 : 0,
//         },
//         {
//           duration: 0.1,
//         },
//       );
//     });
//   };

//   // TODO: make this stagger like a ripple effect or something like the particles js thing that pushes away neighboring elements
//   return (
//     <div className="relative z-10 grid grid-cols-10">
//       {Array.from({ length: GRID_SIZE }).map((_, indexj) =>
//         Array.from({ length: GRID_SIZE }).map((_, indexi) => (
//           <div
//             id={idConstructor(indexi, indexj)}
//             onMouseOver={() => animateGrid(indexi, indexj, "enter")}
//             onMouseLeave={() => animateGrid(indexi, indexj, "leave")}
//             className={cn(
//               "bg-accentYellow size-6 cursor-pointer rounded-[6px] will-change-transform",
//             )}
//             key={`${indexi}-${indexj}`}
//           />
//         )),
//       )}
//     </div>
//   );
// };

// export default RightHomeInteraction;

const Cpm = () => {
  const edgePositions = [
    {
      x: 0,
      y: -40,
    },
    {
      x: 40,
      y: 0,
    },
    {
      x: 0,
      y: 40,
    },
    {
      x: -40,
      y: 0,
    },
  ];
  const cornerPositions = [
    {
      x: -20,
      y: -20,
    },
    {
      x: 20,
      y: -20,
    },
    {
      x: 20,
      y: 20,
    },
    {
      x: -20,
      y: 20,
    },
  ];

  const variants: Variants = {
    initial: {
      x: 0,
      y: 0,
    },
    animate: (custom: number) => ({
      x: [0, edgePositions[custom].x, cornerPositions[custom].x, 0],
      y: [0, edgePositions[custom].y, cornerPositions[custom].y, 0],
      rotate: [0, 0, -90, -90],
      opacity: [1, 1, 0.5, 1],
      transition: {
        repeat: Infinity,
        duration: 2,
        opacity: {
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 3,
          delay: custom * 0.2, // stagger only opacity
        },
        scale: {
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 3,
          delay: custom * 0.2, // stagger only opacity
          ease: "easeInOut",
        },
      },
    }),
  };
  return (
    <MotionDiv className="relative grid grid-cols-2">
      {[0, 1, 2, 3].map((item) => (
        <MotionDiv
          key={item}
          variants={variants}
          initial="initial"
          animate="animate"
          custom={item}
          className="bg-accentBlue absolute flex size-10 items-center justify-center"
        ></MotionDiv>
      ))}
    </MotionDiv>
  );
};

export default Cpm;
