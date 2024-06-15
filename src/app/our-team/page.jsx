"use client";

import React from "react";
import Hero from "../components/our-team/hero";
import Header from "../components/header/Header";
import Section2 from "../components/our-team/section-2";
import Section3 from "../components/our-team/section-3";
import BeforeFooter from "../components/our-team/before-footer";
import Footer from "../components/footer/footer-2";
import { useState } from "react";
const page = () => {
  const [tlComplete, setTlComplete] = useState(false);

  return (
    <>
      <Header navbarAnimationPlay={true} />
      <Hero setTlComplete={setTlComplete} />
      <Section2 tlComplete={tlComplete} />
      <Section3 tlComplete={tlComplete} />
      <BeforeFooter tlComplete={tlComplete} />
      <Footer />
    </>
  );
};

export default page;
