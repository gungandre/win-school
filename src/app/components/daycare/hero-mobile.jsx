import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

const HeroMobile = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  useGSAP(() => {
    const textSplit = new SplitText(".desc-sec-2-mobile", {
      type: "lines",
    });

    gsap.to(".playschool-mobile", {
      transform: "translateY(0)",
      duration: 1,
      ease: "power1.out",
      stagger: 0.1,
    });

    gsap.to(".desc-hero-mobile", {
      transform: "translateY(0)",
      duration: 1,
      ease: "power1.out",
      stagger: 0.1,
    });

    gsap.to(".img-hero-mobile", {
      transform: "translateY(0)",
      ease: "power1.out",
      opacity: 1,
    });

    ScrollTrigger.create({
      trigger: ".we-provide-mobile",
      onEnter: () => {
        gsap.to(".we-provide-mobile", {
          opacity: 1,
          transform: "translateY(0)",
          duration: 1,
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".desc-sec-2-mobile",
      onEnter: () => {
        gsap.from(textSplit.lines, {
          opacity: 0,
          transform: "translateY(100%)",
          duration: 1,
        });
      },
    });
  }, []);
  return (
    <div className="w-full min-h-dvh bg-white-ivory px-[32px]">
      <div className="w-full flex flex-col gap-y-[63px] mt-[158px]">
        <div className="font-seagull text-[58px] leading-[57px] text-sunset-coral playschool-text-mobile flex justify-center">
          <div className="overflow-hidden">
            <div className="translate-y-full playschool-mobile">P</div>
          </div>
          <div className="overflow-hidden">
            <div className="translate-y-full playschool-mobile">L</div>
          </div>
          <div className="overflow-hidden">
            <div className="translate-y-full playschool-mobile">A</div>
          </div>
          <div className="overflow-hidden">
            <div className="translate-y-full playschool-mobile">Y</div>
          </div>

          <div className="overflow-hidden">
            <div className="translate-y-full playschool-mobile">S</div>
          </div>
          <div className="overflow-hidden">
            <div className="translate-y-full playschool-mobile">C</div>
          </div>
          <div className="overflow-hidden">
            <div className="translate-y-full playschool-mobile">H</div>
          </div>
          <div className="overflow-hidden">
            <div className="translate-y-full playschool-mobile">O</div>
          </div>
          <div className="overflow-hidden">
            <div className="translate-y-full playschool-mobile">O</div>
          </div>
          <div className="overflow-hidden">
            <div className="translate-y-full playschool-mobile">L</div>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <div className="flex flex-col gap-y-[32px]">
            <div className="flex flex-col">
              <div className="overflow-hidden">
                <div className="font-helixa text-[16px] text-[#5E5E5E] translate-y-full desc-hero-mobile">
                  For children aged
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="font-helixa text-[24px] text-soft-tosca translate-y-full desc-hero-mobile">
                  20 months - 6 years old
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="overflow-hidden">
                <div className="font-helixa text-[16px] text-[#5E5E5E] translate-y-full desc-hero-mobile">
                  Days and hours
                </div>
              </div>

              <div className="font-helixa text-[24px] text-soft-tosca ">
                <div className="overflow-hidden">
                  <div className="translate-y-full desc-hero-mobile">
                    Available from
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="translate-y-full desc-hero-mobile">
                    Monday - Friday
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[280px]  rounded-[25px] overflow-hidden my-[120px] translate-y-[50%] opacity-0 img-hero-mobile">
        <img
          src="/assets/images/playschool/image-hero.png"
          className="w-full h-full object-cover object-top"
          alt=""
        />
      </div>

      <div className="flex flex-col w-full gap-y-[60px] ">
        <div className="text-center font-helixa text-[48px] leading-[50px]  tracking-[-3%] text-sunset-coral">
          <div className="overflow-hidden ">
            <div className="we-provide-mobile translate-y-full">
              {" "}
              We Provide a
            </div>
          </div>
          <div className="overflow-hidden ">
            <div className="we-provide-mobile translate-y-full">Secure and</div>
          </div>
          <div className="overflow-hidden ">
            <div className="we-provide-mobile translate-y-full">Nurturing</div>
          </div>
          <div className="overflow-hidden ">
            <div className="we-provide-mobile translate-y-full">
              {" "}
              Environment
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="max-w-[217px] font-helixa text-[16px] leading-[19px] text-[#5E5E5E] desc-sec-2-mobile">
            Above all, our playschool program aims to instill a lifelong love of
            learning. By creating a positive and enjoyable early educational
            experience, we help children view learning as a rewarding and
            exciting journey.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMobile;
