import AboutFoot from "./AboutFoot";
import AboutImg1 from "./AboutImg1";
import AboutImg2 from "./AboutImg2";
import AboutSpan from "./Aboutspatag";

export default function AboutTail() {
  return (
    <div className="w-full px-4 lg:w-1/2">
      <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
        <AboutImg1 />
        <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
          <AboutImg2 />
          <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
            <AboutSpan />
            <AboutFoot />
          </div>
        </div>
      </div>
    </div>
  );
}
