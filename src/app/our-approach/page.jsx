"use client";

import Hero from "../components/our-approach/hero";
import Section2 from "../components/our-approach/section-2";
import Section3 from "../components/our-approach/section-3";
import Section4 from "../components/our-approach/section-4";
import Header from "../components/header/Header";
import BeforeFooter from "../components/our-approach/before-footer";
import Footer from "../components/footer/footer-2";
import { useState, useEffect } from "react";
import useNavColor from "../hook/useNavColor";

const Page = () => {
  const [rendered, setRendered] = useState(false);
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
    <div>
      <Header navbarAnimationPlay={true} navbarColor={navbarColor} />
      <Hero rendered={rendered} />
      <Section2 />
      <Section3 setRendered={setRendered} />
      <Section4 rendered={rendered} />
      <BeforeFooter />
      <Footer />
    </div>
  );
};

export default Page;
