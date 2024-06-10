import React from "react";

const SectionVideo = ({
  cursorLeave,
  videoRef,
  videoPlayback,
  cursorHover,
}) => {
  return (
    <section className="w-full h-dvh   bg-white-ivory section-video relative section">
      <div className="w-[737px] h-[515px] video-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <video
          muted
          className="rounded-[50px] cursor-none w-full h-full"
          loop={true}
          onMouseEnter={() => cursorHover(null)}
          onMouseLeave={cursorLeave}
          ref={videoRef}
          onClick={videoPlayback}
        >
          <source
            src="/assets/images/home/WIN SCHOOL SLIDE.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </section>
  );
};

export default SectionVideo;
