import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: "40px",
      lineHeight: "48px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "28px",
      lineHeight: "36px",
      fontWeight: 500,
    },
    h3: {
      fontSize: "20px",
      lineHeight: "30px",
      fontWeight: 700,
    },
    h4: {
      fontSize: "18px",
      lineHeight: "28px",
      fontWeight: 500,
    },
    body1: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
    },
    body2: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
    },
    caption: {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 400,
    },
  },
  shadows: {
    sm: "0px 1px 2px 0px #101828 5%",
    md: "0px 1px 4px 0px #101828 15%",
    lg: "0px 1px 8px 0px #101828 25%",
  },
  shape: {
    borderRadius: {
      xs: "3px",
      sm: "6px",
      md: "6px",
      lg: "12px",
      xl: "24px",
    },
  },
  palette: {
    primary: {
      main:'#007AFF',
      secondary: '#7F56D9'
    }
  }
});
