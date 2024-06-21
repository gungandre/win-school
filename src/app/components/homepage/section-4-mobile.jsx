import { Swiper, SwiperSlide } from "swiper/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import gsap from "gsap";
import { useRef } from "react";

const Section4mobile = () => {
  const container = useRef();

  useGSAP(() => {
    const weAreLeading = new SplitText(".we-are-leading", { type: "lines" });

    ScrollTrigger.create({
      trigger: ".section-we-are-leading",

      onEnter: () => {
        gsap.fromTo(
          weAreLeading.lines,
          {
            y: "100%",
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            delay: 0.5,
            ease: "power1.out",
            stagger: 0.1,
            duration: 1,
          }
        );

        gsap.fromTo(
          ".img-we-are-leading",
          {
            scale: 1.5,
          },
          {
            scale: 1,
            delay: 0.5,
            ease: "power1.out",
            duration: 1,
          }
        );
      },
      toggleActions: "play none none none",
      once: true,
    });
  }, []);

  return (
    <div
      className="w-full min-h-dvh  flex bg-white-ivory section section-we-are-leading  py-[120px] flex-col"
      ref={container}
    >
      <div className="w-full h-[60vh] relative flex items-center justify-center">
        <div className="font-helixa text-[11.628vw] leading-[48px] text-sunset-coral text-center we-are-leading flex  flex-col ">
          We Are Leading
          <br />
          Early Childhood education
          <br />
          Center in Bali
        </div>

        <div className="absolute w-[27.907vw] h-[27.907vw]  rounded-[30px] top-0 right-[32px] ">
          <img
            src="/assets/images/home/Rectangle_1.png"
            alt=""
            className="img-we-are-leading"
          />
        </div>
        <div className="absolute w-[27.907vw] h-[27.907vw]  rounded-[30px] bottom-[-8%] left-[32px] ">
          <img
            src="/assets/images/home/Rectangle_2.png"
            alt=""
            className=" img-we-are-leading"
          />
        </div>
      </div>

      <div className="w-full flex flex-nowrap mt-[100px] gap-x-[32px]">
        <Swiper
          spaceBetween={32}
          slidesOffsetBefore={20}
          slidesPerView={1.5}
          slidesOffsetAfter={20}
          className="overflow-visible"
        >
          <SwiperSlide>
            <div className="w-[65.349vw] h-[86.744vw]   bg-almond-cream p-[32px] flex flex-col  rounded-3xl justify-between flex-none">
              <div className="w-full font-helixa text-[5.581vw] leading-[6.744vw] font-bold">
                A Responsive
                <br />
                and Contextual
                <br />
                Curriculum
              </div>
              <div className="w-full font-helixa text-[3.721vw] text-[#5e5e5e]">
                We implement a responsive and contextual curriculum that
                responds to the needs of children and keeps pace with evolving
                times.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[65.349vw] h-[86.744vw]   bg-almond-cream p-[32px] flex flex-col mt-[50px] rounded-3xl justify-between flex-none">
              <div className="w-full font-helixa text-[5.581vw] leading-[6.744vw] font-bold">
                An Integrated
                <br />
                Programme from
                <br />0 - 6 Years Old
              </div>
              <div className="w-full font-helixa text-[3.721vw] text-[#5e5e5e]">
                Our integrated 0-6 program, from nursery to kindergarten, offers
                an educational journey, nurturing social, emotional, and
                cognitive development at every stage.
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[65.349vw] h-[86.744vw]   bg-almond-cream p-[32px] flex flex-col mt-[25px] rounded-3xl justify-between flex-none">
              <div className="w-full font-helixa text-[5.581vw] leading-[6.744vw] font-bold">
                A Responsive
                <br />
                and Contextual
                <br />
                Curriculum
              </div>
              <div className="w-full font-helixa text-[3.721vw] text-[#5e5e5e]">
                We implement a responsive and contextual curriculum that
                responds to the needs of children and keeps pace with evolving
                times.
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full flex justify-center items-center px-[3.721vw] pt-[40px]">
        <a
          href="https://wa.me/6281130910001"
          target="_blank"
          className="w-[146px] h-[40px] px-[3.721vw] border-[1px] border-sunset-coral rounded-[20px] flex justify-between items-center"
        >
          <div className="font-helixa text-[20px] leading-[5.581vw] text-sunset-coral">
            About Us
          </div>
          <div>
            <svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 9L16 9" stroke="#F96D49" />
              <path d="M8 1L16 9L8 17" stroke="#F96D49" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Section4mobile;
