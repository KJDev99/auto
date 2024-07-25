"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Navigation } from "swiper/modules";
import NewsCars from "./NewsCars";
import image from "@/assets/images/news.png";
import Link from "next/link";

const MainNews = () => {
  const cardNewsData = [
    {
      image: image,
      title: "ТОП-1 НАДЕЖНЫХ АВТОМОБИЛЕЙ ДЛЯ СЕМЕЙНОГО ИСПОЛЬЗОВАНИЯ",
      text: "Японский автомобиль является идеальным вариантом для семейного...",
      date: "11 Июля 2024",
    },
    {
      image: image,
      title: "ТОП-2 НАДЕЖНЫХ АВТОМОБИЛЕЙ ДЛЯ СЕМЕЙНОГО ИСПОЛЬЗОВАНИЯ",
      text: "Японский автомобиль является идеальным вариантом для семейного...",
      date: "11 Июля 2024",
    },
    {
      image: image,
      title: "ТОП-3 НАДЕЖНЫХ АВТОМОБИЛЕЙ ДЛЯ СЕМЕЙНОГО ИСПОЛЬЗОВАНИЯ",
      text: "Японский автомобиль является идеальным вариантом для семейного...",
      date: "11 Июля 2024",
    },
    {
      image: image,
      title: "ТОП-4 НАДЕЖНЫХ АВТОМОБИЛЕЙ ДЛЯ СЕМЕЙНОГО ИСПОЛЬЗОВАНИЯ",
      text: "Японский автомобиль является идеальным вариантом для семейного...",
      date: "11 Июля 2024",
    },
    {
      image: image,
      title: "ТОП-5 НАДЕЖНЫХ АВТОМОБИЛЕЙ ДЛЯ СЕМЕЙНОГО ИСПОЛЬЗОВАНИЯ",
      text: "Японский автомобиль является идеальным вариантом для семейного...",
      date: "11 Июля 2024",
    },
    {
      image: image,
      title: "ТОП-6 НАДЕЖНЫХ АВТОМОБИЛЕЙ ДЛЯ СЕМЕЙНОГО ИСПОЛЬЗОВАНИЯ",
      text: "Японский автомобиль является идеальным вариантом для семейного...",
      date: "11 Июля 2024",
    },
  ];
  return (
    <div className="container relative">
      <h2 className="font-montserrat text-[28px] font-black mb-[30px]  max-md:text-xl max-md:mb-5">
        Новости
      </h2>
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
          nextEl: ".swiper-button-next-custom3",
          prevEl: ".swiper-button-prev-custom3",
        }}
        modules={[Navigation]}
        className="mySwiper mb-[170px] max-md:mb-10"
      >
        {cardNewsData.map((news, index) => (
          <SwiperSlide key={index}>
            <Link href={`/news/${index}`}>
              <NewsCars
                image={news.image}
                title={news.title}
                text={news.text}
                date={news.date}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev-custom3 absolute right-[80px] transform translate-y-1/2 bottom-[-40px] max-md:w-[49px] max-md:h-8 cursor-pointer z-10 w-[60px] h-10 rounded-[30px] border border-[#E6E6E6] flex justify-center items-center">
        <FaChevronLeft />
      </div>
      <div className="swiper-button-next-custom3 absolute right-0 max-md:w-[49px] max-md:h-8 max-md:right-[20px] transform translate-y-1/2 bottom-[-40px] z-10 cursor-pointer w-[60px] h-10 rounded-[30px] border border-[#E6E6E6] flex justify-center items-center">
        <FaChevronRight />
      </div>
    </div>
  );
};

export default MainNews;
