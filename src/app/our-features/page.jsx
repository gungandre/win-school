"use client";

import Hero from "../components/our-features/hero";
import Section2 from "../components/our-features/section-2";
import Footer from "../components/footer/footer-2";
import BeforeFooter from "../components/our-features/before-footer";
import Header from "../components/header/Header";
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
