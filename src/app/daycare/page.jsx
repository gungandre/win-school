"use client";

import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/daycare/Hero";
import Section2 from "../components/daycare/section-2";
import Section3 from "../components/daycare/section-3";
import Section4 from "../components/daycare/section-4";

import BeforeFooter from "../components/daycare/before-footer";
// import Footer from "../components/footer/Footer";

import { useRef } from "react";

import gsap from "gsap";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import Footer from "../components/footer/footer-2";
import useNavColor from "../hook/useNavColor";

const page = () => {
  const [onHover, setOnHover] = useState(false);

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

  return (
    <>
      <Header navbarAnimationPlay={true} navbarColor={navbarColor} />
      <Hero />
      <Section2 />

      <Section3 setOnHover={setOnHover} />

      <Section4 />
      <BeforeFooter />

      <Footer />
    </>
  );
};

export default page;
