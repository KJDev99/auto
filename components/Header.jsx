"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "@/assets/styles/globals.css";
import bg1 from "@/assets/images/herobg.png";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Button from "./Button";

const Header = () => {
  return (
    <div className="mt-[30px] mb-[70px] !bg-[#FAFAFA] max-md:mt-6 max-md:mb-10">
      <div className="container">
        <Swiper
          pagination={{ clickable: true }} // Make pagination clickable
          modules={[Pagination]}
          className="mySwiper mySwiper1"
        >
          <SwiperSlide>
            <div className="relative rounded-[10px] overflow-hidden max-md:h-[320px]">
              <div className="absolute w-[392px] top-[50px] left-[50px] flex flex-col items-start max-md:top-[20px] max-md:left-[20px] max-md:w-[232px] ">
                <h1 className="text-[38px] font-black text-white text-left max-md:text-xl uppercase">
                  BMW X7 M60i xDRIVE1
                </h1>
                <p className="text-[17px] text-white font-medium mb-6 text-left max-md:text-[13px] max-md:mb-[13px]">
                  дизель, полный привод, полная комплектация. Без обременений и
                  ограничений.
                </p>
                <div className="h-[70px] w-[220px] cursor-pointer max-md:h-[46px] max-md:w-[143px]">
                  <Button text="Подробнее" />
                </div>
              </div>
              <Image src={bg1} alt="bg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative rounded-[10px] overflow-hidden max-md:h-[320px]">
              <div className="absolute w-[392px] top-[50px] left-[50px] flex flex-col items-start max-md:top-[20px] max-md:left-[20px] max-md:w-[232px] ">
                <h1 className="text-[38px] font-black text-white text-left max-md:text-xl ">
                  BMW X7 M60i xDRIVE1
                </h1>
                <p className="text-[17px] text-white font-medium mb-6 text-left max-md:text-[13px] max-md:mb-[13px]">
                  дизель, полный привод, полная комплектация. Без обременений и
                  ограничений.
                </p>
                <div className="h-[70px] w-[220px] cursor-pointer max-md:h-[46px] max-md:w-[143px]">
                  <Button text="Подробнее" />
                </div>
              </div>
              <Image src={bg1} alt="bg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative rounded-[10px] overflow-hidden max-md:h-[320px]">
              <div className="absolute w-[392px] top-[50px] left-[50px] flex flex-col items-start max-md:top-[20px] max-md:left-[20px] max-md:w-[232px] ">
                <h1 className="text-[38px] font-black text-white text-left max-md:text-xl ">
                  BMW X7 M60i xDRIVE1
                </h1>
                <p className="text-[17px] text-white font-medium mb-6 text-left max-md:text-[13px] max-md:mb-[13px]">
                  дизель, полный привод, полная комплектация. Без обременений и
                  ограничений.
                </p>
                <div className="h-[70px] w-[220px] cursor-pointer max-md:h-[46px] max-md:w-[143px]">
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