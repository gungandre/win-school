"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ClassModal from "./class-modal";
import Link from "next/link";
import useMediaQuery from "@/app/utils/useMediaQuery";

const datas = [
  {
    className: "Stimulation Class",
    age: "20 - 30 months old",
    time: "09.00 - 10.30 AM",
    days: "Monday & Wednesday",
    days_detail: `2 Times a Week (Monday & Wednesday)`,
    activities: "Sensory Play, Arts & Craft",
    duration: "90 Minutes",
    number_of_participants: "Maximum 8 Kids and Parents",
    seat: 10,
    thumbnail:
      "assets/images/playschool/class-image/thumbnail_Stimulation Class.png",
    image: "assets/images/playschool/class-image/stimulation_class.png",
    desc: `Unlock Your Toddler's Potential with Our Stimulating Classes! Is your
little one ready to explore, learn, and  grow? Join us for our exciting
stimulation classes designed specifically for toddlers aged 20-30
months old! Don't miss out on this enriching experience for your little
one! Sign up now and watch them blossom with us.`,
  },
  {
    className: "Playful Music",
    age: "2 - 3 years old",
    time: "09:00 - 10:30 AM",
    days: "Tuesday & Thursday",
    days_detail: `2 Times a Week (Tuesday & Thursday)`,
    activities: "Music, Literacy, Arts & Craft",
    duration: "90 Minutes",
    number_of_participants: "Maximum 8 Kids",
    thumbnail:
      "assets/images/playschool/class-image/thumbnail_Playful Music.png",
    seat: 10,
    image: "assets/images/playschool/class-image/Playful Music.png",
    desc: `Let the Magic Begin with Playful Music & Craft Class! Join us for a delightful journey of music, storytelling, and creativity in our Playful Music & Craft Class! Perfect for children who love to sing, listen to stories, and get crafty! Enroll your child in a world of musical adventure, storytelling magic, and crafty fun! Limited spots available reserve yours today!`,
  },
  {
    className: "Crafty Kiddos",
    age: "3 - 4 years old",
    time: "09:00 - 11:00 AM",
    days: "Monday & Wednesday",
    days_detail: `2 Times a Week (Monday & Wednesday)`,
    activities: "Arts & Craft, Literacy",
    duration: "120 Minutes",
    number_of_participants: "Maximum 10 Kids",
    seat: 10,
    thumbnail:
      "assets/images/playschool/class-image/thumbnail_Crafty Kiddos.png",
    image: "assets/images/playschool/class-image/Crafty Kiddos.png",
    desc: `Spark Creativity with Crafty Kiddos Club! Calling all young artists and craft enthusiasts! Dive into a world of imagination and fun with Crafty Kiddos Club - where creativity knows no bounds! Unlock the magic of creativity with Crafty Kiddos Club today! Sign up now and let the crafting adventures begin!`,
  },
  {
    className: "Joyful Green Journey",
    age: "3 - 5 years old",
    time: "09:00 - 11:00 AM",
    days: "Tuesday & Thursday",
    days_detail: `2 Times a Week (Tuesday & Thursday)`,
    activities: "Understanding the World, Creative Expression",
    duration: "120 Minutes",
    number_of_participants: "Maximum 8 Kids",
    seat: 10,
    thumbnail:
      "assets/images/playschool/class-image/thumbnail_Joyful Green Journey.png",
    image: "assets/images/playschool/class-image/Joyful Green Journey.png",
    desc: `Dive into a Joyful Green Journey! Join us for an eco-friendly adventure filled with exciting recycle activities in our Joyful Green Journey program! Let's inspire our little ones to become eco-warriors while having fun! Embark on a green journey of discovery, creativity, and environmental stewardship with us! Together, we can make a difference!`,
  },
  {
    className: "WIN Little Explorer",
    age: "3 - 5 years old",
    time: "09:00 - 11:00 AM",
    days: "Monday & Wednesday",
    days_detail: `2 Times a Week (Monday & Wednesday)`,
    activities: "Physical Development, Understanding the World, Literacy",
    duration: "120 Minutes",
    number_of_participants: "Maximum 8 Kids",
    seat: 10,
    thumbnail:
      "assets/images/playschool/class-image/thumbnail_WIN Little Explorer.png",
    image: "assets/images/playschool/class-image/WIN Little Explorer.png",
    desc: `Adventure Awaits Your Little Explorer! Let your child's curiosity lead the way as they uncover new worlds through interactive games and exploration. Don't miss out on the adventure of a lifetime! Sign up your little explorer today and watch them thrive!`,
  },

  {
    className: "World Adventurers",
    age: "3 - 5 years old",
    time: "09:00 - 11:00 AM",
    days: "Tuesday & Thursday",
    days_detail: `2 Times a Week (Tuesday & Thursday)`,
    activities: "Understanding the World, Literacy, Critical Thinking, Crafts",
    duration: "120 Minutes",
    seat: 10,
    number_of_participants: "Maximum 8 Kids",
    thumbnail:
      "assets/images/playschool/class-image/thumbnail_World Adventurers.png",
    image: "assets/images/playschool/class-image/World Adventurers.png",
    desc: `Embark on a captivating journey with World Adventures, where children and their families explore diverse cultures, enhance literacy skills, and unleash creativity through exciting craft projects. Our immersive activities offer a unique blend of storytelling, cultural exploration, and hands-on crafts, allowing young explorers to understand and appreciate global traditions while developing early literacy and artistic expression.`,
  },
  {
    className: "Creative Connection",
    age: "3 - 5 years old",
    time: "09:00 - 10:30 AM",
    days: "Friday",
    days_detail: `1 Times a Week (Every Friday)`,
    activities:
      "Understanding the World, Literacy, Critical Thinking, Crafts Team Building, Creative Expression",
    duration: "90 Minutes",
    number_of_participants: "Maximum 10 Kids with Parents",
    seat: 10,
    thumbnail:
      "assets/images/playschool/class-image/thumbnail_Creative Connection.png",
    image: "assets/images/playschool/class-image/Creative Connection.png",
    desc: `Creative Connection Classes: Where Families Flourish! Welcome to our Creative Connection Classes—a unique space where parents and kids become a dynamic team! these engaging sessions, you’ll collaborate on exciting projects, from art to science experiments. Strengthen your family ties as you create side by side. After each session, join our warm community.`,
  },
];

