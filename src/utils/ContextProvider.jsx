import { createContext, useState } from "react";

export const WatchListContext = createContext();
export const WatchListContextProvider = (propes) => {
  const [watchList, setWatchList] = useState(["MSFT", "AMZN", "GOOGL"]);

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
  };
  return (
    <WatchListContext.Provider value={{ watchList, addStock, deleteStock }}>
      {propes.children}
    </WatchListContext.Provider>
  );
};
