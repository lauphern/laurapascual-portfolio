import { makeStyles } from "@material-ui/core/styles";

export const useAppStyles = makeStyles(() => ({
  layout: {
    minHeight: "100vh",
    width: "100vw",
    flexWrap: "nowrap",
  },
  mainContainer: {
    position: "absolute",
    pointerEvents: "none",
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
  }
}));

export const useBioStyles = makeStyles(() => ({
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
    flexWrap: "nowrap"
  },
  stacksMobile: {
    minWidth: "100%",
    minHeight: "100vh",
    height: "100%"
  },
  languageSwitch: {
    position: "absolute",
    top: "20px",
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
  languageBtn: {
    fontWeight: 400,

    "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.15)",
    }
  },
  languageBtnActive: {
    color: "var(--secondary)",
    backgroundColor: "rgba(255,255,255, 0.15)",
  },
  h1Mobile: {
    fontSize: "4rem",
    lineHeight: "3.5rem",
  },
  firstName: {
    textTransform: "uppercase",
    letterSpacing: "0.18rem",
  },
  h2Mobile: {
    fontSize: "1.75rem",
  },
  type: {
    animation: "typeFlicker 1s step-end infinite",
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
  skillsContainer: {
    maxWidth: "90vw",
  },
  hardSkill: {
    backgroundColor: "rgba(255,255,255, 0.15)",
    color: "white",
    // color: "var(--primary)",
    margin: "0 5px 5px 0",
    // fontWeight: 600,
    // fontSize: "0.9rem",
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
}));

export const useLinksStyles = makeStyles(() => ({
  rightPanel: {
    backgroundColor: "white",
    minWidth: "50vw",
    height: "100vh"
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
  pointer: {
    pointerEvents: "all",
    zIndex: 100,
    position: "relative",
  },
  btnGroupMobile: {
    "& > *": {
      fontSize: "1.5rem",
    },
  },
  btnMobile: {
    borderBottom: "1px solid var(--bg-color) !important",
  },
  stacksMobile: {
    minWidth: "100%",
    height: "100vh",
  },
}));


export const useResumeStyles = makeStyles(() => ({
  headerContainer: {
    width: "100vw",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "2.5rem",
    maxHeight: "30vh",
    boxSizing: "border-box",
    color: "white",
  },
  headerText: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "max-content",
  },
  resumeContainer: {
    background: "white",
    padding: "5rem 5rem 0",
    width: "70vw",
    marginTop: "2.5rem",
    boxSizing: "border-box",
    height: "calc(70vh - 2.5rem)",
    overflow: "scroll",
    position: "relative",
    bottom: 0,
    borderRadius: "0.5rem 0.5rem 0 0",
    boxShadow: "0px 50px 10px 3px rgba(0, 0, 0, 0.2)",
  },
  pdfContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
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
  badge: {
    objectFit: "none",
  }
}));