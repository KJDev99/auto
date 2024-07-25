"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft } from "react-icons/fa";

const SelectCars = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isDistrictOpen, setIsDistrictOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredDistrict, setHoveredDistrict] = useState(null);
  const categoryRef = useRef(null);
  const districtRef = useRef(null);

  const categories = ["BMW", "Kia", "Tesla", "Mercedes-Benz", "Toyota"];

  const districts = {
    BMW: ["3 Series", "5 Series", "X5"],
    Kia: ["Sportage", "Sorento", "Optima"],
    Tesla: ["Model S", "Model 3", "Model X"],
    "Mercedes-Benz": ["C-Class", "E-Class", "GLC"],
    Toyota: ["Camry", "Corolla", "RAV4"],
  };

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const toggleDistrict = () => {
    setIsDistrictOpen(!isDistrictOpen);
  };

  const handleClickOutside = (event) => {
    if (categoryRef.current && !categoryRef.current.contains(event.target)) {
      setIsCategoryOpen(false);
    }
    if (districtRef.current && !districtRef.current.contains(event.target)) {
      setIsDistrictOpen(false);
    }
  };

  const handleCategoryChange = (event) => {
    const category = event.target.id;
    setSelectedCategory(category);
    setSelectedDistrict("");
    setIsCategoryOpen(false);
    setIsDistrictOpen(true);
  };

  const handleDistrictChange = (event) => {
    const district = event.target.id;
    setSelectedDistrict(district);
    setIsDistrictOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col relative px-[30px] max-md:px-0 max-md:w-full">
      <div className="flex max-md:w-full" ref={categoryRef}>
        <div
          className={`flex flex-col p-[10px] w-[200px] max-md:w-[140px] rounded-[10px] justify-between cursor-pointer bg-white`}
          onClick={toggleCategory}
        >
          <h2 className="text-lg text-[#050B20] max-md:text-sm">
            Выберите&nbsp;марку
          </h2>
          <div className="flex justify-between w-full my-2 items-center">
            <p className="text-sm text-[#050B20]">{selectedCategory}</p>
            <FaChevronLeft
              className={`text-sm transition-transform z-10 ${
                isCategoryOpen ? "rotate-90" : "-rotate-90"
              }`}
            />
          </div>
        </div>
        {isCategoryOpen && (
          <div className="flex flex-col p-[10px] mt-2 rounded-[10px] absolute bg-white shadow-lg w-[43%] left-0 top-[60px] z-10 max-md:w-full">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredCategory(category)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <label
                  className={`flex items-center mb-0 cursor-pointer`}
                  htmlFor={category}
                >
                  <input
                    type="radio"
                    id={category}
                    name="category"
                    className="hidden"
                    checked={selectedCategory === category}
                    onChange={handleCategoryChange}
                  />
                  <p
                    className={`w-full px-4 py-2 rounded-md flex items-center justify-between text-sm max-md:px-2 ${
                      selectedCategory === category ||
                      hoveredCategory === category
                        ? "font-medium"
                        : "font-normal"
                    }`}
                  >
                    {category}
                  </p>
                </label>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col p-[10px] w-[200px] max-md:w-1/2 rounded-[10px] justify-between cursor-pointer ml-[90px] max-md:ml-5">
          <div className="flex flex-col w-full" ref={districtRef}>
            <div
              className={`flex flex-col  h-10 w-full rounded-[10px] justify-between  cursor-pointer bg-white`}
            >
              <h2 className="text-lg text-[#050B20] max-md:text-sm">
                Выберите&nbsp;модель
              </h2>
              {selectedCategory && (
                <div
                  className="flex justify-between w-full my-2 items-center"
                  onClick={toggleDistrict}
                >
                  <p className="text-sm text-[#050B20]">{selectedDistrict}</p>
                  <FaChevronLeft
                    className={`text-sm transition-transform z-10 ${
                      isDistrictOpen ? "rotate-90" : "-rotate-90"
                    }`}
                  />
                </div>
              )}
            </div>
            {isDistrictOpen && (
              <div className="flex flex-col p-[10px] mt-2 rounded-[10px] absolute bg-white shadow-lg w-1/2 top-[60px] z-10 max-md:w-full max-md:left-0">
                {districts[selectedCategory].map((district, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setHoveredDistrict(district)}
                    onMouseLeave={() => setHoveredDistrict(null)}
                  >
                    <label
                      className={`flex items-center mb-0 cursor-pointer`}
                      htmlFor={district}
                    >
                      <input
                        type="radio"
                        id={district}
                        name="district"
                        className="hidden"
                        checked={selectedDistrict === district}
                        onChange={handleDistrictChange}
                      />
                      <p
                        className={`w-full px-4 py-2 rounded-md flex items-center justify-between text-sm max-md:px-2 ${
                          selectedDistrict === district ||
                          hoveredDistrict === district
                            ? "font-medium"
                            : "font-normal"
                        }`}
                      >
                        {district}
                      </p>
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCars;
