"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Section2 = () => {
  const elemenRef = useRef(null);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: elemenRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacer: true,
        },
      })
      .to(".text-scroll", {
        transform: "translateX(-100%)",
      });

    ScrollTrigger.refresh();
  });

  return (
    <div
      className="h-dvh  w-full flex justify-center items-center bg-white-ivory section"
      ref={elemenRef}
    >
      <div className="font-helixa text-[13.333vw] text-sunset-coral text-nowrap translate-x-[100%] text-scroll">
        Daycare Activities
      </div>
    </div>
  );
};

export default Section2;
