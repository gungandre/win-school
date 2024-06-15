"use client";

import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Hero = ({ setTlComplete }) => {
  const elemenRef = useRef(null);
  const videoRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".text-our-facilities", {
      transform: "translateY(0)",
      duration: 1,

      ease: "power1.out",
      stagger: 0.1,
    });

    gsap.to(".video-our-facilities", {
      top: "120%",
      opacity: 1,
      duration: 1,
      ease: "power1.out",
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
          .to(".video-our-facilities", {
            top: "50%",
            duration: 1,
            width: 1270,
            height: 715,
            ease: "power1.out",
            onComplete: () => {
              videoRef.current.play();
              setTlComplete(true);
            },
          });
        setTlComplete(true);
      },
    });
  }, []);

  return (
    <div
      className="w-full h-dvh flex justify-center items-center relative overflow-hidden bg-white-ivory"
      ref={elemenRef}
    >
      <div className="font-seagull text-[300px] leading-[300px] text-sunset-coral flex flex-col items-center">
        <div className="flex">
          <div className="overflow-hidden">
            <div className="text-our-facilities translate-y-full">O</div>
          </div>
          <div className="overflow-hidden">
            <div className="text-our-facilities translate-y-full">U</div>
          </div>
          <div className="overflow-hidden">
            <div className="text-our-facilities translate-y-full">R</div>
          </div>
        </div>
        <div className="flex">
          <div className="overflow-hidden">
            <div className="text-our-facilities translate-y-full">F</div>
          </div>
          <div className="overflow-hidden">
            <div className="text-our-facilities translate-y-full">A</div>
          </div>
          <div className="overflow-hidden">
            <div className="text-our-facilities translate-y-full">C</div>
          </div>
          <div className="overflow-hidden">
            <div className="text-our-facilities translate-y-full">I</div>
          </div>
          <div className="overflow-hidden">
            <div className="text-our-facilities translate-y-full">L</div>
          </div>
          <div className="overflow-hidden">
            <div className="text-our-facilities translate-y-full">I</div>
          </div>
          <div className="overflow-hidden">
            <div className="text-our-facilities translate-y-full">T</div>
          </div>
          <div className="overflow-hidden">
            <div className="text-our-facilities translate-y-full">I</div>
          </div>
          <div className="overflow-hidden">
            <div className="text-our-facilities translate-y-full">E</div>
          </div>
          <div className="overflow-hidden">
            <div className="text-our-facilities translate-y-full">S</div>
          </div>
        </div>
      </div>
      <div className="absolute w-[776px] h-[438px] rounded-[50px] top-[130%] translate-y-[-50%] video-our-facilities opacity-0">
        <video
          muted
          className="rounded-[50px] cursor-none w-full h-full"
          loop={true}
          ref={videoRef}
        >
          <source
            src="/assets/images/home/WIN SCHOOL SLIDE.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </div>
  );
};

export default Hero;
