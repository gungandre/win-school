import Button from "../button/Button";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import useScrollLenis from "../lenis/useScrollLenis";
const ClassModal = ({ openModal, setOpenModal, dataModal }) => {
  const elemenRef = useRef(null);
  const [stopScroll, setStopScroll] = useScrollLenis(false);

  useGSAP(() => {
    if (openModal) {
      if (elemenRef.current) {
        elemenRef.current.style.zIndex = "1000";
      }

      setStopScroll(true);

      gsap.to(elemenRef.current, {
        opacity: 0.5,
        duration: 1,
        ease: "power1.out",
      });
      gsap.to(".modal-container", {
        bottom: 0,
        duration: 1,
        ease: "power1.out",
      });
    } else {
      if (elemenRef.current) {
        elemenRef.current.style.zIndex = "-1";
      }
      setStopScroll(false);
      gsap.to(elemenRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      });
      gsap.to(".modal-container", {
        bottom: "-100%",
        duration: 1,
        ease: "power1.out",
      });
    }
  }, [openModal]);

  return (
    <>
      <div
        className="bg-black opacity-0 z-[-2] fixed w-full h-dvh bottom-0  "
        ref={elemenRef}
        onClick={() => setOpenModal(false)}
      ></div>
      <div className="w-full h-[90%] bg-white-ivory fixed bottom-[-100%] z-[1000] max-sm:rounded-tl-[25px] max-sm:rounded-tr-[25px] rounded-tl-[50px] rounded-tr-[50px] flex modal-container">
        <div className="relative w-full h-full max-sm:px-[32px] px-15 py-[50px] flex justify-center items-end ">
          <button
            className="absolute top-0 right-[10%] bg-soft-tosca text-white-ivory max-sm:w-[122px] max-sm:h-[40px] w-[210px] h-[76px] rounded-[38px] flex items-center max-sm:pl-[16px] pl-[32px] -translate-y-[50%]"
            onClick={() => setOpenModal(false)}
          >
            <div className="font-helixa font-bold text-white-ivory max-sm:text-[20px] text-[28px]">
              Close
            </div>
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute max-sm:w-[32px] max-sm:h-[32px] right-[4%]"
            >
              <circle cx="31" cy="31" r="31" fill="#FFFBF3" />
              <path d="M21 41L41 21" stroke="#F96D49" stroke-width="2" />
              <path d="M41 41L21 21" stroke="#F96D49" stroke-width="2" />
            </svg>
          </button>
          <div
            className="max-sm:w-full max-sm:h-full max-sm:gap-y-[20px] max-sm:flex-col w-[1598px] h-[745px]  flex  justify-between overflow-x-hidden "
            data-lenis-prevent="true"
          >
            <div className="h-full flex flex-col max-sm:gap-y-[20px] justify-between">
              <div className=" flex flex-col max-sm:gap-2 gap-4">
                <div className="font-seagull max-sm:text-[24px] text-[3.333vw] leading-[3.333vw] text-sunset-coral">
                  {dataModal.className}
                </div>
                <div className="font-helixa max-sm:text-[16px] text-[28px] text-[#5E5E5E]">
                  {dataModal.age}
                </div>
              </div>
              <div className="max-sm:w-full max-sm:h-[280px] w-[901px] h-[596px] rounded-[50px] overflow-hidden">
                <img
                  src={`${dataModal.image}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="max-sm:w-full w-[588px] h-full flex flex-col max-sm:gap-y-[20px] justify-between">
              <div className="max-sm:text-[16px] text-wrap max-sm:order-2">
                {dataModal.desc}
              </div>

              <div className="grid max-sm:grid-cols-2 grid-cols-[1.1fr_0.9fr] max-sm:gap-[20px] gap-[32px]">
                <div className="">
                  <div className="flex flex-col">
                    <div className="font-helixa font-bold max-sm:text-[16px] max-sm:leading-[20px] text-[20px] text-[#404040]">
                      Time
                    </div>
                    <div className="text-helixa text-[28px] max-sm:text-[16px] max-sm:leading-[20px] leading-[35px] text-sunset-coral">
                      09:00 - 10:30 AM
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col">
                    <div className="font-helixa font-bold max-sm:text-[16px] max-sm:leading-[20px] text-[20px] text-[#404040]">
                      Duration
                    </div>
                    <div className="text-helixa text-[28px] max-sm:text-[16px] max-sm:leading-[20px] leading-[35px] text-sunset-coral">
                      90 Minutes
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col">
                    <div className="font-helixa font-bold max-sm:text-[16px] max-sm:leading-[20px] text-[20px] text-[#404040]">
                      Days
                    </div>
                    <div className="text-helixa text-[28px] max-sm:text-[16px] max-sm:leading-[20px] leading-[35px] text-sunset-coral">
                      2 Times a Week (Monday & Wednesday)
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col">
                    <div className="font-helixa max-sm:text-[16px] max-sm:leading-[20px] font-bold text-[20px] text-[#404040]">
                      Number of Participants
                    </div>
                    <div className="text-helixa max-sm:text-[16px] max-sm:leading-[20px] text-[28px] leading-[35px] text-sunset-coral">
                      Maximum 8 Kids and Parents
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col">
                    <div className="font-helixa max-sm:text-[16px] max-sm:leading-[20px] font-bold text-[20px] text-[#404040]">
                      Activities
                    </div>
                    <div className="text-helixa max-sm:text-[16px] max-sm:leading-[20px] text-[28px] leading-[35px] text-sunset-coral">
                      Sensory Play, Arts & Craft
                    </div>
                  </div>
                </div>
                <div className="max-sm:block hidden">
                  <div className="flex flex-col">
                    <div className="font-helixa max-sm:text-[16px] max-sm:leading-[20px] font-bold text-[20px] text-[#404040]">
                      Activities
                    </div>
                    <div className="text-helixa max-sm:text-[16px] max-sm:leading-[20px] text-[28px] leading-[35px] text-sunset-coral">
                      {`${dataModal.seat} Seats Left`}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-full justify-between justify-center max-sm:order-3">
                <div className="flex flex-col max-sm:hidden block">
                  <div className="font-helixa font-bold max-sm:text-[16px] text-[20px] text-[#404040]">
                    Limited Seats
                  </div>
                  <div className="text-helixa text-[28px] max-sm:text-[16px] leading-[35px] text-sunset-coral">
                    {`${dataModal.seat} Seats Left`}
                  </div>
                </div>
                {dataModal.seat > 0 && (
                  <div className="h-full flex  items-center">
                    <div className={`group `}>
                      <a href="https://wa.me/6281130910001" target="_blank">
                        <div className="max-sm:w-full w-auto px-[32px] border-[#F96D49] border-[2px] rounded-[22px] h-auto font-helixa text-[28px]  overflow-hidden relative group">
                          <div className="w-[300px] h-[300px] bg-sunset-coral rounded-full absolute left-1/2 top-1/2 translate-y-full -translate-x-[50%] group-hover:translate-y-[-50%]  duration-1000 transition-all"></div>
                          <div
                            className="group-hover:text-white-ivory duration-10
                          00 transition-all relative z-10 text-sunset-coral"
                          >
                            Register Now
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassModal;
