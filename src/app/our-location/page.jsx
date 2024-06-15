import React from "react";
import Hero from "../components/our-location/hero";
import Header from "../components/header/Header";
import BeforeFooter from "../components/our-location/before-footer";
import Footer from "../components/footer/footer-2";

const page = () => {
  return (
    <div>
      <Header navbarAnimationPlay={true} />
      <Hero />
      <BeforeFooter />
      <Footer></Footer>
    </div>
  );
};

export default page;
