"use client";
import React, { useState } from "react";

const SelectPrice = () => {
  const [minPrice, setMinPrice] = useState('1 000 000');
  const [maxPrice, setMaxPrice] = useState('10 000 000');

  const formatPrice = (value) => {
    return new Intl.NumberFormat('ru-RU').format(value);
  };

  const parsePrice = (value) => {
    return parseInt(value.replace(/\s/g, ''), 10);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMinPriceBlur = () => {
    let value = parsePrice(minPrice);
    if (isNaN(value) || value < 1000000) {
      value = 1000000;
    } else if (value >= parsePrice(maxPrice)) {
      value = parsePrice(maxPrice) - 1;
    }
    setMinPrice(formatPrice(value));
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleMaxPriceBlur = () => {
    let value = parsePrice(maxPrice);
    if (isNaN(value) || value <= parsePrice(minPrice)) {
      value = parsePrice(minPrice) + 1;
    } else if (value > 10000000) {
      value = 10000000;
    }
    setMaxPrice(formatPrice(value));
  };

  return (
    <div className="flex flex-col items-start justify-center">
      <label className="text-lg text-center w-full">Цена</label>
      <div className="flex items-center">
        <input
          type="text"
          value={minPrice}
          onChange={handleMinPriceChange}
          onBlur={handleMinPriceBlur}
          className="border-none outline-none w-20 text-center text-sm"
        />
        <span className="text-lg font-semibold">-</span>
        <input
          type="text"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          onBlur={handleMaxPriceBlur}
          className="border-none outline-none w-20 text-center text-sm"
        />
      </div>
    </div>
  );
};

export default SelectPrice;
