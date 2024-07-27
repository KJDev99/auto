"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft } from "react-icons/fa";
import axios from 'axios';

const SelectCars = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isDistrictOpen, setIsDistrictOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredDistrict, setHoveredDistrict] = useState(null);
  const [categories, setCategories] = useState([]);
  const [districts, setDistricts] = useState([]);
  const categoryRef = useRef(null);
  const districtRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://5.35.93.236:8000/avto/marka/');
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchDistricts = async () => {
      if (selectedCategory) {
        try {
          const category = categories.find(cat => cat.name === selectedCategory);
          if (category) {
            const response = await axios.get(`http://5.35.93.236:8000/avto/model/${category.id}/`);
            setDistricts(response.data);
          }
        } catch (error) {
          console.error("Error fetching districts:", error);
        }
      }
    };

    fetchDistricts();
  }, [selectedCategory, categories]);

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
            {categories.map((category) => (
              <div
                key={category.id}
                className="relative"
                onMouseEnter={() => setHoveredCategory(category.name)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <label
                  className={`flex items-center mb-0 cursor-pointer`}
                  htmlFor={category.name}
                >
                  <input
                    type="radio"
                    id={category.name}
                    name="category"
                    className="hidden"
                    checked={selectedCategory === category.name}
                    onChange={handleCategoryChange}
                  />
                  <p
                    className={`w-full px-4 py-2 rounded-md flex items-center justify-between text-sm max-md:px-2 ${
                      selectedCategory === category.name ||
                      hoveredCategory === category.name
                        ? "font-medium"
                        : "font-normal"
                    }`}
                  >
                    {category.name}
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
                {districts.map((district) => (
                  <div
                    key={district.id}
                    className="relative"
                    onMouseEnter={() => setHoveredDistrict(district.name)}
                    onMouseLeave={() => setHoveredDistrict(null)}
                  >
                    <label
                      className={`flex items-center mb-0 cursor-pointer`}
                      htmlFor={district.name}
                    >
                      <input
                        type="radio"
                        id={district.name}
                        name="district"
                        className="hidden"
                        checked={selectedDistrict === district.name}
                        onChange={handleDistrictChange}
                      />
                      <p
                        className={`w-full px-4 py-2 rounded-md flex items-center justify-between text-sm max-md:px-2 ${
                          selectedDistrict === district.name ||
                          hoveredDistrict === district.name
                            ? "font-medium"
                            : "font-normal"
                        }`}
                      >
                        {district.name}
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
