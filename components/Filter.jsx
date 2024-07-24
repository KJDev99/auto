import React from "react";
import FilterMenu from "./FilterMenu";
import SelectCars from "./SelectCars";
import YearsSelect from "./YearsSelect";
import SelectPrice from "./SelectPrice";
import SearchBtn from "@/assets/images/searchbtn.svg";
import Button from "./Button";

const Filter = () => {
  return (
    <div className="container">
      <div className="mt-[65px] bg-[#FFFFFF29] rounded-2xl shadow-lg p-5 mb-[100px]">
        <FilterMenu />
        <div className="flex bg-white mt-5 justify-between items-center ">
          <SelectCars />
          <YearsSelect />
          <SelectPrice />
          <div className="h-[63px] w-[216px] cursor-pointer">
            <Button image={SearchBtn} text="Пoиск" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
