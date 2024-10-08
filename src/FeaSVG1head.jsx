import FeaSVG1 from "./FeaSVG1";

export default function FeaSVG1head() {
  return (
    <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
      <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
      <FeaSVG1 />
    </div>
  );
}
