import React from "react";
import Alert from "../components/Alert";
import Hero from "../components/Hero";
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
