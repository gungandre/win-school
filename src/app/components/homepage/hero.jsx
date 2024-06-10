const Hero = () => {
  return (
    <section className="h-dvh bg-white-ivory relative section overflow-hidden">
      <h1 className="sr-only">SCHOOL OF FUTURE LEADERS</h1>
      <div className="px-15 sm:pt-32">
        <div className="flex flex-col gap-y-5">
          <div>
            <div
              className="font-seagull text-[102px] text-sunset-coral flex
        "
            >
              <div className="overflow-hidden">
                <div className="school  translate-y-[100%]">S</div>
              </div>
              <div className="overflow-hidden">
                <div className="school translate-y-[100%]">C</div>
              </div>
              <div className="overflow-hidden">
                <div className="school translate-y-[100%]">H</div>
              </div>
              <div className="overflow-hidden">
                <div className="school translate-y-[100%]">O</div>
              </div>
              <div className="overflow-hidden">
                <div className="school translate-y-[100%]">O</div>
              </div>
              <div className="overflow-hidden">
                <div className="school translate-y-[100%]">L</div>
              </div>
              &nbsp;
              <div className="overflow-hidden">
                <div className="school translate-y-[100%]">O</div>
              </div>
              <div className="overflow-hidden">
                <div className="school translate-y-[100%]">F</div>
              </div>
              &nbsp;
              <div className="overflow-hidden">
                <div className="school translate-y-[100%]">F</div>
              </div>
              <div className="overflow-hidden">
                <div className="school translate-y-[100%]">U</div>
              </div>
              <div className="overflow-hidden">
                <div className="school translate-y-[100%]">T</div>
              </div>
              <div className="overflow-hidden">
                <div className="school translate-y-[100%]">U</div>
              </div>
              <div className="overflow-hidden">
                <div className="school translate-y-[100%]">R</div>
              </div>
              <div className="overflow-hidden">
                <div className="school translate-y-[100%]">E</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="font-seagull text-[450px]  text-sunset-coral flex">
            <div className="overflow-hidden">
              <div className="translate-y-[100%] leaders leading-[350px]">
                L
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="translate-y-[100%] leaders leading-[350px]">
                E
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="translate-y-[100%] leaders leading-[350px]">
                A
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="translate-y-[100%] leaders leading-[350px]">
                D
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="translate-y-[100%] leaders leading-[350px]">
                E
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="translate-y-[100%] leaders leading-[350px]">
                R
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="translate-y-[100%] leaders leading-[350px]">
                S
              </div>
            </div>
          </div>
        </div>
        <div className="sm:mt-32 flex justify-center">
          <div className="flex w-[915px] items-center justify-between   ">
            <div className="overflow-hidden">
              <div className=" gap-6 translate-y-[100%] animation-image bg-[#EEE7D9] w-[167px] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[20px]">
                Experience
              </div>
            </div>
            <div className="overflow-hidden">
              <div className=" gap-6 translate-y-[100%] animation-image bg-[#EEE7D9] w-[167px] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[20px]">
                Active
              </div>
            </div>
            <div className="overflow-hidden">
              <div className=" gap-6 translate-y-[100%] animation-image bg-[#EEE7D9] w-[167px] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[20px]">
                Balance
              </div>
            </div>
            <div className="overflow-hidden">
              <div className=" gap-6 translate-y-[100%] animation-image bg-[#EEE7D9] w-[167px] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[20px]">
                Play
              </div>
            </div>
            <div className="overflow-hidden">
              <div className=" gap-6 translate-y-[100%] animation-image bg-[#EEE7D9] w-[167px] h-[47px] rounded-[23.5px] flex justify-center items-center font-helixa text-[20px]">
                Transition
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full flex items-end justify-between">
        <img
          width="730"
          className="ml-4 hero-1 translate-y-[100%]"
          src="/assets/images/home-hero1.png"
          alt="Hero 1"
        />
        <img
          width="730"
          className="mr-4 hero-2 translate-y-[100%]"
          src="/assets/images/home-hero2.png"
          alt="Hero 2"
        />
      </div>
    </section>
  );
};

export default Hero;
