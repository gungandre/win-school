import gsap from "gsap";
import { useEffect } from "react";
import { useContext } from "react";
import { preloaderContext } from "@/app/context/preloaderContext";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import useMediaQuery from "@/app/utils/useMediaQuery";

const Hero = () => {
  const { preloaderComplete } = useContext(preloaderContext);
  const container = useRef(null);
  const containerMobile = useRef(null);
  const isSmall = useMediaQuery("(max-width: 640px)");
  useEffect(() => {
    if (preloaderComplete) {
      gsap.to(".leaders", {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power1.out",
      });

      gsap.to(".school", {
        y: 0,
        duration: 1,
        stagger: 0.03,
        ease: "power1.out",
      });

      gsap.to(".animation-image", {
        transform: "translateY(0)",
        duration: 1,
        stagger: 0.1,
        ease: "power1.out",
      });
      gsap.to([".hero-1", ".hero-2"], {
        transform: "translateY(0)",
        duration: 1,
        ease: "power1.out",
      });
    }
  }, [preloaderComplete]);

  useGSAP(
    () => {
      gsap.to(".school", {
        transform: "translateY(0)",
        duration: 1,
        stagger: 0.1,
        ease: "power1.out",
        onComplete: () => {
          console.log("testing");
        },
      });
      gsap.to(".leaders", {
        transform: "translateY(0)",
        duration: 1,
        stagger: 0.1,
        ease: "power1.out",
      });

      gsap.to(".animation-image", {
        transform: "translateY(0)",
        duration: 1,
        stagger: 0.1,
        ease: "power1.out",
      });

      gsap.to([".hero-1", ".hero-2"], {
        transform: "translateY(0)",
        duration: 1,

        ease: "power1.out",
      });
    },
    { scope: containerMobile, dependencies: [isSmall] }
  );

  return (
    <>
      <section
        className="h-dvh bg-white-ivory relative section overflow-hidden max-sm:hidden block"
        ref={container}
      >
        <h1 className="sr-only">SCHOOL OF FUTURE LEADERS</h1>
        <div className="max-sm:px-0 px-15 sm:pt-32 flex flex-col">
          <div className="flex flex-col gap-y-5">
            <div>
              <div className="font-seagull text-[5.313vw] text-sunset-coral flex">
                <div className="overflow-hidden">
                  <div className="school text-[5.313vw] translate-y-[100%]">
                    S
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="school text-[5.313vw] translate-y-[100%]">
                    C
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="school text-[5.313vw] translate-y-[100%]">
                    H
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="school text-[5.313vw] translate-y-[100%]">
                    O
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="school text-[5.313vw] translate-y-[100%]">
                    O
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="school text-[5.313vw] translate-y-[100%]">
                    L
                  </div>
                </div>
                &nbsp;
                <div className="overflow-hidden">
                  <div className="school text-[5.313vw] translate-y-[100%]">
                    O
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="school text-[5.313vw] translate-y-[100%]">
                    F
                  </div>
                </div>
                &nbsp;
                <div className="overflow-hidden">
                  <div className="school text-[5.313vw] translate-y-[100%]">
                    F
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="school text-[5.313vw] translate-y-[100%]">
                    U
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="school text-[5.313vw] translate-y-[100%]">
                    T
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="school text-[5.313vw] translate-y-[100%]">
                    U
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="school text-[5.313vw] translate-y-[100%]">
                    R
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="school text-[5.313vw] translate-y-[100%]">
                    E
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="font-seagull text-[23.438vw]  text-sunset-coral flex">
              <div className="overflow-hidden">
                <div className="translate-y-[100%] leaders leading-[18.229vw]">
                  L
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-[100%] leaders leading-[18.229vw]">
                  E
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-[100%] leaders leading-[18.229vw]">
                  A
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-[100%] leaders leading-[18.229vw]">
                  D
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-[100%] leaders leading-[18.229vw]">
                  E
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-[100%] leaders leading-[18.229vw]">
                  R
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-[100%] leaders leading-[18.229vw]">
                  S
                </div>
              </div>
            </div>
          </div>
          <div className="sm:mt-32 flex justify-center">
            <div className="flex w-[52%] max-sm:w-full items-center max-sm:flex-wrap max-sm:justify-evenly justify-between   ">
              <div className="overflow-hidden">
                <div className=" gap-6 translate-y-[100%] animation-image bg-[#EEE7D9] w-[167px] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[20px]">
                  Experience
                </div>
              </div>
              <div className="overflow-hidden">
                <div className=" gap-6 translate-y-[100%] animation-image bg-[#EEE7D9] w-[167px] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[20px]">
                  Active
                </div>
              </div>
              <div className="overflow-hidden">
                <div className=" gap-6 translate-y-[100%] animation-image bg-[#EEE7D9] w-[167px] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[20px]">
                  Balance
                </div>
              </div>
              <div className="overflow-hidden">
                <div className=" gap-6 translate-y-[100%] animation-image bg-[#EEE7D9] w-[167px] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[20px]">
                  Play
                </div>
              </div>
              <div className="overflow-hidden">
                <div className=" gap-6 translate-y-[100%] animation-image bg-[#EEE7D9] w-[167px] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[20px]">
                  Transition
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-[100vw] flex items-end justify-between">
          <div className="max-sm:w-[600px] max-w-[730px]">
            <img
              className="ml-4 hero-1 translate-y-[100%] w-full"
              src="/assets/images/home-hero1.png"
              alt="Hero 1"
            />
          </div>
          <div className="max-sm:w-[600px] max-w-[730px]">
            <img
              className="mr-4 hero-2 translate-y-[100%] w-full"
              src="/assets/images/home-hero2.png"
              alt="Hero 2"
            />
          </div>
        </div>
      </section>

      <div
        className="w-full h-dvh max-sm:flex hidden justify-center items-center px-[32px] relative overflow-hidden"
        ref={containerMobile}
      >
        <div className="flex flex-col gap-y-[60px]">
          <div>
            <div className="font-seagull text-[5.581vw] leading-[5.349vw] text-sunset-coral flex ">
              <div className="overflow-hidden">
                <div className="school translate-y-full ">S</div>
              </div>
              <div className="overflow-hidden">
                <div className="school translate-y-full ">C</div>
              </div>
              <div className="overflow-hidden">
                <div className="school translate-y-full ">H</div>
              </div>
              <div className="overflow-hidden">
                <div className="school translate-y-full ">O</div>
              </div>
              <div className="overflow-hidden">
                <div className="school translate-y-full ">O</div>
              </div>
              <div className="overflow-hidden">
                <div className="school translate-y-full ">L</div>
              </div>
              &nbsp;
              <div className="overflow-hidden">
                <div className="school  translate-y-full">O</div>
              </div>
              <div className="overflow-hidden">
                <div className="school translate-y-full ">F</div>
              </div>
              &nbsp;
              <div className="overflow-hidden">
                <div className="school translate-y-full ">F</div>
              </div>
              <div className="overflow-hidden">
                <div className="school  translate-y-full">U</div>
              </div>
              <div className="overflow-hidden">
                <div className="school translate-y-full ">T</div>
              </div>
              <div className="overflow-hidden">
                <div className="school  translate-y-full">U</div>
              </div>
              <div className="overflow-hidden">
                <div className="school translate-y-full ">R</div>
              </div>
              <div className="overflow-hidden">
                <div className="school  translate-y-full">E</div>
              </div>
              {/* SCHOOL OF FUTURE */}
            </div>
            <div className="font-seagull max-sm:text-[21.628vw] leading-[21.628vw] text-sunset-coral flex">
              <div className="overflow-hidden">
                <div className="translate-y-[100%] leaders ">L</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-[100%] leaders ">E</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-[100%] leaders ">A</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-[100%] leaders ">D</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-[100%] leaders ">E</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-[100%] leaders ">R</div>
              </div>
              <div className="overflow-hidden">
                <div className="translate-y-[100%] leaders ">S</div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-evenly flex-wrap gap-[16px]">
            <div className="overflow-hidden">
              <div className=" gap-6  animation-image bg-[#EEE7D9] w-[25.116vw] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[16px] translate-y-full">
                Experience
              </div>
            </div>
            <div className="overflow-hidden">
              <div className=" gap-6  animation-image bg-[#EEE7D9] w-[25.116vw] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[16px] translate-y-full ">
                Active
              </div>
            </div>
            <div className="overflow-hidden">
              <div className=" gap-6  animation-image bg-[#EEE7D9] w-[25.116vw] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[16px] translate-y-full ">
                Balance
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="overflow-hidden">
                <div className=" gap-6  animation-image bg-[#EEE7D9] w-[25.116vw] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[16px] translate-y-full">
                  Play
                </div>
              </div>

              <div className="overflow-hidden">
                <div className=" gap-6  animation-image bg-[#EEE7D9] w-[25.116vw] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[16px] translate-y-full">
                  Transition
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[167px] absolute left-[-7%] bottom-0 translate-y-full hero-1">
          <img
            className="ml-4   w-full"
            src="/assets/images/home-hero1-mobile.png"
            alt="Hero 1"
          />
        </div>
        <div className="w-[250px] absolute right-[-7%] bottom-0 translate-y-full hero-2">
          <img
            className="mr-4   w-full"
            src="/assets/images/home-hero2-mobile.png"
            alt="Hero 2"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
