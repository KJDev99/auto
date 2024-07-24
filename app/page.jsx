import BestDeals from "@/components/BestDeals";
import CarsBrand from "@/components/CarsBrand";
import Cash from "@/components/Cash";
import Filter from "@/components/Filter";
import Header from "@/components/Header";
import MainForm from "@/components/MainForm";
import MainInfo from "@/components/MainInfo";
import MainNews from "@/components/MainNews";
import Reviews from "@/components/Reviews";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <Filter />
      <Cash />
      <MainInfo />
      <BestDeals />
      <CarsBrand />
      <Reviews />
      <MainNews />
      <MainForm />
    </div>
  );
};

export default Home;
