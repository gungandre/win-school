"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { preloaderContext } from "@/app/context/preloaderContext";
import { useContext } from "react";
import useScrollAndLenis from "../lenis/useScrollLenis";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import useMediaQuery from "@/app/utils/useMediaQuery";
import PreloaderMobile from "./Preloader-mobile";
import { useRef } from "react";
import PreloaderDesktop from "./Preloader-desktop";

const Preloader = () => {
  const small = useMediaQuery("(max-width: 640px)");
  return <>{small ? <PreloaderMobile /> : <PreloaderDesktop />}</>;
};

export default Preloader;
