import { useNavigate } from "react-router-dom";

const Table = ({ data, deleteStock }) => {
  const navigate = useNavigate();
  const handleNavigate = (symbol) => {
    navigate(`/Trading-King/Details/${symbol}`);
  };

  return (
    <table className="table-auto shadow-md border mx-auto rounded-lg overflow-hidden">
      <thead>
        <tr className=" bg-slate-50">
          <th className="px-4 py-4 capitalize text-bold">Name</th>
          <th className="px-4 py-4 capitalize text-bold">Last</th>
          <th className="px-4 py-4 capitalize text-bold">Chg</th>
          <th className="px-4 py-4 capitalize text-bold">Chg%</th>
          <th className="px-4 py-4 capitalize text-bold">High</th>
          <th className="px-4 py-4 capitalize text-bold">Low</th>
          <th className="px-4 py-4 capitalize text-bold">Open</th>
          <th className="px-4 py-4 capitalize text-bold">Pclose</th>
          <th className="px-4 py-4 capitalize text-bold">D/btn</th>
        </tr>
      </thead>
      <tbody>
        {data.map((Stock, ind) => {
          return (
            <tr
              onClick={() => handleNavigate(Stock?.symbol)}
              key={Stock.symbol || ind}
              className="border group border-b bg-gray-50 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
            >
              <th className="bg-gray-100 px-4 py-3 capitalize font-semibold text-gray-600 ">
                {Stock.symbol}
              </th>
              <td className="px-4 py-3 text-sm md:text-base bold ">
                {Stock.data?.c}
              </td>
              <td
                className={`px-4 py-3 text-sm md:text-base font-bold ${
                  Stock.data?.d > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {Stock.data?.d}
              </td>
              <td
                className={`px-4 py-3 text-sm md:text-base font-bold ${
                  Stock.data?.d > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {Stock.data?.dp}
              </td>
              <td className="px-4 py-3 text-sm md:text-base ">
                {Stock.data?.h}
              </td>
              <td className="px-4 py-3 text-sm md:text-base ">
                {Stock.data?.l}
              </td>
              <td className="px-4 py-3 text-sm md:text-base ">
                {Stock.data?.o}
              </td>
              <td className="px-4 py-3 text-sm md:text-base ">
                {Stock.data?.pc}
              </td>
              <td className="px-1 py-2  ">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteStock(Stock.symbol);
                  }}
                  className="bg-red-500 hover:bg-red-600 hover:shadow-md transition-all  text-sm text-white font-semibold md:text-base px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
