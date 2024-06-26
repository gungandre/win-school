"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Section3 = ({ tlComplete }) => {
  const elemenRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  let getRatio = (el) =>
    window.innerHeight / (window.innerHeight + el.offsetHeight);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: elemenRef.current,

      onEnter: () => {
        gsap.to(elemenRef.current, {
          backgroundPosition: `50% ${
            -window.innerHeight * (1 - getRatio(elemenRef.current))
          }px`,
          ease: "power1.out",
          scrollTrigger: {
            trigger: elemenRef.current,
            start: "top bottom",
            end: "bottom top",

            scrub: true,
            invalidateOnRefresh: true, // to make it responsive
          },
        });
      },
    });
  }, [tlComplete]);

  return (
    <div
      className="w-full min-h-svh bg-white-ivory bg-cover  bg-no-repeat relative bg-top bg-img-our-team scale-200"
      style={{ backgroundImage: "url(/assets/images/our-principal/image.png)" }}
      ref={elemenRef}
    ></div>
  );
};

export default Section3;
