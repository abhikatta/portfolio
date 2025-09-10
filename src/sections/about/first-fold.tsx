import { SectionSmoothScroll } from "../reusable/section-smooth-scroll";

const AboutFirstFold = () => {
  const topLine = "Why do I work as a frontend developer?";
  const text =
    "I've always been a huge gamer, which is what got me into coding. I started out learning game development with Unity, then got pulled into the world of AI and machine learning for a while. I eventually found that what I really enjoy is building things people can see and use, which is how I landed in frontend development with React and Next.js.";

  return (
    <SectionSmoothScroll
      curveTextProps={{
        svgTextClassName: "text-boldonse text-4xl",
        svgTextDisplacement: 25,
        className: "absolute top-0 max-w-full",
        topLine: topLine,
        hasCurveText: true,
      }}
      textProps={{ text }}
    />
  );
};

export default AboutFirstFold;
