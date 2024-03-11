import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

const Layout = ({ children }) => {
  return (
    <Box
      id="home"
      className="layout"
      sx={{
        width: "100vw",
        minHeight: "100dvh",
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

// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import FolderIcon from "@mui/icons-material/Folder";
// import RestoreIcon from "@mui/icons-material/Restore";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// <BottomNavigation
//         sx={{
//           width: 500,

//           position: "fixed",
//           bottom: 0,
//         }}
//         value={"recents"}
//         onChange={() => null}
//       >
//         <BottomNavigationAction
//           label="Recents"
//           value="recents"
//           icon={<RestoreIcon />}
//         />
//         <BottomNavigationAction
//           label="Favorites"
//           value="favorites"
//           icon={<FavoriteIcon />}
//         />
//         <BottomNavigationAction
//           label="Nearby"
//           value="nearby"
//           icon={<LocationOnIcon />}
//         />
//         <BottomNavigationAction
//           label="Folder"
//           value="folder"
//           icon={<FolderIcon />}
//         />
//       </BottomNavigation>
