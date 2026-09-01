export interface Experience {
  title: string;
  company: string;
  period: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    title: "SDE - 1",
    company: "ScaleReal",
    period: "Sep 2024 — Present",
    points: [
      "Rebuilt a mocked-data prototype into a shipping Electron/React desktop app with extended features over 2.5 months as sole frontend engineer, decomposing a 6,000-line monolithic canvas file into a maintainable component structure and removing dead code and mock data.",
      "Designed and built multi-workspace GitHub authentication supporting OAuth device flow, personal access tokens, and anonymous workspaces, with isolated sessions so users could switch accounts without cross-contaminating tokens or usage history.",
      "Used react-scan to catch a 25fps rendering regression in the visualization canvas, traced it to box-shadow and animated SVG elements forcing expensive repaints, and fixed it with opacity-based animation, recovering full frame rate with no visible UI change.",
      "Traced a performance issue back to a single 20MB SVG killing load times. Split it up, optimized it down to 180KB with no visual difference.",
      "Migrated multiple production codebases to modern tooling using AI-assisted refactoring. Shipped cleanly with no major regressions.",
      "Owned multiple client projects end to end, requirements, architecture, stakeholder calls, and delivery.",
      "Built a configurable multi-step onboarding flow with Form.io supporting schema-driven validation, and integrated Strapi and MDX using SSG and ISR for content updates without redeployment.",
    ],
  },
  {
    title: "SDE - Intern",
    company: "ScaleReal",
    period: "Mar 2024 — Aug 2024",
    points: [
      "Took unit test coverage from ~10% to 87% across a large review platform using Jest and RTL.",
      "Refactored Redux slices and killed redundant re-renders across key flows, shaved 25% off load times.",
      "Maintained and improved the company website, new sections, UX fixes, the usual.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digi Frills",
    period: "Oct 2023 — Feb 2024",
    points: [
      "Fixed 50+ bugs and optimized components, brought load times down by ~15%.",
      "Worked closely with designers to tighten up interfaces, user satisfaction went up ~25% based on feedback.",
      "Debugged critical issues across existing features and left the codebase more stable than I found it.",
    ],
  },
  {
    title: "Trying every interest in college",
    company: "self employed ig",
    period: "Mar 2020 — Oct 2023",
    points: [
      "Worked on a bunch of side projects with python, unity, react, react native etc",
      "Built a couple of games in Unity, actually finished ones too.",
      "Almost shipped a full 3D shooter until my laptop died mid Linux experiment. RIP.",
    ],
  },
];
