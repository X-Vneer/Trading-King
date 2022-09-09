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
    chart: {
      id: "Stock data",
      background: "#ffffffb3",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 1200,
      },

      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true | '<img src="/static/icons/reset.png" width="20">',
          customIcons: [],
        },
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
        format: "MMM dd hh:MM TT",
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
    <div className="w-full mx-auto lg:w-[70%] p-5 rounded-xl shadow-lg bg-[rgba(255,255,255,.7)]  backdrop-blur-md ">
      <h1 className="text-[25px] font-[900] text-gradient text-center mb-4 ">
        {symbol}
      </h1>
      <Chart
        options={options}
        series={series}
        type="candlestick"
        width="100%"
      />
      <div className="flex gap-3  mt-5 ml-5 text-gray-700">
        <button
          className={` chart-button ${
            dataFor === "24h" && "bg-blue-600 text-white"
          }`}
          onClick={() => setDataFor("24h")}
        >
          24H
        </button>
        <button
          className={` chart-button ${
            dataFor === "7d" && "bg-blue-600 text-white"
          }`}
          onClick={() => setDataFor("7d")}
        >
          7D
        </button>
        <button
          className={` chart-button ${
            dataFor === "1m" && "bg-blue-600 text-white"
          }`}
          onClick={() => setDataFor("1m")}
        >
          1M
        </button>
        <button
          className={` chart-button ${
            dataFor === "1y" && "bg-blue-600 text-white"
          }`}
          onClick={() => setDataFor("1y")}
        >
          1Y
        </button>
      </div>
    </div>
  );
};

export default ChartComponent;
