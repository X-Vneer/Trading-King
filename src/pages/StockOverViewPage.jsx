import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import StocksList from "../components/StocksList";

const StockOverViewPage = () => {
  return (
    <>
      <Hero />
      <SearchBar />
      <StocksList />
    </>
  );
};

export default StockOverViewPage;
