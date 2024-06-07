"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger, SplitText);

  useGSAP(() => {
    // playschool title
    gsap.to(".playschool", {
      transform: "translateY(0)",
      duration: 1,
      ease: "power1.out",
      stagger: 0.1, // Tanda titik digunakan di sini untuk memisahkan properti stagger
    });

    // hero image paralax
    let getRatio = (el) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      })
      .to(".hero-image", {
        backgroundPosition: `50% ${
          -window.innerHeight * (1 - getRatio(containerRef.current))
        }px`,
      });

    gsap.to(".el-top-img", {
      opacity: 1,
      duration: 1,
    });

    gsap.to(".hero-image", {
      transform: "translateY(0)",
      opacity: 1,
      duration: 1,
    });

    ScrollTrigger.create({
      trigger: ".we-provide",

      onEnter: () => {
        gsap.to(".we-provide", {
          opacity: 1,
          transform: "translateY(0)",
          duration: 1,
        });
      },
    });

    const aboveAllSplit = new SplitText(".above-all", { type: "lines" });

    ScrollTrigger.create({
      trigger: ".above-all",
      onEnter: () => {
        gsap.fromTo(
          aboveAllSplit.lines,
          {
            transform: "translateY(100%)",
            opacity: 0,
          },
          {
            opacity: 1,
            transform: "translateY(0)",
            duration: 1,
            stagger: 0.1,
          }
        );
      },
    });

    const ourDaycareSplit = new SplitText(".our-daycare", { type: "lines" });

    gsap.fromTo(
      ourDaycareSplit.lines,
      {
        transform: "translateY(100%)",
        opacity: 0,
      },
      {
        opacity: 1,
        transform: "translateY(0)",
        duration: 1,
        stagger: 0.1,
      }
    );
  });

  const arrowClick = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const arrowHover = () => {
    gsap.to(".arrow-svg", {
      transform: "translateY(200%)",
      opacity: 1,
      duration: 0.5,
      onComplete: () => {
        gsap.fromTo(
          ".arrow-svg",
          {
            transform: "translateY(-200%)",
          },
          {
            transform: "translateY(0)",

            duration: 0.5,
          }
        );
      },
    });
  };

  return (
    <div
      className="min-h-dvh w-full flex flex-col px-15 relative bg-white-ivory section"
      ref={containerRef}
    >
      <div className="text-sunset-coral text-[11.979vw] font-seagull text-center mt-[80px] playschool flex justify-center">
        <div className="overflow-hidden">
          <div className="text-sunset-coral text-[11.979vw] translate-y-full playschool">
            D
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="text-sunset-coral text-[11.979vw] translate-y-full playschool">
            A
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="text-sunset-coral text-[11.979vw] translate-y-full playschool">
            Y
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="text-sunset-coral text-[11.979vw] translate-y-full playschool">
            C
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="text-sunset-coral text-[11.979vw] translate-y-full playschool">
            A
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="text-sunset-coral text-[11.979vw] translate-y-full playschool">
            R
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="text-sunset-coral text-[11.979vw] translate-y-full playschool">
            E
          </div>
        </div>
      </div>
      <div className="mt-[250px] relative">
        <div className="w-[450px] h-[309px] bg-soft-tosca rounded-[50px] absolute right-[14%] -translate-y-1/2 el-top-img opacity-0 z-10">
          <div className="relative w-full h-full">
            <div className="w-[294px] font-helixa text-[25px] leading-[35px] text-white-ivory pt-[38px] pl-[48px] font-bold our-daycare">
              Our daycare program focusing on child individual needs and
              encouraging their natural curiosity and love for learning.
            </div>
            <button
              className="absolute w-[76px] h-[76px] bg-dark-tosca rounded-full right-[5%] bottom-[7%] overflow-hidden flex justify-center items-center "
              onMouseEnter={arrowHover}
              onClick={arrowClick}
            >
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-svg"
              >
                <path
                  d="M14.9985 0.857867L14.9985 29.1421M14.9985 29.1421L29.1406 15M14.9985 29.1421L0.856355 15"
                  stroke="#FFFBF3"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className="w-full h-[514px] overflow-hidden rounded-[50px]  hero-image bg-no-repeat translate-y-full opacity-0"
          style={{
            backgroundImage: "url('/assets/images/playschool/image-hero.png')",
          }}
        >
          {/* <img
            src="/assets/images/playschool/image-hero.png"
            alt="hero"
            className="w-full object-cover h-full object-top hero-image"
          /> */}
        </div>
      </div>
      <div className="w-full mt-[132px] mb-[132px]" ref={sectionRef}>
        <div className="font-helixa text-sunset-coral text-[6.667vw] leading-[6.771vw] text-center">
          <div className="we-provide translate-y-full opacity-0">
            {" "}
            We provide a secure and{" "}
          </div>

          <div className="we-provide translate-y-full opacity-0">
            {" "}
            nurturing environment.
          </div>
        </div>
        <div className="w-full flex justify-end mt-[56px]">
          <div className="max-w-[440px] font-helixa text-xl text-[#5E5E5E] mr-[90px] above-all">
            Daycare program offers a safe and nurturing environment with
            experienced staff dedicated to a comprehensive curriculum and
            engaging activities. We ensure healthy meals, flexible enrollment
            options, and maintain regular communication with parents to support
            each child's growth and development.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
