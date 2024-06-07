import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function useNavColor(navbarColors, sectionSelector) {
  const [navbarColor, setNavbarColor] = useState(navbarColors[0]);

  useGSAP(() => {
    const sections = gsap.utils.toArray(sectionSelector);

    console.log({ sections });

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
  });

  return { navbarColor };
}

export default useNavColor;
