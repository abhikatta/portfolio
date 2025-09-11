import { AboutHero } from "@/sections/about/hero";
import AboutFirstFold from "@/sections/about/first-fold";
import AboutSecondFold from "@/sections/about/second-fold";

const Page = () => {
  return (
    <section className="relative w-full">
      <AboutHero />
      <AboutFirstFold />
      <AboutSecondFold />
    </section>
  );
};

export default Page;
