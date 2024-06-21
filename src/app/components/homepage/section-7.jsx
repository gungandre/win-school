import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Section7Mobile from "./section-7-mobile";
const Section7 = () => {
  const container = useRef();

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".text-we-provide",

        onEnter: () => {
          gsap.fromTo(
            ".text-we-provide",
            {
              y: 100,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power1.out",
            }
          );

          gsap.fromTo(
            ".text-explore",
            {
              y: 100,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power1.out",
            }
          );
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

      ScrollTrigger.create({
        trigger: ".content-register-1",

        onEnter: () => {
          gsap.fromTo(
            ".content-register-1",
            {
              y: "100%",
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              delay: 0.5,
              ease: "power1.out",
              duration: 1,
            }
          );
        },
        toggleActions: "play none none none",
        once: true,
      });

      ScrollTrigger.create({
        trigger: ".content-register-2",

        onEnter: () => {
          gsap.fromTo(
            ".content-register-2",
            {
              y: "100%",
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              delay: 0.5,
              ease: "power1.out",
              duration: 1,
            }
          );
        },
        toggleActions: "play none none none",
        once: true,
      });
    },
    { scope: container }
  );
  return (
    <div>
      <section
        className="min-h-dvh w-full px-15 bg-white-ivory flex flex-col gap-y-[300px] section section-we-provides max-sm:hidden "
        ref={container}
      >
        <div className="h-full w-full flex justify-between px-24">
          <div className="font-helixa text-[6.667vw] text-sunset-coral leading-[6.771vw]">
            <div className="text-we-provide"> We provides an</div>
            <div className="text-we-provide">excellent selection</div>
            <div className="text-we-provide">of classes</div>
          </div>
          <div className="flex flex-col justify-end">
            <div className="">
              <div className="text-explore">
                {" "}
                Explore our diverse selection of classes, each{" "}
              </div>
              <div className="text-explore">
                tailored to provide a nurturing environment where
              </div>
              <div className="text-explore">
                children can learn, grow, and thrive.
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between">
          <Link href={"/daycare"}>
            <div className="group card-daycare translate-y-full opacity-0">
              <div className="w-[884px] h-[430px] bg-almond-cream group-hover:bg-soft-tosca rounded-[50px] relative   overflow-y-visible duration-1000 transition-all group-hover:translate-y-[-5%]">
                <div className="flex flex-col gap-y-[10px] absolute top-[7%] left-[7%]">
                  <div className="font-seagull text-[3.333vw] text-sunset-coral group-hover:text-white-ivory duration-1000 transition-all">
                    Daycare
                  </div>
                  <div className="font-helixa text-[1.875vw] text-[#5e5e5e] group-hover:text-white-ivory duration-1000 transition-all">
                    3 - 6 years old
                  </div>
                </div>
                <Image
                  src={"/assets/images/home/Image1.png"}
                  width={541}
                  height={565}
                  className="absolute top-[-39.5%] right-0"
                />
                <div className="absolute bottom-[5%] right-[2%] ">
                  <div className="relative w-[203px] h-[76px] flex items-center">
                    <div className="w-0 group-hover:w-[203px] duration-1000 opacity-0 group-hover:opacity-100 transition-all h-[76px] bg-white-ivory rounded-[38px] absolute right-0">
                      <div className="relative w-full h-full flex items-center">
                        <div className="font-helixa font-bold text-[28px] text-[#404040] ml-0 group-hover:ml-8 opacity-0 group-hover:opacity-100 duration-1000 transition-all">
                          More
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="w-[76px] h-[76px] group-hover:w-[62px] group-hover:h-[62px] transition-all duration-1000 bg-sunset-coral rounded-full flex justify-center items-center absolute right-[5%] z-10">
                        <svg
                          width="20"
                          height="20"
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
          <Link href={"/playschool"}>
            <div className="group card-daycare translate-y-full opacity-0">
              <div className="w-[884px] h-[430px] bg-almond-cream group-hover:bg-soft-tosca rounded-[50px] relative   overflow-y-visible duration-1000 transition-all group-hover:translate-y-[-5%]">
                <div className="flex flex-col gap-y-[10px] absolute top-[7%] left-[7%]">
                  <div className="font-seagull text-[3.333vw] text-sunset-coral group-hover:text-white-ivory duration-1000 transition-all">
                    Playschool
                  </div>
                  <div className="font-helixa text-[1.875vw] text-[#5e5e5e] group-hover:text-white-ivory duration-1000 transition-all">
                    20 months - 6 years old
                  </div>
                </div>
                <Image
                  src={"/assets/images/home/Image2.png"}
                  width={541}
                  height={565}
                  className="absolute top-[-39.5%] right-0"
                />
                <div className="absolute bottom-[5%] right-[2%] ">
                  <div className="relative w-[203px] h-[76px] flex items-center">
                    <div className="w-0 group-hover:w-[203px] duration-1000 opacity-0 group-hover:opacity-100 transition-all h-[76px] bg-white-ivory rounded-[38px] absolute right-0">
                      <div className="relative w-full h-full flex items-center">
                        <div className="font-helixa font-bold text-[28px] text-[#404040] ml-0 group-hover:ml-8 opacity-0 group-hover:opacity-100 duration-1000 transition-all">
                          More
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="w-[76px] h-[76px] group-hover:w-[62px] group-hover:h-[62px] transition-all duration-1000 bg-sunset-coral rounded-full flex justify-center items-center absolute right-[5%] z-10">
                        <svg
                          width="20"
                          height="20"
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
        <div className="w-full flex justify-center section-register">
          <div className="flex w-[1354px] flex-col gap-y-[140px]">
            <div className="font-helixa text-[6.667vw] text-sunset-coral text-center content-register-1 ">
              I would like to register!
            </div>
            <div className="w-full flex justify-between content-register-2">
              <div className="w-[540px] flex gap-x-[32px]">
                <div className="font-helixa font-bold text-[28px] text-[#404040]">
                  01
                </div>
                <div className="flex w-full justify-between items-center gap-x-[32px]">
                  <svg
                    width="144"
                    height="144"
                    viewBox="0 0 144 144"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="144" height="144" rx="36" fill="#EEE7D9" />
                    <path
                      d="M87.0053 101.52C82.0801 101.52 70.1065 95.1448 60.0535 81.4584C50.6508 68.6578 46.0781 59.4111 46.0781 53.1893C46.0781 48.2901 49.421 45.9523 51.2161 44.6952L51.6598 44.3815C53.6432 42.946 56.7288 42.4805 57.912 42.4805C59.9866 42.4805 60.8598 43.7088 61.3886 44.7793C61.8384 45.6857 65.5642 53.7819 65.941 54.7888C66.5205 56.3371 66.33 58.5929 64.539 59.891L64.225 60.1125C63.3356 60.7359 61.6824 61.8946 61.4534 63.3055C61.342 63.9904 61.5689 64.7081 62.1463 65.4956C65.0293 69.4289 74.2375 80.9785 75.8968 82.5452C77.1975 83.7757 78.8446 83.95 79.967 82.9923C81.1279 82.0018 81.6445 81.4173 81.6486 81.4091L81.7681 81.2922C81.8654 81.2082 82.773 80.4802 84.2561 80.4802C85.3258 80.4802 86.4137 80.8534 87.4896 81.5896C90.2814 83.4988 96.5802 87.7643 96.5802 87.7643L96.6815 87.8422C97.4879 88.5415 98.6528 90.5553 97.2934 93.1761C95.8853 95.8974 91.5193 101.514 87.0033 101.514L87.0053 101.52ZM57.91 44.6706C56.8868 44.6706 54.3726 45.1074 52.9138 46.1635L52.4438 46.4958C50.7683 47.6688 48.2378 49.4385 48.2378 53.1913C48.2378 58.9272 52.6707 67.7473 61.7857 80.1562C71.7415 93.7093 83.1235 99.3365 87.0033 99.3365C90.3037 99.3365 94.0882 94.669 95.3808 92.1713C96.175 90.6373 95.5247 89.7719 95.2998 89.5382C94.5704 89.0439 88.8895 85.1968 86.278 83.4106C85.5669 82.9226 84.8841 82.6765 84.254 82.6765C83.6807 82.6765 83.3038 82.8815 83.1762 82.9636C82.9655 83.1912 82.3861 83.7941 81.3548 84.6718C79.4281 86.3144 76.4965 86.1155 74.4178 84.1509C72.5478 82.3832 63.1026 70.4809 60.406 66.804C59.474 65.5325 59.1073 64.2365 59.316 62.9548C59.6949 60.6313 61.8384 59.1281 62.9891 58.3202L63.2768 58.1171C64.306 57.3727 64.0872 56.0254 63.917 55.5702C63.599 54.7212 59.9198 46.707 59.4538 45.7657C59.0729 44.9946 58.773 44.6727 57.9059 44.6727L57.91 44.6706Z"
                      fill="#404040"
                    />
                  </svg>
                  <div className="font-helixa font-bold text-[32px] text-[#40404]">
                    Inquiry for Futher Information
                  </div>
                </div>
              </div>
              <div className="w-[540px] flex gap-x-[32px]">
                <div className="font-helixa font-bold text-[28px] text-[#404040]">
                  02
                </div>
                <div className="flex w-full justify-between items-center gap-x-[32px]">
                  <svg
                    width="144"
                    height="144"
                    viewBox="0 0 144 144"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="144" height="144" rx="36" fill="#EEE7D9" />
                    <path
                      d="M88.1969 87.8391C87.7195 87.8391 87.2617 88.0287 86.9241 88.3663C86.5865 88.7038 86.3969 89.1617 86.3969 89.6391V95.0391H50.3969V51.8391H57.5969V53.6391C57.5969 54.1165 57.7865 54.5743 58.1241 54.9119C58.4616 55.2494 58.9195 55.4391 59.3969 55.4391H77.3969C77.8743 55.4391 78.3321 55.2494 78.6697 54.9119C79.0072 54.5743 79.1969 54.1165 79.1969 53.6391V51.8391H86.3969V53.6391C86.3969 54.1165 86.5865 54.5743 86.9241 54.9119C87.2617 55.2494 87.7195 55.4391 88.1969 55.4391C88.6743 55.4391 89.1321 55.2494 89.4697 54.9119C89.8072 54.5743 89.9969 54.1165 89.9969 53.6391V50.0391C89.9969 49.5617 89.8072 49.1038 89.4697 48.7663C89.1321 48.4287 88.6743 48.2391 88.1969 48.2391H79.1969V46.4391C79.1969 45.0069 78.628 43.6334 77.6153 42.6207C76.6026 41.608 75.229 41.0391 73.7969 41.0391H62.9969C61.5647 41.0391 60.1912 41.608 59.1785 42.6207C58.1658 43.6334 57.5969 45.0069 57.5969 46.4391V48.2391H48.5969C48.1195 48.2391 47.6616 48.4287 47.3241 48.7663C46.9865 49.1038 46.7969 49.5617 46.7969 50.0391V96.8391C46.7969 97.3165 46.9865 97.7743 47.3241 98.1119C47.6616 98.4494 48.1195 98.6391 48.5969 98.6391H88.1969C88.6743 98.6391 89.1321 98.4494 89.4697 98.1119C89.8072 97.7743 89.9969 97.3165 89.9969 96.8391V89.6391C89.9969 89.1617 89.8072 88.7038 89.4697 88.3663C89.1321 88.0287 88.6743 87.8391 88.1969 87.8391ZM61.1969 46.4391C61.1969 45.9617 61.3865 45.5038 61.7241 45.1663C62.0616 44.8287 62.5195 44.6391 62.9969 44.6391H73.7969C74.2743 44.6391 74.7321 44.8287 75.0697 45.1663C75.4072 45.5038 75.5969 45.9617 75.5969 46.4391V51.8391H61.1969V46.4391ZM103.871 63.1647L96.6713 55.9647C96.5041 55.797 96.3054 55.664 96.0868 55.5733C95.8681 55.4826 95.6336 55.4358 95.3969 55.4358C95.1601 55.4358 94.9257 55.4826 94.707 55.5733C94.4883 55.664 94.2897 55.797 94.1225 55.9647L72.5225 77.5647C72.3554 77.7321 72.223 77.9309 72.1328 78.1495C72.0427 78.3682 71.9965 78.6025 71.9969 78.8391V86.0391C71.9969 86.5165 72.1865 86.9743 72.5241 87.3119C72.8616 87.6494 73.3195 87.8391 73.7969 87.8391H80.9969C81.2334 87.8395 81.4677 87.7933 81.6864 87.7031C81.9051 87.6129 82.1038 87.4805 82.2713 87.3135L103.871 65.7135C104.039 65.5463 104.172 65.3476 104.263 65.1289C104.353 64.9103 104.4 64.6758 104.4 64.4391C104.4 64.2023 104.353 63.9679 104.263 63.7492C104.172 63.5305 104.039 63.3319 103.871 63.1647ZM75.5969 84.2391V79.5843L95.3969 59.7843L100.052 64.4391L80.2517 84.2391H75.5969ZM68.3969 86.0391C68.3969 86.5165 68.2072 86.9743 67.8697 87.3119C67.5321 87.6494 67.0743 87.8391 66.5969 87.8391H59.3969C58.9195 87.8391 58.4616 87.6494 58.1241 87.3119C57.7865 86.9743 57.5969 86.5165 57.5969 86.0391C57.5969 85.5617 57.7865 85.1038 58.1241 84.7663C58.4616 84.4287 58.9195 84.2391 59.3969 84.2391H66.5969C67.0743 84.2391 67.5321 84.4287 67.8697 84.7663C68.2072 85.1038 68.3969 85.5617 68.3969 86.0391ZM68.3969 75.2391C68.3969 75.7164 68.2072 76.1743 67.8697 76.5119C67.5321 76.8494 67.0743 77.0391 66.5969 77.0391H59.3969C58.9195 77.0391 58.4616 76.8494 58.1241 76.5119C57.7865 76.1743 57.5969 75.7164 57.5969 75.2391C57.5969 74.7617 57.7865 74.3038 58.1241 73.9663C58.4616 73.6287 58.9195 73.4391 59.3969 73.4391H66.5969C67.0743 73.4391 67.5321 73.6287 67.8697 73.9663C68.2072 74.3038 68.3969 74.7617 68.3969 75.2391ZM77.3969 66.2391H59.3969C58.9195 66.2391 58.4616 66.0494 58.1241 65.7119C57.7865 65.3743 57.5969 64.9165 57.5969 64.4391C57.5969 63.9617 57.7865 63.5038 58.1241 63.1663C58.4616 62.8287 58.9195 62.6391 59.3969 62.6391H77.3969C77.8743 62.6391 78.3321 62.8287 78.6697 63.1663C79.0072 63.5038 79.1969 63.9617 79.1969 64.4391C79.1969 64.9165 79.0072 65.3743 78.6697 65.7119C78.3321 66.0494 77.8743 66.2391 77.3969 66.2391Z"
                      fill="#404040"
                    />
                  </svg>

                  <div className="font-helixa font-bold text-[32px] text-[#40404]">
                    Registration and Payment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="max-sm:block hidden">
        <Section7Mobile />
      </div> */}
    </div>
  );
};

export default Section7;
