import React from "react";
import Alert from "../components/Alert";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import StocksList from "../components/StocksList";
import { useContext } from "react";
import { NavBarContext } from "../App";

const StockOverViewPage = () => {
  const [opened, setOpened] = useContext(NavBarContext);
  return (
    <div
      onClick={(e) => {
        setOpened(false);
      }}
    >
      <Hero />
      <SearchBar />
      <StocksList />
    </div>
  );
};

export default StockOverViewPage;
