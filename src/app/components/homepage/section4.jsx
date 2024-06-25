import Button from "../button/Button";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useRef } from "react";
import Section4mobile from "./section-4-mobile";
const Section4 = () => {
  const container = useRef();

  useGSAP(
    () => {
      const weAreLeading = new SplitText(".we-are-leading", { type: "lines" });

      ScrollTrigger.create({
        trigger: ".section-we-are-leading",

        onEnter: () => {
          gsap.fromTo(
            weAreLeading.lines,
            {
              y: "100%",
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              delay: 0.5,
              ease: "power1.out",
              stagger: 0.1,
              duration: 1,
            }
          );

          gsap.fromTo(
            ".img-we-are-leading",
            {
              scale: 1.5,
            },
            {
              scale: 1,
              delay: 0.5,
              ease: "power1.out",
              duration: 1,
            }
          );
        },
        toggleActions: "play none none none",
        once: true,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-the-biggest",
            start: "top-=500 center",
            end: "center center",

            scrub: true,
          },
        })
        .to(".section-the-biggest", {
          transform: "translateX(0)",

          ease: "none",
          duration: 5,

          onComplete: () => {
            gsap.fromTo(
              ".button-section-we-are-leading",
              {
                transform: "translateY(100%)",
                opacity: 0,
              },
              {
                transform: "translateY(0)",
                opacity: 1,
                duration: 1,
                ease: "power1.out",
              }
            );

            ScrollTrigger.refresh();
          },
        });
    },
    { scope: container }
  );

  return (
    <div>
      <section
        className="w-full min-h-svh px-[142px] py-[134px] flex bg-white-ivory section section-we-are-leading max-sm:hidden "
        ref={container}
      >
        <div className="w-full h-full py-[108px]">
          <div className="w-auto h-auto relative">
            <div className="overflow-hidden w-[244px] h-[244px] absolute bottom-[-21%] rounded-[30px] z-10">
              <Image
                src="/assets/images/home/Rectangle_2.png"
                alt="Image 1"
                className=" img-we-are-leading"
                width={244}
                height={244}
              />
            </div>
            <div className="font-helixia text-[6.667vw] leading-[6.771vw] text-sunset-coral text-center">
              <div className="overflow-hidden w-[244px] h-[244px] absolute right-0 top-[-25%] rounded-[30px]">
                <Image
                  src="/assets/images/home/Rectangle_1.png"
                  alt="Image 2"
                  className=" img-we-are-leading"
                  width={244}
                  height={244}
                />
              </div>
              <div className="we-are-leading">
                We Are Leading
                <br />
                Early Childhood education
                <br />
                Center in Bali
              </div>
            </div>
          </div>

          <div className="w-full flex flex-nowrap gap-x-8 mt-[250px] translate-x-[95%] section-the-biggest">
            <div className="w-[560px] h-[526px]  bg-almond-cream p-15 flex flex-col rounded-[50px] justify-between">
              <div className="w-full font-helixa text-[48px] leading-[55px] font-bold">
                The Biggest
                <br />
                Early Childhood
                <br />
                Education Centre in Bali
              </div>
              <div className="w-full font-helixa text-[20px] text-[#5e5e5e]">
                As Bali's largest early childhood education center, our 30-are
                school offers comprehensive programs in a safe and specious
                environment for children to grow and explore
              </div>
            </div>
            <div className="w-[560px] h-[526px] translate-y-[100px] bg-almond-cream p-15 flex flex-col rounded-[50px] justify-between">
              <div className="w-full font-helixa text-[48px] leading-[55px] font-bold">
                An Integrated
                <br />
                Programme from
                <br />0 - 6 Years Old
              </div>
              <div className="w-full font-helixa text-[20px] text-[#5e5e5e]">
                Our integrated 0-6 program, from nursery to kindergarten, offers
                an educational journey, nurturing social, emotional, and
                cognitive development at every stage.
              </div>
            </div>
            <div className="w-[560px] h-[526px]  translate-y-[50px] bg-almond-cream p-15 flex flex-col rounded-[50px] justify-between">
              <div className="w-full font-helixa text-[48px] leading-[55px] font-bold">
                A Responsive
                <br />
                and Contextual
                <br />
                Curriculum
              </div>
              <div className="w-full font-helixa text-[20px] text-[#5e5e5e]">
                We implement a responsive and contextual curriculum that
                responds to the needs of children and keeps pace with evolving
                times.
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-[176px] button-section-we-are-leading">
            <Button
              className={""}
              name={"About Us"}
              arrow={"right"}
              color={"#F96D49"}
              hoverColor={"#F96D49"}
              hoverType={1}
              textHover={"#FFFBF3"}
            />
          </div>
        </div>
      </section>
      <div className="max-sm:block hidden">
        <Section4mobile />
      </div>
    </div>
  );
};

export default Section4;
