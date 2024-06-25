"use client";
import { useEffect } from "react";
import Link from "next/link";
import Header from "../components/header/Header";
import useNavColor from "../hook/useNavColor";
import gsap from "gsap";
import useMediaQuery from "../utils/useMediaQuery";
import HeaderMobile from "../components/header/header-mobile";
const ComingSoon = () => {
  const small = useMediaQuery("(max-width: 640px)");
  const navColorArray = ["#FFFBF3"];
  const { navbarColor } = useNavColor(navColorArray, ".section");
  const tiltAngles = {
    "c-text": 5,
    "o-text": -2,
    "m-text": 5,
    "i-text": -5,
    "n-text": 1,
    "g-text": -2,
    "s-text": 2,
    "o2-text": -5,
    "o3-text": 5,
    "n2-text": 5,
  };

  function tiltCharacter(characterId, angle) {
    gsap.to(`#${characterId}`, {
      rotate: angle,
      duration: 0.1,
      ease: "none",
    });
  }

  // Function to reset character tilt
  function resetCharacter(characterId) {
    gsap.to(`#${characterId}`, {
      rotate: 0,
      duration: 0.5,
      ease: "bounce.out",
    });
  }

  const mouseEnter = () => {
    Object.entries(tiltAngles).forEach(([characterId, angle]) => {
      tiltCharacter(characterId, angle);
    });
  };

  const mouseLeave = () => {
    Object.keys(tiltAngles).forEach((characterId) => {
      resetCharacter(characterId);
    });
  };

  return (
    <>
      {small === false ? (
        <Header navbarAnimationPlay={true} navbarColor={navbarColor} />
      ) : (
        <HeaderMobile />
      )}

      <div className="h-svh w-full bg-soft-tosca flex justify-center items-center section">
        <div className="flex flex-col">
          <div className="" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <svg
              width="1125"
              viewBox="0 0 1125 535"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-sm:w-[369px]"
            >
              <path
                d="M57.0768 119.748C57.0768 153.256 80.0779 175.973 115.005 175.973C130.907 175.973 149.649 171.146 169.81 160.639L173.786 208.345C155.896 216.296 134.315 220.84 113.018 220.84C61.0523 220.84 8.80288 193.579 8.80288 120.316V119.181C8.80288 46.4857 64.7438 16.1016 116.425 16.1016C137.439 16.1016 157.884 21.2129 173.786 31.1517L169.81 78.8576C152.773 64.9434 134.599 58.9801 117.845 58.9801C84.6213 58.9801 57.0768 83.1171 57.0768 119.748Z"
                fill="#FFFBF3"
                id="c-text"
              />
              <path
                d="M295.03 18.0893C347.563 18.0893 397.541 50.7452 397.541 116.057C397.541 190.455 345.292 221.408 295.03 219.42C244.768 221.408 192.803 190.455 192.803 116.057C192.803 50.7452 242.497 18.0893 295.03 18.0893ZM295.03 173.986C324.846 173.986 349.267 156.948 349.267 116.057C349.267 85.6728 325.982 63.2396 295.03 63.2396C264.362 63.2396 241.077 85.6728 241.077 116.057C241.077 156.948 265.214 173.986 295.03 173.986Z"
                fill="#FFFBF3"
                id="o-text"
              />
              <path
                d="M587.737 19.5091H630.048V218H578.934L580.922 112.365L547.13 160.071H505.103L471.88 112.933L473.867 218H422.754V19.5091H465.065L526.117 113.501L587.737 19.5091Z"
                fill="#FFFBF3"
                id="m-text"
              />
              <path
                d="M711.028 19.5091L713.867 218H662.754V19.5091H711.028Z"
                fill="#FFFBF3"
                id="i-text"
              />
              <path
                d="M868.71 19.5091H919.824V218H877.513L794.312 95.3275L796.867 218H745.754V19.5091H788.065L870.414 128.835L868.71 19.5091Z"
                fill="#FFFBF3"
                id="n-text"
              />
              <path
                d="M1064.92 120.316H1113.19V202.098C1090.48 213.457 1066.62 219.136 1044.19 219.136C990.237 219.136 944.803 185.628 944.803 113.785C944.803 50.1773 995.916 15.5336 1047.03 15.5336C1066.06 15.5336 1085.37 20.361 1101.84 30.2998L1096.72 74.3142C1078.55 64.6594 1061.23 60.116 1046.18 60.116C1015.23 60.116 993.361 79.4255 992.793 115.489C992.225 154.392 1017.5 172.282 1046.46 172.282C1052.71 172.282 1058.67 171.43 1064.92 170.01V120.316Z"
                fill="#FFFBF3"
                id="g-text"
              />
              <path
                d="M263.956 349.204H264.24C300.304 349.204 321.317 375.897 321.317 405.429C321.317 456.542 275.599 477.556 229.597 477.556C200.916 477.556 171.668 469.321 153.778 454.839L160.877 405.997C174.508 422.183 209.435 433.541 236.98 433.541C257.993 433.541 274.747 427.01 274.747 411.108C274.747 400.033 266.796 392.366 249.758 392.366C236.98 392.366 225.337 396.91 208.016 396.91C172.804 396.91 152.359 378.452 152.359 343.809C152.359 294.399 193.817 273.953 238.116 273.953C260.833 273.953 284.118 279.349 303.427 288.72L299.736 336.142C283.266 324.783 255.438 316.832 233.288 316.832C213.979 316.832 198.929 322.795 198.929 337.277C198.929 348.636 208.299 355.167 223.634 355.167C238.4 355.167 246.919 349.204 263.956 349.204Z"
                fill="#FFFBF3"
                id="s-text"
              />
              <path
                d="M441.03 275.089C493.563 275.089 543.541 307.745 543.541 373.057C543.541 447.455 491.292 478.408 441.03 476.42C390.768 478.408 338.803 447.455 338.803 373.057C338.803 307.745 388.497 275.089 441.03 275.089ZM441.03 430.986C470.846 430.986 495.267 413.948 495.267 373.057C495.267 342.673 471.982 320.24 441.03 320.24C410.362 320.24 387.077 342.673 387.077 373.057C387.077 413.948 411.214 430.986 441.03 430.986Z"
                fill="#FFFBF3"
                id="o2-text"
              />
              <path
                d="M664.03 275.089C716.563 275.089 766.541 307.745 766.541 373.057C766.541 447.455 714.292 478.408 664.03 476.42C613.768 478.408 561.803 447.455 561.803 373.057C561.803 307.745 611.497 275.089 664.03 275.089ZM664.03 430.986C693.846 430.986 718.267 413.948 718.267 373.057C718.267 342.673 694.982 320.24 664.03 320.24C633.362 320.24 610.077 342.673 610.077 373.057C610.077 413.948 634.214 430.986 664.03 430.986Z"
                fill="#FFFBF3"
                id="o3-text"
              />
              <path
                d="M915.71 276.509H966.824V475H924.513L841.312 352.328L843.867 475H792.754V276.509H835.065L917.414 385.835L915.71 276.509Z"
                fill="#FFFBF3"
                id="n2-text"
              />
            </svg>
          </div>
          <div className="text-center font-helixa max-sm:text-[16px] text-[38px] text-white-ivory">
            <Link href={"/contact-us"} className="underline">
              Contact us
            </Link>{" "}
            for more information
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
