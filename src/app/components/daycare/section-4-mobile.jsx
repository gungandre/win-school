import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

const Section4Mobile = () => {
  const container = useRef();

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".text-playscholl-photo",

        onEnter: () => {
          gsap.to(".text-playscholl-photo", {
            translateY: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.out",
            stagger: 0.1,
          });
        },
      });

      ScrollTrigger.create({
        trigger: ".img-photo-gallery",

        onEnter: () => {
          gsap.to(".img-photo-gallery", {
            translateX: 0,
            duration: 1,
            ease: "power1.out",
            stagger: 0.1,
          });
        },
      });
    },
    { scope: container }
  );

  return (
    <div className="w-full min-h-dvh bg-white-ivory px-[32px]" ref={container}>
      <div className="font-helixa text-[48px] leading-[50px] text-sunset-coral text-center mt-[120px]">
        <div className="translate-y-full text-playscholl-photo opacity-0">
          Daycare
        </div>

        <div className="translate-y-full text-playscholl-photo opacity-0">
          {" "}
          Photo Gallery
        </div>

        <br />
      </div>

      <div className="grid grid-cols-2 mt-[60px]">
        <div className="w-full flex flex-col gap-[20px]  ">
          <div className="w-[40.233vw] h-[54.186vw] rounded-[25px] overflow-hidden translate-x-[-100vw] img-photo-gallery">
            <img
              src="assets/images/playschool/gallery/Image 6.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-[40.233vw] h-[37.442vw] rounded-[25px] overflow-hidden translate-x-[-100vw] img-photo-gallery">
            <img
              src="assets/images/playschool/gallery/Image 2.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-[40.233vw] h-[54.186vw] rounded-[25px] overflow-hidden translate-x-[-100vw] img-photo-gallery">
            <img
              src="assets/images/playschool/gallery/Image 5.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-[20px] items-center">
          <div className="w-[40.233vw] h-[54.186vw] rounded-[25px] overflow-hidden translate-x-[100vw] img-photo-gallery">
            <img
              src="assets/images/playschool/gallery/Image 4.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="w-[40.233vw] h-[54.186vw] rounded-[25px] overflow-hidden translate-x-[100vw] img-photo-gallery">
            <img
              src="assets/images/playschool/gallery/Image 1.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-[40.233vw] h-[37.442vw] rounded-[25px] overflow-hidden translate-x-[100vw] img-photo-gallery">
            <img
              src="assets/images/playschool/gallery/Image 3.png"
              className="w-full h-full object-cover object-top"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4Mobile;
