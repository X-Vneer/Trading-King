import { Route, Routes } from "react-router-dom";
import StockOverviewPage from "./pages/StockOverViewPage";
import StockDetailsPage from "./pages/StockDetailsPage";
import { WatchListContextProvider } from "./utils/ContextProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TradingKingAboutUs from "./pages/TradingKingAboutUs";
import TradingKingFlutterApp from "./pages/TradingKingFlutterApp";
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
          <Route
            path="/Trading-King/About-US"
            element={<TradingKingAboutUs />}
          />
          <Route
            path="/Trading-King/Flutter-App"
            element={<TradingKingFlutterApp />}
          />
        </Routes>
      </WatchListContextProvider>
      <Footer />
    </>
  );
}

export default App;
