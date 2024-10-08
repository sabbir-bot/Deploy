import HeroH from "./HeorHeader";
import HeroOrder from "./HeroOrder";

export default function HeroTitle() {
  return (
    <div className="w-full px-4">
      <div className="hero-content  mx-auto max-w-[780px] text-center">
        <HeroH />
        <HeroOrder />
      </div>
    </div>
  );
}
