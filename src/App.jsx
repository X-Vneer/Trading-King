import { Route, Routes } from "react-router-dom";
import StockOverviewPage from "./pages/StockOverViewPage";
import StockDetailsPage from "./pages/StockDetailsPage";
import { WatchListContextProvider } from "./utils/ContextProvider";
function App() {
  return (
    <>
      <WatchListContextProvider>
        <Routes>
          <Route path="/" element={<StockOverviewPage />} />
          <Route
            path="/Trading-King/Details/:id"
            element={<StockDetailsPage />}
          />
        </Routes>
      </WatchListContextProvider>
    </>
  );
}

export default App;
