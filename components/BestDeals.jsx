"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardCar from "./CardCar";
import image from "@/assets/images/card.png";

import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Navigation } from "swiper/modules";
import Link from "next/link";

const BestDeals = () => {
  const cardCarData = [
    {
      goodPrice: true,
      top: false,
      savedcar: false,
      image: image,
      title: "Kia Cerato",
      text: "4.0 D5 PowerPulse Momentum 5dr...",
      speed: "45 000 км",
      oil: "Дизель",
      year: "2019 год",
      price: "$95,000",
    },
    {
      goodPrice: true,
      top: true,
      savedcar: false,
      image: image,
      title: "Kia Cerato",
      text: "4.0 D5 PowerPulse Momentum 5dr...",
      speed: "45 000 км",
      oil: "Дизель",
      year: "2019 год",
      price: "$95,000",
    },
    {
      goodPrice: true,
      top: true,
      savedcar: false,
      image: image,
      title: "Kia Cerato",
      text: "4.0 D5 PowerPulse Momentum 5dr...",
      speed: "45 000 км",
      oil: "Дизель",
      year: "2019 год",
      price: "$95,000",
    },
    {
      goodPrice: true,
      top: false,
      savedcar: false,
      image: image,
      title: "Kia Cerato",
      text: "4.0 D5 PowerPulse Momentum 5dr...",
      speed: "45 000 км",
      oil: "Дизель",
      year: "2019 год",
      price: "$95,000",
    },
    {
      goodPrice: false,
      top: true,
      savedcar: false,
      image: image,
      title: "Kia Cerato",
      text: "4.0 D5 PowerPulse Momentum 5dr...",
      speed: "45 000 км",
      oil: "Дизель",
      year: "2019 год",
      price: "$95,000",
    },
    {
      goodPrice: false,
      top: false,
      savedcar: true,
      image: image,
      title: "Kia Cerato",
      text: "4.0 D5 PowerPulse Momentum 5dr...",
      speed: "45 000 км",
      oil: "Дизель",
      year: "2019 год",
      price: "$95,000",
    },
  ];

  return (
    <div className="md:container relative">
      <h2 className="font-montserrat text-[28px] font-black mb-[30px]  max-md:text-xl max-md:mb-5 container">
        Лучшие предложения
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
          nextEl: ".swiper-button-next-custom1",
          prevEl: ".swiper-button-prev-custom1",
        }}
        modules={[Navigation]}
        className="mySwiper mb-[170px] max-md:mb-[120px]"
      >
        {cardCarData.map((car, index) => (
          <SwiperSlide key={index}>
            <Link href={`/katalog/${index}`}>
              <CardCar
                goodPrice={car.goodPrice}
                top={car.top}
                savedcar={car.savedcar}
                image={car.image}
                title={car.title}
                text={car.text}
                speed={car.speed}
                oil={car.oil}
                year={car.year}
                price={car.price}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev-custom1 absolute right-[80px] transform translate-y-1/2 bottom-[-40px] cursor-pointer z-10 w-[60px] h-10 max-md:w-[49px] max-md:h-8 rounded-[30px] border border-[#E6E6E6] flex justify-center items-center">
        <FaChevronLeft />
      </div>
      <div className="swiper-button-next-custom1 absolute right-0 max-md:right-[20px] transform translate-y-1/2 bottom-[-40px] z-10 cursor-pointer w-[60px] h-10 max-md:w-[49px] max-md:h-8 rounded-[30px] border border-[#E6E6E6] flex justify-center items-center">
        <FaChevronRight />
      </div>
    </div>
  );
};

export default BestDeals;
