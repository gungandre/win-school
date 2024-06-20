import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Button from "../button/Button";
import { useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import "swiper/css";

import "swiper/css/pagination";
const Section2 = () => {
  const [disableButtonRight, setDisableButtonRight] = useState(false);
  const [disableButtonLeft, setDisableButtonLeft] = useState(true);

  const swiperInit = (swiper) => {
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

  return (
    <section className="h-dvh  place-content-center bg-soft-tosca section flex justify-center items-center section-swiper">
      <div className="w-[85%] h-[80%] flex gap-x-14 ">
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          navigation
          speed={0}
          pagination={{
            clickable: false,
          }}
          scrollbar={{ draggable: true }}
          onSwiper={swiperInit}
          onSlideChange={swiperSlideChange}
          className=" !pl-[30px]"
        >
          <SwiperSlide>
            <div className="max-sm:w-full max-sm:h-full w-[1496px] h-[80%] flex gap-x-14 !overflow-visible max-sm:flex-col">
              <div className="flex flex-col">
                <div className="flex flex-col w-max h-full gap-y-20">
                  <div className="relative  w-[340px] h-[483px]  flex justify-center ">
                    <div className=" swiper-image-container mt-auto ">
                      <div className="absolute  w-[340px] h-[404px] bg-white-ivory rounded-[35px] bottom-0 left-1/2 translate-x-[-50%] "></div>
                      <img
                        className="relative w-[454px] max-w-[unset] left-[56%] translate-x-[-50%]"
                        src="/assets/images/home/founder.png "
                        alt="foto 1"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex gap-5">
                      <Button
                        name={"Prev"}
                        arrow={"left"}
                        color={"#FFFBF3"}
                        disableButton={disableButtonLeft}
                        hoverPosition={"right"}
                        buttonType="button"
                      />
                      <Button
                        name={"Next"}
                        arrow={"right"}
                        color={"#FFFBF3"}
                        hoverPosition={"left"}
                        disableButton={disableButtonRight}
                        buttonType="button"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full  translate-y-[10%]  flex flex-col gap-y-10">
                <div className=" flex flex-col gap-7">
                  <div className="font-seagull text-[48px] text-white-ivory leading-[53px] name">
                    Dr. Drs. I Nyoman <br />
                    Gede Astina, M.Pd., CHT., CHA
                  </div>
                  <div className="font-helixa text-white-ivory text-[28px] profesion">
                    Founder
                  </div>
                </div>
                <div className="w-full flex  ">
                  <div className="flex gap-5 ml-auto max-w-[890px]">
                    <div className="font-helixa text-white-ivory text-[72px] leading-[75px] petik-dua">
                      "
                    </div>
                    <div className="font-helixa text-white-ivory text-[48px] leading-[58px] quotes">
                      It is a wonderful milestone for our organization to
                      facilitate Early Childhood Education with strong will in
                      nurturing future leaders.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[1496px] h-[746px] flex gap-x-14 !overflow-visible">
              <div className="flex flex-col">
                <div className="flex flex-col w-max h-full gap-y-20">
                  <div className="relative  w-[340px] h-[483px]  flex justify-center ">
                    <div className=" swiper-image-container mt-auto ">
                      <div className="absolute w-[340px] h-[404px] bg-white-ivory rounded-[35px] bottom-0 left-1/2 translate-x-[-50%] "></div>
                      <img
                        className="relative w-[322px] max-w-[unset] left-[47%] translate-x-[-50%]"
                        src="/assets/images/home/co-founder.png "
                        alt="foto 1"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex gap-5">
                      <Button
                        name={"Prev"}
                        arrow={"left"}
                        color={"#FFFBF3"}
                        disableButton={disableButtonLeft}
                        hoverPosition={"right"}
                        buttonType="button"
                      />
                      <Button
                        name={"Next"}
                        arrow={"right"}
                        color={"#FFFBF3"}
                        hoverPosition={"left"}
                        disableButton={disableButtonRight}
                        buttonType="button"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full  translate-y-[10%]  flex flex-col gap-y-10">
                <div className=" flex flex-col gap-7">
                  <div className="font-seagull text-[48px] text-white-ivory leading-[53px] name">
                    Dr. I Made <br />
                    Sudjana, S.E., M.M., CHT., CHA
                  </div>
                  <div className="font-helixa text-white-ivory text-[28px] profesion">
                    Founder
                  </div>
                </div>
                <div className="w-full flex  ">
                  <div className="flex gap-5 ml-auto max-w-[890px]">
                    <div className="font-helixa text-white-ivory text-[72px] leading-[75px] petik-dua">
                      "
                    </div>
                    <div className="font-helixa text-white-ivory text-[48px] leading-[58px] quotes">
                      Continuum education from early childhood to higher
                      education must ensure the quality of both process and
                      outcomes. I believe WIN School is fully on the right
                      direction.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[1496px] h-[746px] flex gap-x-14 !overflow-visible">
              <div className="flex flex-col">
                <div className="flex flex-col w-max h-full gap-y-20">
                  <div className="relative  w-[340px] h-[483px]  flex justify-center ">
                    <div className=" swiper-image-container mt-auto ">
                      <div className="absolute w-[340px] h-[404px] bg-white-ivory rounded-[35px] bottom-0 left-1/2 translate-x-[-50%] "></div>
                      <img
                        className="relative w-[301px] max-w-[unset] left-[54%] translate-x-[-50%]"
                        src="/assets/images/home/win-principal.png "
                        alt="foto 1"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex gap-5">
                      <Button
                        name={"Prev"}
                        arrow={"left"}
                        color={"#FFFBF3"}
                        disableButton={disableButtonLeft}
                        hoverPosition={"right"}
                        buttonType="button"
                      />
                      <Button
                        name={"Next"}
                        arrow={"right"}
                        color={"#FFFBF3"}
                        hoverPosition={"left"}
                        disableButton={disableButtonRight}
                        buttonType="button"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full  translate-y-[10%]  flex flex-col gap-y-10">
                <div className=" flex flex-col gap-7">
                  <div className="font-seagull text-[48px] text-white-ivory leading-[53px] name">
                    Imroatun <br />
                    Nafi'ah, S.Pd.
                  </div>
                  <div className="font-helixa text-white-ivory text-[28px] profesion">
                    WIN Principal
                  </div>
                </div>
                <div className="w-full flex  ">
                  <div className="flex gap-5 ml-auto max-w-[890px]">
                    <div className="font-helixa text-white-ivory text-[72px] leading-[75px] petik-dua">
                      "
                    </div>
                    <div className="font-helixa text-white-ivory text-[48px] leading-[58px] quotes">
                      Our school offers so much value, and it goes beyond simply
                      providing access to top-notch learning resources; it also
                      fosters a vibrant community where dreams come true, ideas
                      flourish, and learning has no boundaries.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[1496px] h-[746px] flex gap-x-14 !overflow-visible">
              <div className="flex flex-col">
                <div className="flex flex-col w-max h-full gap-y-20">
                  <div className="relative  w-[340px] h-[483px]  flex justify-center ">
                    <div className=" swiper-image-container mt-auto ">
                      <div className="absolute w-[340px] h-[404px] bg-white-ivory rounded-[35px] bottom-0 left-1/2 translate-x-[-50%] "></div>
                      <img
                        className="relative w-[408px] max-w-[unset] left-[51%] translate-x-[-50%]"
                        src="/assets/images/home/teacher.png "
                        alt="foto 1"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex gap-5">
                      <Button
                        name={"Prev"}
                        arrow={"left"}
                        color={"#FFFBF3"}
                        disableButton={disableButtonLeft}
                        hoverPosition={"right"}
                        buttonType="button"
                      />
                      <Button
                        name={"Next"}
                        arrow={"right"}
                        color={"#FFFBF3"}
                        hoverPosition={"left"}
                        disableButton={disableButtonRight}
                        buttonType="button"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full  translate-y-[10%]  flex flex-col gap-y-10">
                <div className=" flex flex-col gap-7">
                  <div className="font-seagull text-[48px] text-white-ivory leading-[53px] name">
                    Margareth <br />
                  </div>
                  <div className="font-helixa text-white-ivory text-[28px] profesion">
                    Early Childhood Practitioner
                  </div>
                </div>
                <div className="w-full flex  ">
                  <div className="flex gap-5 ml-auto max-w-[890px]">
                    <div className="font-helixa text-white-ivory text-[72px] leading-[75px] petik-dua">
                      "
                    </div>
                    <div className="font-helixa text-white-ivory text-[48px] leading-[58px] quotes">
                      Children’s learning is dynamic, complex and holistic. A
                      well designed play based learning environment allow
                      children to make connections between prior experiences and
                      new learning.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Section2;
