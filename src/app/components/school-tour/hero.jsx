import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-dvh bg-white-ivory">
      <div className="w-full h-full flex justify-center items-center">
        <div className="font-seagull text-[321px] leading-[283px] text-sunset-coral ">
          <div className="flex justify-center">
            <div>SCHOOL</div>
          </div>

          <div className="flex justify-center items-center w-full gap-x-5 item ">
            <div>TOUR</div>
            <div className="h-[231px] w-[573px] rounded-[50px] bg-soft-tosca text-white-ivory  relative">
              <div className="font-helixa font-bold text-[28px] leading-[35px] w-[432px] absolute top-[12%] left-[7%]">
                Discover the joyful, nurturing, and safe environment we provide
                for your child’s early education.
              </div>
              <div className="w-[76px] h-[76px] rounded-full bg-dark-tosca absolute right-[5%] bottom-[7%] flex justify-center items-center">
                <svg
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9985 0.857867L14.9985 29.1421M14.9985 29.1421L29.1406 15M14.9985 29.1421L0.856355 15"
                    stroke="#FFFBF3"
                    stroke-width="2"
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

export default Hero;
