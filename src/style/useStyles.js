import { makeStyles } from "@material-ui/core/styles";

//CSS precedence bug in Material UI
//Fix:
// https://stackoverflow.com/questions/62473898/material-ui-rendering-bugs-in-production-build
// https://github.com/mui-org/material-ui/issues/16609

//TODO test in other browsers
export const useAppStyles = makeStyles({
  layout: {
    minHeight: "100vh",
    width: "100vw",
    pointerEvents: "none",
  },
  languageSwitch: {
    position: "fixed",
    top: "20px",
    marginLeft: "5vw",
    zIndex: 1,
  },
  languageBtn: {
    fontWeight: 600,

    "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.15)",
    }
  },
  languageBtnActive: {
    color: "var(--secondary) !important",
    backgroundColor: "rgba(255,255,255, 0.15)",
  },
  routerBtn: {
    border: "2px solid var(--primary)",
    fontWeight: 600,
    color: "var(--primary)",
    transition: "0.1s",
    boxShadow: "2px 2px 3px 0px rgba(0, 0, 0, 0.2)",
    backgroundColor: "rgba(255,255,255, 0.15)",

    "&:hover": {
      borderColor: "var(--secondary)",
      color: "var(--secondary)",
      backgroundColor: "inherit",
      boxShadow: "inset 1px 1px 3px rgba(0, 0, 0, 0.2)",
    },
  },
  pointer: {
    pointerEvents: "all",
    zIndex: 100,
    position: "relative",
  },
  link: {
    transition: "0.1s",
    color: "var(--primary)",

    "&:hover": {
      color: "var(--secondary)",
      textDecoration: "none",
    },
  },
  h1Mobile: {
    fontSize: "4rem",
    lineHeight: "3.5rem",
  },
  h2Mobile: {
    fontSize: "1.5rem",
  },
  firstName: {
    textTransform: "uppercase",
    letterSpacing: "0.18rem",
  },
  type: {
    animation: "typeFlicker 1s step-end infinite",
  },
}, {index: 1});

export const useBioStyles = makeStyles({
  leftPanel: {
    minWidth: "50vw",
    alignItems: "flex-start",
    color: "white",
    height: "100vh",
    position: "relative",
    padding: "4em 5vw",
    top: 0,
    left: 0,
    flexDirection: "column",
    flexWrap: "nowrap",
  },
  stickyPanelMobile: {
    position: "sticky",
  },
  stacksMobile: {
    minWidth: "100%",
    minHeight: "100vh",
    height: "100%"
  },
  skillsContainer: {
    maxWidth: "90vw",
  },
  hardSkill: {
    backgroundColor: "rgba(255,255,255, 0.15)",
    color: "white",
    margin: "0 5px 5px 0",
  },
  horizontalDivider: {
    width: "inherit",
    margin: "1rem 0",
  },
  socialContainer: {
    display: "inline-flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    margin: "2rem 0",

    "& > *": {
      margin: "0.5rem 0"
    }
  },
  verticalDivider: {
    margin: "0 1rem",
    height: "2rem"
  },
}, {index: 1});

export const useLinksStyles = makeStyles({
  rightPanel: {
    position: "relative",
    minWidth: "50vw",
    height: "100vh",

    "&>div": {
      width: "100%",
    }
  },
  topPanelMobile: {
    zIndex: 1,
  },
  btn: {
    transition: "0.1s",

    "&:hover": {
      fontWeight: 400,
      lineHeight: 3,
      backgroundColor: "var(--primary)",
      color: "white",
    },
  },
  btnDisabled: {
    color: "#878787",
  },
  capitalize: {
    textTransform: "none",
  },
  btnGroupMobile: {
    "& > *": {
      fontSize: "1.3rem",
    },
  },
  btnGroupTablet: {
    "& > *": {
      fontSize: "1.5rem",
    },
  },
  stacksMobile: {
    minWidth: "100%",
    height: "100vh",
  },
  rightPanelBg: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -2,
  }
}, {index: 1});


export const useResumeStyles = makeStyles({
  headerContainer: {
    minWidth: "100vw",
    paddingTop: "2.5rem",
    boxSizing: "border-box",
    position: "fixed",
    top: 0,
    marginBottom: "2.5rem",
  },
  headerText: {
    color: "white",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "max-content",
  },
  headerPlaceholder: {
    height: "40vh",
  },
  resumeContainer: {
    // background: "white",
    padding: "5rem 15vw",
    minWidth: "100vw",
    margin: "0",
    boxSizing: "border-box",
    // height: "calc(70vh - 2.5rem)",
    // overflow: "scroll",
    position: "relative",
    // bottom: 0,
    zIndex: 1,
  },
  resumeContainerBg: {
    backgroundColor: "white",
    width: "100vw",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -2,
  },
  pdfContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  pdfTitle: {
    color: "var(--primary)",
  },
  loader: {
    animation: "loader 1s linear infinite",
    color: "var(--primary)"
  },
  document: {
    boxShadow: "2px 2px 3px 0px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
  },
  textIcon: {
    verticalAlign: "middle",
  },
  badge: {
    objectFit: "none",
  },
}, {index: 1});