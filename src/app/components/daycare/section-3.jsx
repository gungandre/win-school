"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section3 = ({ setOnHover }) => {
  const elemenRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const [activitiesData, setActivitiesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchingData = await fetch(
          "http://localhost:1337/api/daycare?populate=*"
        );
        const result = await fetchingData.json();
        console.log(result.data.attributes.Activities);
        setActivitiesData(result.data.attributes.Activities);
      } catch (error) {
        console.log("Gagal mengambil data:", error);
      }
    };
    fetchData();
  }, []);

  const data = [
    {
      time: "08.00 - 09.00 AM",
      desc: "Drop off & Breakfast",
    },
    {
      time: "09.00 - 09.30 AM",
      desc: "Self-directed Play",
    },
    {
      time: "09.30 - 10.00 AM",
      desc: "Circle Time (Morning Routines + Song)",
    },
    {
      time: "10.00 - 10.15 AM",
      desc: "Morning Snack",
    },
    {
      time: "10.15 - 11.30 AM",
      desc: "Outside Play & Physical Activity",
    },

    {
      time: "11.30 - 12.00 PM",
      desc: "Having Lunch Together",
    },

    {
      time: "01.00 - 01.30 PM",
      desc: "Story Time (Books or Songs)",
    },

    {
      time: "01.30 - 02.30 PM",
      desc: "Nap Time",
    },
    {
      time: "02.30 - 03.30 PM",
      desc: "Group Play & Take a Shower",
    },
    {
      time: "03.30 - 04.00 PM",
      desc: "Closing Circle (Pick up Time)",
    },
  ];

  useGSAP(() => {
    data.map((item, index) => {
      // ScrollTrigger.create({
      //   trigger: `.timetable-${index}`,
      //   onEnter: () => {
      //     gsap.fromTo(
      //       `.time-${index}`,
      //       {
      //         opacity: 0,
      //         transform: "translateX(-100%)",
      //       },
      //       {
      //         opacity: 1,
      //         transform: "translateX(0)",
      //         ease: "power1.out",
      //         duration: 10,
      //       }
      //     );
      //     gsap.fromTo(
      //       `.desc-${index}`,
      //       {
      //         opacity: 0,
      //         transform: "translate(100%)",
      //       },
      //       {
      //         opacity: 1,
      //         transform: "translate(0)",
      //         ease: "power1.out",
      //         duration: 10,
      //       }
      //     );
      //   },
      // });
    });
  });

  return (
    <>
      <div className="min-h-dvh w-full   bg-white-ivory flex flex-col section-timetable">
        {data &&
          data.map((item, index) => {
            return (
              <div
                className={`w-full group relative overflow-hidden timetable-${index}`}
                ref={elemenRef}
                key={index}
              >
                <div className="absolute bg-soft-tosca h-full w-full translate-y-full group-hover:translate-y-0 duration-500 transition-all"></div>
                <div className="flex justify-center w-full h-[120px]">
                  <div className="w-[90%] flex border-y-[1px]">
                    <div className="w-[35%]  flex items-center h-full">
                      <div
                        className={`font-helixa font-bold text-[20px] text-[#404040] group-hover:text-white-ivory duration-500 transition-all z-10 time-${index} `}
                      >
                        {item.time}
                      </div>
                    </div>
                    <div className="w-[65%]  h-full flex items-center">
                      <div
                        className={`font-helixa font-bold text-[48px] text-[#404040] group-hover:text-white-ivory duration-500 transition-all z-10 desc-${index}  `}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Section3;
