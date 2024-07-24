import React from "react";
import CardCar from "./CardCar";
import image from "@/assets/images/card.png";
import Link from "next/link";

const Cash = () => {
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
    <div className="container">
      <div className="flex flex-col mb-9">
        <h2 className="font-montserrat text-[28px] font-black">В наличии</h2>
        <div className="grid grid-cols-3 gap-6">
          {cardCarData.map((elon, index) => (
            <Link href={`/katalog/${index}`}>
              <CardCar key={index} {...elon} />
            </Link>
          ))}
        </div>
        <div className="flex justify-end mt-[30px]">
          <button className="border border-red text-red text-sm px-[50px] py-5 font-medium">
            Все машины
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cash;
