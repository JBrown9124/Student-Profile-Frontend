import { createTheme } from "@mui/material/styles";

let theme = createTheme();

theme.typography.body1 = {
  fontFamily: "Raleway, sans-serif",

  color: "rgb(66, 61, 61)",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.0rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: ".5rem",
  },
};
theme.typography.h1 = {
  fontFamily: "Raleway, sans-serif",

  color: "black",
  fontWeight: "bold",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.6rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.0rem",
  },
};

export default theme;
