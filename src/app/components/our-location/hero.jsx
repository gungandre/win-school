import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-svh bg-white-ivory px-15 py-[90px]">
      <div className="w-full flex justify-between items-center">
        <div className="font-seagull text-[102px] text-sunset-coral">
          FIND US HERE
        </div>
        <div className="w-[783px] flex justify-between">
          <div className="">
            <div className="font-helixa text-[32px] text-[#404040]">Email:</div>
            <div className="font-helixa text-[28px] text-[#404040] underline">
              hello@winschool.co.id
            </div>
          </div>
          <div className="">
            <div className="font-helixa text-[32px] text-[#404040]">Phone:</div>
            <div className="font-helixa text-[28px] text-[#404040] underline">
              (+62) 800 1234 6578
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[85%] bg-red-500 overflow-hidden rounded-[50px]">
        <img
          src="/assets/images/maps.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
