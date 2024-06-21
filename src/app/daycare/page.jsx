"use client";

import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/daycare/Hero";
import Section2 from "../components/daycare/section-2";
import Section3 from "../components/daycare/section-3";
import Section4 from "../components/daycare/section-4";

import BeforeFooter from "../components/daycare/before-footer";

import { useState } from "react";

import Footer from "../components/footer/footer-2";
import useNavColor from "../hook/useNavColor";
import useMediaQuery from "../utils/useMediaQuery";
import HeroMobile from "../components/daycare/hero-mobile";
import HeaderMobile from "../components/header/header-mobile";
import Section4Mobile from "../components/daycare/section-4-mobile";
import FooterMobile from "../components/homepage/FooterMobile";
const page = () => {
  const [onHover, setOnHover] = useState(false);
  const [tlComplete, setTlComplete] = useState(false);
  const small = useMediaQuery("(max-width: 640px)");

  const navColorArray = [
    "#19918E",
    "#19918E",
    "#19918E",
    "#19918E",
    "#FFFBF3",
    "#FFFBF3",
  ];
  const { navbarColor } = useNavColor(navColorArray, ".section");

  return (
    <>
      <Header navbarAnimationPlay={true} navbarColor={navbarColor} />
      <Hero />

      <Section2 small={small} setTlComplete={setTlComplete} />

      <Section3 setOnHover={setOnHover} />
      <div>{small === false ? <Section4 /> : <Section4Mobile />}</div>

      <BeforeFooter tlComplete={tlComplete} />

      <div>{small === false ? <Footer /> : <FooterMobile />}</div>
    </>
  );
};

export default page;
