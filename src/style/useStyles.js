import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  layout: {
    minHeight: "100vh",
    width: "100vw",
  },
  mainContainer: {
    position: "absolute",
    pointerEvents: "none",
  },
  leftPanel: {
    color: "white",
    height: "100vh",
    position: "relative",
    padding: "0 5vw",
    top: 0,
    left: 0,
    flexDirection: "column",
  },
  firstName: {
    textTransform: "uppercase",
    letterSpacing: "0.18rem",
  },
  link: {
    transition: "0.1s",
    color: "#b5f9ff",

    "&:hover": {
      color: "yellow",
    },
  },
  btn: {
    transition: "0.1s",

    "&:hover": {
      fontWeight: 400,
      lineHeight: 3,
    },
  },
  btnDisabled: {
    color: "#878787",
  },
  capitalize: {
    textTransform: "none",
  },
  pointer: {
    pointerEvents: "all",
    zIndex: 100,
    position: "relative",
  },
  languageSwitch: {
    position: "absolute",
    top: "20px",
  },
  languageBtn: {
    fontWeight: 900,
  },
  languageBtnActive: {
    color: "yellow",
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
  h1Mobile: {
    fontSize: "4rem",
    lineHeight: "3.5rem",
  },
  h2Mobile: {
    fontSize: "1.75rem",
  },
  btnGroupMobile: {
    "& > *": {
      fontSize: "1.5rem",
    },
  },
  btnMobile: {
    borderBottom: "1px solid #bbc4c7 !important",
  },
  stacksMobile: {
    minWidth: "100%",
    height: "100vh",
  },
  expandMoreIcon: {
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
    color: "white",
    "& > *": {
      fontSize: "4rem",
    },
  },
}));
