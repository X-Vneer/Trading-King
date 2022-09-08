import React, { useEffect, useState } from "react";
import finnhub from "../Api/finnhub";
import { useParams } from "react-router-dom";

const StockDetailsPage = () => {
  const id = useParams();
  useEffect(() => {
    let controller = new AbortController();

    const fetchData = async () => {
      try {
        const currentDate = new Date();
        const currentTime = Math.floor(currentDate.getTime() / 1000);
        let oneDayAgo;
        if (currentDate.getDay() === 6) {
          oneDayAgo = currentTime - 2 * 60 * 60 * 24;
        } else if (currentDate.getDay() === 0) {
          oneDayAgo = currentTime - 3 * 60 * 60 * 24;
        } else {
          oneDayAgo = currentTime - 60 * 60 * 24;
        }
        const oneWeekAgo = currentTime - 7 * 60 * 60 * 24;
        const oneMonthAgo = currentTime - 30 * 60 * 60 * 24;
        const oneYearAgo = currentTime - 365 * 60 * 60 * 24;
        const responsDay = await finnhub.get("/stock/candle", {
          params: {
            symbol: id.id,
            resolution: 30,
            from: oneDayAgo,
            to: currentTime,
          },
          signal: controller.signal,
        });
        console.log("this is one day response", responsDay.data);

        const responsWeek = await finnhub.get("/stock/candle", {
          params: {
            symbol: id.id,
            resolution: 60,
            from: oneWeekAgo,
            to: currentTime,
          },
          signal: controller.signal,
        });
        console.log("this is one week response", responsWeek.data);

        const responsMonth = await finnhub.get("/stock/candle", {
          params: {
            symbol: id.id,
            resolution: 60,
            from: oneMonthAgo,
            to: currentTime,
          },
          signal: controller.signal,
        });
        console.log("this is one month response", responsMonth.data);

        const responsYear = await finnhub.get("/stock/candle", {
          params: {
            symbol: id.id,
            resolution: "D",
            from: oneYearAgo,
            to: currentTime,
          },
          signal: controller.signal,
        });
        console.log("this is one year response", responsYear.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return <div>StockDetailsPage</div>;
};

export default StockDetailsPage;
