"use client";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { useGSAP } from "@gsap/react";

const datas = [1, 2, 3, 4];

const Section2 = ({ tlComplete }) => {
  gsap.registerPlugin(ScrollTrigger);

  const [swiper, setSwiper] = useState(null);
  const [swiperSlideContainerWidth, setSwiperSlideContainerWidth] =
    useState(null);
  const [disableButtonRight, setDisableButtonRight] = useState(false);
  const [disableButtonLeft, setDisableButtonLeft] = useState(true);

  useEffect(() => {
    const swiperSlideContainerWidth = document.querySelector(
      ".swiper-slide-contaier"
    ).clientWidth;
    const cardSmall = document.querySelector(".card-small").clientWidth;

    console.log(
      "swiperSlideContainerWidth",
      swiperSlideContainerWidth - cardSmall
    );
    setSwiperSlideContainerWidth(swiperSlideContainerWidth - cardSmall);
  }, [tlComplete]);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".number",
      once: true,
      onEnter: () => {
        gsap.from(".number", {
          y: "100%",
          opacity: 0,
          ease: "power1.out",
          duration: 1,
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".empowering-text",
      once: true,
      onEnter: () => {
        gsap.from(".empowering-text", {
          y: "100%",

          ease: "power1.out",
          duration: 1,
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".learning-text",
      once: true,
      onEnter: () => {
        gsap.from(".learning-text", {
          y: "100%",

          ease: "power1.out",
          duration: 1,
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".section-2-text-1",
      once: true,
      onEnter: () => {
        gsap.from(".section-2-text-1", {
          y: "100%",
          opacity: 0,
          ease: "power1.out",
          duration: 1,
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".section-2-text-2",
      once: true,
      onEnter: () => {
        gsap.from(".section-2-text-2", {
          y: "100%",
          opacity: 0,
          ease: "power1.out",
          duration: 1,
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".navigation-1",
      once: true,
      onEnter: () => {
        gsap.from(".navigation-1", {
          y: "100%",
          opacity: 0,
          ease: "power1.out",
          duration: 1,
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".swiper-container-1",
      once: true,
      onEnter: () => {
        gsap.from(".swiper-container-1", {
          y: "100%",
          opacity: 0,
          ease: "power1.out",
          duration: 1,
        });
      },
    });
  }, [tlComplete]);

  const prevSlide = () => {
    const currentIndex = swiper.activeIndex;
    const nextSlide = swiper.slides[currentIndex + 1];
    const prevSlide = swiper.slides[currentIndex - 1];
    const currentSlide = swiper.slides[currentIndex];
    const nextSlide2 = swiper.slides[currentIndex + 1];

    gsap.to(prevSlide?.querySelector(".img-swiper-container"), {
      transform: `translateX(0)`,
      width: "120%",
    });
    gsap.to(currentSlide?.querySelector(".img-swiper-container"), {
      width: "80%",
      transform: `translateX(${swiperSlideContainerWidth}px)`,
    });
    gsap.to(nextSlide2?.querySelector(".img-swiper-container"), {
      transform: `translateX(0)`,
      width: "80%",
    });

    swiper.slidePrev();
  };

  const nextSlide = () => {
    const currentIndex = swiper.activeIndex;
    const nextSlide = swiper.slides[currentIndex + 1];
    const nextSlide2 = swiper.slides[currentIndex + 2];
    const prevSlide = swiper.slides[currentIndex - 1];
    const currentSlide = swiper.slides[currentIndex];

    gsap.to(nextSlide?.querySelector(".img-swiper-container"), {
      transform: `translateX(0)`,
      width: "120%",
    });
    gsap.to(currentSlide?.querySelector(".img-swiper-container"), {
      width: "80%",
      transform: `translateX(${swiperSlideContainerWidth}px)`,
    });
    gsap.to(nextSlide2?.querySelector(".img-swiper-container"), {
      transform: `translateX(${swiperSlideContainerWidth}px)`,
      width: "80%",
    });

    swiper.slideNext();
  };

  const swiperSlideChange = (swiper) => {
    if (swiper.activeIndex === swiper.slides.length - 2) {
      setDisableButtonRight(true);
    } else {
      setDisableButtonRight(false);
    }
    if (swiper.activeIndex === 0) {
      setDisableButtonLeft(true);
    } else {
      setDisableButtonLeft(false);
    }
  };

  return (
    <>
      <div>
        <div className="w-full  py-[100px] bg-white-ivory px-15 flex justify-center flex-col">
          <div className="w-[90%] flex flex-col">
            <div className="w-full flex justify-between items-start">
              <div className="w-[30%]  flex items-center justify-between">
                <div className="w-[76px] h-[76px] rounded-full flex justify-center items-center font-helixa font-bold text-[28px] text-white-ivory bg-sunset-coral number">
                  <div className="overflow-hidden">
                    <div>01</div>
                  </div>
                </div>
                <div className="font-helixa font-bold text-[48px] leading-[55px] text-[#404040]">
                  <div className="empowering-text">Empowering</div>

                  <div className="learning-text">Learning Spaces</div>
                </div>
              </div>
              <div className="w-[25%] ">
                <div className="overflow-hidden">
                  <div className="section-2-text-1">
                    Our classrooms are more than four walls—they’re dynamic hubs
                    of knowledge. Equipped with cutting-edge teaching and
                    learning technology, they foster interactive discussions,
                    collaborative projects, and critical thinking.
                  </div>
                </div>
                <br />

                <div className="overflow-hidden">
                  <div className="section-2-text-2">
                    Teachers inspire curiosity, and students engage in lively
                    debates, all while surrounded by the latest educational
                    tools. tools.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-ivory">
          <div className="w-full flex flex-col items-center justify-center gap-y-10">
            <div className="flex gap-x-7 navigation-1">
              <div
                className={`group ${
                  disableButtonLeft ? "pointer-events-none" : ""
                }`}
              >
                <div
                  className="w-[76px] h-[76px] rounded-full flex justify-center items-center font-helixa font-bold text-[28px] text-white-ivory bg-transparent border-[#CABFAA] border-[1px] cursor-pointer group-hover:border-sunset-coral group-hover:bg-sunset-coral duration-500 transition-all"
                  onClick={prevSlide}
                >
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="rotate-180"
                  >
                    <path
                      d="M0.857866 15.0015L29.1421 15.0015M29.1421 15.0015L15 0.859377M29.1421 15.0015L15 29.1436"
                      stroke="#CABFAA"
                      stroke-width="2"
                      className="group-hover:stroke-white-ivory"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`group ${
                  disableButtonRight ? "pointer-events-none" : ""
                }`}
              >
                <div
                  className="w-[76px] h-[76px] rounded-full flex justify-center items-center font-helixa font-bold text-[28px] text-white-ivory bg-transparent border-[#CABFAA] border-[1px] cursor-pointer group-hover:border-sunset-coral group-hover:bg-sunset-coral duration-500 transition-all"
                  onClick={nextSlide}
                >
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.857866 15.0015L29.1421 15.0015M29.1421 15.0015L15 0.859377M29.1421 15.0015L15 29.1436"
                      stroke="#CABFAA"
                      stroke-width="2"
                      className="group-hover:stroke-white-ivory"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between  overflow-visible swiper-container-1">
              <Swiper
                navigation
                speed={1000}
                pagination={{
                  clickable: false,
                }}
                slidesPerView={2}
                spaceBetween={30}
                onSwiper={(swiperr) => setSwiper(swiperr)}
                onSlideChange={swiperSlideChange}
                className="!px-20 !pb-20"
              >
                {setSwiperSlideContainerWidth &&
                  datas.map((item, index) => {
                    return (
                      <SwiperSlide className="w-full relative swiper-slide-contaier">
                        <div
                          className={`w-[120%] rounded-[50px] overflow-hidden img-swiper-container ${
                            index !== 0 && "card-small"
                          }`}
                          style={{
                            transform: `translateX(${
                              index === 1 && swiperSlideContainerWidth
                            }px)`,
                            width: `${index !== 0 && "80%"}`,
                          }}
                        >
                          <img
                            src="/assets/images/our-facilities/img-swiper1.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}

                <SwiperSlide className="w-full relative">
                  <div className="w-[80%] rounded-[50px] overflow-hidden img-swiper-container ">
                    {/* <img
                    src="/assets/images/our-facilities/img-swiper1.png"
                    className="w-full h-full object-cover"
                  /> */}
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full  py-[100px] bg-white-ivory px-15 flex justify-center flex-col">
          <div className="w-[90%] flex flex-col">
            <div className="w-full flex justify-between items-start">
              <div className="w-[30%]  flex items-center justify-between">
                <div className="w-[76px] h-[76px] rounded-full flex justify-center items-center font-helixa font-bold text-[28px] text-white-ivory bg-sunset-coral number-2">
                  <div className="overflow-hidden">
                    <div>01</div>
                  </div>
                </div>
                <div className="font-helixa font-bold text-[48px] leading-[55px] text-[#404040]">
                  <div className="empowering-text-2">Empowering</div>

                  <div className="learning-text-2">Learning Spaces</div>
                </div>
              </div>
              <div className="w-[25%] ">
                <div className="overflow-hidden">
                  <div className="section-2-text-1-2">
                    Our classrooms are more than four walls—they’re dynamic hubs
                    of knowledge. Equipped with cutting-edge teaching and
                    learning technology, they foster interactive discussions,
                    collaborative projects, and critical thinking.
                  </div>
                </div>
                <br />

                <div className="overflow-hidden">
                  <div className="section-2-text-2-2">
                    Teachers inspire curiosity, and students engage in lively
                    debates, all while surrounded by the latest educational
                    tools. tools.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-ivory">
          <div className="w-full flex flex-col items-center justify-center gap-y-10">
            <div className="flex gap-x-7 navigation-1-2">
              <div
                className={`group ${
                  disableButtonLeft ? "pointer-events-none" : ""
                }`}
              >
                <div
                  className="w-[76px] h-[76px] rounded-full flex justify-center items-center font-helixa font-bold text-[28px] text-white-ivory bg-transparent border-[#CABFAA] border-[1px] cursor-pointer group-hover:border-sunset-coral group-hover:bg-sunset-coral duration-500 transition-all"
                  onClick={prevSlide}
                >
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="rotate-180"
                  >
                    <path
                      d="M0.857866 15.0015L29.1421 15.0015M29.1421 15.0015L15 0.859377M29.1421 15.0015L15 29.1436"
                      stroke="#CABFAA"
                      stroke-width="2"
                      className="group-hover:stroke-white-ivory"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`group ${
                  disableButtonRight ? "pointer-events-none" : ""
                }`}
              >
                <div
                  className="w-[76px] h-[76px] rounded-full flex justify-center items-center font-helixa font-bold text-[28px] text-white-ivory bg-transparent border-[#CABFAA] border-[1px] cursor-pointer group-hover:border-sunset-coral group-hover:bg-sunset-coral duration-500 transition-all"
                  onClick={nextSlide}
                >
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.857866 15.0015L29.1421 15.0015M29.1421 15.0015L15 0.859377M29.1421 15.0015L15 29.1436"
                      stroke="#CABFAA"
                      stroke-width="2"
                      className="group-hover:stroke-white-ivory"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between  overflow-visible swiper-container-1">
              <Swiper
                navigation
                speed={1000}
                pagination={{
                  clickable: false,
                }}
                slidesPerView={2}
                spaceBetween={30}
                onSwiper={(swiperr) => setSwiper(swiperr)}
                onSlideChange={swiperSlideChange}
                className="!px-20 !pb-20"
              >
                {setSwiperSlideContainerWidth &&
                  datas.map((item, index) => {
                    return (
                      <SwiperSlide className="w-full relative swiper-slide-contaier">
                        <div
                          className={`w-[120%] rounded-[50px] overflow-hidden img-swiper-container ${
                            index !== 0 && "card-small"
                          }`}
                          style={{
                            transform: `translateX(${
                              index === 1 && swiperSlideContainerWidth
                            }px)`,
                            width: `${index !== 0 && "80%"}`,
                          }}
                        >
                          <img
                            src="/assets/images/our-facilities/img-swiper1.png"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}

                <SwiperSlide className="w-full relative">
                  <div className="w-[80%] rounded-[50px] overflow-hidden img-swiper-container ">
                    {/* <img
                    src="/assets/images/our-facilities/img-swiper1.png"
                    className="w-full h-full object-cover"
                  /> */}
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
