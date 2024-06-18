"use client";

import Hero from "../components/our-preogammes/hero";
import Header from "../components/header/Header";
import Section2 from "../components/our-preogammes/section-2";
import BeforeFooter from "../components/our-preogammes/before-footer";
import Footer from "../components/footer/footer-2";
import useNavColor from "../hook/useNavColor";

const page = () => {
  const navColorArray = ["#19918E", "#19918E", "#FFFBF3", "#FFFBF3"];
  const { navbarColor } = useNavColor(navColorArray, ".section");

  return (
    <div>
      <Header navbarAnimationPlay={true} navbarColor={navbarColor} />
      <Hero />
      <Section2 />
      <BeforeFooter />
      <Footer />
    </div>
  );
};

export default page;
