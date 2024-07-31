"use client";
import { useState, useEffect } from "react";
import FilterMenu from "./FilterMenu";
import SelectCars from "./SelectCars";
import YearsSelect from "./YearsSelect";
import SelectPrice from "./SelectPrice";
import SearchBtn from "@/assets/images/searchbtn.svg";
import Button from "./Button"; // Update with the correct path to your API configuration
import api from "@/lib/api";
import Link from "next/link";
import CardCar from "./CardCar";

const Filter = ({ btn }) => {
  const [filter, setFilter] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [districtId, setDistrictId] = useState(null);
  const [yearOne, setyearOne] = useState(null);
  const [yearTwo, setyearTwo] = useState(null);
  const [priceMin, setPriceMin] = useState(null);
  const [priceMax, setPriceMax] = useState(null);
  const [cardCarData, setCardCarData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const fetchCars = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get("avto/", {
        params: {
          is_new: filter,
          marka_avto: categoryId,
          model_avto: districtId,
          year_one: yearOne,
          year_two: yearTwo,
          price_min: priceMin,
          price_max: priceMax,
          page: 1,
          page_size: 6,
        },
      });
      const formattedData = response.data.results.map((car) => ({
        goodPrice: car.good_price,
        top: car.avto_xit,
        savedcar: car.savedcar || false,
        image: car.avto_image[0].image,
        name: car.name,
        text: car.short_description,
        speed: car.probeg,
        oil: car.type_fuel.name,
        year: car.year,
        price: car.price,
        id: car.id,
      }));
      setCardCarData(formattedData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
    setIsSearchClicked(false); // Reset the search state
  }, [isSearchClicked]);

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const handleCategoryChange = (categoryId) => {
    setCategoryId(categoryId);
  };

  const handleDistrictChange = (districtId) => {
    setDistrictId(districtId);
  };

  const handleYearOne = (yearOne) => {
    setyearOne(yearOne);
  };

  const handleYearTwo = (yearTwo) => {
    setyearTwo(yearTwo);
  };
  const handlepriceMin = (priceMin) => {
    setPriceMin(priceMin);
  };

  const handlepriceMax = (priceMax) => {
    setPriceMax(priceMax);
  };

  const handleSearchClick = () => {
    setIsSearchClicked(true);
  };

  return (
    <>
      <div className="md:container">
        <div className="flex flex-col">
          <div className="mt-[0px] bg-[#FFFFFF29] rounded-2xl shadow-lg p-5 mb-[100px] max-md:mt-[0px] max-md:mb-[60px] max-md:p-[15px]">
            <FilterMenu onFilterChange={handleFilterChange} />
            <div className="flex md:bg-white mt-5 justify-between items-center max-md:flex-wrap">
              <SelectCars
                onCategoryChange={handleCategoryChange}
                onDistrictChange={handleDistrictChange}
              />
              <div className="flex md:flex-grow md:justify-around">
                <YearsSelect
                  onYearOne={handleYearOne}
                  onYearTwo={handleYearTwo}
                />
                <SelectPrice
                  onPriceMin={handlepriceMin}
                  onPriceMax={handlepriceMax}
                />
              </div>
              <div
                className="h-[63px] w-[216px] cursor-pointer max-md:hidden"
                onClick={handleSearchClick}
              >
                <Button image={SearchBtn} text="Пoиск" />
              </div>
              <div
                className="h-[63px] w-[216px] max-md:w-full max-md:h-[53px] max-md:mt-6 cursor-pointer md:hidden"
                onClick={handleSearchClick}
              >
                <Button text="Пoиск" />
              </div>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col mb-9">
          <h2 className="font-montserrat text-[28px] font-black max-md:text-xl uppercase">
            В наличии
          </h2>
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1 max-md:flex max-md:overflow-x-auto max-md:gap-[10px]  custom-scrollbar">
            {cardCarData.map((elon, index) => (
              <Link
                href={`/katalog/${elon.id}`}
                key={index}
                className="max-md:w-full max-md:flex-shrink-0"
              >
                <CardCar {...elon} />
              </Link>
            ))}
          </div>

          {btn && (
            <div className="flex justify-end mt-[30px]">
              <Link href={"/katalog"}>
                <button className="border border-red text-red text-sm px-[50px] py-5 font-medium max-md:px-[38px] max-md:text-xs">
                  Все машины
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Filter;
