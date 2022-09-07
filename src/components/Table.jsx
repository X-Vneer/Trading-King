import React from "react";

const Table = ({ data }) => {
  return (
    <table className="table-auto border mx-auto rounded-2xl">
      <thead className="rounded-xl">
        <tr className=" bg-gray-100">
          <th className="px-4 py-2 capitalize text-bold">Name</th>
          <th className="px-4 py-2 capitalize text-bold">Last</th>
          <th className="px-4 py-2 capitalize text-bold">Chg</th>
          <th className="px-4 py-2 capitalize text-bold">Chg%</th>
          <th className="px-4 py-2 capitalize text-bold">High</th>
          <th className="px-4 py-2 capitalize text-bold">Low</th>
          <th className="px-4 py-2 capitalize text-bold">Open</th>
          <th className="px-4 py-2 capitalize text-bold">Pclose</th>
        </tr>
      </thead>
      <tbody>
        {data.map((Stock, ind) => {
          return (
            <tr key={Stock.symbol} className="border border-b">
              <th className="bg-gray-100 px-4 py-2 capitalize text-bold ">
                {Stock.symbol}
              </th>
              <td className="px-4 py-2 capitalize text-bold ">
                {Stock.data?.c}
              </td>
              <td className="px-4 py-2 capitalize text-bold ">
                {Stock.data?.d}
              </td>
              <td className="px-4 py-2 capitalize text-bold ">
                {Stock.data?.dp}
              </td>
              <td className="px-4 py-2 capitalize text-bold ">
                {Stock.data?.h}
              </td>
              <td className="px-4 py-2 capitalize text-bold ">
                {Stock.data?.l}
              </td>
              <td className="px-4 py-2 capitalize text-bold ">
                {Stock.data?.o}
              </td>
              <td className="px-4 py-2 capitalize text-bold ">
                {Stock.data?.pc}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
