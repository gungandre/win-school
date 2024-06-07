"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ClassModal from "./class-modal";

const Section3 = ({ setOnHover }) => {
  gsap.registerPlugin(ScrollTrigger);
  const elemenRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: elemenRef.current,
      start: "top bottom",
      end: "bottom top",

      onEnter: () => {
        gsap.to(".class-card", {
          opacity: 1,
          transform: "translateY(0)",
          ease: "power1.out",
          duration: 1,
          stagger: 0.2,
        });
      },
    });
  });

  const modalClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <ClassModal openModal={openModal} setOpenModal={setOpenModal} />
      <div className="min-h-dvh w-full px-15  bg-white-ivory" ref={elemenRef}>
        <div className="w-full flex  flex-wrap justify-between">
          <div
            className="group class-card translate-y-full opacity-0"
            onClick={modalClick}
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
          >
            <div className="p-[48px] w-[890px] h-[669px] flex flex-col justify-between  bg-white-ivory rounded-[50px] group-hover:bg-soft-tosca duration-500 transition-all">
              <div className="w-full flex justify-between items-center ">
                <div className="flex flex-col">
                  <div className="font-helixa text-[48px] text-sunset-coral group-hover:text-white-ivory transition-all duration-500">
                    Stimulation Class
                  </div>
                  <div className="text-[28px] font-helixa text-[#404040] group-hover:text-white-ivory transition-all duration-500">
                    20 - 30 months old
                  </div>
                </div>
                <div className="">
                  <div className="relative w-[203px] h-[76px] flex items-center">
                    <div className="w-0 group-hover:w-[301px] duration-1000 opacity-0 group-hover:opacity-100 transition-all h-[76px] bg-white-ivory rounded-[38px] absolute right-0 overflow-hidden">
                      <div className="relative w-full h-full flex items-center">
                        <div className="font-helixa font-bold text-[28px] text-[#404040] ml-0 group-hover:ml-8 opacity-0 group-hover:opacity-100 duration-1000 transition-all text-nowrap">
                          Register Now
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="w-[76px] h-[76px] group-hover:w-[62px] group-hover:h-[62px] transition-all duration-1000 bg-sunset-coral rounded-full flex justify-center items-center absolute right-[5%] z-10">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.78125 18.2676L17.7694 2.27938"
                            stroke="#FFFBF3"
                            strokeWidth="2.82634"
                          />
                          <path
                            d="M1.78125 2.28125H17.7694V18.2694"
                            stroke="#FFFBF3"
                            strokeWidth="2.82634"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img src="assets/images/playschool/image-card.png" alt="" />
              </div>
              <div className="w-full flex justify-between">
                <div className=" flex w-[55%] justify-between">
                  <div className="flex flex-col">
                    <div className="font-helixa text-[24px] text-[#404040] group-hover:text-white-ivory transition-all duration-500">
                      Time
                    </div>
                    <div className="font-helixa font-bold text-[20px] text-[#404040] group-hover:text-white-ivory transition-all duration-500">
                      09:00 - 10:30 AM
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-helixa text-[24px] text-[#404040] group-hover:text-white-ivory transition-all duration-500">
                      Days
                    </div>
                    <div className="font-helixa font-bold text-[20px] text-[#404040] group-hover:text-white-ivory transition-all duration-500">
                      Monday & Wednesday
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="font-helixa text-[24px] text-[#404040] text-end group-hover:text-white-ivory transition-all duration-500">
                    Limited Seats
                  </div>
                  <div className="font-helixa font-bold text-[20px] text-[#404040] text-end group-hover:text-white-ivory transition-all duration-500">
                    6 Seats Left
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="group class-card translate-y-full opacity-0"
            onClick={modalClick}
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
          >
            <div className="p-[48px] w-[890px] h-[669px] flex flex-col justify-between  bg-white-ivory rounded-[50px] group-hover:bg-soft-tosca duration-500 transition-all">
              <div className="w-full flex justify-between items-center ">
                <div className="flex flex-col">
                  <div className="font-helixa text-[48px] text-sunset-coral group-hover:text-white-ivory transition-all duration-500">
                    Stimulation Class
                  </div>
                  <div className="text-[28px] font-helixa text-[#404040] group-hover:text-white-ivory transition-all duration-500">
                    20 - 30 months old
                  </div>
                </div>
                <div className="">
                  <div className="relative w-[203px] h-[76px] flex items-center">
                    <div className="w-0 group-hover:w-[301px] duration-1000 opacity-0 group-hover:opacity-100 transition-all h-[76px] bg-white-ivory rounded-[38px] absolute right-0 overflow-hidden">
                      <div className="relative w-full h-full flex items-center">
                        <div className="font-helixa font-bold text-[28px] text-[#404040] ml-0 group-hover:ml-8 opacity-0 group-hover:opacity-100 duration-1000 transition-all text-nowrap">
                          Register Now
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="w-[76px] h-[76px] group-hover:w-[62px] group-hover:h-[62px] transition-all duration-1000 bg-sunset-coral rounded-full flex justify-center items-center absolute right-[5%] z-10">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.78125 18.2676L17.7694 2.27938"
                            stroke="#FFFBF3"
                            strokeWidth="2.82634"
                          />
                          <path
                            d="M1.78125 2.28125H17.7694V18.2694"
                            stroke="#FFFBF3"
                            strokeWidth="2.82634"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img src="assets/images/playschool/image-card.png" alt="" />
              </div>
              <div className="w-full flex justify-between">
                <div className=" flex w-[55%] justify-between">
                  <div className="flex flex-col">
                    <div className="font-helixa text-[24px] text-[#404040] group-hover:text-white-ivory transition-all duration-500">
                      Time
                    </div>
                    <div className="font-helixa font-bold text-[20px] text-[#404040] group-hover:text-white-ivory transition-all duration-500">
                      09:00 - 10:30 AM
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-helixa text-[24px] text-[#404040] group-hover:text-white-ivory transition-all duration-500">
                      Days
                    </div>
                    <div className="font-helixa font-bold text-[20px] text-[#404040] group-hover:text-white-ivory transition-all duration-500">
                      Monday & Wednesday
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="font-helixa text-[24px] text-[#404040] text-end group-hover:text-white-ivory transition-all duration-500">
                    Limited Seats
                  </div>
                  <div className="font-helixa font-bold text-[20px] text-[#404040] text-end group-hover:text-white-ivory transition-all duration-500">
                    6 Seats Left
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="group class-card translate-y-full opacity-0"
            onClick={modalClick}
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
          >
            <div className="p-[48px] w-[890px] h-[669px] flex flex-col justify-between  bg-white-ivory rounded-[50px] group-hover:bg-soft-tosca duration-500 transition-all">
              <div className="w-full flex justify-between items-center ">
                <div className="flex flex-col">
                  <div className="font-helixa text-[48px] text-sunset-coral group-hover:text-white-ivory transition-all duration-500">
                    Stimulation Class
                  </div>
                  <div className="text-[28px] font-helixa text-[#404040] group-hover:text-white-ivory transition-all duration-500">
                    20 - 30 months old
                  </div>
                </div>
                <div className="">
                  <div className="relative w-[203px] h-[76px] flex items-center">
                    <div className="w-0 group-hover:w-[301px] duration-1000 opacity-0 group-hover:opacity-100 transition-all h-[76px] bg-white-ivory rounded-[38px] absolute right-0 overflow-hidden">
                      <div className="relative w-full h-full flex items-center">
                        <div className="font-helixa font-bold text-[28px] text-[#404040] ml-0 group-hover:ml-8 opacity-0 group-hover:opacity-100 duration-1000 transition-all text-nowrap">
                          Register Now
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="w-[76px] h-[76px] group-hover:w-[62px] group-hover:h-[62px] transition-all duration-1000 bg-sunset-coral rounded-full flex justify-center items-center absolute right-[5%] z-10">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.78125 18.2676L17.7694 2.27938"
                            stroke="#FFFBF3"
                            strokeWidth="2.82634"
                          />
                          <path
                            d="M1.78125 2.28125H17.7694V18.2694"
                            stroke="#FFFBF3"
                            strokeWidth="2.82634"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img src="assets/images/playschool/image-card.png" alt="" />
              </div>
              <div className="w-full flex justify-between">
                <div className=" flex w-[55%] justify-between">
                  <div className="flex flex-col">
                    <div className="font-helixa text-[24px] text-[#404040] group-hover:text-white-ivory transition-all duration-500">
                      Time
                    </div>
                    <div className="font-helixa font-bold text-[20px] text-[#404040] group-hover:text-white-ivory transition-all duration-500">
                      09:00 - 10:30 AM
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-helixa text-[24px] text-[#404040] group-hover:text-white-ivory transition-all duration-500">
                      Days
                    </div>
                    <div className="font-helixa font-bold text-[20px] text-[#404040] group-hover:text-white-ivory transition-all duration-500">
                      Monday & Wednesday
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="font-helixa text-[24px] text-[#404040] text-end group-hover:text-white-ivory transition-all duration-500">
                    Limited Seats
                  </div>
                  <div className="font-helixa font-bold text-[20px] text-[#404040] text-end group-hover:text-white-ivory transition-all duration-500">
                    6 Seats Left
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="group class-card translate-y-full opacity-0"
            onClick={modalClick}
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
          >
            <div className="p-[48px] w-[890px] h-[669px] flex flex-col justify-between  bg-white-ivory rounded-[50px] group-hover:bg-soft-tosca duration-500 transition-all">
              <div className="w-full flex justify-between items-center ">
                <div className="flex flex-col">
                  <div className="font-helixa text-[48px] text-sunset-coral group-hover:text-white-ivory transition-all duration-500">
                    Stimulation Class
                  </div>
                  <div className="text-[28px] font-helixa text-[#404040] group-hover:text-white-ivory transition-all duration-500">
                    20 - 30 months old
                  </div>
                </div>
                <div className="">
                  <div className="relative w-[203px] h-[76px] flex items-center">
                    <div className="w-0 group-hover:w-[301px] duration-1000 opacity-0 group-hover:opacity-100 transition-all h-[76px] bg-white-ivory rounded-[38px] absolute right-0 overflow-hidden">
                      <div className="relative w-full h-full flex items-center">
                        <div className="font-helixa font-bold text-[28px] text-[#404040] ml-0 group-hover:ml-8 opacity-0 group-hover:opacity-100 duration-1000 transition-all text-nowrap">
                          Register Now
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="w-[76px] h-[76px] group-hover:w-[62px] group-hover:h-[62px] transition-all duration-1000 bg-sunset-coral rounded-full flex justify-center items-center absolute right-[5%] z-10">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.78125 18.2676L17.7694 2.27938"
                            stroke="#FFFBF3"
                            strokeWidth="2.82634"
                          />
                          <path
                            d="M1.78125 2.28125H17.7694V18.2694"
                            stroke="#FFFBF3"
                            strokeWidth="2.82634"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img src="assets/images/playschool/image-card.png" alt="" />
              </div>
              <div className="w-full flex justify-between">
                <div className=" flex w-[55%] justify-between">
                  <div className="flex flex-col">
                    <div className="font-helixa text-[24px] text-[#404040] group-hover:text-white-ivory transition-all duration-500">
                      Time
                    </div>
                    <div className="font-helixa font-bold text-[20px] text-[#404040] group-hover:text-white-ivory transition-all duration-500">
                      09:00 - 10:30 AM
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-helixa text-[24px] text-[#404040] group-hover:text-white-ivory transition-all duration-500">
                      Days
                    </div>
                    <div className="font-helixa font-bold text-[20px] text-[#404040] group-hover:text-white-ivory transition-all duration-500">
                      Monday & Wednesday
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="font-helixa text-[24px] text-[#404040] text-end group-hover:text-white-ivory transition-all duration-500">
                    Limited Seats
                  </div>
                  <div className="font-helixa font-bold text-[20px] text-[#404040] text-end group-hover:text-white-ivory transition-all duration-500">
                    6 Seats Left
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
