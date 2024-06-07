import Button from "../button/Button";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const ClassModal = ({ openModal, setOpenModal }) => {
  const elemenRef = useRef(null);

  useGSAP(() => {
    if (openModal) {
      if (elemenRef.current) {
        elemenRef.current.style.zIndex = "1000";
      }

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
      <div className="w-full h-[90%] bg-white-ivory fixed bottom-[-100%] z-[1000]  rounded-tl-[50px] rounded-tr-[50px] flex modal-container">
        <div className="relative w-full h-full px-15 py-[30px] flex justify-center items-end">
          <button
            className="absolute top-0 right-[10%] bg-soft-tosca text-white-ivory w-[210px] h-[76px] rounded-[38px] flex items-center pl-[32px] -translate-y-[50%]"
            onClick={() => setOpenModal(false)}
          >
            <div className="font-helixa font-bold text-white-ivory text-[28px]">
              Close
            </div>
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-[4%]"
            >
              <circle cx="31" cy="31" r="31" fill="#FFFBF3" />
              <path d="M21 41L41 21" stroke="#F96D49" stroke-width="2" />
              <path d="M41 41L21 21" stroke="#F96D49" stroke-width="2" />
            </svg>
          </button>
          <div className="w-[1598px] h-[755px]  flex justify-between">
            <div className="h-full flex flex-col justify-between">
              <div className="">
                <div className="font-seagull text-[3.333vw] text-sunset-coral">
                  Stimulation Class
                </div>
                <div className="font-helixa text-[28px] text-[#5E5E5E]">
                  20 - 30 months old
                </div>
              </div>
              <div className="w-[901px] h-[596px] rounded-[50px] overflow-hidden">
                <img
                  src="/assets/images/modal/modal.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-[588px] h-full flex flex-col justify-between">
              <div>
                Unlock Your Toddler's Potential with Our Stimulating Classes! Is
                your little one ready to explore, learn, and grow? Join us for
                our exciting stimulation classes designed specifically for
                toddlers aged 20-30 months old! Don't miss out on this enriching
                experience for your little one! Sign up now and watch them
                blossom with us.
              </div>

              <div className="grid grid-cols-[1.1fr_0.9fr] gap-[32px]">
                <div className="">
                  <div className="flex flex-col">
                    <div className="font-helixa font-bold text-[20px] text-[#404040]">
                      Time
                    </div>
                    <div className="text-helixa text-[28px] leading-[35px] text-sunset-coral">
                      09:00 - 10:30 AM
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col">
                    <div className="font-helixa font-bold text-[20px] text-[#404040]">
                      Duration
                    </div>
                    <div className="text-helixa text-[28px] leading-[35px] text-sunset-coral">
                      90 Minutes
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col">
                    <div className="font-helixa font-bold text-[20px] text-[#404040]">
                      Days
                    </div>
                    <div className="text-helixa text-[28px] leading-[35px] text-sunset-coral">
                      2 Times a Week (Monday & Wednesday)
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col">
                    <div className="font-helixa font-bold text-[20px] text-[#404040]">
                      Number of Participants
                    </div>
                    <div className="text-helixa text-[28px] leading-[35px] text-sunset-coral">
                      Maximum 8 Kids and Parents
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col">
                    <div className="font-helixa font-bold text-[20px] text-[#404040]">
                      Activities
                    </div>
                    <div className="text-helixa text-[28px] leading-[35px] text-sunset-coral">
                      Sensory Play, Arts & Craft
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-full justify-between justify-center">
                <div className="flex flex-col">
                  <div className="font-helixa font-bold text-[20px] text-[#404040]">
                    Limited Seats
                  </div>
                  <div className="text-helixa text-[28px] leading-[35px] text-sunset-coral">
                    6 Seats Left
                  </div>
                </div>

                <div>
                  {/* <Button
                    name={"Register Now"}
                    arrow={null}
                    color={"#F96D49"}
                    fontSize={28}
                    hoverColor={"#F96D49"}
                    hoverType={2}
                    textHover={"#FFFBF3"}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassModal;
