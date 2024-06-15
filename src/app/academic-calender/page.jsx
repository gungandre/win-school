import React from "react";
import Hero from "../components/calender-academic/hero";
import Header from "../components/header/Header";
import Section2 from "../components/calender-academic/section-2";
import BeforeFooter from "../components/calender-academic/before-footer";
import Footer from "../components/footer/footer-2";
const page = () => {
  return (
    <div>
      <Header navbarAnimationPlay={true} />
      <Hero />
      <Section2 />
      <BeforeFooter />
      <Footer />
    </div>
  );
};

export default page;
