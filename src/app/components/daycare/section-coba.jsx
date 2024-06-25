import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SectionCoba = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".test",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    });
  });

  return <div className="w-full h-svh test">SectionCoba</div>;
};

export default SectionCoba;
