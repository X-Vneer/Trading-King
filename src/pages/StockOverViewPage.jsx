import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import StocksList from "../components/StocksList";

const StockOverViewPage = () => {
  return (
    <div className="pb-20">
      <Navbar />
      <Hero />
      <SearchBar />
      <StocksList />
    </div>
  );
};

export default StockOverViewPage;
