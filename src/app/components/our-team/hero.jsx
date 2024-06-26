"use client";

import React from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

const Hero = ({ setTlComplete }) => {
  const elemenRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".our-principal-text", {
      transform: "translateY(0)",
      duration: 1,
      ease: "power1.out",
      stagger: 0.1,
    });
    gsap.to(".img-our-principal", {
      bottom: "-55%",
      duration: 1,
      ease: "power1.out",
      opacity: 1,
      onComplete: () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: elemenRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
              anticipatePin: false,

              pin: true,
            },
          })
          .to(".img-our-principal", {
            bottom: "0",
            ease: "power1.out",
            duration: 1,

            onComplete: () => {
              setTlComplete(true);
              for (let i = 1; i <= 10; i++) {
                ScrollTrigger.create({
                  once: true,
                  trigger: `.principal-text-section-2-${i}`,

                  onEnter: () => {
                    gsap.from(`.principal-text-section-2-${i}`, {
                      transform: "translateY(100%)",
                      ease: "power1.out",
                      duration: 1,
                    });
                  },
                });
              }
            },
          });
      },
    });
  }, []);

  return (
    <div className="w-full min-h-svh bg-white-ivory ">
      <div>
        <div
          className="flex justify-center items-center w-full h-svh overflow-hidden"
          ref={elemenRef}
        >
          <div className="text-[15.625vw]  text-sunset-coral leading-[15.625vw] text-center font-seagull ">
            <div className="flex justify-center">
              <div className="overflow-hidden">
                <div className="translate-y-full our-principal-text">O</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-full our-principal-text">U</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-full our-principal-text">R</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="overflow-hidden">
                <div className="translate-y-full our-principal-text">P</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-full our-principal-text">R</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-full our-principal-text">I</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-full our-principal-text">N</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-full our-principal-text">C</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-full our-principal-text">I</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-full our-principal-text">P</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-full our-principal-text">A</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-full our-principal-text">L</div>
              </div>
            </div>
          </div>
          <div className=" absolute left-[50%] translate-x-[-50%]  bottom-[-65%] translate-y-[-50%]  w-[300px] img-our-principal ">
            <div className="relative flex justify-center">
              <div className="w-full h-[400px] bg-soft-tosca rounded-[50px] absolute bottom-0">
                {" "}
              </div>
              <img
                src="/assets/images/home/win-principal.png"
                alt=""
                className="z-10 relative w-full h-full right-0"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col gap-y-[106px]">
        <div className="font-helixa text-[48px] leading-[58px] text-[#5E5E5E]">
          <div className="overflow-hiddem">
            <div className="principal-text-section-2-1">
              “ Our school offers so much value, and it goes beyond simply
            </div>
          </div>
          <div className="overflow-hiddem">
            <div className="principal-text-section-2-2">
              providing access to top-notch learning resources; it also
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="principal-text-section-2-3">
              fosters a vibrant community where dreams come true, ideas
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="principal-text-section-2-4">
              flourish, and learning has no boundaries. “
            </div>
          </div>
        </div>
        <div className="font-helixa text-[20px] leading-[24px text-[#5E5E5E]">
          <div className="overflow-hidden">
            <div className="principal-text-section-2=5">
              To WINner families and those considering joining us, I eagerly
              await the opportunity to
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="principal-text-section-2-6">
              welcome you to our close-knit community. Together, we’ll nurture
              curious minds, celebrate
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="principal-text-section-2-7">
              diversity, and create memories that last a lifetime.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[35px] justify-center">
          <div className="oveflow-hidden">
            <div className="font-helixa text-[28px] text-[#5e5e5e] principal-text-section-2-8">
              Warm Regards,
            </div>
          </div>
          <div className="flex flex-col text-sunset-coral text-center ">
            <div className="overflow-hidden">
              <div className="font-seagull text-[48px] leading-[60px] principal-text-section-2-9">
                Imroatun Nafi'ah, S.Pd.
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="text-[26px] leading-[36px] principal-text-section-2-10">
                WIN Principal
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
