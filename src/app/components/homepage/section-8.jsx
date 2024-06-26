import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import WinnerClasses from "./WinnerClasses";

const Section8 = ({ cursorHover, cursorLeave }) => {
  const container = useRef();
  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=2000",

            scrub: true,
            pin: true,
            pinSpacing: true,
          },
        })
        .to(".winner-classes", {
          transform: "translateX(-100%)",
          ease: "power1.out",
        })
        .to(
          ".section-class",
          {
            transform: "translateX(0)",
            ease: "power1.out",
          },
          "-=0.3"
        );
    },
    { scope: container }
  );

  return (
    <div>
      <section
        className="w-full h-auto flex items-center bg-white-ivory section section-winner-classes max-sm:hidden "
        ref={container}
      >
        <div className="w-full h-svh flex items-center flex-nowrap relative">
          <div className="text-nowrap text-[13.333vw] text-sunset-coral translate-x-[120%] winner-classes">
            WINner Classes
          </div>
          <div className="w-full h-svh flex items-center bg-white-ivory section overflow-hidden translate-x-full section-class absolute flex-nowrap">
            <div
              className="w-full h-full flex translate-x-[60px] cursor-none "
              onMouseEnter={() => cursorHover("MORE")}
              onMouseLeave={cursorLeave}
            >
              <div className="w-[23%]   h-full ml-4 group relative  overflow-visible">
                <div className="h-full w-[130%]   overflow-y-visible ">
                  <div className="w-full h-full  after:bg-white-ivory relative  after:content-[''] after:w-[3000px] after:h-[3000px]  after:absolute after:left-0 group-hover:after:left-[-5%] after:top-1/2 after:rounded-full after:-translate-y-1/2 after:duration-1000 after:transition-all after:border-2 after:border-[#CABFAA] "></div>
                </div>
                <div className="overflow-visible w-[130%] h-full  absolute  top-0">
                  <div className="relative w-full h-full">
                    <div className=" w-[3000px] h-[3000px] absolute top-[50%] -translate-y-1/2 group-hover:left-[-5%] left-[85%] rounded-full border-2 border-[#CABFAA] bg-soft-tosca group-hover:bg-soft-tosca duration-700 transition-all"></div>
                  </div>
                </div>
                <div className="flex flex-col absolute top-[15%]  left-[20%] group-hover:left-[15%] group-hover:text-white-ivory duration-1000 transition-all">
                  <h1 className="text-sunset-coral font-seagull font-bold text-[64px] group-hover:text-white-ivory duration-1000 transition-all">
                    Nursery
                  </h1>
                  <div className="font-helixa text-[#5E5E5E] text-[36px] group-hover:left-[15%] group-hover:text-white-ivory duration-1000 transition-all">
                    2 - 3 years old
                  </div>
                </div>
                <div className="flex flex-col absolute top-[40%]  left-[26%] group-hover:left-[21%] group-hover:text-white-ivory duration-1000 transition-all">
                  <div className="font-helixa text-white-ivory text-[28px] group-hover:left-[15%] group-hover:text-white-ivory duration-1000 transition-all">
                    <ol className="list-disc">
                      <li>Max. Capacity 12 Seats</li>
                      <li>Teacher : Student = 1 : 4</li>
                    </ol>
                  </div>
                </div>
                <div className="absolute   bottom-0 right-[-30%] group-hover:right-[-20%]  w-[500px] h-auto group-hover:w-[400px] duration-1000 transition-all">
                  <img
                    src="/assets/images/home/img-class-1.png"
                    alt="nursery"
                    className=" w-full h-full"
                  />
                </div>
              </div>

              <div className="w-[23%]   h-full ml-4 group relative  overflow-visible">
                <div className="h-full w-[130%]   overflow-y-visible ">
                  <div className="w-full h-full  after:bg-white-ivory relative  after:content-[''] after:w-[3000px] after:h-[3000px]  after:absolute after:left-0 group-hover:after:left-[-5%] after:top-1/2 after:rounded-full after:-translate-y-1/2 after:duration-1000 after:transition-all after:border-2 after:border-[#CABFAA] "></div>
                </div>
                <div className="overflow-visible w-[130%] h-full  absolute  top-0">
                  <div className="relative w-full h-full">
                    <div className=" w-[3000px] h-[3000px] absolute top-[50%] -translate-y-1/2 group-hover:left-[-5%] left-[85%] rounded-full border-2 border-[#CABFAA] bg-soft-tosca group-hover:bg-soft-tosca duration-700 transition-all"></div>
                  </div>
                </div>
                <div className="flex flex-col absolute top-[15%]  left-[20%] group-hover:left-[15%] group-hover:text-white-ivory duration-1000 transition-all">
                  <h1 className="text-sunset-coral font-seagull font-bold text-[64px] group-hover:text-white-ivory duration-1000 transition-all">
                    Preschool
                  </h1>
                  <div className="font-helixa text-[#5E5E5E] text-[36px] group-hover:left-[15%] group-hover:text-white-ivory duration-1000 transition-all">
                    3 - 4 years old
                  </div>
                </div>
                <div className="flex flex-col absolute top-[40%]  left-[26%] group-hover:left-[21%] group-hover:text-white-ivory duration-1000 transition-all">
                  <div className="font-helixa text-white-ivory text-[28px] group-hover:left-[15%] group-hover:text-white-ivory duration-1000 transition-all">
                    <ol className="list-disc">
                      <li>Max. Capacity 16 Seats</li>
                      <li>Teacher : Student = 1 : 8</li>
                    </ol>
                  </div>
                </div>
                <div className="absolute   bottom-0 right-[-30%] group-hover:right-[-20%]  w-[500px] h-auto group-hover:w-[400px] duration-1000 transition-all">
                  <img
                    src="/assets/images/home/img-class-2.png"
                    alt="nursery"
                    className=" w-full h-full"
                  />
                </div>
              </div>

              <div className="w-[23%]   h-full ml-4 group relative  overflow-visible">
                <div className="h-full w-[130%]   overflow-y-visible ">
                  <div className="w-full h-full  after:bg-white-ivory relative  after:content-[''] after:w-[3000px] after:h-[3000px]  after:absolute after:left-0 group-hover:after:left-[-5%] after:top-1/2 after:rounded-full after:-translate-y-1/2 after:duration-1000 after:transition-all after:border-2 after:border-[#CABFAA] "></div>
                </div>
                <div className="overflow-visible w-[130%] h-full  absolute  top-0">
                  <div className="relative w-full h-full">
                    <div className=" w-[3000px] h-[3000px] absolute top-[50%] -translate-y-1/2 group-hover:left-[-5%] left-[85%] rounded-full border-2 border-[#CABFAA] bg-soft-tosca group-hover:bg-soft-tosca duration-700 transition-all"></div>
                  </div>
                </div>
                <div className="flex flex-col absolute top-[15%]  left-[20%] group-hover:left-[15%] group-hover:text-white-ivory duration-1000 transition-all">
                  <h1 className="text-sunset-coral font-seagull font-bold text-[64px] group-hover:text-white-ivory duration-1000 transition-all">
                    Kindy A
                  </h1>
                  <div className="font-helixa text-[#5E5E5E] text-[36px] group-hover:left-[15%] group-hover:text-white-ivory duration-1000 transition-all">
                    4 - 5 years old
                  </div>
                </div>
                <div className="flex flex-col absolute top-[40%]  left-[26%] group-hover:left-[21%] group-hover:text-white-ivory duration-1000 transition-all">
                  <div className="font-helixa text-white-ivory text-[28px] group-hover:left-[15%] group-hover:text-white-ivory duration-1000 transition-all">
                    <ol className="list-disc">
                      <li>Max. Capacity 20 Seats</li>
                      <li>Teacher : Student = 1 : 10</li>
                    </ol>
                  </div>
                </div>
                <div className="absolute   bottom-0 right-[-30%] group-hover:right-[-20%]  w-[500px] h-auto group-hover:w-[400px] duration-1000 transition-all">
                  <img
                    src="/assets/images/home/img-class-3.png"
                    alt="nursery"
                    className=" w-full h-full"
                  />
                </div>
              </div>

              <div className="w-[23%]   h-full ml-4 group relative  overflow-visible">
                <div className="h-full w-[130%]   overflow-y-visible ">
                  <div className="w-full h-full  after:bg-white-ivory relative  after:content-[''] after:w-[3000px] after:h-[3000px]  after:absolute after:left-0 group-hover:after:left-[-5%] after:top-1/2 after:rounded-full after:-translate-y-1/2 after:duration-1000 after:transition-all after:border-2 after:border-[#CABFAA] "></div>
                </div>
                <div className="overflow-visible w-[130%] h-full  absolute  top-0">
                  <div className="relative w-full h-full">
                    <div className=" w-[3000px] h-[3000px] absolute top-[50%] -translate-y-1/2 group-hover:left-[-5%] left-[85%] rounded-full border-2 border-[#CABFAA] bg-soft-tosca group-hover:bg-soft-tosca duration-700 transition-all"></div>
                  </div>
                </div>
                <div className="flex flex-col absolute top-[15%]  left-[20%] group-hover:left-[15%] group-hover:text-white-ivory duration-1000 transition-all">
                  <h1 className="text-sunset-coral font-seagull font-bold text-[64px] group-hover:text-white-ivory duration-1000 transition-all">
                    Kindy B
                  </h1>
                  <div className="font-helixa text-[#5E5E5E] text-[36px] group-hover:left-[15%] group-hover:text-white-ivory duration-1000 transition-all">
                    5 - 6 years old
                  </div>
                </div>
                <div className="flex flex-col absolute top-[40%]  left-[26%] group-hover:left-[21%] group-hover:text-white-ivory duration-1000 transition-all">
                  <div className="font-helixa text-white-ivory text-[28px] group-hover:left-[15%] group-hover:text-white-ivory duration-1000 transition-all">
                    <ol className="list-disc">
                      <li>Max. Capacity 20 Seats</li>
                      <li>Teacher : Student = 1 : 10</li>
                    </ol>
                  </div>
                </div>
                <div className="absolute   bottom-0 right-[-30%] group-hover:right-[-20%]  w-[500px] h-auto group-hover:w-[400px] duration-1000 transition-all">
                  <img
                    src="/assets/images/home/img-class-4.png"
                    alt="nursery"
                    className=" w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-sm:block hidden">
        <WinnerClasses />
      </div>
    </div>
  );
};

export default Section8;
