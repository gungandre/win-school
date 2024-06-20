"use client";

import Header from "./components/header/Header";

import Footer from "./components/footer/Footer";

import useNavColor from "./hook/useNavColor";
import { Cursor } from "./components/cursor/Cursor";
import { useState, useRef, useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Preloader from "./components/preloader/Preloader";

import Hero from "./components/homepage/hero";
import Section2 from "./components/homepage/section-2";
import SectionAfterSwiper from "./components/homepage/section-after-swiper";
import Section4 from "./components/homepage/section4";
import SectionVideo from "./components/homepage/section-video";
import Section6 from "./components/homepage/section-6";
import Section7 from "./components/homepage/section-7";
import Section8 from "./components/homepage/section-8";
import Section9 from "./components/homepage/section-9";
import { useContext } from "react";
import { preloaderContext } from "./context/preloaderContext";

import HeroMobile from "./components/homepage/hero-mobile";
import HeaderMobile from "./components/header/header-mobile";

import Section2Mobile from "./components/homepage/section-2-mobile";
import Section4mobile from "./components/homepage/section-4-mobile";

import SectionVideoMobile from "./components/homepage/section-video-mobile";
import Section6Mobile from "./components/homepage/section-6-mobile";
import Section7Mobile from "./components/homepage/section-7-mobile";
import WinnerClasses from "./components/homepage/WinnerClasses";
import BeforeFooterMobile from "./components/homepage/before-footer-mobile";
import FooterMobile from "./components/homepage/FooterMobile";
import useMediaQuery from "./utils/useMediaQuery";

export default function Home() {
  gsap.registerPlugin(SplitText);

  const [navbarAnimationPlay, setNavbarAnimationPlay] = useState(false);

  const [cursorText, setCursorText] = useState(null);
  const [videoPause, setVideoPause] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const { preloaderComplete } = useContext(preloaderContext);
  const [tlMobile, setTlMobile] = useState(false);
  const small = useMediaQuery("(max-width: 640px)");

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

  useEffect(() => {
    if (preloaderComplete) {
      gsap.to(".leaders", {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power1.out",
      });

      gsap.to(".school", {
        y: 0,
        duration: 1,
        stagger: 0.03,
        ease: "power1.out",
      });

      gsap.to(".animation-image", {
        transform: "translateY(0)",
        duration: 1,
        stagger: 0.1,
        ease: "power1.out",
      });
      gsap.to([".hero-1", ".hero-2"], {
        transform: "translateY(0)",
        duration: 1,
        ease: "power1.out",
      });
    }
  }, [preloaderComplete]);

  useGSAP(() => {
    const weAreLeading = new SplitText(".we-are-leading", { type: "lines" });

    ScrollTrigger.create({
      trigger: ".section-we-are-leading",

      onEnter: () => {
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
            videoRef.current.play().catch((error) => {
              // Tangani kesalahan jika autoplay tidak berhasil

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
          end: "bottom end",

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

    if (wText) {
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
    }

    setTlMobile(true);
  }, [small, preloaderComplete]);

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

  const videoPlayback = () => {
    if (!videoPause) {
      videoRef.current.pause();
      setVideoPause(!videoPause);
    } else {
      videoRef.current.play();
      setVideoPause(!videoPause);
    }
  };

  return (
    <>
      {/* {!preloaderComplete && <Preloader setStopScroll={setStopScroll} />} */}

      {small ? (
        <>
          <HeaderMobile />
          <HeroMobile />
          <Section2Mobile />

          <SectionAfterSwiper />
          <Section4mobile />

          <SectionVideoMobile />

          <Section6Mobile tlMobile={tlMobile} />
          <Section7Mobile />

          <WinnerClasses />
          <BeforeFooterMobile />
          <FooterMobile />
        </>
      ) : (
        <div>
          <Cursor
            cursorRef={cursorRef}
            videoPause={videoPause}
            cursorText={cursorText}
          />
          <Header
            navbarAnimationPlay={preloaderComplete}
            navbarColor={navbarColor}
          />
          <Hero />
          <Section2 />

          <SectionAfterSwiper />
          <Section4 />

          <SectionVideo
            cursorLeave={cursorLeave}
            videoRef={videoRef}
            videoPlayback={videoPlayback}
            cursorHover={cursorHover}
          />
          <Section6 />
          <Section7 />

          <Section8 cursorHover={cursorHover} cursorLeave={cursorLeave} />
          <Section9 />

          <Footer />
        </div>
      )}
    </>
  );
}
