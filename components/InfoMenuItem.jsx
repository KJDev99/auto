import Image from "next/image";
import React from "react";

const InfoMenuItem = ({ img, title, text, top }) => {
  return (
    <div
      className={`px-6 flex flex-col shadow-lg bg-white h-[306px] ${
        top && "mt-[100px]"
      }`}
    >
      <Image src={img} alt="title" className="mt-[35px] mb-[15px]" />
      <h3 className="mb-2 text-[22px] text-[#202020] font-bold">{text}</h3>
      <p className="text-[15px] text-[#989898] font-medium">{title}</p>
    </div>
  );
};

export default InfoMenuItem;
