import HeroImg from "./HeroImg";
import HeroSVG1 from "./HeroSVG1";
import HeroSVG2 from "./HeroSVG2";

export default function HeroFooter() {
  return (
    <div className="w-full px-4">
      <div className=" relative z-10 mx-auto max-w-[845px]">
        <HeroImg />
        <HeroSVG1 />
        <HeroSVG2 />
      </div>
    </div>
  );
}
