import React from "react";
import FilterMenu from "./FilterMenu";
import SelectCars from "./SelectCars";
import YearsSelect from "./YearsSelect";
import SelectPrice from "./SelectPrice";
import SearchBtn from "@/assets/images/searchbtn.svg";
import Button from "./Button";

const Filter = () => {
  return (
    <div className="md:container">
      <div className="mt-[65px] bg-[#FFFFFF29] rounded-2xl shadow-lg p-5 mb-[100px] max-md:mt-[30px] max-md:mb-[60px] max-md:p-[15px]">
        <FilterMenu />
        <div className="flex md:bg-white mt-5 justify-between items-center max-md:flex-wrap">
          <SelectCars />
          <div className="flex md:flex-grow md:justify-around">
            <YearsSelect />
            <SelectPrice />
          </div>
          <div className="h-[63px] w-[216px]  cursor-pointer max-md:hidden">
            <Button image={SearchBtn} text="Пoиск" />
          </div>
          <div className="h-[63px] w-[216px] max-md:w-full max-md:h-[53px] max-md:mt-6 cursor-pointer md:hidden">
            <Button text="Пoиск" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
