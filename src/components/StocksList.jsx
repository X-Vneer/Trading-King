import React from "react";
import { useState, useEffect } from "react";
import finnhub from "../Api/finnhub";
import Table from "./Table";

const StocksList = () => {
  const [stocks, setStocks] = useState([]);
  const [watchList, setWatchList] = useState(["MSFT", "AMZN", "GOOGL"]);

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
  }, []);

  return <div className="container">{/* <Table data={stocks} /> */}</div>;
};

export default StocksList;
