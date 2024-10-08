import TSVG1 from "./TSVG1";
import TSVG2 from "./TSVG2";
import TSVG3 from "./TSVG3";
import TSVG4 from "./TSVG4";
import TSVG5 from "./TSVG5";

export default function TeamSec() {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[485px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team Members
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Clients
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
            <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
              <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                <img
                  src="/assets/images/team/team-01.png"
                  alt="team image"
                  className="h-[120px] w-[120px] rounded-full"
                />
                <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
                <span className="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
                  <TSVG1 />
                </span>
              </div>
              <div className="text-center">
                <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                  Melissa Tatcher
                </h4>
                <p className="mb-5 text-sm text-body-color dark:text-dark-6">
                  Marketing Expert
                </p>
                <div className="flex items-center justify-center gap-5">
                  <a
                    href="javascript:void(0)"
                    className="text-dark-6 hover:text-primary"
                  >
                    <TSVG2 />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-dark-6 hover:text-primary"
                  >
                    <TSVG5 />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-dark-6 hover:text-primary"
                  >
                    <TSVG3 />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
            <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
              <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-02.png"
                  alt="team image"
                  className="h-[120px] w-[120px] rounded-full"
                />
                <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
                <span className="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
                  <TSVG4 />
                </span>
              </div>
              <div className="text-center">
                <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                  Stuard Ferrel
                </h4>
                <p className="mb-5 text-sm text-body-color dark:text-dark-6">
                  Digital Marketer
                </p>
                <div className="flex items-center justify-center gap-5">
                  <a
                    href="javascript:void(0)"
                    className="text-dark-6 hover:text-primary"
                  >
                    <TSVG2 />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-dark-6 hover:text-primary"
                  >
                    <TSVG5 />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-dark-6 hover:text-primary"
                  >
                    <TSVG3 />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
            <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
              <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-03.png"
                  alt="team image"
                  className="h-[120px] w-[120px] rounded-full"
                />
                <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
                <span className="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
                  <TSVG4 />
                </span>
              </div>
              <div className="text-center">
                <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                  Eva Hudson
                </h4>
                <p className="mb-5 text-sm text-body-color dark:text-dark-6">
                  Creative Designer
                </p>
                <div className="flex items-center justify-center gap-5">
                  <a
                    href="javascript:void(0)"
                    className="text-dark-6 hover:text-primary"
                  >
                    <TSVG2 />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-dark-6 hover:text-primary"
                  >
                    <TSVG5 />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-dark-6 hover:text-primary"
                  >
                    <TSVG3 />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
            <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
              <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-04.png"
                  alt="team image"
                  className="h-[120px] w-[120px] rounded-full"
                />
                <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
                <span className="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
                  <TSVG4 />
                </span>
              </div>
              <div className="text-center">
                <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                  Jackie Sanders
                </h4>
                <p className="mb-5 text-sm text-body-color dark:text-dark-6">
                  Founder of Facebook
                </p>
                <div className="flex items-center justify-center gap-5">
                  <a
                    href="javascript:void(0)"
                    className="text-dark-6 hover:text-primary"
                  >
                    <TSVG2 />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-dark-6 hover:text-primary"
                  >
                    <TSVG5 />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-dark-6 hover:text-primary"
                  >
                    <TSVG3 />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
