"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useContext } from "react";
import { preloaderContext } from "@/app/context/preloaderContext";
import { useRef, useState, useEffect } from "react";

const menuList = [
  {
    id: 1,
    name: "Curriculum",
    submenu: [
      { name: "Our Approach", link: "/our-approach" },
      { name: "Our Programmes", link: "/our-programmes" },
    ],
  },
  {
    name: "Admission",
    submenu: [
      { name: "Academic Calender", link: "/academic-calender" },
      { name: "School Tour", link: "/school-tour" },
    ],
  },
  {
    id: 2,
    name: "About Us",
    submenu: [
      {
        name: "Our Vision & Mission",
        link: "/our-vision-and-mission",
      },
      { name: "Our Team", link: "/our-team" },
      { name: "Our Facilities", link: "/our-facilities" },
      { name: "Our Features", link: "/our-features" },
    ],
  },
  {
    id: 3,
    name: "WINner Classes",
    submenu: [
      { name: "Daycare", link: "/daycare" },
      { name: "Playschool", link: "/playschool" },
      { name: "Nursery", link: "/nursery" },
      { name: "Preschool", link: "/preschool" },
      { name: "Kindy A", link: "/kindy-a" },
      { name: "Kindy B", link: "/kindy-b" },
    ],
  },
  {
    id: 4,
    name: "Contact Us",
    submenu: [{ name: "Our Location", link: "/our-location" }],
  },
];

