import { Route, Routes } from "react-router-dom";
import StockOverviewPage from "./pages/StockOverViewPage";
import StockDetailsPage from "./pages/StockDetailsPage";
import { WatchListContextProvider } from "./utils/ContextProvider";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />

      <WatchListContextProvider>
        <Routes>
          <Route path="/Trading-King" element={<StockOverviewPage />} />
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
