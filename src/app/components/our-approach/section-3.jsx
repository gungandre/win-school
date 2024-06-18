import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { useState } from "react";

const Section3 = ({ setRendered }) => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const [cardClick1, setCardClick1] = useState(false);

  const clickCard1 = () => {
    setCardClick1(!cardClick1);
  };

  useEffect(() => {
    if (cardClick1) {
      gsap.to(".card-container-1", {
        height: 329,
        background: "#5EBFB3",
        ease: "none",
        duration: 0.1,
      });

      gsap.to(".title-card", {
        color: "#FFFBF3",
        duration: 0.1,
        ease: "none",
      });

      gsap.to(".icon-button-1 svg", {
        rotate: 45,
        ease: "none",
        duration: 0.3,
      });

      gsap.to(".icon-button-1 svg path", {
        stroke: "#F96D49",
        ease: "none",
        duration: 0.3,
      });

      gsap.to(".icon-button-1 ", {
        background: "#FFFBF3",
        ease: "none",
        duration: 0.3,
      });
    } else {
      gsap.to(".card-container-1", {
        height: 129,
        background: "#EEE7D9",
        ease: "none",
        duration: 0.1,
      });

      gsap.to(".title-card", {
        color: "#404040",
        duration: 0.1,
        ease: "none",
      });

      gsap.to(".icon-button-1 svg", {
        rotate: 0,
        ease: "none",
        duration: 0.5,
      });

      gsap.to(".icon-button-1 svg path", {
        stroke: "white",
        ease: "none",
        duration: 0.3,
      });

      gsap.to(".icon-button-1 ", {
        background: "#F96D49",
        ease: "none",
        duration: 0.3,
      });
    }
  }, [cardClick1]);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".title-section-3",
      onEnter: () => {
        gsap.to(".title-section-3", {
          transform: "translateY(0)",
          lineHeight: "6.771vw",
          ease: "power1.out",
          duration: 1,
          stagger: 0.1,

          onComplete: () => {
            setRendered(true);
          },
        });
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacer: true,
        },
      })
      .to(
        ".title-section-3-container",
        {
          transform: "translateY(-100vh)",
          ease: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".text-animation",
        {
          transform: "translateY(70vh)",
          fontSize: "48px",
          ease: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".text-animation div div",
        {
          fontSize: "48px",
          lineHeight: "55px",
          ease: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".container-next-section",
        {
          transform: "translateY(0)",

          ease: "none",
          duration: 1,
        },
        "<"
      );
  }, []);

  return (
    <div
      className="min-h-dvh w-full bg-white-ivory section relative"
      ref={sectionRef}
    >
      <div className="w-full text-center text-[6.667vw] leading-[6.771vw] text-sunset-coral font-helixa title-section-3-container">
        <div className="overflow-hidden ">
          <div className="translate-y-full title-section-3 text-[6.667vw] leading-[6.771vw]">
            In Our Commitment to
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="translate-y-full title-section-3 text-[6.667vw] leading-[6.771vw] z-10">
            Offering Top-quality Education,
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="translate-y-full title-section-3 text-[6.667vw] leading-[6.771vw]">
            We Draw Inspiration From the
          </div>
        </div>
        <div className="text-animation">
          <div className="overflow-hidden">
            <div className="translate-y-full title-section-3 text-[6.667vw] leading-[6.771vw]">
              Cambridge Curriculum
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="translate-y-full title-section-3 text-[6.667vw] leading-[6.771vw]">
              Approach
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full top-0 translate-y-[100vh] container-next-section ">
        <div className="w-full h-dvh relative ">
          <div className="w-[455px] h-[129px] bg-[#EEE7D9] rounded-[50px] px-[50px] flex   absolute left-[3%] top-[15%] card-container-1  duration-500 transition-all overflow-hidden">
            <div className="w-full h-[129px] flex justify-between items-center">
              <div className="font-helixa text-[48px] font-bold  title-card text-[#404040]">
                {" "}
                Experience
              </div>
              <div
                className="w-[76px] h-[76px] rounded-full bg-sunset-coral text-[28px] flex justify-center items-center font-helixa text-white-ivory font-bold cursor-pointer z-10 icon-button-1"
                onClick={clickCard1}
              >
                <svg
                  className=""
                  width="29"
                  height="30"
                  viewBox="0 0 29 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 15H29" stroke="white" stroke-width="2" />
                  <path
                    d="M14.5 0.5L14.5 29.5"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full absolute left-0">
              <div className="relative w-full h-[329px] pb-[36px] flex justify-center items-end">
                <div className="  max-w-[335px] font-helixa leading-[24px] text-white-ivory">
                  Early years education should help children transition
                  successfully to primary school, moving from informal,
                  play-based learning to teaching that is more formal.
                </div>
              </div>
            </div>
          </div>

          <div className="w-[455px] h-[129px] bg-[#EEE7D9] rounded-[50px] px-[50px] flex  items-center justify-between absolute top-[33%] right-[46%]">
            <div className="font-helixa text-[48px] font-bold">Balance</div>
            <div className="w-[76px] h-[76px] rounded-full bg-sunset-coral text-[28px] flex justify-center items-center font-helixa text-white-ivory font-bold">
              <svg
                width="29"
                height="30"
                viewBox="0 0 29 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 15H29" stroke="white" stroke-width="2" />
                <path d="M14.5 0.5L14.5 29.5" stroke="white" stroke-width="2" />
              </svg>
            </div>
          </div>

          <div className="w-[455px] h-[129px] bg-[#EEE7D9] rounded-[50px] px-[50px] flex  items-center justify-between absolute top-[20%] right-[8%]">
            <div className="font-helixa text-[48px] font-bold"> Active</div>
            <div className="w-[76px] h-[76px] rounded-full bg-sunset-coral text-[28px] flex justify-center items-center font-helixa text-white-ivory font-bold">
              <svg
                width="29"
                height="30"
                viewBox="0 0 29 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 15H29" stroke="white" stroke-width="2" />
                <path d="M14.5 0.5L14.5 29.5" stroke="white" stroke-width="2" />
              </svg>
            </div>
          </div>

          <div className="w-[455px] h-[129px] bg-[#EEE7D9] rounded-[50px] px-[50px] flex  items-center justify-between absolute top-[60%] right-[20%]">
            <div className="font-helixa text-[48px] font-bold">Play</div>
            <div className="w-[76px] h-[76px] rounded-full bg-sunset-coral text-[28px] flex justify-center items-center font-helixa text-white-ivory font-bold ">
              <svg
                width="29"
                height="30"
                viewBox="0 0 29 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 15H29" stroke="white" stroke-width="2" />
                <path d="M14.5 0.5L14.5 29.5" stroke="white" stroke-width="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
