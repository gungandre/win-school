"use client";

import Hero from "../components/our-approach/hero";
import Section2 from "../components/our-approach/section-2";
import Section3 from "../components/our-approach/section-3";
import Section4 from "../components/our-approach/section-4";
import Header from "../components/header/Header";
import BeforeFooter from "../components/our-approach/before-footer";
import Footer from "../components/footer/footer-2";
import { useState, useEffect } from "react";

const Page = () => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <div>
      <Header navbarAnimationPlay={true} />
      <Hero rendered={rendered} />
      <Section2 />
      <Section3 />
      <Section4 />
      <BeforeFooter />
      <Footer />
    </div>
  );
};

export default Page;
