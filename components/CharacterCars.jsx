import Image from "next/image";
import React from "react";

const CharacterCars = ({ img, title, text }) => {
  return (
    <div className="flex justify-between w-full mb-[26px]">
      <div className="flex">
        <Image src={img} alt="character" />
        <p className="text-[#989898] text-sm ml-[10px]">{title}</p>
      </div>
      <p className="text-[15px] text-[#202020] font-medium">{text}</p>
    </div>
  );
};

export default CharacterCars;
