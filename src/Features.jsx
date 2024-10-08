import FeatureH from "./FeatureHeader";
import FeSVGSec from "./FeatureSVGSection";

export default function Features() {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <FeatureH />
        <FeSVGSec />
      </div>
    </section>
  );
}
