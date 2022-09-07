import { Route, Routes } from "react-router-dom";
import StockOverviewPage from "./pages/StockOverViewPage";
import StockDetailsPage from "./pages/StockDetailsPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StockOverviewPage />} />
        <Route
          path="/Trading-King/Details/:id"
          element={<StockDetailsPage />}
        />
      </Routes>
    </>
  );
}

export default App;
