"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const BeforeFooterMobile = () => {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);

  useGSAP(
    () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        })
        .from(containerRef.current, {
          duration: 1,
          ease: "power1.out",
          "--r": `${windowWidth}px`,
          "--y": `${windowHeight}px`,
          "--x": "50%",
        });
    },
    { scope: containerRef }
  );

  return (
    <div className="bg-white-ivory z-10 relative after:rounded-bl-[30px] after:rounded-br-[30px] after:absolute after:bottom-0 after:left-0 after:bg-red after:h-[60px] after:w-full">
      <div
        className="w-full h-dvh bg-sunset-coral flex justify-center items-center flex-col clip-mask "
        ref={containerRef}
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
  );
};

export default BeforeFooterMobile;
6;
