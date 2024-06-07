"use client";
import React from "react";

export const Cursor = ({ cursorRef = null, cursorText = null, videoPause }) => {
  return (
    <div
      ref={cursorRef}
      className="circle w-[120px] h-[120px] bg-white-ivory z-[9999] rounded-full flex justify-center items-center absolute translate-x-[-50%] translate-y-[-50%]  font-helixa text-base text-sunset-coral opacity-0 scale-0"
      style={{ pointerEvents: "none" }}
    >
      {cursorText ? (
        "more"
      ) : videoPause ? (
        <svg
          width="22"
          height="25"
          viewBox="0 0 22 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 12.5L0 0V25L22 12.5Z" fill="#F96D49" />
        </svg>
      ) : (
        <svg
          width="18"
          height="25"
          viewBox="0 0 18 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H5V25H0V0Z" fill="#F96D49" />
          <path d="M13 0H18V25H13V0Z" fill="#F96D49" />
        </svg>
      )}
    </div>
  );
};
