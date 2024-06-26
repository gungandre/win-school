"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const data = [
  {
    Time: "08.00 - 09.00 AM",
    Activity: "Drop off & Breakfast",
  },
  {
    Time: "09.00 - 09.30 AM",
    Activity: "Self-directed Play",
  },
  {
    Time: "09.30 - 10.00 AM",
    Activity: "Circle Time (Morning Routines + Song)",
  },
  {
    Time: "10.00 - 10.15 AM",
    Activity: "Morning Snack",
  },
  {
    Time: "10.15 - 11.30 AM",
    Activity: "Outside Play & Physical Activity",
  },

  {
    Time: "11.30 - 12.00 PM",
    Activity: "Having Lunch Together",
  },

  {
    Time: "01.00 - 01.30 PM",
    Activity: "Story Time (Books or Songs)",
  },

  {
    Time: "01.30 - 02.30 PM",
    Activity: "Nap Time",
  },
  {
    Time: "02.30 - 03.30 PM",
    Activity: "Group Play & Take a Shower",
  },
  {
    Time: "03.30 - 04.00 PM",
    Activity: "Closing Circle (Pick up Time)",
  },
];
const Section3 = ({ setOnHover }) => {
  const elemenRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const [activitiesData, setActivitiesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      try {
        const fetchingData = await fetch(`${apiUrl}/api/daycare?populate=*`);
        const result = await fetchingData.json();

        setActivitiesData(result.data.attributes.Activities);
      } catch (error) {
        console.log("Gagal mengambil data:", error);
      }
    };

    fetchData();
  }, []);

  useGSAP(
    () => {
      activitiesData?.map((item, index) => {
        ScrollTrigger.create({
          trigger: `.timetable-${index}`,

          onEnter: () => {
            gsap.to(
              `.time-${index}`,

              {
                opacity: 1,
                left: 0,
                ease: "power1.in",
                duration: 0.5,
              }
            );

            gsap.to(
              `.desc-${index}`,

              {
                opacity: 1,
                right: 0,
                transform: "translateX(0)",
                ease: "power1.in",
                duration: 0.5,
              }
            );
          },
        });
      });
    },
    { scope: elemenRef, dependencies: [activitiesData] }
  );

  return (
    <>
      <div
        className="min-h-svh w-full   bg-white-ivory flex flex-col section-timetable"
        ref={elemenRef}
      >
        {activitiesData &&
          activitiesData.map((item, index) => {
            return (
              <div
                className={`w-full group relative overflow-hidden timetable-${index}`}
                key={index}
              >
                <div className="absolute bg-soft-tosca h-full w-full translate-y-full group-hover:translate-y-0 duration-500 transition-all"></div>
                <div className="flex justify-center w-full h-[120px]">
                  <div className="w-[90%] flex border-y-[1px] max-sm:flex-col max-sm:justify-center">
                    <div className="w-[35%] max-sm:w-full max-sm:h-auto  flex items-center h-full">
                      <div
                        className={`font-helixa font-bold text-[20px] max-sm:text-[16px] text-[#404040] group-hover:text-white-ivory duration-500 transition-all z-10 time-${index} opacity-0  left-[-10%] relative`}
                      >
                        {item.Time}
                      </div>
                    </div>
                    <div className="w-[65%] max-sm:w-full max-sm:h-auto h-full flex items-center">
                      <div
                        className={`font-helixa font-bold max-sm:text-[24px] text-[48px] text-[#404040] group-hover:text-white-ivory duration-500 transition-all z-10 desc-${index}  opacity-0 relative right-[-10%]`}
                      >
                        {item.Activity}
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
