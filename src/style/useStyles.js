import { makeStyles } from "@material-ui/core/styles";

//CSS precedence bug in Material UI
//Fix:
// https://stackoverflow.com/questions/62473898/material-ui-rendering-bugs-in-production-build
// https://github.com/mui-org/material-ui/issues/16609

//TODO test in other browsers
export const useAppStyles = makeStyles(
  {
    layout: {
      minHeight: "100vh",
      width: "100vw",
    },
    languageSwitch: {
      position: "fixed",
      top: "20px",
      marginLeft: "5vw",
      zIndex: 1,
    },
    languageBtn: {
      fontWeight: 600,
      color: "white",

      "&:hover": {
        backgroundColor: "rgba(255,255,255, 0.7)",
        color: "var(--primary)",
      },
    },
    languageBtnActive: {
      color: "var(--primary) !important",
      backgroundColor: "rgba(255,255,255, 0.7)",
    },
    routerBtn: {
      color: "white",
      fontWeight: 600,
      transition: "0.1s",
      boxShadow: "2px 2px 3px 0px rgba(0, 0, 0, 0.2)",
      backgroundColor: "var(--accent)",

      "&:hover": {
        backgroundColor: "var(--accent)",
        boxShadow: "inset 2px 2px 3px rgba(0, 0, 0, 0.2)",
      },
    },
    secondaryBtn: {
      color: "var(--accent)",
      fontWeight: 600,
      transition: "0.1s",
      boxShadow: "2px 2px 3px 0px rgba(0, 0, 0, 0.2)",
      backgroundColor: "white",
      textTransform: "capitalize",

      "&:hover": {
        boxShadow: "inset 2px 2px 3px rgba(0, 0, 0, 0.2)",
        backgroundColor: "white",
      },
    },
    link: {
      color: "white",

      "&:hover": {
        color: "var(--accent)",
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
    sourceCodeBtn: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      bottom: 0,
      right: 0,
      padding: "0.5rem 1rem !important",
      margin: "2rem",
      zIndex: 2,

      "& > span": {
        textAlign: "center",
        lineHeight: "initial",
        fontSize: "0.75rem",
      },
    },
    numericalLoader: {
      zIndex: 3,
      opacity: 1,
      visibility: "visible",
      transition: "all 0.5s 1s",
      backgroundColor: "var(--primary)",
      width: "100vw",
      height: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      fontFamily: '"Heebo", "Roboto", "Helvetica", "Arial", "sans-serif"',
      fontWeight: 400,
      fontSize: "5rem",

      "& > p": {
        color: "var(--accent)",
        textAlign: "right",
        marginRight: "45vw",

        "& > span": {
          color: "white",
        },
      },
    },
    numericalLoaderMobile: {
      justifyContent: "center",
      "& > p": {
        marginRight: "0vw",
      },
    },
  },
  { index: 1 }
);

export const useBioStyles = makeStyles(
  theme => ({
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
      height: "100%",
    },
    skillsContainer: {
      maxWidth: "90vw",
    },
    hardSkill: {
      cursor: "url('/cursor.png'), auto",
      backgroundColor: "rgba(255,255,255, 0.2)",
      color: "white",
      margin: "0 5px 5px 0",

      "&:hover": {
        color: "var(--primary)",
        backgroundColor: "rgba(255,255,255, 0.7)",
      },
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
        margin: "0.5rem 0",
        fontWeight: 600,
      },
    },
    verticalDivider: {
      margin: "0 1rem",
      height: "2rem",
    },
    skillsModal: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    skillsContainerMobile: {
      backgroundColor: "var(--primary)",
      maxWidth: "80vw",
      maxHeight: "90vh",
      padding: "1rem",
      borderRadius: "0.25rem",
    },
  }),
  { index: 1 }
);

export const useLinksStyles = makeStyles(
  {
    rightPanel: {
      flexDirection: "column",
      position: "relative",
      minWidth: "50vw",
      height: "100vh",

      "&>div": {
        width: "100%",
      },
    },
    topPanelMobile: {
      zIndex: 1,
    },
    btn: {
      transition: "0.1s",

      "&:hover": {
        fontWeight: 400,
        lineHeight: 3,
        backgroundColor: "var(--accent)",
        color: "white",
      },
    },
    btnDisabled: {
      color: "#878787",
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
    },
  },
  { index: 1 }
);

export const useResumeStyles = makeStyles(
  theme => ({
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
      width: "fit-content",
      padding: "0 2rem",
    },
    headerPlaceholder: {
      height: "40vh",
    },
    resumeContainer: {
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
      padding: "2rem",
      minWidth: "100vw",
      minHeight: "100vh",
      margin: "0",
      boxSizing: "border-box",
      position: "relative",
      zIndex: 1,
    },
    resumeContainerMobile: {
      padding: "5rem 1rem",
    },
    pdfSection: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    },
    pdfSectionMobile: {
      display: "grid",
      gridTemplateRows: "auto auto",
    },
    pdfTextContainer: {
      "& > *": {
        marginBottom: "1rem",
      },
    },
    pdfContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    pdfTitle: {
      color: "var(--primary)",
    },
    loader: {
      animation: "loader 1s linear infinite",
      color: "var(--accent)",
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
      width: "auto",
    },
    pdfNav: {
      marginBottom: "2rem",
    },
    docsContainer: {
      display: "flex",
    },
    resumeTitle: {
      display: "inline-flex",
      alignItems: "flex-end",
    },
    drawerContainer: {
      [theme.breakpoints.up("sm")]: {
        width: "25vw",
        flexShrink: 0,
      },
    },
    drawerPaper: {
      position: "relative",
      width: "25vw",
    },
    drawerPaperMobile: {
      width: "50vw",
    },
    showDrawerBtn: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    endpointsContainer: {
      flexGrow: 1,
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
    },
  }),
  { index: 1 }
);
