"use client";

import Hero from "../components/our-vision-and-mission/hero";
import Header from "../components/header/Header";
import Section2 from "../components/our-vision-and-mission/section2";
import BeforeFooter from "../components/our-vision-and-mission/before-footer";
import Footer from "../components/footer/footer-2";
import SectionAfterHero from "../components/our-vision-and-mission/section-after-hero";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useState, useEffect } from "react";
import useNavColor from "../hook/useNavColor";

const page = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [stRefresh, setStRefresh] = useState(false);

  const navColorArray = ["#19918E", "#19918E", "#19918E", "#FFFBF3", "#FFFBF3"];
  const { navbarColor } = useNavColor(navColorArray, ".section");

  return (
    <>
      <Header navbarAnimationPlay={true} navbarColor={navbarColor} />
      <Hero setStRefresh={setStRefresh} />
      <SectionAfterHero />
      <Section2 stRefresh={stRefresh} />
      <BeforeFooter stRefresh={stRefresh} />
      <Footer />
    </>
  );
};

export default page;
