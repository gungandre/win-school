import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import useMediaQuery from "../utils/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

function useNavColor(navbarColors, sectionSelector) {
  const [navbarColor, setNavbarColor] = useState([navbarColors[0]]);
  const isSmall = useMediaQuery("(max-width: 640px)");

  useGSAP(() => {
    const sections = gsap.utils.toArray(sectionSelector);

    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top 128px",
        end: "bottom 128px",

        preventOverlaps: true,

        onEnter: () => {
          setNavbarColor(navbarColors[index]);
        },
        onLeaveBack: () => {
          const previousIndex = index > 0 ? index - 1 : 0;
          setNavbarColor(navbarColors[previousIndex]);
        },
      });
    });
  }, [isSmall]);

  return { navbarColor };
}

export default useNavColor;
