import React from "react";

const SectionVideoMobile = () => {
  return (
    <div className="w-full  flex justify-center items-center px-[32px]">
      <div className="max-w-[366px] h-[206px]  ">
        <video
          autoPlay
          muted
          className="rounded-[25px]  w-full h-full"
          loop={true}
        >
          <source
            src="/assets/images/home/WIN SCHOOL SLIDE.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </div>
  );
};

export default SectionVideoMobile;
