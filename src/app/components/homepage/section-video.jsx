import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import SectionVideoMobile from "./section-video-mobile";

const SectionVideo = ({
  cursorLeave,
  videoRef,
  videoPlayback,
  cursorHover,
}) => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-video",
            start: "top center",
            end: "bottom center",
          },
        })
        .to(".video-container", {
          width: 1200,
          height: 676,

          ease: "power2.out",
          duration: 1,
          onStart: () => {
            if (videoRef.current) {
              videoRef.current.play().catch((error) => {
                // Tangani kesalahan jika autoplay tidak berhasil

                console.error("Autoplay failed:", error);
              });
            }
          },
        });
    },
    { scope: container }
  );

  return (
    <>
      <section
        className="w-full h-dvh   bg-white-ivory section-video relative section max-sm:hidden block"
        ref={container}
      >
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
      <div className="max-sm:block hidden">
        <SectionVideoMobile />
      </div>
    </>
  );
};

export default SectionVideo;
