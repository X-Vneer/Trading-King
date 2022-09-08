import React from "react";
import { useState, useEffect } from "react";
import finnhub from "../Api/finnhub";
import { useContext } from "react";
import { WatchListContext } from "../utils/ContextProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const SearchBar = () => {
  const MySwal = withReactContent(Swal);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { addStock } = useContext(WatchListContext);

  useEffect(() => {
    let controller = new AbortController();

    const fetchData = async () => {
      if (search.length === 0) return setSearchResults([]);
      try {
        const response = await finnhub.get("/search", {
          params: {
            q: search,
          },
          signal: controller.signal,
        });
        setSearchResults(
          response.data.result.filter((ele) => {
            return ele.symbol.split(".").length === 1;
          })
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [search]);

  const floatingLabel =
    "absolute -top-6 left-1 peer transition-all duration-300  font-semibold text-[#c544fc] text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-4 ";
  const dropmenu =
    "relative  transition-all shadow-md  duration-300 mx-auto w-[250px] sm:w-[350px]  h-[250px] overflow-y-scroll bg-[#f9f9f9] p-4 rounded-lg  ";

  return (
    <section className="py-[50px] bg-gradient-to-r from-slate-300 to-[#f9f9f9] h-[200px] ">
      <div className="container flex justify-center items-center gap-3 ">
        <div className="relative">
          <input
            className="peer w-[250px] sm:w-[350px] px-4 py-2 rounded-lg placeholder-transparent focus:outline-none focus:ring-2 ring-[#c544fc] transition-all duration-300"
            type="search"
            id="search"
            autoComplete="off"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <label className={floatingLabel} htmlFor="search">
            Search
          </label>
        </div>
      </div>
      <ul
        className={
          dropmenu +
          `${searchResults?.length > 0 ? "z-10 top-1" : "-z-[1] top-20"}`
        }
      >
        {searchResults?.map((ele, ind) => {
          return (
            <li
              onClick={() => {
                addStock(ele.symbol);
                setSearch("");
                MySwal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${ele.description.toLowerCase()} was added to your watch list successfully`,
                  showConfirmButton: false,
                  timer: 2500,
                });
              }}
              key={ind}
              className="py-3 hover:bg-gray-200 px-1 transition-all border-b border-b-[#203446] flex gap-2 cursor-pointer items-center capitalize"
            >
              <span className="text-sm">{ele.description.toLowerCase()}</span>{" "}
              <span className="basis-[110px] font-semibold"> {ele.symbol}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SearchBar;
