
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


let theme = createTheme();

theme.typography.h6 = {
 
};
theme.typography.body1 = {
  fontFamily: "Railway, sans-serif",
  
  color: "rgb(92, 92, 138)",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: ".5rem",
  },
};
theme.typography.body2 = {

};
theme.typography.h5 = {
 
};
theme.typography.h2 = {
  
};
theme.typography.h1 = {
  fontFamily: "Railway, sans-serif",

  color: "black",
    fontWeight: "bold",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.6rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.4rem",
  },
};
theme.typography.h3 = {
 
};
theme.typography.h4 = {

};
export default theme;
