"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useContext } from "react";
import { preloaderContext } from "@/app/context/preloaderContext";

const PreloaderMobile = () => {
  const { preloaderComplete, setPreloaderComplete } =
    useContext(preloaderContext);
  useGSAP(() => {
    gsap.to(".logo-svg", {
      transform: "translateY(0)",
      opacity: 1,
      ease: "ease.out1",
      duration: 1,

      onComplete: () => {
        gsap.to(".loading-mobile", {
          width: "100%",

          ease: "ease.out1",
          duration: 2,
        });

        gsap.to(".counter-3", {
          transform: "translateY(-96.8%)",
          duration: 2,
          ease: "ease.out1",
        });

        gsap.to(".counter-2", {
          delay: 0.2,
          transform: "translateY(-96.8%)",
          duration: 1.8,
          ease: "ease.out1",
        });

        gsap.to(".counter-1", {
          delay: 1.5,
          transform: "translateY(-50%)",
          duration: 0.5,
          ease: "ease.out1",

          onComplete: () => {
            gsap.to(".bg-tosca", {
              delay: 0.5,
              transform: "translateY(-100%)",
              ease: "ease.out1",
              duration: 1,
            });

            gsap.to(".container-preloader-mobile", {
              delay: 0.5,
              display: "none",
            });

            gsap.to(".bg-yellow", {
              delay: 0.6,
              transform: "translateY(-100%)",
              ease: "ease.out1",
              duration: 1,
            });

            gsap.to(".bg--white", {
              delay: 0.7,
              transform: "translateY(-100%)",
              ease: "ease.out1",
              duration: 1,
              onComplete: () => {
                setPreloaderComplete(true);
              },
            });
          },
        });
      },
    });

    gsap.to([".counter-3-container", ".percen-mobile"], {
      opacity: 1,

      transform: "translateY(0)",
      ease: "ease.out1",
      stagger: 0.1,
    });
  }, []);

  return (
    <>
      <div className="bg-white-ivory top-0 w-full fixed h-dvh z-[10000] flex justify-center items-center relative container-preloader-mobile">
        <div className="">
          <svg
            width="269"
            height="83"
            viewBox="0 0 269 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-0 translate-y-full logo-svg"
          >
            <g clip-path="url(#clip1_5456_56339)">
              <path
                d="M133.639 5.73438L124.54 36.4593H118.035L112.936 17.5582L107.617 36.4593H101.111L92.0996 5.73438H99.7918L104.451 24.5915L109.726 5.73438H116.232L121.068 24.6354L125.947 5.73438H133.639Z"
                fill="#19918E"
              />
            </g>

            <g clip-path="url(#clip2_5456_56339)">
              <path
                d="M145.342 36.4345H137.438V5.73438H144.903L145.342 36.4332V36.4345Z"
                fill="#19918E"
              />
            </g>
            <g clip-path="url(#clip3_5456_56339)">
              <path
                d="M176.523 5.73438V36.4593H169.974L157.095 17.4703L157.49 36.4593H149.578V5.73438H156.127L168.875 22.6575L168.611 5.73438H176.523Z"
                fill="#19918E"
              />
            </g>
            <g clip-path="url(#clip4_5456_56339)">
              <path
                d="M110.826 63.0856C116.409 63.0856 119.662 67.2172 119.662 71.7894C119.662 79.7013 112.585 82.9544 105.463 82.9544C101.024 82.9544 96.496 81.6792 93.7274 79.4377L94.8269 71.8773C96.9366 74.3823 102.343 76.1407 106.607 76.1407C109.86 76.1407 112.453 75.129 112.453 72.6679C112.453 70.9535 111.222 69.7662 108.585 69.7662C106.607 69.7662 104.805 70.4703 102.122 70.4703C96.6717 70.4703 93.5078 67.6139 93.5078 62.2511C93.5078 54.6028 99.9248 51.4375 106.782 51.4375C110.299 51.4375 113.904 52.2721 116.892 53.7229L116.321 61.0637C113.772 59.3054 109.463 58.0741 106.034 58.0741C103.045 58.0741 100.715 58.9979 100.715 61.2394C100.715 62.9978 102.166 64.0094 104.54 64.0094C106.913 64.0094 108.144 63.0856 110.781 63.0856H110.825H110.826Z"
                fill="#19918E"
              />
            </g>
            <g clip-path="url(#clip5_5456_56339)">
              <path
                d="M138.737 76.0518C141.198 76.0518 144.1 75.3051 147.221 73.6785L147.836 81.0632C145.066 82.2945 141.726 82.9973 138.429 82.9973C130.386 82.9973 122.297 78.7778 122.297 67.4372V67.2615C122.297 56.0087 130.957 51.3047 138.956 51.3047C142.21 51.3047 145.373 52.0953 147.836 53.634L147.221 61.0188C144.583 58.8651 141.77 57.9413 139.177 57.9413C134.034 57.9413 129.771 61.6776 129.771 67.348C129.771 72.5351 133.331 76.0518 138.738 76.0518H138.737Z"
                fill="#19918E"
              />
            </g>
            <g clip-path="url(#clip6_5456_56339)">
              <path
                d="M170.475 82.5608V69.5497H159.793L159.968 82.5608H152.057V51.8359H159.529L159.705 63.7037H170.475V51.8359H177.947L178.386 82.5608H170.475Z"
                fill="#19918E"
              />
            </g>
            <g clip-path="url(#clip7_5456_56339)">
              <path
                d="M213.24 66.7663C213.24 78.2827 205.153 83.0745 197.372 82.7671C189.592 83.0745 181.549 78.284 181.549 66.7663C181.549 56.6569 189.241 51.6016 197.372 51.6016C205.504 51.6016 213.24 56.6569 213.24 66.7663ZM205.767 66.7663C205.767 62.0637 202.163 58.591 197.371 58.591C192.579 58.591 189.02 62.0637 189.02 66.7663C189.02 73.0969 192.756 75.7337 197.371 75.7337C201.986 75.7337 205.767 73.0969 205.767 66.7663Z"
                fill="#19918E"
              />
            </g>
            <g clip-path="url(#clip8_5456_56339)">
              <path
                d="M247.664 66.7663C247.664 78.2827 239.576 83.0745 231.796 82.7671C224.016 83.0745 215.973 78.284 215.973 66.7663C215.973 56.6569 223.665 51.6016 231.796 51.6016C239.928 51.6016 247.664 56.6569 247.664 66.7663ZM240.191 66.7663C240.191 62.0637 236.587 58.591 231.795 58.591C227.003 58.591 223.444 62.0637 223.444 66.7663C223.444 73.0969 227.18 75.7337 231.795 75.7337C236.41 75.7337 240.191 73.0969 240.191 66.7663Z"
                fill="#19918E"
              />
            </g>
            <g clip-path="url(#clip9_5456_56339)">
              <path
                d="M268.62 75.5275V82.5608H251.17V51.8359H258.643V75.5288H268.62V75.5275Z"
                fill="#19918E"
              />
            </g>

            <g clip-path="url(#clip11_5456_56339)">
              <g clip-path="url(#clip12_5456_56339)">
                <path
                  d="M29.3824 33.074C29.3948 32.6485 29.4332 32.2395 29.4785 31.8359C22.7774 27.4421 13.2706 25.0496 0 28.7022C8.8507 53.9585 28.2226 54.6723 38.0231 53.2118C35.1845 50.4185 29.0928 43.2136 29.3824 33.0754V33.074Z"
                  fill="#19918E"
                />
              </g>
              <g clip-path="url(#clip13_5456_56339)">
                <path
                  d="M54.9548 31.8372C55.0001 32.2408 55.0385 32.6498 55.0508 33.074C55.3405 43.2136 49.2474 50.4171 46.4102 53.2104C56.2107 54.6722 75.5826 53.9585 84.4347 28.7021C71.1627 25.0496 61.6559 27.4421 54.9548 31.8372Z"
                  fill="#19918E"
                />
              </g>
            </g>
            <g clip-path="url(#clip10_5456_56339)">
              <path
                d="M56.0983 70.7463C51.198 67.4547 46.715 61.9491 45.2724 60.0892C43.6348 57.8779 42.2087 56.6562 42.2087 56.6562C42.2087 56.6562 40.7756 57.8834 39.134 60.1029C37.679 61.9765 33.207 67.4629 28.3191 70.7463C24.6336 73.2211 22.3262 77.4653 22.3262 82.1089V82.4383H35.3497C37.7682 76.444 42.2087 72.8834 42.2087 72.8834C42.2087 72.8834 46.6505 76.444 49.0677 82.4383H62.0912V82.1089C62.0912 77.4653 59.7824 73.2225 56.0983 70.7463Z"
                fill="#F96D49"
              />
            </g>
            <g clip-path="url(#clip14_5456_56339)">
              <g clip-path="url(#clip15_5456_56339)">
                <path
                  d="M36.9685 21.7625C32.2672 14.3696 23.1173 6.98072 7.66565 5.73438C7.6025 12.0141 9.44045 17.959 10.9998 22.3253C11.4006 22.3143 11.4898 22.3116 11.8865 22.3116C19.6651 22.3116 25.9202 24.3211 30.9248 27.3203C32.2892 24.7274 34.4648 22.862 36.9699 21.7639L36.9685 21.7625Z"
                  fill="#FFC127"
                />
              </g>
              <g clip-path="url(#clip16_5456_56339)">
                <path
                  d="M47.4818 21.7886C49.9732 22.8977 52.1337 24.7686 53.4843 27.3629C58.4931 24.339 64.7426 22.3088 72.5007 22.3088C72.9235 22.3088 73.3517 22.3212 73.78 22.3335C75.3393 17.9672 76.8053 12.0141 76.7421 5.73438C61.2726 6.98072 52.179 14.3847 47.4805 21.7886H47.4818Z"
                  fill="#FFC127"
                />
              </g>
            </g>
            <g clip-path="url(#clip17_5456_56339)">
              <path
                d="M33.8421 33.191C33.5319 44.0375 42.2192 50.9994 42.2192 50.9994C42.2192 50.9994 50.9066 44.0375 50.5964 33.191C50.2917 22.5613 34.1468 22.5613 33.8421 33.191Z"
                fill="#F96D49"
              />
            </g>
            <g clip-path="url(#clip18_5456_56339)">
              <path
                d="M42.2116 16.4194C46.7457 16.4194 50.4213 12.7438 50.4213 8.20968C50.4213 3.6756 46.7457 0 42.2116 0C37.6775 0 34.002 3.6756 34.002 8.20968C34.002 12.7438 37.6775 16.4194 42.2116 16.4194Z"
                fill="#F96D49"
              />
            </g>

            <defs>
              <clipPath id="clip0_5456_56339">
                <rect width="268.618" height="83" fill="white" />
              </clipPath>
              <clipPath id="clip1_5456_56339">
                <rect
                  width="41.5398"
                  height="30.7249"
                  fill="white"
                  transform="translate(92.0996 5.73438)"
                />
              </clipPath>
              <clipPath id="clip2_5456_56339">
                <rect
                  width="7.90496"
                  height="30.7002"
                  fill="white"
                  transform="translate(137.438 5.73438)"
                />
              </clipPath>
              <clipPath id="clip3_5456_56339">
                <rect
                  width="26.9447"
                  height="30.7249"
                  fill="white"
                  transform="translate(149.578 5.73438)"
                />
              </clipPath>
              <clipPath id="clip4_5456_56339">
                <rect
                  width="26.154"
                  height="31.5169"
                  fill="white"
                  transform="translate(93.5078 51.4375)"
                />
              </clipPath>
              <clipPath id="clip5_5456_56339">
                <rect
                  width="25.5391"
                  height="31.6926"
                  fill="white"
                  transform="translate(122.297 51.3047)"
                />
              </clipPath>
              <clipPath id="clip6_5456_56339">
                <rect
                  width="26.3297"
                  height="30.7249"
                  fill="white"
                  transform="translate(152.057 51.8359)"
                />
              </clipPath>
              <clipPath id="clip7_5456_56339">
                <rect
                  width="31.6912"
                  height="31.1794"
                  fill="white"
                  transform="translate(181.549 51.6016)"
                />
              </clipPath>
              <clipPath id="clip8_5456_56339">
                <rect
                  width="31.6912"
                  height="31.1794"
                  fill="white"
                  transform="translate(215.973 51.6016)"
                />
              </clipPath>
              <clipPath id="clip9_5456_56339">
                <rect
                  width="17.4502"
                  height="30.7249"
                  fill="white"
                  transform="translate(251.17 51.8359)"
                />
              </clipPath>
              <clipPath id="clip10_5456_56339">
                <rect
                  width="39.765"
                  height="25.782"
                  fill="white"
                  transform="translate(22.3262 56.6562)"
                />
              </clipPath>
              <clipPath id="clip11_5456_56339">
                <rect
                  width="84.422"
                  height="26.7449"
                  fill="white"
                  transform="translate(0 26.9141)"
                />
              </clipPath>
              <clipPath id="clip12_5456_56339">
                <rect
                  width="38.0231"
                  height="26.7449"
                  fill="white"
                  transform="translate(0 26.9141)"
                />
              </clipPath>
              <clipPath id="clip13_5456_56339">
                <rect
                  width="38.0245"
                  height="26.7441"
                  fill="white"
                  transform="translate(46.4102 26.9141)"
                />
              </clipPath>
              <clipPath id="clip14_5456_56339">
                <rect
                  width="69.0755"
                  height="21.6299"
                  fill="white"
                  transform="translate(7.66406 5.73438)"
                />
              </clipPath>
              <clipPath id="clip15_5456_56339">
                <rect
                  width="29.3058"
                  height="21.5859"
                  fill="white"
                  transform="translate(7.66406 5.73438)"
                />
              </clipPath>
              <clipPath id="clip16_5456_56339">
                <rect
                  width="29.2636"
                  height="21.6285"
                  fill="white"
                  transform="translate(47.4805 5.73438)"
                />
              </clipPath>
              <clipPath id="clip17_5456_56339">
                <rect
                  width="16.7705"
                  height="25.7807"
                  fill="white"
                  transform="translate(33.834 25.2188)"
                />
              </clipPath>
              <clipPath id="clip18_5456_56339">
                <rect
                  width="16.4194"
                  height="16.4194"
                  fill="white"
                  transform="translate(34.002)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="w-[90%]  absolute bottom-[20%] flex flex-col gap-y-5 ">
          <div className="relative w-full h-[6px]">
            <div className="bg-sunset-coral h-[6px] w-full opacity-25 absolute"></div>
            <div className="bg-sunset-coral h-[6px] w-0 absolute loading-mobile"></div>
          </div>
          <div className="w-full flex justify-end">
            <div className="font-seagull text-[40px] text-sunset-coral flex">
              <div className="overflow-hidden h-[60px]">
                <div className="counter-1 translate-y-full">
                  <div>0</div>
                  <div className="text-end">1</div>
                </div>
              </div>
              <div className="overflow-hidden h-[60px]">
                <div className="counter-2 translate-y-full">
                  <div>0</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>0</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>0</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>0</div>
                </div>
              </div>
              <div className="overflow-hidden h-[60px] counter-3-container translate-y-full opacity-0">
                <div className="counter-3 translate-y-[96.8]">
                  <div>0</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>0</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>0</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>0</div>
                </div>
              </div>
              <div className="overflow-hidden h-[60px]">
                <div className="translate-y-full percen-mobile opacity-0">
                  %
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full z-[11502] bg-soft-tosca absolute top-0 bg-tosca rounded-tl-[25px] rounded-tr-[25px] translate-y-full"></div>
      <div className="w-full h-full z-[11502] bg-[#FFC127] absolute top-0 bg-yellow rounded-tl-[25px] rounded-tr-[25px] translate-y-full"></div>
      <div className="w-full h-full z-[11502] bg-[#FFFBF3] absolute top-0 bg--white rounded-tl-[25px] rounded-tr-[25px] translate-y-full"></div>
    </>
  );
};

export default PreloaderMobile;
