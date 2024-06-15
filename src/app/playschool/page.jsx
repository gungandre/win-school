"use client";

import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/playschool/Hero";
import Section2 from "../components/playschool/section-2";
import Section3 from "../components/playschool/section-3";
import Section4 from "../components/playschool/section-4";

import BeforeFooter from "../components/playschool/before-footer";
// import Footer from "../components/footer/Footer";
import { Cursor } from "../components/cursor/Cursor";
import { useRef } from "react";

import gsap from "gsap";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import Footer2 from "../components/footer/footer-2";
import useNavColor from "../hook/useNavColor";

const page = () => {
  const [onHover, setOnHover] = useState(false);
  const [tlComplete, setTlComplete] = useState(false);

  const navColorArray = [
    "#19918E",
    "#19918E",
    "#19918E",
    "#19918E",
    "#FFFBF3",
    "#FFFBF3",
  ];
  const { navbarColor } = useNavColor(navColorArray, ".section");

  const cursorRef = useRef(null);
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

  if (onHover) {
    const cursorHover = () => {
      gsap.to(cursorRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
      });
    };

    cursorHover();
  } else {
    const cursorLeave = () => {
      gsap.to(cursorRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
      });
    };

    cursorLeave();
  }

  return (
    <>
      <Cursor cursorRef={cursorRef} cursorText={"MORE"} />

      <Header navbarAnimationPlay={true} navbarColor={navbarColor} />
      <Hero setTlComplete={setTlComplete} />
      <Section2 setTlComplete={setTlComplete} />
      <Section3 setOnHover={setOnHover} />

      <Section4 />
      <BeforeFooter tlComplete={tlComplete} />

      <Footer2 tlComplete={tlComplete} />
    </>
  );
};

export default page;
