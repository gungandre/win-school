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
      <div>
        {small === false ? (
          <Header navbarAnimationPlay={true} navbarColor={navbarColor} />
        ) : (
          <HeaderMobile />
        )}
      </div>

      <div>{small === true ? <HeroMobile /> : <Hero />}</div>

      <Section2 small={small} setTlComplete={setTlComplete} />

      <Section3 setOnHover={setOnHover} />

      <Section4 />
      <BeforeFooter tlComplete={tlComplete} />

      <Footer />
    </>
  );
};

export default page;
