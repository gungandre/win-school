"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const datas = [
  "Exposing Diverse Yet Inclusive Experiences",
  "Exposing Diverse Yet Inclusive Experiences",
  "Fostering Balance and Holistic Development",
  "Facilitating Playful Child-centered Learning",
  "Supporting Strong Transition for The Future",
];

const Section2 = ({ stRefresh }) => {
  const elemenRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (stRefresh) {
      ScrollTrigger.create({
        trigger: ".our-mission-statements",

        onEnter: () => {
          gsap.from(".our-mission-statements", {
            y: "100%",
            ease: "power1.out",
            duration: 1,
          });
        },
      });

      datas.forEach((_, index) => {
        ScrollTrigger.create({
          trigger: `.our-mission-statements-number-${index}`,

          onEnter: () => {
            gsap.to(`.our-mission-statements-number-${index}`, {
              left: "0",
              opacity: 1,
              ease: "power1.out",
              duration: 0.5,
            });
          },
        });

        ScrollTrigger.create({
          trigger: `.our-mission-statements-desc-${index}`,

          onEnter: () => {
            gsap.to(`.our-mission-statements-desc-${index}`, {
              left: "0",
              opacity: 1,
              ease: "power1.out",
              duration: 0.5,
            });
          },
        });
      });
    }
  }, [stRefresh]);

  return (
    <div
      className="w-full min-h-svh py-[132px] bg-white-ivory flex flex-col gap-y-20 section"
      ref={elemenRef}
    >
      <div className="overflow-hidden">
        <div className="text-center text-sunset-coral text-[128px] font-helixa our-mission-statements">
          Our Mission Statements
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="flex flex-col w-full items-center">
          {datas.map((item, index) => (
            <div className="w-full flex justify-center group overflow-hidden relative">
              <div className="w-[85%] flex flex-col z-10">
                <div className="py-[60px] w-full border-b-[2px] border-t-[2px] border-[#EEE7D9] flex ">
                  <div className="w-[35%]">
                    <div
                      className={`font-helixa text-[48px] text-[#404040] group-hover:text-white-ivory duration-500 transition-all relative our-mission-statements-number-${index} left-[-10%] opacity-0`}
                    >
                      0{index}
                    </div>
                  </div>

                  <div className="w-[75%]">
                    <div
                      className={`font-helixa text-[48px] text-[#404040] leading-[55px] group-hover:text-white-ivory duration-500 transition-all relative our-mission-statements-desc-${index} right-[-10%] opacity-0`}
                    >
                      {item}
                      {/* <div>Exposing Diverse Yet </div>
                  <div>Inclusive Experiences</div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full absolute bg-soft-tosca translate-y-full group-hover:translate-y-0 duration-500 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
