"use client";

import { useSwiper } from "swiper/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import Link from "next/link";

const Button = ({
  name,
  arrow,
  color,
  fontSize,
  hoverColor = "#FFFBF3",
  hoverType = 1,
  textHover = "#19918E",
  hoverPosition,
  disableButton,
  buttonType = "link",
  link,
}) => {
  gsap.registerPlugin(SplitText);
  const swiper = useSwiper();

  const swiperNextSlide = () => {
    const nextSlide = swiper.activeIndex + 1;

    const currentIndex = swiper.activeIndex;
    const swiperSlides = swiper.slides;

    const currentNameEl = swiperSlides[currentIndex].querySelectorAll(
      ".name .overflow-hidden div"
    );

    const currentProfesionEl = swiperSlides[currentIndex].querySelectorAll(
      ".profesion .overflow-hidden div"
    );

    const currentQuotesEl = swiperSlides[currentIndex].querySelectorAll(
      ".quotes .overflow-hidden div"
    );

    const currentPetikEl = swiperSlides[currentIndex].querySelectorAll(
      ".petik-dua .overflow-hidden div"
    );

    gsap.fromTo(
      currentPetikEl,
      {
        y: 0,
      },
      {
        y: "100%",
        duration: 1,
        ease: "none",
      }
    );

    gsap.fromTo(
      currentNameEl,
      {
        y: 0,
      },
      {
        y: "100%",
        duration: 1,
        ease: "none",
      }
    );

    gsap.fromTo(
      currentQuotesEl,
      {
        y: 0,
      },
      {
        y: "100%",
        duration: 1,
        ease: "none",
      }
    );

    gsap.fromTo(
      currentProfesionEl,
      {
        y: 0,
      },
      {
        y: "100%",
        duration: 1,
        ease: "none",
      }
    );

    gsap.fromTo(
      swiperSlides[currentIndex].querySelector(".swiper-image-container"),
      {
        y: 0,
        opacity: 1,
      },
      { y: 30, opacity: 0, duration: 1, ease: "power2.out" }
    );

    setTimeout(() => {
      const nextNameEl = swiperSlides[nextSlide].querySelectorAll(
        ".name .overflow-hidden div"
      );
      const nextProfesionEl = swiperSlides[nextSlide].querySelectorAll(
        ".profesion .overflow-hidden div"
      );

      const nextQuotesEl = swiperSlides[nextSlide].querySelectorAll(
        ".quotes .overflow-hidden div"
      );

      const nextPetikEl = swiperSlides[nextSlide].querySelectorAll(
        ".petik-dua .overflow-hidden div"
      );
      gsap.fromTo(
        nextNameEl,
        {
          y: "100%",
        },
        {
          y: 0,
          duration: 1,
          ease: "none",
        }
      );

      gsap.fromTo(
        nextProfesionEl,
        {
          y: "100%",
        },
        {
          y: 0,
          duration: 1,
          ease: "none",
        }
      );

      gsap.fromTo(
        nextQuotesEl,
        {
          y: "100%",
        },
        {
          y: 0,
          duration: 1,
          ease: "none",
        }
      );

      gsap.fromTo(
        nextPetikEl,
        {
          y: "100%",
        },
        {
          y: 0,
          duration: 1,
          ease: "none",
        }
      );

      gsap.fromTo(
        swiperSlides[nextSlide].querySelector(".swiper-image-container"),
        {
          y: 30,
          opacity: 0,
        },
        {
          delay: 0.7,
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        }
      );
      swiper.slideNext();
    }, 1000);
  };

  const swiperPrevSlide = () => {
    const prevSlide = swiper.activeIndex - 1;
    const currentIndex = swiper.activeIndex;
    const swiperSlides = swiper.slides;

    const currentNameEl = swiperSlides[currentIndex].querySelectorAll(
      ".name .overflow-hidden div"
    );

    const currentProfesionEl = swiperSlides[currentIndex].querySelectorAll(
      ".profesion .overflow-hidden div"
    );

    const currentQuotesEl = swiperSlides[currentIndex].querySelectorAll(
      ".quotes .overflow-hidden div"
    );

    const currentPetikEl = swiperSlides[currentIndex].querySelectorAll(
      ".petik-dua .overflow-hidden div"
    );

    gsap.fromTo(
      currentPetikEl,
      {
        y: 0,
      },
      {
        y: "100%",
        duration: 1,
        ease: "none",
      }
    );

    gsap.fromTo(
      currentNameEl,
      {
        y: 0,
      },
      {
        y: "100%",
        duration: 1,
        ease: "none",
      }
    );

    gsap.fromTo(
      currentQuotesEl,
      {
        y: 0,
      },
      {
        y: "100%",
        duration: 1,
        ease: "none",
      }
    );

    gsap.fromTo(
      currentProfesionEl,
      {
        y: 0,
      },
      {
        y: "100%",
        duration: 1,
        ease: "none",
      }
    );

    gsap.fromTo(
      swiperSlides[currentIndex].querySelector(".swiper-image-container"),
      {
        y: 0,
        opacity: 1,
      },
      { y: 30, opacity: 0, duration: 1, ease: "power2.out" }
    );

    setTimeout(() => {
      const prevNameEl = swiperSlides[prevSlide].querySelectorAll(
        ".name .overflow-hidden div"
      );
      const prevProfesionEl = swiperSlides[prevSlide].querySelectorAll(
        ".profesion .overflow-hidden div"
      );
      const prevQuotesEl = swiperSlides[prevSlide].querySelectorAll(
        ".quotes .overflow-hidden div"
      );

      const prevPetikEl = swiperSlides[prevSlide].querySelectorAll(
        ".petik-dua .overflow-hidden div"
      );
      gsap.fromTo(
        prevNameEl,
        {
          y: "100%",
        },
        {
          y: 0,
          duration: 1,
          ease: "none",
        }
      );

      gsap.fromTo(
        prevProfesionEl,
        {
          y: "100%",
        },
        {
          y: 0,
          duration: 1,
          ease: "none",
        }
      );

      gsap.fromTo(
        prevQuotesEl,
        {
          y: "100%",
        },
        {
          y: 0,
          duration: 1,
          ease: "none",
        }
      );

      gsap.fromTo(
        prevPetikEl,
        {
          y: "100%",
        },
        {
          y: 0,
          duration: 1,
          ease: "none",
        }
      );

      gsap.fromTo(
        swiperSlides[prevSlide].querySelector(".swiper-image-container"),
        {
          y: 30,
          opacity: 0,
        },
        {
          delay: 0.7,
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
        }
      );
      swiper.slidePrev();
    }, 1000);
  };

  return (
    <>
      {buttonType === "link" ? (
        <Link href={"/register"} className={`group     `}>
          <button
            className={`w-auto h-auto flex relative px-[22px] rounded-full border-[${color}] border-[2px] ${
              color === "#FFFBF3" ? "text-white-ivory" : "text-sunset-coral"
            } items-center gap-6 transition-all duration-500 overflow-hidden justify-between  ${
              textHover === "#19918E"
                ? "group-hover:text-soft-tosca"
                : textHover === "#FFFBF3"
                ? "group-hover:text-white-ivory"
                : "group-hover:text-sunset-coral"
            }  text-[${color}]  font-helixa w-auto ${
              fontSize ? `text-[${fontSize}px]` : "text-[28px] "
            }`}
            style={{
              borderColor: color,

              fontSize: fontSize ? fontSize : 28,
            }}
            onClick={arrow === "right" ? swiperNextSlide : swiperPrevSlide}
          >
            {arrow === "left" && (
              <>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 9L2 9"
                    stroke={color}
                    className={`${
                      color === "#FFFBF3"
                        ? "group-hover:stroke-soft-tosca"
                        : "group-hover:stroke-white-ivory"
                    } duration-500 transition-all`}
                    strokeWidth="2"
                  />
                  <path
                    d="M10 17L2 9L10 1"
                    stroke={color}
                    className={`${
                      color === "#FFFBF3"
                        ? "group-hover:stroke-soft-tosca"
                        : "group-hover:stroke-white-ivory"
                    } duration-500 transition-all`}
                    strokeWidth="2"
                  />
                </svg>
              </>
            )}
            {name}
            {arrow === "right" && (
              <>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 9L16 9"
                    stroke={color}
                    strokeWidth="2"
                    className={`${
                      color === "#FFFBF3"
                        ? "group-hover:stroke-soft-tosca"
                        : "group-hover:stroke-white-ivory"
                    } duration-500 transition-all`}
                  />
                  <path
                    d="M8 1L16 9L8 17"
                    stroke={color}
                    strokeWidth="2"
                    className={`${
                      color === "#FFFBF3"
                        ? "group-hover:stroke-soft-tosca"
                        : "group-hover:stroke-white-ivory"
                    } duration-500 transition-all`}
                  />
                </svg>
              </>
            )}

            <div
              className={` rounded-full left-0 ${
                hoverPosition === "right"
                  ? "translate-x-[100%]"
                  : "-translate-x-[100%]"
              }  z-[-1] absolute w-[300px] h-[300px] top-1/2 -translate-y-1/2  ${
                hoverType === 1 && "group-hover:translate-x-0 "
              }duration-500 transition-all`}
              style={{ backgroundColor: hoverColor }}
            ></div>
            <div
              className={`bg-white-ivory z-[-1] absolute w-[600px] h-[600px] bottom-0 left-1/2 -translate-x-1/2 translate-y-full ${
                hoverType === 2 && "group-hover:translate-y-1/2"
              } rounded-full  duration-500 transition-all`}
            ></div>
          </button>
        </Link>
      ) : buttonType === "a" ? (
        <div
          className={`group ${
            disableButton ? "pointer-events-none opacity-70" : ""
          }`}
          // ${
          //   disableButton ? "pointer-events-none opacity-70" : ""
          // }
        >
          <a
            href={link}
            target="_blank"
            className={`w-auto h-auto flex relative px-[22px] rounded-full border-[${color}] border-[2px] ${
              color === "#FFFBF3" ? "text-white-ivory" : "text-sunset-coral"
            } items-center gap-6 transition-all duration-500 overflow-hidden justify-between  ${
              textHover === "#19918E"
                ? "group-hover:text-soft-tosca"
                : textHover === "#FFFBF3"
                ? "group-hover:text-white-ivory"
                : "group-hover:text-sunset-coral"
            }  text-[${color}]  font-helixa w-auto ${
              fontSize ? `text-[${fontSize}px]` : "text-[28px] "
            }`}
            style={{
              borderColor: color,

              fontSize: fontSize ? fontSize : 28,
            }}
            onClick={arrow === "right" ? swiperNextSlide : swiperPrevSlide}
          >
            {arrow === "left" && (
              <>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 9L2 9"
                    stroke={color}
                    className={`${
                      color === "#FFFBF3"
                        ? "group-hover:stroke-soft-tosca"
                        : "group-hover:stroke-white-ivory"
                    } duration-500 transition-all`}
                    strokeWidth="2"
                  />
                  <path
                    d="M10 17L2 9L10 1"
                    stroke={color}
                    className={`${
                      color === "#FFFBF3"
                        ? "group-hover:stroke-soft-tosca"
                        : "group-hover:stroke-white-ivory"
                    } duration-500 transition-all`}
                    strokeWidth="2"
                  />
                </svg>
              </>
            )}
            {name}
            {arrow === "right" && (
              <>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 9L16 9"
                    stroke={color}
                    strokeWidth="2"
                    className={`${
                      color === "#FFFBF3"
                        ? "group-hover:stroke-soft-tosca"
                        : "group-hover:stroke-white-ivory"
                    } duration-500 transition-all`}
                  />
                  <path
                    d="M8 1L16 9L8 17"
                    stroke={color}
                    strokeWidth="2"
                    className={`${
                      color === "#FFFBF3"
                        ? "group-hover:stroke-soft-tosca"
                        : "group-hover:stroke-white-ivory"
                    } duration-500 transition-all`}
                  />
                </svg>
              </>
            )}

            <div
              className={` rounded-full left-0 ${
                hoverPosition === "right"
                  ? "translate-x-[100%]"
                  : "-translate-x-[100%]"
              }  z-[-1] absolute w-[300px] h-[300px] top-1/2 -translate-y-1/2  ${
                hoverType === 1 && "group-hover:translate-x-0 "
              }duration-500 transition-all`}
              style={{ backgroundColor: hoverColor }}
            ></div>
            <div
              className={`bg-white-ivory z-[-1] absolute w-[600px] h-[600px] bottom-0 left-1/2 -translate-x-1/2 translate-y-full ${
                hoverType === 2 && "group-hover:translate-y-1/2"
              } rounded-full  duration-500 transition-all`}
            ></div>
          </a>
        </div>
      ) : (
        <div
          className={`group ${
            disableButton ? "pointer-events-none opacity-70" : ""
          }`}
          // ${
          //   disableButton ? "pointer-events-none opacity-70" : ""
          // }
        >
          <button
            className={`w-auto h-auto flex relative px-[22px] rounded-full border-[${color}] border-[2px] ${
              color === "#FFFBF3" ? "text-white-ivory" : "text-sunset-coral"
            } items-center gap-6 transition-all duration-500 overflow-hidden justify-between  ${
              textHover === "#19918E"
                ? "group-hover:text-soft-tosca"
                : textHover === "#FFFBF3"
                ? "group-hover:text-white-ivory"
                : "group-hover:text-sunset-coral"
            }  text-[${color}]  font-helixa w-auto ${
              fontSize ? `text-[${fontSize}px]` : "text-[28px] "
            }`}
            style={{
              borderColor: color,

              fontSize: fontSize ? fontSize : 28,
            }}
            onClick={arrow === "right" ? swiperNextSlide : swiperPrevSlide}
          >
            {arrow === "left" && (
              <>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 9L2 9"
                    stroke={color}
                    className={`${
                      color === "#FFFBF3"
                        ? "group-hover:stroke-soft-tosca"
                        : "group-hover:stroke-white-ivory"
                    } duration-500 transition-all`}
                    strokeWidth="2"
                  />
                  <path
                    d="M10 17L2 9L10 1"
                    stroke={color}
                    className={`${
                      color === "#FFFBF3"
                        ? "group-hover:stroke-soft-tosca"
                        : "group-hover:stroke-white-ivory"
                    } duration-500 transition-all`}
                    strokeWidth="2"
                  />
                </svg>
              </>
            )}
            {name}
            {arrow === "right" && (
              <>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 9L16 9"
                    stroke={color}
                    strokeWidth="2"
                    className={`${
                      color === "#FFFBF3"
                        ? "group-hover:stroke-soft-tosca"
                        : "group-hover:stroke-white-ivory"
                    } duration-500 transition-all`}
                  />
                  <path
                    d="M8 1L16 9L8 17"
                    stroke={color}
                    strokeWidth="2"
                    className={`${
                      color === "#FFFBF3"
                        ? "group-hover:stroke-soft-tosca"
                        : "group-hover:stroke-white-ivory"
                    } duration-500 transition-all`}
                  />
                </svg>
              </>
            )}

            <div
              className={` rounded-full left-0 ${
                hoverPosition === "right"
                  ? "translate-x-[100%]"
                  : "-translate-x-[100%]"
              }  z-[-1] absolute w-[300px] h-[300px] top-1/2 -translate-y-1/2  ${
                hoverType === 1 && "group-hover:translate-x-0 "
              }duration-500 transition-all`}
              style={{ backgroundColor: hoverColor }}
            ></div>
            <div
              className={`bg-white-ivory z-[-1] absolute w-[600px] h-[600px] bottom-0 left-1/2 -translate-x-1/2 translate-y-full ${
                hoverType === 2 && "group-hover:translate-y-1/2"
              } rounded-full  duration-500 transition-all`}
            ></div>
          </button>
        </div>
      )}
    </>
  );
};

export default Button;
