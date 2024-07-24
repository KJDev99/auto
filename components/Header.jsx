"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "@/assets/styles/globals.css";

import bg1 from "@/assets/images/herobg.webp";

import { Pagination } from "swiper/modules";
import Image from "next/image";
import Button from "./Button";
const Header = () => {
  return (
    <div className="mt-[30px] mb-[70px] !bg-[#FAFAFA]">
      <div className="container">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper mySwiper1"
        >
          <SwiperSlide>
            <div className="relative rounded-[10px] overflow-hidden">
              <div className="absolute w-[392px] top-[50px] left-[50px] flex flex-col items-start">
                <h1 className="text-[38px] font-black text-white text-left">
                  BMW X7 M60i xDRIVE1
                </h1>
                <p className="text-[17px] text-white font-medium mb-6 text-left">
                  дизель, полный привод, полная комплектация. Без обременений и
                  ограничений.
                </p>
                <div className="h-[70px] w-[220px] cursor-pointer">
                  <Button text="Подробнее" />
                </div>
              </div>
              <Image src={bg1} alt="bg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative rounded-[10px] overflow-hidden">
              <div className="absolute w-[392px] top-[50px] left-[50px] flex flex-col items-start">
                <h1 className="text-[38px] font-black text-white text-left">
                  BMW X7 M60i xDRIVE2
                </h1>
                <p className="text-[17px] text-white font-medium mb-6 text-left">
                  дизель, полный привод, полная комплектация. Без обременений и
                  ограничений.
                </p>
                <div className="h-[70px] w-[220px] cursor-pointer">
                  <Button text="Подробнее" />
                </div>
              </div>
              <Image src={bg1} alt="bg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative rounded-[10px] overflow-hidden">
              <div className="absolute w-[392px] top-[50px] left-[50px] flex flex-col items-start">
                <h1 className="text-[38px] font-black text-white text-left">
                  BMW X7 M60i xDRIVE3
                </h1>
                <p className="text-[17px] text-white font-medium mb-6 text-left">
                  дизель, полный привод, полная комплектация. Без обременений и
                  ограничений.
                </p>
                <div className="h-[70px] w-[220px] cursor-pointer">
                  <Button text="Подробнее" />
                </div>
              </div>
              <Image src={bg1} alt="bg" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
