"use client";

import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { useRef } from "react";

const Section7Mobile = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger, SplitText);

  useGSAP(
    () => {
      const title = new SplitText(titleRef.current, {
        type: "lines",
        linesClass: "title-line",
      });

      const desc = new SplitText(descRef.current, {
        type: "lines",
        linesClass: "desc-line",
      });

      ScrollTrigger.create({
        trigger: titleRef.current,

        onEnter: () => {
          gsap.from(title.lines, {
            opacity: 0,
            transform: "translateY(100%)",
            stagger: 0.1,
          });

          gsap.from(desc.lines, {
            opacity: 0,
            transform: "translateY(100%)",
            stagger: 0.1,
          });
        },
      });

      ScrollTrigger.create({
        trigger: desc.current,

        onEnter: () => {
          gsap.from(desc.lines, {
            opacity: 0,
            transform: "translateY(100%)",
            stagger: 0.1,
          });
        },
      });

      ScrollTrigger.create({
        trigger: ".how-to-register-mobile",

        onEnter: () => {
          gsap.from(".how-to-register-mobile", {
            y: "100%",
            opacity: 0,
            ease: "power1.out",
            duration: 1,
          });
        },
      });

      ScrollTrigger.create({
        trigger: ".further-mobile",

        onEnter: () => {
          gsap.from(".further-mobile", {
            y: "100%",
            opacity: 0,
            ease: "power1.out",
            stagger: 0.1,
            duration: 1,
          });
        },
      });

      ScrollTrigger.create({
        trigger: ".card-daycare",
        onEnter: () => {
          gsap.to(
            ".card-daycare",

            {
              transform: "translateY(0)",
              opacity: 1,
              duration: 1,
              stagger: 0.05,
              ease: "power1.out",
            }
          );
        },
      });
    },
    { scope: container }
  );

  return (
    <div className="w-full min-h-dvh px-[32px] bg-white-ivory" ref={container}>
      <div className="w-full flex flex-col gap-y-[60px]">
        <div
          className="w-full font-helixa text-[48px] leading-[48px] text-sunset-coral title"
          ref={titleRef}
        >
          We Provide an Excellent Selection of Classes
        </div>
        <div className="w-full flex justify-end">
          <div
            className="max-w-[217px] font-helixa text-[16px] leading-[19px] text-[#5E5E5E]"
            ref={descRef}
          >
            Explore our diverse selection of classes, each tailored to provide a
            nurturing environment where children can learn, grow, and thrive.
          </div>
        </div>
        <div className="w-full flex justify-center flex-col gap-y-14 items-center">
          <Link href={"/daycare"}>
            <div className="group card-daycare translate-y-full opacity-0">
              <div className="w-[366px] h-[170px] bg-almond-cream group-hover:bg-soft-tosca rounded-[25px] relative   overflow-y-visible duration-1000 transition-all group-hover:translate-y-[-5%]">
                <div className="flex flex-col  absolute top-[7%] left-[7%]">
                  <div className="font-seagull text-[24px] text-sunset-coral group-hover:text-white-ivory duration-1000 transition-all">
                    Daycare
                  </div>
                  <div className="font-helixa text-[18px] text-[#5e5e5e] group-hover:text-white-ivory duration-1000 transition-all">
                    3 - 6 years old
                  </div>
                </div>
                <Image
                  src={"/assets/images/home/Image1.png"}
                  width={196}
                  height={233}
                  className="absolute bottom-0 right-0"
                />
                <div className="absolute bottom-[5%] right-[2%] ">
                  <div className="relative w-[203px] h-[32px] flex items-center">
                    <div className="w-0 group-hover:w-[203px] duration-1000 opacity-0 group-hover:opacity-100 transition-all h-[76px] bg-white-ivory rounded-[38px] absolute right-0">
                      <div className="relative w-full h-full flex items-center">
                        <div className="font-helixa font-bold text-[28px] text-[#404040] ml-0 group-hover:ml-8 opacity-0 group-hover:opacity-100 duration-1000 transition-all">
                          More
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="w-[32px] h-[32px] group-hover:w-[62px] group-hover:h-[62px] transition-all duration-1000 bg-sunset-coral rounded-full flex justify-center items-center absolute right-[5%] z-10">
                        <svg
                          width="10"
                          height="10"
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
            </div>
          </Link>
          <Link href={"/daycare"}>
            <div className="group card-daycare translate-y-full opacity-0">
              <div className="w-[366px] h-[170px] bg-almond-cream group-hover:bg-soft-tosca rounded-[25px] relative   overflow-y-visible duration-1000 transition-all group-hover:translate-y-[-5%]">
                <div className="flex flex-col  absolute top-[7%] left-[7%]">
                  <div className="font-seagull text-[24px] text-sunset-coral group-hover:text-white-ivory duration-1000 transition-all">
                    Playschool
                  </div>
                  <div className="font-helixa text-[18px] text-[#5e5e5e] group-hover:text-white-ivory duration-1000 transition-all">
                    3 - 6 years old
                  </div>
                </div>
                <Image
                  src={"/assets/images/home/Image2.png"}
                  width={196}
                  height={233}
                  className="absolute bottom-0 right-0"
                />
                <div className="absolute bottom-[5%] right-[2%] ">
                  <div className="relative w-[203px] h-[32px] flex items-center">
                    <div className="w-0 group-hover:w-[203px] duration-1000 opacity-0 group-hover:opacity-100 transition-all h-[76px] bg-white-ivory rounded-[38px] absolute right-0">
                      <div className="relative w-full h-full flex items-center">
                        <div className="font-helixa font-bold text-[28px] text-[#404040] ml-0 group-hover:ml-8 opacity-0 group-hover:opacity-100 duration-1000 transition-all">
                          More
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="w-[32px] h-[32px] group-hover:w-[62px] group-hover:h-[62px] transition-all duration-1000 bg-sunset-coral rounded-full flex justify-center items-center absolute right-[5%] z-10">
                        <svg
                          width="10"
                          height="10"
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
            </div>
          </Link>
        </div>
        <div className="w-full flex justify-center flex-col gap-y-[24px] ">
          <div className="font-helixa text-[48px] leading-[50px] text-sunset-coral text-center how-to-register-mobile">
            How To register
          </div>
          <div className="w-full  grid grid-cols-2 px-[32px]">
            <div className="flex flex-col gap-y-[16px] further-mobile">
              <div className="font-helixa font-bold text-[16px] text-[#404040]">
                01
              </div>
              <div>
                <svg
                  width="62"
                  height="62"
                  viewBox="0 0 62 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="62" height="62" rx="15.5" fill="#EEE7D9" />
                  <path
                    d="M37.4613 43.7091C35.3407 43.7091 30.1854 40.964 25.857 35.0712C21.8086 29.5599 19.8398 25.5787 19.8398 22.8998C19.8398 20.7904 21.2791 19.7839 22.052 19.2426L22.243 19.1076C23.097 18.4895 24.4256 18.2891 24.935 18.2891C25.8282 18.2891 26.2042 18.8179 26.4319 19.2788C26.6255 19.6691 28.2297 23.155 28.3919 23.5885C28.6414 24.2551 28.5594 25.2264 27.7883 25.7853L27.6531 25.8806C27.2701 26.149 26.5583 26.6479 26.4598 27.2554C26.4118 27.5503 26.5095 27.8593 26.7581 28.1984C27.9994 29.8918 31.964 34.8646 32.6784 35.5392C33.2385 36.0689 33.9476 36.144 34.4309 35.7316C34.9307 35.3052 35.1532 35.0535 35.1549 35.05L35.2064 34.9997C35.2482 34.9635 35.639 34.65 36.2776 34.65C36.7381 34.65 37.2066 34.8107 37.6698 35.1277C38.8718 35.9497 41.5838 37.7863 41.5838 37.7863L41.6274 37.8198C41.9746 38.1209 42.4762 38.988 41.8909 40.1164C41.2846 41.288 39.4048 43.7064 37.4604 43.7064L37.4613 43.7091ZM24.9341 19.232C24.4936 19.232 23.4111 19.4201 22.783 19.8748L22.5806 20.0179C21.8592 20.5229 20.7697 21.2849 20.7697 22.9007C20.7697 25.3703 22.6783 29.1678 26.6028 34.5105C30.8893 40.3459 35.7899 42.7687 37.4604 42.7687C38.8814 42.7687 40.5109 40.7591 41.0674 39.6837C41.4093 39.0233 41.1293 38.6507 41.0325 38.55C40.7185 38.3372 38.2725 36.6808 37.1481 35.9118C36.8419 35.7016 36.548 35.5957 36.2767 35.5957C36.0298 35.5957 35.8676 35.684 35.8126 35.7193C35.7219 35.8173 35.4724 36.0769 35.0284 36.4548C34.1989 37.162 32.9366 37.0764 32.0416 36.2305C31.2365 35.4694 27.1698 30.3448 26.0088 28.7617C25.6075 28.2143 25.4496 27.6562 25.5395 27.1044C25.7026 26.104 26.6255 25.4568 27.121 25.1089L27.2448 25.0215C27.688 24.701 27.5938 24.1209 27.5205 23.9249C27.3835 23.5594 25.7994 20.1088 25.5988 19.7035C25.4348 19.3716 25.3057 19.2329 24.9324 19.2329L24.9341 19.232Z"
                    fill="#404040"
                  />
                </svg>
              </div>
              <div className="font-helixa font-bold text-[16px] text-[#404040]">
                Inquiry for <br /> Further Information
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex flex-col gap-y-[16px] further-mobile">
                <div className="font-helixa font-bold text-[16px] text-[#404040]">
                  02
                </div>
                <div>
                  <svg
                    width="62"
                    height="62"
                    viewBox="0 0 62 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="62" height="62" rx="15.5" fill="#EEE7D9" />
                    <path
                      d="M37.4613 43.7091C35.3407 43.7091 30.1854 40.964 25.857 35.0712C21.8086 29.5599 19.8398 25.5787 19.8398 22.8998C19.8398 20.7904 21.2791 19.7839 22.052 19.2426L22.243 19.1076C23.097 18.4895 24.4256 18.2891 24.935 18.2891C25.8282 18.2891 26.2042 18.8179 26.4319 19.2788C26.6255 19.6691 28.2297 23.155 28.3919 23.5885C28.6414 24.2551 28.5594 25.2264 27.7883 25.7853L27.6531 25.8806C27.2701 26.149 26.5583 26.6479 26.4598 27.2554C26.4118 27.5503 26.5095 27.8593 26.7581 28.1984C27.9994 29.8918 31.964 34.8646 32.6784 35.5392C33.2385 36.0689 33.9476 36.144 34.4309 35.7316C34.9307 35.3052 35.1532 35.0535 35.1549 35.05L35.2064 34.9997C35.2482 34.9635 35.639 34.65 36.2776 34.65C36.7381 34.65 37.2066 34.8107 37.6698 35.1277C38.8718 35.9497 41.5838 37.7863 41.5838 37.7863L41.6274 37.8198C41.9746 38.1209 42.4762 38.988 41.8909 40.1164C41.2846 41.288 39.4048 43.7064 37.4604 43.7064L37.4613 43.7091ZM24.9341 19.232C24.4936 19.232 23.4111 19.4201 22.783 19.8748L22.5806 20.0179C21.8592 20.5229 20.7697 21.2849 20.7697 22.9007C20.7697 25.3703 22.6783 29.1678 26.6028 34.5105C30.8893 40.3459 35.7899 42.7687 37.4604 42.7687C38.8814 42.7687 40.5109 40.7591 41.0674 39.6837C41.4093 39.0233 41.1293 38.6507 41.0325 38.55C40.7185 38.3372 38.2725 36.6808 37.1481 35.9118C36.8419 35.7016 36.548 35.5957 36.2767 35.5957C36.0298 35.5957 35.8676 35.684 35.8126 35.7193C35.7219 35.8173 35.4724 36.0769 35.0284 36.4548C34.1989 37.162 32.9366 37.0764 32.0416 36.2305C31.2365 35.4694 27.1698 30.3448 26.0088 28.7617C25.6075 28.2143 25.4496 27.6562 25.5395 27.1044C25.7026 26.104 26.6255 25.4568 27.121 25.1089L27.2448 25.0215C27.688 24.701 27.5938 24.1209 27.5205 23.9249C27.3835 23.5594 25.7994 20.1088 25.5988 19.7035C25.4348 19.3716 25.3057 19.2329 24.9324 19.2329L24.9341 19.232Z"
                      fill="#404040"
                    />
                  </svg>
                </div>
                <div className="font-helixa font-bold text-[16px] text-[#404040]">
                  Registration <br />
                  and Payment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7Mobile;
