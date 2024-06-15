"use client";

import Hero from "../components/our-facilities/hero";
import Header from "../components/header/Header";
import Section2 from "../components/our-facilities/section-2";
import BeforeFooter from "../components/our-facilities/before-footer";
import Footer from "../components/footer/footer-2";
import { useState } from "react";

const page = () => {
  const [tlComplete, setTlComplete] = useState(false);

  return (
    <div>
      <Header navbarAnimationPlay={true} />
      <Hero setTlComplete={setTlComplete} />
      <Section2 tlComplete={tlComplete} />
      <BeforeFooter tlComplete={tlComplete} />
      <Footer />
    </div>
  );
};

export default page;
