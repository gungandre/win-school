"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

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

const Header = ({ navbarAnimationPlay, navbarColor }) => {
  useGSAP(() => {
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
  }, [navbarColor]);

  useGSAP(() => {
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

    if (navbarAnimationPlay) {
      tlNavbarAnimation.play();
    }
  }, [navbarAnimationPlay]);

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

  return (
    <nav className="navbar fixed top-0 w-full p-8 sm:py-9 sm:px-15 flex items-center justify-between z-50">
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
  );
};

export default Header;
