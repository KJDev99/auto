import React from "react";
import Button from "./Button";
import ImgManCar from "@/assets/images/mancar.png";
import Image from "next/image";

const InfoBlock = () => {
  return (
    <div className="mt-[200px] container shadow-lg rounded-[15px] flex  h-[313px]">
      <div className="w-1/2 p-8">
        <h2 className="text-[#202020] text-[26px] font-montserrat font-bold">
          Найдите свой автомобиль из более чем 1&nbsp;000&nbsp;000+ вариантов в
          нашем каталоге
        </h2>
        <p className="mb-6 mt-3 text-[#989898] font-medium">
          Перейдите в каталог и приступите к поиску автомобиля
        </p>
        <div className="w-[210px] h-[67px]">
          <Button text="В каталог" />
        </div>
      </div>
      <div className="w-1/2 bg_clip rounded-[15px] relative">
        <Image
          src={ImgManCar}
          alt="car"
          className="absolute !bottom-[-21px] right-[-30px] !h-[480px]"
        />
      </div>
    </div>
  );
};

export default InfoBlock;
