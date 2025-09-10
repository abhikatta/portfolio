import { CurveText } from "@/components/animated/curved-text-parallax";
import { SectionSmoothScroll } from "../reusable/section-smooth-scroll";

const AboutSecondFold = () => {
  const topLine = "Education Stats";

  return (
    <SectionSmoothScroll>
      <CurveText
        topLine={topLine}
        svgPathHref="second-fold"
        svgPath={
          <path
            id="second-fold"
            d="M0.5 1C10.1721 64.0532 25.5 83.5 77.5 119C165 164 228.139 155.902 312 94.5C416.907 35.3546 470.684 31.98 560.5 62C654.693 110.037 713.443 130.861 826 160C969.713 174.52 1049.29 173.44 1193 160C1341.5 138.5 1395.14 99.8279 1538 94.5C1693.63 96.0904 1775.58 103.569 1912 129"
            stroke="none"
          />
        }
      />
    </SectionSmoothScroll>
  );
};

export default AboutSecondFold;
