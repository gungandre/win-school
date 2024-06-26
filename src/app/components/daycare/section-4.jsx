"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

const Section4 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const elemenRef = useRef(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".playschool-photo-gallery",

        start: "top center",
        end: "top top",
        once: true,
        onEnter: () => {
          gsap.to(".playschool-photo-gallery", {
            transform: "translateY(0)",
            opacity: 1,
            duration: 1,
            ease: "power1.out",
          });
          gsap.fromTo(
            ".image-container-gallery",

            {
              width: "1265px",
              height: "1795px",
              duration: 1,
              ease: "power1.out",
            },
            {
              width: "1065px",
              height: "1595px",

              duration: 1,
              ease: "power1.out",
              onComplete: () => {
                ScrollTrigger.create({
                  trigger: ".image-container-gallery",

                  start: "top +=40%",
                  once: true,
                  animation: gsap.to(
                    ".image-container-gallery",

                    {
                      width: "511px",
                      height: "765px",
                      duration: 1,
                      ease: "power1.out",
                    }
                  ),
                });

                ScrollTrigger.create({
                  trigger: ".image-container-gallery",

                  start: "top +=40%",
                  once: true,
                  animation: gsap.to(
                    ".another-img",

                    {
                      transform: "translate(0)",
                      duration: 1.5,
                      ease: "power1.out",
                    }
                  ),
                });

                ScrollTrigger.create({
                  trigger: ".image-container-gallery",

                  start: "top +=40%",
                  once: true,
                  animation: gsap.to(
                    ".another-img-1",

                    {
                      delay: 0.1,
                      transform: "translate(0)",
                      duration: 1.5,
                      ease: "power1.out",
                    }
                  ),
                });

                ScrollTrigger.create({
                  trigger: ".image-container-gallery",

                  start: "top +=40%",
                  once: true,
                  animation: gsap.to(
                    ".another-img-2",

                    {
                      delay: 0.01,
                      transform: "translate(0)",
                      duration: 1.5,
                      ease: "power1.out",
                    }
                  ),
                });
              },
            },
            "<"
          );
        },
      });

      gsap.timeline({}).to(".image-container-gallery", {
        transform: "translate(0)",
        duration: 1,
        ease: "power1.out",
      });
    },
    { scope: elemenRef }
  );

  return (
    <div
      className="min-h-svh w-full  py-[158px] bg-white-ivory relative section"
      ref={elemenRef}
    >
      <div className="w-full">
        <div className="font-helixa text-[6.667vw] text-sunset-coral text-center playschool-photo-gallery opacity-0 translate-y-full">
          Daycare Photo Gallery
        </div>
        <div className="grid grid-cols-[37.5vw_62.5vw] mt-[178px] relative">
          <div className=" mr-[60px] mt-[25%]">
            <div className="flex justify-end ">
              <div className="flex flex-col gap-x-[60px] items-end gap-y-[60px]">
                <div className="w-[514px] h-[344px] rounded-[50px]  overflow-hidden -translate-x-[150%] another-img-1">
                  <img
                    src="assets/images/playschool/gallery/Image 2.png"
                    alt=""
                    className="w-full h-full object-cover "
                  />
                </div>

                <div className="w-[317px] -translate-x-[230%] h-[475px] rounded-[50px]  overflow-hidden another-img">
                  <img
                    src="assets/images/playschool/gallery/Image 4.png"
                    alt=""
                    className="w-full h-full object-cover "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="grid grid-rows-2">
              <div className="">
                <div className="flex items-end gap-x-[60px]">
                  <div className="flex justify-center w-[511px] h-[765px]  overflow-visible ">
                    <div className="w-[1265px] h-[1795px] rounded-[50px] image-container-gallery overflow-hidden absolute  -translate-x-1/2 ">
                      <img
                        src="assets/images/playschool/gallery/Image 6.png"
                        alt=""
                        className="w-full h-full object-cover "
                      />
                    </div>
                  </div>

                  <div className="w-[317px] h-[475px] rounded-[50px]  overflow-hidden translate-x-[230%] another-img">
                    <img
                      src="assets/images/playschool/gallery/Image 5.png"
                      alt=""
                      className="w-full h-full object-cover "
                    />
                  </div>
                </div>
              </div>
              <div className=" mt-[60px]">
                <div className="flex  gap-x-[60px]">
                  <div className="w-[779px] h-[522px] rounded-[50px]  overflow-hidden translate-y-[200%] another-img-2">
                    <img
                      src="assets/images/playschool/gallery/Image 1.png"
                      alt=""
                      className="w-full h-full object-cover "
                    />
                  </div>

                  <div className="w-[245px] h-[367px] rounded-[50px]  overflow-hidden translate-x-[200%] another-img">
                    <img
                      src="assets/images/playschool/gallery/Image 3.png"
                      alt=""
                      className="w-full h-full object-cover "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
