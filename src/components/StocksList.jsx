import { useState, useEffect, useContext } from "react";
import { WatchListContext } from "../utils/ContextProvider";
import finnhub from "../Api/finnhub";
import Table from "./Table";

const StocksList = () => {
  const [stocks, setStocks] = useState([]);
  const { watchList, deleteStock } = useContext(WatchListContext);

  useEffect(() => {
    let controller = new AbortController();
    const fetchData = async () => {
      try {
        const responses = await Promise.allSettled(
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
          if (response.status === "rejected") return;
          return {
            data: response.value.data,
            symbol: response.value.config.params.symbol,
          };
        });
        const filterdData = Data.filter((ele, ind) => ele);

        setStocks(filterdData);
        console.log(filterdData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
    return () => {
      controller.abort();
    };
  }, [watchList]);

  return (
    <div className="bg-gradient-to-r from-slate-300 to-[#f9f9f9] pb-20">
      <div className="container">
        <div className=" overflow-x-scroll sm:overflow-auto py-5 ">
          <Table data={stocks} deleteStock={deleteStock} />
        </div>
      </div>
    </div>
  );
};

export default StocksList;
