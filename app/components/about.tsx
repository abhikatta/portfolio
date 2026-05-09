"use client";
import { useScroll } from "motion/react";
import { useRef } from "react";
import CommentTag from "./ui/comment-tag";
import Container from "./ui/container";
import RevealWord from "./ui/reveal-word";
import SectionTitle from "./ui/section-title";
import { cn } from "@/lib/utils";

const PARAGRAPHS = [
  {
    text: `Hey, I'm Abhinay Katta, a software engineer based in Karimnagar, India with around 2 years of professional experience. I currently work at ScaleReal as an SDE-1, where I've owned projects end to end, from scoping requirements with clients to shipping.`,
    highlights: [],
  },
  {
    text: `My strongest suit is frontend, React and Next.js with TypeScript specifically. I care a lot about performance and clean code, not in a buzzword way, but in a "that 20MB SVG was tanking load times so I fixed it" way. I've also spent time modernizing legacy codebases, writing tests, and wiring up CMS integrations with Strapi and MDX.`,
    highlights: ["performance", "clean", " code,"],
  },
  {
    text: `Recently I've been going deeper into the stack, building APIs with FastAPI, working with PostgreSQL, and getting more comfortable with backend systems. I like understanding the full picture, not just the layer I happen to be working on.`,
    highlights: ["FastAPI,", "PostgreSQL,", "backend"],
  },
  {
    text: `I got into programming through game development and Python, but building for the web clicked for me because the feedback loop is immediate. You build something, you see it, you feel it. That's still what drives me.`,
    highlights: ["game", "development", "Python,"],
  },
  {
    text: `When I'm not at my desk I'm usually out on a solo bike ride somewhere across India, or deep into a horror film or something mind-bending like Invincible. Big fan of anything that messes with your head a little.`,
    highlights: ["Invincible."],
  },
];

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start -0.2", "end 115%"], // stop animation just 15% below the last point of the ref
  });

  const allWords = PARAGRAPHS.flatMap((para) => {
    const words = para.text.trim().split(/\s+/);
    return words.map((word, i) => ({
      word,
      isFirstWordOfParagraph: i === 0,
      isHighlighted: para.highlights.some(
        (h) => word.replace(/[^a-zA-Z]/g, "").toLowerCase() === h.toLowerCase(), // incase i messed up the case sensitivity
      ),
    }));
  });

  return (
    <section ref={ref} className="h-auto xl:h-[500vh]">
      <div className="flex h-full flex-col items-center justify-start xl:sticky xl:top-0 xl:h-screen xl:justify-center">
        <Container id="about" wantSpacing>
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "9vh 9vh",
            }}
          />
          <CommentTag>about</CommentTag>
          <SectionTitle>
            Engineer first,
            <br />
            <span className="text-accent italic">curious always.</span>
          </SectionTitle>
          <div className="flex flex-wrap items-center justify-start xl:hidden">
            {PARAGRAPHS.map((p, index) => (
              <span key={index} className="mt-6">
                {p.text}
              </span>
            ))}
          </div>
          <div className="text-foreground/90 hidden text-lg xl:block">
            {allWords.map((wordObj, index) => (
              <RevealWord
                textLength={allWords.length}
                key={index}
                index={index}
                scrollYProgress={scrollYProgress}
                word={{
                  word: wordObj.word,
                  className: cn(
                    wordObj.isFirstWordOfParagraph && "ml-8",
                    wordObj.isHighlighted && "text-accent font-medium",
                  ),
                }}
                isFirstWordOfParagraph={wordObj.isFirstWordOfParagraph}
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};
export default About;
