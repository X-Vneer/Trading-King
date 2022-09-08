import React, { useEffect, useState } from "react";
import finnhub from "../Api/finnhub";
import { useParams } from "react-router-dom";
import ChartComponent from "../components/ChartComponent";

const formateData = (arr) => {
  return arr?.map((obj) => {
    return {
      [obj.dataType]: obj.data.t.map((ele, ind) => {
        return {
          x: ele * 1000,
          y: [
            Number(obj.data.o[ind].toFixed(3)),
            Number(obj.data.h[ind].toFixed(3)),
            Number(obj.data.l[ind].toFixed(3)),
            Number(obj.data.c[ind].toFixed(3)),
          ],
        };
      }),
    };
  });
};
const StockDetailsPage = () => {
  const id = useParams();

  const [chartData, setChartData] = useState({});

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
        const responses = await Promise.allSettled([
          finnhub.get("/stock/candle", {
            params: {
              symbol: id.id,
              resolution: 30,
              from: oneDayAgo,
              to: currentTime,
            },
            signal: controller.signal,
          }),
          finnhub.get("/stock/candle", {
            params: {
              symbol: id.id,
              resolution: 60,
              from: oneWeekAgo,
              to: currentTime,
            },
            signal: controller.signal,
          }),
          finnhub.get("/stock/candle", {
            params: {
              symbol: id.id,
              resolution: "D",
              from: oneMonthAgo,
              to: currentTime,
            },
            signal: controller.signal,
          }),
          finnhub.get("/stock/candle", {
            params: {
              symbol: id.id,
              resolution: "W",
              from: oneYearAgo,
              to: currentTime,
            },
            signal: controller.signal,
          }),
        ]);

        const unProcessedData = responses.map((response, ind) => {
          if (response.status === "fulfilled")
            return {
              dataType:
                ind === 0
                  ? "Day"
                  : ind === 1
                  ? "Week"
                  : ind === 2
                  ? "Month"
                  : ind === 3
                  ? "Year"
                  : "unKnown",
              data: response.value.data,
            };
        });
        const ProcessedData = unProcessedData.filter((ele) => ele);

        let Data = formateData(ProcessedData);
        setChartData(Data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [id.id]);

  console.log(
    "🚀 ~ file: StockDetailsPage.jsx ~ line 116 ~ StockDetailsPage ~ chartData",
    chartData
  );
  return (
    <div className="bg-gradient-to-r from-slate-300 to-[#f9f9f9] ">
      <div className="py-[100px]">
        <div className="container">
          {chartData.length > 0 && (
            <ChartComponent chartData={chartData} symbol={id.id} />
          )}
        </div>
      </div>
    </div>
  );
};

export default StockDetailsPage;
