"use client";
import { useState } from "react";

const FilterMenu = () => {
  const [activeButton, setActiveButton] = useState("Все");

  return (
    <div className="flex flex-col items-start w-max px-[30px]">
      <div className="flex justify-start">
        {["Все", "Новые", "С пробегом"].map((label) => (
          <div key={label} className="flex flex-col items-center">
            <button
              onClick={() => setActiveButton(label)}
              className={`py-2 px-4 text font-semibold `}
            >
              {label}
            </button>
            <div
              className={`w-5 h-[2px] ${
                activeButton === label ? "bg-[#010101]" : "bg-transparent"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterMenu;
