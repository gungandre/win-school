"use client";

import Image from "next/image";
import Header from "./components/header/Header";
import Button from "./components/button/Button";
import Footer from "./components/footer/Footer";
import Preloader from "./components/preloader/Preloader";
import useNavColor from "./hook/useNavColor";
import { Cursor } from "./components/cursor/Cursor";
import { useState, useRef, useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

export default function Home() {
  gsap.registerPlugin(SplitText);
  const [disableButtonRight, setDisableButtonRight] = useState(false);
  const [disableButtonLeft, setDisableButtonLeft] = useState(true);
  const [navbarAnimationPlay, setNavbarAnimationPlay] = useState(false);

  const [cursorText, setCursorText] = useState(null);
  const [videoPause, setVideoPause] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const videoRef = useRef(null);
  const cursorRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    cursorRef.current.style.translateX = "-50%";
    cursorRef.current.style.translateY = "-50%";
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        top: `${e.pageY}px`,
        left: `${e.pageX}px`,

        duration: 0.5,
      });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useGSAP(() => {
    const weAreLeading = new SplitText(".we-are-leading", { type: "lines" });

    ScrollTrigger.create({
      trigger: ".section-we-are-leading",

      onEnter: () => {
        console.log("enter");
        gsap.fromTo(
          weAreLeading.lines,
          {
            y: "100%",
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            delay: 0.5,
            ease: "power1.out",
            stagger: 0.1,
            duration: 1,
          }
        );

        gsap.fromTo(
          ".img-we-are-leading",
          {
            scale: 1.5,
          },
          {
            scale: 1,
            delay: 0.5,
            ease: "power1.out",
            duration: 1,
          }
        );
      },
      toggleActions: "play none none none",
      once: true,
    });

    ScrollTrigger.create({
      trigger: ".content-register-1",

      onEnter: () => {
        gsap.fromTo(
          ".content-register-1",
          {
            y: "100%",
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            delay: 0.5,
            ease: "power1.out",
            duration: 1,
          }
        );
      },
      toggleActions: "play none none none",
      once: true,
    });

    ScrollTrigger.create({
      trigger: ".content-register-2",

      onEnter: () => {
        gsap.fromTo(
          ".content-register-2",
          {
            y: "100%",
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            delay: 0.5,
            ease: "power1.out",
            duration: 1,
          }
        );
      },
      toggleActions: "play none none none",
      once: true,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-the-biggest",
          start: "top-=500 center",
          end: "center center",

          scrub: true,
        },
      })
      .to(".section-the-biggest", {
        transform: "translateX(0)",

        ease: "none",
        duration: 5,

        onComplete: () => {
          gsap.fromTo(
            ".button-section-we-are-leading",
            {
              transform: "translateY(100%)",
              opacity: 0,
            },
            {
              transform: "translateY(0)",
              opacity: 1,
              duration: 1,
              ease: "power1.out",
            }
          );
        },
      });

    ScrollTrigger.create({
      trigger: ".text-we-provide",

      onEnter: () => {
        gsap.fromTo(
          ".text-we-provide",
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.out",
          }
        );

        gsap.fromTo(
          ".text-explore",
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.out",
          }
        );
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-video",
          start: "top center",
          end: "bottom center",
        },
      })
      .to(".video-container", {
        width: 1200,
        height: 676,

        ease: "power2.out",
        duration: 1,
        onStart: () => {
          if (videoRef.current) {
            console.log(videoRef.current);
            videoRef.current.play().catch((error) => {
              // Tangani kesalahan jika autoplay tidak berhasil
              console.log(videoRef.current);
              console.error("Autoplay failed:", error);
            });
          }
        },
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-winner-classes",
          start: "top top",
          end: "+=2000",

          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      })
      .to(".winner-classes", {
        transform: "translateX(-100%)",
        ease: "power1.out",
      })
      .to(
        ".section-class",
        {
          transform: "translateX(0)",
          ease: "power1.out",
        },
        "-=0.3"
      );

    const wText = document.getElementById("w-text");
    const iText = document.getElementById("i-text");
    const nText = document.getElementById("n-text");
    const sText = document.getElementById("s-text");
    const cText = document.getElementById("c-text");
    const hText = document.getElementById("h-text");
    const oText1 = document.getElementById("o-text");
    const oText2 = document.getElementById("o-text_2");
    const lText = document.getElementById("l-text");

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const tlRegister = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section-register-2",
          start: "top top",
          end: "+=4000",
          // anticipatePin: 1,
          scrub: true,
          pin: true,
        },
      })
      .from(".would-register", {
        opacity: 0,
        y: 100,

        ease: "power1.out",
        once: true,
      })
      .from(".grid-register", {
        opacity: 0,
        y: 100,

        ease: "power1.out",
        once: true,
      })
      .to(".would-register", {
        opacity: 0,
        y: -500,

        ease: "power1.out",
        once: true,
      })
      .to(
        ".grid-register",
        {
          opacity: 0,
          y: -500,

          ease: "power1.out",
          once: true,
        },
        "<"
      )
      .from(
        ".section-before-footer",

        {
          delay: 0.5,
          duration: 1,
          ease: "power1.out",
          "--r": `${windowWidth}px`,
          "--y": `${windowHeight}px`,
          "--x": "50%",
        },
        "-=1"
      )
      .from(
        ".text-under-before-footer",
        {
          y: 100,
          stagger: 0.05,
        },
        "<"
      )

      .to(
        ".text-before-footer",

        {
          transform: "translateY(-100%)",
          ease: "power1.out",
        }
      )
      .from(
        ".img-container-before-footer",
        {
          transform: "translateX(100%)",
          ease: "power1.out",
        },
        "<"
      )
      .to(".text-before-footer", {
        fontSize: 173,
        lineHeight: "176px",
        transform: "translateY(-50%)",
      })
      .to(
        ".section-before-footer",
        {
          backgroundColor: "#F96D49",
        },
        "<"
      )
      .to(
        ".img-container-before-footer",
        {
          transform: "translateX(-100%)",
          ease: "power1.out",
        },
        "<"
      )
      .to(
        ".button-register",
        {
          opacity: 1,
          transform: "translateX(0)",
        },
        "<"
      );

    // section swiper
    ScrollTrigger.create({
      trigger: ".section-swiper",
      onEnter: () => {
        const prevNameEl = document.querySelectorAll(
          ".name .overflow-hidden div"
        );

        const prevProfesionEl = document.querySelectorAll(
          ".profesion .overflow-hidden div"
        );

        const prevQuotesEl = document.querySelectorAll(
          ".quotes .overflow-hidden div"
        );

        const prevPetikEl = document.querySelectorAll(
          ".petik-dua .overflow-hidden div"
        );
        gsap.fromTo(
          prevNameEl,
          {
            y: "100%",
          },
          {
            y: 0,
            duration: 1,
            ease: "none",
          }
        );

        gsap.fromTo(
          prevProfesionEl,
          {
            y: "100%",
          },
          {
            y: 0,
            duration: 1,
            ease: "none",
          }
        );

        gsap.fromTo(
          prevQuotesEl,
          {
            y: "100%",
          },
          {
            y: 0,
            duration: 1,
            ease: "none",
          }
        );

        gsap.fromTo(
          prevPetikEl,
          {
            y: "100%",
          },
          {
            y: 0,
            duration: 1,
            ease: "none",
          }
        );

        gsap.fromTo(
          document.querySelectorAll(".swiper-image-container"),
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          }
        );
      },
    });

    ScrollTrigger.create({
      trigger: ".section-after-video",
      onEnter: () => {
        gsap.fromTo(
          ".card-building",
          {
            transform: "translateY(100%)",
            opacity: 0,
          },
          {
            transform: "translateY(0)",
            opacity: 1,
            duration: 1,
            stagger: 0.05,
            ease: "power1.out",
          }
        );
      },
    });

    ScrollTrigger.create({
      trigger: ".card-daycare",
      onEnter: () => {
        gsap.to(
          ".card-daycare",

          {
            transform: "translateY(0)",
            opacity: 1,
            duration: 1,
            stagger: 0.05,
            ease: "power1.out",
          }
        );
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".footer",
          start: "top top",
          end: "bottom top",

          scrub: true,
        },
      })
      .to(".footer", {
        transform: "translateY(0)",
        duration: 10,
        ease: "none",
      });

    ScrollTrigger.create({
      trigger: ".footer",
      scrub: true,

      start: "center center",
      end: "+=1000",

      onEnter: () => {
        gsap.fromTo(
          [wText, iText, nText, sText, cText, hText, oText1, oText2, lText],
          {
            y: "150%",
          },
          {
            y: 0,
            stagger: 0.1,
          }
        );
      },
    });

    ScrollTrigger.create({
      trigger: ".footer",
      scrub: true,

      start: "bottom center",
      end: "bottom",

      onLeaveBack: () => {
        console.log("leave");
        gsap.fromTo(
          [wText, iText, nText, sText, cText, hText, oText1, oText2, lText],
          {
            y: 0,
          },
          {
            y: "150%",
            stagger: 0.1,
          }
        );
      },
    });
  }, []);

  const cursorHover = (text) => {
    setCursorText(text);
    gsap.to(cursorRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
    });
  };

  const cursorLeave = () => {
    gsap.to(cursorRef.current, {
      opacity: 0,
      scale: 0,
      duration: 0.5,
    });
  };

  const navColorArray = [
    "#19918E",
    "#FFFBF3",
    "#19918E",
    "#19918E",
    "#19918E",
    "#19918E",
    "#19918E",
    "#19918E",
    "#19918E",
    "#19918E",
    "#FFFBF3",
  ];
  const { navbarColor } = useNavColor(navColorArray, ".section");

  const swiperInit = (swiper) => {
    swiper.slides.forEach((el) => {
      const nameSplit = new SplitText(el.querySelector(".name"), {
        type: "lines",
      });

      const profesionSplit = new SplitText(el.querySelector(".profesion"), {
        type: "lines",
      });

      const quotesSplit = new SplitText(el.querySelector(".quotes"), {
        type: "lines",
      });

      const petikDuaSplit = new SplitText(
        el.querySelector(".petik-dua", {
          type: "lines",
        })
      );

      nameSplit.lines.forEach((line) => {
        const div = document.createElement("div");
        div.classList.add("overflow-hidden");
        div.appendChild(line);
        el.querySelector(".name").appendChild(div);
      });

      profesionSplit.lines.forEach((line) => {
        const div = document.createElement("div");
        div.classList.add("overflow-hidden");
        div.classList.add("font-helixa");
        div.classList.add("text-white-ivory");
        div.classList.add("text-[28px]");
        div.appendChild(line);
        el.querySelector(".profesion").appendChild(div);
      });

      petikDuaSplit.lines.forEach((line) => {
        const div = document.createElement("div");
        div.classList.add("overflow-hidden");

        div.appendChild(line);
        el.querySelector(".petik-dua").appendChild(div);
      });

      quotesSplit.lines.forEach((line) => {
        const div = document.createElement("div");
        div.classList.add("overflow-hidden");
        div.appendChild(line);
        el.querySelector(".quotes").appendChild(div);
      });
    });
  };

  if (navbarAnimationPlay) {
    gsap.to(".leaders", {
      y: 0,
      duration: 0.5,
      stagger: 0.1,
    });

    gsap.to(".school", {
      y: 0,
      duration: 0.5,
      stagger: 0.03,
    });

    gsap.to(".animation-image", {
      y: 0,
      duration: 0.5,
      stagger: 0.1,
    });
    gsap.to([".hero-1", ".hero-2"], {
      y: 0,
      duration: 1,
    });
  }

  const videoPlayback = () => {
    if (!videoPause) {
      videoRef.current.pause();
      setVideoPause(!videoPause);
    } else {
      videoRef.current.play();
      setVideoPause(!videoPause);
    }
  };

  const swiperSlideChange = (swiper) => {
    console.log(swiper.slides.length - 1, swiper.activeIndex);

    if (swiper.activeIndex === 1) {
      console.log("testing");
      setDisableButtonRight(true);
    } else {
      setDisableButtonRight(false);
    }
    if (swiper.activeIndex === 0) {
      console.log("testing2");
      setDisableButtonLeft(true);
    } else {
      setDisableButtonLeft(false);
    }
  };

  return (
    <div className="relative">
      <Cursor
        cursorRef={cursorRef}
        videoPause={videoPause}
        cursorText={cursorText}
      />
      <Preloader setNavbarAnimationPlay={setNavbarAnimationPlay} />
      <Header
        navbarAnimationPlay={navbarAnimationPlay}
        navbarColor={navbarColor}
      />

      {/* hero section */}
      <section className="h-dvh bg-white-ivory relative section overflow-hidden">
        <h1 className="sr-only">SCHOOL OF FUTURE LEADERS</h1>
        <div className="px-15 sm:pt-32">
          <div className="flex flex-col gap-y-5">
            <div>
              <div
                className="font-seagull text-[102px] text-sunset-coral flex
              "
              >
                <div className="overflow-hidden">
                  <div className="school  translate-y-[100%]">S</div>
                </div>
                <div className="overflow-hidden">
                  <div className="school translate-y-[100%]">C</div>
                </div>
                <div className="overflow-hidden">
                  <div className="school translate-y-[100%]">H</div>
                </div>
                <div className="overflow-hidden">
                  <div className="school translate-y-[100%]">O</div>
                </div>
                <div className="overflow-hidden">
                  <div className="school translate-y-[100%]">O</div>
                </div>
                <div className="overflow-hidden">
                  <div className="school translate-y-[100%]">L</div>
                </div>
                &nbsp;
                <div className="overflow-hidden">
                  <div className="school translate-y-[100%]">O</div>
                </div>
                <div className="overflow-hidden">
                  <div className="school translate-y-[100%]">F</div>
                </div>
                &nbsp;
                <div className="overflow-hidden">
                  <div className="school translate-y-[100%]">F</div>
                </div>
                <div className="overflow-hidden">
                  <div className="school translate-y-[100%]">U</div>
                </div>
                <div className="overflow-hidden">
                  <div className="school translate-y-[100%]">T</div>
                </div>
                <div className="overflow-hidden">
                  <div className="school translate-y-[100%]">U</div>
                </div>
                <div className="overflow-hidden">
                  <div className="school translate-y-[100%]">R</div>
                </div>
                <div className="overflow-hidden">
                  <div className="school translate-y-[100%]">E</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="font-seagull text-[450px]  text-sunset-coral flex">
              <div className="overflow-hidden">
                <div className="translate-y-[100%] leaders leading-[350px]">
                  L
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-[100%] leaders leading-[350px]">
                  E
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-[100%] leaders leading-[350px]">
                  A
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-[100%] leaders leading-[350px]">
                  D
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-[100%] leaders leading-[350px]">
                  E
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-[100%] leaders leading-[350px]">
                  R
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-[100%] leaders leading-[350px]">
                  S
                </div>
              </div>
            </div>
          </div>
          <div className="sm:mt-32 flex justify-center">
            <div className="flex w-[915px] items-center justify-between   ">
              <div className="overflow-hidden">
                <div className=" gap-6 translate-y-[100%] animation-image bg-[#EEE7D9] w-[167px] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[20px]">
                  Experience
                </div>
              </div>
              <div className="overflow-hidden">
                <div className=" gap-6 translate-y-[100%] animation-image bg-[#EEE7D9] w-[167px] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[20px]">
                  Active
                </div>
              </div>
              <div className="overflow-hidden">
                <div className=" gap-6 translate-y-[100%] animation-image bg-[#EEE7D9] w-[167px] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[20px]">
                  Balance
                </div>
              </div>
              <div className="overflow-hidden">
                <div className=" gap-6 translate-y-[100%] animation-image bg-[#EEE7D9] w-[167px] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[20px]">
                  Play
                </div>
              </div>
              <div className="overflow-hidden">
                <div className=" gap-6 translate-y-[100%] animation-image bg-[#EEE7D9] w-[167px] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[20px]">
                  Transition
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full flex items-end justify-between">
          <img
            width="730"
            className="ml-4 hero-1 translate-y-[100%]"
            src="/assets/images/home-hero1.png"
            alt="Hero 1"
          />
          <img
            width="730"
            className="mr-4 hero-2 translate-y-[100%]"
            src="/assets/images/home-hero2.png"
            alt="Hero 2"
          />
        </div>
      </section>
      {/* hero section */}
      {/* section 2 */}
      <section className="h-dvh  place-content-center bg-soft-tosca section flex justify-center items-center section-swiper">
        <div className="w-[1496px] h-[746px] flex gap-x-14 ">
          <Swiper
            // install Swiper modules
            modules={[Pagination]}
            navigation
            speed={0}
            pagination={{
              clickable: false,
            }}
            scrollbar={{ draggable: true }}
            onSwiper={swiperInit}
            onSlideChange={swiperSlideChange}
          >
            <SwiperSlide>
              <div className="w-[1496px] h-[746px] flex gap-x-14 !overflow-visible">
                <div className="flex flex-col">
                  <div className="flex flex-col w-max h-full gap-y-20">
                    <div className="relative  w-[340px] h-[483px]  flex justify-center ">
                      <div className=" swiper-image-container mt-auto ">
                        <div className="absolute w-[340px] h-[404px] bg-white-ivory rounded-[35px] bottom-0 left-1/2 translate-x-[-50%] "></div>
                        <img
                          className="relative w-[454px] max-w-[unset] left-[56%] translate-x-[-50%]"
                          src="/assets/images/home/founder.png "
                          alt="foto 1"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex gap-5">
                        <Button
                          name={"Prev"}
                          arrow={"left"}
                          color={"#FFFBF3"}
                          disableButton={disableButtonLeft}
                          hoverPosition={"right"}
                        />
                        <Button
                          name={"Next"}
                          arrow={"right"}
                          color={"#FFFBF3"}
                          hoverPosition={"left"}
                          disableButton={disableButtonRight}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-full  translate-y-[10%]  flex flex-col gap-y-10">
                  <div className=" flex flex-col gap-7">
                    <div className="font-seagull text-[48px] text-white-ivory leading-[53px] name">
                      Dr. Drs. I Nyoman <br />
                      Gede Astina, M.Pd., CHT., CHA
                    </div>
                    <div className="font-helixa text-white-ivory text-[28px] profesion">
                      Founder
                    </div>
                  </div>
                  <div className="w-full flex  ">
                    <div className="flex gap-5 ml-auto max-w-[890px]">
                      <div className="font-helixa text-white-ivory text-[72px] leading-[75px] petik-dua">
                        "
                      </div>
                      <div className="font-helixa text-white-ivory text-[48px] leading-[58px] quotes">
                        It is a wonderful milestone for our organization to
                        facilitate Early Childhood Education with strong will in
                        nurturing future leaders.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[1496px] h-[746px] flex gap-x-14 !overflow-visible">
                <div className="flex flex-col">
                  <div className="flex flex-col w-max h-full gap-y-20">
                    <div className="relative  w-[340px] h-[483px]  flex justify-center ">
                      <div className=" swiper-image-container mt-auto ">
                        <div className="absolute w-[340px] h-[404px] bg-white-ivory rounded-[35px] bottom-0 left-1/2 translate-x-[-50%] "></div>
                        <img
                          className="relative w-[322px] max-w-[unset] left-[47%] translate-x-[-50%]"
                          src="/assets/images/home/co-founder.png "
                          alt="foto 1"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex gap-5">
                        <Button
                          name={"Prev"}
                          arrow={"left"}
                          color={"#FFFBF3"}
                          disableButton={disableButtonLeft}
                          hoverPosition={"right"}
                        />
                        <Button
                          name={"Next"}
                          arrow={"right"}
                          color={"#FFFBF3"}
                          hoverPosition={"left"}
                          disableButton={disableButtonRight}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-full  translate-y-[10%]  flex flex-col gap-y-10">
                  <div className=" flex flex-col gap-7">
                    <div className="font-seagull text-[48px] text-white-ivory leading-[53px] name">
                      Dr. I Made <br />
                      Sudjana, S.E., M.M., CHT., CHA
                    </div>
                    <div className="font-helixa text-white-ivory text-[28px] profesion">
                      Founder
                    </div>
                  </div>
                  <div className="w-full flex  ">
                    <div className="flex gap-5 ml-auto max-w-[890px]">
                      <div className="font-helixa text-white-ivory text-[72px] leading-[75px] petik-dua">
                        "
                      </div>
                      <div className="font-helixa text-white-ivory text-[48px] leading-[58px] quotes">
                        Continuum education from early childhood to higher
                        education must ensure the quality of both process and
                        outcomes. I believe WIN School is fully on the right
                        direction.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[1496px] h-[746px] flex gap-x-14 !overflow-visible">
                <div className="flex flex-col">
                  <div className="flex flex-col w-max h-full gap-y-20">
                    <div className="relative  w-[340px] h-[483px]  flex justify-center ">
                      <div className=" swiper-image-container mt-auto ">
                        <div className="absolute w-[340px] h-[404px] bg-white-ivory rounded-[35px] bottom-0 left-1/2 translate-x-[-50%] "></div>
                        <img
                          className="relative w-[301px] max-w-[unset] left-[54%] translate-x-[-50%]"
                          src="/assets/images/home/win-principal.png "
                          alt="foto 1"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex gap-5">
                        <Button
                          name={"Prev"}
                          arrow={"left"}
                          color={"#FFFBF3"}
                          disableButton={disableButtonLeft}
                          hoverPosition={"right"}
                        />
                        <Button
                          name={"Next"}
                          arrow={"right"}
                          color={"#FFFBF3"}
                          hoverPosition={"left"}
                          disableButton={disableButtonRight}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-full  translate-y-[10%]  flex flex-col gap-y-10">
                  <div className=" flex flex-col gap-7">
                    <div className="font-seagull text-[48px] text-white-ivory leading-[53px] name">
                      Imroatun <br />
                      Nafi'ah, S.Pd.
                    </div>
                    <div className="font-helixa text-white-ivory text-[28px] profesion">
                      WIN Principal
                    </div>
                  </div>
                  <div className="w-full flex  ">
                    <div className="flex gap-5 ml-auto max-w-[890px]">
                      <div className="font-helixa text-white-ivory text-[72px] leading-[75px] petik-dua">
                        "
                      </div>
                      <div className="font-helixa text-white-ivory text-[48px] leading-[58px] quotes">
                        Our school offers so much value, and it goes beyond
                        simply providing access to top-notch learning resources;
                        it also fosters a vibrant community where dreams come
                        true, ideas flourish, and learning has no boundaries.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="w-[1496px] h-[746px] flex gap-x-14 !overflow-visible">
                <div className="flex flex-col">
                  <div className="flex flex-col w-max h-full gap-y-20">
                    <div className="relative  w-[340px] h-[483px]  flex justify-center ">
                      <div className=" swiper-image-container mt-auto ">
                        <div className="absolute w-[340px] h-[404px] bg-white-ivory rounded-[35px] bottom-0 left-1/2 translate-x-[-50%] "></div>
                        <img
                          className="relative w-[408px] max-w-[unset] left-[51%] translate-x-[-50%]"
                          src="/assets/images/home/teacher.png "
                          alt="foto 1"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex gap-5">
                        <Button
                          name={"Prev"}
                          arrow={"left"}
                          color={"#FFFBF3"}
                          disableButton={disableButtonLeft}
                          hoverPosition={"right"}
                        />
                        <Button
                          name={"Next"}
                          arrow={"right"}
                          color={"#FFFBF3"}
                          hoverPosition={"left"}
                          disableButton={disableButtonRight}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-full  translate-y-[10%]  flex flex-col gap-y-10">
                  <div className=" flex flex-col gap-7">
                    <div className="font-seagull text-[48px] text-white-ivory leading-[53px] name">
                      Margareth <br />
                    </div>
                    <div className="font-helixa text-white-ivory text-[28px] profesion">
                      Early Childhood Practitioner
                    </div>
                  </div>
                  <div className="w-full flex  ">
                    <div className="flex gap-5 ml-auto max-w-[890px]">
                      <div className="font-helixa text-white-ivory text-[72px] leading-[75px] petik-dua">
                        "
                      </div>
                      <div className="font-helixa text-white-ivory text-[48px] leading-[58px] quotes">
                        Children’s learning is dynamic, complex and holistic. A
                        well designed play based learning environment allow
                        children to make connections between prior experiences
                        and new learning.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* section 2 */}

      <section className="h-[20vh]  overflow-hidden relative bg-white-ivory section">
        <div
          className="w-[1050vh] h-[1050vh] bg-soft-tosca absolute top-[-1040vh] left-1/2 -translate-x-1/2"
          style={{ clipPath: "circle(50% at 50% 50%)" }}
        ></div>
      </section>

      <section className="w-full min-h-dvh px-[142px] py-[134px] flex bg-white-ivory section section-we-are-leading">
        <div className="w-full h-full py-[108px]">
          <div className="w-auto h-auto relative">
            <div className="overflow-hidden w-[244px] h-[244px] absolute bottom-[-21%] rounded-[30px] z-10">
              <Image
                src="/assets/images/home/Rectangle_2.png"
                alt="Image 1"
                className=" img-we-are-leading"
                width={244}
                height={244}
              />
            </div>
            <div className="font-helixia text-[6.667vw] leading-[6.771vw] text-sunset-coral text-center">
              <div className="overflow-hidden w-[244px] h-[244px] absolute right-0 top-[-25%] rounded-[30px]">
                <Image
                  src="/assets/images/home/Rectangle_1.png"
                  alt="Image 2"
                  className=" img-we-are-leading"
                  width={244}
                  height={244}
                />
              </div>
              <div className="we-are-leading">
                We are leading
                <br />
                early childhood education
                <br />
                center in Bali
              </div>
            </div>
          </div>

          <div className="w-full flex flex-nowrap gap-x-8 mt-[250px] translate-x-[95%] section-the-biggest">
            <div className="w-[560px] h-[526px]  bg-almond-cream p-15 flex flex-col  rounded-3xl justify-between">
              <div className="w-full font-helixa text-[48px] leading-[55px] font-bold">
                The Biggest
                <br />
                Early Childhood
                <br />
                Education Centre in Bali
              </div>
              <div className="w-full font-helixa text-[20px] text-[#5e5e5e]">
                As Bali's largest early childhood education center, our 30-are
                school offers comprehensive programs in a safe and specious
                environment for children to grow and explore
              </div>
            </div>
            <div className="w-[560px] h-[526px] translate-y-[100px] bg-almond-cream p-15 flex flex-col  rounded-3xl justify-between">
              <div className="w-full font-helixa text-[48px] leading-[55px] font-bold">
                An Integrated
                <br />
                Programme from
                <br />0 - 6 Years Old
              </div>
              <div className="w-full font-helixa text-[20px] text-[#5e5e5e]">
                Our integrated 0-6 program, from nursery to kindergarten, offers
                an educational journey, nurturing social, emotional, and
                cognitive development at every stage.
              </div>
            </div>
            <div className="w-[560px] h-[526px]  translate-y-[50px] bg-almond-cream p-15 flex flex-col  rounded-3xl justify-between">
              <div className="w-full font-helixa text-[48px] leading-[55px] font-bold">
                A Responsive
                <br />
                and Contextual
                <br />
                Curriculum
              </div>
              <div className="w-full font-helixa text-[20px] text-[#5e5e5e]">
                We implement a responsive and contextual curriculum that
                responds to the needs of children and keeps pace with evolving
                times.
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-[176px] button-section-we-are-leading">
            <Button
              className={""}
              name={"About Us"}
              arrow={"right"}
              color={"#F96D49"}
              hoverColor={"#F96D49"}
              hoverType={1}
              textHover={"#FFFBF3"}
            />
          </div>
        </div>
      </section>
      {/* section video */}

      <section className="w-full h-dvh   bg-white-ivory section-video relative section">
        <div className="w-[737px] h-[515px] video-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <video
            muted
            className="rounded-[50px] cursor-none w-full h-full"
            loop={true}
            onMouseEnter={() => cursorHover(null)}
            onMouseLeave={cursorLeave}
            ref={videoRef}
            onClick={videoPlayback}
          >
            <source
              src="/assets/images/home/WIN SCHOOL SLIDE.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </section>

      {/* section video */}

      <section className="w-full h-dvh   bg-white-ivory section-video relative px-[59px] flex justify-center items-center section section-after-video">
        <div className="w-full  flex justify-between mb-[20%]">
          <Link href="/building">
            <div className="group card-building">
              <div className="relative  ">
                <div className="w-[587px] h-[430px] rounded-[50px] absolute group-hover:-rotate-2 duration-1000 transition-all">
                  <Image
                    width={587}
                    height={430}
                    src="/assets/images/home/image-building1.png"
                  />
                </div>
                <div className="w-[587px] h-[430px] bg-almond-cream group-hover:bg-soft-tosca rounded-[50px] relative group-hover:translate-y-[80%] group-hover:rotate-2 duration-1000 transition-all">
                  <div className="absolute top-[8%] left-[10%]  font-helixa text-[5vw] group-hover:text-white-ivory duration-1000 transition-all">
                    Buildings
                  </div>{" "}
                  <div className="absolute bottom-[5%] right-[2%] ">
                    <div className="relative w-[203px] h-[76px] flex items-center">
                      <div className="w-0 group-hover:w-[203px] duration-1000 opacity-0 group-hover:opacity-100 transition-all h-[76px] bg-white-ivory rounded-[38px] absolute right-0">
                        <div className="relative w-full h-full flex items-center">
                          <div className="font-helixa font-bold text-[28px] text-[#404040] ml-0 group-hover:ml-8 opacity-0 group-hover:opacity-100 duration-1000 transition-all">
                            More
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="w-[76px] h-[76px] group-hover:w-[62px] group-hover:h-[62px] transition-all duration-1000 bg-sunset-coral rounded-full flex justify-center items-center absolute right-[5%] z-10">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.78125 18.2676L17.7694 2.27938"
                              stroke="#FFFBF3"
                              strokeWidth="2.82634"
                            />
                            <path
                              d="M1.78125 2.28125H17.7694V18.2694"
                              stroke="#FFFBF3"
                              strokeWidth="2.82634"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/building">
            <div className="group card-building">
              <div className="relative  ">
                <div className="w-[587px] h-[430px] rounded-[50px] absolute group-hover:-rotate-2 duration-1000 transition-all">
                  <Image
                    width={587}
                    height={430}
                    src="/assets/images/home/image-facilities.png"
                  />
                </div>
                <div className="w-[587px] h-[430px] bg-almond-cream group-hover:bg-soft-tosca rounded-[50px] relative group-hover:translate-y-[80%] group-hover:rotate-2 duration-1000 transition-all">
                  <div className="absolute top-[8%] left-[10%]  font-helixa text-[5vw] group-hover:text-white-ivory duration-1000 transition-all">
                    Facilities
                  </div>
                  <div className="absolute bottom-[5%] right-[2%] ">
                    <div className="relative w-[203px] h-[76px] flex items-center">
                      <div className="w-0 group-hover:w-[203px] duration-1000 opacity-0 group-hover:opacity-100 transition-all h-[76px] bg-white-ivory rounded-[38px] absolute right-0">
                        <div className="relative w-full h-full flex items-center">
                          <div className="font-helixa font-bold text-[28px] text-[#404040] ml-0 group-hover:ml-8 opacity-0 group-hover:opacity-100 duration-1000 transition-all">
                            More
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="w-[76px] h-[76px] group-hover:w-[62px] group-hover:h-[62px] transition-all duration-1000 bg-sunset-coral rounded-full flex justify-center items-center absolute right-[5%] z-10">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.78125 18.2676L17.7694 2.27938"
                              stroke="#FFFBF3"
                              strokeWidth="2.82634"
                            />
                            <path
                              d="M1.78125 2.28125H17.7694V18.2694"
                              stroke="#FFFBF3"
                              strokeWidth="2.82634"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href={"/activities"}>
            <div className="group card-building">
              <div className="relative  ">
                <div className="w-[587px] h-[430px] rounded-[50px] absolute group-hover:-rotate-2 duration-1000 transition-all">
                  <Image
                    width={587}
                    height={430}
                    src="/assets/images/home/image-activities.png"
                  />
                </div>
                <div className="w-[587px] h-[430px] bg-almond-cream group-hover:bg-soft-tosca rounded-[50px] relative group-hover:translate-y-[80%] group-hover:rotate-2 duration-1000 transition-all">
                  <div className="absolute top-[8%] left-[10%]  font-helixa text-[5vw] group-hover:text-white-ivory duration-1000 transition-all">
                    Activities
                  </div>
                  <div className="absolute bottom-[5%] right-[2%] ">
                    <div className="relative w-[203px] h-[76px] flex items-center">
                      <div className="w-0 group-hover:w-[203px] duration-1000 opacity-0 group-hover:opacity-100 transition-all h-[76px] bg-white-ivory rounded-[38px] absolute right-0">
                        <div className="relative w-full h-full flex items-center">
                          <div className="font-helixa font-bold text-[28px] text-[#404040] ml-0 group-hover:ml-8 opacity-0 group-hover:opacity-100 duration-1000 transition-all">
                            More
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="w-[76px] h-[76px] group-hover:w-[62px] group-hover:h-[62px] transition-all duration-1000 bg-sunset-coral rounded-full flex justify-center items-center absolute right-[5%] z-10">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.78125 18.2676L17.7694 2.27938"
                              stroke="#FFFBF3"
                              strokeWidth="2.82634"
                            />
                            <path
                              d="M1.78125 2.28125H17.7694V18.2694"
                              stroke="#FFFBF3"
                              strokeWidth="2.82634"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="min-h-dvh w-full px-15 bg-white-ivory flex flex-col gap-y-[300px] section section-we-provides">
        <div className="h-full w-full flex justify-between px-24">
          <div className="font-helixa text-[6.667vw] text-sunset-coral leading-[6.771vw]">
            <div className="text-we-provide"> We provides an</div>
            <div className="text-we-provide">excellent selection</div>
            <div className="text-we-provide">of classes</div>
          </div>
          <div className="flex flex-col justify-end">
            <div className="">
              <div className="text-explore">
                {" "}
                Explore our diverse selection of classes, each{" "}
              </div>
              <div className="text-explore">
                tailored to provide a nurturing environment where
              </div>
              <div className="text-explore">
                children can learn, grow, and thrive.
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between">
          <Link href={"/daycare"}>
            <div className="group card-daycare translate-y-full opacity-0">
              <div className="w-[884px] h-[430px] bg-almond-cream group-hover:bg-soft-tosca rounded-[50px] relative   overflow-y-visible duration-1000 transition-all group-hover:translate-y-[-5%]">
                <div className="flex flex-col gap-y-[10px] absolute top-[7%] left-[7%]">
                  <div className="font-seagull text-[3.333vw] text-sunset-coral group-hover:text-white-ivory duration-1000 transition-all">
                    Daycare
                  </div>
                  <div className="font-helixa text-[1.875vw] text-[#5e5e5e] group-hover:text-white-ivory duration-1000 transition-all">
                    3 - 6 years old
                  </div>
                </div>
                <Image
                  src={"/assets/images/home/Image1.png"}
                  width={541}
                  height={565}
                  className="absolute top-[-39.5%] right-0"
                />
                <div className="absolute bottom-[5%] right-[2%] ">
                  <div className="relative w-[203px] h-[76px] flex items-center">
                    <div className="w-0 group-hover:w-[203px] duration-1000 opacity-0 group-hover:opacity-100 transition-all h-[76px] bg-white-ivory rounded-[38px] absolute right-0">
                      <div className="relative w-full h-full flex items-center">
                        <div className="font-helixa font-bold text-[28px] text-[#404040] ml-0 group-hover:ml-8 opacity-0 group-hover:opacity-100 duration-1000 transition-all">
                          More
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="w-[76px] h-[76px] group-hover:w-[62px] group-hover:h-[62px] transition-all duration-1000 bg-sunset-coral rounded-full flex justify-center items-center absolute right-[5%] z-10">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.78125 18.2676L17.7694 2.27938"
                            stroke="#FFFBF3"
                            strokeWidth="2.82634"
                          />
                          <path
                            d="M1.78125 2.28125H17.7694V18.2694"
                            stroke="#FFFBF3"
                            strokeWidth="2.82634"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/playschool"}>
            <div className="group card-daycare translate-y-full opacity-0">
              <div className="w-[884px] h-[430px] bg-almond-cream group-hover:bg-soft-tosca rounded-[50px] relative   overflow-y-visible duration-1000 transition-all group-hover:translate-y-[-5%]">
                <div className="flex flex-col gap-y-[10px] absolute top-[7%] left-[7%]">
                  <div className="font-seagull text-[3.333vw] text-sunset-coral group-hover:text-white-ivory duration-1000 transition-all">
                    Playschool
                  </div>
                  <div className="font-helixa text-[1.875vw] text-[#5e5e5e] group-hover:text-white-ivory duration-1000 transition-all">
                    20 months - 6 years old
                  </div>
                </div>
                <Image
                  src={"/assets/images/home/Image2.png"}
                  width={541}
                  height={565}
                  className="absolute top-[-39.5%] right-0"
                />
                <div className="absolute bottom-[5%] right-[2%] ">
                  <div className="relative w-[203px] h-[76px] flex items-center">
                    <div className="w-0 group-hover:w-[203px] duration-1000 opacity-0 group-hover:opacity-100 transition-all h-[76px] bg-white-ivory rounded-[38px] absolute right-0">
                      <div className="relative w-full h-full flex items-center">
                        <div className="font-helixa font-bold text-[28px] text-[#404040] ml-0 group-hover:ml-8 opacity-0 group-hover:opacity-100 duration-1000 transition-all">
                          More
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="w-[76px] h-[76px] group-hover:w-[62px] group-hover:h-[62px] transition-all duration-1000 bg-sunset-coral rounded-full flex justify-center items-center absolute right-[5%] z-10">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.78125 18.2676L17.7694 2.27938"
                            stroke="#FFFBF3"
                            strokeWidth="2.82634"
                          />
                          <path
                            d="M1.78125 2.28125H17.7694V18.2694"
                            stroke="#FFFBF3"
                            strokeWidth="2.82634"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full flex justify-center section-register">
          <div className="flex w-[1354px] flex-col gap-y-[140px]">
            <div className="font-helixa text-[6.667vw] text-sunset-coral text-center content-register-1 ">
              I would like to register!
            </div>
            <div className="w-full flex justify-between content-register-2">
              <div className="w-[540px] flex gap-x-[32px]">
                <div className="font-helixa font-bold text-[28px] text-[#404040]">
                  01
                </div>
                <div className="flex w-full justify-between items-center gap-x-[32px]">
                  <svg
                    width="144"
                    height="144"
                    viewBox="0 0 144 144"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="144" height="144" rx="36" fill="#EEE7D9" />
                    <path
                      d="M87.0053 101.52C82.0801 101.52 70.1065 95.1448 60.0535 81.4584C50.6508 68.6578 46.0781 59.4111 46.0781 53.1893C46.0781 48.2901 49.421 45.9523 51.2161 44.6952L51.6598 44.3815C53.6432 42.946 56.7288 42.4805 57.912 42.4805C59.9866 42.4805 60.8598 43.7088 61.3886 44.7793C61.8384 45.6857 65.5642 53.7819 65.941 54.7888C66.5205 56.3371 66.33 58.5929 64.539 59.891L64.225 60.1125C63.3356 60.7359 61.6824 61.8946 61.4534 63.3055C61.342 63.9904 61.5689 64.7081 62.1463 65.4956C65.0293 69.4289 74.2375 80.9785 75.8968 82.5452C77.1975 83.7757 78.8446 83.95 79.967 82.9923C81.1279 82.0018 81.6445 81.4173 81.6486 81.4091L81.7681 81.2922C81.8654 81.2082 82.773 80.4802 84.2561 80.4802C85.3258 80.4802 86.4137 80.8534 87.4896 81.5896C90.2814 83.4988 96.5802 87.7643 96.5802 87.7643L96.6815 87.8422C97.4879 88.5415 98.6528 90.5553 97.2934 93.1761C95.8853 95.8974 91.5193 101.514 87.0033 101.514L87.0053 101.52ZM57.91 44.6706C56.8868 44.6706 54.3726 45.1074 52.9138 46.1635L52.4438 46.4958C50.7683 47.6688 48.2378 49.4385 48.2378 53.1913C48.2378 58.9272 52.6707 67.7473 61.7857 80.1562C71.7415 93.7093 83.1235 99.3365 87.0033 99.3365C90.3037 99.3365 94.0882 94.669 95.3808 92.1713C96.175 90.6373 95.5247 89.7719 95.2998 89.5382C94.5704 89.0439 88.8895 85.1968 86.278 83.4106C85.5669 82.9226 84.8841 82.6765 84.254 82.6765C83.6807 82.6765 83.3038 82.8815 83.1762 82.9636C82.9655 83.1912 82.3861 83.7941 81.3548 84.6718C79.4281 86.3144 76.4965 86.1155 74.4178 84.1509C72.5478 82.3832 63.1026 70.4809 60.406 66.804C59.474 65.5325 59.1073 64.2365 59.316 62.9548C59.6949 60.6313 61.8384 59.1281 62.9891 58.3202L63.2768 58.1171C64.306 57.3727 64.0872 56.0254 63.917 55.5702C63.599 54.7212 59.9198 46.707 59.4538 45.7657C59.0729 44.9946 58.773 44.6727 57.9059 44.6727L57.91 44.6706Z"
                      fill="#404040"
                    />
                  </svg>
                  <div className="font-helixa font-bold text-[32px] text-[#40404]">
                    Inquiry for Futher Information
                  </div>
                </div>
              </div>
              <div className="w-[540px] flex gap-x-[32px]">
                <div className="font-helixa font-bold text-[28px] text-[#404040]">
                  02
                </div>
                <div className="flex w-full justify-between items-center gap-x-[32px]">
                  <svg
                    width="144"
                    height="144"
                    viewBox="0 0 144 144"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="144" height="144" rx="36" fill="#EEE7D9" />
                    <path
                      d="M88.1969 87.8391C87.7195 87.8391 87.2617 88.0287 86.9241 88.3663C86.5865 88.7038 86.3969 89.1617 86.3969 89.6391V95.0391H50.3969V51.8391H57.5969V53.6391C57.5969 54.1165 57.7865 54.5743 58.1241 54.9119C58.4616 55.2494 58.9195 55.4391 59.3969 55.4391H77.3969C77.8743 55.4391 78.3321 55.2494 78.6697 54.9119C79.0072 54.5743 79.1969 54.1165 79.1969 53.6391V51.8391H86.3969V53.6391C86.3969 54.1165 86.5865 54.5743 86.9241 54.9119C87.2617 55.2494 87.7195 55.4391 88.1969 55.4391C88.6743 55.4391 89.1321 55.2494 89.4697 54.9119C89.8072 54.5743 89.9969 54.1165 89.9969 53.6391V50.0391C89.9969 49.5617 89.8072 49.1038 89.4697 48.7663C89.1321 48.4287 88.6743 48.2391 88.1969 48.2391H79.1969V46.4391C79.1969 45.0069 78.628 43.6334 77.6153 42.6207C76.6026 41.608 75.229 41.0391 73.7969 41.0391H62.9969C61.5647 41.0391 60.1912 41.608 59.1785 42.6207C58.1658 43.6334 57.5969 45.0069 57.5969 46.4391V48.2391H48.5969C48.1195 48.2391 47.6616 48.4287 47.3241 48.7663C46.9865 49.1038 46.7969 49.5617 46.7969 50.0391V96.8391C46.7969 97.3165 46.9865 97.7743 47.3241 98.1119C47.6616 98.4494 48.1195 98.6391 48.5969 98.6391H88.1969C88.6743 98.6391 89.1321 98.4494 89.4697 98.1119C89.8072 97.7743 89.9969 97.3165 89.9969 96.8391V89.6391C89.9969 89.1617 89.8072 88.7038 89.4697 88.3663C89.1321 88.0287 88.6743 87.8391 88.1969 87.8391ZM61.1969 46.4391C61.1969 45.9617 61.3865 45.5038 61.7241 45.1663C62.0616 44.8287 62.5195 44.6391 62.9969 44.6391H73.7969C74.2743 44.6391 74.7321 44.8287 75.0697 45.1663C75.4072 45.5038 75.5969 45.9617 75.5969 46.4391V51.8391H61.1969V46.4391ZM103.871 63.1647L96.6713 55.9647C96.5041 55.797 96.3054 55.664 96.0868 55.5733C95.8681 55.4826 95.6336 55.4358 95.3969 55.4358C95.1601 55.4358 94.9257 55.4826 94.707 55.5733C94.4883 55.664 94.2897 55.797 94.1225 55.9647L72.5225 77.5647C72.3554 77.7321 72.223 77.9309 72.1328 78.1495C72.0427 78.3682 71.9965 78.6025 71.9969 78.8391V86.0391C71.9969 86.5165 72.1865 86.9743 72.5241 87.3119C72.8616 87.6494 73.3195 87.8391 73.7969 87.8391H80.9969C81.2334 87.8395 81.4677 87.7933 81.6864 87.7031C81.9051 87.6129 82.1038 87.4805 82.2713 87.3135L103.871 65.7135C104.039 65.5463 104.172 65.3476 104.263 65.1289C104.353 64.9103 104.4 64.6758 104.4 64.4391C104.4 64.2023 104.353 63.9679 104.263 63.7492C104.172 63.5305 104.039 63.3319 103.871 63.1647ZM75.5969 84.2391V79.5843L95.3969 59.7843L100.052 64.4391L80.2517 84.2391H75.5969ZM68.3969 86.0391C68.3969 86.5165 68.2072 86.9743 67.8697 87.3119C67.5321 87.6494 67.0743 87.8391 66.5969 87.8391H59.3969C58.9195 87.8391 58.4616 87.6494 58.1241 87.3119C57.7865 86.9743 57.5969 86.5165 57.5969 86.0391C57.5969 85.5617 57.7865 85.1038 58.1241 84.7663C58.4616 84.4287 58.9195 84.2391 59.3969 84.2391H66.5969C67.0743 84.2391 67.5321 84.4287 67.8697 84.7663C68.2072 85.1038 68.3969 85.5617 68.3969 86.0391ZM68.3969 75.2391C68.3969 75.7164 68.2072 76.1743 67.8697 76.5119C67.5321 76.8494 67.0743 77.0391 66.5969 77.0391H59.3969C58.9195 77.0391 58.4616 76.8494 58.1241 76.5119C57.7865 76.1743 57.5969 75.7164 57.5969 75.2391C57.5969 74.7617 57.7865 74.3038 58.1241 73.9663C58.4616 73.6287 58.9195 73.4391 59.3969 73.4391H66.5969C67.0743 73.4391 67.5321 73.6287 67.8697 73.9663C68.2072 74.3038 68.3969 74.7617 68.3969 75.2391ZM77.3969 66.2391H59.3969C58.9195 66.2391 58.4616 66.0494 58.1241 65.7119C57.7865 65.3743 57.5969 64.9165 57.5969 64.4391C57.5969 63.9617 57.7865 63.5038 58.1241 63.1663C58.4616 62.8287 58.9195 62.6391 59.3969 62.6391H77.3969C77.8743 62.6391 78.3321 62.8287 78.6697 63.1663C79.0072 63.5038 79.1969 63.9617 79.1969 64.4391C79.1969 64.9165 79.0072 65.3743 78.6697 65.7119C78.3321 66.0494 77.8743 66.2391 77.3969 66.2391Z"
                      fill="#404040"
                    />
                  </svg>

                  <div className="font-helixa font-bold text-[32px] text-[#40404]">
                    Registration and Payment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto flex items-center bg-white-ivory section section-winner-classes">
        <div className="w-full h-dvh flex items-center flex-nowrap relative">
          <div className="text-nowrap text-[13.333vw] text-sunset-coral translate-x-[100%] winner-classes">
            WINner Classes
          </div>
          <div className="w-full h-dvh flex items-center bg-white-ivory section overflow-hidden translate-x-full section-class absolute flex-nowrap">
            <div
              className="w-full h-full flex translate-x-[60px] cursor-none "
              onMouseEnter={() => cursorHover("MORE")}
              onMouseLeave={cursorLeave}
            >
              <div className="w-[23%]   h-full ml-4 group relative  overflow-visible">
                <div className="h-full w-[130%]   overflow-y-visible ">
                  <div className="w-full h-full  after:bg-white-ivory relative  after:content-[''] after:w-[3000px] after:h-[3000px]  after:absolute after:left-0 group-hover:after:left-[-5%] after:top-1/2 after:rounded-full after:-translate-y-1/2 after:duration-1000 after:transition-all after:border-2 after:border-[#CABFAA] "></div>
                </div>
                <div className="overflow-visible w-[130%] h-full  absolute  top-0">
                  <div className="relative w-full h-full">
                    <div className=" w-[3000px] h-[3000px] absolute top-[50%] -translate-y-1/2 group-hover:left-[-5%] left-[85%] rounded-full border-2 border-[#CABFAA] bg-soft-tosca group-hover:bg-soft-tosca duration-700 transition-all"></div>
                  </div>
                </div>
                <div className="flex flex-col absolute top-[15%]  left-[20%] group-hover:left-[15%] group-hover:text-white-ivory duration-1000 transition-all">
                  <h1 className="text-sunset-coral font-seagull font-bold text-[64px] group-hover:text-white-ivory duration-1000 transition-all">
                    Nursery
                  </h1>
                  <div className="font-helixa text-[#5E5E5E] text-[36px] group-hover:left-[15%] group-hover:text-white-ivory duration-1000 transition-all">
                    2 - 3 years old
                  </div>
                </div>
                <div className="absolute   bottom-0 right-[-30%] group-hover:right-[-20%]  w-[500px] h-auto group-hover:w-[400px] duration-1000 transition-all">
                  <img
                    src="/assets/images/home/img-class-1.png"
                    alt="nursery"
                    className=" w-full h-full"
                  />
                </div>
              </div>

              <div className="w-[23%]   h-full ml-4 group relative  overflow-visible">
                <div className="h-full w-[130%]   overflow-y-visible ">
                  <div className="w-full h-full  after:bg-white-ivory relative  after:content-[''] after:w-[3000px] after:h-[3000px]  after:absolute after:left-0 group-hover:after:left-[-5%] after:top-1/2 after:rounded-full after:-translate-y-1/2 after:duration-1000 after:transition-all after:border-2 after:border-[#CABFAA] "></div>
                </div>
                <div className="overflow-visible w-[130%] h-full  absolute  top-0">
                  <div className="relative w-full h-full">
                    <div className=" w-[3000px] h-[3000px] absolute top-[50%] -translate-y-1/2 group-hover:left-[-5%] left-[85%] rounded-full border-2 border-[#CABFAA] bg-soft-tosca group-hover:bg-soft-tosca duration-700 transition-all"></div>
                  </div>
                </div>
                <div className="flex flex-col absolute top-[15%]  left-[20%] group-hover:left-[15%] group-hover:text-white-ivory duration-1000 transition-all">
                  <h1 className="text-sunset-coral font-seagull font-bold text-[64px] group-hover:text-white-ivory duration-1000 transition-all">
                    Preschool
                  </h1>
                  <div className="font-helixa text-[#5E5E5E] text-[36px] group-hover:left-[15%] group-hover:text-white-ivory duration-1000 transition-all">
                    3 - 4 years old
                  </div>
                </div>
                <div className="absolute   bottom-0 right-[-30%] group-hover:right-[-20%]  w-[500px] h-auto group-hover:w-[400px] duration-1000 transition-all">
                  <img
                    src="/assets/images/home/img-class-2.png"
                    alt="nursery"
                    className=" w-full h-full"
                  />
                </div>
              </div>

              <div className="w-[23%]   h-full ml-4 group relative  overflow-visible">
                <div className="h-full w-[130%]   overflow-y-visible ">
                  <div className="w-full h-full  after:bg-white-ivory relative  after:content-[''] after:w-[3000px] after:h-[3000px]  after:absolute after:left-0 group-hover:after:left-[-5%] after:top-1/2 after:rounded-full after:-translate-y-1/2 after:duration-1000 after:transition-all after:border-2 after:border-[#CABFAA] "></div>
                </div>
                <div className="overflow-visible w-[130%] h-full  absolute  top-0">
                  <div className="relative w-full h-full">
                    <div className=" w-[3000px] h-[3000px] absolute top-[50%] -translate-y-1/2 group-hover:left-[-5%] left-[85%] rounded-full border-2 border-[#CABFAA] bg-soft-tosca group-hover:bg-soft-tosca duration-700 transition-all"></div>
                  </div>
                </div>
                <div className="flex flex-col absolute top-[15%]  left-[20%] group-hover:left-[15%] group-hover:text-white-ivory duration-1000 transition-all">
                  <h1 className="text-sunset-coral font-seagull font-bold text-[64px] group-hover:text-white-ivory duration-1000 transition-all">
                    Kindy A
                  </h1>
                  <div className="font-helixa text-[#5E5E5E] text-[36px] group-hover:left-[15%] group-hover:text-white-ivory duration-1000 transition-all">
                    4 - 5 years old
                  </div>
                </div>
                <div className="absolute   bottom-0 right-[-30%] group-hover:right-[-20%]  w-[500px] h-auto group-hover:w-[400px] duration-1000 transition-all">
                  <img
                    src="/assets/images/home/img-class-3.png"
                    alt="nursery"
                    className=" w-full h-full"
                  />
                </div>
              </div>

              <div className="w-[23%]   h-full ml-4 group relative  overflow-visible">
                <div className="h-full w-[130%]   overflow-y-visible ">
                  <div className="w-full h-full  after:bg-white-ivory relative  after:content-[''] after:w-[3000px] after:h-[3000px]  after:absolute after:left-0 group-hover:after:left-[-5%] after:top-1/2 after:rounded-full after:-translate-y-1/2 after:duration-1000 after:transition-all after:border-2 after:border-[#CABFAA] "></div>
                </div>
                <div className="overflow-visible w-[130%] h-full  absolute  top-0">
                  <div className="relative w-full h-full">
                    <div className=" w-[3000px] h-[3000px] absolute top-[50%] -translate-y-1/2 group-hover:left-[-5%] left-[85%] rounded-full border-2 border-[#CABFAA] bg-soft-tosca group-hover:bg-soft-tosca duration-700 transition-all"></div>
                  </div>
                </div>
                <div className="flex flex-col absolute top-[15%]  left-[20%] group-hover:left-[15%] group-hover:text-white-ivory duration-1000 transition-all">
                  <h1 className="text-sunset-coral font-seagull font-bold text-[64px] group-hover:text-white-ivory duration-1000 transition-all">
                    Kindy B
                  </h1>
                  <div className="font-helixa text-[#5E5E5E] text-[36px] group-hover:left-[15%] group-hover:text-white-ivory duration-1000 transition-all">
                    5 - 6 years old
                  </div>
                </div>
                <div className="absolute   bottom-0 right-[-30%] group-hover:right-[-20%]  w-[500px] h-auto group-hover:w-[400px] duration-1000 transition-all">
                  <img
                    src="/assets/images/home/img-class-4.png"
                    alt="nursery"
                    className=" w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-dvh w-full bg-white-ivory flex justify-center items-center section relative z-10   after:w-full after:h-[120px] after:absolute after:bottom-0 after:bg-sunset-coral after:translate-y-full after:rounded-br-[30px] after:rounded-bl-[30px] section-register-2">
        <div className="w-[1354px] h-[704px] flex flex-col gap-y-[140px] ">
          <div className="text-center font-helixa text-sunset-coral text-[128px] would-register">
            How to Register
          </div>
          <div className="grid grid-cols-2  gap-y-[146px]">
            <div className="w-[540px] flex gap-x-[32px] grid-register ">
              <div className="text-[28px] text-[#404040] font-bold mt-1">
                01
              </div>
              <div className="flex items-center  gap-x-[32px]">
                <svg
                  width="144"
                  height="144"
                  viewBox="0 0 144 144"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="144" height="144" rx="36" fill="#EEE7D9" />
                  <path
                    d="M87.0053 101.52C82.0801 101.52 70.1065 95.1448 60.0535 81.4584C50.6508 68.6578 46.0781 59.4111 46.0781 53.1893C46.0781 48.2901 49.421 45.9523 51.2161 44.6952L51.6598 44.3815C53.6432 42.946 56.7288 42.4805 57.912 42.4805C59.9866 42.4805 60.8598 43.7088 61.3886 44.7793C61.8384 45.6857 65.5642 53.7819 65.941 54.7888C66.5205 56.3371 66.33 58.5929 64.539 59.891L64.225 60.1125C63.3356 60.7359 61.6824 61.8946 61.4534 63.3055C61.342 63.9904 61.5689 64.7081 62.1463 65.4956C65.0293 69.4289 74.2375 80.9785 75.8968 82.5452C77.1975 83.7757 78.8446 83.95 79.967 82.9923C81.1279 82.0018 81.6445 81.4173 81.6486 81.4091L81.7681 81.2922C81.8654 81.2082 82.773 80.4802 84.2561 80.4802C85.3258 80.4802 86.4137 80.8534 87.4896 81.5896C90.2814 83.4988 96.5802 87.7643 96.5802 87.7643L96.6815 87.8422C97.4879 88.5415 98.6528 90.5553 97.2934 93.1761C95.8853 95.8974 91.5193 101.514 87.0033 101.514L87.0053 101.52ZM57.91 44.6706C56.8868 44.6706 54.3726 45.1074 52.9138 46.1635L52.4438 46.4958C50.7683 47.6688 48.2378 49.4385 48.2378 53.1913C48.2378 58.9272 52.6707 67.7473 61.7857 80.1562C71.7415 93.7093 83.1235 99.3365 87.0033 99.3365C90.3037 99.3365 94.0882 94.669 95.3808 92.1713C96.175 90.6373 95.5247 89.7719 95.2998 89.5382C94.5704 89.0439 88.8895 85.1968 86.278 83.4106C85.5669 82.9226 84.8841 82.6765 84.254 82.6765C83.6807 82.6765 83.3038 82.8815 83.1762 82.9636C82.9655 83.1912 82.3861 83.7941 81.3548 84.6718C79.4281 86.3144 76.4965 86.1155 74.4178 84.1509C72.5478 82.3832 63.1026 70.4809 60.406 66.804C59.474 65.5325 59.1073 64.2365 59.316 62.9548C59.6949 60.6313 61.8384 59.1281 62.9891 58.3202L63.2768 58.1171C64.306 57.3727 64.0872 56.0254 63.917 55.5702C63.599 54.7212 59.9198 46.707 59.4538 45.7657C59.0729 44.9946 58.773 44.6727 57.9059 44.6727L57.91 44.6706Z"
                    fill="black"
                  />
                </svg>
                <div className="text-[32px] text-[#404040] font-bold">
                  Inquiry for Futher Information
                </div>
              </div>
            </div>
            <div className="w-[540px] flex gap-x-[32px] grid-register justify-self-end">
              <div className="text-[28px] text-[#404040] font-bold mt-1">
                02
              </div>
              <div className="flex items-center  gap-x-[32px]">
                <svg
                  width="144"
                  height="144"
                  viewBox="0 0 144 144"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="144" height="144" rx="36" fill="#EEE7D9" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M99.2609 99H44.7391C43.217 99 41.7572 98.4011 40.681 97.3351C39.6047 96.2691 39 94.8233 39 93.3158V50.6842C39 49.1767 39.6047 47.7309 40.681 46.6649C41.7572 45.5989 43.217 45 44.7391 45H99.2609C100.783 45 102.243 45.5989 103.319 46.6649C104.395 47.7309 105 49.1767 105 50.6842V93.3158C105 94.8233 104.395 96.2691 103.319 97.3351C102.243 98.4011 100.783 99 99.2609 99ZM102.13 50.6842C102.13 49.9304 101.828 49.2075 101.29 48.6745C100.752 48.1415 100.022 47.8421 99.2609 47.8421H44.7391C43.9781 47.8421 43.2482 48.1415 42.71 48.6745C42.1719 49.2075 41.8696 49.9304 41.8696 50.6842V59.2105H102.13V50.6842ZM102.13 62.0526H41.8696V93.3158C41.8696 94.0696 42.1719 94.7925 42.71 95.3255C43.2482 95.8585 43.9781 96.1579 44.7391 96.1579H99.2609C100.022 96.1579 100.752 95.8585 101.29 95.3255C101.828 94.7925 102.13 94.0696 102.13 93.3158V62.0526ZM96.3913 81.9474H93.5217C93.1412 81.9474 92.7763 81.7976 92.5072 81.5312C92.2381 81.2647 92.087 80.9032 92.087 80.5263V77.6842C92.087 77.3073 92.2381 76.9459 92.5072 76.6794C92.7763 76.4129 93.1412 76.2632 93.5217 76.2632H96.3913C96.7718 76.2632 97.1368 76.4129 97.4058 76.6794C97.6749 76.9459 97.8261 77.3073 97.8261 77.6842V80.5263C97.8261 80.9032 97.6749 81.2647 97.4058 81.5312C97.1368 81.7976 96.7718 81.9474 96.3913 81.9474ZM96.3913 72H93.5217C93.1412 72 92.7763 71.8503 92.5072 71.5838C92.2381 71.3173 92.087 70.9558 92.087 70.5789V67.7368C92.087 67.36 92.2381 66.9985 92.5072 66.732C92.7763 66.4655 93.1412 66.3158 93.5217 66.3158H96.3913C96.7718 66.3158 97.1368 66.4655 97.4058 66.732C97.6749 66.9985 97.8261 67.36 97.8261 67.7368V70.5789C97.8261 70.9558 97.6749 71.3173 97.4058 71.5838C97.1368 71.8503 96.7718 72 96.3913 72ZM84.913 81.9474H82.0435C81.663 81.9474 81.298 81.7976 81.0289 81.5312C80.7599 81.2647 80.6087 80.9032 80.6087 80.5263V77.6842C80.6087 77.3073 80.7599 76.9459 81.0289 76.6794C81.298 76.4129 81.663 76.2632 82.0435 76.2632H84.913C85.2936 76.2632 85.6585 76.4129 85.9276 76.6794C86.1967 76.9459 86.3478 77.3073 86.3478 77.6842V80.5263C86.3478 80.9032 86.1967 81.2647 85.9276 81.5312C85.6585 81.7976 85.2936 81.9474 84.913 81.9474ZM84.913 72H82.0435C81.663 72 81.298 71.8503 81.0289 71.5838C80.7599 71.3173 80.6087 70.9558 80.6087 70.5789V67.7368C80.6087 67.36 80.7599 66.9985 81.0289 66.732C81.298 66.4655 81.663 66.3158 82.0435 66.3158H84.913C85.2936 66.3158 85.6585 66.4655 85.9276 66.732C86.1967 66.9985 86.3478 67.36 86.3478 67.7368V70.5789C86.3478 70.9558 86.1967 71.3173 85.9276 71.5838C85.6585 71.8503 85.2936 72 84.913 72ZM73.4348 81.9474H70.5652C70.1847 81.9474 69.8197 81.7976 69.5507 81.5312C69.2816 81.2647 69.1304 80.9032 69.1304 80.5263V77.6842C69.1304 77.3073 69.2816 76.9459 69.5507 76.6794C69.8197 76.4129 70.1847 76.2632 70.5652 76.2632H73.4348C73.8153 76.2632 74.1803 76.4129 74.4493 76.6794C74.7184 76.9459 74.8696 77.3073 74.8696 77.6842V80.5263C74.8696 80.9032 74.7184 81.2647 74.4493 81.5312C74.1803 81.7976 73.8153 81.9474 73.4348 81.9474ZM73.4348 72H70.5652C70.1847 72 69.8197 71.8503 69.5507 71.5838C69.2816 71.3173 69.1304 70.9558 69.1304 70.5789V67.7368C69.1304 67.36 69.2816 66.9985 69.5507 66.732C69.8197 66.4655 70.1847 66.3158 70.5652 66.3158H73.4348C73.8153 66.3158 74.1803 66.4655 74.4493 66.732C74.7184 66.9985 74.8696 67.36 74.8696 67.7368V70.5789C74.8696 70.9558 74.7184 71.3173 74.4493 71.5838C74.1803 71.8503 73.8153 72 73.4348 72ZM61.9565 91.8947H59.087C58.7064 91.8947 58.3415 91.745 58.0724 91.4785C57.8033 91.212 57.6522 90.8506 57.6522 90.4737V87.6316C57.6522 87.2547 57.8033 86.8932 58.0724 86.6267C58.3415 86.3602 58.7064 86.2105 59.087 86.2105H61.9565C62.337 86.2105 62.702 86.3602 62.9711 86.6267C63.2401 86.8932 63.3913 87.2547 63.3913 87.6316V90.4737C63.3913 90.8506 63.2401 91.212 62.9711 91.4785C62.702 91.745 62.337 91.8947 61.9565 91.8947ZM61.9565 81.9474H59.087C58.7064 81.9474 58.3415 81.7976 58.0724 81.5312C57.8033 81.2647 57.6522 80.9032 57.6522 80.5263V77.6842C57.6522 77.3073 57.8033 76.9459 58.0724 76.6794C58.3415 76.4129 58.7064 76.2632 59.087 76.2632H61.9565C62.337 76.2632 62.702 76.4129 62.9711 76.6794C63.2401 76.9459 63.3913 77.3073 63.3913 77.6842V80.5263C63.3913 80.9032 63.2401 81.2647 62.9711 81.5312C62.702 81.7976 62.337 81.9474 61.9565 81.9474ZM61.9565 72H59.087C58.7064 72 58.3415 71.8503 58.0724 71.5838C57.8033 71.3173 57.6522 70.9558 57.6522 70.5789V67.7368C57.6522 67.36 57.8033 66.9985 58.0724 66.732C58.3415 66.4655 58.7064 66.3158 59.087 66.3158H61.9565C62.337 66.3158 62.702 66.4655 62.9711 66.732C63.2401 66.9985 63.3913 67.36 63.3913 67.7368V70.5789C63.3913 70.9558 63.2401 71.3173 62.9711 71.5838C62.702 71.8503 62.337 72 61.9565 72ZM50.4783 91.8947H47.6087C47.2282 91.8947 46.8632 91.745 46.5942 91.4785C46.3251 91.212 46.1739 90.8506 46.1739 90.4737V87.6316C46.1739 87.2547 46.3251 86.8932 46.5942 86.6267C46.8632 86.3602 47.2282 86.2105 47.6087 86.2105H50.4783C50.8588 86.2105 51.2237 86.3602 51.4928 86.6267C51.7619 86.8932 51.913 87.2547 51.913 87.6316V90.4737C51.913 90.8506 51.7619 91.212 51.4928 91.4785C51.2237 91.745 50.8588 91.8947 50.4783 91.8947ZM50.4783 81.9474H47.6087C47.2282 81.9474 46.8632 81.7976 46.5942 81.5312C46.3251 81.2647 46.1739 80.9032 46.1739 80.5263V77.6842C46.1739 77.3073 46.3251 76.9459 46.5942 76.6794C46.8632 76.4129 47.2282 76.2632 47.6087 76.2632H50.4783C50.8588 76.2632 51.2237 76.4129 51.4928 76.6794C51.7619 76.9459 51.913 77.3073 51.913 77.6842V80.5263C51.913 80.9032 51.7619 81.2647 51.4928 81.5312C51.2237 81.7976 50.8588 81.9474 50.4783 81.9474ZM70.5652 86.2105H73.4348C73.8153 86.2105 74.1803 86.3602 74.4493 86.6267C74.7184 86.8932 74.8696 87.2547 74.8696 87.6316V90.4737C74.8696 90.8506 74.7184 91.212 74.4493 91.4785C74.1803 91.745 73.8153 91.8947 73.4348 91.8947H70.5652C70.1847 91.8947 69.8197 91.745 69.5507 91.4785C69.2816 91.212 69.1304 90.8506 69.1304 90.4737V87.6316C69.1304 87.2547 69.2816 86.8932 69.5507 86.6267C69.8197 86.3602 70.1847 86.2105 70.5652 86.2105Z"
                    fill="#404040"
                  />
                </svg>

                <div className="text-[32px] text-[#404040] font-bold">
                  Appointment and School Trial
                </div>
              </div>
            </div>
            <div className="w-[540px] flex gap-x-[32px] grid-register">
              <div className="text-[28px] text-[#404040] font-bold mt-1">
                03
              </div>
              <div className="flex items-center  gap-x-[32px]">
                <svg
                  width="144"
                  height="144"
                  viewBox="0 0 144 144"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="144" height="144" rx="36" fill="#EEE7D9" />
                  <path
                    d="M88.1969 87.8391C87.7195 87.8391 87.2617 88.0287 86.9241 88.3663C86.5865 88.7038 86.3969 89.1617 86.3969 89.6391V95.0391H50.3969V51.8391H57.5969V53.6391C57.5969 54.1165 57.7865 54.5743 58.1241 54.9119C58.4616 55.2494 58.9195 55.4391 59.3969 55.4391H77.3969C77.8743 55.4391 78.3321 55.2494 78.6697 54.9119C79.0072 54.5743 79.1969 54.1165 79.1969 53.6391V51.8391H86.3969V53.6391C86.3969 54.1165 86.5865 54.5743 86.9241 54.9119C87.2617 55.2494 87.7195 55.4391 88.1969 55.4391C88.6743 55.4391 89.1321 55.2494 89.4697 54.9119C89.8072 54.5743 89.9969 54.1165 89.9969 53.6391V50.0391C89.9969 49.5617 89.8072 49.1038 89.4697 48.7663C89.1321 48.4287 88.6743 48.2391 88.1969 48.2391H79.1969V46.4391C79.1969 45.0069 78.628 43.6334 77.6153 42.6207C76.6026 41.608 75.229 41.0391 73.7969 41.0391H62.9969C61.5647 41.0391 60.1912 41.608 59.1785 42.6207C58.1658 43.6334 57.5969 45.0069 57.5969 46.4391V48.2391H48.5969C48.1195 48.2391 47.6616 48.4287 47.3241 48.7663C46.9865 49.1038 46.7969 49.5617 46.7969 50.0391V96.8391C46.7969 97.3165 46.9865 97.7743 47.3241 98.1119C47.6616 98.4494 48.1195 98.6391 48.5969 98.6391H88.1969C88.6743 98.6391 89.1321 98.4494 89.4697 98.1119C89.8072 97.7743 89.9969 97.3165 89.9969 96.8391V89.6391C89.9969 89.1617 89.8072 88.7038 89.4697 88.3663C89.1321 88.0287 88.6743 87.8391 88.1969 87.8391ZM61.1969 46.4391C61.1969 45.9617 61.3865 45.5038 61.7241 45.1663C62.0616 44.8287 62.5195 44.6391 62.9969 44.6391H73.7969C74.2743 44.6391 74.7321 44.8287 75.0697 45.1663C75.4072 45.5038 75.5969 45.9617 75.5969 46.4391V51.8391H61.1969V46.4391ZM103.871 63.1647L96.6713 55.9647C96.5041 55.797 96.3054 55.664 96.0868 55.5733C95.8681 55.4826 95.6336 55.4358 95.3969 55.4358C95.1601 55.4358 94.9257 55.4826 94.707 55.5733C94.4883 55.664 94.2897 55.797 94.1225 55.9647L72.5225 77.5647C72.3554 77.7321 72.223 77.9309 72.1328 78.1495C72.0427 78.3682 71.9965 78.6025 71.9969 78.8391V86.0391C71.9969 86.5165 72.1865 86.9743 72.5241 87.3119C72.8616 87.6494 73.3195 87.8391 73.7969 87.8391H80.9969C81.2334 87.8395 81.4677 87.7933 81.6864 87.7031C81.9051 87.6129 82.1038 87.4805 82.2713 87.3135L103.871 65.7135C104.039 65.5463 104.172 65.3476 104.263 65.1289C104.353 64.9103 104.4 64.6758 104.4 64.4391C104.4 64.2023 104.353 63.9679 104.263 63.7492C104.172 63.5305 104.039 63.3319 103.871 63.1647ZM75.5969 84.2391V79.5843L95.3969 59.7843L100.052 64.4391L80.2517 84.2391H75.5969ZM68.3969 86.0391C68.3969 86.5165 68.2072 86.9743 67.8697 87.3119C67.5321 87.6494 67.0743 87.8391 66.5969 87.8391H59.3969C58.9195 87.8391 58.4616 87.6494 58.1241 87.3119C57.7865 86.9743 57.5969 86.5165 57.5969 86.0391C57.5969 85.5617 57.7865 85.1038 58.1241 84.7663C58.4616 84.4287 58.9195 84.2391 59.3969 84.2391H66.5969C67.0743 84.2391 67.5321 84.4287 67.8697 84.7663C68.2072 85.1038 68.3969 85.5617 68.3969 86.0391ZM68.3969 75.2391C68.3969 75.7164 68.2072 76.1743 67.8697 76.5119C67.5321 76.8494 67.0743 77.0391 66.5969 77.0391H59.3969C58.9195 77.0391 58.4616 76.8494 58.1241 76.5119C57.7865 76.1743 57.5969 75.7164 57.5969 75.2391C57.5969 74.7617 57.7865 74.3038 58.1241 73.9663C58.4616 73.6287 58.9195 73.4391 59.3969 73.4391H66.5969C67.0743 73.4391 67.5321 73.6287 67.8697 73.9663C68.2072 74.3038 68.3969 74.7617 68.3969 75.2391ZM77.3969 66.2391H59.3969C58.9195 66.2391 58.4616 66.0494 58.1241 65.7119C57.7865 65.3743 57.5969 64.9165 57.5969 64.4391C57.5969 63.9617 57.7865 63.5038 58.1241 63.1663C58.4616 62.8287 58.9195 62.6391 59.3969 62.6391H77.3969C77.8743 62.6391 78.3321 62.8287 78.6697 63.1663C79.0072 63.5038 79.1969 63.9617 79.1969 64.4391C79.1969 64.9165 79.0072 65.3743 78.6697 65.7119C78.3321 66.0494 77.8743 66.2391 77.3969 66.2391Z"
                    fill="#404040"
                  />
                </svg>

                <div className="text-[32px] text-[#404040] font-bold">
                  Registration and document review
                </div>
              </div>
            </div>
            <div className="w-[540px] flex gap-x-[32px] grid-register justify-self-end">
              <div className="text-[28px] text-[#404040] font-bold mt-1">
                04
              </div>
              <div className="flex items-center  gap-x-[32px]">
                <svg
                  width="144"
                  height="144"
                  viewBox="0 0 144 144"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="144" height="144" rx="36" fill="#EEE7D9" />
                  <path
                    d="M69.6042 47.8972H47.9742C47.3885 47.8989 46.8272 48.13 46.4131 48.54C45.9989 48.95 45.7654 49.5055 45.7637 50.0853V54.9759C45.7654 55.5557 45.9989 56.1113 46.4131 56.5213C46.8272 56.9313 47.3885 57.1624 47.9742 57.1641H69.6042C70.1905 57.1641 70.7527 56.9336 71.1673 56.5232C71.5818 56.1128 71.8147 55.5563 71.8147 54.9759V50.0853C71.8147 49.505 71.5818 48.9484 71.1673 48.5381C70.7527 48.1277 70.1905 47.8972 69.6042 47.8972ZM69.6042 54.9759H47.9742V50.0853H69.6042V54.9759Z"
                    fill="#404040"
                  />
                  <path
                    d="M49.2563 60.8731C48.5655 60.8731 47.8903 61.0759 47.3159 61.4558C46.7416 61.8356 46.2939 62.3756 46.0295 63.0074C45.7652 63.6391 45.696 64.3343 45.8308 65.0049C45.9656 65.6756 46.2982 66.2916 46.7867 66.7751C47.2751 67.2586 47.8974 67.5879 48.5749 67.7213C49.2524 67.8547 49.9547 67.7863 50.5929 67.5246C51.2311 67.2629 51.7766 66.8198 52.1603 66.2512C52.5441 65.6827 52.7489 65.0142 52.7489 64.3304C52.7469 63.4141 52.3783 62.5359 51.7237 61.8879C51.0692 61.24 50.182 60.8751 49.2563 60.8731ZM49.2563 65.5996C49.0027 65.5996 48.7549 65.5251 48.544 65.3857C48.3332 65.2462 48.1688 65.048 48.0718 64.8161C47.9748 64.5842 47.9494 64.329 47.9988 64.0828C48.0483 63.8366 48.1704 63.6105 48.3497 63.433C48.529 63.2555 48.7575 63.1346 49.0062 63.0857C49.2549 63.0367 49.5127 63.0618 49.747 63.1579C49.9812 63.2539 50.1815 63.4166 50.3223 63.6253C50.4632 63.834 50.5384 64.0794 50.5384 64.3304C50.5381 64.6669 50.403 64.9896 50.1626 65.2275C49.9222 65.4655 49.5963 65.5993 49.2563 65.5996Z"
                    fill="#404040"
                  />
                  <path
                    d="M58.7947 60.8731C58.1035 60.8709 57.4271 61.0718 56.8513 61.4504C56.2755 61.829 55.8261 62.3682 55.5601 62.9998C55.2941 63.6313 55.2233 64.3268 55.3568 64.9982C55.4903 65.6696 55.8221 66.2866 56.3101 66.7712C56.7981 67.2558 57.4204 67.5862 58.0982 67.7205C58.776 67.8548 59.4789 67.787 60.1177 67.5256C60.7565 67.2643 61.3027 66.8211 61.6869 66.2523C62.0712 65.6835 62.2763 65.0147 62.2763 64.3304C62.2743 63.416 61.9072 62.5394 61.255 61.8918C60.6028 61.2442 59.7185 60.878 58.7947 60.8731ZM58.7947 65.5996C58.5407 65.6017 58.2917 65.5291 58.0795 65.391C57.8672 65.2529 57.7011 65.0554 57.6024 64.8237C57.5036 64.592 57.4767 64.3365 57.5249 64.0896C57.5731 63.8427 57.6943 63.6155 57.8732 63.4369C58.052 63.2583 58.2805 63.1364 58.5295 63.0865C58.7785 63.0367 59.0368 63.0611 59.2717 63.1569C59.5067 63.2526 59.7076 63.4153 59.8489 63.6242C59.9903 63.8331 60.0658 64.0789 60.0658 64.3304C60.0655 64.665 59.9319 64.986 59.6939 65.2237C59.4559 65.4613 59.1328 65.5964 58.7947 65.5996Z"
                    fill="#404040"
                  />
                  <path
                    d="M68.3332 60.8731C67.6419 60.8709 66.9656 61.0718 66.3898 61.4504C65.8139 61.829 65.3646 62.3682 65.0985 62.9998C64.8325 63.6313 64.7617 64.3268 64.8952 64.9982C65.0288 65.6696 65.3605 66.2866 65.8485 66.7712C66.3365 67.2558 66.9588 67.5862 67.6367 67.7205C68.3145 67.8548 69.0173 67.787 69.6561 67.5256C70.295 67.2643 70.8411 66.8211 71.2253 66.2523C71.6096 65.6835 71.8147 65.0147 71.8147 64.3304C71.8147 63.4154 71.4483 62.5376 70.7957 61.8896C70.1431 61.2415 69.2575 60.876 68.3332 60.8731ZM68.3332 65.5996C68.0791 65.6017 67.8302 65.5291 67.6179 65.391C67.4056 65.2529 67.2395 65.0554 67.1408 64.8237C67.0421 64.592 67.0151 64.3365 67.0633 64.0896C67.1115 63.8427 67.2327 63.6155 67.4116 63.4369C67.5905 63.2583 67.8189 63.1364 68.0679 63.0865C68.3169 63.0367 68.5752 63.0611 68.8102 63.1569C69.0451 63.2526 69.246 63.4153 69.3873 63.6242C69.5287 63.8331 69.6042 64.0789 69.6042 64.3304C69.6039 64.665 69.4703 64.986 69.2323 65.2237C68.9943 65.4613 68.6712 65.5964 68.3332 65.5996Z"
                    fill="#404040"
                  />
                  <path
                    d="M49.2563 70.3151C48.5671 70.3162 47.8937 70.5194 47.3211 70.8991C46.7485 71.2788 46.3024 71.818 46.0391 72.4485C45.7759 73.079 45.7073 73.7726 45.842 74.4417C45.9767 75.1108 46.3087 75.7254 46.7961 76.2078C47.2834 76.6902 47.9043 77.0189 48.5802 77.1522C49.2561 77.2856 49.9568 77.2177 50.5938 76.9571C51.2307 76.6965 51.7754 76.2549 52.159 75.6881C52.5426 75.1213 52.7479 74.4547 52.7489 73.7724C52.7469 72.8561 52.3783 71.9779 51.7237 71.33C51.0692 70.682 50.182 70.3171 49.2563 70.3151ZM49.2563 75.0306C49.0038 75.0296 48.7574 74.9544 48.548 74.8146C48.3387 74.6749 48.176 74.4768 48.0803 74.2455C47.9847 74.0142 47.9606 73.76 48.0109 73.5151C48.0612 73.2702 48.1838 73.0455 48.3631 72.8696C48.5424 72.6936 48.7704 72.5742 49.0182 72.5265C49.2661 72.4788 49.5226 72.5049 49.7555 72.6016C49.9883 72.6982 50.187 72.8611 50.3263 73.0695C50.4657 73.2779 50.5395 73.5225 50.5384 73.7724C50.5358 74.1072 50.3995 74.4274 50.1593 74.6631C49.9191 74.8988 49.5945 75.0309 49.2563 75.0306Z"
                    fill="#404040"
                  />
                  <path
                    d="M58.7947 70.3151C58.1051 70.314 57.4305 70.5154 56.8565 70.8938C56.2824 71.2722 55.8346 71.8106 55.5697 72.4409C55.3047 73.0713 55.2346 73.7652 55.368 74.435C55.5015 75.1048 55.8326 75.7204 56.3196 76.2039C56.8065 76.6874 57.4273 77.0172 58.1035 77.1514C58.7797 77.2857 59.481 77.2184 60.1186 76.9581C60.7562 76.6979 61.3015 76.2563 61.6856 75.6893C62.0696 75.1222 62.2752 74.4551 62.2763 73.7724C62.2743 72.858 61.9072 71.9814 61.255 71.3338C60.6028 70.6862 59.7185 70.32 58.7947 70.3151ZM58.7947 75.0306C58.5418 75.0317 58.2942 74.9584 58.0834 74.8199C57.8727 74.6815 57.7082 74.4842 57.6109 74.2531C57.5136 74.022 57.4878 73.7674 57.5369 73.5218C57.586 73.2761 57.7077 73.0505 57.8865 72.8734C58.0654 72.6964 58.2934 72.5759 58.5415 72.5273C58.7897 72.4787 59.0468 72.5042 59.2803 72.6005C59.5138 72.6969 59.7131 72.8597 59.853 73.0683C59.9928 73.277 60.0669 73.522 60.0658 73.7724C60.0632 74.1053 59.9284 74.4239 59.6906 74.6593C59.4528 74.8947 59.131 75.0281 58.7947 75.0306Z"
                    fill="#404040"
                  />
                  <path
                    d="M68.3332 70.3151C67.6435 70.314 66.969 70.5154 66.3949 70.8938C65.8208 71.2722 65.373 71.8106 65.1081 72.4409C64.8431 73.0713 64.773 73.7652 64.9065 74.435C65.0399 75.1048 65.3711 75.7204 65.858 76.2039C66.3449 76.6874 66.9657 77.0172 67.6419 77.1514C68.3181 77.2857 69.0194 77.2184 69.657 76.9581C70.2946 76.6979 70.8399 76.2563 71.224 75.6893C71.6081 75.1222 71.8136 74.4551 71.8147 73.7724C71.8147 72.8574 71.4483 71.9796 70.7957 71.3316C70.1431 70.6835 69.2575 70.318 68.3332 70.3151ZM68.3332 75.0306C68.0802 75.0317 67.8326 74.9584 67.6219 74.8199C67.4111 74.6815 67.2466 74.4842 67.1493 74.2531C67.052 74.022 67.0262 73.7674 67.0753 73.5218C67.1244 73.2761 67.2461 73.0505 67.425 72.8734C67.6038 72.6964 67.8318 72.5759 68.0799 72.5273C68.3281 72.4787 68.5852 72.5042 68.8187 72.6005C69.0522 72.6969 69.2515 72.8597 69.3914 73.0683C69.5312 73.277 69.6053 73.522 69.6042 73.7724C69.6016 74.1053 69.4669 74.4239 69.2291 74.6593C68.9912 74.8947 68.6695 75.0281 68.3332 75.0306Z"
                    fill="#404040"
                  />
                  <path
                    d="M49.2563 79.7571C48.5671 79.7582 47.8937 79.9614 47.3211 80.3411C46.7485 80.7208 46.3024 81.26 46.0391 81.8905C45.7759 82.521 45.7073 83.2146 45.842 83.8837C45.9767 84.5528 46.3087 85.1674 46.7961 85.6498C47.2834 86.1322 47.9043 86.4609 48.5802 86.5942C49.2561 86.7276 49.9568 86.6597 50.5938 86.3991C51.2307 86.1385 51.7754 85.6969 52.159 85.1301C52.5426 84.5633 52.7479 83.8967 52.7489 83.2144C52.7489 82.2975 52.381 81.4181 51.726 80.7697C51.071 80.1214 50.1826 79.7571 49.2563 79.7571ZM49.2563 84.4726C49.0038 84.4716 48.7574 84.3964 48.548 84.2566C48.3387 84.1169 48.176 83.9188 48.0803 83.6875C47.9847 83.4562 47.9606 83.202 48.0109 82.9571C48.0612 82.7122 48.1838 82.4875 48.3631 82.3116C48.5424 82.1356 48.7704 82.0162 49.0182 81.9685C49.2661 81.9208 49.5226 81.947 49.7555 82.0436C49.9883 82.1402 50.187 82.3031 50.3263 82.5115C50.4657 82.7199 50.5395 82.9645 50.5384 83.2144C50.5358 83.5492 50.3995 83.8694 50.1593 84.1051C49.9191 84.3408 49.5945 84.4729 49.2563 84.4726Z"
                    fill="#404040"
                  />
                  <path
                    d="M58.7947 79.7571C58.1051 79.756 57.4305 79.9574 56.8565 80.3358C56.2824 80.7142 55.8346 81.2526 55.5697 81.8829C55.3047 82.5133 55.2346 83.2072 55.368 83.877C55.5015 84.5468 55.8326 85.1624 56.3196 85.6459C56.8065 86.1294 57.4273 86.4592 58.1035 86.5934C58.7797 86.7277 59.481 86.6604 60.1186 86.4002C60.7562 86.1399 61.3015 85.6983 61.6856 85.1313C62.0696 84.5642 62.2752 83.8972 62.2763 83.2144C62.2763 82.2994 61.9099 81.4217 61.2573 80.7736C60.6047 80.1255 59.7191 79.76 58.7947 79.7571ZM58.7947 84.4727C58.5418 84.4737 58.2942 84.4004 58.0834 84.262C57.8727 84.1235 57.7082 83.9262 57.6109 83.6951C57.5136 83.464 57.4878 83.2094 57.5369 82.9638C57.586 82.7182 57.7077 82.4925 57.8865 82.3154C58.0654 82.1384 58.2934 82.0179 58.5415 81.9693C58.7897 81.9207 59.0468 81.9462 59.2803 82.0425C59.5138 82.1389 59.7131 82.3017 59.853 82.5103C59.9928 82.719 60.0669 82.9641 60.0658 83.2144C60.0632 83.5473 59.9284 83.8659 59.6906 84.1013C59.4528 84.3367 59.131 84.4701 58.7947 84.4727Z"
                    fill="#404040"
                  />
                  <path
                    d="M49.2563 89.1991C48.5666 89.2002 47.8928 89.4037 47.3199 89.7839C46.7471 90.1641 46.301 90.7039 46.0381 91.3351C45.7751 91.9662 45.7072 92.6604 45.8428 93.3298C45.9785 93.9992 46.3115 94.6137 46.8 95.0957C47.2885 95.5777 47.9103 95.9054 48.587 96.0376C49.2636 96.1697 49.9646 96.1003 50.6014 95.838C51.2382 95.5757 51.7821 95.1324 52.1643 94.5642C52.5466 93.9959 52.75 93.3282 52.7489 92.6455C52.7466 91.7303 52.3775 90.8534 51.7227 90.2072C51.0679 89.5611 50.1809 89.1985 49.2563 89.1991ZM49.2563 93.9147C49.0043 93.9136 48.7583 93.8387 48.5492 93.6994C48.3401 93.5601 48.1773 93.3627 48.0814 93.1321C47.9855 92.9014 47.9606 92.6477 48.0101 92.4031C48.0595 92.1585 48.181 91.9338 48.3592 91.7575C48.5374 91.5811 48.7643 91.4608 49.0114 91.4119C49.2586 91.3629 49.5148 91.3875 49.7478 91.4825C49.9809 91.5774 50.1803 91.7386 50.321 91.9455C50.4617 92.1525 50.5373 92.3961 50.5384 92.6455C50.5381 92.982 50.403 93.3047 50.1626 93.5426C49.9222 93.7806 49.5963 93.9144 49.2563 93.9147Z"
                    fill="#404040"
                  />
                  <path
                    d="M58.7947 89.1991C58.1046 89.198 57.4296 89.3997 56.8553 89.7786C56.281 90.1575 55.8332 90.6965 55.5686 91.3275C55.304 91.9585 55.2345 92.653 55.3688 93.3231C55.5032 93.9932 55.8354 94.6087 56.3235 95.0918C56.8115 95.5749 57.4333 95.9038 58.1103 96.0368C58.7872 96.1698 59.4888 96.101 60.1262 95.839C60.7636 95.5771 61.3082 95.1338 61.6909 94.5653C62.0737 93.9968 62.2774 93.3287 62.2763 92.6455C62.274 91.7322 61.9064 90.8569 61.254 90.2111C60.6016 89.5653 59.7174 89.2014 58.7947 89.1991ZM58.7947 93.9147C58.4562 93.9147 58.1315 93.7815 57.8921 93.5445C57.6527 93.3076 57.5182 92.9861 57.5182 92.651C57.5182 92.3158 57.6527 91.9944 57.8921 91.7574C58.1315 91.5204 58.4562 91.3873 58.7947 91.3873C59.1333 91.3873 59.458 91.5204 59.6974 91.7574C59.9368 91.9944 60.0713 92.3158 60.0713 92.651C60.0713 92.9861 59.9368 93.3076 59.6974 93.5445C59.458 93.7815 59.1333 93.9147 58.7947 93.9147Z"
                    fill="#404040"
                  />
                  <path
                    d="M69.6042 79.7571H67.0511C66.4653 79.7588 65.9041 79.9899 65.4899 80.3999C65.0757 80.8099 64.8423 81.3655 64.8405 81.9453V93.9147C64.8423 94.4945 65.0757 95.05 65.4899 95.46C65.9041 95.87 66.4653 96.1011 67.0511 96.1028H69.6042C70.1905 96.1028 70.7527 95.8723 71.1673 95.4619C71.5818 95.0516 71.8147 94.495 71.8147 93.9147V81.9453C71.8147 81.365 71.5818 80.8084 71.1673 80.398C70.7527 79.9876 70.1905 79.7571 69.6042 79.7571ZM69.6042 93.9147H67.0511V81.9453H69.6042V93.9147Z"
                    fill="#404040"
                  />
                  <path
                    d="M99.3137 49.0788H76.5895V47.4705C76.5871 46.0203 76.0042 44.6302 74.9683 43.6048C73.9324 42.5794 72.5281 42.0023 71.0632 42H46.5263C45.0606 42 43.655 42.5764 42.6186 43.6023C41.5822 44.6282 41 46.0196 41 47.4705V96.5295C41 97.9804 41.5822 99.3718 42.6186 100.398C43.655 101.424 45.0606 102 46.5263 102H71.0632C72.5281 101.998 73.9324 101.421 74.9683 100.395C76.0042 99.3698 76.5871 97.9797 76.5895 96.5295V94.9212H99.3137C100.555 94.9212 101.745 94.434 102.624 93.5664C103.502 92.6988 103.997 91.5216 104 90.2932V53.7068C103.997 52.4784 103.502 51.3012 102.624 50.4336C101.745 49.566 100.555 49.0788 99.3137 49.0788ZM74.3789 96.5295C74.3789 97.4001 74.0296 98.2349 73.4078 98.8505C72.7859 99.466 71.9426 99.8118 71.0632 99.8118H46.5263C45.6469 99.8118 44.8035 99.466 44.1817 98.8505C43.5599 98.2349 43.2105 97.4001 43.2105 96.5295V47.4705C43.2105 46.5999 43.5599 45.7651 44.1817 45.1495C44.8035 44.534 45.6469 44.1882 46.5263 44.1882H71.0632C71.4986 44.1882 71.9298 44.2731 72.3321 44.438C72.7343 44.603 73.0999 44.8448 73.4078 45.1495C73.7157 45.4543 73.9599 45.8162 74.1265 46.2144C74.2932 46.6126 74.3789 47.0394 74.3789 47.4705V96.5295ZM81.53 92.733H76.5895V51.267H81.53V92.733ZM101.789 90.2932C101.789 90.6144 101.724 90.9323 101.6 91.2287C101.475 91.5252 101.292 91.7944 101.062 92.021C100.832 92.2476 100.56 92.4271 100.26 92.5493C99.9596 92.6715 99.6381 92.7339 99.3137 92.733H83.7405V51.267H99.3137C99.6381 51.2661 99.9596 51.3285 100.26 51.4507C100.56 51.5729 100.832 51.7524 101.062 51.979C101.292 52.2056 101.475 52.4748 101.6 52.7713C101.724 53.0677 101.789 53.3856 101.789 53.7068V90.2932Z"
                    fill="#404040"
                  />
                  <path
                    d="M99.2363 76.7155C99.2363 75.0166 98.5545 73.3872 97.3409 72.1859C96.1273 70.9845 94.4813 70.3096 92.765 70.3096C91.0487 70.3096 89.4027 70.9845 88.1891 72.1859C86.9755 73.3872 86.2937 75.0166 86.2937 76.7155C86.295 77.9801 86.6801 79.2151 87.3989 80.2604C86.6803 81.3017 86.2951 82.5332 86.2937 83.7943C86.2937 85.4933 86.9755 87.1226 88.1891 88.324C89.4027 89.5253 91.0487 90.2002 92.765 90.2002C94.4813 90.2002 96.1273 89.5253 97.3409 88.324C98.5545 87.1226 99.2363 85.4933 99.2363 83.7943C99.2349 82.5332 98.8498 81.3017 98.1311 80.2604C98.8499 79.2151 99.235 77.9801 99.2363 76.7155ZM92.7595 88.0175C91.6299 88.0146 90.5476 87.5684 89.7499 86.7767C88.9522 85.985 88.5042 84.9125 88.5042 83.7943C88.498 82.7606 88.8892 81.7632 89.5984 81.0044V80.9934L89.6095 80.9825C90.006 80.542 90.4921 80.1895 91.0359 79.9482C91.5798 79.7068 92.169 79.5821 92.765 79.5821C93.361 79.5821 93.9502 79.7068 94.4941 79.9482C95.0379 80.1895 95.524 80.542 95.9205 80.9825V80.9934C95.9316 80.9934 95.9316 80.9934 95.9316 81.0044C96.6408 81.7632 97.032 82.7606 97.0258 83.7943C97.0252 84.9142 96.5755 85.988 95.7756 86.7799C94.9756 87.5718 93.8908 88.0169 92.7595 88.0175ZM96.5616 78.6193C96.3206 78.4455 96.0655 78.2918 95.799 78.1597C95.7351 78.1191 95.6686 78.0826 95.6 78.0503C95.3347 77.93 95.0584 77.8096 94.7711 77.7112C94.4843 77.6252 94.1928 77.5558 93.8979 77.5033L93.6768 77.4705C93.3734 77.4228 93.0667 77.3972 92.7595 77.3939C92.4559 77.3972 92.1529 77.4228 91.8532 77.4705L91.6321 77.5033C91.337 77.5545 91.0453 77.6239 90.7589 77.7112H90.7479C90.465 77.8119 90.1882 77.9288 89.9189 78.0613C89.851 78.083 89.7874 78.1164 89.7311 78.1597C89.4666 78.2894 89.215 78.4432 88.9795 78.6193H88.9574C88.656 78.0292 88.5007 77.3767 88.5042 76.7155C88.5042 75.5969 88.9531 74.5241 89.7522 73.7332C90.5512 72.9422 91.635 72.4978 92.765 72.4978C93.895 72.4978 94.9788 72.9422 95.7778 73.7332C96.5769 74.5241 97.0258 75.5969 97.0258 76.7155C97.0256 77.3776 96.8665 78.03 96.5616 78.6193Z"
                    fill="#404040"
                  />
                </svg>

                <div className="text-[32px] text-[#404040] font-bold">
                  Appointment and School Trial
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-dvh w-[110%] section-before-footer clip-mask"
          // style={{
          //   clipPath: "inset(50% 20% 0% 20% round 1000% 1000% 0% 0%)",
          // }}
        >
          <div className="z-[-1] w-[300px] h-[300px] absolute bottom-[-70%] section"></div>
          <div className="h-dvh w-full bg-soft-tosca flex justify-center items-center  relative section-before-footer ">
            <div className="flex flex-col gap-y-[50px] ">
              <div className="font-helixa text-[6.667vw] leading-[6.667vw] text-center text-white-ivory text-before-footer">
                <div className="text-under-before-footer">
                  Take the first step
                </div>
                <div className="text-under-before-footer">
                  {" "}
                  for a brighter future
                </div>
              </div>
            </div>

            <div className="h-auto w-full flex justify-center absolute left-0 bottom-0 img-container-before-footer">
              <div className="flex w-full justify-evenly items-end ">
                <img
                  src="assets/images/home/img-before-footer1.png"
                  alt=""
                  width={450}
                />
                <img src="assets/images/home/Image3.png" alt="" width={375} />
                <img
                  src="assets/images/home/img-before-footer2.png"
                  alt=""
                  width={415}
                />
              </div>
            </div>
            <div className="w-full flex justify-center absolute left-0 bottom-[30%] button-register opacity-0 translate-y-full">
              <Button
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
      </section>

      <Footer />
    </div>
  );
}
