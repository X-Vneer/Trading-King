import React, { useState } from "react";
import Chart from "react-apexcharts";

const ChartComponent = ({ chartData, symbol }) => {
  const [dataFor, setDataFor] = useState("24h");

  const [{ Day }, { Week }, { Month }, { Year }] = chartData;
  const dataSwitch = () => {
    switch (dataFor) {
      case "24h":
        return Day;
      case "7d":
        return Week;
      case "1m":
        return Month;
      case "1y":
        return Year;
      default:
        return Day;
    }
  };

  const options = {
    title: {
      text: symbol,
      align: "center",

      style: {
        fontSize: "24px",
      },
    },
    chart: {
      id: "Stock data",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 1200,
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        datetimeUTC: false,
      },
    },
    tooltip: {
      x: {
        format: "MMM dd HH:MM",
      },
    },
    noData: {
      text: "Loading...",
    },
  };
  const series = [
    {
      name: symbol,
      data: dataSwitch(),
    },
  ];
  return (
    <div className="w-full mx-auto lg:w-[70%]">
      <Chart
        options={options}
        series={series}
        type="candlestick"
        width="100%"
      />
      <div className="flex gap-3  mt-5 ml-5">
        <button
          className="border border-blue-500 p-1 rounded-lg min-w-[40px] text-gray-700 text-sm font-bold hover:bg-blue-500 hover:text-white transition-all duration-200 "
          onClick={() => setDataFor("24h")}
        >
          24H
        </button>
        <button
          className="border border-blue-500 p-1 rounded-lg min-w-[40px] text-gray-700 text-sm font-bold hover:bg-blue-500 hover:text-white transition-all duration-200 "
          onClick={() => setDataFor("7d")}
        >
          7D
        </button>
        <button
          className="border border-blue-500 p-1 rounded-lg min-w-[40px] text-gray-700 text-sm font-bold hover:bg-blue-500 hover:text-white transition-all duration-200 "
          onClick={() => setDataFor("1m")}
        >
          1M
        </button>
        <button
          className="border border-blue-500 p-1 rounded-lg min-w-[40px] text-gray-700 text-sm font-bold hover:bg-blue-500 hover:text-white transition-all duration-200 "
          onClick={() => setDataFor("1y")}
        >
          1Y
        </button>
      </div>
    </div>
  );
};

export default ChartComponent;
