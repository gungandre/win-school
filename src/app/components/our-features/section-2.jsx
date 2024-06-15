import React from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const datas = [
  {
    id: 1,
    title1: "Safe and Secure",
    title2: "Environment",
    desc1:
      "Safety is our top priority. Our campus is surrounded by lush greenery, providing a serene and protective atmosphere for all",
    desc2:
      "Security personnel ensure a watchful eye, alloWINg students to focus on their studies without worry.",
  },
  {
    id: 2,
    title1: "Architectural",
    title2: "Marvel",
    desc1:
      "Prepare to be enchanted by our stunning architecture. The blend of traditional Balinese elements and modern design creates a harmonious space that inspires both young minds and seasoned educators.",
    desc2:
      "From intricately carved wooden doors to sun-kissed courtyards, every corner exudes beauty and charm.",
  },

  {
    id: 3,
    title1: "Connectivity",
    title2: "Everywhere",
    desc1:
      "In this digital age, seamless connectivity is essential. Our school boasts Wi-Fi coverage throughout, ensuring that online resources and communication are just a click away.",
    desc2: "",
  },

  {
    id: 4,
    title1: "Wellbeing,",
    title2: "Balance, and Joy",
    desc1:
      "Learning isn’t just about textbooks; it’s about holistic growth. We nurture students’ emotional and mental wellbeing, promoting balance and joy. ",
    desc2:
      "Whether through mindfulness sessions, art classes, or community service, we encourage students to thrive in every aspect of life.",
  },
];

const Section2 = ({ tlComplete }) => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    datas.forEach((_, index) => {
      ScrollTrigger.create({
        trigger: `.number-1-${index}`,
        once: true,

        onEnter: () => {
          gsap.to(`.number-1-${index}`, {
            transform: "translateY(0)",
            opacity: 1,
            ease: "power1.out",
            duration: 2,
          });
        },
      });

      ScrollTrigger.create({
        trigger: `.section-2-title-1-${index}`,
        once: true,
        onEnter: () => {
          gsap.to(`.section-2-title-1-${index}`, {
            transform: "translateY(0)",

            ease: "power1.out",
            duration: 2,
          });
        },
      });

      ScrollTrigger.create({
        trigger: `.section-2-title-2-${index}`,
        once: true,
        onEnter: () => {
          gsap.to(`.section-2-title-2-${index}`, {
            transform: "translateY(0)",
            opacity: 1,
            ease: "power1.out",
            duration: 2,
          });
        },
      });

      ScrollTrigger.create({
        trigger: `.section-2-desc-1-${index}`,
        once: true,
        onEnter: () => {
          gsap.to(`.section-2-desc-1-${index}`, {
            transform: "translateY(0)",
            opacity: 1,
            ease: "power1.out",
            duration: 2,
          });
        },
      });

      ScrollTrigger.create({
        trigger: `.section-2-desc-2-${index}`,
        once: true,
        onEnter: () => {
          gsap.to(`.section-2-desc-2-${index}`, {
            transform: "translateY(0)",
            opacity: 1,
            ease: "power1.out",
            duration: 2,
          });
        },
      });

      ScrollTrigger.create({
        trigger: `.section-2-img-${index}`,
        once: true,
        onEnter: () => {
          gsap.to(`.section-2-img-${index}`, {
            transform: "translateY(0)",
            opacity: 1,
            ease: "power1.out",
            duration: 2,
          });
        },
      });
    });
  }, [tlComplete]);

  return (
    <div className="w-full min-h-dvh bg-white-ivory flex py-[60px]">
      <div className="w-full flex justify-center">
        <div className="w-[80%] flex flex-col gap-y-20">
          {datas.map((data, index) => (
            <div className="w-full grid grid-cols-[10%_90%]">
              <div className="flex  h-[110px] items-center">
                <div
                  className={`number-1-${index} translate-y-[100%] opacity-0`}
                >
                  <div className="w-[76px] h-[76px] rounded-full bg-sunset-coral font-helixa font-bold text-[28] flex items-center justify-center text-white-ivory">
                    0{data.id}
                  </div>
                </div>
              </div>

              <div className=" flex flex-col gap-y-[65px]">
                <div className="font-helixa text-[48px] font-bold text-[#404040] leading-[55px] ">
                  <div className="overflow-hidden">
                    <div
                      className={`section-2-title-1-${index}  translate-y-full leading-[55px]`}
                    >
                      {data.title1}
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <div
                      className={`section-2-title-2-${index} translate-y-full leading-[55px]`}
                    >
                      {data.title2}
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-between">
                  <div
                    className={`w-[739px] h-[342px] rounded-[50px] overflow-hidden section-2-img-${index} opacity-0 translate-y-full`}
                  >
                    <img src="/assets/images/our-features/image1.png" alt="" />
                  </div>
                  <div className="w-[30%]">
                    <div className="flex flex-col gap-y-5">
                      <ul>
                        <li
                          className={`list-disc section-2-desc-1-${index} translate-y-full opacity-0`}
                        >
                          {data.desc1}
                        </li>
                      </ul>
                      {data.desc2 && (
                        <ul
                          className={`list-disc section-2-desc-2-${index} translate-y-full opacity-0`}
                        >
                          <li>{data.desc2}</li>
                        </ul>
                      )}
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="w-full grid grid-cols-[10%_90%]">
            <div className="flex  h-[110px] items-center">
              <div className="number-1-2 translate-y-[100%] opacity-0">
                <div className="w-[76px] h-[76px] rounded-full bg-sunset-coral font-helixa font-bold text-[28] flex items-center justify-center text-white-ivory">
                  02
                </div>
              </div>
            </div>

            <div className=" flex flex-col gap-y-[65px]">
              <div className="font-helixa text-[48px] font-bold text-[#404040] leading-[55px] ">
                <div className="overflow-hidden">
                  <div className="section-2-title-1-2  translate-y-full leading-[55px]">
                    Architectural
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="section-2-title-2-2 translate-y-full leading-[55px]">
                    Marvel
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between">
                <div className="w-[739px] h-[342px] rounded-[50px] overflow-hidden section-2-img-2 opacity-0 translate-y-full">
                  <img src="/assets/images/our-features/image1.png" alt="" />
                </div>
                <div className="w-[30%]">
                  <div className="flex flex-col gap-y-5">
                    <ul>
                      <li className="list-disc section-2-desc-1-2 translate-y-full opacity-0">
                        Prepare to be enchanted by our stunning architecture.
                        The blend of traditional Balinese elements and modern
                        design creates a harmonious space that inspires both
                        young minds and seasoned educators.
                      </li>
                    </ul>
                    <ul className="list-disc section-2-desc-2-2 translate-y-full opacity-0">
                      <li>
                        From intricately carved wooden doors to sun-kissed
                        courtyards, every corner exudes beauty and charm.
                      </li>
                    </ul>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Section2;
