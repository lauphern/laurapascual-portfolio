import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        fontWeight: 300,
        fontSize: "2rem",
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: "0.8125rem",
      }
    }
  },
  typography: {
    fontFamily: ["Heebo", "Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    h1: {
      fontWeight: 400,
      fontSize: "6rem",
      letterSpacing: "-0.265rem",
      lineHeight: "5rem",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 400,
    },
    h3: {
      fontSize: "1.5rem",
    },
    h4: {
      fontSize: "1.25rem",
    },
  },
});
