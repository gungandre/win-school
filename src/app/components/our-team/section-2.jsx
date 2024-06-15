"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
const Section2 = ({ tlComplete }) => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".our-team",
      once: true,
      onEnter: () => {
        gsap.from(".our-team", {
          transform: "translateY(100%)",
          duration: 1,
          ease: "power1.out",
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".card-our-team",
      once: true,
      onEnter: () => {
        gsap.from(".card-our-team", {
          transform: "translateY(100%)",
          duration: 1,
          ease: "power1.out",
        });
      },
    });
  }, [tlComplete]);

  return (
    <div className="w-full min-h-dvh bg-white-ivory px-15 py-[180px]">
      <div className="overflow-hidden">
        <div className="text-center text-sunset-coral text-[128px] font-helixa our-team">
          Our Team
        </div>
      </div>

      <div className="w-full flex justify-evenly mt-[200px]">
        <div className="flex flex-col gap-y-5 w-[380px] card-our-team">
          <div className="w-[380px] h-[550px] relative flex justify-center">
            <div className="w-full h-[430px] bg-[#EEE7D9] absolute bottom-0 rounded-[50px]"></div>
            <img
              src="/assets/images/home/win-principal.png"
              alt=""
              className="z-10 relative w-full h-full right-0 "
            />
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="font-seagull text-[48px] leading-[60px] text-sunset-coral">
              Dr. Judge Thomas
            </div>
            <div className="font-helixa text-[28px] text-[#5E5E5E]">
              Educator
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 w-[380px] card-our-team">
          <div className="w-[380px] h-[550px] relative flex justify-center">
            <div className="w-full h-[430px] bg-[#EEE7D9] absolute bottom-0 rounded-[50px]"></div>
            <img
              src="/assets/images/home/win-principal.png"
              alt=""
              className="z-10 relative w-full h-full right-0 "
            />
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="font-seagull text-[48px] leading-[60px] text-sunset-coral">
              Dr. Judge Thomas
            </div>
            <div className="font-helixa text-[28px] text-[#5E5E5E]">
              Educator
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 w-[380px] card-our-team">
          <div className="w-[380px] h-[550px] relative flex justify-center">
            <div className="w-full h-[430px] bg-[#EEE7D9] absolute bottom-0 rounded-[50px]"></div>
            <img
              src="/assets/images/home/win-principal.png"
              alt=""
              className="z-10 relative w-full h-full right-0 "
            />
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="font-seagull text-[48px] leading-[60px] text-sunset-coral">
              Dr. Judge Thomas
            </div>
            <div className="font-helixa text-[28px] text-[#5E5E5E]">
              Educator
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
