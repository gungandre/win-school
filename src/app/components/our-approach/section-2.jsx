import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const datas = [
  {
    title: "Communication, Language & Literacy",
  },
  {
    title: "Mathematics",
  },
  {
    title: "Physical Development",
  },
  {
    title: "Creative Expression",
  },
  {
    title: "Personal, Social & Emotional Development",
  },
  {
    title: "Understanding The World",
  },
];

const Section2 = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".title-section-2",
      onEnter: () => {
        gsap.to(".title-section-2", {
          transform: "translateY(0)",
          ease: "power1.out",
          duration: 1,
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".card-section-2",
      onEnter: () => {
        gsap.from(".card-section-2", {
          transform: "translateY(100%)",
          opacity: 0,
          ease: "power1.out",
          duration: 1,
          stagger: 0.1,
        });
      },
    });
  }, []);

  return (
    <div className="w-full min-h-svh bg-white-ivory  px-15 pt-[160px] pb-[180px] section">
      <div className="w-full flex justify-center ">
        <div className="text-center font-helixa  text-[6.667vw] text-sunset-coral leading-[6.667vw]">
          <div className="overflow-hidden">
            <div className="translate-y-full title-section-2">
              We Divide it Into Six
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="translate-y-full title-section-2">
              Curriculum Areas
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between flex-wrap gap-[32px] mt-[264px]  ">
        {datas?.map((data, index) => (
          <div className="group card-section-2">
            <div className="w-[567px] h-[402px] bg-[#EEE7D9] group-hover:bg-soft-tosca duration-500 transition-all rounded-[50px] relative">
              <div className="max-w-[440px] font-helixa text-[48px] leading-[55px] text-[#404040] p-[60px] font-bold group-hover:text-white-ivory duration-500 transition-all">
                {data.title}
              </div>
              <div className="absolute w-[76px] h-[76px] group-hover:bg-white-ivory rounded-full bg-sunset-coral right-[5%] bottom-[5%] text-[28px] flex justify-center items-center font-helixa text-white-ivory font-bold group-hover:text-sunset-coral duration-500 transition-all">
                0{index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
