import React from "react";
import { useState, useEffect, useContext } from "react";
import { WatchListContext } from "../utils/ContextProvider";
import finnhub from "../Api/finnhub";
// import Table from "./Table";

const StocksList = () => {
  const [stocks, setStocks] = useState([]);
  const { watchList } = useContext(WatchListContext);

  useEffect(() => {
    let controller = new AbortController();
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          watchList.map((stock) => {
            return finnhub.get("/quote", {
              params: {
                symbol: stock,
              },
              signal: controller.signal,
            });
          })
        );

        const Data = responses.map((response) => {
          return {
            data: response.data,
            symbol: response.config.params.symbol,
          };
        });
        setStocks(Data);
        console.log(Data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
    return () => {
      controller.abort();
    };
  }, [watchList]);

  return <div className="container">{/* <Table data={stocks} /> */}</div>;
};

export default StocksList;
