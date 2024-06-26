import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Section6Mobile = () => {
  const container = useRef();

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".card-building-mobile",
        once: true,

        onEnter: () => {
          gsap.to(".card-building-mobile", {
            transform: "translateY(0)",
            opacity: 1,
            ease: "power1.out",
            duration: 1,
            stagger: 0.1,
          });
        },
      });
    },
    { scope: container }
  );
  return (
    <div
      className="w-full min-h-svh bg-white-ivory px-[32px] py-[120px]"
      ref={container}
    >
      <div className="w-ful h-full flex flex-col gap-y-[16px] justify-center items-center">
        <div className="max-[430px]:w-[330px] max-[430px]:h-[240px] w-[366px] h-[240px] rounded-[25px] bg-[#EEE7D9] relative p-[32px] card-building-mobile translate-y-full opacity-0">
          <div className="font-helixa text-[60px] leading-[70px] text-[#404040]">
            Buildings
          </div>
          <div className="absolute bottom-[5%] right-[3%]">
            <div className="w-[112px] h-[40px] rounded-[20px] bg-white-ivory flex items-center relative">
              <div className="font-helixa text-[20px] leading-[24px] text-[#404040] absolute left-[16px]">
                More
              </div>
              <div className="w-[32px] h-[32px] bg-sunset-coral flex justify-center items-center rounded-full absolute right-[5px]">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.736328 11.2685L11.2626 0.742188M11.2626 0.742188L0.736328 0.742189M11.2626 0.742188V11.2685"
                    stroke="#FFFBF3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="max-[430px]:w-[330px] max-[430px]:h-[240px] w-[366px] h-[240px] rounded-[25px] bg-[#EEE7D9] relative p-[32px] card-building-mobile translate-y-full opacity-0">
          <div className="font-helixa text-[60px] leading-[70px] text-[#404040]">
            Facilities
          </div>
          <div className="absolute bottom-[5%] right-[3%]">
            <div className="w-[112px] h-[40px] rounded-[20px] bg-white-ivory flex items-center relative">
              <div className="font-helixa text-[20px] leading-[24px] text-[#404040] absolute left-[16px]">
                More
              </div>
              <div className="w-[32px] h-[32px] bg-sunset-coral flex justify-center items-center rounded-full absolute right-[5px]">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.736328 11.2685L11.2626 0.742188M11.2626 0.742188L0.736328 0.742189M11.2626 0.742188V11.2685"
                    stroke="#FFFBF3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="max-[430px]:w-[330px] max-[430px]:h-[240px] w-[366px] h-[240px] rounded-[25px] bg-[#EEE7D9] relative p-[32px] card-building-mobile translate-y-full opacity-0">
          <div className="font-helixa text-[60px] leading-[70px] text-[#404040]">
            Activities
          </div>
          <div className="absolute bottom-[5%] right-[3%]">
            <div className="w-[112px] h-[40px] rounded-[20px] bg-white-ivory flex items-center relative">
              <div className="font-helixa text-[20px] leading-[24px] text-[#404040] absolute left-[16px]">
                More
              </div>
              <div className="w-[32px] h-[32px] bg-sunset-coral flex justify-center items-center rounded-full absolute right-[5px]">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.736328 11.2685L11.2626 0.742188M11.2626 0.742188L0.736328 0.742189M11.2626 0.742188V11.2685"
                    stroke="#FFFBF3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6Mobile;
