const Section2 = () => {
  return (
    <div className="w-full min-h-dvh bg-white-ivory  px-15 pt-[160px] pb-[180px]">
      <div className="w-full flex justify-center ">
        <div className="text-center font-helixa  text-[6.667vw] text-sunset-coral leading-[6.667vw]">
          <div>We Divide it Into Six</div>
          <div>Curriculum Areas</div>
        </div>
      </div>
      <div className="w-full flex justify-between flex-wrap gap-[32px] mt-[264px]  ">
        <div className="group">
          <div className="w-[567px] h-[402px] bg-[#EEE7D9] group-hover:bg-soft-tosca duration-500 transition-all rounded-[50px] relative">
            <div className="max-w-[440px] font-helixa text-[48px] leading-[55px] text-[#404040] p-[60px] font-bold group-hover:text-white-ivory duration-500 transition-all">
              Communication, Language & Literacy
            </div>
            <div className="absolute w-[76px] h-[76px] group-hover:bg-white-ivory rounded-full bg-sunset-coral right-[5%] bottom-[5%] text-[28px] flex justify-center items-center font-helixa text-white-ivory font-bold group-hover:text-sunset-coral duration-500 transition-all">
              01
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
