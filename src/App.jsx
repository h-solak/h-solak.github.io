import React, { createContext, useEffect, useMemo, useState } from "react";
import theme from "../theme";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* Pages */
import Home from "./Pages/Home/Home";
import Layout from "./Layout/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route key="Home" path="/" element={<Home />} />
            <Route
              key="NotFound"
              path="*"
              element={<div>Bruh PAGE NOT FOUND</div>}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
