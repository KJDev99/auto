"use client";
import Image from "next/image";
import React, { useState } from "react";
import SavedImg from "@/assets/images/savedcar.svg";
import NoSavedImg from "@/assets/images/nosavedcar.svg";
import CarOil from "@/assets/images/caroil.svg";
import CarMore from "@/assets/images/carmore.svg";
import CarSpeed from "@/assets/images/carspeed.svg";
import CarYear from "@/assets/images/caryear.svg";

const CardCar = ({
  goodPrice,
  top,
  savedcar,
  image,
  name,
  text,
  speed,
  oil,
  year,
  price,
}) => {
  const [saved, setSaved] = useState(savedcar);
  return (
    <div className="w-full shadow-lg p-5 flex flex-col rounded-[10px]">
      <div className="relative">
        <img
          src={image}
          alt="title"
          className="!h-[214px] object-contain max-md:h-[172px]"
        />
        {goodPrice ? (
          <>
            {top && (
              <div className="absolute top-0 left-[150px] max-md:left-[95px] rounded-[5px] px-7 py-[10px] bg-[#07D133] text-white text-xs font-semibold max-md:px-3 max-md:py-2 max-md:text-[9px]">
                Хит!
              </div>
            )}
          </>
        ) : (
          <>
            {top && (
              <div className="absolute top-0 left-0 rounded-[5px] px-7 py-[10px] bg-[#07D133] text-white text-xs font-semibold max-md:px-3 max-md:py-2 max-md:text-[9px]">
                Хит!
              </div>
            )}
          </>
        )}

        {goodPrice && (
          <div className="absolute top-0 left-0 rounded-[5px] px-7 py-[10px] bg-[#405FF2] text-white text-xs font-semibold max-md:px-3 max-md:py-2 max-md:text-[9px]">
            Хорошая цена!
          </div>
        )}
        <Image
          src={saved ? SavedImg : NoSavedImg}
          alt="image"
          className="absolute top-4 right-4 !h-[15px] !w-[15px] cursor-pointer z-10 "
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            setSaved((prev) => !prev);
          }}
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-[#202020] text-lg mt-3 mb-1 font-semibold max-md:text-sm  text-left">
          {name}
        </h3>
        <p className="border-b text-[15px] pb-3 border-[#E6E6E6] font-medium text-[#202020] mb-[10px] max-md:text-xs text-left">
          {text}
        </p>
        <div className="grid grid-cols-3 gap-[5px] pb-3 border-b border-[#E6E6E6] ">
          <div className="flex items-center justify-start border h-[48px] px-3 rounded-[5px] max-md:px-2 max-md:h-[38px]">
            <Image
              src={CarSpeed}
              alt="speed"
              className="!w-[18px] !h-auto mr-[10px] !max-md:w-[15px]"
            />
            <p className="text-[#202020] font-medium text-sm max-md:text-[11px]">
              {speed}&nbsp;км
            </p>
          </div>
          <div className="flex items-center justify-start border h-[48px] px-3 rounded-[5px] max-md:px-2 max-md:h-[38px]">
            <Image
              src={CarOil}
              alt="speed"
              className="!w-[18px] !h-auto mr-[10px] !max-md:w-[15px]"
            />
            <p className="text-[#202020] font-medium text-sm max-md:text-[11px]">
              {oil}
            </p>
          </div>
          <div className="flex items-center justify-start border h-[48px] px-3 rounded-[5px] max-md:px-2 max-md:h-[38px]">
            <Image
              src={CarYear}
              alt="speed"
              className="!w-[18px] !h-auto mr-[10px] !max-md:w-[15px]"
            />
            <p className="text-[#202020] font-medium text-sm max-md:text-[11px]">
              {year}&nbsp;год
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-2xl font-bold max-md:text-xl"> ${price}</p>
          <div className="flex items-center">
            <p className="text-sm mr-[10px] font-semibold max-md:text-xs">
              Подробнее
            </p>
            <Image
              src={CarMore}
              alt="speed"
              className="!w-[14px] !h-auto cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCar;
