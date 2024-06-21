import React from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section6Mobile from "./section-6-mobile";
import { useRef } from "react";
const Section6 = () => {
  const container = useRef();
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".section-after-video",

        onEnter: () => {
          gsap.fromTo(
            ".card-building",
            {
              transform: "translateY(100%)",
              opacity: 0,
            },
            {
              transform: "translateY(0)",
              opacity: 1,
              duration: 1,
              stagger: 0.05,
              ease: "power1.out",
            }
          );
        },
      });
    },
    { scope: container }
  );

  return (
    <>
      <section
        className="w-full h-dvh  max-sm:hidden  bg-white-ivory section-video relative px-[59px] flex justify-center items-center section section-after-video"
        ref={container}
      >
        <div className="w-full  flex justify-between mb-[20%]">
          <Link href="/building">
            <div className="group card-building">
              <div className="relative  ">
                <div className="w-[587px] h-[430px] rounded-[50px] absolute group-hover:-rotate-2 duration-1000 transition-all">
                  <Image
                    width={587}
                    height={430}
                    src="/assets/images/home/image-building1.png"
                  />
                </div>
                <div className="w-[587px] h-[430px] bg-almond-cream group-hover:bg-soft-tosca rounded-[50px] relative group-hover:translate-y-[80%] group-hover:rotate-2 duration-1000 transition-all">
                  <div className="absolute top-[8%] left-[10%]  font-helixa text-[5vw] group-hover:text-white-ivory duration-1000 transition-all">
                    Buildings
                  </div>{" "}
                  <div className="absolute bottom-[5%] right-[2%] ">
                    <div className="relative w-[203px] h-[76px] flex items-center">
                      <div className="w-0 group-hover:w-[203px] duration-1000 opacity-0 group-hover:opacity-100 transition-all h-[76px] bg-white-ivory rounded-[38px] absolute right-0">
                        <div className="relative w-full h-full flex items-center">
                          <div className="font-helixa font-bold text-[28px] text-[#404040] ml-0 group-hover:ml-8 opacity-0 group-hover:opacity-100 duration-1000 transition-all">
                            More
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="w-[76px] h-[76px] group-hover:w-[62px] group-hover:h-[62px] transition-all duration-1000 bg-sunset-coral rounded-full flex justify-center items-center absolute right-[5%] z-10">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.78125 18.2676L17.7694 2.27938"
                              stroke="#FFFBF3"
                              strokeWidth="2.82634"
                            />
                            <path
                              d="M1.78125 2.28125H17.7694V18.2694"
                              stroke="#FFFBF3"
                              strokeWidth="2.82634"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/building">
            <div className="group card-building">
              <div className="relative  ">
                <div className="w-[587px] h-[430px] rounded-[50px] absolute group-hover:-rotate-2 duration-1000 transition-all">
                  <Image
                    width={587}
                    height={430}
                    src="/assets/images/home/image-facilities.png"
                  />
                </div>
                <div className="w-[587px] h-[430px] bg-almond-cream group-hover:bg-soft-tosca rounded-[50px] relative group-hover:translate-y-[80%] group-hover:rotate-2 duration-1000 transition-all">
                  <div className="absolute top-[8%] left-[10%]  font-helixa text-[5vw] group-hover:text-white-ivory duration-1000 transition-all">
                    Facilities
                  </div>
                  <div className="absolute bottom-[5%] right-[2%] ">
                    <div className="relative w-[203px] h-[76px] flex items-center">
                      <div className="w-0 group-hover:w-[203px] duration-1000 opacity-0 group-hover:opacity-100 transition-all h-[76px] bg-white-ivory rounded-[38px] absolute right-0">
                        <div className="relative w-full h-full flex items-center">
                          <div className="font-helixa font-bold text-[28px] text-[#404040] ml-0 group-hover:ml-8 opacity-0 group-hover:opacity-100 duration-1000 transition-all">
                            More
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="w-[76px] h-[76px] group-hover:w-[62px] group-hover:h-[62px] transition-all duration-1000 bg-sunset-coral rounded-full flex justify-center items-center absolute right-[5%] z-10">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.78125 18.2676L17.7694 2.27938"
                              stroke="#FFFBF3"
                              strokeWidth="2.82634"
                            />
                            <path
                              d="M1.78125 2.28125H17.7694V18.2694"
                              stroke="#FFFBF3"
                              strokeWidth="2.82634"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href={"/activities"}>
            <div className="group card-building">
              <div className="relative  ">
                <div className="w-[587px] h-[430px] rounded-[50px] absolute group-hover:-rotate-2 duration-1000 transition-all">
                  <Image
                    width={587}
                    height={430}
                    src="/assets/images/home/image-activities.png"
                  />
                </div>
                <div className="w-[587px] h-[430px] bg-almond-cream group-hover:bg-soft-tosca rounded-[50px] relative group-hover:translate-y-[80%] group-hover:rotate-2 duration-1000 transition-all">
                  <div className="absolute top-[8%] left-[10%]  font-helixa text-[5vw] group-hover:text-white-ivory duration-1000 transition-all">
                    Activities
                  </div>
                  <div className="absolute bottom-[5%] right-[2%] ">
                    <div className="relative w-[203px] h-[76px] flex items-center">
                      <div className="w-0 group-hover:w-[203px] duration-1000 opacity-0 group-hover:opacity-100 transition-all h-[76px] bg-white-ivory rounded-[38px] absolute right-0">
                        <div className="relative w-full h-full flex items-center">
                          <div className="font-helixa font-bold text-[28px] text-[#404040] ml-0 group-hover:ml-8 opacity-0 group-hover:opacity-100 duration-1000 transition-all">
                            More
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="w-[76px] h-[76px] group-hover:w-[62px] group-hover:h-[62px] transition-all duration-1000 bg-sunset-coral rounded-full flex justify-center items-center absolute right-[5%] z-10">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.78125 18.2676L17.7694 2.27938"
                              stroke="#FFFBF3"
                              strokeWidth="2.82634"
                            />
                            <path
                              d="M1.78125 2.28125H17.7694V18.2694"
                              stroke="#FFFBF3"
                              strokeWidth="2.82634"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <div className="max-sm:block hidden">
        <Section6Mobile />
      </div>
    </>
  );
};

export default Section6;
