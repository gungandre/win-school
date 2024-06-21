"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import HeroMobile from "./hero-mobile";

const Hero = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger, SplitText);

  useGSAP(
    () => {
      // playschool title
      gsap.to(".playschool", {
        transform: "translateY(0)",
        duration: 1,
        ease: "power1.out",
        stagger: 0.1, // Tanda titik digunakan di sini untuk memisahkan properti stagger
      });

      // hero image paralax
      let getRatio = (el) =>
        window.innerHeight / (window.innerHeight + el.offsetHeight);
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.to(".el-top-img", {
        opacity: 1,
        duration: 1,
      });

      ScrollTrigger.create({
        trigger: ".we-provide",

        onEnter: () => {
          gsap.to(".we-provide", {
            opacity: 1,
            transform: "translateY(0)",
            duration: 1,
          });
        },
      });

      const aboveAllSplit = new SplitText(".above-all", { type: "lines" });

      ScrollTrigger.create({
        trigger: ".above-all",
        onEnter: () => {
          gsap.fromTo(
            aboveAllSplit.lines,
            {
              transform: "translateY(100%)",
              opacity: 0,
            },
            {
              opacity: 1,
              transform: "translateY(0)",
              duration: 1,
              stagger: 0.1,
            }
          );
        },
      });

      const ourDaycareSplit = new SplitText(".our-daycare", { type: "lines" });

      gsap.fromTo(
        ourDaycareSplit.lines,
        {
          transform: "translateY(100%)",
          opacity: 0,
        },
        {
          opacity: 1,
          transform: "translateY(0)",
          duration: 1,
          stagger: 0.1,
        }
      );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,

            scrub: true,
            start: "top top",
            end: "bottom bottom",
            anticipatePin: true,
          },
        })
        .to(".daycare-text", {
          transform: "translateY(-300%)",
        })
        .to(
          ".daycare-hero-desc",
          {
            transform: "translateY(-100%)",
          },
          "<"
        )
        .to(
          ".daycare-hero-image",
          {
            top: "20%",
            width: "100%",
            height: "684px",
          },
          "<"
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",

            scrub: true,
          },
        })
        .to(".daycare-hero-image", {
          backgroundPosition: `50% ${
            -window.innerHeight *
            (1 - getRatio(document.querySelector(".daycare-hero-image")))
          }px`,
        });

      gsap.to(".daycare-hero-image", {
        transform: "translateY(0)",
        opacity: 1,
        duration: 1,
        ease: "power1.out",
      });

      gsap.to(".daycare-text-desc", {
        transform: "translateY(0)",
        duration: 1,
        ease: "power1.out",
      });

      gsap.to(".daycare-text-desc-2", {
        transform: "translateY(0)",
        delay: 0.5,
        duration: 1,
        ease: "power1.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <>
      <div
        className="min-h-dvh w-full flex flex-col px-15 relative bg-white-ivory section max-sm:hidden"
        ref={containerRef}
      >
        <div className="text-sunset-coral text-[11.979vw] leading-[11.979vw] font-seagull  mt-[80px]  flex mb-[5%] daycare-text ">
          <div className="overflow-hidden">
            <div className="text-sunset-coral text-[11.979vw] translate-y-full playschool">
              D
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="text-sunset-coral text-[11.979vw] translate-y-full playschool">
              A
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="text-sunset-coral text-[11.979vw] translate-y-full playschool">
              Y
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="text-sunset-coral text-[11.979vw] translate-y-full playschool">
              C
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="text-sunset-coral text-[11.979vw] translate-y-full playschool">
              A
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="text-sunset-coral text-[11.979vw] translate-y-full playschool">
              R
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="text-sunset-coral text-[11.979vw] translate-y-full playschool">
              E
            </div>
          </div>
        </div>
        <div className=" relative img-container-hero">
          <div className=" relative  flex">
            <div className="w-[60%]"></div>
            <div className="flex flex-col w-[40%]  items-center daycare-hero-desc z-10">
              <div>
                <div className="flex flex-col ">
                  <div className="overflow-hidden">
                    <div className="font-helixa text-[28px] text-[#5e5e5e] translate-y-full daycare-text-desc">
                      For children aged
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <div className="font-helixa text-[48px] text-soft-tosca translate-y-full daycare-text-desc">
                      3 - 6 years old
                    </div>
                  </div>
                </div>
                <div>
                  <div className="overflow-hidden">
                    <div className="font-helixa text-[28px] text-[#5e5e5e] translate-y-full daycare-text-desc-2">
                      Days and hours
                    </div>
                  </div>
                  <div className="font-helixa text-[48px] text-soft-tosca">
                    <div className="overflow-hidden">
                      <div className="translate-y-full daycare-text-desc-2">
                        Monday - Friday
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className="translate-y-full daycare-text-desc-2">
                        08:00 AM - 04:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[1042px] h-[514px] overflow-hidden rounded-[50px]  daycare-hero-image bg-no-repeat bg-cover absolute translate-y-full top-0 opacity-0"
            style={{
              backgroundImage:
                "url('/assets/images/playschool/image-hero.png')",
            }}
          ></div>
          <div className="w-[1042px] h-[514px] overflow-hidden rounded-[50px]   bg-no-repeat bg-cover  "></div>
        </div>
        <div className="w-full mt-[132px] mb-[132px]" ref={sectionRef}>
          <div className="font-helixa text-sunset-coral text-[6.667vw] leading-[6.771vw] text-center">
            <div className="we-provide translate-y-full opacity-0">
              {" "}
              We provide a secure and{" "}
            </div>

            <div className="we-provide translate-y-full opacity-0">
              {" "}
              nurturing environment.
            </div>
          </div>
          <div className="w-full flex justify-end mt-[56px]">
            <div className="max-w-[440px] font-helixa text-xl text-[#5E5E5E] mr-[90px] above-all">
              Daycare program offers a safe and nurturing environment with
              experienced staff dedicated to a comprehensive curriculum and
              engaging activities. We ensure healthy meals, flexible enrollment
              options, and maintain regular communication with parents to
              support each child's growth and development.
            </div>
          </div>
        </div>
      </div>

      <div className="max-sm:block hidden">
        <HeroMobile />
      </div>
    </>
  );
};

export default Hero;
