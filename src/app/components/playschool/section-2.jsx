"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Section2 = ({ setTlComplete }) => {
  const elemenRef = useRef(null);
  const elemenRefMobile = useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: elemenRef.current,
            start: "top top",
            end: "+=2000",
            scrub: true,
            pin: true,
            pinSpacer: true,
          },
        })
        .to(".text-scroll", {
          transform: "translateX(-100%)",
          onComplete: () => {
            setTlComplete(true);
            ScrollTrigger.refresh();
          },
        });
    },
    { scope: elemenRef }
  );

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".daycare-mobile",
        onEnter: () => {
          gsap.to(".daycare-mobile", {
            transform: "translateX(0)",
            duration: 1,
            ease: "power1.out",
            stagger: 0.1,
          });
        },
      });
    },
    { scope: elemenRefMobile }
  );

  return (
    <>
      <div
        className="h-dvh  w-full flex justify-center items-center bg-white-ivory section max-sm:hidden"
        ref={elemenRef}
      >
        <div className="font-helixa text-[13.333vw] text-sunset-coral text-nowrap translate-x-[100%] text-scroll">
          Playschool Classes
        </div>
      </div>
      <div
        className="max-sm:flex hidden w-full py-[160px] justify-center text-[80px] text-sunset-coral font-helixa leading-[90px]"
        ref={elemenRefMobile}
      >
        <div className="max-sm:block hidden" ref={elemenRefMobile}>
          <div className="daycare-mobile translate-x-[100vw] text-center">
            Playschool
          </div>
          <div className="daycare-mobile translate-x-[100vw] text-center">
            Classes
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
