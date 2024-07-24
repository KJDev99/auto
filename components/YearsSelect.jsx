"use client";
import React, { useState } from "react";

const YearsSelect = () => {
  const currentYear = new Date().getFullYear();
  const [startYear, setStartYear] = useState(2000);
  const [endYear, setEndYear] = useState(currentYear);

  const handleStartYearChange = (e) => {
    setStartYear(e.target.value);
  };

  const handleStartYearBlur = () => {
    let value = parseInt(startYear);
    if (isNaN(value) || value < 2000) {
      value = 2000;
    } else if (value >= currentYear) {
      value = currentYear - 1;
    }
    setStartYear(value);
    if (value >= endYear) {
      setEndYear(value + 1);
    }
  };

  const handleEndYearChange = (e) => {
    setEndYear(e.target.value);
  };

  const handleEndYearBlur = () => {
    let value = parseInt(endYear);
    if (isNaN(value) || value <= startYear) {
      value = startYear + 1;
    } else if (value > currentYear) {
      value = currentYear;
    }
    setEndYear(value);
  };

  return (
    <div className="flex flex-col items-start justify-center">
      <label className="text-lg text-center w-full">Год</label>
      <div className="flex items-center ">
        <input
          type="text"
          value={startYear}
          onChange={handleStartYearChange}
          onBlur={handleStartYearBlur}
          className="border-none outline-none w-10 text-center text-sm"
        />
        <span className="text-lg font-semibold">-</span>
        <input
          type="text"
          value={endYear}
          onChange={handleEndYearChange}
          onBlur={handleEndYearBlur}
          className="border-none outline-none w-10 text-center text-sm"
        />
      </div>
    </div>
  );
};

export default YearsSelect;
