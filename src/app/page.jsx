"use client";

import Header from "./components/header/Header";

import Footer from "./components/footer/footer";

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

  const [tlMobile, setTlMobile] = useState(false);
  const small = useMediaQuery("(max-width: 640px)");

  const videoRef = useRef(null);
  const cursorRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.translateX = "-50%";
      cursorRef.current.style.translateY = "-50%";
    }

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
  }, [cursorRef.current]);

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
      <div>
        <Cursor
          cursorRef={cursorRef}
          videoPause={videoPause}
          cursorText={cursorText}
        />
        <Header navbarColor={navbarColor} />
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

        <div>{!small ? <Footer /> : <FooterMobile />}</div>
      </div>
    </>
  );
}
