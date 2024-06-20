import { Swiper, SwiperSlide } from "swiper/react";

const Section4mobile = () => {
  return (
    <div className="w-full min-h-dvh  flex bg-white-ivory section section-we-are-leading  py-[120px] flex-col">
      <div className="w-full h-[60vh] relative flex items-center justify-center">
        <div className="font-helixa text-[50px] leading-[48px] text-sunset-coral text-center we-are-leading flex  flex-col ">
          We are leading
          <br />
          early childhood education
          <br />
          center in Bali
        </div>

        <div className="absolute w-[120px] h-[120px]  rounded-[30px] top-0 right-[32px] ">
          <img
            src="/assets/images/home/Rectangle_1.png"
            alt=""
            className="img-we-are-leading"
          />
        </div>
        <div className="absolute w-[120px] h-[120px]  rounded-[30px] bottom-[-8%] left-[32px] ">
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
            <div className="w-[281px] h-[373px]   bg-almond-cream p-[32px] flex flex-col  rounded-3xl justify-between flex-none">
              <div className="w-full font-helixa text-[24px] leading-[29px] font-bold">
                A Responsive
                <br />
                and Contextual
                <br />
                Curriculum
              </div>
              <div className="w-full font-helixa text-[16px] text-[#5e5e5e]">
                We implement a responsive and contextual curriculum that
                responds to the needs of children and keeps pace with evolving
                times.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[281px] h-[373px]   bg-almond-cream p-[32px] flex flex-col mt-[50px] rounded-3xl justify-between flex-none">
              <div className="w-full font-helixa text-[24px] leading-[29px] font-bold">
                An Integrated
                <br />
                Programme from
                <br />0 - 6 Years Old
              </div>
              <div className="w-full font-helixa text-[16px] text-[#5e5e5e]">
                Our integrated 0-6 program, from nursery to kindergarten, offers
                an educational journey, nurturing social, emotional, and
                cognitive development at every stage.
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[281px] h-[373px]   bg-almond-cream p-[32px] flex flex-col mt-[25px] rounded-3xl justify-between flex-none">
              <div className="w-full font-helixa text-[24px] leading-[29px] font-bold">
                A Responsive
                <br />
                and Contextual
                <br />
                Curriculum
              </div>
              <div className="w-full font-helixa text-[16px] text-[#5e5e5e]">
                We implement a responsive and contextual curriculum that
                responds to the needs of children and keeps pace with evolving
                times.
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Section4mobile;
