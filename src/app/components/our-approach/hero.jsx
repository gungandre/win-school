import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useRef } from "react";

const Hero = ({ rendered }) => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  const elemenRef = useRef(null);

  useGSAP(() => {
    const ourCuriculum = new SplitText(".our-curiculum", {
      type: "lines",
      linesClass: "our-curiculum-line",
    });

    gsap.from(ourCuriculum.lines, {
      transform: "translateY(100%)",
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power1.out",
    });

    gsap.to(".our-aproach-text", {
      transform: "translateY(0)",
      ease: "power1.out",
      duration: 1,
      stagger: 0.1,
    });

    gsap.to(".img-hero-section", {
      transform: "translateY(0)",
      opacity: 1,
      ease: "power1.out",
      duration: 1,
    });

    const descAfterHero = new SplitText(".desc-after-hero", {
      type: "lines",
      linesClass: "desc-after-hero-line",
    });

    ScrollTrigger.create({
      trigger: ".desc-after-hero",
      once: true,
      onEnter: () => {
        gsap.from(descAfterHero.lines, {
          transform: "translateY(100%)",
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power1.out",
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".title-after-hero",
      once: true,
      onEnter: () => {
        gsap.to(".title-after-hero", {
          transform: "translateY(0)",
          ease: "power1.out",
          duration: 1,
        });
      },
    });
  }, [rendered]);

  return (
    <div className="min-h-svh w-full bg-white-ivory section">
      <div className="w-full flex justify-center flex-col items-center gap-20">
        <div className="mt-[8%]">
          <div className="font-seagull text-[5.313vw] leading-[5.313vw] text-sunset-coral flex ">
            <div className="overflow-hidden">
              <div className="our-aproach-text translate-y-full">O</div>
            </div>
            <div className="overflow-hidden">
              <div className="our-aproach-text translate-y-full">U</div>
            </div>
            <div className="overflow-hidden">
              <div className="our-aproach-text translate-y-full">R</div>
            </div>
          </div>
          <div className="font-seagull text-[11.719vw] leading-[11.719vw] text-sunset-coral flex">
            <div className="overflow-hidden">
              <div className="our-aproach-text translate-y-full">A</div>
            </div>
            <div className="overflow-hidden">
              <div className="our-aproach-text translate-y-full">P</div>
            </div>
            <div className="overflow-hidden">
              <div className="our-aproach-text translate-y-full">P</div>
            </div>
            <div className="overflow-hidden">
              <div className="our-aproach-text translate-y-full">R</div>
            </div>
            <div className="overflow-hidden">
              <div className="our-aproach-text translate-y-full">O</div>
            </div>
            <div className="overflow-hidden">
              <div className="our-aproach-text translate-y-full">A</div>
            </div>
            <div className="overflow-hidden">
              <div className="our-aproach-text translate-y-full">C</div>
            </div>
            <div className="overflow-hidden">
              <div className="our-aproach-text translate-y-full">H</div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[1345px] flex justify-center translate-y-[50%] opacity-0 img-hero-section">
            <div className="w-[100%]  relative">
              <img
                src="assets/images/our-approach/hero.png"
                className="w-[70%]"
                alt=""
              />
              <div className="bg-soft-tosca w-[458px] h-[309px] rounded-[50px] absolute top-0 right-0 pl-[48px] pt-[38px] ">
                <div className="w-full h-full relative">
                  <div className="max-w-[294px] font-helixa text-white-ivory text-[28px] leading-[35px] our-curiculum">
                    Our curriculum is designed to promote social, emotional,
                    cognitive, and physical development.
                  </div>
                  <div className="w-[76px] h-[76px] rounded-full bg-dark-tosca absolute right-[5%] bottom-[5%]  flex justify-center items-center">
                    <svg
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.9985 0.857867L14.9985 29.1421M14.9985 29.1421L29.1406 15M14.9985 29.1421L0.856355 15"
                        stroke="#FFFBF3"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center  mb-[144px] mt-[8%]">
          <div className="w-[85%]  flex justify-between">
            <div className="flex flex-col gap-y-5">
              <div>
                <div className="overflow-hidden">
                  <div className="font-helixa text-[6.667vw] leading-[6.667vw] text-sunset-coral translate-y-full title-after-hero">
                    Holistic
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="font-helixa text-[6.667vw] leading-[6.667vw] text-sunset-coral translate-y-full title-after-hero">
                    and Balance
                  </div>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="font-helixa text-[2.865vw] translate-y-full title-after-hero">
                  Focusing on the whole child
                </div>
              </div>
            </div>
            <div className="max-w-[484px] mt-auto font-helixa text-[#5E5E5E] desc-after-hero">
              Our curriculum focuses on developing knowledge, skills, and
              understanding to prepare children for the next stage in their
              education. It ensures they reach international milestones for
              early development and connects them with the world around them.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
