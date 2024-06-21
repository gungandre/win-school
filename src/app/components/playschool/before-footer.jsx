"use client";

import Button from "../button/Button";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const BeforeFooter = ({ tlComplete }) => {
  const elemenRef = useRef(null);
  const elemenRefMobile = useRef(null);

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
        .from(elemenRef.current, {
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

  useGSAP(
    () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      gsap
        .timeline({
          scrollTrigger: {
            trigger: elemenRefMobile.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        })
        .from(elemenRefMobile.current, {
          duration: 1,
          ease: "power1.out",
          "--r": `${windowWidth}px`,
          "--y": `${windowHeight}px`,
          "--x": "50%",
        });
    },
    { scope: elemenRefMobile }
  );

  return (
    <div>
      <div className="w-full h-dvh  relative  bg-white-ivory section z-[11] section max-sm:hidden block">
        <div
          ref={elemenRef}
          className="w-full h-dvh bg-sunset-coral clip-mask justify-center flex flex-col gap-y-[119px] relative bottom-0 circle-before-footer "
        >
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

      <div className="bg-white-ivory z-10 relative after:rounded-bl-[30px] after:rounded-br-[30px] after:absolute after:bottom-0 after:left-0 after:bg-red after:h-[60px] after:w-full max-sm:block hidden">
        <div
          className="w-full h-dvh bg-sunset-coral flex justify-center items-center flex-col clip-mask "
          ref={elemenRefMobile}
        >
          <div className="flex flex-col gap-y-[55px]">
            <div className="text-center font-helixa text-[60px] leading-[70px] text-white-ivory">
              Take the <br /> First Step <br /> for a Brighter <br /> Future
            </div>
            <div className="flex justify-center">
              <a
                href="https://wa.me/6281130910001"
                target="_blank"
                className="text-helixa text-[20px] px-[16px] py-[7px] rounded-[21px] text-white-ivory border-white-ivory border-[1px] "
              >
                Get Special Offer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeFooter;
