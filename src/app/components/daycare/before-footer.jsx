"use client";

import Button from "../button/Button";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import BeforeFooterMobile from "../homepage/before-footer-mobile";

const BeforeFooter = ({ tlComplete }) => {
  const elemenRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      gsap
        .timeline({
          scrollTrigger: {
            trigger: elemenRef.current,
            start: "top bottom",
            end: "bottom top",

            scrub: true,
            pinSpacing: true,
          },
        })
        .from(".circle-before-footer", {
          duration: 1,
          ease: "power1.out",
          "--r": `${windowWidth}px`,
          "--y": `${windowHeight}px`,
          "--x": "50%",
        })
        .to(
          ".take-the-first-step",
          {
            opacity: 1,
            transform: "translateY(0)",
            ease: "power1.out",
            duration: 1,
            stagger: 0.1,
          },
          "<"
        )
        .to(
          ".get-special-offer-button",
          {
            opacity: 1,
            transform: "translateY(0)",
            ease: "power1.out",
            duration: 1,
          },
          "<"
        )
        .to(".container-section-4", {
          backgroundColor: "transparent",
          duration: 1,
        });
    },
    { scope: elemenRef, dependencies: [tlComplete] }
  );

  return (
    <>
      <div
        className="w-full h-dvh  relative  bg-white-ivory section z-[11] max-sm:hidden block"
        ref={elemenRef}
      >
        <div className="w-full h-dvh bg-sunset-coral clip-mask justify-center flex flex-col gap-y-[119px] relative bottom-0 circle-before-footer ">
          <div className="flex flex-col w-full">
            <div className="text-center font-helixa text-[9.01vw] leading-[9.167vw] text-white-ivory">
              <div className="take-the-first-step  translate-y-full">
                Take the First Step
              </div>{" "}
              <div className="take-the-first-step  translate-y-full">
                for a Brighter Future
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center get-special-offer-button opacity-0 translate-y-[200%]">
            {" "}
            <Button
              buttonType={"a"}
              link={"https://wa.me/6281130910001"}
              name={"Get a Special Offer"}
              arrow={null}
              color={"#FFFBF3"}
              fontSize={38}
              hoverColor={"#FFFBF3"}
              hoverType={2}
              textHover={"#F96D49"}
            />
          </div>
        </div>
      </div>
      <div className="max-sm:block hidden">
        <BeforeFooterMobile />
      </div>
    </>
  );
};

export default BeforeFooter;
