import { createContext, useEffect, useState } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (propes) => {
  const [watchList, setWatchList] = useState(["MSFT", "AMZN", "GOOGL"]);
  const [isPhone, setIsPhone] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= "650") {
      setIsPhone(true);
      screen.orientation.lock("portrait-primary").catch(console.log);
    }
  }, []);

  //   a function to add a stock to the watch list
  const addStock = (stock) => {
    if (watchList.indexOf(stock) === -1) {
      setWatchList([...watchList, stock]);
    }
  };
  // a function to delete stocks from watch list
  const deleteStock = (stock) => {
    const newWatchList = watchList.filter((ele) => {
      return ele != stock;
    });
    setWatchList(newWatchList);
  };
  return (
    <WatchListContext.Provider
      value={{ watchList, addStock, deleteStock, isPhone }}
    >
      {propes.children}
    </WatchListContext.Provider>
  );
};
