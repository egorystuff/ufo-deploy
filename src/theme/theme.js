import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#241063",
    },
    secondary: {
      main: "#ff5c1d",
    },
    secondaryText: {
      main: "#999999",
    },
    primaryBg: {
      main: "#F5F5F5",
      secondary: "#DFDFDF",
    },
  },
  typography: {
    fontFamily: ["Circular Std", "sans-serif"].join(","),
  },
});

export default theme;
