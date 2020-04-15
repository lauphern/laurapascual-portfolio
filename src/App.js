import React, { useState, useEffect } from "react";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  Container,
  Typography,
  ButtonGroup,
  Button,
  Link,
  Grid,
} from "@material-ui/core";
import "./App.scss";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        fontWeight: 300,
        fontSize: "2rem",
      },
    },
  },
  typography: {
    // fontFamily: ["BioRhyme", "serif"].join(","),
    fontFamily: ["Source Code Pro", "monospace"].join(","),
    body1: {
      fontWeight: 600,
      // fontSize: "1.25rem"
      // lineHeight: "2.5rem"
    },
    h1: {
      fontFamily: ["Heebo", "Roboto", "Helvetica", "Arial", "sans-serif"].join(
        ","
      ),
      fontWeight: 400,
      fontSize: "6rem",
      letterSpacing: "-0.265rem",
      lineHeight: "5rem",
      // marginBottom: "3rem"
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 300,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  layout: {
    minHeight: "100vh",
    width: "100vw",
  },
  mainContainer: {
    position: "absolute",
    pointerEvents: "none",
  },
  leftPanel: {
    // zIndex: -2,
    // background: "#bbc4c7",
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
    top: "20px"
  },
  languageBtn: {
    fontWeight: 900,
  },
  languageBtnActive: {
    color: "yellow",
    backgroundColor: "rgba(0, 0, 0, 0.04)"
  }
}));


function cursorEffect() {
  document.querySelector(".hover-container").onmousemove = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty("--x", `${x}px`);
    e.target.style.setProperty("--y", `${y}px`);
  };
}

const translations = {
  en: {
    subtitle: "Full-stack developer",
    linkedin:
      "https://www.linkedin.com/in/laura-pascual-hernandez/?locale=en_US",
  },
  es: {
    subtitle: "Desarrolladora Full-stack",
    linkedin:
      "https://www.linkedin.com/in/laura-pascual-hernandez/?locale=es_ES",
  },
};

function App() {
  const [lang, setLang] = useState("es")
  const classes = useStyles();
  useEffect(() => {
    cursorEffect();
  });
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <div className="App">
      <div className="hover-container"></div>
      <ThemeProvider theme={theme}>
        <Container
          className={`${classes.mainContainer} ${classes.layout}`}
          disableGutters
        >
          <Grid
            className={classes.layout}
            container
            alignContent="center"
            justify="space-between"
          >
            <Grid
              item
              xs={12}
              sm={6}
              className={classes.leftPanel}
              container
              justify="center"
            >
              <ButtonGroup
                variant="text"
                size="small"
                className={classes.languageSwitch}
              >
                <Button onClick={()=>setLang("en")} className={`${classes.pointer} ${classes.link} ${classes.languageBtn} ${lang === "en" && classes.languageBtnActive}`}>EN</Button>
                <Button onClick={()=>setLang("es")} className={`${classes.pointer} ${classes.link} ${classes.languageBtn} ${lang === "es" && classes.languageBtnActive}`}>ES</Button>
              </ButtonGroup>
              <Typography variant="h1">
                <span className={classes.firstName}>Laura</span>
                <br />
                Pascual
              </Typography>
              <Typography variant="h2">{translations[lang].subtitle}</Typography>
              <Typography variant="body1">
                <Link
                  className={`${classes.pointer} ${classes.link}`}
                  href="mailto:laura.pascual.h@hotmail.com"
                >
                  Email
                </Link>{" "}
              </Typography>
              <Typography variant="body1">
                <Link
                  className={`${classes.pointer} ${classes.link}`}
                  href="https://github.com/lauphern"
                  target="_blank"
                  rel="noopener"
                >
                  Github
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link
                  className={`${classes.pointer} ${classes.link}`}
                  href={translations[lang].linkedin}
                  target="_blank"
                  rel="noopener"
                >
                  Linkedin
                </Link>
              </Typography>
              <div className="leftPanel-bg"></div>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sm={6}
              alignContent="center"
              justify="flex-end"
            >
              <ButtonGroup orientation="vertical" fullWidth>
                <Button
                  variant="text"
                  className={`${classes.btn} ${classes.pointer}`}
                  href="https://time4time-demo.netlify.com/"
                  target="_blank"
                >
                  Time 4 Time 2.0
                </Button>
                <Button
                  variant="text"
                  className={`${classes.btn} ${classes.pointer}`}
                  href="https://textures-muidemo.netlify.com/"
                  target="_blank"
                >
                  Textures -&nbsp;
                  <span className={classes.capitalize}>Material-UI demo</span>
                </Button>
                <Button
                  variant="text"
                  className={`${classes.btn} ${classes.pointer}`}
                  href="https://svg-css-animations.netlify.com/"
                  target="_blank"
                >
                  SVG & CSS animations
                </Button>
                <Button
                  variant="text"
                  className={`${classes.btn} ${classes.pointer}`}
                  href="https://where-is-home.netlify.com/"
                  target="_blank"
                >
                  Three.js&nbsp;<span className={classes.capitalize}>demo</span>
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
