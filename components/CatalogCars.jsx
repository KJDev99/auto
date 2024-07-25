"use client";
import { useState } from "react";
import CardCar from "./CardCar";
import image from "@/assets/images/card.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Link from "next/link";

const itemsPerPage = 6;
const CatalogCars = () => {
  const [currentPage, setCurrentPage] = useState(1);
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
    {
      goodPrice: false,
      top: true,
      savedcar: false,
      image: image,
      title: "Kia Cerato",
      text: "4.0 D6 PowerPulse Momentum 5dr...",
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
      text: "4.0 D7 PowerPulse Momentum 5dr...",
      speed: "45 000 км",
      oil: "Дизель",
      year: "2019 год",
      price: "$95,000",
    },
  ];

  const totalPages = Math.ceil(cardCarData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCars = cardCarData.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const renderPagination = () => {
    if (cardCarData.length <= itemsPerPage) return null;

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-center mt-[50px] max-md:my-3 mb-5">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`h-[40px] bg-[#F9FBFC] rounded-[20px] border border-[#E9E9E9] w-[60px] ml-2 flex justify-center items-center`}
        >
          <FaChevronLeft />
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={`w-10 h-10 font-semibold mx-1 rounded-[20px] border ${
              currentPage === pageNumber
                ? "border-[#202020] bg-[#202020] text-white"
                : "border-[#E9E9E9] bg-[#F9FBFC] text-[#202020]"
            }`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`h-[40px] bg-[#F9FBFC] rounded-[20px] border border-[#E9E9E9] w-[60px] ml-2 flex justify-center items-center`}
        >
          <FaChevronRight />
        </button>
      </div>
    );
  };

  return (
    <div className="md:container">
      <div className="flex flex-col mb-9">
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {currentCars.map((elon, index) => (
            <Link href={`/katalog/${index}`} key={index}>
              <CardCar {...elon} />
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-[30px]">
          {" "}
          {renderPagination()}
        </div>
      </div>
    </div>
  );
};

export default CatalogCars;
