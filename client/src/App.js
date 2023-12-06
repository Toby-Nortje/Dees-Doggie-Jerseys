import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "scenes/mainPage";
import HomePage from "scenes/homePage";
import StorePage from "scenes/storePage";
import AboutPage from "scenes/aboutPage";
import ContactPage from "scenes/contactPage";
import MainStorePage from "scenes/storePage/mainStorePage";
import StockPage from "scenes/storePage/stockPage";
import CustomPage from "scenes/storePage/customPage";
import PricePage from "scenes/storePage/pricePage";
import ItemPage from "scenes/storePage/itemPage";

import { useSelector } from "react-redux";
import { useMemo, useEffect } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import { themeSettings } from "./theme";

import ScrollToTop from "components/ScrollToTop";

function App() {
  const theme = createTheme(themeSettings());
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<MainPage />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route
                path="store"
                element={<StorePage />}
                //handle={{ crumb: () => <Link to="/store/stock">Stock</Link> }}
              >
                <Route index element={<MainStorePage />} />
                <Route
                  path="stock"
                  element={<StockPage />}
                  //handle={{ crumb: (data) => <span>{data.threadName}</span> }}
                />
                <Route path="stock/:id" element={<ItemPage />} />
                <Route path="custom" element={<CustomPage />} />
                <Route path="price" element={<PricePage />} />
              </Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
