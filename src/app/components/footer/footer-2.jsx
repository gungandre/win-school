"use client";

import Image from "next/image";
import React from "react";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import Button from "../button/Button";
import useMediaQuery from "@/app/utils/useMediaQuery";

const Footer = ({ tlComplete }) => {
  const elemenRef = useRef(null);
  const elemenRefMobile = useRef(null);
  const isSmall = useMediaQuery("(max-width: 640px)");
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const wText = document.getElementById("w-text");
      const iText = document.getElementById("i-text");
      const nText = document.getElementById("n-text");
      const sText = document.getElementById("s-text");
      const cText = document.getElementById("c-text");
      const hText = document.getElementById("h-text");
      const oText1 = document.getElementById("o-text");
      const oText2 = document.getElementById("o-text_2");
      const lText = document.getElementById("l-text");

      const container = document.getElementById("win-text-footer");
      const tiltAngles = {
        "w-text": -10,
        "i-text": -2,
        "n-text": 8,
        "s-text": -5,
        "c-text": 1,
        "h-text": -2,
        "o-text": 2,
        "o-text_2": -5,
        "l-text": 5,
      };

      function tiltCharacter(characterId, angle) {
        gsap.to(`#${characterId}`, {
          rotate: angle,
          duration: 0.1,
          ease: "none",
        });
      }

      function resetCharacter(characterId) {
        gsap.to(`#${characterId}`, {
          rotate: 0,
          duration: 0.5,
          ease: "bounce.out",
        });
      }

      container.addEventListener("mouseenter", () => {
        Object.entries(tiltAngles).forEach(([characterId, angle]) => {
          tiltCharacter(characterId, angle);
        });
      });

      container.addEventListener("mouseleave", () => {
        Object.keys(tiltAngles).forEach((characterId) => {
          resetCharacter(characterId);
        });
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elemenRef.current,

            scrub: true,
            start: "top bottom",
          },
        })
        .from(
          elemenRef.current,

          {
            y: "-100%",
            ease: "none",
            duration: 1,
          }
        );

      ScrollTrigger.create({
        trigger: elemenRef.current,
        scrub: true,

        start: "center center",
        end: "bottom",

        onEnter: () => {
          gsap.to(
            [wText, iText, nText, sText, cText, hText, oText1, oText2, lText],

            {
              y: 0,
              stagger: 0.1,
            }
          );
        },
      });

      ScrollTrigger.create({
        trigger: elemenRef.current,
        scrub: true,

        start: "bottom center",
        end: "bottom",

        onLeaveBack: () => {
          gsap.to(
            [wText, iText, nText, sText, cText, hText, oText1, oText2, lText],

            {
              y: "150%",
              stagger: 0.1,
            }
          );
        },
      });
    },
    { scope: elemenRef }
  );

  useGSAP(
    () => {
      const wText = document.getElementById("w-text");
      const iText = document.getElementById("i-text");
      const nText = document.getElementById("n-text");
      const sText = document.getElementById("s-text");
      const cText = document.getElementById("c-text");
      const hText = document.getElementById("h-text");
      const oText1 = document.getElementById("o-text");
      const oText2 = document.getElementById("o-text_2");
      const lText = document.getElementById("l-text");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: elemenRefMobile.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
        .to(elemenRefMobile.current, {
          transform: "translateY(0)",
          ease: "none",
        });

      ScrollTrigger.create({
        trigger: elemenRefMobile.current,
        start: "center top",
        end: "bottom top",

        onEnter: () => {
          gsap.to(
            [wText, iText, nText, sText, cText, hText, oText1, oText2, lText],
            {
              transform: "translateY(0)",
              ease: "power1.out",
              stagger: 0.1,
            }
          );
        },
        onLeaveBack: () => {
          gsap.to(
            [wText, iText, nText, sText, cText, hText, oText1, oText2, lText],
            {
              transform: "translateY(150%)",
              ease: "power1.out",
              stagger: 0.1,
            }
          );
        },
      });
    },
    { scope: elemenRefMobile }
  );

  return (
    <div>
      <footer
        className="h-svh  relative  flex flex-col justify-end bg-white-ivory   footer after:w-full section after:bg-sunset-coral after:h-[120px] after:rounded-bl-[30px] after:rounded-br-[30px] after:absolute after:top-0  z-10 section max-sm:hidden "
        ref={elemenRef}
      >
        <div className="h-[120px]"></div>
        <div className="px-15 sm:pt-[160px] space-y-[10.417vw] h-full">
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              <div className="flex flex-col sm:space-y-[68px]">
                <h2 className="whitespace-pre-line text-64-headings text-dark-tosca">
                  Subscribe to <br /> Our newsletter
                </h2>
                <form action="" id="newsletter">
                  <label
                    htmlFor="newsletter_email"
                    className="bg-almond-cream sm:h-20 rounded-1xl w-4/5 flex items-center relative overflow-hidden"
                  >
                    <input
                      id="newsletter_email"
                      className="bg-transparent px-5 flex-1 placeholder:text-moonstone-gray text-28-body-text-1 h-full focus:outline-none"
                      type="text"
                      placeholder="Your email address"
                    />
                    <button
                      type="submit"
                      className="sm:w-20 sm:h-20 flex items-center justify-center bg-sunset-coral"
                    >
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 9L16 9" stroke="#FFFBF3" strokeWidth={2} />
                        <path
                          d="M8 1L16 9L8 17"
                          stroke="#FFFBF3"
                          strokeWidth={2}
                        />
                      </svg>
                    </button>
                  </label>
                </form>
              </div>
            </div>
            <div className="col-span-6 flex justify-between">
              <div className="whitespace-pre-line flex flex-col justify-between max-w-[269px]">
                <p className="text-24-body-text">
                  Gatot Subroto Timur <br /> Jl. Kecak Nomor 12 Tonja <br />{" "}
                  Denpasar Utara <br /> Kota Denpasar Bali 80239
                </p>
                <Button
                  className={""}
                  name={"Get Direction"}
                  arrow={"right"}
                  color={"#F96D49"}
                  hoverColor={"#F96D49"}
                  hoverType={1}
                  textHover={"#FFFBF3"}
                />
              </div>
              <div className="flex flex-col">
                <div className="text-32-headings text-dark-tosca">
                  <p>hello@winschool.co.id</p>
                  <p>(+62) 800 1234 6578</p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <a href="#" target="_blank">
                    <img
                      src="/assets/images/icons/instagram.svg"
                      alt="instagram"
                    />
                  </a>
                  <a href="#" target="_blank">
                    <img
                      src="/assets/images/icons/linkedin.svg"
                      alt="linkedin"
                    />
                  </a>
                  <a href="#" target="_blank">
                    <img
                      src="/assets/images/icons/facebook.svg"
                      alt="facebook"
                    />
                  </a>
                  <a href="#" target="_blank">
                    <img src="/assets/images/icons/youtube.svg" alt="youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="win-text-footer" className="z-[1000] relative">
            <svg
              className="overflow-visible"
              width={1802}
              height={278}
              viewBox="0 0 1802 278"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="translate-y-[130%]"
                id="w-text"
                d="M220.924 19.5091H270.618L211.837 218H169.81L136.871 95.8955L102.511 218H60.4843L2.27171 19.5091H51.9654L82.0656 141.33L116.141 19.5091H158.168L189.404 141.614L220.924 19.5091Z"
                fill="#19918E"
              />
              <path
                className="translate-y-[130%]"
                id="i-text"
                d="M338.028 19.5091L340.867 218H289.754V19.5091H338.028Z"
                fill="#19918E"
              />
              <path
                className="translate-y-[130%]"
                id="n-text"
                d="M500.71 19.5091H551.824V218H509.513L426.312 95.3275L428.867 218H377.754V19.5091H420.065L502.414 128.835L500.71 19.5091Z"
                fill="#19918E"
              />
              <path
                className="translate-y-[130%]"
                id="s-text"
                d="M765.956 92.2039H766.24C802.304 92.2039 823.317 118.897 823.317 148.429C823.317 199.542 777.599 220.556 731.597 220.556C702.916 220.556 673.668 212.321 655.778 197.839L662.877 148.997C676.508 165.183 711.435 176.541 738.98 176.541C759.993 176.541 776.747 170.01 776.747 154.108C776.747 143.033 768.796 135.366 751.758 135.366C738.98 135.366 727.337 139.91 710.016 139.91C674.804 139.91 654.359 121.452 654.359 86.8086C654.359 37.3989 695.817 16.9535 740.116 16.9535C762.833 16.9535 786.118 22.3488 805.427 31.7196L801.736 79.1416C785.266 67.783 757.438 59.832 735.288 59.832C715.979 59.832 700.929 65.7953 700.929 80.2774C700.929 91.636 710.299 98.1672 725.634 98.1672C740.4 98.1672 748.919 92.2039 765.956 92.2039Z"
                fill="#19918E"
              />
              <path
                className="translate-y-[130%]"
                id="c-text"
                d="M890.077 119.748C890.077 153.256 913.078 175.973 948.005 175.973C963.907 175.973 982.649 171.146 1002.81 160.639L1006.79 208.345C988.896 216.296 967.315 220.84 946.018 220.84C894.052 220.84 841.803 193.579 841.803 130.316V119.181C841.803 46.4857 897.744 16.1016 949.425 16.1016C970.439 16.1016 990.884 21.2129 1006.79 31.1517L1002.81 78.8576C985.773 64.9434 967.599 58.9801 950.845 58.9801C917.621 58.9801 890.077 83.1171 890.077 119.748Z"
                fill="#19918E"
              />
              <path
                className="translate-y-[130%]"
                id="h-text"
                d="M1204.85 218H1153.73V133.947H1084.73L1085.87 218H1034.75V19.5091H1083.03L1084.16 96.1794H1153.73V19.5091H1202.01L1204.85 218Z"
                fill="#19918E"
              />
              <path
                className="translate-y-[130%]"
                id="o-text"
                d="M1332.03 18.0893C1384.56 18.0893 1434.54 50.7452 1434.54 116.057C1434.54 190.455 1382.29 221.408 1332.03 219.42C1281.77 221.408 1229.8 190.455 1229.8 116.057C1229.8 50.7452 1279.5 18.0893 1332.03 18.0893ZM1332.03 173.986C1361.85 173.986 1386.27 156.948 1386.27 116.057C1386.27 85.6728 1362.98 63.2396 1332.03 63.2396C1301.36 63.2396 1278.08 85.6728 1278.08 116.057C1278.08 156.948 1302.21 173.986 1332.03 173.986Z"
                fill="#19918E"
              />
              <path
                className="translate-y-[130%]"
                id="o-text_2"
                d="M1557.03 18.0893C1609.56 18.0893 1659.54 50.7452 1659.54 116.057C1659.54 190.455 1607.29 221.408 1557.03 219.42C1506.77 221.408 1454.8 190.455 1454.8 116.057C1454.8 50.7452 1504.5 18.0893 1557.03 18.0893ZM1557.03 173.986C1586.85 173.986 1611.27 156.948 1611.27 116.057C1611.27 85.6728 1587.98 63.2396 1557.03 63.2396C1526.36 63.2396 1503.08 85.6728 1503.08 116.057C1503.08 156.948 1527.21 173.986 1557.03 173.986Z"
                fill="#19918E"
              />
              <path
                className="translate-y-[130%]"
                id="l-text"
                d="M1734.03 172.566H1798.49V218H1685.75V19.5091H1734.03V172.566Z"
                fill="#19918E"
              />
            </svg>
          </div>
        </div>
      </footer>

      <div
        className="w-full min-h-svh relative max-sm:block hidden  section   section px-[32px] pt-[160px] pb-[30px] -translate-y-full z-[0]"
        ref={elemenRefMobile}
      >
        <div className="w-full flex flex-col  gap-y-[32px]">
          <div className="w-full h-full  text-dark-tosca font-helixa text-[40px]">
            <div>Subscribe to</div>
            <div>our Newsletter</div>
          </div>
          <form action="" id="newsletter">
            <label
              htmlFor="newsletter_email"
              className="bg-almond-cream h-[60px] rounded-1xl  flex items-center relative overflow-hidden w-full"
            >
              <input
                id="newsletter_email"
                className="bg-transparent px-5 flex-1 placeholder:text-moonstone-gray text-[20px] h-full focus:outline-none w-full"
                type="text"
                placeholder="Your email address"
              />
              <button
                type="submit"
                className="w-20 h-20 flex items-center justify-center bg-sunset-coral"
              >
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 9L16 9" stroke="#FFFBF3" strokeWidth={2} />
                  <path d="M8 1L16 9L8 17" stroke="#FFFBF3" strokeWidth={2} />
                </svg>
              </button>
            </label>
          </form>
        </div>

        <div className="w-full flex justify-end gap-y-[32px] mt-[32px]">
          <div className="flex flex-col w-[201px] gap-y-[32px]">
            <div className="">
              Gatot Subroto Timur Jl. Kecak Nomor 12 Tonja Denpasar Utara Kota
              Denpasar Bali 80239
            </div>

            <div>
              <a
                href=""
                className="text-sunset-coral rounded-[21px] px-[16px] py-[7px] border-sunset-coral border-[1px] flex items-center gap-[22px]"
              >
                <div className="font-helixa text-[20px] ">Get Direction</div>
                <div>
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 9L16 9" stroke="#F96D49" />
                    <path d="M8 1L16 9L8 17" stroke="#F96D49" />
                  </svg>
                </div>
              </a>
            </div>
            <div>
              <div className="mt-auto flex items-center justify-between">
                <a href="#" target="_blank">
                  <img
                    src="/assets/images/icons/instagram.svg"
                    alt="instagram"
                  />
                </a>
                <a href="#" target="_blank">
                  <img src="/assets/images/icons/linkedin.svg" alt="linkedin" />
                </a>
                <a href="#" target="_blank">
                  <img src="/assets/images/icons/facebook.svg" alt="facebook" />
                </a>
                <a href="#" target="_blank">
                  <img src="/assets/images/icons/youtube.svg" alt="youtube" />
                </a>
              </div>
            </div>
            <div className="font-helixa text-[20px] leading-[29px] text-dark-tosca">
              <div>winschool9@gmail.com</div>
              <div>(+62) 8113 0910 001</div>
            </div>
          </div>
        </div>

        <div className="relative bottom-0 w-full mt-10">
          <div id="win-text-footer-mobile" className="relative w-full">
            <svg
              className="overflow-visible w-full"
              // height={278}
              viewBox="0 0 1802 278"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="translate-y-[150%]"
                id="w-text"
                d="M220.924 19.5091H270.618L211.837 218H169.81L136.871 95.8955L102.511 218H60.4843L2.27171 19.5091H51.9654L82.0656 141.33L116.141 19.5091H158.168L189.404 141.614L220.924 19.5091Z"
                fill="#19918E"
              />
              <path
                className="translate-y-[150%]"
                id="i-text"
                d="M338.028 19.5091L340.867 218H289.754V19.5091H338.028Z"
                fill="#19918E"
              />
              <path
                className="translate-y-[150%]"
                id="n-text"
                d="M500.71 19.5091H551.824V218H509.513L426.312 95.3275L428.867 218H377.754V19.5091H420.065L502.414 128.835L500.71 19.5091Z"
                fill="#19918E"
              />
              <path
                className="translate-y-[150%]"
                id="s-text"
                d="M765.956 92.2039H766.24C802.304 92.2039 823.317 118.897 823.317 148.429C823.317 199.542 777.599 220.556 731.597 220.556C702.916 220.556 673.668 212.321 655.778 197.839L662.877 148.997C676.508 165.183 711.435 176.541 738.98 176.541C759.993 176.541 776.747 170.01 776.747 154.108C776.747 143.033 768.796 135.366 751.758 135.366C738.98 135.366 727.337 139.91 710.016 139.91C674.804 139.91 654.359 121.452 654.359 86.8086C654.359 37.3989 695.817 16.9535 740.116 16.9535C762.833 16.9535 786.118 22.3488 805.427 31.7196L801.736 79.1416C785.266 67.783 757.438 59.832 735.288 59.832C715.979 59.832 700.929 65.7953 700.929 80.2774C700.929 91.636 710.299 98.1672 725.634 98.1672C740.4 98.1672 748.919 92.2039 765.956 92.2039Z"
                fill="#19918E"
              />
              <path
                className="translate-y-[150%]"
                id="c-text"
                d="M890.077 119.748C890.077 153.256 913.078 175.973 948.005 175.973C963.907 175.973 982.649 171.146 1002.81 160.639L1006.79 208.345C988.896 216.296 967.315 220.84 946.018 220.84C894.052 220.84 841.803 193.579 841.803 150.316V119.181C841.803 46.4857 897.744 16.1016 949.425 16.1016C970.439 16.1016 990.884 21.2129 1006.79 31.1517L1002.81 78.8576C985.773 64.9434 967.599 58.9801 950.845 58.9801C917.621 58.9801 890.077 83.1171 890.077 119.748Z"
                fill="#19918E"
              />
              <path
                className="translate-y-[150%]"
                id="h-text"
                d="M1204.85 218H1153.73V133.947H1084.73L1085.87 218H1034.75V19.5091H1083.03L1084.16 96.1794H1153.73V19.5091H1202.01L1204.85 218Z"
                fill="#19918E"
              />
              <path
                className="translate-y-[150%]"
                id="o-text"
                d="M1332.03 18.0893C1384.56 18.0893 1434.54 50.7452 1434.54 116.057C1434.54 190.455 1382.29 221.408 1332.03 219.42C1281.77 221.408 1229.8 190.455 1229.8 116.057C1229.8 50.7452 1279.5 18.0893 1332.03 18.0893ZM1332.03 173.986C1361.85 173.986 1386.27 156.948 1386.27 116.057C1386.27 85.6728 1362.98 63.2396 1332.03 63.2396C1301.36 63.2396 1278.08 85.6728 1278.08 116.057C1278.08 156.948 1302.21 173.986 1332.03 173.986Z"
                fill="#19918E"
              />
              <path
                className="translate-y-[150%]"
                id="o-text_2"
                d="M1557.03 18.0893C1609.56 18.0893 1659.54 50.7452 1659.54 116.057C1659.54 190.455 1607.29 221.408 1557.03 219.42C1506.77 221.408 1454.8 190.455 1454.8 116.057C1454.8 50.7452 1504.5 18.0893 1557.03 18.0893ZM1557.03 173.986C1586.85 173.986 1611.27 156.948 1611.27 116.057C1611.27 85.6728 1587.98 63.2396 1557.03 63.2396C1526.36 63.2396 1503.08 85.6728 1503.08 116.057C1503.08 156.948 1527.21 173.986 1557.03 173.986Z"
                fill="#19918E"
              />
              <path
                className="translate-y-[150%]"
                id="l-text"
                d="M1734.03 172.566H1798.49V218H1685.75V19.5091H1734.03V172.566Z"
                fill="#19918E"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
