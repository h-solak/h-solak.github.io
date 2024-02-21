import React, { createContext, useEffect, useMemo, useState } from "react";
import theme from "../theme";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
/* Pages */
import Home from "./Pages/Home/Home";
import Layout from "./Layout/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
