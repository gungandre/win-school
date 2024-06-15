"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

const Hero = ({ setTlComplete }) => {
  const elemenRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".text-our-vision", {
      transform: "translateY(0)",
      ease: "power1.out",
      duration: 1,
      stagger: 0.1,
    });
    gsap.to(".img-hero-container", {
      transform: "translateY(60vh)",
      opacity: 1,
      ease: "power1.out",
      duration: 1,
      onComplete: () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: elemenRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,

              pin: true,
            },
          })
          .to(".img-hero-container", {
            transform: "translate(0)",
            width: 1274,
            height: 715,
            ease: "power1.out",
            duration: 1,
            onComplete: () => {
              setTlComplete(true);
            },
          });
      },
    });
  }, []);

  return (
    <div
      className="w-full min-h-dvh bg-white-ivory pb-[180px] overflow-hidden section"
      ref={elemenRef}
    >
      <div>
        <div className="flex justify-center items-center w-full h-dvh overflow-hidden relative ">
          <div className="text-[15.625vw]  text-sunset-coral leading-[15.625vw] text-center font-seagull ">
            <div className="flex justify-center">
              <span className="overflow-hidden">
                <div className="translate-y-[100%] text-our-vision">O</div>
              </span>
              <span className="overflow-hidden">
                <div className="translate-y-[100%] text-our-vision">U</div>
              </span>
              <span className="overflow-hidden">
                <div className="translate-y-[100%] text-our-vision">R</div>
              </span>
            </div>
            <div className="flex justify-center">
              <span className="overflow-hidden">
                <div className="translate-y-[100%] text-our-vision">F</div>
              </span>
              <span className="overflow-hidden">
                <div className="translate-y-[100%] text-our-vision">E</div>
              </span>
              <span className="overflow-hidden">
                <div className="translate-y-[100%] text-our-vision">A</div>
              </span>
              <span className="overflow-hidden">
                <div className="translate-y-[100%] text-our-vision">T</div>
              </span>
              <span className="overflow-hidden">
                <div className="translate-y-[100%] text-our-vision">U</div>
              </span>
              <span className="overflow-hidden">
                <div className="translate-y-[100%] text-our-vision">R</div>
              </span>
              <span className="overflow-hidden">
                <div className="translate-y-[100%] text-our-vision">E</div>
              </span>
              <span className="overflow-hidden">
                <div className="translate-y-[100%] text-our-vision">S</div>
              </span>
            </div>
          </div>

          <div className="absolute flex justify-center w-[780px] h-[438px]  rounded-[50px] overflow-hidden img-hero-container translate-y-[80vh] opacity-0">
            <img
              src="/assets/images/vision and mission/hero.png"
              alt=""
              className=" w-full h-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
