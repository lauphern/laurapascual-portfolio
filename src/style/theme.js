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
    fontFamily: ["Source Code Pro", "monospace"].join(","),
    body1: {
      fontWeight: 600,
    },
    h1: {
      fontFamily: ["Heebo", "Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
      fontWeight: 400,
      fontSize: "6rem",
      letterSpacing: "-0.265rem",
      lineHeight: "5rem",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 400,
    },
  },
});
