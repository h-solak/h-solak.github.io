import { createTheme } from "@mui/material/styles";

/*
Theme:
https://colorhunt.co/palette/4a55a27895cba0bfe0c5dff8
*/
const theme = createTheme({
  palette: {
    primary: {
      main: "#0077B5",
      light: "#3D2C8D",
    },
    secondary: {
      //grey(ish)
      main: "#627285",
      light: "#62728550",
    },
    highlight: {
      //accent color - call to action (cta)
      main: "#03C4A1",
    },
  },
  typography: {
    fontFamily: ["Inter", "Roboto", "sans-serif", "Tsukimi Rounded"].join(","),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

export default theme;