const Section3 = ({ setOnHover, tlComplete }) => {
  gsap.registerPlugin(ScrollTrigger);
  const elemenRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const [dataClass, setDataClass] = useState(null);
  const isSmall = useMediaQuery("(max-width: 640px)");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const isFetching = await fetch(
          "http://localhost:1337/api/playschool?populate=*"
        );
        const response = await isFetching.json();

        response.data.attributes.Class_Seat.forEach((data) => {
          datas.forEach((item) => {
            console.log(data.ClassName, item.className);
            if (item.className === data.ClassName) {
              item.seat = data.Seat;
            }
          });
        });

        setDataClass(datas);
      } catch (error) {
        console.log("error mengambil data dari API:", error);
      }
    };
    fetchData();
  }, []);

  useGSAP(
    () => {
      let getRatio = (el) =>
        window.innerHeight / (window.innerHeight + el?.offsetHeight);

      ScrollTrigger.create({
        trigger: elemenRef.current,
        start: "top bottom",
        end: "bottom top",

        onEnter: () => {
          gsap.to(".class-card", {
            opacity: 1,
            transform: "translateY(0)",
            ease: "power1.out",
            duration: 1,
            stagger: 0.2,
          });
        },
      });

      // datas.forEach((data, index) => {
      //   gsap.to(`.playschool-img-thumbail-${index}`, {
      //     objectPosition: `50% ${
      //       -window.innerHeight *
      //       (1 -
      //         getRatio(
      //           document.querySelector(`.playschool-img-thumbail-${index}`)
      //         ))
      //     }px`,
      //     ease: "power1.out",
      //     scrollTrigger: {
      //       trigger: `.playschool-img-thumbail-${index}`,
      //       start: "top bottom+=50%",
      //       end: "bottom top-=30%",

      //       scrub: true,
      //       invalidateOnRefresh: true, // to make it responsive
      //     },
      //   });
      // });
    },
    { scope: elemenRef, dependencies: [elemenRef] }
  );

  const modalClick = (data) => {
    console.log(data);
    if (data === null) return;
    setOpenModal(!openModal);
    setDataModal(data);
  };

  return (
    <>
      <ClassModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        dataModal={dataModal}
      />
      <div
        className="min-h-dvh w-full max-sm:px-[32px] px-15  bg-white-ivory section"
        ref={elemenRef}
      >
        <div className="w-full grid max-sm:grid-cols-1 max-sm:gap-y-[80px] grid-cols-2 gap-5">
          {datas &&
            datas.map((data, index) => (
              <div
                className="group class-card translate-y-full opacity-0 cursor-none"
                onClick={() => modalClick(data)}
                onMouseEnter={() => !isSmall && setOnHover(true)}
                onMouseLeave={() => setOnHover(false)}
              >
                <div className="max-sm:p-0 max-sm:h-auto max-sm:gap-y-[20px] p-[48px] w-full h-[669px] flex flex-col justify-between  bg-white-ivory max-sm:rounded-[25px] rounded-[50px] sm:group-hover:bg-soft-tosca duration-500 transition-all">
                  <div className="w-full flex justify-between items-center ">
                    <div className="flex flex-col">
                      <div className="font-helixa max-sm:text-[32px] text-[48px] text-sunset-coral sm:group-hover:text-white-ivory transition-all duration-500">
                        {data.className}
                      </div>
                      <div className="max-sm:text-[16px] text-[28px] font-helixa text-[#404040] sm:group-hover:text-white-ivory transition-all duration-500">
                        {data.age}
                      </div>
                    </div>
                    <div className="max-sm:hidden">
                      <div
                        className="relative w-[203px] h-[76px] flex items-center "
                        onMouseEnter={() => setOnHover(false)}
                        onMouseLeave={() => setOnHover(true)}
                        onClick={() => {
                          console.log("tes");
                          modalClick(null);
                        }}
                      >
                        <Link
                          href={"https://wa.me/6281130910001"}
                          target="_blank"
                          className="cursor-pointer  w-0 group-hover:w-[301px] duration-1000 opacity-0 group-hover:opacity-100 transition-all h-[76px] max-sm:bg-[#EEE7D9] bg-white-ivory rounded-[38px] absolute right-0 overflow-hidden"
                        >
                          <div className="relative w-full h-full flex items-center">
                            <div className="font-helixa font-bold text-[28px] text-[#404040] ml-0 group-hover:ml-8 opacity-0 group-hover:opacity-100 duration-1000 transition-all text-nowrap">
                              Register Now
                            </div>
                          </div>
                        </Link>
                        <div className="flex justify-center items-center pointer-events-none">
                          <div className="w-[76px] h-[76px] group-hover:w-[62px] group-hover:h-[62px] transition-all duration-1000 bg-sunset-coral rounded-full flex justify-center items-center absolute right-[5%] z-10">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.78125 18.2676L17.7694 2.27938"
                                stroke="#FFFBF3"
                                strokeWidth="2.82634"
                              />
                              <path
                                d="M1.78125 2.28125H17.7694V18.2694"
                                stroke="#FFFBF3"
                                strokeWidth="2.82634"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`max-sm:w-full max-sm:h-[290px] max-sm:rounded-[25px] w-full h-[335px] rounded-[50px] overflow-hidden playschool-img-thumbail-container-${index}`}
                  >
                    <img
                      src={`${data.image}`}
                      alt=""
                      className={`w-full h-full object-cover object-top  playschool-img-thumbail-${index}`}
                    />
                  </div>
                  <div className="w-full flex max-sm:flex-col max-sm:gap-y-[20px] justify-between">
                    <div className=" flex max-sm:w-full w-[55%] justify-between">
                      <div className="flex flex-col">
                        <div className="font-helixa max-sm:text-[16px] text-[24px] text-[#404040] sm:group-hover:text-white-ivory transition-all duration-500">
                          Time
                        </div>
                        <div className="font-helixa font-bold max-sm:text-[16px] text-[20px] text-[#404040] sm:group-hover:text-white-ivory transition-all duration-500">
                          {data.time}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="font-helixa text-[24px] max-sm:text-[16px] text-[#404040] sm:group-hover:text-white-ivory transition-all duration-500">
                          Days
                        </div>
                        <div className="font-helixa font-bold max-sm:text-[16px] text-[20px] text-[#404040] sm:group-hover:text-white-ivory transition-all duration-500">
                          {data.days}
                        </div>
                      </div>
                    </div>

                    <div className="flex max-sm:flex-row max-sm:justify-between max-sm:items-center flex-col ">
                      <div>
                        <div className="font-helixa text-[24px] max-sm:text-[16px] text-[#404040]  sm:group-hover:text-white-ivory transition-all duration-500">
                          Limited Seats
                        </div>
                        <div className="font-helixa font-bold max-sm:text-[16px] text-[20px] text-[#404040] sm:group-hover:text-white-ivory transition-all duration-500">
                          {`${data.seat} Seats Left`}
                        </div>
                      </div>
                      <div className="max-sm:block hidden">
                        <div className="relative w-[183px] h-[40px] flex items-center">
                          <Link
                            href={"https://wa.me/6281130910001"}
                            target="_blank"
                            className="cursor-pointer w-0 group-hover:w-[183px] duration-1000 opacity-0 group-hover:opacity-100 transition-all h-[40px] max-sm:bg-[#EEE7D9] bg-white-ivory rounded-[20px] absolute right-0 overflow-hidden"
                            onMouseEnter={() => setOnHover(false)}
                            onMouseLeave={() => setOnHover(true)}
                          >
                            <div className="relative w-full h-full flex items-center">
                              <div className="font-helixa font-bold text-[20px] text-[#404040] ml-0 group-hover:ml-[16px] opacity-0 group-hover:opacity-100 duration-1000 transition-all text-nowrap">
                                Register Now
                              </div>
                            </div>
                          </Link>
                          <div className="flex justify-center items-center">
                            <div className="w-[32px] h-[32px] group-hover:w-[32px] group-hover:h-[32px] transition-all duration-1000 bg-sunset-coral rounded-full flex justify-center items-center absolute right-[5%] z-10">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.736328 11.2685L11.2626 0.742188M11.2626 0.742188L0.736328 0.742189M11.2626 0.742188V11.2685"
                                  stroke="#EEE7D9"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Section3;
