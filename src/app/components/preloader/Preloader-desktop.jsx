"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { preloaderContext } from "@/app/context/preloaderContext";
import { useContext } from "react";
import useScrollAndLenis from "../lenis/useScrollLenis";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import useMediaQuery from "@/app/utils/useMediaQuery";
import PreloaderMobile from "./Preloader-mobile";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

const PreloaderDesktop = () => {
  const [scroll, setScroll] = useState(false);
  const { preloaderComplete, setPreloaderComplete } =
    useContext(preloaderContext);
  const small = useMediaQuery("(max-width: 640px)");

  const container = useRef(null);

  const [stopScroll, setStopScroll] = useScrollAndLenis(true);

  useGSAP(() => {
    gsap.registerPlugin(SplitText);

    const splitTextChar1 = new SplitText(".win-school-text", {
      type: "chars",
    });
    const splitTextChar2 = new SplitText(".win-the-future-text", {
      type: "chars",
    });
    const tl = gsap.timeline({ paused: true });
    const tlImage = gsap.timeline({ paused: true });
    const tlLoadingPercent = gsap.timeline({ paused: true });
    const tlMenuNavbar = gsap.timeline({ paused: true });

    document.querySelector(".win-school-text").style.opacity = 1;
    document.querySelector(".win-the-future-text").style.opacity = 1;

    tlImage
      .to([".img-1", ".img-4"], {
        transform: "translateY(-300%)",
        duration: 0.6,
        ease: "power1.in",
      })
      .to(
        [".img-2", ".img-3"],
        {
          transform: "translateY(-250%)",
          duration: 0.4,
          ease: "power1.in",
        },
        "-=0.4"
      )
      .to(
        ".image-center-container",
        {
          transform: "translate(-50%, -150%)",

          duration: 0.5,
          ease: "power1.in",
        },
        "-=0.4"
      );

    tlLoadingPercent
      .to(".counter-3", {
        transform: "translateY(-96.8%)",
        duration: 3.5,
        ease: "power3.out",
      })
      .to(
        ".counter-2",
        {
          transform: "translateY(-96.8%)",
          duration: 2,
          ease: "power2.out",
        },
        "-=3"
      )
      .to(
        ".counter-1",
        {
          transform: "translateY(-50%)",
          duration: 1,
          ease: "power4.out",
        },
        "-=1.5"
      );

    tl.to(".loading-percent-1", {
      transform: "translateY(0)",
      duration: 0.5,
    })
      .to(
        ".loading-percent-2",
        {
          transform: "translateY(0)",
          duration: 0.5,
        },
        "-=0.4"
      )
      .fromTo(
        splitTextChar1.chars,
        {
          transform: "translateY(100%)",
          opacity: 0,
        },
        {
          transform: "translateY(0)",
          opacity: 0.5,
          duration: 1,
          stagger: 0.1,
        },
        "<"
      )
      .fromTo(
        splitTextChar2.chars,
        {
          transform: "translateY(100%)",
          opacity: 0,
        },
        {
          transform: "translateY(0)",
          opacity: 0.5,
          duration: 1,
          stagger: 0.1,
        },
        "<"
      )

      .to(".loading", {
        width: "100%",
        duration: 2,
        ease: "none",
        onStart: () => {
          tlLoadingPercent.play();
        },
      })
      .to(
        splitTextChar1.chars,
        {
          opacity: 1,
          color: "#F96D49",
          duration: 0.1,
          stagger: 0.03,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        splitTextChar2.chars,
        {
          opacity: 1,
          color: "#F96D49",
          duration: 0.3,
          stagger: 0.03,
          ease: "power2.inOut",
        },
        "-=0.6"
      )

      .fromTo(
        ".image-center-container",
        {
          clipPath: "inset(100% 0% 0% 0%)",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.5,
          ease: "power1.out",
        }
      )
      .to(
        ".image",
        {
          scale: 1,
        },
        "<"
      )
      .to(".img-1", {
        left: 0,
        transform: "translateX(0)",
        ease: "power1.out",
        visibility: "visible",
        duration: 0.7,
        delay: 0.5,
      })
      .to(
        ".img-2",
        {
          left: "17.5%",
          transform: "translateX(0)",
          ease: "power1.out",
          visibility: "visible",
          duration: 0.7,
        },
        "<"
      )
      .to(
        ".img-3",
        {
          right: "17.5%",
          transform: "translateX(0)",
          ease: "power1.out",
          visibility: "visible",
          duration: 0.7,
        },
        "<"
      )
      .to(
        ".img-4",
        {
          right: "0",
          transform: "translateX(0)",
          ease: "power1.out",
          visibility: "visible",
          duration: 0.7,
        },
        "<"
      )
      .to(".a", {
        clipPath: "inset(0% 0% 0% 0%)",
        delay: 0.5,
        duration: 1.2,
        ease: "power1.inOut",
        onStart: () => {
          tlImage.play();
        },
      })

      .to(".bg-tosca", {
        delay: 0.5,
        clipPath: "inset(0% 0% 0% 0%)",
      })
      .to(
        ".bg-yellow",
        {
          clipPath: "inset(0% 0% 0% 0%)",
        },
        "-=0.4"
      )
      .to(
        ".bg--white",
        {
          clipPath: "inset(0% 0% 0% 0%)",
        },
        "-=0.3"
      )
      .to(
        [".bg--white", ".bg-yellow", ".bg-tosca", ".a", ".preloader-container"],
        {
          duration: 0.5,
          clipPath: "inset(0% 0% 100% 0%)",
          onComplete: () => {
            tl.to(
              [
                ".bg--white",
                ".bg-yellow",
                ".bg-tosca",
                ".a",
                ".preloader-container",
              ],
              {
                display: "none",
              }
            );

            setScroll(true);
            setStopScroll(false);
            setPreloaderComplete(true);
            ScrollTrigger.refresh();
          },
        }
      );

    tl.play();
  }, {});
  return (
    <div
      className="preloader-container  bg-white-ivory top-0 w-full fixed h-dvh z-[500]  "
      ref={container}
    >
      <div className="relative w-full h-full px-15">
        <div className="w-full h-full relative ">
          <div className="flex w-full  items-center relative top-[40%] ">
            <div className="absolute left-[50%] translate-x-[-50%] img-1 invisible w-[278px] h-[185px] overflow-hidden rounded-[50px]">
              <img
                src={"/assets/images/preloader/img_1.png"}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-[50%] translate-x-[-50%] z-10 img-2 invisible w-[340px] h-[283px] overflow-hidden rounded-[50px]">
              <img
                src={"/assets/images/preloader/img_2.png"}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute image-center-container left-[50%] translate-x-[-50%] overflow-hidden z-50 w-[438px] h-[381px]  rounded-[50px]"
              style={{ clipPath: "inset(100% 0% 0% 0%)" }}
            >
              <img
                src={"/assets/images/preloader/img_3.png"}
                alt="logo"
                className="scale-125 image w-full h-full object-cover"
              />
            </div>

            <div className="absolute right-[50%] translate-x-[50%] z-10 img-3 invisible w-[340px] h-[283px] overflow-hidden rounded-[50px]">
              <img
                src={"/assets/images/preloader/img_4.png"}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute right-[50%] translate-x-[50%] img-4 invisible w-[278px] h-[185px] overflow-hidden rounded-[50px]">
              <img
                src={"/assets/images/preloader/img_5.png"}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-[16px] w-full absolute  bottom-[55px]">
            <div className="flex justify-between">
              <div className="overflow-hidden">
                <span className="font-seagull text-[40px] text-moonstone-gray  win-school-text opacity-0">
                  WIN SCHOOL
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="font-seagull text-[40px] text-moonstone-gray  win-the-future-text opacity-0">
                  WIN THE FUTURE
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="h-[3px] w-full bg-sunset-coral absolute opacity-25"></div>
              <div className="h-[3px] w-0 bg-sunset-coral absolute loading w"></div>
            </div>
            <div className="flex flex-row-reverse">
              <div className="font-seagull text-[40px] text-sunset-coral overflow-hidden flex">
                <div className="flex">
                  <div className="overflow-hidden h-[45px] ">
                    <div className="counter-1 translate-y-[100%]">
                      <div>0</div>
                      <div className="text-end">1</div>
                    </div>
                  </div>
                  <div className="overflow-hidden h-[45px]">
                    <div className="counter-2 translate-y-[1.6%]">
                      <div>0</div>
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                      <div>8</div>
                      <div>9</div>
                      <div>0</div>
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                      <div>8</div>
                      <div>9</div>
                      <div>0</div>
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                      <div>8</div>
                      <div>9</div>
                      <div>0</div>
                    </div>
                  </div>
                  <div className="overflow-hidden h-[45px]">
                    <div className="counter-3 loading-percent-1 translate-y-[4%]">
                      <div>0</div>
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                      <div>8</div>
                      <div>9</div>
                      <div>0</div>
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                      <div>8</div>
                      <div>9</div>
                      <div>0</div>
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                      <div>8</div>
                      <div>9</div>
                      <div>0</div>
                    </div>
                  </div>
                </div>
                {/* <div className="loading-percent-1 translate-y-[100%]">0</div> */}
                <div className="loading-percent-2 translate-y-[100%]">%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-full absolute bottom-0 z-[501]  flex items-center justify-center bg-sunset-coral a"
        style={{ clipPath: "inset(86% 0% 14% 0% )" }}
      >
        <Image
          src={"/assets/images/logo2.svg"}
          width={357}
          height={110}
          alt="logo"
        />
      </div>
      <div
        className="w-full h-full z-[502] bg-soft-tosca absolute top-0 bg-tosca"
        style={{ clipPath: "inset(100% 0% 0% 0%)" }}
      ></div>
      <div
        className="w-full h-full z-[502] bg-[#FFC127] absolute top-0 bg-yellow"
        style={{ clipPath: "inset(100% 0% 0% 0%)" }}
      ></div>
      <div
        className="w-full h-full z-[502] bg-[#FFFBF3] absolute top-0 bg--white"
        style={{ clipPath: "inset(100% 0% 0% 0%)" }}
      ></div>
    </div>
  );
};

export default PreloaderDesktop;
