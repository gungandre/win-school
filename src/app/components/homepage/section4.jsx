import Button from "../button/Button";
import Image from "next/image";
const Section4 = () => {
  return (
    <section className="w-full min-h-dvh px-[142px] py-[134px] flex bg-white-ivory section section-we-are-leading">
      <div className="w-full h-full py-[108px]">
        <div className="w-auto h-auto relative">
          <div className="overflow-hidden w-[244px] h-[244px] absolute bottom-[-21%] rounded-[30px] z-10">
            <Image
              src="/assets/images/home/Rectangle_2.png"
              alt="Image 1"
              className=" img-we-are-leading"
              width={244}
              height={244}
            />
          </div>
          <div className="font-helixia text-[6.667vw] leading-[6.771vw] text-sunset-coral text-center">
            <div className="overflow-hidden w-[244px] h-[244px] absolute right-0 top-[-25%] rounded-[30px]">
              <Image
                src="/assets/images/home/Rectangle_1.png"
                alt="Image 2"
                className=" img-we-are-leading"
                width={244}
                height={244}
              />
            </div>
            <div className="we-are-leading">
              We are leading
              <br />
              early childhood education
              <br />
              center in Bali
            </div>
          </div>
        </div>

        <div className="w-full flex flex-nowrap gap-x-8 mt-[250px] translate-x-[95%] section-the-biggest">
          <div className="w-[560px] h-[526px]  bg-almond-cream p-15 flex flex-col  rounded-3xl justify-between">
            <div className="w-full font-helixa text-[48px] leading-[55px] font-bold">
              The Biggest
              <br />
              Early Childhood
              <br />
              Education Centre in Bali
            </div>
            <div className="w-full font-helixa text-[20px] text-[#5e5e5e]">
              As Bali's largest early childhood education center, our 30-are
              school offers comprehensive programs in a safe and specious
              environment for children to grow and explore
            </div>
          </div>
          <div className="w-[560px] h-[526px] translate-y-[100px] bg-almond-cream p-15 flex flex-col  rounded-3xl justify-between">
            <div className="w-full font-helixa text-[48px] leading-[55px] font-bold">
              An Integrated
              <br />
              Programme from
              <br />0 - 6 Years Old
            </div>
            <div className="w-full font-helixa text-[20px] text-[#5e5e5e]">
              Our integrated 0-6 program, from nursery to kindergarten, offers
              an educational journey, nurturing social, emotional, and cognitive
              development at every stage.
            </div>
          </div>
          <div className="w-[560px] h-[526px]  translate-y-[50px] bg-almond-cream p-15 flex flex-col  rounded-3xl justify-between">
            <div className="w-full font-helixa text-[48px] leading-[55px] font-bold">
              A Responsive
              <br />
              and Contextual
              <br />
              Curriculum
            </div>
            <div className="w-full font-helixa text-[20px] text-[#5e5e5e]">
              We implement a responsive and contextual curriculum that responds
              to the needs of children and keeps pace with evolving times.
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-[176px] button-section-we-are-leading">
          <Button
            className={""}
            name={"About Us"}
            arrow={"right"}
            color={"#F96D49"}
            hoverColor={"#F96D49"}
            hoverType={1}
            textHover={"#FFFBF3"}
          />
        </div>
      </div>
    </section>
  );
};

export default Section4;
