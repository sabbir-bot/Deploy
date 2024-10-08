import FeaSVG1Foot from "./FeaSVG1Foot";
import FeaSVG1head from "./FeaSVG1head";
import FeaSVG2Foot from "./FeaSVG2Foot";
import FeaSVG2head from "./FeaSVG2head";
import FeaSVG3Foot from "./FeaSVG3Foot";
import FeaSVG3head from "./FeaSVG3head";
import FeaSVG4Foot from "./FeaSVG4Foot";
import FeaSVG4head from "./FeaSVG4hed";

export default function FeSVGSec() {
  return (
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4 md:w-1/2 lg:w-1/4">
        <div className=" group mb-12">
          <FeaSVG1head />
          <FeaSVG1Foot />
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/4">
        <div className=" group mb-12">
          <FeaSVG2head />
          <FeaSVG2Foot />
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/4">
        <div className=" group mb-12">
          <FeaSVG3head />
          <FeaSVG3Foot />
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/4">
        <div className=" group mb-12">
          <FeaSVG4head />
          <FeaSVG4Foot />
        </div>
      </div>
    </div>
  );
}
