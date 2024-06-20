"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState } from "react";

import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import "swiper/css";

import "swiper/css/pagination";

const Section2Mobile = () => {
  const [disableButtonRight, setDisableButtonRight] = useState(false);
  const [disableButtonLeft, setDisableButtonLeft] = useState(true);
  const [swiper, useSwiper] = useState(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".section-swiper",
      onEnter: () => {
        const prevNameEl = document.querySelectorAll(
          ".name .overflow-hidden div"
        );

        const prevProfesionEl = document.querySelectorAll(
          ".profesion .overflow-hidden div"
        );

        const prevQuotesEl = document.querySelectorAll(
          ".quotes .overflow-hidden div"
        );

        const prevPetikEl = document.querySelectorAll(
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
          document.querySelectorAll(".swiper-image-container"),
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          }
        );
      },
    });
  }, []);

  const swiperInit = (swiper) => {
    useSwiper(swiper);
    swiper.slides.forEach((el) => {
      const nameSplit = new SplitText(el.querySelector(".name"), {
        type: "lines",
      });

      const profesionSplit = new SplitText(el.querySelector(".profesion"), {
        type: "lines",
      });

      const quotesSplit = new SplitText(el.querySelector(".quotes"), {
        type: "lines",
      });

      const petikDuaSplit = new SplitText(
        el.querySelector(".petik-dua", {
          type: "lines",
        })
      );

      nameSplit.lines.forEach((line) => {
        const div = document.createElement("div");
        div.classList.add("overflow-hidden");
        div.appendChild(line);
        el.querySelector(".name").appendChild(div);
      });

      profesionSplit.lines.forEach((line) => {
        const div = document.createElement("div");
        div.classList.add("overflow-hidden");
        div.classList.add("font-helixa");
        div.classList.add("text-white-ivory");
        div.classList.add("text-[28px]");
        div.appendChild(line);
        el.querySelector(".profesion").appendChild(div);
      });

      petikDuaSplit.lines.forEach((line) => {
        const div = document.createElement("div");
        div.classList.add("overflow-hidden");

        div.appendChild(line);
        el.querySelector(".petik-dua").appendChild(div);
      });

      quotesSplit.lines.forEach((line) => {
        const div = document.createElement("div");
        div.classList.add("overflow-hidden");
        div.appendChild(line);
        el.querySelector(".quotes").appendChild(div);
      });
    });
  };

  const swiperSlideChange = (swiper) => {
    if (swiper.activeIndex === swiper.slides.length - 1) {
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
    <div className="w-full min-h-dvh bg-soft-tosca flex justify-center items-center px-[32px]">
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        navigation
        speed={0}
        pagination={{
          clickable: false,
          horizontalClass: "pagination-mobile",
        }}
        loop={true}
        scrollbar={{ draggable: true }}
        onSwiper={swiperInit}
        onSlideChange={swiperSlideChange}
      >
        <SwiperSlide>
          <div className="w-full h-[80%] ">
            <div className="w-full flex flex-col justify-center items-center h-full gap-y-[32px]">
              <div></div>
              <div className="relative  w-[269px] h-[300px]  flex justify-center items-end">
                <div className=" swiper-image-container w-full ">
                  <div className="absolute  w-[204px] h-[266px] bg-white-ivory rounded-[35px] bottom-0 left-1/2 translate-x-[-50%] "></div>
                  <div className="w-full h-full">
                    <img
                      className="relative w-[97%]  left-[55%] translate-x-[-50%]"
                      src="/assets/images/home/founder.png "
                      alt="foto 1"
                    />
                  </div>
                </div>

                <buttom
                  className="w-[40px] h-[40px] rounded-full border-white-ivory  border-[1px] absolute left-[-18%] top-[50%] translate-y-[-50%] flex justify-center items-center"
                  onClick={swiperPrevSlide}
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4432 7.99427L1.55677 7.99427M1.55677 7.99427L9 15.4375M1.55677 7.99427L9 0.551041"
                      stroke="#FFFBF3"
                    />
                  </svg>
                </buttom>
                <button
                  className="w-[40px] h-[40px] rounded-full border-white-ivory  border-[1px] absolute right-[-18%] top-[50%] translate-y-[-50%] flex justify-center items-center"
                  onClick={swiperNextSlide}
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.556771 8.00573L15.4432 8.00573M15.4432 8.00573L8 0.562501M15.4432 8.00573L8 15.449"
                      stroke="#FFFBF3"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-y-[8px]">
                <div className="font-seagull text-[24px] leading-[24px] text-white-ivory text-center gap-y-[5px] name">
                  Dr. Drs. I Nyoman Gede <br />
                  Astina, M.Pd., CHT., CHA
                </div>
                <div className="font-helixa text-[16px] text-white-ivory text-center profesion">
                  Founder
                </div>
              </div>

              <div className="text-center font-helixa text-[24px]  leading-[29px] text-white-ivory quotes">
                “ It is a wonderful milestone for our organization to facilitate
                Early Childhood Education with strong will in nurturing future
                leaders. ”
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[80%] ">
            <div className="w-full flex flex-col justify-center items-center h-full gap-y-[32px]">
              <div></div>
              <div className="relative  w-[269px] h-[300px]  flex justify-center items-end">
                <div className=" swiper-image-container w-full ">
                  <div className="absolute  w-[204px] h-[266px] bg-white-ivory rounded-[35px] bottom-0 left-1/2 translate-x-[-50%] "></div>
                  <div className="w-full h-full">
                    <img
                      className="relative w-[70%]  left-[48%] translate-x-[-50%]"
                      src="/assets/images/home/co-founder.png "
                      alt="foto 1"
                    />
                  </div>
                </div>

                <buttom
                  className="w-[40px] h-[40px] rounded-full border-white-ivory  border-[1px] absolute left-[-18%] top-[50%] translate-y-[-50%] flex justify-center items-center"
                  onClick={swiperPrevSlide}
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4432 7.99427L1.55677 7.99427M1.55677 7.99427L9 15.4375M1.55677 7.99427L9 0.551041"
                      stroke="#FFFBF3"
                    />
                  </svg>
                </buttom>
                <button
                  className="w-[40px] h-[40px] rounded-full border-white-ivory  border-[1px] absolute right-[-18%] top-[50%] translate-y-[-50%] flex justify-center items-center"
                  onClick={swiperNextSlide}
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.556771 8.00573L15.4432 8.00573M15.4432 8.00573L8 0.562501M15.4432 8.00573L8 15.449"
                      stroke="#FFFBF3"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-y-[8px]">
                <div className="font-seagull text-[24px] leading-[24px] text-white-ivory text-center gap-y-[5px] name">
                  Dr. I Made <br />
                  Sudjana, S.E., M.M., CHT., CHA
                </div>
                <div className="font-helixa text-[16px] text-white-ivory text-center profesion">
                  Founder
                </div>
              </div>

              <div className="text-center font-helixa text-[24px]  leading-[29px] text-white-ivory quotes">
                “ Continuum education from early childhood to higher education
                must ensure the quality of both process and outcomes. I believe
                WIN School is fully on the right direction. ”
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[80%] ">
            <div className="w-full flex flex-col justify-center items-center h-full gap-y-[32px]">
              <div></div>
              <div className="relative  w-[269px] h-[300px]  flex justify-center items-end">
                <div className=" swiper-image-container w-full ">
                  <div className="absolute  w-[204px] h-[266px] bg-white-ivory rounded-[35px] bottom-0 left-1/2 translate-x-[-50%] "></div>
                  <div className="w-full h-full">
                    <img
                      className="relative w-[70%]  left-[53%] translate-x-[-50%]"
                      src="/assets/images/home/win-principal.png "
                      alt="foto 1"
                    />
                  </div>
                </div>

                <buttom
                  className="w-[40px] h-[40px] rounded-full border-white-ivory  border-[1px] absolute left-[-18%] top-[50%] translate-y-[-50%] flex justify-center items-center"
                  onClick={swiperPrevSlide}
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4432 7.99427L1.55677 7.99427M1.55677 7.99427L9 15.4375M1.55677 7.99427L9 0.551041"
                      stroke="#FFFBF3"
                    />
                  </svg>
                </buttom>
                <button
                  className="w-[40px] h-[40px] rounded-full border-white-ivory  border-[1px] absolute right-[-18%] top-[50%] translate-y-[-50%] flex justify-center items-center"
                  onClick={swiperNextSlide}
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.556771 8.00573L15.4432 8.00573M15.4432 8.00573L8 0.562501M15.4432 8.00573L8 15.449"
                      stroke="#FFFBF3"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-y-[8px]">
                <div className="font-seagull text-[24px] leading-[24px] text-white-ivory text-center gap-y-[5px] name">
                  Imroatun Nafi'ah, S.Pd.
                </div>
                <div className="font-helixa text-[16px] text-white-ivory text-center profesion">
                  WIN Principal
                </div>
              </div>

              <div className="text-center font-helixa text-[24px]  leading-[29px] text-white-ivory quotes">
                “ Our school offers so much value, and it goes beyond simply
                providing access to top-notch learning resources; it also
                fosters a vibrant community where dreams come true, ideas
                flourish, and learning has no boundaries. ”
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[80%] ">
            <div className="w-full flex flex-col justify-center items-center h-full gap-y-[32px]">
              <div></div>
              <div className="relative  w-[269px] h-[300px]  flex justify-center items-end">
                <div className=" swiper-image-container w-full ">
                  <div className="absolute  w-[204px] h-[266px] bg-white-ivory rounded-[35px] bottom-0 left-1/2 translate-x-[-50%] "></div>
                  <div className="w-full h-full">
                    <img
                      className="relative w-[94%]  left-[50%] translate-x-[-50%]"
                      src="/assets/images/home/teacher.png "
                      alt="foto 1"
                    />
                  </div>
                </div>

                <buttom
                  className="w-[40px] h-[40px] rounded-full border-white-ivory  border-[1px] absolute left-[-18%] top-[50%] translate-y-[-50%] flex justify-center items-center"
                  onClick={swiperPrevSlide}
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4432 7.99427L1.55677 7.99427M1.55677 7.99427L9 15.4375M1.55677 7.99427L9 0.551041"
                      stroke="#FFFBF3"
                    />
                  </svg>
                </buttom>
                <button
                  className="w-[40px] h-[40px] rounded-full border-white-ivory  border-[1px] absolute right-[-18%] top-[50%] translate-y-[-50%] flex justify-center items-center"
                  onClick={swiperNextSlide}
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.556771 8.00573L15.4432 8.00573M15.4432 8.00573L8 0.562501M15.4432 8.00573L8 15.449"
                      stroke="#FFFBF3"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-y-[8px]">
                <div className="font-seagull text-[24px] leading-[24px] text-white-ivory text-center gap-y-[5px] name">
                  Margareth
                </div>
                <div className="font-helixa text-[16px] text-white-ivory text-center profesion">
                  Early Childhood Practitioner
                </div>
              </div>

              <div className="text-center font-helixa text-[24px]  leading-[29px] text-white-ivory quotes">
                “ Children’s learning is dynamic, complex and holistic. A well
                designed play based learning environment allow children to make
                connections between prior experiences and new learning. ”
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Section2Mobile;