const Header = ({ navbarColor }) => {
  const { preloaderComplete } = useContext(preloaderContext);
  const [menuShow, setMenuShow] = useState(false);
  const [menuIndex, setMenuIndex] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(null);
  const elemenRef = useRef(null);
  const container = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setPrevScrollPos(window.pageYOffset);
      const currentScrollPos = window.pageYOffset;
      const headerElement = container.current;

      if (prevScrollPos > currentScrollPos) {
        // Scroll up - show header
        gsap.to(headerElement, { y: 0, opacity: 1, duration: 0.5 });
      } else {
        // Scroll down - hide header
        gsap.to(headerElement, { y: "-100%", opacity: 0, duration: 0.5 });
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useGSAP(
    () => {
      if (navbarColor) {
        gsap.to(".menu-name-span", {
          color: navbarColor,
        });

        gsap.to(".arrow path", {
          stroke: navbarColor,
        });

        gsap.to(".nav-cta", {
          borderColor: navbarColor,
        });

        gsap.to(".title-button", {
          color: navbarColor,
          duration: 0.1,
        });
        if (navbarColor === "#19918E") {
          gsap.to(".nav-logo .fill-color", {
            fill: navbarColor,
            duration: 0.1,
          });

          gsap.to(".fill-orange", {
            fill: "#F96D49",
            duration: 0.1,
          });

          gsap.to(".fill-yellow", {
            fill: "#FFC127",
            duration: 0.1,
          });
        } else {
          gsap.to(".nav-logo path", {
            fill: navbarColor,
            duration: 0.1,
          });
        }
      }
    },
    { scope: container, dependencies: [navbarColor] }
  );

  useGSAP(
    () => {
      const tlNavbarAnimation = gsap.timeline({
        paused: true,
      });

      tlNavbarAnimation
        .to(
          ".menu-name",

          {
            transform: "translateY(0)",
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
          }
        )
        .to(
          ".nav-cta",
          { transform: "translateY(0)", opacity: 1, duration: 1.5 },
          "<"
        )
        .to(
          ".nav-logo",
          {
            transform: "translateY(0)",
            opacity: 1,
            duration: 1.5,
          },
          "<"
        );

      if (preloaderComplete) {
        tlNavbarAnimation.play();
      }
    },
    { scope: container, dependencies: [preloaderComplete] }
  );

  const hoverMenu = (index, item) => {
    let tlMenu = gsap.timeline({
      paused: true,
    });
    let tlSubmenu = gsap.timeline({
      paused: true,
    });
    const dropdownMenu = document.querySelector(`.dropdown-menu-${index}`);

    tlMenu
      .to(dropdownMenu, {
        background: navbarColor === "#19918E" ? "#19918E" : "#FFFBF3",
        duration: 0.5,
        height: "auto",

        zIndex: -1,
      })
      .to(
        `.nav-angle-down-${index}`,
        {
          rotate: -180,
          duration: 0.5,
        },
        "<"
      )
      .to(
        document.querySelector(`.nav-angle-down-${index} path`),
        {
          stroke: navbarColor === "#19918E" ? "#FFFBF3" : "#19918E",
          duration: 0.5,
        },
        "<"
      )
      .to(
        `.dropdown-${index} .menu-name-span`,
        {
          color: navbarColor === "#19918E" ? "#FFFBF3" : "#19918E",
          duration: 0.5,
        },
        "<"
      )
      .to(
        document.querySelectorAll(`.text1`),
        {
          color: navbarColor === "#19918E" ? "#FFFBF3" : "#19918E",
          duration: 0.5,
        },
        "<"
      );

    tlSubmenu.to(`.menu-item-${item.id}`, {
      opacity: 1,
      transform: "translateY(0)",
      stagger: 0.1,
      duration: 0.5,
    });

    tlMenu.play();
    tlSubmenu.play();
  };

  const hoverLeave = (index, item) => {
    let tlMenu = gsap.timeline({
      paused: true,
    });
    let tlSubmenu = gsap.timeline({
      paused: true,
    });
    const dropdownMenu = document.querySelector(`.dropdown-menu-${index}`);

    tlMenu

      .to(
        dropdownMenu,
        {
          background: "transparent",
          duration: 0.5,
          height: "0",
          color: "white",
          zIndex: -1,
        },
        "<"
      )
      .to(
        `.nav-angle-down-${index}`,
        {
          rotate: 0,
          duration: 0.5,
        },
        "<"
      )
      .to(
        document.querySelector(`.nav-angle-down-${index} path`),
        {
          stroke: navbarColor === "#19918E" ? "#19918E" : "#FFFBF3",
          duration: 0.5,
        },
        "<"
      )
      .to(
        document.querySelector(`.dropdown-${index} div span`),
        {
          color: navbarColor === "#19918E" ? "#19918E" : "#FFFBF3",
          duration: 0.5,
        },
        "<"
      );

    tlSubmenu.to(`.menu-item-${item.id}`, {
      opacity: 0,
      transform: "translateY(100%)",
      stagger: 0.1,
      duration: 0.5,
    });

    tlMenu.play();
    tlSubmenu.play();
  };

  const hoverSubMenu = (index, subItem) => {
    let tlSubMenuHover = gsap.timeline({
      paused: true,
    });
    tlSubMenuHover
      .to(
        `.submenu-${index}-${subItem}`,
        {
          background: navbarColor === "#19918E" ? "#FFFBF3" : "#19918E",
          duration: 0.5,
        },
        "<"
      )
      .to(
        `.submenu-${index}-${subItem} a .text1`,
        {
          y: "-100%",
          opacity: 0,
          duration: 0.5,
        },
        "<"
      )
      .to(
        `.submenu-${index}-${subItem} a .text2`,
        {
          color: navbarColor === "#19918E" ? "#19918E" : "#FFFBF3",
          opacity: 3,
          y: "-100%",
          duration: 0.5,
        },
        "<"
      );

    tlSubMenuHover.play();
  };

  const hoverSubMenuLeave = (index, subItem) => {
    let tlSubMenuHover = gsap.timeline({
      paused: true,
    });
    tlSubMenuHover
      .to(
        `.submenu-${index}-${subItem}`,
        {
          background: navbarColor === "#19918E" ? "#19918E" : "#FFFBF3",
          duration: 0.5,
          onComplete: () => {
            gsap.set(`.submenu-${index}-${subItem}`, {
              background: "transparent",
            });
          },
        },
        "<"
      )
      .to(
        `.submenu-${index}-${subItem} a .text1`,
        {
          y: "0",
          opacity: 1,
          duration: 0.5,
        },
        "<"
      )
      .to(
        `.submenu-${index}-${subItem} a .text2`,
        {
          color: navbarColor === "#19918E" ? "#FFFBF3" : "#19918E",
          opacity: 3,
          y: "100%",
          duration: 0.5,
        },
        "<"
      );

    tlSubMenuHover.play();
  };

  const buttonHover = () => {
    gsap.set(".circle-button", {
      background: navbarColor === "#19918E" ? "#19918E" : "#FFFBF3",
    });

    gsap.to(".title-button", {
      color: navbarColor === "#19918E" ? "#FFFBF3" : "#19918E",
    });

    gsap.to(".circle-button", {
      transform: "translateY(0)",
    });
  };
  const buttonLeave = () => {
    gsap.to(".circle-button", {
      transform: "translateY(100%)",
    });
    gsap.to(".title-button", {
      color: navbarColor === "#19918E" ? "#19918E" : "#FFFBF3",
    });
  };

  const { contextSafe } = useGSAP();
  // function mobile

  const subMenuClick = contextSafe((index) => {
    menuList.forEach((_, i) => {
      if (index === menuIndex) {
        setMenuIndex(null);
        return gsap.to(`.menu-${i}`, {
          height: "0",
          paddingBottom: "0",
          duration: 0.5,
        });
      }

      if (i === index) {
        setMenuIndex(index);

        gsap.to(`.menu-${i}`, {
          height: "auto",
          paddingBottom: 5,

          duration: 0.5,
        });
        gsap.to(`.arrow-mobile-${index}`, {
          rotate: "180deg",
          duration: 0.5,
        });
      } else {
        gsap.to(`.menu-${i}`, {
          height: "0",
          paddingBottom: "0",
          duration: 0.5,
        });
        gsap.to(`.arrow-mobile-${index}`, {
          rotate: "0deg",
          duration: 0.5,
        });
      }
    });
  });

  const menuClick = () => {
    setMenuShow(!menuShow);
  };

  useEffect(() => {
    if (menuShow) {
      gsap.to(elemenRef.current, {
        height: "100%",
        duration: 0.5,
      });
    } else {
      gsap.to(elemenRef.current, {
        height: 0,
        duration: 0.5,
      });

      menuList.forEach((_, i) => {
        gsap.to(`.menu-${i}`, {
          height: "0",
          paddingBottom: "0",
          duration: 0.5,
        });
      });
    }
  }, [menuShow]);

  return (
    <div>
      <nav
        className="navbar fixed top-0 w-full p-8 sm:py-9 sm:px-15 flex items-center justify-between z-50 max-sm:hidden"
        ref={container}
      >
        <Link href="/">
          <svg
            className="nav-logo translate-y-[-50%] opacity-0"
            width={149}
            height={47}
            viewBox="0 0 149 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1754_12591)">
              <path
                className="fill-color"
                d="M74.1277 3.17969L69.0805 20.2225H65.4723L62.6438 9.73826L59.6934 20.2225H56.0844L51.0859 3.17969H55.3527L57.9369 13.6396L60.8629 3.17969H64.4718L67.1542 13.664L69.8609 3.17969H74.1277Z"
                fill="#19918E"
              />
              <path
                className="fill-color"
                d="M97.9147 3.17969V20.2225H94.2822L87.1381 9.68953L87.3574 20.2225H82.9688V3.17969H86.6013L93.6723 12.5668L93.5261 3.17969H97.9147Z"
                fill="#19918E"
              />
              <path
                className="fill-color"
                d="M80.6192 20.2088H76.2344V3.17969H80.3755L80.6192 20.2081V20.2088Z"
                fill="#19918E"
              />
              <path
                className="fill-color"
                d="M61.4736 34.9924C64.5701 34.9924 66.3746 37.2841 66.3746 39.8203C66.3746 44.2089 62.4489 46.0134 58.4988 46.0134C56.0365 46.0134 53.5247 45.3061 51.989 44.0627L52.5989 39.869C53.7691 41.2586 56.7682 42.2339 59.1331 42.2339C60.9376 42.2339 62.3758 41.6728 62.3758 40.3076C62.3758 39.3566 61.6929 38.698 60.2302 38.698C59.1331 38.698 58.1334 39.0886 56.6456 39.0886C53.6222 39.0886 51.8672 37.5042 51.8672 34.5294C51.8672 30.287 55.4267 28.5312 59.2305 28.5312C61.1812 28.5312 63.1806 28.9942 64.8381 29.799L64.5214 33.8708C63.1075 32.8955 60.7175 32.2125 58.8156 32.2125C57.1573 32.2125 55.8652 32.725 55.8652 33.9683C55.8652 34.9436 56.67 35.5048 57.9864 35.5048C59.3029 35.5048 59.9858 34.9924 61.4485 34.9924H61.4728H61.4736Z"
                fill="#19918E"
              />
              <path
                className="fill-color"
                d="M76.955 42.1801C78.3202 42.1801 79.9298 41.7659 81.6612 40.8637L82.0023 44.96C80.4658 45.6429 78.6133 46.0327 76.7845 46.0327C72.3228 46.0327 67.8359 43.6922 67.8359 37.4017V37.3042C67.8359 31.0624 72.6395 28.4531 77.0769 28.4531C78.8813 28.4531 80.6363 28.8917 82.0023 29.7452L81.6612 33.8414C80.1978 32.6468 78.6377 32.1344 77.1994 32.1344C74.3465 32.1344 71.9817 34.2069 71.9817 37.3522C71.9817 40.2295 73.9567 42.1801 76.9558 42.1801H76.955Z"
                fill="#19918E"
              />
              <path
                className="fill-color"
                d="M94.56 45.7928V38.5757H88.6349L88.7324 45.7928H84.3438V28.75H88.4887L88.5862 35.3329H94.56V28.75H98.705L98.9486 45.7928H94.56Z"
                fill="#19918E"
              />
              <path
                className="fill-color"
                d="M118.282 37.0368C118.282 43.4248 113.796 46.0828 109.48 45.9122C105.165 46.0828 100.703 43.4256 100.703 37.0368C100.703 31.4292 104.97 28.625 109.48 28.625C113.991 28.625 118.282 31.4292 118.282 37.0368ZM114.137 37.0368C114.137 34.4283 112.138 32.502 109.48 32.502C106.822 32.502 104.847 34.4283 104.847 37.0368C104.847 40.5483 106.92 42.0109 109.48 42.0109C112.039 42.0109 114.137 40.5483 114.137 37.0368Z"
                fill="#19918E"
              />
              <path
                className="fill-color"
                d="M137.376 37.0368C137.376 43.4248 132.89 46.0828 128.574 45.9122C124.259 46.0828 119.797 43.4256 119.797 37.0368C119.797 31.4292 124.064 28.625 128.574 28.625C133.085 28.625 137.376 31.4292 137.376 37.0368ZM133.231 37.0368C133.231 34.4283 131.231 32.502 128.573 32.502C125.915 32.502 123.941 34.4283 123.941 37.0368C123.941 40.5483 126.014 42.0109 128.573 42.0109C131.133 42.0109 133.231 40.5483 133.231 37.0368Z"
                fill="#19918E"
              />
              <path
                className="fill-color"
                d="M149 41.8915V45.7928H139.32V28.75H143.465V41.8923H149V41.8915Z"
                fill="#19918E"
              />
              <path
                className="fill-orange"
                d="M23.4132 9.10769C25.9282 9.10769 27.9671 7.06886 27.9671 4.55384C27.9671 2.03883 25.9282 0 23.4132 0C20.8982 0 18.8594 2.03883 18.8594 4.55384C18.8594 7.06886 20.8982 9.10769 23.4132 9.10769Z"
                fill="#F96D49"
              />
              <path
                className="fill-yellow"
                d="M20.5049 12.0704C17.8972 7.96956 12.8218 3.87103 4.25088 3.17969C4.21585 6.66302 5.23535 9.96058 6.10028 12.3825C6.32261 12.3765 6.3721 12.3749 6.59214 12.3749C10.9069 12.3749 14.3765 13.4896 17.1525 15.1532C17.9094 13.715 19.1162 12.6802 20.5057 12.0711L20.5049 12.0704Z"
                fill="#FFC127"
              />
              <path
                className="fill-yellow"
                d="M26.3367 12.0848C27.7186 12.7 28.917 13.7378 29.6662 15.1768C32.4445 13.4995 35.9111 12.3734 40.2145 12.3734C40.449 12.3734 40.6865 12.3803 40.9241 12.3871C41.789 9.96515 42.6022 6.66302 42.5671 3.17969C33.9863 3.87103 28.9422 7.97794 26.3359 12.0848H26.3367Z"
                fill="#FFC127"
              />
              <path
                className="fill-orange"
                d="M18.7701 18.4143C18.5981 24.4308 23.4169 28.2925 23.4169 28.2925C23.4169 28.2925 28.2357 24.4308 28.0636 18.4143C27.8946 12.5181 18.9392 12.5181 18.7701 18.4143Z"
                fill="#F96D49"
              />
              <path
                className="fill-color"
                d="M16.2982 18.3466C16.3051 18.1105 16.3264 17.8836 16.3515 17.6598C12.6344 15.2226 7.36107 13.8955 0 15.9216C4.90941 29.931 15.6548 30.327 21.0911 29.5168C19.5166 27.9674 16.1376 23.9709 16.2982 18.3473V18.3466Z"
                fill="#19918E"
              />
              <path
                className="fill-color"
                d="M30.4818 17.6605C30.5069 17.8844 30.5283 18.1113 30.5351 18.3465C30.6958 23.9709 27.316 27.9666 25.7422 29.5161C31.1785 30.3269 41.9239 29.931 46.8341 15.9215C39.4722 13.8955 34.1989 15.2226 30.4818 17.6605Z"
                fill="#19918E"
              />
              <path
                className="fill-orange"
                d="M31.1159 39.2453C28.3978 37.4195 25.9111 34.3656 25.1109 33.3339C24.2026 32.1073 23.4115 31.4297 23.4115 31.4297C23.4115 31.4297 22.6166 32.1104 21.706 33.3415C20.8989 34.3808 18.4183 37.4241 15.707 39.2453C13.6627 40.6181 12.3828 42.9723 12.3828 45.548V45.7308H19.6068C20.9484 42.4058 23.4115 40.4308 23.4115 40.4308C23.4115 40.4308 25.8753 42.4058 27.2161 45.7308H34.4401V45.548C34.4401 42.9723 33.1595 40.6188 31.1159 39.2453Z"
                fill="#F96D49"
              />
            </g>
            <defs>
              <clipPath id="clip0_1754_12591">
                <rect width={149} height="46.0394" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <ul className="flex items-center gap-2">
          {menuList.map((item, index) => (
            <li
              key={index}
              className={`text-dark-tosca menu-title px-4 py-4 relative dropdown-${index} over sm:w-[201px]`}
              onMouseEnter={() => hoverMenu(index, item)}
              onMouseLeave={() => hoverLeave(index, item)}
            >
              <div
                className="flex items-center justify-center gap-5 text-desktop font-bold text-nowrap menu-name translate-y-[-400%] menuss"
                href="/curriculum"
              >
                <span className="menu-name-span">{item.name}</span>

                <svg
                  className={`nav-angle-down-${index} arrow`}
                  width={16}
                  height={8}
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.5L8.25926 6.5L15 1.5"
                    stroke="#19918E"
                    strokeWidth={2}
                  />
                </svg>
              </div>
              <ul
                className={`dropdown-menu-${index} bg-transparent space-y-1 absolute   top-0 left-0 px-2  h-0 overflow-hidden rounded-[10px] sm:pt-16 pb-4 text-desktop w-full  `}
              >
                {item.submenu.map((subitem, subindex) => (
                  <li
                    key={subindex}
                    className={`menu-item-${item.id}  submenu-${item.id}-${subindex}  w-full text-center bg-transparent font-bold rounded-lg translate-y-[100%] opacity-0`}
                  >
                    <Link
                      href={`${subitem.link}`}
                      className="h-10 overflow-hidden block z-10"
                      onMouseEnter={() => hoverSubMenu(item.id, subindex)}
                      onMouseLeave={() => hoverSubMenuLeave(item.id, subindex)}
                    >
                      <div className="text1 h-full flex justify-center items-center w-full ">
                        {subitem.name}
                      </div>
                      <div
                        className="text2 h-full flex justify-center items-center w-full "
                        aria-hidden="true"
                      >
                        {subitem.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/6281130910001"
          target="_blank"
          className="nav-cta text-dark-tosca text-20-body-text-2 border-[2px] opacity-0 border-dark-tosca rounded-full flex items-center justify-center p-[10px_55px] translate-y-[-180%] overflow-hidden relative group"
          onMouseEnter={() => buttonHover()}
          onMouseLeave={() => buttonLeave()}
        >
          <div className="title-button text-dark-tosca "> Contact Us</div>

          <div className="w-[300px] circle-button rounded-full z-[-1] h-[300px] bg-dark-tosca absolute translate-y-[100%] "></div>
        </a>
      </nav>

      <div className="max-sm:block hidden">
        <nav className="w-full fixed top-0  py-[40px] px-[32px] flex items-center justify-between z-[1000]">
          <Link href={"/"}>
            <div className="logo-mobile ">
              <svg
                width="126"
                height="39"
                viewBox="0 0 126 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_5181_56847)">
                  <path
                    d="M62.6842 2.6875L58.4161 17.0996H55.3649L52.9729 8.23367L50.478 17.0996H47.4261L43.1992 2.6875H46.8074L48.9926 11.5328L51.467 2.6875H54.5188L56.7871 11.5534L59.0761 2.6875H62.6842Z"
                    fill="#19918E"
                  />
                  <path
                    d="M82.801 2.6875V17.0996H79.7292L73.6879 8.19247L73.8733 17.0996H70.1621V2.6875H73.234L79.2134 10.6256L79.0898 2.6875H82.801Z"
                    fill="#19918E"
                  />
                  <path
                    d="M68.1748 17.088H64.4668V2.6875H67.9687L68.1748 17.0873V17.088Z"
                    fill="#19918E"
                  />
                  <path
                    d="M51.9849 29.5888C54.6034 29.5888 56.1294 31.5268 56.1294 33.6715C56.1294 37.3826 52.8096 38.9086 49.4693 38.9086C47.3871 38.9086 45.263 38.3104 43.9643 37.259L44.4801 33.7127C45.4697 34.8877 48.0058 35.7125 50.0056 35.7125C51.5316 35.7125 52.7478 35.2379 52.7478 34.0835C52.7478 33.2793 52.1703 32.7224 50.9334 32.7224C50.0056 32.7224 49.1603 33.0527 47.9022 33.0527C45.3454 33.0527 43.8613 31.7128 43.8613 29.1973C43.8613 25.6097 46.8714 24.125 50.0881 24.125C51.7376 24.125 53.4284 24.5165 54.8301 25.197L54.5622 28.6404C53.3666 27.8156 51.3455 27.238 49.7372 27.238C48.3348 27.238 47.2422 27.6714 47.2422 28.7228C47.2422 29.5476 47.9228 30.0221 49.036 30.0221C50.1492 30.0221 50.7268 29.5888 51.9636 29.5888H51.9842H51.9849Z"
                    fill="#19918E"
                  />
                  <path
                    d="M65.0767 35.6706C66.2311 35.6706 67.5922 35.3203 69.0564 34.5573L69.3448 38.0213C68.0455 38.5988 66.479 38.9285 64.9325 38.9285C61.1595 38.9285 57.3652 36.9493 57.3652 31.6297V31.5473C57.3652 26.269 61.4273 24.0625 65.1797 24.0625C66.7056 24.0625 68.1897 24.4334 69.3448 25.1551L69.0564 28.6191C67.8189 27.6089 66.4996 27.1755 65.2834 27.1755C62.8708 27.1755 60.871 28.9281 60.871 31.5879C60.871 34.021 62.5412 35.6706 65.0773 35.6706H65.0767Z"
                    fill="#19918E"
                  />
                  <path
                    d="M79.9635 38.7246V32.6215H74.953L75.0354 38.7246H71.3242V24.3125H74.8294L74.9118 29.8793H79.9635V24.3125H83.4686L83.6747 38.7246H79.9635Z"
                    fill="#19918E"
                  />
                  <path
                    d="M100.024 31.3164C100.024 36.7184 96.2299 38.9661 92.5806 38.8219C88.9312 38.9661 85.1582 36.719 85.1582 31.3164C85.1582 26.5744 88.7664 24.2031 92.5806 24.2031C96.3948 24.2031 100.024 26.5744 100.024 31.3164ZM96.5184 31.3164C96.5184 29.1106 94.8276 27.4816 92.5799 27.4816C90.3322 27.4816 88.6627 29.1106 88.6627 31.3164C88.6627 34.2859 90.4153 35.5228 92.5799 35.5228C94.7446 35.5228 96.5184 34.2859 96.5184 31.3164Z"
                    fill="#19918E"
                  />
                  <path
                    d="M116.17 31.3164C116.17 36.7184 112.376 38.9661 108.727 38.8219C105.078 38.9661 101.305 36.719 101.305 31.3164C101.305 26.5744 104.913 24.2031 108.727 24.2031C112.541 24.2031 116.17 26.5744 116.17 31.3164ZM112.665 31.3164C112.665 29.1106 110.974 27.4816 108.726 27.4816C106.479 27.4816 104.809 29.1106 104.809 31.3164C104.809 34.2859 106.562 35.5228 108.726 35.5228C110.891 35.5228 112.665 34.2859 112.665 31.3164Z"
                    fill="#19918E"
                  />
                  <path
                    d="M126 35.4254V38.7246H117.814V24.3125H121.32V35.4261H126V35.4254Z"
                    fill="#19918E"
                  />
                  <path
                    d="M19.7982 7.7018C21.925 7.7018 23.6491 5.97769 23.6491 3.8509C23.6491 1.72411 21.925 0 19.7982 0C17.6714 0 15.9473 1.72411 15.9473 3.8509C15.9473 5.97769 17.6714 7.7018 19.7982 7.7018Z"
                    fill="#F96D49"
                  />
                  <path
                    d="M17.3395 10.2058C15.1343 6.738 10.8424 3.27212 3.59449 2.6875C3.56488 5.63314 4.427 8.42168 5.15842 10.4698C5.34642 10.4646 5.38827 10.4633 5.57435 10.4633C9.22308 10.4633 12.1571 11.406 14.5046 12.8128C15.1446 11.5965 16.1651 10.7215 17.3402 10.2064L17.3395 10.2058Z"
                    fill="#FFC127"
                  />
                  <path
                    d="M22.2721 10.218C23.4407 10.7383 24.4542 11.6158 25.0877 12.8327C27.4371 11.4143 30.3686 10.4621 34.0077 10.4621C34.206 10.4621 34.4069 10.4679 34.6078 10.4736C35.3392 8.42554 36.0268 5.63314 35.9972 2.6875C28.7409 3.27212 24.4754 6.74508 22.2715 10.218H22.2721Z"
                    fill="#FFC127"
                  />
                  <path
                    d="M15.8729 15.5755C15.7274 20.6632 19.8024 23.9288 19.8024 23.9288C19.8024 23.9288 23.8774 20.6632 23.7318 15.5755C23.5889 10.5894 16.0159 10.5894 15.8729 15.5755Z"
                    fill="#F96D49"
                  />
                  <path
                    d="M13.7824 15.5144C13.7882 15.3148 13.8062 15.123 13.8274 14.9337C10.6841 12.8727 6.2248 11.7505 0 13.4638C4.15158 25.3107 13.2383 25.6455 17.8354 24.9604C16.504 23.6502 13.6465 20.2706 13.7824 15.5151V15.5144Z"
                    fill="#19918E"
                  />
                  <path
                    d="M25.7775 14.9343C25.7988 15.1236 25.8168 15.3155 25.8226 15.5144C25.9585 20.2706 23.1004 23.6495 21.7695 24.9598C26.3667 25.6455 35.4534 25.3107 39.6056 13.4637C33.3802 11.7504 28.9208 12.8727 25.7775 14.9343Z"
                    fill="#19918E"
                  />
                  <path
                    d="M26.3121 33.1873C24.0136 31.6433 21.9107 29.0608 21.234 28.1884C20.4659 27.1512 19.797 26.5781 19.797 26.5781C19.797 26.5781 19.1248 27.1537 18.3547 28.1948C17.6722 29.0737 15.5745 31.6472 13.2818 33.1873C11.553 34.3482 10.4707 36.339 10.4707 38.5171V38.6717H16.5796C17.7141 35.86 19.797 34.1898 19.797 34.1898C19.797 34.1898 21.8805 35.86 23.0143 38.6717H29.1232V38.5171C29.1232 36.339 28.0402 34.3488 26.3121 33.1873Z"
                    fill="#F96D49"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5181_56847">
                    <rect width="126" height="38.9327" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Link>
          <div className="flex items-center gap-x-[23px]">
            <div
              className="font-helixa text-[20px] text-dark-tosca"
              onClick={menuClick}
            >
              Menu
            </div>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.1005 19.389C8.97534 19.8848 8.96712 20.403 9.0765 20.9025C5.235 20.3595 3 17.646 3 15V14.25C3 13.6533 3.23705 13.081 3.65901 12.659C4.08097 12.2371 4.65326 12 5.25 12H14.2845C14.307 12.5325 14.475 13.0515 14.7765 13.5H5.25C5.05109 13.5 4.86032 13.579 4.71967 13.7197C4.57902 13.8603 4.5 14.0511 4.5 14.25V15C4.5 16.8795 6.132 18.9 9.1005 19.389ZM10.5 2.25C11.594 2.25 12.6432 2.6846 13.4168 3.45818C14.1904 4.23177 14.625 5.28098 14.625 6.375C14.625 7.46902 14.1904 8.51823 13.4168 9.29182C12.6432 10.0654 11.594 10.5 10.5 10.5C9.40598 10.5 8.35677 10.0654 7.58318 9.29182C6.8096 8.51823 6.375 7.46902 6.375 6.375C6.375 5.28098 6.8096 4.23177 7.58318 3.45818C8.35677 2.6846 9.40598 2.25 10.5 2.25ZM10.5 3.75C9.80381 3.75 9.13613 4.02656 8.64384 4.51884C8.15156 5.01113 7.875 5.67881 7.875 6.375C7.875 7.07119 8.15156 7.73887 8.64384 8.23116C9.13613 8.72344 9.80381 9 10.5 9C11.1962 9 11.8639 8.72344 12.3562 8.23116C12.8484 7.73887 13.125 7.07119 13.125 6.375C13.125 5.67881 12.8484 5.01113 12.3562 4.51884C11.8639 4.02656 11.1962 3.75 10.5 3.75ZM15.876 11.3715L16.3005 10.2465C16.6875 9.2265 17.8935 8.7225 18.9105 9.156L19.4925 9.405C20.202 9.708 20.79 10.257 20.913 10.995C21.5985 15.0825 18.051 20.8965 13.968 22.38C13.23 22.647 12.432 22.44 11.8005 22.011L11.2815 21.6585C11.0684 21.515 10.889 21.3269 10.7557 21.1073C10.6223 20.8878 10.5382 20.6418 10.5091 20.3866C10.48 20.1313 10.5066 19.8728 10.5872 19.6288C10.6677 19.3849 10.8002 19.1613 10.9755 18.9735L11.793 18.063C11.985 17.8515 12.23 17.6951 12.5027 17.61C12.7753 17.5248 13.0657 17.5139 13.344 17.5785L15.1815 18.0135C16.6385 17.1035 17.4195 15.8235 17.5245 14.1735L16.2075 12.8835C16.0108 12.6913 15.8746 12.4457 15.8157 12.1771C15.7568 11.9084 15.7778 11.6284 15.876 11.3715Z"
                  fill="#19918E"
                />
              </svg>
            </div>
          </div>
        </nav>
        <div
          className="px-[32px] w-full h-0 fixed bg-white-ivory container-menulist z-[999] overflow-hidden "
          ref={elemenRef}
        >
          <div className="   flex flex-col gap-y-5  mt-[150px]">
            {menuList.map((item, index) => (
              <div
                className="flex flex-col gap-y-5 font-helixa font-bold text-[32px] leading-[38px] text-dark-tosca"
                key={index}
                onClick={() => subMenuClick(index)}
              >
                <div className="flex items-center gap-x-[10px]">
                  <div>{item.name}</div>
                  <div className={`arrow-mobile-${index}`}>
                    <svg
                      width="15"
                      height="8"
                      viewBox="0 0 15 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L8.25926 6.5L15 1.5"
                        stroke="#19918E"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className={`flex flex-col gap-y-3 overflow-hidden h-0 menu-${index} `}
                >
                  {item.submenu.map((item, index) => (
                    <Link href={item.link} key={index}>
                      <div className="text-[16px] leading-[16px] text-[#5E5E5E] font-normal">
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
