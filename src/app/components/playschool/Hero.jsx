"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import useMediaQuery from "@/app/utils/useMediaQuery";

const Hero = ({ setTlComplete }) => {
  const containerRef = useRef(null);
  const containerMobileRef = useRef(null);
  const sectionRef = useRef(null);
  const isSmall = useMediaQuery("(max-width: 640px)");

  gsap.registerPlugin(ScrollTrigger, SplitText);

  useGSAP(
    () => {
      gsap.to(".playschool", {
        transform: "translateY(0)",
        duration: 1,
        ease: "power1.out",
        stagger: 0.1, // Tanda titik digunakan di sini untuk memisahkan properti stagger
      });

      // hero image paralax
      let getRatio = (el) =>
        window.innerHeight / (window.innerHeight + el?.offsetHeight);
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

      const aboveAllSplit = new SplitText(".above-all", { type: "lines" });

      const ourDaycareSplit = new SplitText(".our-daycare", {
        type: "lines",
      });

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
            onComplete: () => {
              ScrollTrigger.refresh();
              ScrollTrigger.create({
                trigger: ".we-provide",
                once: true,

                onEnter: () => {
                  gsap.to(".we-provide", {
                    opacity: 1,
                    transform: "translateY(0)",
                    duration: 1,
                  });
                },
              });

              ScrollTrigger.create({
                trigger: ".above-all",
                once: true,
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
            },
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

          onComplete: () => {
            ScrollTrigger.refresh();
          },
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

  useGSAP(
    () => {
      const textSplit = new SplitText(".desc-sec-2-mobile", {
        type: "lines",
      });

      gsap.to(".playschool-mobile", {
        transform: "translateY(0)",
        duration: 1,
        ease: "power1.out",
        stagger: 0.1,
      });

      gsap.to(".desc-hero-mobile", {
        transform: "translateY(0)",
        duration: 1,
        ease: "power1.out",
        stagger: 0.1,
      });

      gsap.to(".img-hero-mobile", {
        transform: "translateY(0)",
        ease: "power1.out",
        opacity: 1,
      });

      ScrollTrigger.create({
        trigger: ".we-provide-mobile",
        onEnter: () => {
          gsap.to(".we-provide-mobile", {
            opacity: 1,
            transform: "translateY(0)",
            duration: 1,
          });
        },
      });

      ScrollTrigger.create({
        trigger: ".desc-sec-2-mobile",
        onEnter: () => {
          gsap.from(textSplit.lines, {
            opacity: 0,
            transform: "translateY(100%)",
            duration: 1,
          });
        },
      });
    },
    { scope: containerMobileRef, dependencies: [isSmall] }
  );

  return (
    <>
      <div>
        <div
          className="min-h-dvh w-full flex flex-col px-15 relative bg-white-ivory section max-sm:hidden"
          ref={containerRef}
        >
          <div className="text-sunset-coral text-[11.979vw] leading-[11.979vw] font-seagull  mt-[80px]  flex mb-[5%] daycare-text ">
            <div className="overflow-hidden">
              <div className="text-sunset-coral text-[11.979vw] translate-y-full playschool">
                P
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="text-sunset-coral text-[11.979vw] translate-y-full playschool">
                L
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
                S
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="text-sunset-coral text-[11.979vw] translate-y-full playschool">
                C
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="text-sunset-coral text-[11.979vw] translate-y-full playschool">
                H
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="text-sunset-coral text-[11.979vw] translate-y-full playschool">
                O
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="text-sunset-coral text-[11.979vw] translate-y-full playschool">
                O
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="text-sunset-coral text-[11.979vw] translate-y-full playschool">
                L
              </div>
            </div>
          </div>
          <div className=" relative img-container-hero">
            <div className=" relative  flex">
              <div className="w-[60%]"></div>
              <div className="flex flex-col w-[40%]  items-center daycare-hero-desc z-10">
                <div className="flex flex-col gap-y-[72px]">
                  <div className="flex flex-col ">
                    <div className="overflow-hidden">
                      <div className="font-helixa text-[28px] text-[#5e5e5e] translate-y-full daycare-text-desc">
                        For children aged
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className="font-helixa text-[48px] text-soft-tosca translate-y-full daycare-text-desc font-bold">
                        20 months - 6 years old
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="overflow-hidden">
                      <div className="font-helixa text-[28px] text-[#5e5e5e] translate-y-full daycare-text-desc-2">
                        Days and hours
                      </div>
                    </div>
                    <div className="font-helixa text-[48px] text-soft-tosca font-bold">
                      <div className="overflow-hidden">
                        <div className="translate-y-full daycare-text-desc-2">
                          Available from
                        </div>
                      </div>
                      <div className="overflow-hidden">
                        <div className="translate-y-full daycare-text-desc-2">
                          Monday - Friday
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
            <div className="font-helixa text-sunset-coral text-[6.667vw] leading-[6.771vw] text-center tracking-[-3px]">
              <div className="we-provide translate-y-full opacity-0">
                {" "}
                We Provide a Secure and
              </div>

              <div className="we-provide translate-y-full opacity-0">
                {" "}
                Nurturing Environment
              </div>
            </div>
            <div className="w-full flex justify-end mt-[56px]">
              <div className="max-w-[440px] font-helixa text-xl text-[#5E5E5E] mr-[90px] above-all">
                Above all, our playschool program aims to instill a lifelong
                love of learning, by creating a positive and enjoyable early
                educational experience, helping children view learning as a
                rewarding and exciting journey.
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full min-h-dvh bg-white-ivory max-sm:block hidden px-[32px]"
          ref={containerMobileRef}
        >
          <div className="w-full flex flex-col gap-y-[63px] mt-[158px]">
            <div className="font-seagull text-[13.488vw] leading-[13.256vw] text-sunset-coral playschool-text-mobile flex justify-center">
              <div className="overflow-hidden">
                <div className="translate-y-full playschool-mobile ">P</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-full playschool-mobile">L</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-full playschool-mobile">A</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-full playschool-mobile">Y</div>
              </div>

              <div className="overflow-hidden">
                <div className="translate-y-full playschool-mobile">S</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-full playschool-mobile">C</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-full playschool-mobile">H</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-full playschool-mobile">O</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-full playschool-mobile">O</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-full playschool-mobile">L</div>
              </div>
            </div>
            <div className="flex w-full justify-end">
              <div className="flex flex-col gap-y-[32px]">
                <div className="flex flex-col">
                  <div className="overflow-hidden">
                    <div className="font-helixa text-[16px] text-[#5E5E5E] translate-y-full desc-hero-mobile">
                      For children aged
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <div className="font-helixa text-[24px] text-soft-tosca translate-y-full desc-hero-mobile font-bold">
                      20 months - 6 years old
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="overflow-hidden">
                    <div className="font-helixa text-[16px] text-[#5E5E5E] translate-y-full desc-hero-mobile">
                      Days and hours
                    </div>
                  </div>

                  <div className="font-helixa text-[24px] text-soft-tosca font-bold">
                    <div className="overflow-hidden">
                      <div className="translate-y-full desc-hero-mobile">
                        Available from
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <div className="translate-y-full desc-hero-mobile">
                        Monday - Friday
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[280px]  rounded-[25px] overflow-hidden my-[120px] translate-y-[50%] opacity-0 img-hero-mobile">
            <img
              src="/assets/images/playschool/image-hero.png"
              className="w-full h-full object-cover object-top"
              alt=""
            />
          </div>

          <div className="flex flex-col w-full gap-y-[60px] ">
            <div className="text-center font-helixa text-[48px] leading-[50px]  tracking-[-3%] text-sunset-coral">
              <div className="overflow-hidden ">
                <div className="we-provide-mobile translate-y-full">
                  {" "}
                  We Provide a
                </div>
              </div>
              <div className="overflow-hidden ">
                <div className="we-provide-mobile translate-y-full">
                  Secure and
                </div>
              </div>
              <div className="overflow-hidden ">
                <div className="we-provide-mobile translate-y-full">
                  Nurturing
                </div>
              </div>
              <div className="overflow-hidden ">
                <div className="we-provide-mobile translate-y-full">
                  {" "}
                  Environment
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <div className="max-w-[217px] font-helixa text-[16px] leading-[19px] text-[#5E5E5E] desc-sec-2-mobile">
                Above all, our playschool program aims to instill a lifelong
                love of learning. By creating a positive and enjoyable early
                educational experience, we help children view learning as a
                rewarding and exciting journey.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
