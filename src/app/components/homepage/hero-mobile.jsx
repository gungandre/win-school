"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const HeroMobile = () => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="w-full h-dvh flex justify-center items-center px-[32px] relative overflow-hidden">
      <div className="flex flex-col gap-y-[60px]">
        <div>
          <div className="font-seagull text-[24px] leading-[23px] text-sunset-coral flex ">
            <div className="overflow-hidden">
              <div className="school translate-y-full ">S</div>
            </div>
            <div className="overflow-hidden">
              <div className="school translate-y-full ">C</div>
            </div>
            <div className="overflow-hidden">
              <div className="school translate-y-full ">H</div>
            </div>
            <div className="overflow-hidden">
              <div className="school translate-y-full ">O</div>
            </div>
            <div className="overflow-hidden">
              <div className="school translate-y-full ">O</div>
            </div>
            <div className="overflow-hidden">
              <div className="school translate-y-full ">L</div>
            </div>
            &nbsp;
            <div className="overflow-hidden">
              <div className="school  translate-y-full">O</div>
            </div>
            <div className="overflow-hidden">
              <div className="school translate-y-full ">F</div>
            </div>
            &nbsp;
            <div className="overflow-hidden">
              <div className="school translate-y-full ">F</div>
            </div>
            <div className="overflow-hidden">
              <div className="school  translate-y-full">U</div>
            </div>
            <div className="overflow-hidden">
              <div className="school translate-y-full ">T</div>
            </div>
            <div className="overflow-hidden">
              <div className="school  translate-y-full">U</div>
            </div>
            <div className="overflow-hidden">
              <div className="school translate-y-full ">R</div>
            </div>
            <div className="overflow-hidden">
              <div className="school  translate-y-full">E</div>
            </div>
            {/* SCHOOL OF FUTURE */}
          </div>
          <div className="font-seagull text-[95px] leading-[93px] text-sunset-coral flex">
            <div className="overflow-hidden">
              <div className="translate-y-[100%] leaders ">L</div>
            </div>
            <div className="overflow-hidden">
              <div className="translate-y-[100%] leaders ">E</div>
            </div>
            <div className="overflow-hidden">
              <div className="translate-y-[100%] leaders ">A</div>
            </div>
            <div className="overflow-hidden">
              <div className="translate-y-[100%] leaders ">D</div>
            </div>
            <div className="overflow-hidden">
              <div className="translate-y-[100%] leaders ">E</div>
            </div>
            <div className="overflow-hidden">
              <div className="translate-y-[100%] leaders ">R</div>
            </div>
            <div className="overflow-hidden">
              <div className="translate-y-[100%] leaders ">S</div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-evenly flex-wrap gap-[16px]">
          <div className="overflow-hidden">
            <div className=" gap-6  animation-image bg-[#EEE7D9] w-[108px] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[16px] translate-y-full">
              Experience
            </div>
          </div>
          <div className="overflow-hidden">
            <div className=" gap-6  animation-image bg-[#EEE7D9] w-[108px] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[16px] translate-y-full ">
              Active
            </div>
          </div>
          <div className="overflow-hidden">
            <div className=" gap-6  animation-image bg-[#EEE7D9] w-[108px] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[16px] translate-y-full ">
              Balance
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div className="overflow-hidden">
              <div className=" gap-6  animation-image bg-[#EEE7D9] w-[108px] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[16px] translate-y-full">
                Play
              </div>
            </div>

            <div className="overflow-hidden">
              <div className=" gap-6  animation-image bg-[#EEE7D9] w-[108px] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[16px] translate-y-full">
                Transition
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[167px] absolute left-[-7%] bottom-0 translate-y-full hero-1">
        <img
          className="ml-4   w-full"
          src="/assets/images/home-hero1-mobile.png"
          alt="Hero 1"
        />
      </div>
      <div className="w-[250px] absolute right-[-7%] bottom-0 translate-y-full hero-2">
        <img
          className="mr-4   w-full"
          src="/assets/images/home-hero2-mobile.png"
          alt="Hero 2"
        />
      </div>
    </div>
  );
};

export default HeroMobile;
