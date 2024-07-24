"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/assets/styles/globals.css";

import bg1 from "@/assets/images/herobg.webp";

import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import image from "@/assets/images/sliderbg.png";
import SavedImg from "@/assets/images/savedcar.svg";
import NoSavedImg from "@/assets/images/nosavedcar.svg";
import CarOil from "@/assets/images/caroil.svg";
import CarMore from "@/assets/images/carmore.svg";
import CarSpeed from "@/assets/images/carspeed.svg";
import CarYear from "@/assets/images/caryear.svg";
import Button from "@/components/Button";
import CharacterCars from "@/components/characterCars";

import icon from "@/assets/images/icons/icon.svg";
import icon1 from "@/assets/images/icons/icon (1).svg";
import icon2 from "@/assets/images/icons/icon (2).svg";
import icon3 from "@/assets/images/icons/icon (3).svg";
import icon4 from "@/assets/images/icons/icon (4).svg";
import icon5 from "@/assets/images/icons/icon (5).svg";
import icon6 from "@/assets/images/icons/icon (6).svg";
import icon7 from "@/assets/images/icons/icon (7).svg";
import icon8 from "@/assets/images/icons/icon (8).svg";
import icon9 from "@/assets/images/icons/icon (9).svg";
import icon10 from "@/assets/images/icons/icon (10).svg";
import icon11 from "@/assets/images/icons/icon (11).svg";
import BestDeals from "@/components/BestDeals";
import InfoBlock from "@/components/InfoBlock2";

const page = () => {
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
  ];

  const [saved, setSaved] = useState(cardCarData[0].savedcar);
  return (
    <div className="container mb-[100px]">
      <div className="flex gap-6">
        <div className="w-4/6">
          <p className="text-[#050B20] text-sm mt-9 mb-2 font-medium">
            Главная/Новости/ {cardCarData[0].title}
          </p>
          <h2 className="mb-[15px] text-[#202020] text-[28px] font-black">
            {cardCarData[0].title}
          </h2>
          <p className="text-[#989898] mb-[22px] text-sm font-medium">
            {cardCarData[0].text}
          </p>
          <Swiper
            pagination={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mySwiper1 rounded-[15px] !h-[448px]"
          >
            <SwiperSlide>
              <Image src={bg1} alt="bg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={bg1} alt="bg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={bg1} alt="bg" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-2/6 mt-[160px] p-7 shadow-lg rounded-[15px] relative">
          <div
            className="border border-[#E9E9E9] rounded-full absolute  top-[34px] right-[27px] w-[43px] h-[43px] flex items-center justify-center cursor-pointer z-10"
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              setSaved((prev) => !prev);
            }}
          >
            <Image
              src={saved ? SavedImg : NoSavedImg}
              alt={image}
              className="!h-[15px] !w-[15px] "
            />
          </div>
          <h2 className="font-bold text-[#202020] mb-2">Цена:</h2>
          <div className="flex items-center mb-4">
            <span className="text-[#050B20] mr-2 line-through">$56,000</span>

            <span className="text-[#202020] text-[30px] font-bold">
              $45,000
            </span>
          </div>
          <p className="text-sm text-[#202020] font-medium mb-4">
            Вы экономите: $11,000
          </p>
          <div className="flex flex-col w-[120px] gap-[10px] mb-[40px]  ">
            <div className="flex items-center justify-start h-[48px] px-3 rounded-[5px] bg-[#F6F6F6]">
              <Image
                src={CarSpeed}
                alt="speed"
                className="!w-[18px] !h-auto mr-[10px]"
              />
              <p className="text-[#202020] font-medium text-sm">
                {cardCarData[0].speed}
              </p>
            </div>
            <div className="flex items-center justify-start h-[48px] px-3 rounded-[5px] bg-[#F6F6F6]">
              <Image
                src={CarOil}
                alt="speed"
                className="!w-[18px] !h-auto mr-[10px]"
              />
              <p className="text-[#202020] font-medium text-sm">
                {cardCarData[0].oil}
              </p>
            </div>
            <div className="flex items-center justify-start h-[48px] px-3 rounded-[5px] bg-[#F6F6F6]">
              <Image
                src={CarYear}
                alt="speed"
                className="!w-[18px] !h-auto mr-[10px]"
              />
              <p className="text-[#202020] font-medium text-sm">
                {cardCarData[0].year}
              </p>
            </div>
          </div>
          <div className="w-full h-[65px]">
            <Button text="Оставить заявку" />
          </div>
        </div>
      </div>
      <h2 className="text-[#202020] text-[20px] font-bold mt-[50px] mb-[30px]">
        Характеристики
      </h2>
      <div className="grid grid-cols-4 mb-[30px]">
        <div className="grid-cols-1 mr-[50px] character_after relative ">
          <div className="flex flex-col">
            <CharacterCars img={icon} title="Кузов" text="Седан" />
            <CharacterCars img={icon1} title="Пробег" text="45 000 км" />
            <CharacterCars img={icon2} title="Вид топлива" text="Бензин" />
          </div>
        </div>
        <div className="grid-cols-1 mr-[50px] character_after relative">
          <CharacterCars img={icon3} title="Год выпуска" text="2019" />
          <CharacterCars img={icon4} title="Трансмиссия" text="Робот" />
          <CharacterCars img={icon5} title="Тип привода" text="FF" />
        </div>
        <div className="grid-cols-1 mr-[50px] character_after relative">
          <CharacterCars img={icon6} title="Кузов" text="Исправное" />
          <CharacterCars img={icon7} title="Пробег" text="4" />
          <CharacterCars img={icon8} title="Вид топлива" text="Синий" />
        </div>
        <div className="grid-cols-1 mr-[50px] relative">
          <CharacterCars img={icon9} title="Объем двигателя" text="1.5" />
          <CharacterCars img={icon10} title="Мощность" text="170 л.с" />
          <CharacterCars img={icon11} title="VIN" text="FCB123792" />
        </div>
      </div>

      <div className="flex flex-col py-[50px] border-y border-[#DDDDDD]">
        <h2 className="text-[#202020] text-[20px] font-bold mb-[20px]">
          Описание
        </h2>
        <p className="text-[#989898]">
          Kia K5 базируется на новой платформе со значительными конструктивными
          усовершенствованиями, которые обеспечивают не только высокий уровень
          защиты, но также более точную управляемость и захватывающую динамику.
          Современные системы активной и пассивной безопасности заботятся о
          водителе и каждом пассажире, отвечая самым строгим требованиям.
        </p>
        <p className="text-[#989898]">
          Платформа третьего поколения — это новый стандарт Kia, определяющий
          расположение рулевого управления, элементов шасси, трансмиссии и пола
          кабины, который позволяет сделать салон более просторным, улучшить
          аэродинамические характеристики автомобиля, его управляемость,
          устойчивость и безопасность.
        </p>
      </div>
      <div className="relative mt-[50px]">
        <BestDeals />
        <div className="flex items-center absolute top-0 right-0 cursor-pointer">
          <p className="text-sm text-[#202020] mr-2 font-semibold">
            Смотреть все
          </p>
          <Image src={CarMore} alt="CarMore" />
        </div>
      </div>
      <div>
        <InfoBlock />
      </div>
    </div>
  );
};

export default page;
