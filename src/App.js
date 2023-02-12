import react, { useState } from "react";
import {
  CssBaseline,
  PaletteMode,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  ProductsPage,
  Page404,
  CheckOut,
} from "./pages";
import { darkTheme } from "./theme/darkThem";
import { lightThem } from "./theme/lightThem";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <>
      <ThemeProvider
        theme={!isDarkTheme ? createTheme(darkTheme) : createTheme(lightThem)}
      >
        <CssBaseline />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product" element={<ProductsPage />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
