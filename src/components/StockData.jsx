import React from "react";
import finnhub from "../Api/finnhub";
import { useState, useEffect } from "react";

const StockData = ({ symbol }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    let controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await finnhub.get("/stock/profile2", {
          params: {
            symbol: symbol,
          },
          signal: controller.signal,
        });
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [symbol]);

  return (
    data.name && (
      <div className="flex flex-wrap p-5 mt-10 gap-3 justify-between items-start text-left capitalize  stock-info text-sm">
        <div className="px-2  border-l-gray-600 border-l-4">
          <p>
            name: <span className="font-semibold ">{data.name}</span>
          </p>
          <p>
            country: <span className="font-semibold ">{data.country}</span>
          </p>
          <p>
            ticker: <span className="font-semibold ">{data.ticker}</span>
          </p>
        </div>
        <div className="px-2  border-l-gray-600 border-l-4">
          <p>
            exchange: <span>{data.exchange}</span>
          </p>
          <p>
            Industry: <span>{data.finnhubIndustry}</span>
          </p>
          <p>
            IPO: <span>{data.ipo}</span>
          </p>
        </div>
        <div className="px-2  border-l-gray-600 border-l-4">
          <p>
            market Cap: <span>{data.marketCapitalization}</span>
          </p>
          <p>
            share Outstanding: <span>{data.shareOutstanding}</span>
          </p>
          <p>
            <a
              className=" font-bold text-blue-600"
              target="_blank"
              href={data.weburl}
            >
              Official website
            </a>
          </p>
        </div>
      </div>
    )
  );
};

export default StockData;
