"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Section4 = ({ rendered }) => {
  // gsap.registerPlugin(ScrollTrigger);
  // const sectionRef = useRef(null);

  // useGSAP(() => {
  //   console.log({ rendered });

  //   gsap
  //     .timeline({
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top bottom",

  //         markers: true,
  //       },
  //     })
  //     .to(".text-animation", {
  //       transform: "translateY(100%)",
  //       ease: "power1.out",
  //       duration: 1,
  //     });
  // }, [rendered]);

  return (
    <div className="w-full h-svh bg-white-ivory flex flex-col px-15 section">
      <div className="w-full h-full flex justify-center items-start">
        <div className="w-[90%]  font-helixa text-[6.667vw] leading-[6.667vw] text-sunset-coral flex justify-between items-end">
          <div>
            <div>Our Assessment</div> <div>Approach</div>
          </div>
          <div className="w-[527px] text-[20px] leading-[24px] font-helixa text-[#5E5E5E] h-full ">
            <div className="mt-auto">
              Our assessment approach focuses on tracking each student's
              progress to ensure they are effectively meeting their educational
              goals.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-[32px] justify-between">
        <div className="bg-[#5EBFB3] h-[565px]  px-[60px] py-[80px] duration-500 transition-all rounded-[50px] relative flex  overflow-hidden gap-x-20">
          <div className="w-[10%] text-center font-helixa text-[128px] leading-[130px] text-white-ivory">
            1
          </div>
          <div className="w-[90%] h-full flex gap-x-20">
            <div className="h-full rounded-[50px] overflow-hidden">
              <img
                src="assets/images/our-approach/img-our-asessment.png"
                className="object-cover w-full h-full"
                alt=""
              />
            </div>
            <div className="flex flex-col min-h-full justify-between ">
              <div className="font-helixa font-bold text-[48px] leading-[55px] text-white-ivory">
                <div>Formative</div>
                <div>Assesment</div>
              </div>
              <div className="w-[367px]  font-helixa text-[20px] leading-[24px] text-white-ivory">
                Our continuous, formative assessment approach regularly checks
                student progress and provides ongoing feedback. This method
                enables us to effectively support and guide students throughout
                their learning journey.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#EEE7D9] h-[565px]  px-[60px] py-[80px] duration-500 transition-all rounded-[50px] relative flex  overflow-hidden gap-x-20">
          <div className="w-[10%] text-center font-helixa text-[128px] leading-[130px] text-sunset-coral">
            2
          </div>
          {/* <div className="w-[90%] h-full flex gap-x-20">
            <div className="h-full rounded-[50px] overflow-hidden">
              <img
                src="assets/images/our-approach/img-our-asessment.png"
                className="object-cover w-full h-full"
                alt=""
              />
            </div>
            <div className="flex flex-col min-h-full justify-between ">
              <div className="font-helixa font-bold text-[48px] leading-[55px] text-white-ivory">
                <div>Formative</div>
                <div>Assesment</div>
              </div>
              <div className="w-[367px]  font-helixa text-[20px] leading-[24px] text-white-ivory">
                Our continuous, formative assessment approach regularly checks
                student progress and provides ongoing feedback. This method
                enables us to effectively support and guide students throughout
                their learning journey.
              </div>
            </div>
          </div> */}
        </div>

        <div className="bg-[#EEE7D9] h-[565px]  px-[60px] py-[80px] duration-500 transition-all rounded-[50px] relative flex  overflow-hidden gap-x-20">
          <div className="w-[10%] text-center font-helixa text-[128px] leading-[130px] text-sunset-coral">
            3
          </div>
          {/* <div className="w-[90%] h-full flex gap-x-20">
            <div className="h-full rounded-[50px] overflow-hidden">
              <img
                src="assets/images/our-approach/img-our-asessment.png"
                className="object-cover w-full h-full"
                alt=""
              />
            </div>
            <div className="flex flex-col min-h-full justify-between ">
              <div className="font-helixa font-bold text-[48px] leading-[55px] text-white-ivory">
                <div>Formative</div>
                <div>Assesment</div>
              </div>
              <div className="w-[367px]  font-helixa text-[20px] leading-[24px] text-white-ivory">
                Our continuous, formative assessment approach regularly checks
                student progress and provides ongoing feedback. This method
                enables us to effectively support and guide students throughout
                their learning journey.
              </div>
            </div>
          </div> */}
        </div>

        <div className="bg-[#EEE7D9] h-[565px]  px-[60px] py-[80px] duration-500 transition-all rounded-[50px] relative flex  overflow-hidden gap-x-20">
          <div className="w-[10%] text-center font-helixa text-[128px] leading-[130px] text-sunset-coral">
            4
          </div>
          {/* <div className="w-[90%] h-full flex gap-x-20">
            <div className="h-full rounded-[50px] overflow-hidden">
              <img
                src="assets/images/our-approach/img-our-asessment.png"
                className="object-cover w-full h-full"
                alt=""
              />
            </div>
            <div className="flex flex-col min-h-full justify-between ">
              <div className="font-helixa font-bold text-[48px] leading-[55px] text-white-ivory">
                <div>Formative</div>
                <div>Assesment</div>
              </div>
              <div className="w-[367px]  font-helixa text-[20px] leading-[24px] text-white-ivory">
                Our continuous, formative assessment approach regularly checks
                student progress and provides ongoing feedback. This method
                enables us to effectively support and guide students throughout
                their learning journey.
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Section4;
