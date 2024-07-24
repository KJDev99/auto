import React from "react";
import Button from "./Button";
// import ImgManCar from "@/assets/images/mancar.png";
import Image from "next/image";

const InfoBlock = () => {
  return (
    <div className="mt-[100px] container shadow-lg rounded-[15px] flex  h-[288px]">
      <div className="w-1/2 p-8">
        <h2 className="text-[#202020] text-[26px] font-montserrat font-bold">
          Нужна помощь с выбором?
        </h2>
        <p className="mb-6 mt-3 text-[#989898] font-medium">
          Оставьте заявку, и наши менеджеры помогут вам подобрать автомобиль под
          ваши потребности и бюджет!
        </p>
        <div className="w-[210px] h-[67px]">
          <Button text="Оставить заявку" />
        </div>
      </div>
      <div className="w-1/2 bg_clip2 rounded-[15px] relative"></div>
    </div>
  );
};

export default InfoBlock;
