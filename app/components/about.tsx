import CommentTag from "./ui/comment-tag";
import Container from "./ui/container";
import SectionTitle from "./ui/section-title";

const About = () => {
  return (
    <section className="min-h-screen h-full">
      <Container id="about" wantSpacing>
        <CommentTag>about</CommentTag>
        <SectionTitle>
          Engineer first,
          <br />
          <span className="italic text-accent">curious always.</span>
        </SectionTitle>

        <div className="mt-12 space-y-6 text-lg leading-relaxed text-foreground/90">
          <p>
            Hello, I&apos;m{" "}
            <strong className="font-medium">Abhinay Katta</strong>, a
            frontend-focused software engineer with a strong foundation in
            modern web technologies. I currently work as an{" "}
            <span className="text-accent text-base">SDE-1 at ScaleReal</span>,
            building scalable frontend architectures.
          </p>
          <p>
            I specialize in{" "}
            <span className="text-accent">performance optimization</span> —
            having successfully reduced bundle sizes by{" "}
            <strong className="font-medium">99%</strong> in legacy applications
            and led migrations to modern build systems and reusable UI
            components.
          </p>
          <p>
            I started my journey with game development and Python, but quickly
            discovered my passion for building fast, intuitive, and
            high-performing web experiences and mobile applications.
          </p>
          <p>
            My current stack revolves around React, Next.js, TypeScript, paired
            with robust state management tools like Redux, TanStack Query, and
            Zustand.
          </p>
        </div>
      </Container>
    </section>
  );
};
export default About;
