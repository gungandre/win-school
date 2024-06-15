import Hero from "../components/our-preogammes/hero";
import Header from "../components/header/Header";
import Section2 from "../components/our-preogammes/section-2";
import BeforeFooter from "../components/our-preogammes/before-footer";
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
