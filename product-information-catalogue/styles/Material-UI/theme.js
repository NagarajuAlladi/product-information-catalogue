import { createTheme } from "@mui/material/styles"
import palette from "./palette";
import typography from "./typography";
import components from "./components";

const theme = createTheme({
  palette,
  typography,
  components,
  breakpoints: {
    values: {
      xs: 399,
      sm: 600,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  spacing: 4,
})

export default theme;

