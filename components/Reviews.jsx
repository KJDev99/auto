"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import fikr1 from "@/assets/images/fikr/fikr1.png";
import fikr2 from "@/assets/images/fikr/fikr2.png";
import fikr3 from "@/assets/images/fikr/fikr3.png";
import Service from "@/assets/images/Service.svg";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="container relative">
      <div className="flex justify-between items-center">
        <h2 className="font-montserrat text-[28px] font-black mb-[30px]  max-md:text-xl max-md:mb-5 uppercase">
          Отзывы о Boom-avto
        </h2>
        <Image src={Service} alt="Service" className="max-md:hidden" />
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom2",
          prevEl: ".swiper-button-prev-custom2",
        }}
        modules={[Navigation]}
        className="mySwiper mb-[100px]"
      >
        <SwiperSlide>
          <Image src={fikr1} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={fikr2} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={fikr3} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={fikr1} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={fikr2} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={fikr3} alt="img" />
        </SwiperSlide>
      </Swiper>

      <div className="swiper-button-prev-custom2 absolute right-[80px] transform translate-y-1/2 bottom-[-40px] max-md:w-[49px] max-md:h-8 cursor-pointer z-10 w-[60px] h-10 rounded-[30px] border border-[#E6E6E6] flex justify-center items-center">
        <FaChevronLeft />
      </div>
      <div className="swiper-button-next-custom2 absolute right-0 max-md:right-[20px] max-md:w-[49px] max-md:h-8 transform translate-y-1/2 bottom-[-40px] z-10 cursor-pointer w-[60px] h-10 rounded-[30px] border border-[#E6E6E6] flex justify-center items-center">
        <FaChevronRight />
      </div>
    </div>
  );
};

export default Reviews;
