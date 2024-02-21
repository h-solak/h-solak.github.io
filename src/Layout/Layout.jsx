import { Box, Grid } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";

const Layout = ({ children }) => {
  return (
    <Box
      id="home"
      className="layout"
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#ededed",
      }}
    >
      <Navbar />
      <Grid container paddingX={4} paddingY={4} justifyContent={"center"}>
        <Grid item xs={12} sm={8} md={6}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
